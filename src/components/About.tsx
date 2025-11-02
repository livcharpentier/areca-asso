import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Heart, Shield, Users } from "lucide-react";

const About = () => {
  const missions = [
    {
      icon: Target,
      title: "Valoriser le métier",
      description: "Promouvoir et reconnaître le rôle essentiel des coordinateurs jeunesse dans l'audiovisuel",
    },
    {
      icon: Users,
      title: "Fédérer les professionnels",
      description: "Créer une communauté active et solidaire de coordinateurs, coachs et encadrants",
    },
    {
      icon: Shield,
      title: "Défendre les droits",
      description: "Veiller au respect de la réglementation et des conventions collectives",
    },
    {
      icon: Heart,
      title: "Partager les bonnes pratiques",
      description: "Favoriser l'échange d'expériences et la formation continue",
    },
  ];

  return (
    <section id="association" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Notre <span className="text-accent">Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            L'AFCJA rassemble les professionnels de l'encadrement jeunesse dans le cinéma et l'audiovisuel. 
            Notre objectif : garantir les meilleures conditions de travail pour les enfants et les professionnels qui les accompagnent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <Card 
                key={index} 
                className="border-2 border-border hover:border-accent/50 transition-all hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{mission.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{mission.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
