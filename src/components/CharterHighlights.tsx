import { Card, CardContent } from "@/components/ui/card";

const charterPoints = [
  {
    title: "Protection de l'enfant",
    description: "L'intérêt supérieur et la sécurité du mineur au cœur de toutes les décisions",
  },
  {
    title: "Respect de la loi",
    description: "Application stricte de la réglementation sur le travail des mineurs",
  },
  {
    title: "Bienveillance",
    description: "Gestion des émotions avec professionnalisme, sans créer de dépendance",
  },
  {
    title: "Distinction des rôles",
    description: "Coordination et sécurité vs accompagnement artistique clairement séparés",
  },
  {
    title: "Horaires & repos",
    description: "Contrôle strict des temps de travail et repos obligatoires",
  },
  {
    title: "Traçabilité",
    description: "Rapport journalier documentant les conditions de travail du mineur",
  },
  {
    title: "Vigilance absolue",
    description: "Signalement immédiat des situations à risques et droit d'interruption",
  },
  {
    title: "Confidentialité",
    description: "Protection des informations personnelles de l'enfant et de sa famille",
  },
];

const CharterHighlights = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-3">
          Charte du Responsable Enfant
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Les principes fondamentaux qui guident notre profession
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {charterPoints.map((point) => (
            <Card
              key={point.title}
              className="border-border bg-card hover:border-accent/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-4 text-center">
                <h3 className="text-primary font-semibold text-sm mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharterHighlights;