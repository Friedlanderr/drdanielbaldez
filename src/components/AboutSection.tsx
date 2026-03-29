import { siteData } from "@/data/siteData";
import SectionReveal from "@/components/SectionReveal";

const blobPath =
  "M47.2,-57.3C59.9,-46.8,68.2,-30.6,71.4,-13.4C74.6,3.8,72.6,22,63.6,35.8C54.6,49.6,38.5,59,21.2,64.2C3.9,69.4,-14.6,70.4,-30.8,64.1C-47,57.8,-60.9,44.2,-68.2,27.6C-75.5,11,-76.2,-8.6,-69.5,-24.5C-62.8,-40.4,-48.7,-52.6,-34,-61.1C-19.3,-69.6,-3.8,-74.4,8.8,-70.1C21.4,-65.8,34.5,-67.8,47.2,-57.3Z";

const AboutSection = () => {
  const { about } = siteData;

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Text */}
          <div className="lg:col-span-3 space-y-0">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
                {about.title}
              </h2>
            </SectionReveal>

            <div className="space-y-5">
              {about.paragraphs.map((text, i) => (
                <SectionReveal key={i} delay={0.1 * (i + 1)}>
                  <p className="text-base md:text-lg font-sans text-muted-foreground leading-[1.8]">
                    {text}
                  </p>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.3}>
              <div className="pt-6 flex items-center gap-4 text-xs font-sans tracking-widest uppercase text-muted-foreground/70">
                <span>CRM 23245</span>
                <span className="w-px h-3 bg-border" />
                <span>RQE 32423</span>
              </div>
            </SectionReveal>
          </div>

          {/* Photo — organic blob mask */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <SectionReveal delay={0.2}>
              <div className="relative w-72 h-80 md:w-80 md:h-96">
                {/* SVG clip path definition */}
                <svg className="absolute w-0 h-0" aria-hidden="true">
                  <defs>
                    <clipPath id="blob-clip" clipPathUnits="objectBoundingBox">
                      <path
                        d={blobPath}
                        transform="translate(0.5,0.5) scale(0.0058)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div
                  className="w-full h-full animate-blob-float"
                  style={{ clipPath: "url(#blob-clip)" }}
                >
                  <img
                    src="/images/hero-doctor.jpg"
                    alt="Dr. Daniel Baldez — Psiquiatra e Psicoterapeuta"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
