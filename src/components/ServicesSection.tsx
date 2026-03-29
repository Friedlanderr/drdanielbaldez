import { siteData } from "@/data/siteData";
import SectionReveal from "@/components/SectionReveal";

const ServicesSection = () => {
  return (
    <section id="tratamentos" className="section-padding bg-section-alt">
      <div className="container-narrow">
        <SectionReveal>
          <p className="text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Especialidades
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-12 md:mb-16">
            Tratamentos
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteData.services.map((service, i) => (
            <SectionReveal key={i} delay={0.08 * i}>
              <div className="bg-background rounded-xl p-7 md:p-8 h-full transition-shadow duration-300 hover:shadow-md group">
                <h3 className="text-lg font-serif font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
