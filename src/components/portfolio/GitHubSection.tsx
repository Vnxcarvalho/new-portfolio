import { ExternalLink, Code2 } from "lucide-react";

const repos = [
  {
    name: "delicatta-joalheria",
    description: "Painel de gerenciamento com gráficos em tempo real e controle de usuários.",
    tags: ["React", "TypeScript", "Node.js"],
    url: "https://github.com/Vnxcarvalho/delicatta-joalheria",
  },
  {
    name: "aurea-essentials",
    description: "Aplicação de mensagens com WebSockets, autenticação JWT e salas privadas.",
    tags: ["TypeScript", "React", "Node.js"],
    url: "https://github.com/Vnxcarvalho/aurea-essentials",
  },
  {
    name: "teste-de-mesa01",
    description: "API robusta com autenticação, Swagger e integração com banco de dados relacional.",
    tags: ["C#", "SQL"],
    url: "https://github.com/Vnxcarvalho/teste-de-mesa01",
  },
  {
    name: "Pagina-Assistencia",
    description: "Sistema para assistências técnicas com controle de estoque e ordens de serviço.",
    tags: ["React", "Node.js"],
    url: "https://github.com/Vnxcarvalho/Pagina-Assistencia",
  },
];

export function GitHubSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12">
      <div className="border-t border-border pt-10">
        <div className="flex items-end justify-between gap-4 mb-8 reveal">
          <h2 className="font-display text-[13px] tracking-[0.18em]">GITHUB / OPEN SOURCE</h2>
          <a
            href="https://github.com/Vnxcarvalho"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[10px] tracking-wider font-display text-muted-foreground hover:text-foreground transition-colors"
          >
            Ver perfil
            <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {repos.map((repo, i) => (
            <a
              key={i}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col justify-between gap-4 rounded-2xl border border-border p-5 hover:bg-foreground hover:border-foreground transition-all duration-300 active:scale-[0.98] reveal reveal-delay-${i + 1}`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="h-3.5 w-3.5 text-muted-foreground group-hover:text-background transition-colors" strokeWidth={1.5} />
                  <p className="font-display text-[11px] tracking-[0.1em] group-hover:text-background transition-colors">
                    {repo.name.toUpperCase()}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-background/70 transition-colors">
                  {repo.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {repo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2 py-0.5 text-[9px] tracking-wider font-display text-muted-foreground group-hover:border-background/30 group-hover:text-background/60 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
