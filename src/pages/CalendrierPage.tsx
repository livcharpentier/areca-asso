import Navigation from "@/components/Navigation";
import RegionalCalendar from "@/components/RegionalCalendar";
import DrieetsDossier from "@/components/DrieetsDossier";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Clock, BookOpen } from "lucide-react";

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
          <Tabs defaultValue="calendrier" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="calendrier" className="gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Calendrier</span>
              </TabsTrigger>
              <TabsTrigger value="confection" className="gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Confection</span>
              </TabsTrigger>
              <TabsTrigger value="reglementation" className="gap-2">
                <Clock className="h-4 w-4" />
                <span className="hidden sm:inline">Temps de travail</span>
              </TabsTrigger>
              <TabsTrigger value="documents" className="gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Documents</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="calendrier">
              <RegionalCalendar />
            </TabsContent>

            <TabsContent value="confection">
              <DrieetsDossier />
            </TabsContent>

            <TabsContent value="reglementation">
              <WorkTimeRegulations />
            </TabsContent>

            <TabsContent value="documents">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Documents de référence</CardTitle>
                  <CardDescription>
                    Téléchargez les documents officiels pour vous accompagner
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <a
                      href="/guide_commission_enfants_spectacle.doc"
                      download
                      className="flex items-center gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-semibold">Guide Commission Enfants</p>
                        <p className="text-sm text-muted-foreground">Format DOC</p>
                      </div>
                    </a>
                    
                    <a
                      href="/livret_travail_des_enfants_080223.pdf"
                      download
                      className="flex items-center gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-semibold">Livret Travail des Enfants</p>
                        <p className="text-sm text-muted-foreground">Format PDF</p>
                      </div>
                    </a>

                    <a
                      href="/duree_travail_enfants_spectacle_drieets.pdf"
                      download
                      className="flex items-center gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-semibold">Durée de travail DRIEETS</p>
                        <p className="text-sm text-muted-foreground">Format PDF</p>
                      </div>
                    </a>

                    <a
                      href="/informations_emploi_mineurs_spectacle_drieets.pdf"
                      download
                      className="flex items-center gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-semibold">Informations Emploi Mineurs</p>
                        <p className="text-sm text-muted-foreground">Format PDF</p>
                      </div>
                    </a>
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

export default CalendrierPage;
