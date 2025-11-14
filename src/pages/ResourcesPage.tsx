import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center justify-center gap-2">
                  <FileText className="h-8 w-8 text-accent" />
                  Salaires Techniciens
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-slate-200">
                  Les informations sur les salaires des techniciens du cinéma et de l'audiovisuel sont maintenant disponibles dans la section <strong className="text-accent">"Sources et Documentation"</strong>.
                </p>
                <a 
                  href="/documents" 
                  className="inline-block bg-accent hover:bg-blue-vibrant text-white font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg"
                >
                  Accéder aux ressources
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
