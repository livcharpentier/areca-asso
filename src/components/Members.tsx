import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Members = () => {
  const navigate = useNavigate();
  
  const categories = [
    { title: "Responsables Enfants", count: 10, description: "Coordinateurs et chefs de production jeunesse", slug: "responsables-enfants" },
    { title: "Coachs", count: 9, description: "Accompagnement artistique", slug: "coachs" },
    { title: "Précepteurs", count: 9, description: "Suivi pédagogique et scolaire", slug: "precepteurs" },
    { title: "Animateurs", count: 9, description: "Encadrants jeunesse", slug: "animateurs" },
    { title: "Cantiniers", count: 9, description: "Restauration sur tournages", slug: "cantiniers" },
    { title: "Autres membres", count: 9, description: "Membres associés et honoraires", slug: "autres" },
  ];

  return (
    <section id="membres" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
              Membres
            </h2>
            <Button className="bg-accent text-white hover:bg-blue-vibrant shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Search className="w-4 h-4 mr-2" />
              Rechercher un membre
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => {
              const colors = [
                { bg: 'bg-blue-vibrantLight', text: 'text-accent', icon: 'text-accent' },
                { bg: 'bg-green-light', text: 'text-primary', icon: 'text-primary' },
                { bg: 'bg-blue-light', text: 'text-blue-sky', icon: 'text-blue-sky' },
                { bg: 'bg-gold-light', text: 'text-gold', icon: 'text-gold' },
                { bg: 'bg-blue-vibrantLight', text: 'text-accent', icon: 'text-accent' },
                { bg: 'bg-green-light', text: 'text-primary', icon: 'text-primary' }
              ];
              const color = colors[index];
              
              return (
                <Card 
                  key={index} 
                  className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  onClick={() => navigate(`/members/${category.slug}`)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-amber-300 font-semibold tracking-wide leading-relaxed flex items-center justify-between">
                      <span>{category.title}</span>
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-accent" />
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-accent mb-2">{category.count}</div>
                        <p className="text-sm text-slate-200">{category.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
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
