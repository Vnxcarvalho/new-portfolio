const testimonials = [
  {
    quote:
      "Alan entregou o projeto dentro do prazo com qualidade acima do esperado. A comunicação durante todo o processo foi excelente.",
    name: "Cliente — Delicatta Joalheria",
    role: "E-commerce",
  },
  {
    quote:
      "Profissional dedicado e comprometido. Entendeu exatamente o que precisávamos e desenvolveu uma solução robusta e escalável.",
    name: "Cliente — Aurea Essentials",
    role: "Aplicação Web",
  },
  {
    quote:
      "Ótimo desenvolvedor, resolve problemas com clareza e sempre sugere melhorias. Recomendo sem hesitar.",
    name: "Cliente — Assistência Técnica",
    role: "Sistema de Gestão",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12">
      <div className="border-t border-border pt-10">
        <h2 className="font-display text-[13px] tracking-[0.18em] mb-8 reveal">DEPOIMENTOS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-border p-6 flex flex-col justify-between gap-6 reveal reveal-delay-${i + 1}`}
            >
              <p className="text-sm text-foreground/80 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-display text-[11px] tracking-[0.1em]">{t.name.toUpperCase()}</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
