const objectives = [
  {
    title: "Posição Full Stack",
    description:
      "Integrar uma equipe de desenvolvimento como Full Stack Developer, contribuindo em projetos reais com React, Node.js e TypeScript.",
  },
  {
    title: "Arquitetura de Software",
    description:
      "Aprofundar conhecimentos em design patterns, microsserviços e arquiteturas escaláveis para construir sistemas de alta qualidade.",
  },
  {
    title: "Open Source",
    description:
      "Contribuir ativamente para projetos open source, aprender com a comunidade e retribuir o conhecimento adquirido.",
  },
  {
    title: "Crescimento Contínuo",
    description:
      "Manter-me atualizado com as tecnologias emergentes, completar a graduação em ADS e obter certificações relevantes do mercado.",
  },
];

export function ObjectivesSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12">
      <div className="border-t border-border pt-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-4 reveal">
            <h2 className="font-display text-[13px] tracking-[0.18em] mb-4">
              OBJETIVOS PROFISSIONAIS
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Busco oportunidades para aplicar meu conhecimento em projetos reais, crescer como desenvolvedor e fazer parte de times que valorizam qualidade e inovação.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className={`rounded-2xl border border-border p-5 reveal reveal-delay-${i + 1}`}
              >
                <h3 className="font-display text-[11px] tracking-[0.1em] mb-2">
                  {obj.title.toUpperCase()}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
