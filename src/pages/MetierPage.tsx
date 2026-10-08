import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChildSupervisorRole from "@/components/ChildSupervisorRole";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const articles = [
  {
    id: "preambule",
    title: "Préambule",
    content: [
      "La présente charte définit les principes fondamentaux pour adhérer à l’association ARENCA. Elle vise à garantir la protection, le bien-être et l’épanouissement des mineur·es.\nL’ARENCA peut reconsidérer l’adhésion d’un·e membre dont le comportement serait contraire à la charte.\nEn signant la présente charte, le·la responsable des enfants et/ou l’animateur·trice déclare sur l’honneur avoir un casier judiciaire vierge."
    ]
  },
  {
    id: "article1",
    title: "Article 1 - Principes fondamentaux",
    sections: [
      {
        subtitle: "L’intérêt supérieur de l’enfant",
        items: ["Le·la responsable des enfants place l’intérêt, la sécurité et le bien-être du·de la mineur·e au cœur de toutes ses actions et décisions."]
      },
      {
        subtitle: "Le respect de la législation",
        items: ["Le·la responsable connaît la réglementation en vigueur concernant le travail des mineur·es, notamment les durées de travail, les temps de repos et les autorisations nécessaires. Il·elle s’engage à alerter immédiatement la production en cas de non-respect.", "Si aucune mesure n’est prise, le·la responsable enfant peut alerter les autorités compétentes"]
      },
      {
        subtitle: "La bienveillance et la confidentialité",
        items: ["Le·la responsable adopte une attitude bienveillante et respectueuse envers l’enfant et sa famille, et garantit la confidentialité des informations personnelles."]
      }
    ]
  },
  {
    id: "article2",
    title: "Article 2 - Engagement envers l’enfant",
    sections: [
      {
        subtitle: "Protection physique et psychologique",
        items: [
          "Veiller à la sécurité physique de l’enfant sur le plateau et lors des déplacements",
          "Être attentif·ve aux signes de fatigue, de stress ou de mal-être",
        ]
      },
      {
        subtitle: "Accompagnement personnalisé",
        items: [
          "S’adapter au rythme, à la personnalité et aux besoins spécifiques et aux limites de chaque enfant",
          "Préparer l’enfant à l’entrée et à la sortie du tournage (transitions école/plateau, fin de tournage)",
        ]
      },
      {
        subtitle: "Préservation de l’équilibre",
        items: [
          "Mettre en place des activités adaptées pendant les temps d’attente",
          "En période scolaire, organiser le suivi scolaire",
        ]
      }
    ]
  },
  {
    id: "article3",
    title: "Article 3 - Engagement envers la famille",
    sections: [
      {
        subtitle: "Communication transparente",
        items: [
          "Établir une relation de confiance dès la préparation",
          "Informer régulièrement la famille du déroulement du tournage",
          "Être disponible et réactif·ve aux questions et préoccupations"
        ]
      },
      {
        subtitle: "Respect des valeurs familiales",
        items: [
          "Prendre en compte les souhaits et les limites fixées par les parents, tout en respectant la législation",
          "Dans le cadre du tournage, toute décision importante concernant l’enfant doit être discutée avec les représentant·es légaux·ales et l’enfant si possible"
        ]
      }
    ]
  },
  {
    id: "article4",
    title: "Article 4 - Engagement envers la production",
    sections: [
      {
        subtitle: "Professionnalisme",
        items: [
          "Assurer une présence constante et fiable auprès de l’enfant sans créer un lien de dépendance",
          "Tenir à jour un récapitulatif des temps de travail / repos / suivi scolaire",
        ]
      },
      {
        subtitle: "Coordination et médiation avec les équipes artistiques et techniques",
        items: [
          "Faire le lien entre la famille, l’enfant et chaque département concerné. S’assurer de la bonne transmission des informations liées à l’analyse des risques (alimentation, relation aux animaux, etc…)",
          "Anticiper et résoudre les situations conflictuelles",
          "Planifier et coordonner la logistique et les conditions matérielles d’accueil : transport, hébergement, repas (loge dédiée, espace de repos, restauration adaptée, transport sécurisé)",
          "Constituer et superviser une équipe d’animateur·trices si nécessaire",
          "Être attentif·ve aux liens affectifs qui se créent naturellement entre l’enfant et les équipes"
        ]
      }
    ]
  },
  {
    id: "article5",
    title: "Article 5 - Compétences et formation continue",
    content: ["Le·la responsable des enfants s’engage à maintenir et développer ses compétences professionnelles :"],
    items: [
      "Se tenir informé·e des évolutions législatives et réglementaires",
      "Développer ses connaissances en psychologie de l’enfant",
      "Échanger avec ses pair·es sur les bonnes pratiques"
    ]
  },
  {
    id: "article6",
    title: "Article 6 - Déontologie professionnelle",
    items: [
      "Maintenir une position neutre dans les relations professionnelles",
      "Ne pas favoriser ses intérêts personnels au détriment de l’enfant",
      "Traiter tou·tes les intervenant·es et les enfants avec respect et professionnalisme et refuser toute forme de discrimination ou de comportement inapproprié",
      "Reconnaître les limites de son intervention et orienter vers des professionnel·les adapté·es si nécessaire (psychologue, médecin, etc.)",
      "Ne pas se substituer aux parents dans leur rôle éducatif",
    ],
    sections: [
      {
        subtitle: "Engagement de vigilance",
        items: [
          "En cas de situation préoccupante, informer immédiatement la production et les parents"
        ]
      }
    ]
  },
  {
    id: "article7",
    title: "Article 7 - Analyse et prévention des risques",
    content: [
      "Conformément au référentiel professionnel du métier (CPNEF de l’audiovisuel / AFDAS), le·la responsable des enfants conduit en amont et pendant le tournage une analyse formalisée des risques :"
    ],
    sections: [
      {
        subtitle: "En amont du tournage",
        items: [
          "Analyser le scénario et les scènes impliquant l’enfant",
          "Identifier les risques (lieux de tournage, horaires...)",
          "Si nécessaire, inviter la production à solliciter d’autres intervenant·es (coach, régleur·se cascade, psychologue, coordinateur·trice d’intimité, dresseur·se animalier·ère…)"
        ]
      },
      {
        subtitle: "Pendant le tournage",
        items: [
          "Réévaluer en continu les risques au regard des modifications de planning ou de mise en scène",
          "Documenter les incidents et les mesures mises en place"
        ]
      }
    ]
  },
  {
    id: "article8",
    title: "Article 8 - Accompagnement post-tournage",
    items: [
      "Rester disponible et à l’écoute des questionnements de l’enfant et de sa famille après la fin du tournage, notamment lors des périodes de promotion et de sortie du film",
      "Être attentif·ve aux retombées émotionnelles que peut vivre l’enfant à son retour à la vie quotidienne et scolaire",
    ]
  },
  {
    id: "article9",
    title: "Article 9 - L’animateur·trice",
    items: [
      "Intervenir en soutien du·de la responsable des enfants et exercer ses missions sous sa supervision directe. Il·elle peut être amené·e à assister toutes les missions précédemment citées.",
      "Rendre régulièrement compte au·à la responsable des enfants de toute observation concernant le bien-être des enfants, y compris en cas de difficulté et de situation préoccupante.",
      "Ne prendre aucune décision engageant l’enfant, la famille ou la production sans en référer préalablement au·à la responsable des enfants.",
      "Adhérer pleinement aux principes fondamentaux énoncés dans la présente charte et s’engager à conduire son action dans le même esprit de protection, de bienveillance et de professionnalisme envers l’enfant, dans la limite de son périmètre d’intervention."
    ]
  }
];

const CharteContent = () => (
  <div className="max-w-4xl mx-auto">
    <div className="space-y-6">
      {articles.map((article) => (
        <Card key={article.id} id={article.id} className="border-accent/20 bg-card hover:border-accent/50 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-primary">{article.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {article.content && (
              <div className="space-y-4">
                {article.content.map((paragraph, idx) => (
                  <p key={idx} className="text-foreground leading-relaxed">{paragraph}</p>
                ))}
              </div>
            )}
            {article.items && (
              <ul className="space-y-2 text-foreground">
                {article.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {article.sections && (
              <div className="space-y-6">
                {article.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-lg mb-3 text-accent">{section.subtitle}</h3>
                    <ul className="space-y-2 text-foreground">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="text-accent mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="mt-12 p-6 border border-border rounded-lg bg-card">
      <p className="text-muted-foreground mb-6">
        Date : <span className="inline-block w-40 border-b border-foreground/30" />
      </p>
      <p className="text-foreground font-medium mb-6">
        Signature du·de la responsable des enfants :
        <span className="inline-block w-64 ml-2 border-b border-foreground/30" />
      </p>
      <p className="text-foreground font-medium">
        Signature de l'animateur·trice (le cas échéant) :
        <span className="inline-block w-64 ml-2 border-b border-foreground/30" />
      </p>
    </div>
    <div className="mt-8 flex justify-center">
      <a href="/Charte_ARENCA.pdf" download="Charte_Professionnelle_ARENCA.pdf">
        <Button className="bg-accent text-white hover:bg-blue-vibrant shadow-lg hover:shadow-xl transition-all hover:scale-105 gap-2">
          <Download className="w-4 h-4" />
          Télécharger la charte en PDF
        </Button>
      </a>
    </div>
  </div>
);

const MetierPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bangers text-foreground tracking-wide mb-2">
              Le Métier
            </h1>
            <p className="text-xl text-accent font-semibold tracking-wide">
              Responsable Enfants — Cinéma & Audiovisuel
            </p>
          </div>
          <Tabs defaultValue="fiche" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="fiche">Fiche Métier</TabsTrigger>
              <TabsTrigger value="charte">Charte Professionnelle</TabsTrigger>
            </TabsList>
            <TabsContent value="fiche">
              <ChildSupervisorRole embedded />
            </TabsContent>
            <TabsContent value="charte">
              <CharteContent />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MetierPage;
