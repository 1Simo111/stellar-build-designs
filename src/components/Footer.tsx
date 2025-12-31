import { Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = {
    services: [
      "Construction Commerciale",
      "Construction Résidentielle",
      "Bâtiments Industriels",
      "Rénovation",
      "Gros Œuvre",
    ],
    company: [
      { name: "À Propos", href: "#services" },
      { name: "Nos Projets", href: "#projects" },
      { name: "Partenaires", href: "#partners" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-dark text-background/80">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="TGCBAT SARL" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-background/60 mb-6 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction.
              Qualité, fiabilité et excellence à chaque étape.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-background text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {links.services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-primary transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-background text-lg mb-6">L'Entreprise</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-primary transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm text-center md:text-left">
            © 2026 TGCBAT SARL. Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Retour en haut"
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
