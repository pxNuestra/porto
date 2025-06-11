export default function HeroSection() {
  return (
    <section className="flex flex-col items-center mt-28 sm:mt-32 mb-6 sm:mb-10 relative w-full max-w-3xl px-2 sm:px-0 overflow-hidden">
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-chroma blur-2xl opacity-50"></div>
      <h1
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight tracking-tight relative"
        style={{ fontFamily: "'Coolvetica', sans-serif" }}
      >
        <span>Hi, Im </span> <br />
        <span className="chroma-text">Muhammad "Nuestra"</span>
        <br />
        <span className="chroma-text">Fasya</span>
      </h1>
    </section>
  );
}