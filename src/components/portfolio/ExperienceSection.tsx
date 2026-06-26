const experiences = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Freelancer",
    period: "2024 — Presente",
    description:
      "Desenvolvimento de aplicações web completas para clientes, incluindo sistemas de gerenciamento, landing pages e APIs RESTful.",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    role: "Técnico em Informática",
    company: "Assistência Técnica",
    period: "2023 — 2024",
    description:
      "Manutenção e reparo de notebooks e computadores, montagem de máquinas, upgrades de hardware e suporte técnico ao cliente.",
    tags: ["Hardware", "Suporte", "Redes"],
  },
];

export function ExperienceSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12">
      <div className="border-t border-border pt-10">
        <h2 className="font-display text-[13px] tracking-[0.18em] mb-8 reveal">EXPERIÊNCIA</h2>
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`grid grid-cols-12 gap-4 lg:gap-10 py-7 border-b border-border reveal reveal-delay-${i + 1}`}
            >
              <div className="col-span-12 sm:col-span-3">
                <p className="text-[10px] tracking-[0.12em] font-display text-muted-foreground">
                  {exp.period}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="font-display text-[13px] tracking-[0.08em]">
                    {exp.role.toUpperCase()}
                  </h3>
                  <span className="text-xs text-muted-foreground">{exp.company}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
                  {exp.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 text-[9px] tracking-wider font-display text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
