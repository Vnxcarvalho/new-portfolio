import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu, Circle, CircleDot, Hourglass, ToggleRight, FastForward, Lock } from "lucide-react";
import profile from "@/assets/profile.png";
import soundwave from "@/assets/portfolio-soundwave.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alan Carvalho - Portfólio" },
    ],
  }),
  component: Index,
});

const services = [
  { title: "Desenvolvimento de Software", desc: "Desenvolvedor Full Stack especializado na criação de aplicações escaláveis e responsivas." },
  { title: "Banco de dados", desc: "Modelagem, gerenciamento e otimização de bancos de dados relacionais e não relacionais para aplicações seguras e escaláveis." },
  { title: "Cloud & Deploy", desc: "Configuração de ambientes, deploy contínuo e hospedagem de aplicações utilizando Docker, Git e plataformas de cloud." },
  { title: "Técnico em Informática", desc: "Especialista em manutenção de notebooks e computadores, montagem e upgrades." },
];

const stats = [
  { value: "" },
];

const trusted = [
  { icon: Circle, name: "Type Script" },
  { icon: CircleDot, name: "Java Script" },
  { icon: Hourglass, name: "React" },
  { icon: ToggleRight, name: "Node.js" },
  { icon: FastForward, name: "IA" },
  { icon: Circle, name: "Next.js" },
  { icon: ToggleRight, name: "SQL" },
  { icon: FastForward, name: "C#" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background py-6 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1180px] bg-[var(--surface)] rounded-[28px] overflow-hidden">
        {/* NAV */}
        <header className="flex items-center justify-between px-8 lg:px-12 pt-8">
          <a href="#" className="flex items-center gap-2 font-display text-sm tracking-wider">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground inline-block" />
            Dev
          </a>

        </header>

        {/* HERO */}
        <section className="px-8 lg:px-12 pt-10 lg:pt-14">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left text */}
            <div className="col-span-12 lg:col-span-4 pt-4">
              <h1 className="mt-3 font-display text-[34px] sm:text-[42px] lg:text-[47px] leading-[0.95]">
                Alan Carvalho
                <br />
                Desenvolvedor de Software
              </h1>
              <br />
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-1 rounded-full bg-foreground text-background pl-5 pr-1.5 py-1.5 text-xs tracking-[0.2em] font-display"
              >

                Entre em contato
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>

            {/* Portrait */}
            <div className="col-span-12 lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-b-[200px] rounded-t-[200px] lg:rounded-t-[0] lg:rounded-b-[200px]">
                <img
                  src={profile}
                  alt="Desenvolvedor de software"
                  width={800}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-7 pt-6 lg:items-end lg:text-right">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl lg:text-[34px] leading-none">{s.value}</div>
                  <div className="mt-1.5 text-[11px] tracking-wider text-muted-foreground font-serif-italic">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services row */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 border-t border-border pt-8">
            {services.map((s) => (
              <div key={s.title}>
                <h3 className="font-display text-[11px] tracking-[0.12em]">{s.title.toUpperCase()}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-[200px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TRUSTED BY */}
        <section className="px-8 lg:px-12 mt-24">
          <div className="grid grid-cols-12 gap-6 items-end mb-6">
            <h2 className="col-span-12 lg:col-span-4 font-display text-[13px] tracking-[0.18em]">HABILIDADES</h2>
            <p></p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 border border-border rounded-md">
            {trusted.map((t, i) => {
              const Icon = t.icon;
              return (
                <div
                  key={i}
                  className="flex items-center justify-center gap-3 py-7 border-border border-r border-b last:border-r-0 [&:nth-child(4n)]:border-r-0 [&:nth-last-child(-n+4)]:border-b-0"
                >
                  <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-sm text-muted-foreground">{t.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ABOUT */}
        <section className="px-8 lg:px-12 mt-32">
          <div className="grid grid-cols-12 gap-8 lg:gap-16">
            <h2 className="col-span-12 lg:col-span-6 font-display text-[34px] sm:text-[42px] lg:text-[44px] leading-[1.05]">
              CRAFTING MEANINGFUL
              <br />
              BRANDS &amp; INTUITIVE
              <br />
              EXPERIENCES
            </h2>
            <div className="col-span-12 lg:col-span-6 space-y-5 text-[15px] leading-relaxed text-foreground/80">
              <p className="text-foreground text-[17px]">
                Hey, I'm Solt, a UI/UX and brand designer passionate about creating visually compelling and user-friendly digital experiences.
              </p>
              <p className="text-muted-foreground">
                Desenvolvedor Fullstack focado na criação de aplicações modernas utilizando React, JavaScript, TypeScript, Node.js e C#. Possuo conhecimentos em banco de dados, integração de APIs, Inteligência Artificial e resolução de problemas através da lógica de programação. Tenho interesse em arquitetura de software, desenvolvimento escalável e qualidade de código. Atualmente curso Análise e Desenvolvimento de Sistemas e busco oportunidades para aplicar e expandir meus conhecimentos em projetos reais."
              </p>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="px-8 lg:px-12 mt-32">
          <div className="grid grid-cols-12 gap-8 mb-8 items-end">
            <h2 className="col-span-12 lg:col-span-6 font-display text-[44px] sm:text-[52px] leading-none">PORTFOLIO</h2>
            <p className="col-span-12 lg:col-span-6 text-xs text-muted-foreground max-w-md">
              Explore my recent web design creations and discover how we can transform your vision into reality.
            </p>
          </div>

          <article className="group">
            <div className="overflow-hidden rounded-md">
              <img
                src={soundwave}
                alt="Soundwave audio interface project"
                width={1600}
                height={900}
                loading="lazy"
                className="w-full aspect-[16/8] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5">
              <h3 className="font-display text-[15px] tracking-[0.12em]">SOUNDWAVE</h3>
              <p className="text-xs text-muted-foreground flex-1 text-center min-w-[200px]">
                Designing an Immersive Audio Tech Experience
              </p>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">2025</span>
                <span className="rounded-full bg-foreground text-background px-3 py-1 text-[10px] tracking-widest font-display">
                  Branding
                </span>
              </div>
            </div>
          </article>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="px-8 lg:px-12 mt-24 mb-10 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Alan Carvalho. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" /> Site Seguro
          </div>
        </footer>
      </div>
    </div>
  );
}
