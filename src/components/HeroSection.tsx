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

    </section>
  );
};

export default HeroSection;
