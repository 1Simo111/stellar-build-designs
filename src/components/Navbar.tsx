import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projets", href: "#projects" },
    { name: "Partenaires", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
        isScrolling ? "bg-background/60 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src={logo} alt="TGCBAT SARL" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="default" size="lg" asChild>
              <a href="#contact">Contactez Nous</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="default" size="lg" className="mt-4" asChild>
                <a href="#contact">Contactez Nous</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
