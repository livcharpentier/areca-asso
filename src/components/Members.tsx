import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, Heart, Utensils, Search } from "lucide-react";

const Members = () => {
  const categories = [
    {
      icon: Users,
      title: "Responsables Enfants",
      count: "120+",
      description: "Coordinateurs et chefs de production jeunesse",
    },
    {
      icon: GraduationCap,
      title: "Coachs & Précepteurs",
      count: "45+",
      description: "Accompagnement pédagogique et scolaire",
    },
    {
      icon: Heart,
      title: "Animateurs",
      count: "80+",
      description: "Encadrants et animateurs jeunesse",
    },
    {
      icon: Utensils,
      title: "Cantiniers",
      count: "25+",
      description: "Restauration sur tournages",
    },
  ];

  return (
    <section id="membres" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Notre <span className="text-accent">Communauté</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Plus de 270 professionnels qualifiés à votre service. Trouvez le membre idéal pour votre production.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Search className="w-5 h-5 mr-2" />
            Rechercher un membre
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="text-center border-2 border-border hover:border-accent/50 transition-all hover:shadow-lg group cursor-pointer"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent mb-2">{category.count}</div>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Members;
