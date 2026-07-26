import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FormationsPage = () => {
  const formations = [
    {
      title: "Formation Coordination Jeunesse",
      description: "Formation complète sur les techniques de coordination pour les projets audiovisuels jeunesse",
      duration: "3 jours",
      participants: "12-15 personnes",
      date: "À venir",
    },
    {
      title: "Atelier Gestion de Projet",
      description: "Apprentissage des outils et méthodes de gestion de projet dans l'audiovisuel",
      duration: "2 jours",
      participants: "10-12 personnes",
      date: "À venir",
    },
    {
      title: "Séminaire Nouvelles Technologies",
      description: "Découverte des nouvelles technologies et outils pour l'audiovisuel jeunesse",
      duration: "1 jour",
      participants: "20-25 personnes",
      date: "À venir",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground">Formations</h1>
            </div>

            <div className="bg-muted/50 border border-border p-5 rounded-lg mb-12">
              <div>
                <p className="font-semibold text-primary text-lg mb-1">
                  Formations en préparation
                </p>
                <p className="text-sm text-foreground/90">
                  Les formations présentées ci-dessous sont actuellement en cours de préparation.
                  Elles seront officiellement disponibles d'ici 18 mois.
                  Nous vous tiendrons informés de leur lancement via notre page actualités.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold text-primary mb-2">AFDAS</h2>
              <p className="text-foreground text-lg">En cours</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FormationsPage;
