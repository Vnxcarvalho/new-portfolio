import { createFileRoute } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { WorkProcessSection } from "@/components/portfolio/WorkProcessSection";
import { ObjectivesSection } from "@/components/portfolio/ObjectivesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Alan Carvalho - Portfólio" }],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background py-4 sm:py-6 px-3 sm:px-4 lg:px-10">
      <div className="mx-auto max-w-[1180px] bg-[var(--surface)] rounded-[20px] sm:rounded-[28px] overflow-hidden">
        <header className="flex items-center justify-between px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8">
          <a href="#" className="flex items-center gap-2 font-display text-sm tracking-wider">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground inline-block" />
            Dev
          </a>
        </header>

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <WorkProcessSection />
        <ObjectivesSection />
        <ContactSection />

        <footer className="px-4 sm:px-8 lg:px-12 mt-8 mb-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Alan Carvalho. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" /> Site Seguro
          </div>
        </footer>
      </div>
    </div>
  );
}
