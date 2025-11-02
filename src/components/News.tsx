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
    <section id="projets" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 uppercase tracking-wide">
            Actualités
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-accent mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                    <span className="text-muted-foreground">• {item.category}</span>
                  </div>
                  <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Button variant="link" className="text-accent p-0 h-auto font-semibold">
                    Lire la suite
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
