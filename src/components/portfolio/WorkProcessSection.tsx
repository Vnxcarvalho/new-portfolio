const steps = [
  {
    number: "01",
    title: "Entendimento",
    description:
      "Levantamento de requisitos, entendimento do problema e definição do escopo do projeto junto ao cliente.",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Definição da arquitetura, escolha das tecnologias, criação do wireframe e planejamento das sprints.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Implementação do código com foco em qualidade, performance e boas práticas. Ciclos curtos com entregas incrementais.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Testes, deploy em produção, documentação e suporte pós-entrega para garantir o funcionamento correto.",
  },
];

export function WorkProcessSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12">
      <div className="border-t border-border pt-10">
        <h2 className="font-display text-[13px] tracking-[0.18em] mb-8 reveal">
          PROCESSO DE TRABALHO
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`}>
              <p className="font-display text-[36px] sm:text-[44px] leading-none text-border">
                {step.number}
              </p>
              <h3 className="font-display text-[12px] tracking-[0.12em] mt-4">
                {step.title.toUpperCase()}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
