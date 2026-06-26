import { Code2, ExternalLink } from "lucide-react";
import delicattaJoalheria from "@/assets/delicatta-joalheria.jpeg";
import aureaEssentials from "@/assets/aurea-essentials.png";
import csharp from "@/assets/csharp.webp";
import assistencia from "@/assets/assistencia.png";

const projects = [
  {
    image: delicattaJoalheria,
    title: "Delicatta Joalheria",
    description:
      "Painel de gerenciamento com gráficos em tempo real, controle de usuários e relatórios exportáveis.",
    tags: ["React", "TypeScript", "Node.js"],
    year: "2025",
    codeUrl: "https://github.com/Vnxcarvalho/delicatta-joalheria",
    siteUrl: "https://www.delicattajoalheria.store/",
  },
  {
    image: aureaEssentials,
    title: "Aurea Essentials",
    description:
      "Aplicação de mensagens com WebSockets, autenticação JWT e salas privadas.",
    tags: ["TypeScript", "React", "Node.js"],
    year: "2026",
    codeUrl: "https://github.com/Vnxcarvalho/aurea-essentials",
    siteUrl: "https://aurea-essentials.vercel.app/",
  },
  {
    image: csharp,
    title: "Tabela de mesa C#",
    description:
      "API robusta com autenticação, documentação Swagger e integração com banco de dados relacional.",
    tags: ["Node.js", "C#", "SQL"],
    year: "2026",
    codeUrl: "https://github.com/Vnxcarvalho/teste-de-mesa01",
    siteUrl: "https://github.com/Vnxcarvalho/teste-de-mesa01",
  },
  {
    image: assistencia,
    title: "Assistência Técnica",
    description:
      "Sistema de gerenciamento para assistências técnicas de informática, com controle de estoque, ordens de serviço e clientes.",
    tags: ["React", "Node.js"],
    year: "2026",
    codeUrl: "https://github.com/Vnxcarvalho/Pagina-Assistencia",
    siteUrl: "https://pagina-assistencia.vercel.app/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-8 reveal">
        <h3 className="font-display text-[25px] sm:text-[25px] lg:text-[10px] leading-none">PROJETOS RECENTES</h3>
        <p className="text-xs text-muted-foreground max-w-xs sm:ml-auto">
          Alguns dos projetos que desenvolvi, aplicando boas práticas e tecnologias modernas.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {projects.map((project, i) => (
          <article key={i} className={`group reveal reveal-delay-${i + 1}`}>
            <div className="overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="pt-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-[11px] sm:text-[12px] tracking-[0.1em]">
                  {project.title.toUpperCase()}
                </h3>
                <span className="text-[10px] text-muted-foreground shrink-0">{project.year}</span>
              </div>
              <p className="mt-1.5 text-[11px] text-muted-foreground leading-relaxed hidden sm:block">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 hidden sm:flex">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2 py-0.5 text-[9px] tracking-wider font-display text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[10px] tracking-wider font-display text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-200"
                >
                  <Code2 className="h-3 w-3" strokeWidth={1.5} />
                  Código
                </a>
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[10px] tracking-wider font-display text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-200"
                >
                  <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
                  Ver site
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
