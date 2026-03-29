import { siteData } from "@/data/siteData";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${siteData.professional.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;
