import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CharterHighlights from "@/components/CharterHighlights";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CharterHighlights />
      <About />
      <Footer />
    </div>
  );
};

export default Index;