import { siteData } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const ContactSection = () => {
  const p = siteData.professional;

  return (
    <section id="contato" className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <SectionReveal>
              <p className="text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Agende
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
                Entre em contato
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-relaxed mb-8 max-w-md">
                Será um prazer recebê-la. Agende sua consulta ou tire suas dúvidas pelo WhatsApp.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <Button variant="cta" size="xl" asChild>
                <a
                  href={`https://wa.me/${p.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.ctaText}
                </a>
              </Button>
            </SectionReveal>
          </div>

          {/* Right — info */}
          <div>
            <SectionReveal delay={0.1}>
              <div className="space-y-6">
                <InfoItem icon={<Phone size={18} />} label="Telefone" value={p.phone} />
                <InfoItem icon={<Mail size={18} />} label="E-mail" value={p.email} />
                <InfoItem icon={<MapPin size={18} />} label="Endereço" value={`${p.address}\n${p.city}`} />
                <InfoItem icon={<Clock size={18} />} label="Horários" value={`${p.hours}\n${p.modality}`} />
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-sm font-sans text-muted-foreground">Instagram:</span>
                  <a
                    href={p.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-sans text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    https://www.instagram.com/danielpratesbdz/
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-4">
    <span className="mt-0.5 text-primary">{icon}</span>
    <div>
      <p className="text-xs font-sans tracking-wider uppercase text-muted-foreground mb-1 font-bold">{label}</p>
      <p className="text-sm font-sans text-foreground whitespace-pre-line leading-relaxed">{value}</p>
    </div>
  </div>
);

export default ContactSection;
