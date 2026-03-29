import { siteData } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";

const HeroSection = () => {
  const p = siteData.professional;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-hero-bg overflow-hidden">
      <div className="container-narrow w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-28 pb-16 lg:pt-32 lg:pb-20">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            <SectionReveal>
              <p className="text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground mb-4">
                {p.title}
              </p>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground mb-4">
                {p.name}
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-lg md:text-xl font-serif italic text-muted-foreground mb-3">
                {p.specialty}
              </p>
              <p className="text-sm font-sans text-muted-foreground tracking-wide mb-6">
                {p.credentials}
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="text-base md:text-lg font-sans text-muted-foreground leading-relaxed mb-8 max-w-lg">
                {p.tagline}
              </p>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" asChild>
                  <a
                    href={`https://wa.me/${p.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.ctaText}
                  </a>
                </Button>
                <Button variant="cta-outline" size="xl" asChild>
                  <a href="#sobre">{p.ctaSecondary}</a>
                </Button>
              </div>
            </SectionReveal>
          </div>

          {/* Image column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <SectionReveal delay={0.2}>
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-[22rem] lg:h-[30rem] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/hero-doctor.jpg"
                  alt={`${p.name} — ${p.specialty}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
