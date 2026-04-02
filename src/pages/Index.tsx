import { AboutBrand } from "@/components/sections/AboutBrand";
import { Benefits } from "@/components/sections/Benefits";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { VarnishOptions } from "@/components/sections/VarnishOptions";
import { WoodTypes } from "@/components/sections/WoodTypes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Portfolio />
      <AboutBrand />
      <WoodTypes />
      <VarnishOptions />
      <Benefits />
      <Testimonials />
      <ServiceArea />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
