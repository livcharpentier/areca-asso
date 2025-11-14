import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import DrieetsDossier from "@/components/DrieetsDossier";
import DocumentsSection from "@/components/DocumentsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <WorkTimeRegulations />
      <DrieetsDossier />
      <DocumentsSection />
      <Footer />
    </div>
  );
};

export default Index;
