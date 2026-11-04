import { Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ArtistSalaries = () => {
  return (
    <section className="py-8 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <Card>
          <CardHeader>
            <CardTitle>Rôle, figurant, silhouette, doublure : qui fait quoi et combien ?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 p-3 rounded-lg border border-border text-sm text-foreground">
              <p className="font-semibold mb-1">Convention Collective Nationale de la Production Cinématographique (Titre III)</p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg border border-border">
              <p className="font-semibold text-primary mb-3">Définitions des fonctions :</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-foreground">
                <div>
                  <p className="font-semibold text-primary">Figurant :</p>
                  <p>Acteur de complément engagé pour figurer une présence complémentaire à l'histoire</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Silhouette :</p>
                  <p>Personnage mentionné sur la feuille de service ou acteur avec savoir-faire spécifique</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Silhouette parlante :</p>
                  <p>Jusqu'à 5 mots. Au-delà = contrat artiste-interprète</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Doublure lumière/cadrage/texte :</p>
                  <p>Pour mise en place/réglages. N'apparaît pas à l'image</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Doublure image :</p>
                  <p>Remplace l'artiste-interprète pour scènes particulières avec accord</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Doublure simple :</p>
                  <p>Un seul type (lumière, cadrage, image ou texte)</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Cascadeur :</p>
                  <p>Professionnel réalisant des actions physiques dangereuses. Salaire minimum d'artiste-interprète + primes selon risques</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Danseur :</p>
                  <p>Artiste exécutant des chorégraphies. Salaire silhouette + 50% prime répétitions danse/chant (25€ en cinéma)</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Artiste de cirque :</p>
                  <p>Professionnel avec compétences spécifiques (acrobatie, jonglage, etc.). Salaire silhouette + primes techniques selon compétences</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-3 rounded-lg border border-border text-sm text-foreground">
              <p className="font-semibold text-primary mb-1">Note importante :</p>
              <p>Les silhouettes peuvent être désignées par la mise en scène le jour du tournage en accord avec la production, passant ainsi de figurant à silhouette.</p>
            </div>

            <div className="bg-muted/40 p-4 rounded-lg border border-border">
              <p className="font-semibold text-primary mb-3">Salaires minimum au 1er juin 2026 (brut, journée de 8h)</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-foreground">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-2 pr-3"></th>
                      <th className="py-2 pr-3">Cinéma</th>
                      <th className="py-2">Audiovisuel (séries, TV)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/60"><td className="py-2 pr-3 font-semibold">Figurant</td><td className="py-2 pr-3">108,33 €</td><td className="py-2">98,48 € (minimum SMIC)</td></tr>
                    <tr className="border-b border-border/60"><td className="py-2 pr-3 font-semibold">Silhouette</td><td className="py-2 pr-3">150,04 €</td><td className="py-2">salaire figurant + 42,24 €</td></tr>
                    <tr className="border-b border-border/60"><td className="py-2 pr-3 font-semibold">Silhouette parlante</td><td className="py-2 pr-3">250,01 € (jusqu'à 5 mots)</td><td className="py-2">—</td></tr>
                    <tr className="border-b border-border/60"><td className="py-2 pr-3 font-semibold">Doublure</td><td className="py-2 pr-3">simple 165 € · polyvalente 200,02 €</td><td className="py-2">122,00 €</td></tr>
                    <tr><td className="py-2 pr-3 font-semibold">Rôle (pour mémoire)</td><td className="py-2 pr-3">418,25 €</td><td className="py-2">304,99 €</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Résumé de la grille ACFDA : elle ne remplace pas la lecture des conventions collectives. Majorations (heures supplémentaires, nuit, dimanche, jours fériés) dans la grille complète.</p>
            </div>
            <div className="pt-4 border-t border-border">
              <button
                onClick={() => window.open('/acfda_salaire_figu-1er-juin-2026.pdf', '_blank')}
                className="w-full bg-muted/50 hover:bg-muted text-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all border border-border"
              >
                <Download className="w-5 h-5 text-primary" />
                Télécharger la grille ACFDA des salaires (1er juin 2026)
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ArtistSalaries;
