import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Hero3D from "./Hero3D";
import ProfileAvatar from "./ProfileAvatar";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => (
  <header className="fixed top-0 inset-x-0 z-20">
    <nav className="container mx-auto mt-4 rounded-xl border border-white/10 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className="px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-sm md:text-base text-gradient">Loganathan</a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="story-link hover:text-foreground transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a href="#contact">
            <Button variant="hero" size="sm">Hire Me</Button>
          </a>
        </div>
      </div>
    </nav>
  </header>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <Hero3D />
      <Navbar />
      <div className="container mx-auto px-6 pt-28 md:pt-40">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gradient">Unity Developer</span> for AR, VR & Multiplayer
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground animate-fade-in">
              I’m Loganathan Shanmugam — I craft immersive experiences, scalable multiplayer systems, and custom editor tools. Futuristic ideas, production-ready execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#portfolio">
                <Button variant="hero" size="lg">
                  Explore Work <ArrowRight className="ml-2" />
                </Button>
              </a>
              <a href="#contact" className="story-link">
                <Button variant="outline" size="lg">Start a Project</Button>
              </a>
            </div>
          </div>
          <div className="justify-self-center md:justify-self-end">
            <ProfileAvatar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
