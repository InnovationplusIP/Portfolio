import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Loganathan delivered a rock-solid multiplayer prototype that became our core product.",
    author: "Studio Lead, Indie Games"
  },
  {
    quote: "Our VR training sim dramatically reduced onboarding time — precise and intuitive.",
    author: "Ops Manager, Industrial Training"
  },
  {
    quote: "The editor tools saved hours each week. Our team ships faster and with fewer bugs.",
    author: "Tech Director, Simulation Lab"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="container mx-auto px-6 py-24">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Testimonials</h2>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card key={t.author} className="bg-card/60 border-white/10">
            <CardContent className="pt-6">
              <blockquote className="text-lg">“{t.quote}”</blockquote>
              <p className="mt-4 text-sm text-muted-foreground">— {t.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
