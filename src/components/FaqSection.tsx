import { siteData } from "@/data/siteData";
import SectionReveal from "@/components/SectionReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FaqSection = () => {
  return (
    <section id="faq" className="pt-20 md:pt-28 lg:pt-32 pb-10 md:pb-14 lg:pb-16 bg-background">
      <div className="container-narrow">
        <SectionReveal>
          <p className="text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Dúvidas
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-12 md:mb-16">
            Perguntas frequentes
          </h2>
        </SectionReveal>

        <div className="max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {siteData.faq.map((item, i) => (
              <SectionReveal key={i} delay={0.06 * i}>
                <AccordionItem
                  value={`item-${i}`}
                  className="border border-border rounded-lg px-6 bg-background data-[state=open]:bg-section-alt transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left font-sans text-sm md:text-base font-medium text-foreground hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-sans text-muted-foreground leading-relaxed pb-5 whitespace-pre-line text-left">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </SectionReveal>
            ))}
          </Accordion>

          <SectionReveal delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-sm font-sans text-muted-foreground mb-4">
                Ainda tem dúvidas? Entre em contato.
              </p>
              <Button variant="cta" size="lg" asChild className="bg-[#1fad53] hover:bg-[#1fad53]/90">
                <a
                  href={`https://wa.me/${siteData.professional.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
