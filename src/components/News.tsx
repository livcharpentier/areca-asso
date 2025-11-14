import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const news = [
    {
      date: "24.10.2025",
      category: "Actualités Générales",
      title: "Nouvelles grilles salariales 2025",
      excerpt: "Publication des nouveaux barèmes pour les coordinateurs jeunesse dans les conventions collectives cinéma et audiovisuel...",
    },
    {
      date: "12.10.2025",
      category: "Vie de l'AFCJA",
      title: "L'AFCJA accueille 11 nouveaux membres",
      excerpt: "Nous sommes heureux d'accueillir de nouveaux professionnels au sein de notre association...",
    },
    {
      date: "05.10.2025",
      category: "Réglementation",
      title: "Mise à jour du Code du Travail",
      excerpt: "Nouvelles dispositions concernant le travail des enfants dans l'audiovisuel. Points clés à retenir...",
    },
  ];

  return (
    <section id="projets" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 uppercase tracking-wide">
            Actualités
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => {
              const colors = [
                { accent: 'text-accent', border: 'border-t-accent', button: 'text-accent hover:text-blue-vibrant' },
                { accent: 'text-primary', border: 'border-t-primary', button: 'text-primary hover:text-green-forest' },
                { accent: 'text-blue-sky', border: 'border-t-blue-sky', button: 'text-blue-sky hover:text-accent' }
              ];
              const color = colors[index % 3];
              
              return (
                <Card key={index} className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-blue-200 mb-2">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                      <span className="text-slate-400">• {item.category}</span>
                    </div>
                    <CardTitle className="text-xl text-amber-300 font-semibold tracking-wide leading-relaxed">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-200 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Button variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto font-semibold transition-colors">
                      Lire la suite
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
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

export default News;
