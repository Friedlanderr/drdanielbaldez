import { useState, useEffect } from "react";
import { siteData } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5"
    >
      <div className="container-narrow flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="font-serif tracking-tight text-left text-accent-foreground font-bold shadow-none rounded-none flex flex-col leading-tight">
          <span className="text-lg md:text-xl">Dr. Daniel Baldez</span>
          <span className="md:text-sm rounded-none border-none text-[sidebar-primary-foreground] text-popover-foreground font-semibold">Psiquiatra e Psicoterapeuta</span>
        </a>


        {/* CTA Desktop */}
        <div className="hidden lg:block">
          <Button variant="cta" size="lg" asChild>
            <a
              href={`https://wa.me/${siteData.professional.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteData.professional.ctaText}
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border">
          <nav className="container-narrow flex flex-col gap-1 py-6">
            <div className="pt-4">
              <Button variant="cta" size="lg" className="w-full" asChild>
                <a
                  href={`https://wa.me/${siteData.professional.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteData.professional.ctaText}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
