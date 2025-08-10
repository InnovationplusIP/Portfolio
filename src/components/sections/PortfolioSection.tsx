import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef } from "react";

const projects = [
  { title: "AR Product Showcase", desc: "AR Foundation + Image Tracking for retail try-ons." },
  { title: "VR Training Simulator", desc: "Procedural tasks and hand interactions in VR." },
  { title: "Multiplayer Arena", desc: "Photon Fusion matchmaking and authoritative logic." },
  { title: "3D Twin Viz", desc: "Interactive real-time digital twin dashboards." },
  { title: "Tooling: Level Builder", desc: "Custom Unity editor for scene assembly speed." },
  { title: "Simulation Sandbox", desc: "Physics-driven scenarios for R&D teams." },
];

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = -((y / rect.height) - 0.5) * 6;
    const ry = ((x / rect.width) - 0.5) * 6;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="transition-transform duration-200 will-change-transform"
    >
      {children}
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="container mx-auto px-6 py-24">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Portfolio</h2>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <TiltCard key={p.title}>
            <Card className="bg-card/60 hover-scale border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{p.desc}</CardContent>
            </Card>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
