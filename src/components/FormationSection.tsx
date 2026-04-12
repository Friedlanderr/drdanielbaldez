import { siteData } from "@/data/siteData";
import SectionReveal from "@/components/SectionReveal";
import { ExternalLink } from "lucide-react";

const FormationSection = () => {
  return (
    <section id="formacao" className="section-padding bg-[#c3a57f]/[0.24]">
      <div className="container-narrow">
        <SectionReveal>
          <p className="text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Trajetória
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
            Formação Acadêmica
          </h2>
          <p className="text-base md:text-lg font-sans text-muted-foreground leading-relaxed max-w-3xl mb-12 md:mb-16">
            Consolidei minha formação na UFRGS, onde o Doutorado e o Pós-Doutorado me permitiram mergulhar profundamente na ciência do comportamento. Especializei-me em transtornos de humor, como a depressão e o transtorno bipolar, utilizando metanálise e dados precisos para compreender como os tratamentos impactam a cognição e o bem-estar. Hoje, aplico esse rigor investigativo no consultório, transformando evidências científicas em cuidado humano.
          </p>
        </SectionReveal>

        <div className="max-w-2xl">
          {siteData.formation.map((item, i) => (
            <SectionReveal key={i} delay={0.08 * i}>
              <div className="relative pl-8 pb-10 last:pb-0 border-l border-border">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-primary -translate-x-[5.5px]" />

                <h3 className="text-base md:text-lg font-serif font-medium text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-sans tracking-wider uppercase text-muted-foreground mb-1">
                  {item.period}
                </p>
                <p className="text-sm font-sans text-muted-foreground">
                  {item.institution}
                </p>
              </div>
            </SectionReveal>
          ))}

          <SectionReveal delay={0.08 * siteData.formation.length}>
            <div className="mt-10 flex items-center gap-2 text-sm font-sans text-muted-foreground">
              <span>Currículo Lattes:</span>
              <a
                href="http://lattes.cnpq.br/3649630862886937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Acesse
                <ExternalLink size={16} />
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
