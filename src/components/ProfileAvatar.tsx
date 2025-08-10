import profileImg from "@/assets/profile-loganathan.png";

const ProfileAvatar = () => {
  return (
    <figure className="relative w-40 h-40 md:w-60 md:h-60 mx-auto md:mx-0">
      <div className="absolute -inset-1 rounded-full bg-gradient-primary opacity-60 blur-xl -z-10" aria-hidden="true" />
      <img
        src={profileImg}
        alt="Profile picture of Unity developer Loganathan Shanmugam with neon cyan and purple rim lighting"
        loading="lazy"
        decoding="async"
        className="w-full h-full rounded-full object-cover ring-2 ring-primary/60 shadow-glow"
      />
      <figcaption className="sr-only">Unity AR/VR & Multiplayer Developer</figcaption>
    </figure>
  );
};

export default ProfileAvatar;
