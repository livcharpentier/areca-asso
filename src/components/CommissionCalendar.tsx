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

  const dates2026 = [
    { reunion: "8 JANVIER", depot: "1er DÉCEMBRE 2025", departements: "75, 77, 78, 91, 92, 93, 94, 95" },
    { reunion: "5 FÉVRIER", depot: "2 JANVIER", departements: "75, 77, 78, 91, 92, 93, 94, 95" },
    { reunion: "12 MARS", depot: "2 FÉVRIER", departements: "75, 77, 78, 91, 93, 94, 95" },
    { reunion: "11 MARS", depot: "2 FÉVRIER", departements: "92" },
    { reunion: "9 AVRIL", depot: "2 MARS", departements: "75, 77, 78, 91, 93, 94, 95" },
    { reunion: "8 AVRIL", depot: "2 MARS", departements: "92" },
    { reunion: "7 MAI", depot: "1er AVRIL", departements: "75, 77, 78, 91, 93, 94, 95" },
    { reunion: "6 MAI", depot: "1er AVRIL", departements: "92" },
    { reunion: "11 JUIN", depot: "1er MAI", departements: "75, 77, 78, 91, 93, 94, 95" },
    { reunion: "10 JUIN", depot: "1er MAI", departements: "92" },
    { reunion: "9 JUILLET", depot: "1er JUIN", departements: "75, 77, 78, 91, 93, 94, 95" },
    { reunion: "8 JUILLET", depot: "1er JUIN", departements: "92" },
    { reunion: "10 SEPTEMBRE", depot: "1er JUILLET", departements: "75, 77, 78, 91, 93, 94, 95" },
    { reunion: "9 SEPTEMBRE", depot: "1er JUILLET", departements: "92" },
    { reunion: "8 OCTOBRE", depot: "1er SEPTEMBRE", departements: "75, 77, 78, 91, 93, 94, 95" },
    { reunion: "7 OCTOBRE", depot: "1er SEPTEMBRE", departements: "92" },
    { reunion: "5 NOVEMBRE", depot: "1er OCTOBRE", departements: "75, 77, 78, 91, 93, 94, 95" },
    { reunion: "4 NOVEMBRE", depot: "1er OCTOBRE", departements: "92" },
    { reunion: "3 DÉCEMBRE", depot: "2 NOVEMBRE", departements: "75, 77, 78, 91, 93, 94, 95" },
    { reunion: "2 DÉCEMBRE", depot: "2 NOVEMBRE", departements: "92" },
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
                            <Clock className="h-4 w-4 text-destructive" />
                            <div>
                              <p className="text-xs text-muted-foreground">Dépôt de dossier</p>
                              <p className="font-semibold text-destructive">{date.depot}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Commission</p>
                              <p className="font-semibold text-foreground">{date.reunion}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Dates 2026 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2 text-foreground">
                <Calendar className="h-6 w-6 text-primary" />
                Dates prévues des prochaines commissions Année 2026
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {dates2026.map((date, index) => (
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
                            <Clock className="h-4 w-4 text-destructive" />
                            <div>
                              <p className="text-xs text-muted-foreground">Dépôt de dossier</p>
                              <p className="font-semibold text-destructive">{date.depot}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Commission</p>
                              <p className="font-semibold text-foreground">{date.reunion}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
