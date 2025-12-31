import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LogoSlider />
      <Services />
      <Projects />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
