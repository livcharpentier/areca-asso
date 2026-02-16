import Navigation from "@/components/Navigation";
import DocumentsSection from "@/components/DocumentsSection";
import Footer from "@/components/Footer";

const DocumentsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Sources et Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tous les documents officiels et guides de référence en téléchargement
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <DocumentsSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocumentsPage;
