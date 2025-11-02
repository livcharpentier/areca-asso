import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Search } from "lucide-react";

const Members = () => {
  const categories = [
    { title: "Responsables Enfants", count: 120, description: "Coordinateurs et chefs de production jeunesse" },
    { title: "Coachs", count: 45, description: "Accompagnement artistique" },
    { title: "Précepteurs", count: 35, description: "Suivi pédagogique et scolaire" },
    { title: "Animateurs", count: 45, description: "Encadrants jeunesse" },
    { title: "Cantiniers", count: 25, description: "Restauration sur tournages" },
    { title: "Autres membres", count: 10, description: "Membres associés et honoraires" },
  ];

  return (
    <section id="membres" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
              Membres
            </h2>
            <Button className="bg-accent text-white hover:bg-coral shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Search className="w-4 h-4 mr-2" />
              Rechercher un membre
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => {
              const colors = [
                { bg: 'bg-coral-light', text: 'text-accent', icon: 'text-accent' },
                { bg: 'bg-green-light', text: 'text-primary', icon: 'text-primary' },
                { bg: 'bg-blue-light', text: 'text-blue-sky', icon: 'text-blue-sky' },
                { bg: 'bg-gold-light', text: 'text-gold', icon: 'text-gold' },
                { bg: 'bg-coral-light', text: 'text-accent', icon: 'text-accent' },
                { bg: 'bg-green-light', text: 'text-primary', icon: 'text-primary' }
              ];
              const color = colors[index];
              
              return (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-accent">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>{category.title}</span>
                      <div className={`w-10 h-10 rounded-full ${color.bg} flex items-center justify-center`}>
                        <Users className={`w-5 h-5 ${color.icon}`} />
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`text-3xl font-bold ${color.text} mb-2`}>{category.count}</div>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
