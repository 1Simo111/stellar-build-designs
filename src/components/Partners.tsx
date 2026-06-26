import { Building2, ShieldCheck, Award, Handshake } from "lucide-react";
import autodistributionLogo from "@/assets/partners/logo-autodistribution.png";
import a2IngenierieLogo from "@/assets/partners/a2-ingenierie.jpeg";
import lmmLogo from "@/assets/partners/lmm-agencement.png";
import admLogo from "@/assets/partners/ADM-logo.png";
import adohaLogo from "@/assets/partners/logo-addoha.png";
import ministereLogo from "@/assets/partners/ministere-de-la-sante-et-de-la-protection-sociale-logo-png_seeklogo-427326.png";
import sourceChimiquesLogo from "@/assets/partners/SOURCE-CHIMIQUES.png";
import vdlLogo from "@/assets/partners/vdl_logo-removebg-preview.png";
import klkLogo from "@/assets/partners/klk_logo.png";
import genericLogo1 from "@/assets/partners/Screenshot from 2025-12-31 22-12-42.png";
import genericLogo2 from "@/assets/partners/Screenshot from 2025-12-31 22-13-09.png";
import genericLogo3 from "@/assets/partners/logo.svg";
import genericLogo4 from "@/assets/partners/images.jpg";

const Partners = () => {
  const partnerLogos = [
    { name: "A2 Ingénierie", logo: a2IngenierieLogo },
    { name: "Autodistribution", logo: autodistributionLogo },
    { name: "LMM Agencement", logo: lmmLogo },
    { name: "ADM", logo: admLogo },
    { name: "Addoha", logo: adohaLogo },
    { name: "Ministère de la Santé", logo: ministereLogo },
    { name: "Source Chimiques", logo: sourceChimiquesLogo },
    { name: "VDL", logo: vdlLogo },
    { name: "KLK", logo: klkLogo },
    { name: "Partenaire", logo: genericLogo1 },
    { name: "Partenaire", logo: genericLogo2 },
    { name: "Partenaire", logo: genericLogo3 },
    { name: "Partenaire", logo: genericLogo4 },
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
    <section id="partners" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Nos Partenaires
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Des Partenaires de Confiance pour des{" "}
            <span className="text-primary">Projets Réussis</span>
          </h2>
          <p className="text-muted-foreground">
            Nous collaborons avec les acteurs majeurs de l'industrie pour vous garantir 
            les meilleures solutions et matériaux.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {partnerLogos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="bg-background rounded-lg p-5 flex items-center justify-center border border-border shadow-sm hover:shadow-md transition-all duration-300 w-[160px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain transition duration-300"
                loading="lazy"
              />
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
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-4 border border-border">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
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
