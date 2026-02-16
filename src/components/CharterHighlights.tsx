import { ShieldCheck, Scale, Heart, Users, Clock, FileText, AlertTriangle, Lock } from "lucide-react";

const charterPoints = [
  {
    icon: ShieldCheck,
    title: "Protection de l'enfant",
    description: "L'intérêt supérieur et la sécurité du mineur au cœur de toutes les décisions",
  },
  {
    icon: Scale,
    title: "Respect de la loi",
    description: "Application stricte de la réglementation sur le travail des mineurs",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    description: "Gestion des émotions avec professionnalisme, sans créer de dépendance",
  },
  {
    icon: Users,
    title: "Distinction des rôles",
    description: "Coordination et sécurité vs accompagnement artistique clairement séparés",
  },
  {
    icon: Clock,
    title: "Horaires & repos",
    description: "Contrôle strict des temps de travail et repos obligatoires",
  },
  {
    icon: FileText,
    title: "Traçabilité",
    description: "Rapport journalier documentant les conditions de travail du mineur",
  },
  {
    icon: AlertTriangle,
    title: "Vigilance absolue",
    description: "Signalement immédiat des situations à risques et droit d'interruption",
  },
  {
    icon: Lock,
    title: "Confidentialité",
    description: "Protection des informations personnelles de l'enfant et de sa famille",
  },
];

const CharterHighlights = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-black/90 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2 uppercase tracking-wide">
          Charte du Responsable Enfant
        </h2>
        <p className="text-slate-400 text-center mb-8 text-sm">
          Les principes fondamentaux qui guident notre profession
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {charterPoints.map((point) => (
            <div
              key={point.title}
              className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 border border-accent/20 rounded-lg p-4 text-center hover:border-accent/50 transition-all duration-300 hover:scale-105"
            >
              <point.icon className="w-8 h-8 text-accent mx-auto mb-2" />
              <h3 className="text-amber-300 font-semibold text-sm mb-1">{point.title}</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharterHighlights;