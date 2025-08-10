import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <Hero />
      <main id="main">
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Loganathan Shanmugam. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
