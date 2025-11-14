import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Download, AlertCircle, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { regionsCalendriers, RegionCalendrier } from "@/data/calendrierRegions";

const RegionalCalendar = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionCalendrier>(regionsCalendriers[0]);

  const handleRegionChange = (slug: string) => {
    const region = regionsCalendriers.find((r) => r.slug === slug);
    if (region) setSelectedRegion(region);
  };

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
              Par région - 2025-2026
            </p>

            {/* Sélecteur de région */}
            <div className="max-w-md mx-auto pt-4">
              <Select value={selectedRegion.slug} onValueChange={handleRegionChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionner une région" />
                </SelectTrigger>
                <SelectContent>
                  {regionsCalendriers.map((region) => (
                    <SelectItem key={region.slug} value={region.slug}>
                      {region.nom} {!region.disponible && "(Calendrier non disponible)"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Information importante sur le choix de région */}
            <div className="bg-primary/10 border-2 border-primary/30 p-5 rounded-lg max-w-2xl mx-auto mt-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-lg mb-2">
                    ℹ️ Comment choisir la bonne région ?
                  </p>
                  <p className="text-sm text-foreground/90">
                    La région à sélectionner correspond à <strong>l'adresse du lieu de la production</strong> (tournage, spectacle, etc.). 
                    Vérifiez auprès de votre DRIEETS locale pour confirmer cette règle, car les modalités peuvent varier.
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {selectedRegion.disponible ? (
              <>
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

                {/* Coordonnées DRIEETS */}
                <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                  <h3 className="font-semibold text-lg mb-4 text-primary">
                    Coordonnées DRIEETS {selectedRegion.nom}
                  </h3>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Adresse</p>
                        <p className="text-sm text-muted-foreground">{selectedRegion.drieets.adresse}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Téléphone</p>
                        <p className="text-sm text-muted-foreground">{selectedRegion.drieets.telephone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">{selectedRegion.drieets.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Horaires d'accueil</p>
                        <p className="text-sm text-muted-foreground">{selectedRegion.drieets.horaires}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dates 2025 */}
                {selectedRegion.dates2025.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold flex items-center gap-2 text-foreground">
                      <Clock className="h-6 w-6 text-primary" />
                      Prochaines dates 2025
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {selectedRegion.dates2025.map((date, index) => (
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
                )}

                {/* Dates 2026 */}
                {selectedRegion.dates2026.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold flex items-center gap-2 text-foreground">
                      <Calendar className="h-6 w-6 text-primary" />
                      Dates prévues des prochaines commissions Année 2026
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {selectedRegion.dates2026.map((date, index) => (
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
                )}

                {/* Boutons de téléchargement */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
                    onClick={() => window.open('/calendrier_commissions_2025_2026.pdf', '_blank')}
                  >
                    <Download className="h-4 w-4" />
                    Télécharger le calendrier complet
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="bg-muted/50 p-8 rounded-lg max-w-2xl mx-auto">
                  <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Calendrier non disponible pour {selectedRegion.nom}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Les dates des commissions pour cette région ne sont pas encore disponibles. 
                    Veuillez contacter directement la DRIEETS de votre région.
                  </p>
                  <div className="bg-accent/20 border border-accent/50 p-4 rounded-lg text-left">
                    <p className="font-semibold mb-2">Comment obtenir les dates ?</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Contactez votre DRIEETS régionale</li>
                      <li>Consultez le site de votre préfecture</li>
                      <li>Recherchez "commission enfants spectacle" + votre région</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegionalCalendar;
