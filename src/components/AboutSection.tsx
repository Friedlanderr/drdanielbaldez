import { siteData } from "@/data/siteData";
import SectionReveal from "@/components/SectionReveal";

const AboutSection = () => {
  const { about } = siteData;

  return (
    <section id="sobre" className="section-padding bg-[#c3a57f]/[0.44]">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Text */}
          <div className="lg:col-span-3 space-y-0">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
                Dr. Daniel Baldez
              </h2>
            </SectionReveal>

            {/* Photo (mobile only — shown right after the title) */}
            <div className="lg:hidden flex justify-center mb-10">
              <SectionReveal delay={0.1}>
                <img
                  src={`${import.meta.env.BASE_URL}images/about-doctor.png`}
                  alt="Dr. Daniel Baldez — Psiquiatra e Psicoterapeuta"
                  className="w-full h-auto max-w-md rounded-lg"
                  loading="lazy"
                />
              </SectionReveal>
            </div>


            <div className="space-y-5">
              {about.paragraphs.map((text, i) => (
                <SectionReveal key={i} delay={0.1 * (i + 1)}>
                  <p className="text-base md:text-lg font-sans text-muted-foreground leading-[1.8] text-justify whitespace-pre-line">
                    {text}
                  </p>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.3}>
              <div className="pt-6 flex items-center gap-4 text-xs font-sans tracking-widest uppercase text-muted-foreground/70">
                <span className="text-base font-medium text-muted-foreground">CREMERS 43674</span>
                <span className="w-px h-3 bg-border" />
                <span className="text-base font-medium text-muted-foreground">RQE 44256</span>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="pt-8 flex justify-center lg:justify-start">
                <a
                  href={`https://wa.me/${siteData.professional.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 h-12 rounded-md font-sans font-bold text-sm tracking-wide uppercase text-white shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ backgroundColor: "hsl(142, 70%, 40%)" }}
                >
                  {siteData.professional.ctaText}
                </a>
              </div>
            </SectionReveal>
          </div>

          {/* Photo */}
          <div className="hidden lg:flex lg:col-span-2 justify-center lg:justify-end">
            <SectionReveal delay={0.2}>
              <img
                src={`${import.meta.env.BASE_URL}images/about-doctor.png`}
                alt="Dr. Daniel Baldez — Psiquiatra e Psicoterapeuta"
                className="w-full h-auto max-w-md rounded-lg"
                loading="lazy"
              />
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
