import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CharterHighlights from "@/components/CharterHighlights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CharterHighlights />
      <Footer />
    </div>
  );
};

export default Index;
