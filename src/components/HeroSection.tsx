import SectionReveal from "@/components/SectionReveal";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="container-narrow w-full relative z-10">
        <div className="max-w-2xl pt-28 pb-16 lg:pt-36 lg:pb-24">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-white mb-4">
              Dr. Daniel Baldez
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="text-lg md:text-xl font-serif italic text-white/80">
              Psiquiatra e Psicoterapeuta
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
