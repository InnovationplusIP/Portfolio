const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-24">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
      </header>
      <article className="max-w-3xl text-muted-foreground space-y-4">
        <p>
          I’m a Unity developer specialized in augmented and virtual reality, multiplayer game systems, and 3D simulations. I love bridging creative vision with technical execution — from rapid prototyping to shipping polished, performant experiences.
        </p>
        <p>
          My toolkit spans AR Foundation, Photon Networking, VR frameworks, and custom editor tooling to speed up teams and pipelines. I collaborate closely with clients to turn complex requirements into interactive products that feel effortless and engaging.
        </p>
      </article>
    </section>
  );
};

export default AboutSection;
