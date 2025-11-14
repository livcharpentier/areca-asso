import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Download, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommissionCalendar = () => {
  const upcomingDates2025 = [
    { reunion: "6 NOVEMBRE", depot: "1er OCTOBRE 2025", departements: "75, 77, 78, 91, 93, 94, 95" },
    { reunion: "12 NOVEMBRE", depot: "1er OCTOBRE 2025", departements: "92" },
    { reunion: "4 DÉCEMBRE", depot: "4 NOVEMBRE", departements: "75, 77, 78, 91, 93, 94, 95" },
    { reunion: "10 DÉCEMBRE", depot: "3 NOVEMBRE", departements: "92" },
  ];

  const dates2026Preview = [
    { reunion: "8 JANVIER", depot: "1er DÉCEMBRE 2025", departements: "Tous" },
    { reunion: "5 FÉVRIER", depot: "2 JANVIER", departements: "Tous" },
    { reunion: "12 MARS (75...) / 11 MARS (92)", depot: "2 FÉVRIER", departements: "Tous" },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <Card className="border-primary/30 shadow-xl bg-gradient-to-br from-card to-card/50">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="flex justify-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <Calendar className="h-12 w-12 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl md:text-4xl">
              Calendrier des Commissions Enfants du Spectacle
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              Île-de-France 2025-2026
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Alerte importante */}
            <div className="bg-destructive/10 border-2 border-destructive/50 p-5 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">
                    ⚠️ Les dossiers incomplets ne sont pas présentés en commission
                  </p>
                  <p className="text-sm text-foreground/90">
                    Assurez-vous de respecter les dates butoirs de dépôt des dossiers
                  </p>
                </div>
              </div>
            </div>

            {/* Dates à venir 2025 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2 text-foreground">
                <Clock className="h-6 w-6 text-primary" />
                Prochaines dates 2025
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {upcomingDates2025.map((date, index) => (
                  <Card key={index} className="bg-muted/50 border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-muted-foreground uppercase">
                            Départements {date.departements}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Commission</p>
                              <p className="font-semibold text-foreground">{date.reunion}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-destructive" />
                            <div>
                              <p className="text-xs text-muted-foreground">Date butoir dépôt</p>
                              <p className="font-semibold text-destructive">{date.depot}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Aperçu 2026 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2 text-foreground">
                <Calendar className="h-6 w-6 text-primary" />
                Aperçu des premières dates 2026
              </h3>
              <div className="bg-muted/30 p-6 rounded-lg space-y-3">
                {dates2026Preview.map((date, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2 border-b border-border/50 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">{date.reunion}</p>
                        <p className="text-xs text-muted-foreground">{date.departements}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:ml-auto">
                      <Clock className="h-3 w-3 text-destructive" />
                      <span className="text-sm text-destructive font-medium">Dépôt avant le {date.depot}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Boutons de téléchargement */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Button 
                variant="default" 
                size="lg" 
                className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => window.open('/calendrier_commissions_2025_2026.pdf', '_blank')}
              >
                <Download className="h-5 w-5" />
                Calendrier Île-de-France complet
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 shadow-lg hover:shadow-xl transition-shadow border-primary/50"
                onClick={() => window.open('/calendrier_commissions_92_hauts_de_seine.pdf', '_blank')}
              >
                <Download className="h-5 w-5" />
                Calendrier Hauts-de-Seine (92)
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground pt-4">
              <p>Mise à jour : 3 octobre 2025</p>
              <p className="mt-1">Commission des Enfants du Spectacle d'Île-de-France</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CommissionCalendar;
