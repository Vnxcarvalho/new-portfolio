import { ArrowRight } from "lucide-react";
import profile from "@/assets/profile.png";

const services = [
  {
    title: "Desenvolvimento de Software",
    desc: "Desenvolvedor Full Stack especializado na criação de aplicações escaláveis e responsivas.",
  },
  {
    title: "Banco de Dados",
    desc: "Modelagem, gerenciamento e otimização de bancos de dados relacionais e não relacionais para aplicações seguras e escaláveis.",
  },
  {
    title: "Cloud & Deploy",
    desc: "Configuração de ambientes, deploy contínuo e hospedagem de aplicações utilizando Docker, Git e plataformas de cloud.",
  },
  {
    title: "Técnico em Informática",
    desc: "Especialista em manutenção de notebooks e computadores, montagem e upgrades.",
  },
];

export function HeroSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 pt-8 lg:pt-14">
      <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
        <div className="col-span-12 lg:col-span-4 pt-4 reveal">
          <h1 className="mt-3 font-display text-[32px] sm:text-[42px] lg:text-[47px] leading-[0.95]">
            Alan Carvalho
            <br /><br />
            Desenvolvedor de Software
          </h1>
        </div>

        <div className="col-span-12 lg:col-span-5 flex flex-col items-center reveal reveal-delay-1">
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-[4/5] overflow-hidden rounded-b-[200px] rounded-t-[200px] lg:rounded-t-[0] lg:rounded-b-[200px]">
            <img
              src={profile}
              alt="Alan Carvalho - Desenvolvedor de Software"
              width={800}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-1 rounded-full bg-foreground text-background pl-5 pr-1.5 py-1.5 text-xs tracking-[0.2em] font-display"
          >
            Entre em contato
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 border-t border-border pt-8">
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
