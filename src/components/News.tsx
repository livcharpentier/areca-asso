import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const news = [
    {
      date: "Octobre 2026",
      category: "Vie de l'ARENCA",
      title: "L'ARENCA est publiée au Journal officiel",
      excerpt: "L'Association des Responsables Enfants dans le Cinéma et l'Audiovisuel est désormais officiellement déclarée.",
    },
  ];

  return (
    <section id="projets" className="pt-24 pb-16 bg-background">
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
                <Card key={index} className="border-border bg-card hover:border-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-foreground mb-2">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                      <span className="text-muted-foreground">• {item.category}</span>
                    </div>
                    <CardTitle className="text-xl text-primary font-semibold tracking-wide leading-relaxed">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
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
