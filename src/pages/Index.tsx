import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ChildSupervisorRole from "@/components/ChildSupervisorRole";
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
      <ChildSupervisorRole />
      <WorkTimeRegulations />
      <DrieetsDossier />
      <DocumentsSection />
      <Footer />
    </div>
  );
};

export default Index;
