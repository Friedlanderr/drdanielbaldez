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

            <SectionReveal delay={0.3}>
              <p className="text-sm font-sans tracking-wide text-muted-foreground mb-1">CRM 23245</p>
              <p className="text-sm font-sans tracking-wide text-muted-foreground">RQE 32423</p>
            </SectionReveal>
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
      </div>
    </section>
  );
};

export default AboutSection;
