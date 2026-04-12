import { siteData } from "@/data/siteData";

const FooterSection = () => {
  const p = {
    name: "Dr. Daniel Baldez",
    specialty: "Psiquiatra e Psicoterapeuta",
    credentials: "CREMERS 43674 · RQE 44256",
  };

  return (
    <footer className="py-12 border-t" style={{ backgroundColor: "#34261d" }}>
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-base font-medium text-white">{p.name}</p>
            <p className="text-xs font-sans text-white/80 mt-1">{p.specialty} · {p.credentials}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {siteData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-sans text-white/80 hover:text-white transition-colors tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <p className="text-xs font-sans text-white/60">
            © {new Date().getFullYear()} — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
