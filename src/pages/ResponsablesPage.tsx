import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DailyReport from "@/components/DailyReport";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const ResponsablesPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();


  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Espace Membres
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Outils et ressources pour les membres de l'ARENCA
            </p>
          </div>
        </div>
      </section>

      {/* Deux sections : RE et Animateurs */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="responsables" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="responsables" className="text-base font-semibold">
                Responsables Enfants
              </TabsTrigger>
              <TabsTrigger value="animateurs" className="text-base font-semibold">
                Animateur/trices
              </TabsTrigger>
            </TabsList>

            {/* SECTION RESPONSABLES ENFANTS */}
            <TabsContent value="responsables">
              <Tabs defaultValue="reglementations" className="w-full">
                <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 mb-6 h-auto">
                  <TabsTrigger value="reglementations">
                    <span>Réglementations</span>
                  </TabsTrigger>
                  <TabsTrigger value="vhss">
                    <span>VHSS</span>
                  </TabsTrigger>
                  <TabsTrigger value="positionnement">
                    <span>Positionnement</span>
                  </TabsTrigger>
                  <TabsTrigger value="compte-rendu">
                    <span>Compte Rendu</span>
                  </TabsTrigger>
                  <TabsTrigger value="contacts">
                    <span>Contacts utiles</span>
                  </TabsTrigger>
                </TabsList>

            <TabsContent value="contacts">
              <ContactsUtilesContent />
            </TabsContent>

            <TabsContent value="compte-rendu">
              <DailyReport />
            </TabsContent>

            <TabsContent value="reglementations">
              <ReglementationsContent />
            </TabsContent>

            <TabsContent value="vhss">
              <VHSSContent />
            </TabsContent>
            <TabsContent value="positionnement">
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="bg-muted/50 p-6 rounded-lg border border-border">
                  <h3 className="font-bold text-lg text-primary mb-4">Notre positionnement</h3>
                  <p className="text-foreground leading-relaxed">
                    Lors de l&#39;adh&#233;sion, chaque nouveau membre, en plus de signer la charte de l&#39;association,
                    d&#233;clare sur l&#39;honneur, par &#233;crit, avoir un casier vierge, lui permettant de travailler
                    en contact avec des enfants.
                  </p>
                  <p className="text-muted-foreground mt-4 italic border-t border-border pt-4">
                    La v&#233;rification incombe &#224; la production.
                  </p>
                  <p className="text-foreground font-semibold mt-3">
                    Toute fausse d&#233;claration entra&#238;nerait la radiation du membre.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
            </TabsContent>

            {/* SECTION ANIMATEURS */}
            <TabsContent value="animateurs">
              <AnimateursSection />
            </TabsContent>

          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* Contenu Réglementations */
const ReglementationsContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Tabs defaultValue="temps-travail" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="temps-travail" className="text-xs">
            <span>Temps de travail</span>
          </TabsTrigger>
          <TabsTrigger value="organisation" className="text-xs">
            <span>Organisation</span>
          </TabsTrigger>
          <TabsTrigger value="familles-emploi" className="text-xs">
            <span>Types d'emploi des mineurs</span>
          </TabsTrigger>
          <TabsTrigger value="conditions" className="text-xs">
            <span>Conditions</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="temps-travail">
          <div className="space-y-6">
            <WorkTimeRegulations />
          </div>
        </TabsContent>

        <TabsContent value="organisation">
          <OrganisationTravailContent />
        </TabsContent>

        <TabsContent value="familles-emploi">
          <FamillesEmploiContent />
        </TabsContent>

        <TabsContent value="conditions">
          <ConditionsContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

/* Contenu Organisation du travail */
const OrganisationTravailContent = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Organisation du temps de travail</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-foreground">
        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Temps de travail effectif vs. temps de présence</p>
          <p className="text-sm text-foreground mb-2">Le temps de travail effectif comprend :</p>
          <ul className="text-sm text-foreground ml-4 list-disc space-y-1">
            <li><strong>Préparation :</strong> Maquillage, coiffure, habillage</li>
            <li><strong>Répétitions :</strong> Toutes les répétitions sur plateau</li>
            <li><strong>Prises :</strong> Temps de tournage effectif, temps d'attente entre les prises</li>
          </ul>
          <div className="mt-3 bg-card p-3 rounded border border-border">
            <p className="font-semibold text-primary text-sm">Ne sont PAS du temps de travail :</p>
            <ul className="text-sm text-foreground ml-4 list-disc space-y-1 mt-1">
              <li><strong>Temps de transport</strong> (trajet domicile → lieu de tournage). En audiovisuel, les <strong>déplacements pendant la journée de travail</strong> (par exemple d'un décor à un autre) sont en revanche du temps de travail effectif (art. VI.1.2 de la convention)</li>
              <li><strong>Temps de repas</strong> (pause déjeuner/dîner)</li>
              <li><strong>La pause</strong></li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Travail du dimanche et jours fériés</p>
          <ul className="text-sm text-foreground space-y-1 ml-4 list-disc">
            <li><strong className="text-destructive">Audiovisuel (séries, TV) : travail du dimanche interdit aux moins de 18 ans</strong> (art. VI.9 de la convention collective de la production audiovisuelle)</li>
            <li><strong>Cinéma :</strong> le code du travail autorise le travail du dimanche et des jours fériés dans les entreprises de spectacles ; il doit rester exceptionnel et être prévu dans la demande d'autorisation</li>
            <li>Les majorations de salaire prévues par la convention collective s'appliquent (jours fériés ; dimanche en cinéma)</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Règle des vacances scolaires</p>
          <ul className="text-sm text-foreground space-y-2 ml-4 list-disc">
            <li><strong>Règle des 50% :</strong> L'enfant ne peut travailler plus de la moitié de la durée totale de chaque période de vacances scolaires</li>
            <li><strong>Vacances d'été :</strong> Un mois entier de repos obligatoire (soit juillet SOIT août complet)</li>
            <li><strong>Cumul :</strong> Cette règle s'applique quel que soit le nombre d'employeurs et le nombre de jours travaillés</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Repos obligatoire</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-foreground">
            <div>
              <p><strong>Repos quotidien :</strong></p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Minimum <strong>14 heures consécutives</strong> pour les moins de 16 ans</li>
                <li>Minimum <strong>12 heures consécutives</strong> pour les 16-18 ans</li>
              </ul>
            </div>
            <div>
              <p><strong>Repos hebdomadaire :</strong></p>
              <ul className="ml-4 list-disc space-y-1">
                <li><strong>2 jours consécutifs</strong> incluant le dimanche</li>
                <li>Dérogation possible : 36h dont 24h consécutives</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

/* Contenu Familles d'emploi */
const FamillesEmploiContent = () => {
  const bloc = "bg-muted/50 p-4 rounded-lg border border-border";
  const titre = "font-semibold text-primary mb-2";
  return (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Quelles règles selon ce que fait l'enfant ?</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          Rôle, figuration, publicité, scène… Le contrat, la rémunération et l'encadrement obligatoire changent selon le type d'emploi.
          Dans tous les cas, un enfant de moins de 16 ans ne peut travailler qu'avec <strong>l'autorisation préalable du préfet</strong>.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className={bloc}>
            <p className={titre}>Rôle (artiste-interprète)</p>
            <ul className="text-sm space-y-1 ml-4 list-disc">
              <li>Texte à dire ou jeu d'acteur identifiable</li>
              <li>Contrat d'artiste-interprète, salaire selon la convention collective</li>
              <li>Droits voisins (ADAMI) applicables</li>
              <li>Cinéma : <strong>responsable des enfants obligatoire</strong> dès qu'un moins de 16 ans est engagé</li>
            </ul>
          </div>
          <div className={bloc}>
            <p className={titre}>Figuration, silhouette, doublure</p>
            <ul className="text-sm space-y-1 ml-4 list-disc">
              <li>Présence dans le décor sans jeu identifiable (figurant), personnage repéré ou quelques mots (silhouette)</li>
              <li>Contrat d'acteur de complément, salaire selon la grille de figuration</li>
              <li>Pas de droits voisins</li>
              <li>Cinéma : <strong>responsable des enfants obligatoire</strong> dès qu'un moins de 16 ans est engagé</li>
            </ul>
          </div>
          <div className={bloc}>
            <p className={titre}>Publicité</p>
            <ul className="text-sm space-y-1 ml-4 list-disc">
              <li>Autorisation préalable du préfet <strong>obligatoire</strong>, comme pour un film</li>
              <li>La convention du cinéma <strong>n'impose pas</strong> de responsable des enfants sur un film publicitaire (titre III, article 7)</li>
              <li>Les enfants sont souvent engagés comme mannequins, par une agence : règles spécifiques du Code du travail</li>
              <li>Un responsable des enfants reste recommandé</li>
            </ul>
          </div>
          <div className={bloc}>
            <p className={titre}>Clip musical</p>
            <ul className="text-sm space-y-1 ml-4 list-disc">
              <li>Autorisation préalable du préfet <strong>obligatoire</strong></li>
              <li>Aucune convention collective ne rend aujourd'hui le responsable des enfants obligatoire</li>
              <li>Un responsable des enfants reste recommandé</li>
            </ul>
          </div>
          <div className={bloc}>
            <p className={titre}>Théâtre et cirque</p>
            <ul className="text-sm space-y-1 ml-4 list-disc">
              <li>Recommandations de la circulaire du 9 novembre 1964 : 9 ans minimum, 1 représentation par jour, 3 par semaine au plus</li>
              <li>Repos à respecter pendant les vacances scolaires</li>
              <li>Cirque : tours de force périlleux et exercices dangereux interdits aux moins de 16 ans</li>
            </ul>
          </div>
          <div className={bloc}>
            <p className={titre}>E-sport (compétitions de jeux vidéo)</p>
            <ul className="text-sm space-y-1 ml-4 list-disc">
              <li>Compétitions professionnelles soumises aux mêmes règles que le spectacle</li>
              <li>Autorisation préalable obligatoire pour les mineurs</li>
              <li>Mêmes règles de temps de travail et de repos ; rémunération versée en partie à la Caisse des Dépôts</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Où déposer la demande ?</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="text-sm space-y-2 ml-4 list-disc">
          <li><strong>C'est le siège de la production qui compte</strong>, pas le lieu de tournage ni le domicile de l'enfant (convention collective du cinéma, titre III, article 5.2).</li>
          <li><strong>Production dont le siège est en France :</strong> demande auprès du préfet du département du siège, via la DREETS ou la DRIEETS.</li>
          <li><strong>Production dont le siège est à l'étranger :</strong> demande auprès du préfet de Paris (DRIEETS Île-de-France).</li>
          <li><strong>Enfant qui habite à l'étranger</strong> (par exemple en Belgique) engagé par une production française : la demande se fait en France, selon le siège de la production, et la réglementation française s'applique.</li>
          <li><strong>Tournage à l'étranger</strong> d'une production française : l'autorisation française reste nécessaire ; le pays de tournage peut aussi imposer ses propres règles, à vérifier avant le départ.</li>
          <li><strong>Île-de-France :</strong> une commission commune pour 75, 77, 78, 91, 93, 94 et 95, une commission distincte pour le 92 (voir le calendrier) ; les départements 77, 78, 91 et 95 ont leur propre démarche de dépôt en ligne.</li>
        </ul>
      </CardContent>
    </Card>
  </div>
  );
};

/* Contacts utiles */
const ContactsUtilesContent = () => {
  const bloc = "bg-muted/50 p-4 rounded-lg border border-border text-sm space-y-1";
  const lien = "text-accent underline";
  return (
  <div className="space-y-6 max-w-5xl mx-auto">
    <Card>
      <CardHeader>
        <CardTitle>Contacts utiles</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">Les interlocuteurs à garder sous la main pendant la préparation et le tournage.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className={bloc}>
            <p className="font-semibold text-primary">DRIEETS Île-de-France — enfants du spectacle</p>
            <p>Instruction des demandes d'autorisation (unité de Paris)</p>
            <p><a className={lien} href="mailto:drieets-idf-ud75.eesam@drieets.gouv.fr">drieets-idf-ud75.eesam@drieets.gouv.fr</a></p>
            <p><a className={lien} href="https://demarche.numerique.gouv.fr/commencer/enfants-du-spectacle-2026" target="_blank" rel="noopener noreferrer">Plateforme de dépôt des dossiers</a></p>
          </div>
          <div className={bloc}>
            <p className="font-semibold text-primary">Thalie Santé — Pôle Enfants</p>
            <p>Médecine du travail des enfants du spectacle</p>
            <p>50 avenue Daumesnil, 75012 Paris</p>
            <p><a className={lien} href="mailto:pole.enfant@thalie-sante.org">pole.enfant@thalie-sante.org</a> · <a className={lien} href="https://www.thalie-sante.org" target="_blank" rel="noopener noreferrer">thalie-sante.org</a></p>
          </div>
          <div className={bloc}>
            <p className="font-semibold text-primary">Rectorat de Paris — scolarité (DVE)</p>
            <p>Avis pédagogiques, suivi scolaire</p>
            <p>01 44 62 43 33 · <a className={lien} href="mailto:dve-enfantsduspectacle@ac-paris.fr">dve-enfantsduspectacle@ac-paris.fr</a></p>
          </div>
          <div className={bloc}>
            <p className="font-semibold text-primary">Renseignements en droit du travail</p>
            <p>Service public, pour toute question sur le Code du travail</p>
            <p>0 806 000 126</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="border-2 border-[#ee7d2b]">
      <CardHeader>
        <CardTitle>Besoin d'un soutien psychologique ?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-foreground">
        <p>
          Si un enfant est en difficulté (scène éprouvante, stress, mal-être), ou si vous-même avez besoin d'aide, <strong>vous pouvez demander à la production
          de faire appel à un psychologue</strong>. La charte de l'ARENCA prévoit d'orienter vers un professionnel adapté dès que la situation dépasse votre rôle.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary">Le médecin du travail (Thalie Santé)</p>
            <p>Pour un enfant : il connaît le rôle et peut conseiller la production sur les mesures à prendre.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary">Cellule d'écoute Audiens</p>
            <p>Soutien psychologique et juridique gratuit, anonyme si vous le souhaitez : <strong>01 87 20 30 90</strong> (lundi-vendredi, 9h-13h et 14h-18h) — <a className="text-accent underline" href="mailto:violences-sexuelles-culture@audiens.org">violences-sexuelles-culture@audiens.org</a></p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-destructive/10 border border-destructive/40 rounded-lg p-3"><p className="font-bold">Urgence</p><p>15 (SAMU), 17 (police), 112</p></div>
          <div className="bg-destructive/10 border border-destructive/40 rounded-lg p-3"><p className="font-bold">Enfant en danger</p><p>119 — Allô Enfance en danger, 24h/24, gratuit</p></div>
          <div className="bg-muted/60 border border-border rounded-lg p-3"><p className="font-bold">Violences Femmes Info</p><p>39 19, gratuit et anonyme</p></div>
        </div>
      </CardContent>
    </Card>
  </div>
  );
};

/* Contenu Conditions */
const ConditionsContent = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Conditions d'emploi des mineurs</CardTitle>
        <p className="text-xs text-muted-foreground mt-1">Sources officielles : Code du travail (art. L7124-1 et suivants, L3161-1 et suivants), convention collective du cinéma (avenant du 17 mai 2024, étendu le 24 septembre 2024), commission des enfants du spectacle d'Île-de-France.</p>
      </CardHeader>
      <CardContent className="space-y-6 text-foreground">
        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Champ d'application</p>
          <p className="text-sm">Toute participation d'un enfant de moins de 16 ans à une production cinématographique ou publicitaire nécessite une autorisation préalable du préfet, délivrée après avis de la commission des enfants du spectacle (dossier instruit par la DRIEETS).</p>
          <p className="text-sm mt-2"><strong>Objectif :</strong> Veiller à ce que l'emploi des enfants ne compromette pas leur scolarité, équilibre physique et moral, santé et sécurité au travail.</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Commission départementale consultative</p>
          <p className="text-sm mb-2">Présidée par un <strong>magistrat juge des enfants</strong> désigné par le 1er président de la cour d'appel.</p>
          <p className="text-sm"><strong>Composition :</strong></p>
          <ul className="text-sm ml-4 list-disc space-y-1 mt-1">
            <li>Directeur académique des services de l'éducation nationale ou son représentant</li>
            <li>Directeur départemental chargé de l'emploi (DDETS/DDETSPP) ou son représentant</li>
            <li>Un médecin</li>
            <li>Directeur régional des affaires culturelles (DRAC) ou son représentant</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Procédure et délais</p>
          <ul className="text-sm space-y-1">
            <li><strong>Instruction :</strong> Par le directeur départemental (DDETS/DDETSPP)</li>
            <li><strong>Délai de décision du préfet :</strong> 1 mois à compter de la réception de la demande complète</li>
            <li><strong>Complément d'instruction :</strong> Délai prorogé d'1 mois supplémentaire si nécessaire</li>
            <li><strong>Absence de réponse :</strong> Demande réputée rejetée passé le délai</li>
            <li><strong>L'autorisation peut être retirée à tout moment</strong></li>
          </ul>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-3">Responsable des enfants (cinéma)</p>
          <p className="text-sm mb-3">En cinéma : obligatoire dès qu'un mineur de moins de 16 ans est engagé (convention collective, titre III, article 6).</p>
          <div className="bg-card p-3 rounded border border-border">
            <p className="font-semibold text-primary mb-2">Profil requis</p>
            <ul className="ml-4 space-y-1 list-disc text-sm">
              <li>Personne qualifiée justifiant d'un <strong>diplôme</strong> (par exemple le BAFA) ou d'une <strong>expérience significative</strong> pour l'exercice de ses fonctions</li>
              <li><strong>Extrait de casier judiciaire B3</strong> à produire obligatoirement</li>
              <li>N'a fait l'objet d'<strong>aucune condamnation judiciaire</strong> incompatible avec l'exercice de sa fonction</li>
            </ul>
            <p className="text-sm mt-3"><strong>Rôle :</strong> Coordonne et supervise la présence et les conditions de travail des enfants sur le plateau.</p>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Castings : adulte référent obligatoire (cinéma)</p>
          <p className="text-sm">« Les enfants doivent être accompagnés d'un adulte référent dont le rôle est de s'assurer, en contact avec les représentants légaux si ce n'est pas eux qui assument ce rôle, que la sécurité et l'intérêt de l'enfant sont préservés. Les locaux devront en outre permettre d'accueillir les accompagnants. »</p>
          <p className="text-xs text-muted-foreground mt-1">Convention collective du cinéma, titre III, article 2 (organisation des castings) et article 5.1 — avenant du 17 mai 2024, étendu le 24 septembre 2024. L'adulte référent peut être un parent.</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Certificat médical obligatoire</p>
          <div className="space-y-2 text-sm">
            <p><strong>Examen spécifique :</strong> Évalue l'impact du rôle sur la santé physique et psychologique de l'enfant.</p>
            <p><strong>Le médecin doit préalablement avoir pris connaissance :</strong></p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Du contenu du spectacle (histoire, paroles, scènes)</li>
              <li>Du planning précis (dates, horaires des répétitions et représentations)</li>
            </ul>
            <p className="mt-2"><strong>Renouvellement obligatoire :</strong></p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Enfants &lt; 3 ans : Tous les <strong>3 mois</strong></li>
              <li>Enfants 3-6 ans : Tous les <strong>6 mois</strong></li>
              <li>Enfants &gt; 6 ans : Tous les <strong>ans</strong></li>
            </ul>
            <p className="text-destructive mt-2">En cas d'avis médical négatif, l'enfant ne peut être employé.</p>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-2">
          <p className="font-semibold text-primary">Le responsable des enfants est-il obligatoire ?</p>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Cinéma (films, y compris courts métrages) : oui</strong>, dès qu'un mineur de moins de 16 ans est engagé (convention collective du cinéma, titre III, article 6, étendu).</li>
            <li><strong>Audiovisuel (séries, téléfilms, documentaires, émissions de flux) :</strong> un accord du 21 mars 2025 le rend obligatoire pour les moins de 16 ans, mais il n'est pas encore étendu : il ne s'impose pour l'instant qu'aux producteurs adhérents des syndicats signataires.</li>
            <li><strong>Publicité : non</strong>, la convention du cinéma l'exclut (titre III, article 7).</li>
            <li><strong>Clip musical, théâtre, spectacle vivant :</strong> aucune obligation trouvée à ce jour.</li>
          </ul>
          <p className="text-xs text-muted-foreground">Dans tous les cas, le responsable des enfants reste recommandé, et l'autorisation du préfet est toujours obligatoire.</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-2">
          <p className="font-semibold text-primary">Scolarité</p>
          <p className="text-sm">Répétiteur agréé si absence scolaire · 2h d'enseignement/jour minimum · maintien du rythme scolaire</p>
        </div>

        <div className="bg-[#fdf1e7] border-l-4 border-[#ee7d2b] p-4 rounded-md text-sm">
          <p className="font-semibold mb-2">Pour le détail, voir :</p>
          <ul className="space-y-1 ml-4 list-disc">
            <li><strong>Durées par âge, pauses, travail de nuit</strong> : onglet Temps de travail</li>
            <li><strong>Repos, vacances scolaires, dimanche et jours fériés</strong> : onglet Organisation</li>
            <li><strong>Théâtre, cirque, acrobaties, publicité</strong> : onglet Types d'emploi des mineurs</li>
            <li><strong>Pièces du dossier enfant</strong> (constitué par la production) : Espace Parents → Dossier Enfant</li>
            <li><strong>Rémunération et Caisse des Dépôts</strong> : Espace Parents → Caisse des Dépôts</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);

/* Contenu VHSS */
const VHSSContent = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Formation obligatoire</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground">
          La formation VHSS est obligatoire pour les producteurs (depuis 2022) et pour toutes les équipes de tournage (depuis janvier 2025).
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Étude VHSS - Février 2025 (17 associations professionnelles)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-foreground">
          <strong>1 698 réponses</strong> de technicien·ne·s du cinéma et de l'audiovisuel sur 40 ans de carrière
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-1">Discrimination</p>
            <p className="text-sm text-foreground"><strong>47%</strong> ont subi une discrimination (56% femmes, 35% hommes)</p>
            <p className="text-xs text-muted-foreground mt-1">Motifs : sexe, âge, apparence physique</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-1">Agissements sexistes</p>
            <p className="text-sm text-foreground"><strong>59%</strong> ont subi des agissements sexistes (85% femmes, 25% hommes)</p>
            <p className="text-xs text-muted-foreground mt-1">Remarques, blagues sexistes, interpellations familières</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-1">Harcèlement sexuel</p>
            <p className="text-sm text-foreground"><strong>37%</strong> ont subi du harcèlement sexuel (50% femmes, 20% hommes)</p>
            <p className="text-xs text-muted-foreground mt-1">Blagues grivoises, rapprochements physiques non-consentis</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-1">Agressions sexuelles</p>
            <p className="text-sm text-foreground"><strong>11%</strong> ont été victimes (15% femmes, 5% hommes)</p>
            <p className="text-xs text-muted-foreground mt-1">Baisers forcés, attouchements</p>
          </div>
        </div>
        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary">Viols / tentatives : 25 personnes (23 femmes, 2 hommes)</p>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Constats clés de l'étude</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <ul className="text-sm space-y-2 text-foreground">
            <li><strong>Victimes :</strong> Principalement des femmes, jeunes, en postes subalternes ou techniques</li>
            <li><strong>Auteurs :</strong> Très majoritairement des hommes avec pouvoir hiérarchique, notoriété ou âge</li>
            <li><strong>Omerta :</strong> 82% des femmes et 65% des hommes estiment que la loi du silence persiste</li>
            <li><strong>Contexte :</strong> Tournages en déplacement, horaires tardifs, promiscuité, situations festives</li>
            <li><strong>Évolution positive :</strong> 83% estiment que la situation s'améliore depuis le début de leur carrière</li>
          </ul>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Avenant VHSS (17 mai 2024)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-2">
          <p className="text-sm text-foreground"><strong>Harcèlement sexuel :</strong> Propos ou comportements à connotation sexuelle répétés portant atteinte à la dignité.</p>
          <p className="text-sm text-foreground"><strong>Agissement sexiste :</strong> Tout agissement lié au sexe créant un environnement hostile.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-primary">Référent VHSS du film</p>
              <p className="text-sm">Salarié volontaire et formé, désigné par la production (30 € brut/semaine en long métrage) : voir « Devenir référent·e VHSS » ci-dessous</p>
            </div>
            <div>
              <p className="font-semibold text-primary">Procédure de signalement</p>
              <p className="text-sm">Dispositif interne obligatoire - Mail/téléphone dédié - Confidentialité garantie</p>
            </div>
            <div>
              <p className="font-semibold text-primary">Protection des victimes</p>
              <p className="text-sm">Interdiction de sanctions, licenciement ou discrimination des victimes et témoins</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-primary">Cellule d'écoute Audiens</p>
              <p className="text-sm">Accompagnement psychologique et juridique gratuit - Anonymat préservé</p>
            </div>
            <div>
              <p className="font-semibold text-primary">Enquête interne</p>
              <p className="text-sm">Procédure contradictoire obligatoire - Peut être externalisée - Respect présomption d'innocence</p>
            </div>
            <div>
              <p className="font-semibold text-primary">Formation obligatoire</p>
              <p className="text-sm">Formation VHSS pour producteurs (depuis 2022) et équipes de tournage (depuis janvier 2025)</p>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border text-sm">
          <p className="font-semibold text-primary mb-2">Mesures de prévention obligatoires</p>
          <ul className="space-y-1 ml-4 list-disc text-foreground">
            <li>Information de tous les salariés (kit de prévention)</li>
            <li>Affichage des numéros utiles et procédures</li>
            <li>Formation des managers et référents</li>
            <li>Si possible, un ou des référents VHSS sur toutes les étapes (prépa, tournage, post-prod)</li>
            <li>Notification au CCHSCT en cas de signalement (anonymisée)</li>
          </ul>
        </div>
      </CardContent>
    </Card>

    <Card className="border-2 border-primary/40">
      <CardHeader>
        <CardTitle>Devenir référent·e VHSS du film</CardTitle>
        <p className="text-sm text-muted-foreground">Une fonction créée par la convention collective du cinéma (avenant du 17 mai 2024), ouverte à tout membre de l'équipe, y compris le ou la responsable des enfants.</p>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-foreground">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-2">
            <p className="font-semibold text-primary">Les conditions</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span><strong>Être volontaire</strong> : personne ne peut être désigné référent contre son gré.</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span><strong>Être formé</strong> : avoir suivi le parcours « ambassadeur-référent VHSS » de l'<a className="text-accent underline" href="https://www.afdas.com" target="_blank" rel="noopener noreferrer">Afdas</a>, ou une formation équivalente spécifique aux référents VHSS. Gardez votre attestation.</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span><strong>Faire partie de l'équipe</strong> du film.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-2">
            <p className="font-semibold text-primary">La désignation</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Avant le projet, la production demande qui, dans l'équipe, est <strong>volontaire et formé</strong>. Signalez-vous à ce moment-là.</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>S'il y a un volontaire formé et pas de référent au niveau de la société, la production <strong>doit</strong> en désigner un.</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>S'il y a plusieurs volontaires, la production choisit après concertation avec l'équipe.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-2">
            <p className="font-semibold text-primary">Les missions</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Informer et orienter les salariés vers les ressources utiles.</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Participer à la sensibilisation et à la prévention, avec la production.</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Faire connaître la procédure de signalement.</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Recueillir les signalements et les transmettre <strong>par écrit</strong> à la production, puis être informé de leur suivi.</p>
            <p className="text-muted-foreground">Le référent reste impartial. Il n'est pas responsable du traitement des signalements : c'est l'employeur qui l'est.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-2">
            <p className="font-semibold text-primary">Moyens, indemnité et protection</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Un échange avec la production fixe les moyens (procédure de signalement, coordonnées des équipes, matériel).</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Indemnité spécifique : <strong>30 € brut par semaine</strong> en long métrage.</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Aucune sanction, ni licenciement, ni discrimination possible pour avoir relaté de bonne foi des faits (art. L1153-2 du code du travail).</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Sources : convention collective de la production cinématographique (IDCC 3097), titre I, art. 32.4 et 33.1.3.3.
          La convention de la production audiovisuelle (IDCC 2642) ne prévoit pas de référent VHSS du film ; il existe en revanche,
          selon la taille de la société, un référent du CSE et un référent d'entreprise (art. L2314-1 et L1153-5-1 du code du travail).
        </p>
      </CardContent>
    </Card>

    <Card className="border-2 border-[#ee7d2b]">
      <CardHeader>
        <CardTitle>En cas de problème : à qui s'adresser ?</CardTitle>
        <p className="text-sm text-muted-foreground">Victime ou témoin de violences, de harcèlement ou d'agissements sexistes, ou situation qui met un enfant en danger : voici l'ordre conseillé.</p>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-foreground">
        <div className="flex gap-3"><span className="font-bold text-[#ee7d2b] text-lg leading-none">1</span><p><strong>Le référent VHSS du film</strong>, désigné par la production : c'est le premier interlocuteur, il recueille le signalement et alerte la production.</p></div>
        <div className="flex gap-3"><span className="font-bold text-[#ee7d2b] text-lg leading-none">2</span><p><strong>La production</strong> (employeur, directeur ou directrice de production) : elle doit faire cesser les faits, protéger la victime et mener une enquête interne. Les représentants du personnel peuvent aussi être saisis, ainsi que le <strong>CCHSCT</strong> de la production cinématographique.</p></div>
        <div className="flex gap-3"><span className="font-bold text-[#ee7d2b] text-lg leading-none">3</span><p><strong>La cellule d'écoute Audiens</strong> (spectacle, cinéma, audiovisuel), gratuite et anonyme si vous le souhaitez, pour un soutien psychologique et juridique : <strong>01 87 20 30 90</strong> (du lundi au vendredi, 9h-13h et 14h-18h) — <a className="text-accent underline" href="mailto:violences-sexuelles-culture@audiens.org">violences-sexuelles-culture@audiens.org</a></p></div>
        <div className="flex gap-3"><span className="font-bold text-[#ee7d2b] text-lg leading-none">4</span><p><strong>Si rien n'est fait</strong> : le <strong>médecin du travail</strong> (Thalie Santé pour les enfants), l'<strong>inspection du travail</strong> (DREETS ou DRIEETS) et le <strong>Défenseur des droits</strong>.</p></div>
        <div className="flex gap-3"><span className="font-bold text-[#ee7d2b] text-lg leading-none">5</span><p><strong>Justice</strong> : dépôt de plainte auprès de la police, de la gendarmerie ou directement du procureur de la République.</p></div>
        <div className="mt-2 grid md:grid-cols-3 gap-3">
          <div className="bg-destructive/10 border border-destructive/40 rounded-lg p-3"><p className="font-bold">Urgence</p><p>17 (police) ou 112</p></div>
          <div className="bg-destructive/10 border border-destructive/40 rounded-lg p-3"><p className="font-bold">Enfant en danger</p><p>119 — Allô Enfance en danger, 24h/24, gratuit</p></div>
          <div className="bg-muted/60 border border-border rounded-lg p-3"><p className="font-bold">Violences Femmes Info</p><p>39 19, gratuit et anonyme</p></div>
        </div>
        <p className="text-xs text-muted-foreground">Ces interlocuteurs sont ceux que la convention collective du cinéma impose d'afficher sur chaque production (avenant VHSS).</p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Documents de référence</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <button
          onClick={() => window.open('/etude_vhss_cine-av_assos_professionnelles_2025_afar_full_def.pdf', '_blank')}
          className="w-full bg-muted/50 hover:bg-muted border border-border text-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
        >
          Télécharger l'Étude complète VHSS (Février 2025)
        </button>
        <button
          onClick={() => window.open('/ccn-production-cinema-novembre-2026.pdf', '_blank')}
          className="w-full bg-muted/50 hover:bg-muted border border-border text-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
        >
          Consulter l'avenant complet dans la Convention Collective (Articles 30-34)
        </button>
      </CardContent>
    </Card>
  </div>
);

/* Section Animateurs */
const AnimateursSection = () => (
  <Tabs defaultValue="idees-animation" className="w-full">
    <TabsList className="grid w-full grid-cols-3 mb-6">
      <TabsTrigger value="idees-animation" className="text-xs">Animations</TabsTrigger>
      <TabsTrigger value="jeux-rapides" className="text-xs">Jeux Rapides</TabsTrigger>
      <TabsTrigger value="jeux-societe" className="text-xs">Jeux Société</TabsTrigger>
    </TabsList>

    <TabsContent value="idees-animation">
      <div className="space-y-4">
        <div className="rounded-lg border-2 border-[#ee7d2b] bg-[#fdf1e7] p-4 text-foreground">
          <p className="font-bold text-lg mb-2">Le rôle de l'animateur·trice</p>
          <p className="text-sm mb-2">
            L'animateur·trice intervient <strong>en soutien du·de la responsable des enfants</strong>, sous sa supervision directe.
            Il·elle occupe et accompagne les enfants pendant les temps d'attente, veille à leur bien-être et peut assister le·la responsable dans toutes ses missions.
          </p>
          <ul className="text-sm ml-4 list-disc space-y-1">
            <li>Rend régulièrement compte au·à la responsable des enfants de ce qu'il·elle observe, y compris en cas de difficulté.</li>
            <li>Ne prend aucune décision engageant l'enfant, la famille ou la production sans en référer au·à la responsable.</li>
            <li>Adhère à la charte de l'ARENCA et agit dans le même esprit de protection et de bienveillance.</li>
          </ul>
        </div>
        <Card>
          <CardHeader><CardTitle>Idées d&apos;animation par tranche d&apos;âge</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                age: "3 — 6 ans",
                color: "bg-yellow-50 border-yellow-200",
                idees: [
                  "Dessin libre et coloriage sur grand format",
                  "Jeux de construction (Duplo, kapla)",
                  "Histoires et contes racontés",
                  "Jeux d&apos;imitation et de dînette",
                  "Bulles de savon et jeux sensoriels",
                  "Puzzles simples et encastrements",
                ]
              },
              {
                age: "6 — 10 ans",
                color: "bg-green-50 border-green-200",
                idees: [
                  "Dessin, coloriage manga, origami",
                  "Lego et constructions créatives",
                  "Jeux de société simples (Uno, Dobble, Jungle Speed)",
                  "Lecture de BD et livres illustrés",
                  "Activités manuelles (découpage, collage)",
                  "Jeux de cartes et mémory",
                ]
              },
              {
                age: "10 — 13 ans",
                color: "bg-blue-50 border-blue-200",
                idees: [
                  "Jeux de société stratégiques (Puissance 4, Échecs, Uno)",
                  "Dessin créatif, manga, BD",
                  "Quiz et jeux de culture générale",
                  "Écriture créative et scénarios",
                  "Puzzles complexes",
                  "Jeux de cartes à collectionner",
                ]
              },
              {
                age: "13 — 16 ans",
                color: "bg-purple-50 border-purple-200",
                idees: [
                  "Jeux de société (Catan, Codenames, Time&apos;s Up)",
                  "Quiz cinéma, musique, culture pop",
                  "Écoute de musique et discussion",
                  "Dessin, manga, illustrations",
                  "Jeux de rôle simples",
                  "Activités créatives libres",
                ]
              },
            ].map((groupe, i) => (
              <div key={i} className={`p-4 rounded-lg border ${groupe.color}`}>
                <p className="font-bold text-lg mb-3">{groupe.age}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                  {groupe.idees.map((idee, j) => (
                    <li key={j} dangerouslySetInnerHTML={{__html: `• ${idee}`}} />
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </TabsContent>

    <TabsContent value="jeux-rapides">
      <div className="space-y-4">
        <Card>
          <CardHeader><CardTitle>Jeux rapides — Sans matériel</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                titre: "Pour tous (3-16 ans)",
                jeux: [
                  { nom: "Jacques a dit", desc: "Classique intemporel, adapter la complexité selon l&apos;âge" },
                  { nom: "1, 2, 3 Soleil", desc: "Idéal pour se dégourdir les jambes entre deux prises" },
                  { nom: "Le jeu du silence", desc: "Utile pour les moments de calme avant une scène" },
                  { nom: "Devinettes", desc: "Animaux, objets, personnages célèbres — s&apos;adapte à tous les âges" },
                ]
              },
              {
                titre: "6 — 12 ans",
                jeux: [
                  { nom: "Le jeu du baccalauréat", desc: "Trouver un prénom, ville, animal... pour chaque lettre" },
                  { nom: "Ni oui ni non", desc: "Répondre aux questions sans dire oui ou non" },
                  { nom: "Le message secret", desc: "Chuchoter un message de personne en personne" },
                  { nom: "Mime express", desc: "Mimer un film, un animal, un métier en moins d&apos;une minute" },
                ]
              },
              {
                titre: "10 — 16 ans",
                jeux: [
                  { nom: "Quiz cinéma/séries", desc: "Parfait pour créer du lien avec les ados passionnés" },
                  { nom: "Le mot interdit", desc: "Faire deviner un mot sans utiliser certains mots clés" },
                  { nom: "Qui suis-je ?", desc: "Personnage collé dans le dos à faire deviner" },
                  { nom: "Story Cubes verbal", desc: "Inventer une histoire à partir de mots tirés au sort" },
                ]
              },
            ].map((groupe, i) => (
              <div key={i} className="bg-muted/50 p-4 rounded-lg border border-border">
                <p className="font-bold text-primary mb-3">{groupe.titre}</p>
                <div className="space-y-2">
                  {groupe.jeux.map((jeu, j) => (
                    <div key={j} className="flex gap-2 text-sm">
                      <span className="font-semibold min-w-[140px]" dangerouslySetInnerHTML={{__html: jeu.nom}} />
                      <span className="text-muted-foreground" dangerouslySetInnerHTML={{__html: `— ${jeu.desc}`}} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </TabsContent>
    <TabsContent value="jeux-societe">
      <div className="space-y-4">
        <Card>
          <CardHeader><CardTitle>Idées de jeux de société</CardTitle></CardHeader>
          <CardContent className="space-y-6">

            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">3 — 6 ans</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Monza</p><p className="text-muted-foreground">Jeu de course automobile avec dés colorés, logique simple</p></div>
                <div><p className="font-semibold">Memory</p><p className="text-muted-foreground">Classique de mémorisation, fonctionne avec tous les petits</p></div>
                <div><p className="font-semibold">Bata-Miaou</p><p className="text-muted-foreground">Jeu de chats rigolo et accessible dès le plus jeune âge</p></div>
                <div><p className="font-semibold">Bata-Waf</p><p className="text-muted-foreground">Version chiens, même principe, très apprécié des petits</p></div>
                <div><p className="font-semibold">Croque Carotte</p><p className="text-muted-foreground">Jeu coopératif autour d&apos;un lapin gourmand, idéal dès 4 ans</p></div>
                <div><p className="font-semibold">Dragomino</p><p className="text-muted-foreground">Jeu de dominos avec des dragons, accessible et coloré</p></div>
                <div><p className="font-semibold">Little Circuit</p><p className="text-muted-foreground">Jeu de logique et de circuit, stimule la réflexion des plus petits</p></div>
                <div><p className="font-semibold">Little Action</p><p className="text-muted-foreground">Petits défis d&apos;action et de motricité, idéal pour dépenser l&apos;énergie</p></div>
                <div><p className="font-semibold">Crazy Cups</p><p className="text-muted-foreground">Jeu de rapidité et d&apos;observation avec des gobelets colorés</p></div>
                <div><p className="font-semibold">Qui Est ?</p><p className="text-muted-foreground">Jeu de devinettes de personnages, stimule la logique</p></div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">6 — 10 ans</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Mille Sabord</p><p className="text-muted-foreground">Jeu de dés pirate, rapide et rigolo, parfait pour les petits</p></div>
                <div><p className="font-semibold">Dobble</p><p className="text-muted-foreground">Réflexes et observation, fonctionne avec tout le monde</p></div>
                <div><p className="font-semibold">Uno</p><p className="text-muted-foreground">Classique indémodable, simple et rapide</p></div>
                <div><p className="font-semibold">Jungle Speed</p><p className="text-muted-foreground">Jeu de réflexes, crée beaucoup d&apos;animation</p></div>
                <div><p className="font-semibold">Zombie Kidz</p><p className="text-muted-foreground">Jeu coopératif, idéal pour apprendre à jouer ensemble</p></div>
                <div><p className="font-semibold">Trio</p><p className="text-muted-foreground">Jeu de mémorisation et de déduction en famille</p></div>
                <div><p className="font-semibold">Jungle</p><p className="text-muted-foreground">Jeu de stratégie animalière simple, accessible dès 6 ans</p></div>
                <div><p className="font-semibold">Toss It</p><p className="text-muted-foreground">Jeu d&apos;adresse et de rapidité, très dynamique</p></div>
                <div><p className="font-semibold">Cabanga</p><p className="text-muted-foreground">Jeu de cartes nerveux, idéal pour les petits groupes</p></div>
                <div><p className="font-semibold">Mouton Mouton</p><p className="text-muted-foreground">Jeu d&apos;observation et de rapidité, rigolo et accessible</p></div>
                <div><p className="font-semibold">6 Qui Prend</p><p className="text-muted-foreground">Jeu de cartes tactique, simple à expliquer et très amusant</p></div>
                <div><p className="font-semibold">Skyjo</p><p className="text-muted-foreground">Jeu de cartes léger et addictif, parfait pour tous les âges</p></div>
                <div><p className="font-semibold">Taco Chat Bouc Cheese Pizza</p><p className="text-muted-foreground">Jeu de réflexes délirant, fous rires garantis</p></div>
                <div><p className="font-semibold">Las Vegas</p><p className="text-muted-foreground">Jeu de dés et de tactique, rapide et animé</p></div>
                <div><p className="font-semibold">Rush Hour</p><p className="text-muted-foreground">Jeu de logique et de casse-tête, stimule la réflexion</p></div>
                <div><p className="font-semibold">Labyrinthe</p><p className="text-muted-foreground">Jeu de plateau classique, déplacement de chemins et stratégie</p></div>
                <div><p className="font-semibold">Mission Dragon</p><p className="text-muted-foreground">Jeu d&apos;aventure coopératif, accessible et immersif</p></div>
                <div><p className="font-semibold">Nom d&apos;un Renard !</p><p className="text-muted-foreground">Jeu de culture générale légère, parfait en famille</p></div>
                <div><p className="font-semibold">Opération Noisette</p><p className="text-muted-foreground">Jeu d&apos;adresse coopératif autour d&apos;un écureuil espion</p></div>
                <div><p className="font-semibold">Little Secret</p><p className="text-muted-foreground">Jeu de déduction et de secrets, accessible aux enfants</p></div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">10 — 13 ans</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Mito</p><p className="text-muted-foreground">Bluff et déduction, très populaire chez les ados</p></div>
                <div><p className="font-semibold">Flip Seven</p><p className="text-muted-foreground">Jeu de cartes addictif, facile à apprendre</p></div>
                <div><p className="font-semibold">Skull King</p><p className="text-muted-foreground">Jeu de plis pirate, facile et très amusant</p></div>
                <div><p className="font-semibold">Love Letter</p><p className="text-muted-foreground">Jeu de cartes minimaliste, bluff et déduction, très rapide</p></div>
                <div><p className="font-semibold">Hanabi</p><p className="text-muted-foreground">Jeu coopératif où l&apos;on ne voit pas ses propres cartes, stimule la communication</p></div>
                <div><p className="font-semibold">The Mind</p><p className="text-muted-foreground">Jeu de cartes coopératif mystérieux, crée une vraie connivence de groupe</p></div>
                <div><p className="font-semibold">Perudo</p><p className="text-muted-foreground">Jeu de dés et de bluff, idéal pour les groupes animés</p></div>
                <div><p className="font-semibold">Saboteur</p><p className="text-muted-foreground">Jeu de rôles cachés autour d&apos;une mine, trahi ou coopère !</p></div>
                <div><p className="font-semibold">Bang !</p><p className="text-muted-foreground">Western avec rôles cachés, beaucoup d&apos;interaction et de rebondissements</p></div>
                <div><p className="font-semibold">Loup-Garou pour une Nuit</p><p className="text-muted-foreground">Version courte du célèbre jeu, parfait en grand groupe</p></div>
                <div><p className="font-semibold">Loup-Garou pour un Crépuscule</p><p className="text-muted-foreground">Nouvelle version avec de nouvelles cartes et mécaniques</p></div>
                <div><p className="font-semibold">Le Jeu des Loups</p><p className="text-muted-foreground">Jeu de rôles et de déduction en groupe, tension et stratégie</p></div>
                <div><p className="font-semibold">Traîtres à Bord !</p><p className="text-muted-foreground">Rôles cachés sur un bateau, tension et fous rires garantis</p></div>
                <div><p className="font-semibold">Galápagos</p><p className="text-muted-foreground">Jeu de survie et de négociation, stimule la coopération et la stratégie</p></div>
                <div><p className="font-semibold">Faraway</p><p className="text-muted-foreground">Jeu d&apos;exploration de cartes, simple et plein de découvertes</p></div>
                <div><p className="font-semibold">Burger Quiz</p><p className="text-muted-foreground">Quiz délirant inspiré de l&apos;émission, parfait pour animer un groupe</p></div>
                <div><p className="font-semibold">Wazabi</p><p className="text-muted-foreground">Jeu de dés épicé et nerveux, très rapide à jouer</p></div>
                <div><p className="font-semibold">Smile Life</p><p className="text-muted-foreground">Jeu de simulation de vie positive, créatif et bienveillant</p></div>
                <div><p className="font-semibold">The Crew</p><p className="text-muted-foreground">Jeu de plis coopératif en mission spatiale, très addictif</p></div>
                <div><p className="font-semibold">Elixir</p><p className="text-muted-foreground">Jeu de potions et de déduction, original et mystérieux</p></div>
                <div><p className="font-semibold">Unlock !</p><p className="text-muted-foreground">Escape game en cartes, idéal pour résoudre des énigmes en groupe</p></div>
                <div><p className="font-semibold">Moustique</p><p className="text-muted-foreground">Jeu de rapidité et de réflexes, très animé</p></div>
                <div><p className="font-semibold">Le Trésor des 3 Brigands</p><p className="text-muted-foreground">Jeu d&apos;aventure et de stratégie autour d&apos;un trésor à partager</p></div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">13 — 16 ans</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Time&apos;s Up</p><p className="text-muted-foreground">Faire deviner des noms célèbres, crée beaucoup de rires</p></div>
                <div><p className="font-semibold">Codenames</p><p className="text-muted-foreground">Jeu d&apos;espions en équipe, stimule la communication</p></div>
                <div><p className="font-semibold">Blanc Manger Coco</p><p className="text-muted-foreground">Humour absurde, parfait pour détendre l&apos;atmosphère</p></div>
                <div><p className="font-semibold">Mysterium</p><p className="text-muted-foreground">Jeu coopératif d&apos;enquête, crée des échanges</p></div>
                <div><p className="font-semibold">Concept</p><p className="text-muted-foreground">Faire deviner sans parler, universel et créatif</p></div>
                <div><p className="font-semibold">Exploding Kittens</p><p className="text-muted-foreground">Rapide, drôle et plein de rebondissements</p></div>
                <div><p className="font-semibold">2 Pommes 3 Pins</p><p className="text-muted-foreground">Jeu de culture générale décalé, parfait pour les ados</p></div>
                <div><p className="font-semibold">Secret Identity</p><p className="text-muted-foreground">Jeu de rôles et déduction, créatif et immersif</p></div>
                <div><p className="font-semibold">The Game</p><p className="text-muted-foreground">Jeu coopératif de cartes très exigeant, parfait pour souder un groupe</p></div>
                <div><p className="font-semibold">Le Baron</p><p className="text-muted-foreground">Jeu de stratégie et de négociation, stimule la réflexion</p></div>
                <div><p className="font-semibold">Dystopia</p><p className="text-muted-foreground">Univers dystopique, jeu de stratégie et d&apos;ambiance pour les plus grands</p></div>
                <div><p className="font-semibold">Speed Bac</p><p className="text-muted-foreground">Jeu de rapidité et de culture générale, très dynamique</p></div>
                <div><p className="font-semibold">Mamie Moule Maki</p><p className="text-muted-foreground">Le petit bac délirant, parfait en famille ou en groupe</p></div>
                <div><p className="font-semibold">Micronacro</p><p className="text-muted-foreground">Jeu d&apos;observation et de déduction sur un grand poster, captivant</p></div>
              </div>
            </div>

            <div className="bg-muted/50 border border-border p-4 rounded-lg">
              <p className="font-semibold text-primary mb-2">Conseil pratique</p>
              <p className="text-sm text-foreground">Privilégier les jeux courts (15-20 min max) adaptés aux interruptions fréquentes du tournage. Avoir toujours 2-3 jeux de niveaux différents pour s&apos;adapter rapidement au groupe.</p>
            </div>

          </CardContent>
        </Card>
      </div>
    </TabsContent>

  </Tabs>
);

export default ResponsablesPage;
