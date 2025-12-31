import { ArrowRight, Award, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const stats = [
    { icon: Building2, value: "150+", label: "Projets Réalisés" },
    { icon: Users, value: "50+", label: "Clients Satisfaits" },
    { icon: Award, value: "15+", label: "Années d'Expérience" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-background/90 text-sm font-medium">
              Construction & Bâtiment depuis 2009
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Construisons Ensemble{" "}
            <span className="text-primary">Vos Projets</span>{" "}
            d'Avenir
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            GCBAT SARL, votre partenaire de confiance pour tous vos projets de construction. 
            De la conception à la réalisation, nous donnons vie à vos ambitions avec excellence et professionnalisme.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Demander un Devis
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#projects">Voir Nos Projets</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <stat.icon className="h-5 w-5 text-primary hidden md:block" />
                  <span className="text-2xl md:text-3xl font-bold text-background">
                    {stat.value}
                  </span>
                </div>
                <p className="text-background/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
