import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import RegionalCalendar from "@/components/RegionalCalendar";
import DepotDossier from "@/components/DepotDossier";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Calendar, FileText } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const ProductionPage = () => {
  const [params] = useSearchParams();
  const onglet = params.get("onglet");
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Informations concernant le travail des enfants
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Toutes les informations essentielles pour les productions employant des mineurs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content avec Tabs */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue={onglet && ["depot", "dossier-drieets", "temps-travail"].includes(onglet) ? onglet : "depot"} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="depot" className="gap-2 px-1 sm:px-3">
                <FileText className="h-4 w-4 hidden sm:block" />
                <span>Déposer un dossier</span>
              </TabsTrigger>
              <TabsTrigger value="dossier-drieets" className="gap-2 px-1 sm:px-3">
                <Calendar className="h-4 w-4 hidden sm:block" />
                <span>Calendrier des commissions</span>
              </TabsTrigger>
              <TabsTrigger value="temps-travail" className="gap-2 px-1 sm:px-3">
                <Clock className="h-4 w-4 hidden sm:block" />
                <span>Temps de travail</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="depot">
              <DepotDossier />
            </TabsContent>

            <TabsContent value="dossier-drieets">
              <RegionalCalendar />
            </TabsContent>

            <TabsContent value="temps-travail">
              <WorkTimeRegulations />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductionPage;
