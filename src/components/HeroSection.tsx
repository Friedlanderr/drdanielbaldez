import { siteData } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";

const HeroSection = () => {
  const p = siteData.professional;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="container-narrow w-full relative z-10">
        <div className="max-w-2xl pt-28 pb-16 lg:pt-36 lg:pb-24">
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
      </div>
    </section>
  );
};

export default HeroSection;
