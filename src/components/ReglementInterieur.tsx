import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Titre = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg md:text-xl font-bold text-primary uppercase tracking-wide border-b border-[#ee7d2b]/40 pb-1 mt-8 mb-3">{children}</h3>
);
const Sous = ({ children }: { children: React.ReactNode }) => (
  <p className="font-semibold text-[#c45f15] mt-4 mb-1">{children}</p>
);
const Tiret = ({ children }: { children: React.ReactNode }) => (
  <p className="pl-4 -indent-4"><span className="text-[#ee7d2b] font-bold mr-2">–</span>{children}</p>
);

const ReglementInterieur = () => (
  <div className="bg-card border border-border rounded-lg p-5 md:p-8 text-foreground leading-relaxed">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-1">Règlement intérieur</h2>
    <p className="text-center text-muted-foreground mb-6">Association des Responsables Enfants dans le Cinéma et l'Audiovisuel</p>

    <Titre>Qu'est-ce que l'ARENCA ?</Titre>
    <p className="mb-2">Rejoindre l'ARENCA, c'est s'engager dans un projet collectif pour :</p>
    <div className="space-y-1.5">
      <Tiret><strong>Rendre notre métier visible</strong> : faire connaître et reconnaître le rôle des responsables enfants dans le milieu du cinéma et de l'audiovisuel.</Tiret>
      <Tiret><strong>Peser ensemble sur l'évolution du métier</strong> : apporter notre expertise de terrain aux organisations professionnelles et aux pouvoirs publics.</Tiret>
      <Tiret><strong>Échanger avec d'autres responsables enfants</strong> : partager nos expériences, nos difficultés, nos solutions.</Tiret>
      <Tiret><strong>S'ouvrir sur ce qu'il se fait ailleurs</strong> : s'inspirer de la façon dont d'autres pays abordent la protection des enfants dans l'audiovisuel.</Tiret>
    </div>
    <p className="mt-3">
      Des réunions régulières, en présentiel ou à distance, permettent à tous les membres de se retrouver, d'échanger et de réfléchir ensemble.
      Ces groupes de réflexion sont au cœur de la vie de l'association : c'est là qu'on s'entraide, qu'on fait avancer les sujets qui nous
      tiennent à cœur, et qu'on construit collectivement notre expertise.
    </p>
    <p className="mt-3">L'association fonctionne parce que ses membres s'y impliquent. Ce règlement précise comment on s'organise ensemble.</p>
    <p className="mt-3 font-semibold">L'ARENCA n'est pas une agence. Adhérer à l'ARENCA ne garantit pas de trouver du travail.</p>

    <Titre>1. Les membres</Titre>
    <Sous>Comment adhérer ?</Sous>
    <p className="mb-2">Pour rejoindre l'ARENCA, il faut envoyer un dossier de candidature comprenant :</p>
    <div className="space-y-1.5">
      <Tiret>un curriculum vitae à jour ;</Tiret>
      <Tiret>vos motivations : pourquoi vous souhaitez rejoindre l'association ;</Tiret>
      <Tiret>l'engagement d'avoir lu et d'accepter la <a className="text-accent underline" href="/metier?onglet=charte">charte ARENCA</a>.</Tiret>
    </div>
    <p className="mt-3 rounded-lg border-2 border-[#ee7d2b] bg-[#fdf1e7] p-3">
      Toute demande d'adhésion est à envoyer à <a className="text-accent underline font-semibold" href="mailto:contact@arenca.fr">contact@arenca.fr</a>.
    </p>
    <p className="mt-3">
      Le Bureau examine les candidatures et organise une rencontre avec chaque candidat·e, en présentiel ou en visio. La décision d'admission
      est prise collectivement par le Bureau. Cette étape est importante : elle permet aux personnes d'adhérer aux valeurs de cette association.
    </p>
    <p className="mt-3">Le montant de l'adhésion est fixé à <strong>20 euros</strong> pour l'année en cours.</p>
    <p className="mt-3">L'ARENCA peut reconsidérer l'adhésion d'un·e membre dont le comportement serait contraire à la charte.</p>

    <Titre>2. Le fonctionnement</Titre>
    <Sous>Le Bureau</Sous>
    <p>L'association est actuellement gérée par un bureau de trois postes : un·e président·e, un·e secrétaire et un·e trésorier·ère.</p>
    <Sous>Les finances</Sous>
    <p>
      L'association fonctionne grâce aux cotisations de ses membres. Le montant des cotisations et la tenue des comptes sont discutés chaque
      année lors de l'assemblée générale.
    </p>

    <Titre>3. La vie de l'association</Titre>
    <Sous>Les groupes de réflexion</Sous>
    <p>
      L'association peut créer des groupes de travail thématiques ouverts à tous les membres volontaires. Ces groupes se réunissent sous la
      responsabilité de l'association, en présentiel ou en visio, selon les disponibilités de chacun·e.
    </p>
    <Sous>La confidentialité</Sous>
    <p>
      Les membres respectent la confidentialité des échanges pendant les groupes de réflexion. Ils s'engagent à ne pas divulguer les
      informations personnelles et professionnelles dont ils ont connaissance dans le cadre de l'association.
    </p>
    <Sous>L'image de l'association</Sous>
    <p>
      Chaque membre s'engage à ne pas tenir de propos ni adopter de comportement qui pourraient nuire à l'image de l'ARENCA, y compris sur les
      réseaux sociaux. Un manquement grave avéré peut conduire le Bureau à mettre fin à une adhésion.
    </p>

    <div className="mt-8 flex justify-center">
      <Button asChild size="lg" className="gap-2">
        <a href="/Reglement_interieur_ARENCA.pdf" target="_blank" rel="noopener noreferrer">
          <Download className="h-5 w-5" /> Télécharger le règlement intérieur en PDF
        </a>
      </Button>
    </div>
  </div>
);

export default ReglementInterieur;
