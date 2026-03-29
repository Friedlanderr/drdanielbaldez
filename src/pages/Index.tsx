import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FormationSection from "@/components/FormationSection";

import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FormationSection />
        
        <FaqSection />
        <ContactSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default Index;
