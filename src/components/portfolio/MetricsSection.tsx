const metrics = [
  { value: "4+", label: "Projetos entregues" },
  { value: "2+", label: "Anos de experiência" },
  { value: "8+", label: "Tecnologias dominadas" },
  { value: "100%", label: "Comprometimento" },
];

export function MetricsSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12">
      <div className="border-t border-border pt-10">
        <h2 className="font-display text-[13px] tracking-[0.18em] mb-8 reveal">INDICADORES</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-border rounded-2xl overflow-hidden">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center py-10 px-4 text-center border-border
                [&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r
                [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b
                lg:[&:nth-child(n+1)]:border-r lg:[&:nth-last-child(1)]:border-r-0
                reveal reveal-delay-${i + 1}`}
            >
              <p className="font-display text-[40px] sm:text-[52px] leading-none">{metric.value}</p>
              <p className="mt-2 text-[10px] tracking-[0.12em] font-display text-muted-foreground">
                {metric.label.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
