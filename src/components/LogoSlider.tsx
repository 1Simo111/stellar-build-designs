import a2IngenierieLogo from "@/assets/partners/a2-ingenierie.jpeg";
import autodistributionLogo from "@/assets/partners/logo-autodistribution.png";
import lmmLogo from "@/assets/partners/lmm-agencement.png";
import coinDeChaisesLogo from "@/assets/partners/coin-de-chaises.jpeg";
import admLogo from "@/assets/partners/ADM-logo.png";
import adohaLogo from "@/assets/partners/logo-addoha.png";
import ministereLogo from "@/assets/partners/ministere-de-la-sante-et-de-la-protection-sociale-logo-png_seeklogo-427326.png";
import sourceChimiquesLogo from "@/assets/partners/SOURCE-CHIMIQUES.png";
import vdlLogo from "@/assets/partners/vdl_logo-removebg-preview.png";
import klkLogo from "@/assets/partners/klk_logo.png";
import newPartnerLogo from "@/assets/partners/new.png";

const LogoSlider = () => {
  const logos = [
    { name: "A2 Ingénierie", logo: a2IngenierieLogo },
    { name: "Autodistribution", logo: autodistributionLogo },
    { name: "LMM Agencement", logo: lmmLogo },
    { name: "Coin de Chaises", logo: coinDeChaisesLogo },
    { name: "ADM", logo: admLogo },
    { name: "Addoha", logo: adohaLogo },
    { name: "Ministère de la Santé", logo: ministereLogo },
    { name: "Source Chimiques", logo: sourceChimiquesLogo },
    { name: "VDL", logo: vdlLogo },
    { name: "KLK", logo: klkLogo },
    { name: "Nouveau Partenaire", logo: newPartnerLogo },
  ];

  const duplicated = [...logos, ...logos];

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto w-[70%] px-6">
        <div className="relative overflow-hidden rounded-2xl bg-white">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
          <div className="logo-marquee items-center gap-12 py-6 whitespace-nowrap">
            {duplicated.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex min-w-[180px] items-center justify-center shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto transition duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
