import Navigation from "@/components/Navigation";
import DocumentsSection from "@/components/DocumentsSection";
import Resources from "@/components/Resources";
import CommissionCalendar from "@/components/CommissionCalendar";
import DrieetsDossier from "@/components/DrieetsDossier";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Calendar, BookOpen, AlertCircle, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

const DocumentsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Sources et Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Toutes les ressources, documents officiels et informations pratiques en un seul endroit
            </p>
          </div>
        </div>
      </section>

      {/* Main Content avec Tabs */}
      <section className="py-8 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="documents" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="documents" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Documents Légaux</span>
                <span className="sm:hidden">Docs</span>
              </TabsTrigger>
              <TabsTrigger value="salaires-techniciens" className="gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Salaires Techniciens</span>
                <span className="sm:hidden">Salaires</span>
              </TabsTrigger>
              <TabsTrigger value="calendrier" className="gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Calendrier Commissions</span>
                <span className="sm:hidden">Calendrier</span>
              </TabsTrigger>
              <TabsTrigger value="dossier" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Dossier DRIEETS</span>
                <span className="sm:hidden">DRIEETS</span>
              </TabsTrigger>
              <TabsTrigger value="vhss" className="gap-2">
                <AlertCircle className="h-4 w-4" />
                <span className="hidden sm:inline">VHSS</span>
                <span className="sm:hidden">VHSS</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="documents">
              <DocumentsSection />
            </TabsContent>

            <TabsContent value="salaires-techniciens">
              <Resources />
            </TabsContent>

            <TabsContent value="calendrier">
              <CommissionCalendar />
            </TabsContent>

            <TabsContent value="dossier">
              <DrieetsDossier />
            </TabsContent>

            <TabsContent value="vhss">
              <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-destructive" />
                    Prévention des Violences et Harcèlements Sexistes et Sexuels (VHSS)
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Documentation et ressources sur la prévention VHSS
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-destructive/10 border-2 border-destructive/50 p-5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⚠️</span>
                      <div>
                        <p className="font-semibold text-foreground text-lg mb-1">
                          FORMATION OBLIGATOIRE
                        </p>
                        <p className="text-sm text-foreground/90">
                          La formation VHSS est obligatoire pour les producteurs (depuis 2022) et pour toutes les équipes de tournage (depuis janvier 2025).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => window.open('/etude_vhss_cine-av_assos_professionnelles_2025_afar_full_def.pdf', '_blank')}
                      className="w-full bg-blue-950/40 hover:bg-blue-950/60 text-accent font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 border border-accent/20"
                    >
                      <Download className="w-5 h-5" />
                      Télécharger l'étude complète VHSS (Février 2025)
                    </button>
                    
                    <div className="text-center text-sm text-slate-300">
                      <p>Pour plus d'informations détaillées, consultez la <a href="/vhss" className="text-accent hover:underline">page VHSS complète</a></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocumentsPage;
