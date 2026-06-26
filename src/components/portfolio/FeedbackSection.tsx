import { useState, useEffect } from "react";
import { ArrowRight, Star } from "lucide-react";

type Feedback = {
  quote: string;
  name: string;
  project: string;
  stars: number;
};

const defaultFeedbacks: Feedback[] = [
  {
    quote: "Alan entregou o projeto dentro do prazo com qualidade acima do esperado. Comunicação excelente durante todo o processo.",
    name: "Cliente",
    project: "Delicatta Joalheria",
    stars: 5,
  },
  {
    quote: "Profissional dedicado e comprometido. Entendeu exatamente o que precisávamos e desenvolveu uma solução robusta.",
    name: "Cliente",
    project: "Aurea Essentials",
    stars: 5,
  },
  {
    quote: "Resolve problemas com clareza e sempre sugere melhorias. Recomendo sem hesitar.",
    name: "Cliente",
    project: "Assistência Técnica",
    stars: 5,
  },
];

const STORAGE_KEY = "portfolio_feedbacks";

function StarDisplay({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${i < count ? "fill-foreground text-foreground" : "text-border"}`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i + 1)}
          onMouseEnter={() => setHovered(i + 1)}
          onMouseLeave={() => setHovered(0)}
          className="p-0.5"
        >
          <Star
            className={`h-4 w-4 transition-colors ${
              i < (hovered || value) ? "fill-foreground text-foreground" : "text-border"
            }`}
            strokeWidth={1.5}
          />
        </button>
      ))}
      {value > 0 && (
        <span className="ml-1 text-[10px] text-muted-foreground font-display">{value}/5</span>
      )}
    </div>
  );
}

export function FeedbackSection() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(defaultFeedbacks);
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [stars, setStars] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed: Feedback[] = JSON.parse(stored);
      setFeedbacks([...defaultFeedbacks, ...parsed]);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (stars === 0) return;

    const newFeedback: Feedback = {
      quote: message,
      name,
      project: project || "Visitante",
      stars,
    };

    const stored = localStorage.getItem(STORAGE_KEY);
    const existing: Feedback[] = stored ? JSON.parse(stored) : [];
    const updated = [...existing, newFeedback];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    setFeedbacks([...defaultFeedbacks, ...updated]);
    setName("");
    setProject("");
    setMessage("");
    setStars(0);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12">
      <div className="border-t border-border pt-10">
        <h2 className="font-display text-[13px] tracking-[0.18em] mb-6 reveal">FEEDBACKS</h2>

        {/* Cards de feedback */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {feedbacks.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-border p-4 flex flex-col gap-3 animate-in fade-in duration-300"
            >
              <StarDisplay count={f.stars} />
              <p className="text-xs text-muted-foreground leading-relaxed">"{f.quote}"</p>
              <div className="mt-auto">
                <p className="font-display text-[10px] tracking-[0.1em]">{f.name.toUpperCase()}</p>
                <p className="text-[10px] text-muted-foreground">{f.project}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Formulário */}
        <div className="rounded-2xl border border-border p-5 sm:p-6 reveal reveal-delay-2">
          <p className="font-display text-[11px] tracking-[0.14em] mb-4">DEIXE SEU COMENTÁRIO</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="flex-1 rounded-xl border border-border bg-transparent px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              <input
                type="text"
                placeholder="Projeto ou empresa (opcional)"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="flex-1 rounded-xl border border-border bg-transparent px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <textarea
              placeholder="Escreva seu comentário..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
              className="w-full rounded-xl border border-border bg-transparent px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
            />
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-wider font-display text-muted-foreground">
                  AVALIAÇÃO
                </span>
                <StarPicker value={stars} onChange={setStars} />
                {stars === 0 && (
                  <span className="text-[10px] text-muted-foreground/60">(obrigatório)</span>
                )}
              </div>
              <button
                type="submit"
                disabled={stars === 0}
                className="inline-flex items-center gap-1 rounded-full bg-foreground text-background pl-5 pr-1.5 py-1.5 text-xs tracking-[0.2em] font-display disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              >
                {submitted ? "Enviado!" : "Enviar"}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
