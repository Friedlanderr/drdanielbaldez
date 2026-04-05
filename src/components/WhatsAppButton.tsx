import { siteData } from "@/data/siteData";

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${siteData.professional.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      style={{ backgroundColor: "hsl(142, 70%, 40%)", color: "white" }}
      aria-label="Chame no WhatsApp"
    >
      
      <span className="font-sans font-bold text-sm">Chame no WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
