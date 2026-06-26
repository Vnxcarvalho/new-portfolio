import { Circle, CircleDot, Hourglass, ToggleRight, FastForward } from "lucide-react";

const skills = [
  { icon: Circle, name: "TypeScript" },
  { icon: CircleDot, name: "JavaScript" },
  { icon: Hourglass, name: "React" },
  { icon: ToggleRight, name: "Node.js" },
  { icon: FastForward, name: "IA" },
  { icon: Circle, name: "Next.js" },
  { icon: ToggleRight, name: "SQL" },
  { icon: FastForward, name: "C#" },
];

export function SkillsSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 mt-6 sm:mt-8">
      <div className="mb-6 reveal">
        <h2 className="font-display text-[36px] sm:text-[44px] lg:text-[30px] leading-none">HABILIDADES</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 border border-border rounded-md reveal reveal-delay-1">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={i}
              className="flex items-center justify-center gap-3 py-6 sm:py-7 border-border border-r border-b
                [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r
                md:[&:nth-child(4n)]:border-r-0
                [&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b
                md:[&:nth-last-child(-n+4)]:border-b-0"
            >
              <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
