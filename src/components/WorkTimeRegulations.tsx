import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section className="py-8 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <Card>
          <CardHeader className="text-center space-y-4 pb-8">
            <CardTitle className="text-3xl md:text-4xl">
              Réglementation des Temps de Travail
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              Durées maximales selon l'âge de l'enfant
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Alerte réglementaire */}
            <div className="bg-destructive/10 border border-destructive/50 p-5 rounded-lg">
              <div>
                <p className="font-semibold text-foreground text-lg mb-1">
                  Respect strict obligatoire
                </p>
                <p className="text-sm text-foreground/90">
                  Ces durées sont des maximums légaux. Le dépassement expose à des sanctions pénales.
                </p>
              </div>
            </div>

            {/* Tableau réglementaire */}
            <div className="overflow-x-auto bg-card border border-border rounded-lg p-4">
              <table className="w-full border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left font-semibold text-primary">Âge</th>
                    <th className="border border-border p-3 text-left font-semibold text-primary">Temps de travail En période scolaire</th>
                    <th className="border border-border p-3 text-left font-semibold text-primary">
                      Pause obligatoire
                    </th>
                    <th className="border border-border p-3 text-left font-semibold text-primary">En vacances scolaires</th>
                    <th className="border border-border p-3 text-left font-semibold text-primary">Temps de pause obligatoire</th>
                  </tr>
                </thead>
                <tbody>
                  {regulations.map((rule, index) => (
                    <tr key={index} className={rule.highlight ? "bg-muted/50" : "bg-card"}>
                      <td className="border border-border p-3 font-medium text-foreground">
                        {rule.age}
                      </td>
                      <td className="border border-border p-3 text-foreground">{rule.schoolPeriod}</td>
                      <td className="border border-border p-3 text-foreground">{rule.schoolBreak}</td>
                      <td className="border border-border p-3 font-medium text-foreground">{rule.holidays}</td>
                      <td className="border border-border p-3 text-foreground">{rule.holidayBreak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Légende explicative */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-muted/50 p-6 rounded-lg border border-border">
                <h4 className="font-semibold text-primary mb-2">Période scolaire</h4>
                <p className="text-sm text-foreground">
                  Temps de travail réduit en raison de la scolarité obligatoire
                </p>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg border border-border">
                <h4 className="font-semibold text-primary mb-2">Vacances scolaires</h4>
                <p className="text-sm text-foreground">
                  Durées maximales augmentées pendant les périodes de vacances
                </p>
              </div>
            </div>

            {/* Section heures de nuit */}
            <div className="bg-muted/50 border border-border p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-primary mb-4">Travail de nuit (moins de 16 ans)</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-foreground">
                    <strong>Interdiction générale :</strong> Le travail de nuit est totalement interdit entre <strong>20h et 6h</strong> pour les jeunes de moins de 16 ans (article L.3163-2)
                  </p>
                </div>
                <div>
                  <p className="text-foreground">
                    <strong>Dérogation exceptionnelle :</strong> Dans le secteur du spectacle, l'inspecteur du travail peut accorder une dérogation à titre exceptionnel jusqu'à <strong>24h maximum</strong> (articles R.3163-4 et R.7124-30-1)
                  </p>
                </div>
                <div>
                  <p className="text-foreground">
                    <strong>Repos obligatoire :</strong> En cas de dérogation, la durée minimale de repos quotidien ne peut être inférieure à <strong>12 heures consécutives</strong> (article L.3164-1)
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground pt-2">
              <p>Source : Code du travail - Articles L7124-1 et suivants</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WorkTimeRegulations;
