import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, Wrench } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Conventions Collectives",
      items: ["CCNPC Cinéma", "CCNPAV Audiovisuel", "Grilles salariales", "Stages"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Wrench,
      title: "Boîte à Outils",
      items: ["Fiches enfants", "Plannings types", "Suivi scolaire", "Modèles documents"],
      color: "from-accent to-gold-glow",
    },
    {
      icon: Calendar,
      title: "Calendriers",
      items: ["Calendrier scolaire", "Périodes examens", "Vacances zones A/B/C", "Jours fériés"],
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section id="conventions" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-accent">Ressources</span> & Outils
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Accédez à tous les documents essentiels pour exercer votre métier en toute conformité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card 
                key={index} 
                className="border-2 border-border hover:border-accent/50 transition-all hover:shadow-lg group overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${resource.color}`} />
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {resource.items.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-accent/10">
                    <Download className="w-4 h-4 mr-2" />
                    Accéder
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;
