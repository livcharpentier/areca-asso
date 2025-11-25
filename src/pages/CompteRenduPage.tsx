import Navigation from "@/components/Navigation";
import DailyReport from "@/components/DailyReport";
import Footer from "@/components/Footer";

const CompteRenduPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Compte Rendu Journalier de Tournage
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guide complet pour remplir le compte rendu quotidien des mineurs sur le tournage
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <DailyReport />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompteRenduPage;
