import { FileText, Download } from "lucide-react";

const ArtistSalaries = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur border border-accent/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Définitions des Fonctions — Artistes-Interprètes & Acteurs de Complément
          </h3>
          <div className="space-y-4">
            <div className="bg-blue-950/40 p-3 rounded border border-accent/30 text-sm text-slate-200">
              <p className="font-semibold mb-1">🎭 Convention Collective Nationale de la Production Cinématographique (Titre III)</p>
            </div>

            {/* Définitions */}
            <div className="bg-blue-950/40 p-4 rounded border border-accent/30">
              <p className="font-semibold text-amber-300 mb-3">📖 Définitions des fonctions :</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200">
                <div>
                  <p className="font-semibold text-amber-200">Figurant :</p>
                  <p>Acteur de complément engagé pour figurer une présence complémentaire à l'histoire</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Silhouette :</p>
                  <p>Personnage mentionné sur la feuille de service ou acteur avec savoir-faire spécifique</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Silhouette parlante :</p>
                  <p>Jusqu'à 5 mots. Au-delà = contrat artiste-interprète</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Doublure lumière/cadrage/texte :</p>
                  <p>Pour mise en place/réglages. N'apparaît pas à l'image</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Doublure image :</p>
                  <p>Remplace l'artiste-interprète pour scènes particulières avec accord</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Doublure simple :</p>
                  <p>Un seul type (lumière, cadrage, image ou texte)</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Cascadeur :</p>
                  <p>Professionnel réalisant des actions physiques dangereuses. Salaire minimum d'artiste-interprète + primes selon risques</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Danseur :</p>
                  <p>Artiste exécutant des chorégraphies. Salaire silhouette + 50% prime répétitions danse/chant (25€ en cinéma)</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-200">Artiste de cirque :</p>
                  <p>Professionnel avec compétences spécifiques (acrobatie, jonglage, etc.). Salaire silhouette + primes techniques selon compétences</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-950/40 p-3 rounded border border-accent/30 text-xs text-slate-200">
              <p className="font-semibold text-amber-300 mb-1">ℹ️ Note importante :</p>
              <p>Les silhouettes peuvent être désignées par la mise en scène le jour du tournage en accord avec la production, passant ainsi de figurant à silhouette.</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-accent/30">
            <button
              onClick={() => window.open('/acfda_salaire_figu-1er-janv-2025.pdf', '_blank')}
              className="w-full bg-blue-950/40 hover:bg-blue-950/60 text-accent font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 border border-accent/20"
            >
              <Download className="w-5 h-5" />
              Télécharger le guide complet ACFDA des salaires figurants (1er janvier 2025)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSalaries;
