import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ContactSection = () => {
  const email = "contact@loganathan.dev";
  return (
    <section id="contact" className="container mx-auto px-6 py-24">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Contact</h2>
      </header>
      <div className="max-w-xl">
        <p className="text-muted-foreground mb-6">
          Have a project in mind — AR, VR, multiplayer, or a custom tool? I’d love to hear about it.
        </p>
        <a href={`mailto:${email}?subject=Project%20Inquiry%20%5BUnity%20AR%2FVR%5D`}>
          <Button variant="hero" size="lg">
            <Mail className="mr-2" /> Email Me
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
