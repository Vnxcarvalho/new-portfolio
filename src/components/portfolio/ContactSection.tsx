import { Mail, Linkedin, MessageCircle, Github } from "lucide-react";

const contacts = [
  {
    label: "Email",
    icon: Mail,
    href: "mailto:alanviniciuscarvalho@gmail.com",
    display: "alanviniciuscarvalho@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    // TODO: atualize com seu perfil do LinkedIn
    href: "https://www.linkedin.com/in/alan-carvalho-74165320a/",
    display: "linkedin.com/in/alanviniciuscarvalho",
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    // TODO: substitua pelo seu número no formato internacional
    href: "https://wa.me/5596984006764",
    display: "WhatsApp",
  },
  {
    label: "GitHub",
    icon: Github,
    // TODO: atualize com seu usuário do GitHub
    href: "https://github.com/Vnxcarvalho?tab=repositories",
    display: "github.com/AlanCarvalho",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12">
      <div className="border-t border-border pt-10">
        <h2 className="font-display text-[13px] tracking-[0.18em] mb-8 reveal">CONTATO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${i + 1} group flex items-center gap-4 rounded-2xl border border-border p-4 sm:p-5 transition-all duration-300 hover:bg-foreground hover:border-foreground active:scale-[0.98]`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-colors duration-300 group-hover:border-background/20 group-hover:bg-background/10">
                  <Icon className="h-4 w-4 transition-colors duration-300 group-hover:text-background" strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <div className="text-[10px] tracking-widest font-display transition-colors duration-300 group-hover:text-background">
                    {contact.label.toUpperCase()}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground transition-colors duration-300 group-hover:text-background/70 truncate">
                    {contact.display}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
