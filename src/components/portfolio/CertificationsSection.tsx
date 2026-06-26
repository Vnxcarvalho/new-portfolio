const certifications = [
  {
    name: "React do Zero ao Avançado",
    issuer: "Udemy",
    year: "2025",
  },
  {
    name: "Node.js & APIs RESTful",
    issuer: "Udemy",
    year: "2025",
  },
  {
    name: "TypeScript Completo",
    issuer: "Udemy",
    year: "2025",
  },
  {
    name: "Banco de Dados SQL",
    issuer: "Udemy",
    year: "2026",
  },
  {
    name: "C# e .NET",
    issuer: "Udemy",
    year: "2025",
  },
  {
    name: "Docker para Desenvolvedores",
    issuer: "Udemy",
    year: "2025",
  },
];

export function CertificationsSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12">
      <div className="border-t border-border pt-10">
        <h2 className="font-display text-[13px] tracking-[0.18em] mb-8 reveal">CERTIFICAÇÕES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`flex items-start justify-between gap-4 rounded-2xl border border-border p-5 reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="min-w-0">
                <p className="font-display text-[11px] tracking-[0.1em] leading-snug">
                  {cert.name.toUpperCase()}
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground">{cert.issuer}</p>
              </div>
              <span className="shrink-0 text-[10px] text-muted-foreground font-display">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
