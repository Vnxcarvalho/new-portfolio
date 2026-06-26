import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Github, Linkedin, Lock, ExternalLink } from "lucide-react";
import hero3d from "@/assets/hero-3d.jpg";
import projStock from "@/assets/project-stock.jpg";
import projChat from "@/assets/project-chat.jpg";
import projDashboard from "@/assets/project-dashboard.jpg";
import projApi from "@/assets/project-api.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Santos — Desenvolvedor Fullstack" },
      { name: "description", content: "Portfólio de Alex Santos. Arquiteturas de código limpo e escalável, APIs, dashboards e contribuições open source." },
      { property: "og:title", content: "Alex Santos — Desenvolvedor Fullstack" },
      { property: "og:description", content: "Arquiteturas de código limpo e escalável." },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "4+", label: "Anos de Experiência" },
  { value: "50+", label: "Aplicações Fullstack" },
  { value: "99%", label: "Cobertura de Testes" },
  { value: "3+", label: "Contribuições Open Source" },
];

const projects = [
  {
    img: projStock,
    title: "Real-time Stock Tracker API",
    desc: "API de baixa latência com WebSockets para streaming de cotações e agregações em janela deslizante.",
    tags: ["Node.js", "Redis", "WebSocket", "TS"],
  },
  {
    img: projChat,
    title: "Linea Chat",
    desc: "Aplicação de mensagens em tempo real com criptografia ponta-a-ponta e presença distribuída.",
    tags: ["React", "Go", "Postgres"],
  },
  {
    img: projDashboard,
    title: "Northwind Analytics",
    desc: "Dashboard de BI com pipelines ETL incrementais e visualizações performáticas em larga escala.",
    tags: ["Next.js", "DuckDB", "D3"],
  },
  {
    img: projApi,
    title: "Mesh Gateway",
    desc: "Gateway de microsserviços open source com roteamento declarativo e observabilidade integrada.",
    tags: ["Rust", "gRPC", "OTEL"],
  },
];

const experience = [
  { role: "Tech Lead Fullstack", org: "Quanta Studio", period: "2023 — Presente", desc: "Liderança técnica em produtos SaaS, design de APIs e mentoria de squad." },
  { role: "Engenheiro Fullstack Sênior", org: "Vortex Labs", period: "2021 — 2023", desc: "Refatoração de monolito para arquitetura modular event-driven." },
  { role: "Desenvolvedor Backend", org: "Mira Software", period: "2019 — 2021", desc: "Implementação de serviços críticos com Node, Postgres e Redis." },
];

const education = [
  { role: "Bacharelado em Ciência da Computação", org: "Universidade Federal", period: "2015 — 2019", desc: "Ênfase em sistemas distribuídos e engenharia de software." },
  { role: "AWS Solutions Architect", org: "Amazon Web Services", period: "2022", desc: "Arquitetura cloud-native, segurança e otimização de custos." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#projetos", label: "Projetos" },
    { href: "#stack", label: "Stack" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] uppercase">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Alex Santos
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-foreground/80 hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
          Fale Comigo
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-32">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
            Portfólio · 2025
          </p>
          <h1 className="serif text-[2.6rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02]">
            Alex Santos <span className="text-primary">—</span> Desenvolvedor Fullstack <em className="font-normal italic">criando</em> arquiteturas de código limpo e escalável.
          </h1>
          <p className="mt-6 text-base text-muted-foreground max-w-md leading-relaxed">
            Construo produtos web do banco de dados à interface, com foco em performance, observabilidade e código sustentável a longo prazo.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contato" className="inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary px-5 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
              Fale Comigo
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#projetos" className="link-underline text-sm text-foreground/80">
              Ver projetos
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 order-first lg:order-none">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-secondary">
            <img
              src={hero3d}
              alt="Renderização 3D abstrata de blocos de código e nós de rede"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-[2rem]" />
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8 lg:border-l lg:border-border lg:pl-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="serif text-3xl lg:text-4xl text-foreground">
                <span className="text-primary">*</span>{s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="stack" className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-t border-border pt-10">
        {[
          { t: "Arquitetura Limpa", d: "Domain-driven design, separação clara de camadas e código testável." },
          { t: "APIs & Backend", d: "REST, GraphQL e gRPC em Node, Go e Rust com Postgres e Redis." },
          { t: "Frontend Moderno", d: "React, Next.js e TypeScript com foco em performance e acessibilidade." },
          { t: "DevOps & Cloud", d: "Docker, Terraform e pipelines CI/CD em AWS e Cloudflare." },
        ].map((f) => (
          <div key={f.t}>
            <div className="text-xs uppercase tracking-[0.18em] font-semibold mb-3">{f.t}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 border-t border-border">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">01 — Trabalho</p>
          <h2 className="serif text-4xl lg:text-5xl max-w-2xl leading-[1.05]">
            Projetos de código aberto <em className="italic font-normal">&</em> trabalho selecionado
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm">
          Uma seleção recente de APIs, dashboards e ferramentas que construí — com foco em arquitetura e legibilidade.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((p) => (
          <article key={p.title} className="group bg-card rounded-2xl overflow-hidden border border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_color-mix(in_oklab,var(--primary)_25%,transparent)]">
            <div className="aspect-[16/10] overflow-hidden bg-secondary">
              <img
                src={p.img}
                alt={p.title}
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="serif text-2xl mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-primary/40 text-primary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] px-4 py-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">
                  <ExternalLink className="h-3.5 w-3.5" /> Ver Live
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] px-4 py-2.5 rounded-full border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 border-t border-border">
      <div className="grid lg:grid-cols-12 gap-10 mb-14">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">02 — Bio</p>
          <h2 className="serif text-4xl lg:text-5xl leading-[1.05]">
            A minha <em className="italic font-normal">jornada</em> entre código, sistemas e pessoas.
          </h2>
        </div>
        <p className="lg:col-span-5 text-sm text-muted-foreground leading-relaxed lg:pt-4">
          Comecei programando por curiosidade e nunca parei. Hoje, desenho sistemas que precisam durar — equilibrando entrega, qualidade e clareza para os times que mantêm o código depois de mim.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <Panel title="Experiência" items={experience} />
        <Panel title="Educação" items={education} />
      </div>
    </section>
  );
}

function Panel({ title, items }: { title: string; items: { role: string; org: string; period: string; desc: string }[] }) {
  return (
    <div className="bg-card border border-border/70 rounded-2xl p-8 lg:p-10">
      <div className="flex items-baseline justify-between mb-8">
        <h3 className="serif text-2xl">{title}</h3>
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      </div>
      <ul className="space-y-7">
        {items.map((i) => (
          <li key={i.role} className="grid grid-cols-[1fr_auto] gap-4">
            <div>
              <div className="font-medium text-foreground">{i.role}</div>
              <div className="text-sm text-muted-foreground">{i.org}</div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{i.desc}</p>
            </div>
            <div className="text-xs uppercase tracking-[0.14em] text-primary whitespace-nowrap pt-1">{i.period}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Contact() {
  const channels = [
    { Icon: Mail, label: "E-mail", value: "alex@alexsantos.dev", href: "mailto:alex@alexsantos.dev" },
    { Icon: Github, label: "GitHub", value: "github.com/alexsantos", href: "https://github.com" },
    { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/alexsantos", href: "https://linkedin.com" },
  ];
  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 border-t border-border">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">03 — Contato</p>
        <h2 className="serif text-4xl lg:text-6xl leading-[1.02]">
          Entre em <em className="italic font-normal">contato</em>.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Aberto a projetos fullstack, consultorias técnicas e colaborações open source.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
        {channels.map(({ Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            className="group bg-card border border-border/70 rounded-2xl p-8 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:border-primary"
          >
            <div className="h-14 w-14 rounded-full border border-border flex items-center justify-center mb-5 transition-colors group-hover:border-primary group-hover:bg-primary/5">
              <Icon className="h-6 w-6 text-foreground/70 transition-all group-hover:text-primary group-hover:rotate-6" />
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">{label}</div>
            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{value}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Alex Santos. Todos os direitos reservados.</div>
        <div className="flex items-center gap-2">
          <Lock className="h-3.5 w-3.5 text-primary" />
          <span>Site Seguro</span>
        </div>
      </div>
    </footer>
  );
}
