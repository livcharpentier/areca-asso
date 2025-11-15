import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, AlertCircle } from "lucide-react";

const WorkTimeRegulations = () => {
  const regulations = [
    {
      age: "moins de 3 ans",
      schoolPeriod: "1 heure/jour",
      schoolBreak: "Après une demi-heure de temps de travail",
      holidays: "1 heure/jour",
      holidayBreak: "Après une demi-heure",
    },
    {
      age: "de 3 à 5 ans",
      schoolPeriod: "2 heures/jour",
      schoolBreak: "Après une heure de temps de travail",
      holidays: "2 heures/jour",
      holidayBreak: "Après une heure",
      highlight: true,
    },
    {
      age: "de 6 à 11 ans",
      schoolPeriod: "3 heures/jour",
      schoolBreak: "Après une heure et demie de temps de travail",
      holidays: "4 heures/jour",
      holidayBreak: "Après 2 heures",
    },
    {
      age: "de 12 à 16 ans",
      schoolPeriod: "4 heures/jour",
      schoolBreak: "Après 2 heures de temps de travail",
      holidays: "6 heures /jour",
      holidayBreak: "Après 3 heures",
      highlight: true,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <Card className="border-primary/30 shadow-2xl bg-gradient-to-br from-card to-card/50">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="flex justify-center">
              <div className="p-4 bg-destructive/10 rounded-full">
                <Clock className="h-12 w-12 text-destructive" />
              </div>
            </div>
            <CardTitle className="text-3xl md:text-4xl">
              Réglementation des Temps de Travail
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              Durées maximales selon l'âge de l'enfant
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Alerte réglementaire */}
            <div className="bg-amber-500/20 border-2 border-amber-400 p-5 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white text-lg mb-1">
                    ⚠️ Respect strict obligatoire
                  </p>
                  <p className="text-base text-white">
                    Ces durées sont des maximums légaux. Le dépassement expose à des sanctions pénales.
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau réglementaire */}
            <div className="overflow-x-auto bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 rounded-lg p-4">
              <table className="w-full border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-950/60">
                    <th className="border border-accent/20 p-3 text-left font-semibold text-amber-300">Âge</th>
                    <th className="border border-accent/20 p-3 text-left font-semibold text-amber-300">Temps de travail En période scolaire</th>
                    <th className="border border-accent/20 p-3 text-left font-semibold text-amber-300">
                      <span className="underline decoration-accent decoration-2">pause</span> obligatoire
                    </th>
                    <th className="border border-accent/20 p-3 text-left font-semibold text-amber-300">En vacances scolaires</th>
                    <th className="border border-accent/20 p-3 text-left font-semibold text-amber-300">Temps de pause obligatoire</th>
                  </tr>
                </thead>
                <tbody>
                  {regulations.map((rule, index) => (
                    <tr key={index} className={rule.highlight ? "bg-accent/20" : "bg-blue-950/30"}>
                      <td className="border border-accent/20 p-3 font-medium text-slate-200">
                        {rule.age}
                      </td>
                      <td className="border border-accent/20 p-3 text-slate-200">{rule.schoolPeriod}</td>
                      <td className="border border-accent/20 p-3 text-slate-200">{rule.schoolBreak}</td>
                      <td className="border border-accent/20 p-3 font-medium text-slate-200">{rule.holidays}</td>
                      <td className="border border-accent/20 p-3 text-slate-200">{rule.holidayBreak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Légende explicative */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg">
                <h4 className="font-semibold text-amber-300 mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  Période scolaire
                </h4>
                <p className="text-sm text-slate-200">
                  Temps de travail réduit en raison de la scolarité obligatoire
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg">
                <h4 className="font-semibold text-amber-300 mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  Vacances scolaires
                </h4>
                <p className="text-sm text-slate-200">
                  Durées maximales augmentées pendant les périodes de vacances
                </p>
              </div>
            </div>

            {/* Section Jours fériés */}
            <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-xl text-amber-300 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                Travail les jours fériés
              </h4>
              <div className="space-y-3 text-base">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <p className="text-slate-200">
                    <strong>Autorisé :</strong> Le travail des enfants est autorisé les jours fériés dans le secteur du spectacle
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span>
                  <p className="text-slate-200">
                    <strong>Conditions :</strong> Les durées maximales de travail selon l'âge restent applicables, même les jours fériés
                  </p>
                </div>
              </div>
            </div>

            {/* Section Horaires de début de journée */}
            <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-xl text-amber-300 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                Horaires de début de journée
              </h4>
              <div className="space-y-3 text-base">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">🌅</span>
                  <p className="text-slate-200">
                    <strong>Début au plus tôt :</strong> La journée de travail ne peut débuter avant <strong>6h du matin</strong> pour les enfants de moins de 16 ans
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span>
                  <p className="text-slate-200">
                    <strong>Dérogation exceptionnelle :</strong> Des dérogations peuvent être accordées par l'inspecteur du travail dans des cas particuliers, notamment pour les tournages en extérieur
                  </p>
                </div>
              </div>
            </div>

            {/* Section Durée maximale hebdomadaire */}
            <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-xl text-amber-300 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                Durée maximale hebdomadaire et annuelle
              </h4>
              <div className="space-y-3 text-base">
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">📅</span>
                  <p className="text-slate-200">
                    <strong>Limite hebdomadaire :</strong> Un enfant ne peut travailler plus de <strong>6 jours par semaine</strong>. Un jour de repos hebdomadaire est obligatoire
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">📊</span>
                  <p className="text-slate-200">
                    <strong>Limite annuelle :</strong> La durée totale de travail ne peut excéder <strong>80 jours par an</strong> pour les enfants scolarisés
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span>
                  <p className="text-slate-200">
                    <strong>Attention :</strong> Ces limites s'appliquent à l'ensemble des activités artistiques de l'enfant (tous projets confondus)
                  </p>
                </div>
              </div>
            </div>

            {/* Section heures de nuit */}
            <div className="bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-xl text-amber-300 mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                Travail de nuit (moins de 16 ans)
              </h4>
              <div className="space-y-3 text-base">
                <div className="flex items-start gap-2">
                  <span className="text-destructive font-bold">⛔</span>
                  <p className="text-slate-200">
                    <strong>Interdiction générale :</strong> Le travail de nuit est totalement interdit entre <strong>20h et 6h</strong> pour les jeunes de moins de 16 ans (article L.3163-2)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">⚠️</span>
                  <p className="text-slate-200">
                    <strong>Dérogation exceptionnelle :</strong> Dans le secteur du spectacle, l'inspecteur du travail peut accorder une dérogation à titre exceptionnel jusqu'à <strong>24h maximum</strong> (articles R.3163-4 et R.7124-30-1)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold">🛌</span>
                  <p className="text-slate-200">
                    <strong>Repos obligatoire :</strong> En cas de dérogation, la durée minimale de repos quotidien ne peut être inférieure à <strong>12 heures consécutives</strong> (article L.3164-1)
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-slate-400 pt-2">
              <p>Source : Code du travail - Articles L7124-1 et suivants</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WorkTimeRegulations;
