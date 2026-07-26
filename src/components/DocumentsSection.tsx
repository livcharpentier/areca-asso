import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, Newspaper, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocumentsSection = () => {
  const documents = [
    {
      type: "document",
      icon: FileText,
      title: "Guide officiel de la commission",
      description: "Guide complet pour confectionner un dossier DRIEETS",
      date: "Octobre 2021",
      category: "Documents officiels",
      link: "/guide_commission_enfants_spectacle.doc",
    },
    {
      type: "document",
      icon: FileText,
      title: "Formulaire primaire (1D)",
      description: "Avis pédagogique pour les enfants de primaire",
      date: "Académie de Paris",
      category: "Formulaires",
      link: "https://www.ac-paris.fr/media/20903/download",
    },
    {
      type: "document",
      icon: FileText,
      title: "Formulaire collège/lycée (2D)",
      description: "Avis pédagogique pour collégiens et lycéens de moins de 16 ans",
      date: "Académie de Paris",
      category: "Formulaires",
      link: "https://www.ac-paris.fr/media/20906/download",
    },
    {
      type: "document",
      icon: FileText,
      title: "Avis DASEN",
      description: "Formulaire d'avis du Directeur académique (hors Paris)",
      date: "Académie de Paris",
      category: "Formulaires",
      link: "https://www.ac-paris.fr/media/24485/download",
    },
    {
      type: "document",
      icon: FileText,
      title: "Calendrier Île-de-France 2025-2026",
      description: "Dates des commissions pour toute l'Île-de-France",
      date: "2025-2026",
      category: "Calendriers",
      link: "/calendrier_commissions_2025_2026.pdf",
    },
    {
      type: "document",
      icon: FileText,
      title: "Calendrier Hauts-de-Seine (92)",
      description: "Dates spécifiques des commissions du 92",
      date: "2025-2026",
      category: "Calendriers",
      link: "/calendrier_commissions_92_hauts_de_seine.pdf",
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
      type: "law",
      icon: Scale,
      title: "Réglementation des tournages",
      description: "Cadre légal pour les tournages avec des mineurs",
      date: "2024",
      category: "Textes de lois",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-wide drop-shadow-2xl">
              Ressources & Documentation
            </h2>
            <p className="text-xl md:text-2xl text-slate-100 max-w-2xl mx-auto drop-shadow-lg">
              Accédez à nos documents, articles et textes de lois pour vous accompagner dans votre pratique professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <Card
                  key={index}
                  className="border-border bg-card hover:border-accent/50 transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-xs text-foreground bg-muted px-2 py-1 rounded">
                        {doc.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-primary font-semibold tracking-wide leading-relaxed">
                      {doc.title}
                    </CardTitle>
                    <CardDescription className="text-foreground">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {doc.date}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-accent hover:text-accent hover:bg-accent/10"
                        onClick={() => doc.link && window.open(doc.link, '_blank')}
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
