import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";

const pillars = [
  {
    title: "Psiquiatria Clínica",
    description:
      "Avaliação, diagnóstico e tratamento de transtornos mentais com abordagem baseada em evidências, acompanhamento individualizado e manejo medicamentoso criterioso.",
  },
  {
    title: "Psicoterapia",
    description:
      "Processo terapêutico estruturado para promover autoconhecimento, desenvolver estratégias de enfrentamento e favorecer mudanças significativas na qualidade de vida.",
  },
];

const ServicesSection = () => {
  return (
    <section id="tratamentos" className="section-padding bg-section-alt">
      <div className="container-narrow">
        <SectionReveal>
          <p className="text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Áreas de atuação
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-12 md:mb-16">
            Tratamentos
          </h2>
        </SectionReveal>

        {/* Two pillars */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {pillars.map((pillar, i) => (
            <SectionReveal key={i} delay={0.1 * i}>
              <div className="bg-background rounded-2xl p-8 md:p-10 h-full border border-border/50 transition-all duration-300 hover:shadow-md hover:border-border">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base font-sans text-muted-foreground leading-relaxed md:text-left text-justify">
                  {pillar.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Bipolar highlight */}
        <SectionReveal delay={0.25}>
          <div className="relative rounded-2xl overflow-hidden bg-primary/5 border border-primary/15 p-8 md:p-12 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-primary rounded-full" />
            <p className="text-xs font-sans tracking-[0.25em] uppercase text-primary mb-4 mt-2">
              ESPECIALIDADE
            </p>
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
              Transtornos do Humor
            </h3>
            <p className="max-w-xl mx-auto text-sm md:text-base font-sans text-muted-foreground leading-relaxed whitespace-pre-line text-justify">
              Abordagem especializada no diagnóstico, tratamento e acompanhamento do transtornos do humor, com foco na estabilização do humor, prevenção de recaídas e promoção de qualidade de vida.
              {"\n\n"}
              Tendo como principal foco o transtorno bipolar, depressão maior, depressão de difícil tratamento (DDT), transtorno esquizoafetivo e transtornos de ansiedade
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.35}>
          <div className="mt-12 text-center">
            <Button variant="cta" size="lg" asChild>
              <a
                href={`https://wa.me/${siteData.professional.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </a>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
