import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import RegulationsInfo from "@/components/RegulationsInfo";

const MinorsEmploymentPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Sections réglementation et informations */}
      <RegulationsInfo />
      
      {/* Réglementation des horaires détaillée */}
      <WorkTimeRegulations />
      
      <Footer />
    </div>
  );
};

export default MinorsEmploymentPage;
