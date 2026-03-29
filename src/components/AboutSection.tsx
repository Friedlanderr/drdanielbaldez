import { siteData } from "@/data/siteData";
import SectionReveal from "@/components/SectionReveal";

const AboutSection = () => {
  const { about } = siteData;

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-3">
            <SectionReveal>
              <p className="text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Conheça
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-8">
                {about.title}
              </h2>
            </SectionReveal>

            {about.paragraphs.map((text, i) => (
              <SectionReveal key={i} delay={0.1 * (i + 1)}>
                <p className="text-base md:text-lg font-sans text-muted-foreground leading-relaxed mb-6">
                  {text}
                </p>
              </SectionReveal>
            ))}
          </div>

          {/* Photo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <SectionReveal delay={0.2}>
              <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src="/images/hero-doctor.jpg"
                  alt={`${siteData.professional.name} — ${siteData.professional.specialty}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Highlights */}
        <SectionReveal delay={0.3}>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {about.highlights.map((item, i) => (
              <div
                key={i}
                className="bg-section-alt rounded-xl p-6 flex items-start gap-3"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <p className="text-sm font-sans text-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default AboutSection;
