import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, Newspaper, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocumentsSection = () => {
  const documents = [
    {
      type: "document",
      icon: FileText,
      title: "Guide des bonnes pratiques",
      description: "Document de référence pour la coordination jeunesse",
      date: "Janvier 2025",
      category: "Documents",
    },
    {
      type: "law",
      icon: Scale,
      title: "Législation du travail des mineurs",
      description: "Textes de lois et réglementations en vigueur",
      date: "Mis à jour en 2024",
      category: "Textes de lois",
    },
    {
      type: "article",
      icon: Newspaper,
      title: "L'évolution du métier de coordinateur",
      description: "Article sur les nouvelles pratiques professionnelles",
      date: "Décembre 2024",
      category: "Articles",
    },
    {
      type: "document",
      icon: FileText,
      title: "Charte de l'AFCJA",
      description: "Les valeurs et engagements de notre association",
      date: "2024",
      category: "Documents",
    },
    {
      type: "law",
      icon: Scale,
      title: "Réglementation des tournages",
      description: "Cadre légal pour les tournages avec des mineurs",
      date: "2024",
      category: "Textes de lois",
    },
    {
      type: "article",
      icon: Newspaper,
      title: "Sécurité sur les plateaux",
      description: "Meilleures pratiques pour assurer la sécurité",
      date: "Novembre 2024",
      category: "Articles",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent mb-4">
              Ressources & Documentation
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Accédez à nos documents, articles et textes de lois pour vous accompagner dans votre pratique professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <Card
                  key={index}
                  className="border-accent/20 bg-primary/50 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-xs text-primary-foreground/60 bg-primary/50 px-2 py-1 rounded">
                        {doc.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-primary-foreground">
                      {doc.title}
                    </CardTitle>
                    <CardDescription className="text-primary-foreground/70">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary-foreground/60">
                        {doc.date}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-accent hover:text-accent hover:bg-accent/10"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger
                      </Button>
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

export default DocumentsSection;
