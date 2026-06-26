import projectDashboard from "@/assets/project-dashboard.jpg";
import projectChat from "@/assets/project-chat.jpg";
import projectApi from "@/assets/project-api.jpg";

const projects = [
  {
    image: projectDashboard,
    title: "Dashboard Administrativo",
    description:
      "Painel de gerenciamento com gráficos em tempo real, controle de usuários e relatórios exportáveis.",
    tags: ["React", "TypeScript", "Node.js"],
    year: "2025",
  },
  {
    image: projectChat,
    title: "Chat em Tempo Real",
    description:
      "Aplicação de mensagens com WebSockets, autenticação JWT e salas privadas.",
    tags: ["Socket.io", "React", "Node.js"],
    year: "2025",
  },
  {
    image: projectApi,
    title: "API REST",
    description:
      "API robusta com autenticação, documentação Swagger e integração com banco de dados relacional.",
    tags: ["Node.js", "C#", "SQL"],
    year: "2024",
  },
];

export function ProjectsSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 mt-20 sm:mt-28">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-8 reveal">
        <h2 className="font-display text-[36px] sm:text-[44px] lg:text-[52px] leading-none">PROJETOS</h2>
        <p className="text-xs text-muted-foreground max-w-xs sm:ml-auto">
          Alguns dos projetos que desenvolvi, aplicando boas práticas e tecnologias modernas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((project, i) => (
          <article key={i} className={`group reveal reveal-delay-${i + 1}`}>
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="pt-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-[13px] tracking-[0.1em]">
                  {project.title.toUpperCase()}
                </h3>
                <span className="text-xs text-muted-foreground shrink-0">{project.year}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-0.5 text-[10px] tracking-wider font-display text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
