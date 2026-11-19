import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import DerniereMiseAJour from "@/components/DerniereMiseAJour";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SocialLinks />
      <DerniereMiseAJour />
      <Footer />
    </div>
  );
};

export default Index;
