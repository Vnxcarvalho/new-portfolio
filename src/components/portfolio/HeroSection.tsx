import { ArrowRight, MapPin, Calendar } from "lucide-react";

const services = [
  {
    title: "Desenvolvimento de Software",
    desc: "Desenvolvedor Full Stack especializado na criação de aplicações escaláveis e responsivas.",
  },
  {
    title: "Banco de Dados",
    desc: "Modelagem, gerenciamento e otimização de bancos de dados relacionais e não relacionais.",
  },
  {
    title: "Cloud & Deploy",
    desc: "Configuração de ambientes, deploy contínuo e hospedagem com Docker, Git e plataformas cloud.",
  },
  {
    title: "Técnico em Informática",
    desc: "Manutenção de notebooks e computadores, montagem e upgrades de hardware.",
  },
];

const stack = ["React", "TypeScript", "Node.js", "C#", "SQL", "Docker"];

export function HeroSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 pt-8 lg:pt-10">

      {/* Linha de status */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 reveal">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] font-display text-muted-foreground">
            DISPONÍVEL PARA PROJETOS
          </span>
        </div>
        <div className="flex items-center gap-4 text-[10px] tracking-[0.15em] font-display text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3" strokeWidth={1.5} />
            Brasil
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3 w-3" strokeWidth={1.5} />
            2+ anos de experiência
          </span>
        </div>
      </div>

      {/* Título principal */}
      <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
        <div className="col-span-12 lg:col-span-7 reveal">
          <h1 className="font-display text-[48px] sm:text-[64px] lg:text-[80px] leading-[0.9] tracking-tight">
            Alan<br />Carvalho
          </h1>
          <p className="mt-4 text-[13px] sm:text-[15px] text-muted-foreground max-w-lg leading-relaxed">
            Desenvolvedor Full Stack focado em construir aplicações modernas, escaláveis e com experiência de usuário de alta qualidade. Cursando Análise e Desenvolvimento de Sistemas.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1 rounded-full bg-foreground text-background pl-5 pr-1.5 py-1.5 text-xs tracking-[0.2em] font-display"
            >
              Entre em contato
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2 text-xs tracking-[0.2em] font-display text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-200"
            >
              Ver projetos
            </a>
          </div>
        </div>

        {/* Painel lateral de info */}
        <div className="col-span-12 lg:col-span-5 reveal reveal-delay-1">
          <div className="rounded-2xl border border-border p-6 space-y-5">
            <div>
              <p className="text-[10px] tracking-[0.18em] font-display text-muted-foreground mb-2">
                STACK PRINCIPAL
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-[10px] tracking-wider font-display text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-border pt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="font-display text-[28px] leading-none">6+</p>
                <p className="mt-1 text-[10px] tracking-[0.12em] font-display text-muted-foreground">
                  TECNOLOGIAS
                </p>
              </div>
              <div>
                <p className="font-display text-[28px] leading-none">2+</p>
                <p className="mt-1 text-[10px] tracking-[0.12em] font-display text-muted-foreground">
                  ANOS DE EXPERIÊNCIA
                </p>
              </div>
            </div>
            <div className="border-t border-border pt-5">
              <p className="text-[10px] tracking-[0.18em] font-display text-muted-foreground mb-1">
                FORMAÇÃO
              </p>
              <p className="text-xs text-foreground">Análise e Desenvolvimento de Sistemas</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Em andamento · 2025 — Presente</p>
            </div>
          </div>
        </div>
      </div>

      {/* Serviços */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 border-t border-border pt-8 reveal reveal-delay-2">
        {services.map((s, i) => (
          <div key={s.title} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
            <h3 className="font-display text-[11px] tracking-[0.12em]">{s.title.toUpperCase()}</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
