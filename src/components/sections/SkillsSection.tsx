import { Badge } from "@/components/ui/badge";

const skills = [
  "Unity", "C#", "AR Foundation", "Photon Networking", "VR Builder", "Blender", "Git"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="container mx-auto px-6 py-24">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Skills</h2>
      </header>
      <div className="max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((s) => (
          <Badge key={s} variant="secondary" className="justify-center hover-scale shadow-glow">
            {s}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
