import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Network, Boxes, Wrench } from "lucide-react";

const services = [
  { icon: Gamepad2, title: "Game Development", desc: "Prototype to production: systems, UI, polish." },
  { icon: Boxes, title: "3D Simulations", desc: "Training, digital twins, and technical demos." },
  { icon: Network, title: "Multiplayer", desc: "Photon-powered sessions, lobbies, and netcode." },
  { icon: Wrench, title: "Editor Tools", desc: "Custom inspectors, wizards, and pipeline tools." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="container mx-auto px-6 py-24">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Services</h2>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="bg-card/60 border-white/10 hover-scale">
            <CardHeader className="flex-row items-center gap-3">
              <s.icon className="text-primary" />
              <CardTitle className="text-lg">{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{s.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
