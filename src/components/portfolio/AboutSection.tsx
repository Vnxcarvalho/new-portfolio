export function AboutSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12">
      <div className="grid grid-cols-12 gap-8 lg:gap-16">
        <h2 className="col-span-12 lg:col-span-6 font-display text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.05] reveal">
          ENGENHARIA DE SOFTWARE,
          <br />
          DESENVOLVIMENTO
          <br />
          E TECNOLOGIA
        </h2>
        <div className="col-span-12 lg:col-span-6 space-y-5 text-[15px] leading-relaxed text-foreground/80 reveal reveal-delay-1">
          <p className="text-foreground text-[15px] sm:text-[17px]">
            Olá, sou Alan Carvalho, desenvolvedor Full Stack apaixonado por criar aplicações modernas e experiências digitais de alta qualidade.
          </p>
          <p className="text-muted-foreground">
            Desenvolvedor Fullstack focado na criação de aplicações modernas utilizando React, JavaScript, TypeScript, Node.js e C#. Possuo conhecimentos em banco de dados, integração de APIs, Inteligência Artificial e resolução de problemas através da lógica de programação. Tenho interesse em arquitetura de software, desenvolvimento escalável e qualidade de código. Atualmente curso Análise e Desenvolvimento de Sistemas e busco oportunidades para aplicar e expandir meus conhecimentos em projetos reais.
          </p>
        </div>
      </div>
    </section>
  );
}
