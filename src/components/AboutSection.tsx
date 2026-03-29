import { siteData } from "@/data/siteData";
import SectionReveal from "@/components/SectionReveal";

const AboutSection = () => {
  const { about } = siteData;

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
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

          {/* Highlights */}
          <div className="lg:col-span-2">
            <SectionReveal delay={0.2}>
              <div className="bg-section-alt rounded-xl p-8 lg:mt-12">
                <h3 className="text-sm font-sans tracking-[0.15em] uppercase text-muted-foreground mb-6">
                  Diferenciais
                </h3>
                <ul className="space-y-4">
                  {about.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-foreground font-sans text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
