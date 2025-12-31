import { Building, Home, Warehouse, Wrench, HardHat, Ruler } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Construction Commerciale",
      description: "Bureaux, commerces et bâtiments professionnels clés en main avec des finitions haut de gamme.",
    },
    {
      icon: Home,
      title: "Construction Résidentielle",
      description: "Maisons individuelles et appartements conçus selon vos besoins et votre style de vie.",
    },
    {
      icon: Warehouse,
      title: "Bâtiments Industriels",
      description: "Entrepôts, usines et installations industrielles optimisés pour votre activité.",
    },
    {
      icon: Wrench,
      title: "Rénovation",
      description: "Transformation et modernisation de vos espaces existants avec expertise.",
    },
    {
      icon: HardHat,
      title: "Gros Œuvre",
      description: "Fondations, structures et travaux de maçonnerie réalisés avec précision.",
    },
    {
      icon: Ruler,
      title: "Études & Conception",
      description: "Accompagnement complet de votre projet de l'étude à la réalisation finale.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Une Expertise Complète en{" "}
            <span className="text-secondary">Construction</span>
          </h2>
          <p className="text-muted-foreground">
            De la conception à la livraison, nous vous accompagnons à chaque étape de votre projet 
            avec professionnalisme et engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
