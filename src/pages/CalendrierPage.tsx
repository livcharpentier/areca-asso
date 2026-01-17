import Navigation from "@/components/Navigation";
import RegionalCalendar from "@/components/RegionalCalendar";
import DrieetsDossier from "@/components/DrieetsDossier";
import ArtistSalaries from "@/components/ArtistSalaries";
import HealthMonitoring from "@/components/HealthMonitoring";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Heart } from "lucide-react";

const CalendrierPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Dossier Enfants du Spectacle
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tout ce que vous devez savoir pour constituer un dossier, connaître les dates de commissions et respecter la réglementation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content avec Tabs */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="calendrier" className="w-full" orientation="vertical">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Sidebar avec les onglets à gauche */}
              <TabsList className="flex flex-col h-auto w-full md:w-64 bg-muted p-2 rounded-lg shrink-0">
                <TabsTrigger value="calendrier" className="w-full justify-start gap-3 px-4 py-3">
                  <Calendar className="h-5 w-5" />
                  <span>Calendrier</span>
                </TabsTrigger>
                <TabsTrigger value="confection" className="w-full justify-start gap-3 px-4 py-3">
                  <FileText className="h-5 w-5" />
                  <span>Confection</span>
                </TabsTrigger>
                <TabsTrigger value="suivi-sante" className="w-full justify-start gap-3 px-4 py-3">
                  <Heart className="h-5 w-5" />
                  <span>Suivi Santé</span>
                </TabsTrigger>
                <TabsTrigger value="salaires" className="w-full justify-start gap-3 px-4 py-3">
                  <FileText className="h-5 w-5" />
                  <span>Salaires Artistes</span>
                </TabsTrigger>
              </TabsList>

              {/* Contenu à droite */}
              <div className="flex-1 min-w-0">
                <TabsContent value="calendrier" className="mt-0">
                  <RegionalCalendar />
                </TabsContent>

                <TabsContent value="confection" className="mt-0">
                  <DrieetsDossier />
                </TabsContent>

                <TabsContent value="suivi-sante" className="mt-0">
                  <HealthMonitoring />
                </TabsContent>

                <TabsContent value="salaires" className="mt-0">
                  <ArtistSalaries />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CalendrierPage;
