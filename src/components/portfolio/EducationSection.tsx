const education = [
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Em andamento",
    period: "2024 — Presente",
    status: "Em curso",
    description:
      "Graduação com foco em desenvolvimento de software, banco de dados, engenharia de software e arquitetura de sistemas.",
  },
  {
    course: "Técnico em Informática",
    institution: "Curso Técnico",
    period: "2022 — 2023",
    status: "Concluído",
    description:
      "Formação técnica em hardware, redes de computadores, manutenção de sistemas e programação básica.",
  },
];

export function EducationSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12">
      <div className="border-t border-border pt-10">
        <h2 className="font-display text-[13px] tracking-[0.18em] mb-8 reveal">FORMAÇÃO</h2>
        <div className="space-y-0">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`grid grid-cols-12 gap-4 lg:gap-10 py-7 border-b border-border reveal reveal-delay-${i + 1}`}
            >
              <div className="col-span-12 sm:col-span-3 flex flex-col gap-1">
                <p className="text-[10px] tracking-[0.12em] font-display text-muted-foreground">
                  {edu.period}
                </p>
                <span
                  className={`self-start rounded-full px-2.5 py-0.5 text-[9px] tracking-wider font-display ${
                    edu.status === "Em curso"
                      ? "bg-foreground text-background"
                      : "border border-border text-muted-foreground"
                  }`}
                >
                  {edu.status.toUpperCase()}
                </span>
              </div>
              <div className="col-span-12 sm:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="font-display text-[13px] tracking-[0.08em]">
                    {edu.course.toUpperCase()}
                  </h3>
                  <span className="text-xs text-muted-foreground">{edu.institution}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
