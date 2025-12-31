import { Building2, ShieldCheck, Award, Handshake } from "lucide-react";

const Partners = () => {
  const partnerLogos = [
    "Bouygues Construction",
    "Vinci",
    "Eiffage",
    "Lafarge",
    "Saint-Gobain",
    "Schneider Electric",
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Qualité Certifiée",
      description: "Normes ISO 9001 et certifications professionnelles",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Standards de qualité les plus élevés du secteur",
    },
    {
      icon: Handshake,
      title: "Partenariats Solides",
      description: "Relations durables avec les meilleurs fournisseurs",
    },
    {
      icon: Building2,
      title: "Réseau Étendu",
      description: "Accès aux meilleures ressources du marché",
    },
  ];

  return (
    <section id="partners" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-background/80 font-semibold mb-4 uppercase tracking-wider text-sm">
            Nos Partenaires
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Des Partenaires de Confiance pour des{" "}
            <span className="text-primary">Projets Réussis</span>
          </h2>
          <p className="text-background/70">
            Nous collaborons avec les acteurs majeurs de l'industrie pour vous garantir 
            les meilleures solutions et matériaux.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className="bg-background/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center hover:bg-background/20 transition-colors duration-300"
            >
              <span className="text-background font-bold text-sm text-center">
                {partner}
              </span>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-background/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-background mb-2">
                {value.title}
              </h3>
              <p className="text-background/70 text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
