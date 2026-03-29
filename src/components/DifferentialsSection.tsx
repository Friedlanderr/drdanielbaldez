import { siteData } from "@/data/siteData";
import SectionReveal from "@/components/SectionReveal";

const DifferentialsSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <SectionReveal>
          <p className="text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3 text-center">
            Por que escolher
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-12 md:mb-16 text-center">
            Minha proposta de cuidado
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {siteData.differentials.map((item, i) => (
            <SectionReveal key={i} delay={0.1 * i}>
              <div className="text-center">
                <h3 className="text-base font-serif font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
