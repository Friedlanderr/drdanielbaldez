import { siteData } from "@/data/siteData";
import SectionReveal from "@/components/SectionReveal";

const FormationSection = () => {
  return (
    <section id="formacao" className="section-padding bg-background">
      <div className="container-narrow">
        <SectionReveal>
          <p className="text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Trajetória
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-12 md:mb-16">
            Formação Acadêmica
          </h2>
        </SectionReveal>

        <div className="max-w-2xl">
          {siteData.formation.map((item, i) => (
            <SectionReveal key={i} delay={0.08 * i}>
              <div className="relative pl-8 pb-10 last:pb-0 border-l border-border">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-primary -translate-x-[5.5px]" />

                <p className="text-xs font-sans tracking-wider uppercase text-muted-foreground mb-1">
                  {item.period}
                </p>
                <h3 className="text-base md:text-lg font-serif font-medium text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-muted-foreground">
                  {item.institution}
                </p>
                {item.description && (
                  <p className="text-sm font-sans text-muted-foreground/80 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
