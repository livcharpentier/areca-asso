import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import CommissionCalendar from "@/components/CommissionCalendar";
import DrieetsDossier from "@/components/DrieetsDossier";
import DocumentsSection from "@/components/DocumentsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WorkTimeRegulations />
      <CommissionCalendar />
      <DrieetsDossier />
      <DocumentsSection />
      <Footer />
    </div>
  );
};

export default Index;
