import { Card, CardContent } from "@/components/ui/card";

const charterPoints = [
  {
    title: "Protection de l'enfant",
    description: "L'intérêt et la sécurité du mineur au cœur de toutes les décisions",
  },
  {
    title: "Bienveillance",
    description: "Gestion des émotions en respectant les distances, sans créer de dépendance",
  },
  {
    title: "Distinction des rôles",
    description: "Signalement à la production des situations à risques — Coordination et sécurité sans intervention artistique",
  },
  {
    title: "Traçabilité",
    description: "Rapport de la journée de travail du mineur à la production",
  },
  {
    title: "Interface",
    description: "Fait le lien entre la production, l'équipe, la famille et l'enfant — Communication transparente, disponibilité, coordination et médiation au quotidien",
  },
  {
    title: "Permis de conduire",
    description: "Il est grandement recommandé d'avoir le permis de plus de 2 ans pour faciliter les transports des jeunes comédiens",
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
