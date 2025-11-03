import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DocumentsSection from "@/components/DocumentsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <DocumentsSection />
      <Footer />
    </div>
  );
};

export default Index;
