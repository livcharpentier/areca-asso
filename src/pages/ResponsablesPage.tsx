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
              <TabsTrigger value="responsables" className="text-sm sm:text-base font-semibold">
                Responsables Enfants
              </TabsTrigger>
              <TabsTrigger value="animateurs" className="text-sm sm:text-base font-semibold">
                Animateur/trices
              </TabsTrigger>
            </TabsList>

            {/* SECTION RESPONSABLES ENFANTS */}
            <TabsContent value="responsables">
              <Tabs defaultValue="reglementations" className="w-full">
                <TabsList className="grid w-full grid-cols-2 min-[380px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 mb-6 h-auto">
                  <TabsTrigger value="reglementations">
                    <span>Réglementations</span>
                  </TabsTrigger>
                  <TabsTrigger value="vhss">
                    <span>VHSS</span>
                  </TabsTrigger>
                  <TabsTrigger value="climat">
                    <span>Conditions climatiques</span>
                  </TabsTrigger>
                  <TabsTrigger value="diplomes">
                    <span>Diplômes</span>
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

            <TabsContent value="climat">
              <ClimatContent />
            </TabsContent>

            <TabsContent value="diplomes">
              <DiplomesContent />
            </TabsContent>

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
            <li><strong>Répétitions :</strong> Toutes les répétitions sur plateau et en loge</li>
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
            <li><strong>Règle des 50 % :</strong> l'enfant ne peut travailler plus de la moitié de la durée totale de chaque période de vacances scolaires</li>
            <li><strong>Vacances d'été :</strong> un mois entier de repos obligatoire (soit juillet, soit août en entier)</li>
            <li><strong>Cumul :</strong> cette règle s'applique quel que soit le nombre d'employeurs et le nombre de jours travaillés</li>
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
                <li><strong>2 jours de repos consécutifs</strong> par semaine (art. L3164-2 du code du travail)</li>
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
          <li><strong>Production dont le siège est en France :</strong> demande auprès du préfet du département du siège, instruite par la DDETS (direction départementale de l'emploi, du travail et des solidarités) ou, en Île-de-France, par la DRIEETS.</li>
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
/* Contenu Conditions climatiques */
const ClimatContent = () => (
  <div className="space-y-6 max-w-5xl mx-auto">
    <div className="rounded-lg border-2 border-[#16213f] bg-[#16213f]/5 p-4 text-sm text-foreground">
      <p className="font-bold text-base mb-1">C'est la production qui décide</p>
      <p>
        Le ou la responsable des enfants observe, alerte et propose, mais <strong>rien ne se fait sans l'accord de la production</strong> :
        c'est elle qui décide d'adapter les horaires, d'ajouter des pauses ou d'arrêter une séquence.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border-2 border-[#ee7d2b]">
        <CardHeader>
          <CardTitle>Forte chaleur</CardTitle>
          <p className="text-sm text-muted-foreground">À partir d'une moyenne de plus de 25 °C sur la journée</p>
        </CardHeader>
        <CardContent className="space-y-1.5 text-sm text-foreground">
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Faire boire régulièrement : par exemple <strong>un verre d'eau toutes les 20 minutes</strong>, avec de l'eau fraîche à portée de main.</p>
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Prévoir des <strong>pauses plus fréquentes</strong>.</p>
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Un <strong>abri ombragé ou climatisé</strong> pour attendre (ventilateur, brumisateur).</p>
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Demander à tourner aux <strong>heures les moins chaudes</strong>.</p>
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Vêtements clairs, légers et amples dès que le costume le permet ; chapeau et crème solaire entre les prises.</p>
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Limiter les efforts physiques.</p>
        </CardContent>
      </Card>
      <Card className="border-2 border-[#16213f]/50">
        <CardHeader>
          <CardTitle>Froid</CardTitle>
          <p className="text-sm text-muted-foreground">En dessous de 5 °C</p>
        </CardHeader>
        <CardContent className="space-y-1.5 text-sm text-foreground">
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Vêtements chauds en <strong>plusieurs couches</strong>, gants, bonnet, chaussures chaudes entre les prises.</p>
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Un <strong>local chauffé</strong> pour attendre.</p>
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Boissons chaudes.</p>
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Par temps de gel, de verglas ou de neige : signaler les sols glissants et les accès dangereux.</p>
        </CardContent>
      </Card>
    </div>

    <p className="text-sm text-foreground bg-muted/50 rounded-lg border border-border p-4">
      Les enfants supportent moins bien la chaleur et le froid que les adultes : ils se déshydratent et se refroidissent plus vite, et ne disent pas
      toujours qu'ils ont soif, chaud ou froid. Il faut donc les surveiller davantage.
    </p>

    <p className="text-xs text-muted-foreground">
      Source : <a className="underline" href="https://cchscinema.org/ambiances-climatiques/" target="_blank" rel="noopener noreferrer">CCHSCT Cinéma, fiche « Ambiances climatiques »</a>, adaptée aux enfants.
    </p>
  </div>
);


const ContactsUtilesContent = () => {
  const bloc = "bg-muted/50 p-4 rounded-lg border border-border text-sm space-y-1";
  const lien = "text-accent underline";
  return (
  <div className="space-y-6 max-w-5xl mx-auto">
    <Card className="border-2 border-red-600">
      <CardHeader>
        <CardTitle>En cas d'accident</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-foreground">
        <div className="rounded-lg bg-red-50 border border-red-200 p-3">
          <p className="font-bold">Urgence : appelez tout de suite les secours</p>
          <p><strong>15</strong> (SAMU) · <strong>18</strong> (pompiers) · <strong>112</strong> (numéro d'urgence européen)</p>
          <p className="text-muted-foreground">Appeler les secours ne demande l'accord de personne.</p>
        </div>
        <p><span className="text-[#ee7d2b] font-bold mr-2">–</span><strong>Prévenir immédiatement la production</strong> (direction de production, régie). Pour tout le reste, c'est elle qui prend les décisions.</p>
        <p><span className="text-[#ee7d2b] font-bold mr-2">–</span><strong>Prévenir les parents</strong>, en accord avec la production.</p>
        <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Noter l'heure, le lieu, ce qui s'est passé et les témoins, par exemple dans le compte rendu journalier.</p>
        <div className="rounded-lg border-l-4 border-[#ee7d2b] bg-[#fdf1e7] p-3 space-y-1">
          <p className="font-semibold">La déclaration : c'est le rôle de la production</p>
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>La production déclare l'accident du travail à la <strong>CPAM dans les 48 heures</strong> (hors dimanches et jours fériés). Elle n'a pas à juger si l'accident est réel : c'est la CPAM qui décide.</p>
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>En cinéma, la production envoie aussi une copie de la déclaration au <strong>CCHSCT</strong>.</p>
        </div>
        <p className="text-xs text-muted-foreground">Sources : code de la sécurité sociale (art. R441-3) ; <a className="underline" href="https://cchscinema.org/f-a-q/" target="_blank" rel="noopener noreferrer">FAQ du CCHSCT Cinéma</a>.</p>
      </CardContent>
    </Card>
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
          <div className={bloc + " md:col-span-2"}>
            <p className="font-semibold text-primary">CCHSCT Cinéma</p>
            <p>Comité central d'hygiène, de sécurité et des conditions de travail de la production cinématographique</p>
            <p>37 rue Étienne Marcel, 75001 Paris</p>
            <p className="font-medium pt-1">Déléguées hygiène et sécurité :</p>
            <div className="grid sm:grid-cols-2 gap-2">
              <p><strong>Clémentine Charlemaine</strong><br />06 28 23 48 71 · <a className={lien} href="mailto:clementine@cchscinema.org">clementine@cchscinema.org</a></p>
              <p><strong>Fenda Samassa</strong><br />06 35 30 71 00 · <a className={lien} href="mailto:fenda@cchscinema.org">fenda@cchscinema.org</a></p>
            </div>
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
          <p className="text-sm">Toute participation d'un enfant de moins de 16 ans à une production cinématographique ou publicitaire nécessite une autorisation préalable du préfet, délivrée après avis de la commission des enfants du spectacle (dossier instruit par la DDETS, ou par la DRIEETS en Île-de-France).</p>
          <p className="text-sm mt-2"><strong>Objectif :</strong> veiller à ce que l'emploi des enfants ne compromette ni leur scolarité, ni leur équilibre physique et moral, ni leur santé et leur sécurité au travail.</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Commission départementale consultative</p>
          <p className="text-sm mb-2">Présidée par un <strong>juge des enfants</strong> désigné par le premier président de la cour d'appel.</p>
          <p className="text-sm"><strong>Composition :</strong></p>
          <ul className="text-sm ml-4 list-disc space-y-1 mt-1">
            <li>Le directeur académique des services de l'Éducation nationale (DASEN), ou son représentant</li>
            <li>Le directeur ou la directrice de la DDETS (direction départementale de l'emploi, du travail et des solidarités ; en Île-de-France, la DRIEETS), ou son représentant</li>
            <li>Un médecin</li>
            <li>Le directeur ou la directrice de la DRAC (direction régionale des affaires culturelles), ou son représentant</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg border border-border">
          <p className="font-semibold text-primary mb-2">Procédure et délais</p>
          <ul className="text-sm space-y-1">
            <li><strong>Instruction :</strong> par la DDETS (en Île-de-France, la DRIEETS)</li>
            <li><strong>Délai de décision du préfet :</strong> 1 mois à compter de la réception de la demande complète</li>
            <li><strong>Complément d'instruction :</strong> délai prolongé d'un mois si nécessaire</li>
            <li><strong>Absence de réponse :</strong> demande réputée rejetée passé le délai</li>
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
            <p className="text-sm mt-3"><strong>Rôle :</strong> coordonne et supervise la présence et les conditions de travail des enfants sur le plateau.</p>
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
            <p><strong>Examen spécifique :</strong> évalue l'impact du rôle sur la santé physique et psychologique de l'enfant.</p>
            <p><strong>Le médecin doit préalablement avoir pris connaissance :</strong></p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Du contenu du spectacle (histoire, paroles, scènes)</li>
              <li>Du planning précis (dates, horaires des répétitions et représentations)</li>
            </ul>
            <p className="mt-2"><strong>Renouvellement obligatoire :</strong></p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Enfants &lt; 3 ans : tous les <strong>3 mois</strong></li>
              <li>Enfants 3-6 ans : tous les <strong>6 mois</strong></li>
              <li>Enfants &gt; 6 ans : tous les <strong>ans</strong></li>
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
          <p className="text-sm mb-2">L'instruction est <strong>obligatoire pour chaque enfant de 3 à 16 ans</strong> (art. L131-1 du code de l'éducation).</p>
          <p className="text-sm">Selon le guide de la commission DRIEETS, dès <strong>4 jours d'absence</strong>, la production envoie au rectorat un dossier avec l'<strong>avis pédagogique</strong> de l'école et les <strong>modalités de rattrapage des cours</strong>, à établir avec l'établissement scolaire.</p>
        </div>

        <div className="bg-[#fdf1e7] border-l-4 border-[#ee7d2b] p-4 rounded-md text-sm">
          <p className="font-semibold mb-2">Pour le détail, voir :</p>
          <ul className="space-y-1 ml-4 list-disc">
            <li><strong>Durées par âge, pauses, travail de nuit</strong> : onglet Temps de travail</li>
            <li><strong>Repos, vacances scolaires, dimanche et jours fériés</strong> : onglet Organisation</li>
            <li><strong>Théâtre, cirque, acrobaties, publicité</strong> : onglet Types d'emploi des mineurs</li>
            <li><strong>Pièces du dossier enfant</strong> (constitué par la production) : Espace Parents → Dossier enfant moins de 16 ans</li>
            <li><strong>Rémunération et Caisse des Dépôts</strong> : Espace Parents → Caisse des Dépôts</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);

/* Contenu Diplômes */
const DiplomesContent = () => (
  <div className="space-y-6">
    <div className="rounded-lg border-2 border-[#ee7d2b] bg-[#fdf1e7] p-4 text-foreground">
      <p className="font-bold text-lg mb-2">Faut-il un diplôme ?</p>
      <p className="text-sm">
        Aucun diplôme précis n'est exigé par la loi pour être responsable des enfants, mais une formation à l'encadrement
        des mineurs est un vrai plus. Le plus courant est le <strong>BAFA</strong> (brevet d'aptitude aux fonctions d'animateur).
      </p>
    </div>

    <Card className="border-2 border-[#ee7d2b]">
      <CardHeader>
        <CardTitle>Passer le BAFA : les 3 étapes</CardTitle>
        <p className="text-sm text-muted-foreground">Âge minimum : 16 ans le premier jour de la formation générale. Inscription sur <a className="text-accent underline" href="https://www.bafa-bafd.gouv.fr" target="_blank" rel="noopener noreferrer">bafa-bafd.gouv.fr</a>.</p>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-foreground">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-1">
            <p className="font-bold text-primary">1. Formation générale</p>
            <p className="font-semibold">8 jours minimum</p>
            <p>Bases théoriques et pratiques de l'animation. En continu ou en 2 parties sur 1 mois maximum.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-1">
            <p className="font-bold text-primary">2. Stage pratique</p>
            <p className="font-semibold">14 jours minimum</p>
            <p>En centre de loisirs, colonie de vacances ou accueil de scoutisme, en France (un tournage ne compte pas). Possible en 2 parties d'au moins 4 jours. À commencer dans les 18 mois après la formation générale.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-1">
            <p className="font-bold text-primary">3. Approfondissement ou qualification</p>
            <p className="font-semibold">6 jours (approfondissement) ou 8 jours (qualification)</p>
            <p>Thème au choix (petite enfance, handicap, activités artistiques…) ou qualification : surveillance de baignade, voile, canoë-kayak, activités motocyclistes.</p>
          </div>
        </div>
        <div className="bg-[#fdf1e7] p-4 rounded-lg border-l-4 border-[#ee7d2b] space-y-1">
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span><strong>Durée totale : 30 mois maximum</strong> pour faire les 3 étapes (prolongation possible de 12 mois sur demande motivée).</p>
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Le diplôme est délivré par le recteur après avis du jury. Il est <strong>valable à vie</strong>.</p>
          <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>La formation est <strong>payante</strong>, prix variable selon l'organisme. Aides : <strong>Caf</strong> (200 € pour la 3e étape, à demander dans les 3 mois après l'inscription), parfois la MSA, la mairie, le département, la région ou France Travail.</p>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Quelques organismes de formation habilités</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-foreground">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          <a className="text-accent underline" href="https://www.cemea.asso.fr" target="_blank" rel="noopener noreferrer">CEMÉA</a>
          <a className="text-accent underline" href="https://www.ufcv.fr" target="_blank" rel="noopener noreferrer">UFCV</a>
          <a className="text-accent underline" href="https://www.francas.asso.fr" target="_blank" rel="noopener noreferrer">Les Francas</a>
          <a className="text-accent underline" href="https://laligue.org" target="_blank" rel="noopener noreferrer">Ligue de l'enseignement</a>
          <a className="text-accent underline" href="https://www.leolagrange.org" target="_blank" rel="noopener noreferrer">Fédération Léo Lagrange</a>
          <a className="text-accent underline" href="https://www.famillesrurales.org" target="_blank" rel="noopener noreferrer">Familles Rurales</a>
          <a className="text-accent underline" href="https://www.afocal.fr" target="_blank" rel="noopener noreferrer">AFOCAL</a>
          <a className="text-accent underline" href="https://www.ifac.asso.fr" target="_blank" rel="noopener noreferrer">IFAC</a>
          <a className="text-accent underline" href="https://www.eedf.fr" target="_blank" rel="noopener noreferrer">Éclaireuses et Éclaireurs de France</a>
        </div>
        <p className="text-muted-foreground">La liste complète des organismes habilités et les dates de session se trouvent sur <a className="text-accent underline" href="https://www.bafa-bafd.gouv.fr" target="_blank" rel="noopener noreferrer">bafa-bafd.gouv.fr</a>.</p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Diplômes équivalents au BAFA</CardTitle>
        <p className="text-sm text-muted-foreground">Ces titres permettent d'exercer les mêmes fonctions d'animation que le BAFA (arrêté du 9 février 2007 modifié). Voici les principaux :</p>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-foreground">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-1">
            <p className="font-semibold text-primary mb-1">Animation, jeunesse et sport</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>BAPAAT</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>CPJEPS</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>BPJEPS</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>BEATEP</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>CQP animateur périscolaire</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>CQP animateur de loisirs sportifs</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>BEES 1er degré</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-1">
            <p className="font-semibold text-primary mb-1">Petite enfance et éducation</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>CAP accompagnant éducatif petite enfance (ou ancien CAP petite enfance)</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Bac pro animation enfance et personnes âgées</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Diplôme d'État de moniteur éducateur</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Diplôme universitaire de musicien intervenant (DUMI)</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-1">
            <p className="font-semibold text-primary mb-1">Études supérieures</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>DUT / BUT carrières sociales</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Licence STAPS</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Licence sciences de l'éducation</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>Licences professionnelles de l'animation sociale et socioculturelle</p>
          </div>
          <div className="bg-[#fdf1e7] p-4 rounded-lg border-l-4 border-[#ee7d2b] space-y-1">
            <p className="font-semibold text-primary mb-1">Niveau au-dessus du BAFA</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>BAFD (brevet d'aptitude aux fonctions de directeur)</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>DEJEPS</p>
            <p><span className="text-[#ee7d2b] font-bold mr-2">–</span>DESJEPS</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Sources : <a className="underline" href="https://www.service-public.gouv.fr/particuliers/vosdroits/F21074" target="_blank" rel="noopener noreferrer">service-public.gouv.fr, fiche Bafa (juin 2026)</a> ;{" "}
          <a className="underline" href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000615233" target="_blank" rel="noopener noreferrer">arrêté du 9 février 2007 (liste complète)</a>.
        </p>
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
        <p className="text-sm text-foreground mb-2">
          <strong>VHSS</strong> : violences et harcèlement sexistes et sexuels.
        </p>
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
            <p className="text-sm text-foreground"><strong>47 %</strong> ont subi une discrimination (56 % femmes, 35 % hommes)</p>
            <p className="text-xs text-muted-foreground mt-1">Motifs : sexe, âge, apparence physique</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-1">Agissements sexistes</p>
            <p className="text-sm text-foreground"><strong>59 %</strong> ont subi des agissements sexistes (85 % femmes, 25 % hommes)</p>
            <p className="text-xs text-muted-foreground mt-1">Remarques, blagues sexistes, interpellations familières</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-1">Harcèlement sexuel</p>
            <p className="text-sm text-foreground"><strong>37 %</strong> ont subi du harcèlement sexuel (50 % femmes, 20 % hommes)</p>
            <p className="text-xs text-muted-foreground mt-1">Blagues grivoises, rapprochements physiques non consentis</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-semibold text-primary mb-1">Agressions sexuelles</p>
            <p className="text-sm text-foreground"><strong>11 %</strong> ont été victimes (15 % femmes, 5 % hommes)</p>
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
            <li><strong>Victimes :</strong> principalement des femmes, jeunes, en postes subalternes ou techniques</li>
            <li><strong>Auteurs :</strong> très majoritairement des hommes avec pouvoir hiérarchique, notoriété ou âge</li>
            <li><strong>Omerta :</strong> 82 % des femmes et 65 % des hommes estiment que la loi du silence persiste</li>
            <li><strong>Contexte :</strong> tournages en déplacement, horaires tardifs, promiscuité, situations festives</li>
            <li><strong>Évolution positive :</strong> 83 % estiment que la situation s'améliore depuis le début de leur carrière</li>
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
          <p className="text-sm text-foreground"><strong>Harcèlement sexuel :</strong> propos ou comportements à connotation sexuelle répétés portant atteinte à la dignité.</p>
          <p className="text-sm text-foreground"><strong>Agissement sexiste :</strong> tout agissement lié au sexe créant un environnement hostile.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-primary">Référent VHSS du film</p>
              <p className="text-sm">Salarié volontaire et formé, désigné par la production (30 € brut/semaine en long métrage) : voir « Devenir référent·e VHSS » ci-dessous</p>
            </div>
            <div>
              <p className="font-semibold text-primary">Procédure de signalement</p>
              <p className="text-sm">Dispositif interne obligatoire · mail ou téléphone dédié · confidentialité garantie</p>
            </div>
            <div>
              <p className="font-semibold text-primary">Protection des victimes</p>
              <p className="text-sm">Interdiction de sanctions, licenciement ou discrimination des victimes et témoins</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-primary">Cellule d'écoute Audiens</p>
              <p className="text-sm">Accompagnement psychologique et juridique gratuit · anonymat préservé</p>
            </div>
            <div>
              <p className="font-semibold text-primary">Enquête interne</p>
              <p className="text-sm">Procédure contradictoire obligatoire · peut être externalisée · respect de la présomption d'innocence</p>
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
            <li>Notification au CCHSCT (comité central d'hygiène, de sécurité et des conditions de travail de la production cinématographique) en cas de signalement (anonymisée)</li>
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
        <div className="flex gap-3"><span className="font-bold text-[#ee7d2b] text-lg leading-none">4</span><p><strong>Si rien n'est fait</strong> : le <strong>médecin du travail</strong> (Thalie Santé pour les enfants), l'<strong>inspection du travail</strong> (rattachée à la DDETS, ou à la DRIEETS en Île-de-France) et le <strong>Défenseur des droits</strong>.</p></div>
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
          Télécharger l'étude complète VHSS (février 2025)
        </button>
        <button
          onClick={() => window.open('/ccn-production-cinema-novembre-2026.pdf', '_blank')}
          className="w-full bg-muted/50 hover:bg-muted border border-border text-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
        >
          Consulter l'avenant complet dans la convention collective (articles 30 à 34)
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
                age: "3 mois — 2 ans",
                color: "bg-pink-50 border-pink-200",
                idees: [
                  "Histoires courtes et livres d&apos;images (livres en tissu ou cartonnés)",
                  "Comptines et chansons à gestes",
                  "Cubes à empiler et à emboîter, mettre des objets dans des cubes",
                  "Tapis d&apos;éveil et tapis de jeu",
                  "Hochets, balles souples, jouets sonores",
                  "Jeux de coucou-caché",
                  "<strong>Sécurité :</strong> uniquement des jouets adaptés à l&apos;âge, sans petites pièces, et nettoyés",
                ]
              },
              {
                age: "2 — 3 ans",
                color: "bg-orange-50 border-orange-200",
                idees: [
                  "Histoires, comptines et chansons à gestes",
                  "Gommettes et coloriages simples (gros crayons)",
                  "Cubes, gros blocs de construction, encastrements",
                  "Voitures, poupées, peluches",
                  "Premiers jeux de société de leur âge (lotos d&apos;images, premiers memory, Mon premier verger)",
                  "Pâte à modeler",
                  "<strong>Sécurité :</strong> pas de petites pièces, toujours sous surveillance",
                ]
              },
              {
                age: "3 — 6 ans",
                color: "bg-yellow-50 border-yellow-200",
                idees: [
                  "Dessin libre et coloriage sur grand format",
                  "Jeux de construction (Duplo, Kapla)",
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
                  "Jeux de cartes et memory",
                ]
              },
              {
                age: "10 — 13 ans",
                color: "bg-blue-50 border-blue-200",
                idees: [
                  "Jeux de société stratégiques (Puissance 4, échecs, Uno)",
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
                  { nom: "Le jeu du baccalauréat", desc: "Trouver un prénom, une ville, un animal… pour chaque lettre" },
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

            <p className="text-sm text-muted-foreground">Âges et durées indiqués par les éditeurs, à titre indicatif.</p>

            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">Dès 3 ans</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Memory</p><p className="text-muted-foreground">Retrouver les paires d&apos;images cachées en mémorisant leur place.</p><p className="text-xs text-primary mt-0.5">Dès 3 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Doudou</p><p className="text-muted-foreground">Coopératif : retrouver le doudou caché avant l&apos;heure du dodo.</p><p className="text-xs text-primary mt-0.5">Dès 3 ans · env. 5 min</p></div>
                <div><p className="font-semibold">Bata-Waf</p><p className="text-muted-foreground">Bataille avec des chiens : la plus grande carte gagne le pli.</p><p className="text-xs text-primary mt-0.5">Dès 3 ans · env. 10 min</p></div>
                <div><p className="font-semibold">Bata-Miaou</p><p className="text-muted-foreground">Même principe que Bata-Waf, avec des chats.</p><p className="text-xs text-primary mt-0.5">Dès 3 ans · env. 10 min</p></div>
                <div><p className="font-semibold">Little Action</p><p className="text-muted-foreground">Petits défis d&apos;adresse et de motricité pour bouger.</p><p className="text-xs text-primary mt-0.5">Dès 3 ans · env. 10 min</p></div>
                <div><p className="font-semibold">Little Circuit</p><p className="text-muted-foreground">Petit jeu de parcours pour découvrir les couleurs et compter.</p><p className="text-xs text-primary mt-0.5">Dès 3 ans · env. 10 min</p></div>
                <div><p className="font-semibold">Opération Noisettes</p><p className="text-muted-foreground">Coopératif d&apos;adresse : aider les écureuils à ramasser les noisettes.</p><p className="text-xs text-primary mt-0.5">Dès 3 ans · env. 10 min</p></div>
                <div><p className="font-semibold">Mission Dragon</p><p className="text-muted-foreground">Adresse : grimper dans la tour du dragon pour récupérer les rubis (plus long).</p><p className="text-xs text-primary mt-0.5">Dès 3 ans · env. 45 min</p></div>
                <div><p className="font-semibold">Le jeu du moustique</p><p className="text-muted-foreground">Chacun mime l&apos;animal de sa carte, le plus gros l&apos;emporte : très animé.</p><p className="text-xs text-primary mt-0.5">Dès 4 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Croque Carotte</p><p className="text-muted-foreground">Course de lapins : on tourne la carotte et des trous s&apos;ouvrent sur le chemin.</p><p className="text-xs text-primary mt-0.5">Dès 4 ans · env. 20 min</p></div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">Dès 5 ans</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Monza</p><p className="text-muted-foreground">Course de voitures : lancer les dés et avancer sur les cases de la bonne couleur.</p><p className="text-xs text-primary mt-0.5">Dès 5 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Nom d&apos;un renard !</p><p className="text-muted-foreground">Coopératif : les poules enquêtent pour démasquer le renard voleur avant qu&apos;il s&apos;enfuie.</p><p className="text-xs text-primary mt-0.5">Dès 5 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Dragomino</p><p className="text-muted-foreground">Dominos de paysages pour découvrir des œufs de dragons.</p><p className="text-xs text-primary mt-0.5">Dès 5 ans · env. 20 min</p></div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">Dès 6–7 ans</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Qui est-ce ?</p><p className="text-muted-foreground">Poser des questions par oui ou non pour deviner le personnage de l&apos;autre.</p><p className="text-xs text-primary mt-0.5">Dès 6 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Dobble</p><p className="text-muted-foreground">Repérer le symbole commun entre deux cartes, le plus vite possible.</p><p className="text-xs text-primary mt-0.5">Dès 6 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Crazy Cups</p><p className="text-muted-foreground">Empiler ses gobelets dans le bon ordre de couleurs plus vite que les autres.</p><p className="text-xs text-primary mt-0.5">Dès 6 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Les Éclairtout</p><p className="text-muted-foreground">Cherche-et-trouve dans le noir avec une lampe torche.</p><p className="text-xs text-primary mt-0.5">Dès 6 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Tossit</p><p className="text-muted-foreground">Adresse : lancer des pièces sur une cible, entre fléchettes et pétanque (à 2).</p><p className="text-xs text-primary mt-0.5">Dès 6 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Jungle</p><p className="text-muted-foreground">Jeu de stratégie avec des animaux, simple à expliquer.</p><p className="text-xs text-primary mt-0.5">Dès 6 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Qwirkle</p><p className="text-muted-foreground">Aligner des tuiles de même forme ou de même couleur pour marquer des points.</p><p className="text-xs text-primary mt-0.5">Dès 6 ans · env. 45 min</p></div>
                <div><p className="font-semibold">Les Incollables</p><p className="text-muted-foreground">Questions-réponses adaptées au niveau scolaire de chacun.</p><p className="text-xs text-primary mt-0.5">Dès 7 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Trio</p><p className="text-muted-foreground">Retrouver 3 cartes identiques en demandant la plus petite ou la plus grande carte des autres.</p><p className="text-xs text-primary mt-0.5">Dès 7 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Zombie Kidz Évolution</p><p className="text-muted-foreground">Coopératif : protéger l&apos;école des zombies ; le jeu évolue au fil des parties.</p><p className="text-xs text-primary mt-0.5">Dès 7 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Uno</p><p className="text-muted-foreground">Se débarrasser de ses cartes en suivant la couleur ou le chiffre.</p><p className="text-xs text-primary mt-0.5">Dès 7 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Jungle Speed</p><p className="text-muted-foreground">Réflexes : attraper le totem quand deux symboles identiques apparaissent.</p><p className="text-xs text-primary mt-0.5">Dès 7 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Labyrinthe</p><p className="text-muted-foreground">Faire coulisser les couloirs pour atteindre ses trésors.</p><p className="text-xs text-primary mt-0.5">Dès 7 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Dékal</p><p className="text-muted-foreground">Remplir sa grille de 4×4 cartes pour obtenir le total le plus bas.</p><p className="text-xs text-primary mt-0.5">Dès 7 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Exploding Kittens</p><p className="text-muted-foreground">Piocher sans tomber sur le chaton explosif : drôle et rapide.</p><p className="text-xs text-primary mt-0.5">Dès 7 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Mito</p><p className="text-muted-foreground">Se débarrasser de ses cartes… en trichant sans se faire prendre.</p><p className="text-xs text-primary mt-0.5">Dès 7 ans · env. 20 min</p></div>
              </div>
            </div>

            <div className="bg-lime-50 border border-lime-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">Dès 8 ans</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Pili Pili</p><p className="text-muted-foreground">Jeu de plis avec des missions à réussir à chaque manche.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Bazar Bizarre</p><p className="text-muted-foreground">Attraper le premier le bon objet selon la carte retournée.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Odin</p><p className="text-muted-foreground">Jeu de cartes : être le premier à se débarrasser de toutes ses cartes.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Time Bomb</p><p className="text-muted-foreground">Rôles cachés : désamorcer la bombe ou la faire exploser, en bluffant.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Just One</p><p className="text-muted-foreground">Coopératif : faire deviner un mot avec un seul indice chacun, sans doublon.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Cluedo</p><p className="text-muted-foreground">Enquête : trouver le coupable, l&apos;arme et la pièce du crime.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 45 min</p></div>
                <div><p className="font-semibold">Les Aventuriers du Rail</p><p className="text-muted-foreground">Construire des lignes de train entre les villes avec des cartes wagons.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 45 min</p></div>
                <div><p className="font-semibold">Monopoly</p><p className="text-muted-foreground">Acheter des rues et faire payer des loyers (long : pour les grandes pauses).</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 1 h 30 et +</p></div>
                <div><p className="font-semibold">Quarto</p><p className="text-muted-foreground">À deux : faire aligner 4 pièces ayant un point commun, mais c&apos;est l&apos;adversaire qui choisit votre pièce.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Mille Sabords</p><p className="text-muted-foreground">Jeu de dés pirate : relancer pour marquer plus, sans tout perdre.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Skyjo</p><p className="text-muted-foreground">Retourner et échanger ses cartes pour avoir le total le plus bas.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Taco Chat Bouc Cheese Pizza</p><p className="text-muted-foreground">Réflexes : taper sur la pile quand la carte correspond au mot annoncé.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 10 min</p></div>
                <div><p className="font-semibold">Las Vegas</p><p className="text-muted-foreground">Placer ses dés sur les casinos pour remporter les plus gros billets.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Rush Hour</p><p className="text-muted-foreground">Casse-tête : faire sortir la voiture rouge des embouteillages (seul).</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 10 min</p></div>
                <div><p className="font-semibold">6 qui prend</p><p className="text-muted-foreground">Poser ses cartes sur les rangées sans ramasser de têtes de bœuf.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 45 min</p></div>
                <div><p className="font-semibold">Cabanga</p><p className="text-muted-foreground">Jeu de cartes nerveux : se débarrasser de ses cartes sans se faire piéger.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Flip 7</p><p className="text-muted-foreground">Retourner des cartes pour marquer gros, mais deux identiques et tout est perdu.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Skull King</p><p className="text-muted-foreground">Jeu de plis pirate : annoncer combien de plis on va remporter.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Hanabi</p><p className="text-muted-foreground">Coopératif : on ne voit pas ses propres cartes, les autres doivent nous guider.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 25 min</p></div>
                <div><p className="font-semibold">The Mind</p><p className="text-muted-foreground">Coopératif : poser ses cartes dans l&apos;ordre croissant… sans se parler.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Perudo</p><p className="text-muted-foreground">Dés et bluff : parier sur le nombre de dés identiques sous les gobelets.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Saboteur</p><p className="text-muted-foreground">Rôles cachés : creuser vers l&apos;or pendant que les saboteurs bloquent la mine.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Bang !</p><p className="text-muted-foreground">Western à rôles cachés : shérif, adjoints, hors-la-loi et renégat.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Wazabi</p><p className="text-muted-foreground">Jeu de dés : se débarrasser de ses dés grâce aux effets des cartes.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 20 min</p></div>
                <div><p className="font-semibold">The Game</p><p className="text-muted-foreground">Coopératif : poser toutes les cartes de 1 à 100 en séries croissantes et décroissantes.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Le Baron</p><p className="text-muted-foreground">Jeu de cartes de la famille de 6 qui prend, sans ramasser de têtes de bœuf.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 30 min</p></div>
                <div><p className="font-semibold">2 Pommes 3 Pains</p><p className="text-muted-foreground">Annonces et rapidité, décalé et drôle.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Speed Bac</p><p className="text-muted-foreground">Petit bac rapide : trouver un mot de la catégorie avant les autres.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Mouton Mouton</p><p className="text-muted-foreground">Deviner la réponse que va donner son partenaire.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Tapple</p><p className="text-muted-foreground">Citer un mot du thème et appuyer sur sa première lettre avant la fin du chrono.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Esquissé ?</p><p className="text-muted-foreground">Téléphone arabe dessiné : dessiner, deviner, dessiner encore… fous rires assurés.</p><p className="text-xs text-primary mt-0.5">Dès 8 ans · env. 40 min</p></div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">Dès 10 ans</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Love Letter</p><p className="text-muted-foreground">Seize cartes, bluff et déduction pour faire parvenir sa lettre à la princesse.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Loup-Garou pour une Nuit</p><p className="text-muted-foreground">Version courte du Loup-Garou : une seule nuit pour démasquer les loups.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 10 min</p></div>
                <div><p className="font-semibold">Loup-Garou pour un Crépuscule</p><p className="text-muted-foreground">Même principe, avec de nouveaux rôles.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 10 min</p></div>
                <div><p className="font-semibold">Traîtres à Bord !</p><p className="text-muted-foreground">Rôles cachés sur un bateau pirate : trouver les traîtres.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Galèrapagos</p><p className="text-muted-foreground">Semi-coopératif : construire un radeau pour quitter l&apos;île… pas forcément tous ensemble.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Faraway</p><p className="text-muted-foreground">Poser des cartes de paysages et compter les points à rebours.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 30 min</p></div>
                <div><p className="font-semibold">The Crew</p><p className="text-muted-foreground">Jeu de plis coopératif en mission spatiale.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Unlock !</p><p className="text-muted-foreground">Escape game en cartes : résoudre des énigmes en équipe.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 1 h</p></div>
                <div><p className="font-semibold">Mysterium</p><p className="text-muted-foreground">Coopératif : un fantôme guide les médiums avec des cartes illustrées.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 45 min</p></div>
                <div><p className="font-semibold">Concept</p><p className="text-muted-foreground">Faire deviner un mot en plaçant des pions sur des icônes, sans parler.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 40 min</p></div>
                <div><p className="font-semibold">Secret Identity</p><p className="text-muted-foreground">Faire deviner son personnage avec des cartes illustrées.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Little Secret</p><p className="text-muted-foreground">Un mot secret à partager entre agents… sans le révéler aux espions.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Zombie Bus</p><p className="text-muted-foreground">Fuir les zombies en bus : coopérer ou bluffer.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Catan</p><p className="text-muted-foreground">Récolter des ressources et les échanger pour construire routes et villes.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 1 h 15</p></div>
                <div><p className="font-semibold">So Clover !</p><p className="text-muted-foreground">Coopératif : trouver un indice qui relie deux mots à la fois.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Courtisans</p><p className="text-muted-foreground">Faire monter ou chuter les familles de la cour de la reine, en secret.</p><p className="text-xs text-primary mt-0.5">Dès 10 ans · env. 30 min</p></div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
              <p className="font-bold text-lg mb-3">Ados (12 ans et +)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><p className="font-semibold">Time&apos;s Up</p><p className="text-muted-foreground">Faire deviner des noms célèbres : en parlant, en un mot, puis en mimant.</p><p className="text-xs text-primary mt-0.5">Dès 12 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Burger Quiz</p><p className="text-muted-foreground">Quiz délirant inspiré de l&apos;émission : équipe Ketchup contre équipe Mayo.</p><p className="text-xs text-primary mt-0.5">Dès 12 ans · env. 20 min</p></div>
                <div><p className="font-semibold">Tu te mets combien ? (TTMC)</p><p className="text-muted-foreground">Choisir son niveau de 1 à 10 sur un thème avant de répondre à la question.</p><p className="text-xs text-primary mt-0.5">Dès 12 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Zéro à 100</p><p className="text-muted-foreground">Quiz dont la réponse est un nombre : il faut être le plus proche.</p><p className="text-xs text-primary mt-0.5">Dès 12 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Pigeon Pigeon</p><p className="text-muted-foreground">Bluff et culture générale : inventer de fausses réponses pour piéger les autres.</p><p className="text-xs text-primary mt-0.5">Dès 12 ans · env. 20 min</p></div>
                <div><p className="font-semibold">MicroMacro: Crime City</p><p className="text-muted-foreground">Enquêtes à mener sur une immense carte de ville, à la loupe.</p><p className="text-xs text-primary mt-0.5">Dès 12 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Smile Life</p><p className="text-muted-foreground">Jeu de cartes de la vie : métier, famille, voyages… et coups bas.</p><p className="text-xs text-primary mt-0.5">Dès 12 ans · env. 45 min</p></div>
                <div><p className="font-semibold">Codenames</p><p className="text-muted-foreground">Deux équipes, des espions et des indices en un mot pour trouver ses agents.</p><p className="text-xs text-primary mt-0.5">Dès 14 ans · env. 15 min</p></div>
                <div><p className="font-semibold">Top Ten</p><p className="text-muted-foreground">Coopératif : répondre à un thème selon son chiffre de 1 à 10, les autres classent.</p><p className="text-xs text-primary mt-0.5">Dès 14 ans · env. 30 min</p></div>
                <div><p className="font-semibold">Crack List</p><p className="text-muted-foreground">Entre petit bac et Uno : citer vite un mot de la liste.</p><p className="text-xs text-primary mt-0.5">Dès 14 ans · env. 30 min</p></div>
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
