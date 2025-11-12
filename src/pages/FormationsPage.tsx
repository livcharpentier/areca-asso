import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Users, Clock } from "lucide-react";

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
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-10 h-10 text-accent" />
              <h1 className="text-4xl font-bold text-primary-foreground">Formations</h1>
            </div>
            
            <p className="text-lg text-primary-foreground/80 mb-12">
              L'AFCJA propose régulièrement des formations pour développer les compétences
              des coordinateurs jeunesse dans le domaine de l'audiovisuel.
            </p>

            <div className="space-y-6">
              {formations.map((formation, index) => (
                <Card key={index} className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-2xl text-amber-300 font-semibold tracking-wide leading-relaxed">{formation.title}</CardTitle>
                    <CardDescription className="text-slate-200">
                      {formation.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-sm">{formation.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Users className="w-4 h-4 text-accent" />
                        <span className="text-sm">{formation.participants}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-sm">{formation.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FormationsPage;
