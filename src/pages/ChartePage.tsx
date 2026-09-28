import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChartePage = () => {
  const articles = [
    {
      id: "preambule",
      title: "Préambule",
      content: [
      "La présente charte définit les principes fondamentaux pour adhérer à l'association ARENCA. Elle vise à garantir la protection, le bien-être et l''panouissement des mineurs."
      ]
    },
    {
      id: "article1",
      title: "Article 1 - Principes fondamentaux",
      sections: [
        {
          subtitle: "L'intérêt supérieur de l'enfant",
          items: ["Le responsable des enfants place l'intérêt, la sécurité et le bien-être du mineur au cœur de toutes ses actions et décisions."]
        },
        {
          subtitle: "Le respect de la législation",
          items: ["Le responsable connaît la réglementation en vigueur concernant le travail des mineurs, notamment les durées de travail, les temps de repos et les autorisations nécessaires. Il s'engage à alerter immédiatement la production en cas de non-respect."]
        },
        {
          subtitle: "La bienveillance et la confidentialité",
          items: ["Le responsable adopte une attitude bienveillante et respectueuse envers l'enfant et sa famille, et garantit la confidentialité des informations personnelles."]
        }
      ]
    },
    {
      id: "article2",
      title: "Article 2 - Engagement envers l'enfant",
      sections: [
        {
          subtitle: "Protection physique et psychologique",
          items: [
            "Veiller à la sécurité physique de l'enfant sur le plateau et lors des déplacements",
            "Être attentif aux signes de fatigue, de stress ou de mal-être",
          ]
        },
        {
          subtitle: "Accompagnement personnalisé",
          items: [
            "S'adapter au rythme, à la personnalité et aux besoins spécifiques et aux limites de chaque enfant",
            "Préparer l'enfant à l'entrée et à la sortie du tournage (transitions école/plateau, fin de tournage)",
          ]
        },
        {
          subtitle: "Préservation de l'équilibre",
          items: [
            "Mettre en place des activités adaptées pendant les temps d'attente",
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
            "Informer régulièrement la famille du déroulement du tournage",
            "Être disponible et réactif aux questions et préoccupations",
            "Établir une relation de confiance dès la préparation"
          ]
        },
        {
          subtitle: "Respect des valeurs familiales",
          items: [
            "Prendre en compte les souhaits et les limites fixées par les parents, tout en respectant la législation",
            "Dans le cadre du tournage, toute décision importante concernant l'enfant doit être discutée avec les représentants légaux et l'enfant si possible"
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
            "Assurer une présence constante et fiable auprès de l'enfant sans créer un lien de dépendance",
            "Tenir à jour un récapitulatif des temps de travail / repos / suivi scolaire",
          ]
        },
        {
          subtitle: "Coordination et médiation",
          items: [
            "Faire le lien entre la famille, l'enfant et chaque département concerné. S'assurer de la bonne transmission des informations liées à l'analyse des risques (alimentation, relation aux animaux, etc…)",
            "Anticiper et résoudre les situations conflictuelles",
          ]
        },
        {
          subtitle: "",
          items: [
            "Planifier et coordonner la logistique et les conditions matérielles d'accueil : transport, hébergement, repas (loge dédiée, espace de repos, restauration adaptée, transport sécurisé)",
            "Constituer et superviser une équipe d'animation si nécessaire"
          ]
        },
        {
          subtitle: "Interface avec les équipes artistiques et techniques",
          items: [
            "Adapter sa communication aux différents interlocuteurs (mise en scène, régie, HMC, technique)",
            "Réguler les interactions entre l'enfant et les équipes pour préserver un cadre de travail respectueux",
            "Transmettre les besoins et contraintes de l'enfant aux équipes concernées"
          ]
        }
      ]
    },
    {
      id: "article5",
      title: "Article 5 - Compétences et formation continue",
      content: [
        "Le responsable des enfants s'engage à :"
      ],
      items: [
        "Maintenir et développer ses compétences professionnelles",
        "Se tenir informé des évolutions législatives et réglementaires",
        "Développer ses connaissances en psychologie de l'enfant",
        "Échanger avec ses pairs sur les bonnes pratiques"
      ]
    },
    {
      id: "article6",
      title: "Article 6 - Déontologie professionnelle",
      sections: [
        {
          subtitle: "Neutralité et objectivité",
          items: [
            "Maintenir une position neutre dans les relations professionnelles",
            "Ne pas favoriser ses intérêts personnels au détriment de l'enfant",
            "Éviter tout conflit d'intérêts"
          ]
        },
        {
          subtitle: "Respect des personnes",
          items: [
            "Traiter tous les intervenants avec respect et professionnalisme",
            "Refuser toute forme de discrimination ou de comportement inapproprié",
            "Signaler toute situation préoccupante aux autorités compétentes"
          ]
        },
        {
          subtitle: "Limites de la fonction",
          items: [
            "Reconnaître les limites de son intervention",
            "Orienter vers des professionnels adaptés si nécessaire (psychologue, médecin, etc.)",
            "Ne pas se substituer aux parents dans leur rôle éducatif"
          ]
        }
      ]
    },
    {
      id: "article7",
      title: "Article 7 - Engagement de vigilance",
      content: [
        "Le responsable des enfants s'engage à :"
      ],
      items: [
        "Refuser toute participation de l'enfant à des scènes dangereuses ou inappropriées",
        "Alerter immédiatement en cas de non-respect de la législation",
        "Interrompre le tournage si la sécurité ou le bien-être de l'enfant est en danger",
        "Documenter toute situation problématique"
      ]
    },
    {
      id: "article8",
      title: "Article 8 - Analyse et prévention des risques",
      content: [
        "Conformément au référentiel professionnel du métier (CPNEF de l'audiovisuel / AFDAS), le responsable des enfants conduit en amont et pendant le tournage une analyse formalisée des risques :"
      ],
      sections: [
        {
          subtitle: "En amont du tournage",
          items: [
            "Analyser le scénario et les scènes impliquant l'enfant (contenu, émotions sollicitées, cascades, effets spéciaux)",
            "Identifier les risques liés aux lieux de tournage (extérieurs, hauteurs, eau, animaux, foule, conditions climatiques)",
            "Évaluer les risques liés aux horaires (nuit, amplitude, décalages) et au rythme de tournage",
          ]
        },
        {
          subtitle: "Pendant le tournage",
          items: [
            "Réévaluer en continu les risques au regard des modifications de planning ou de mise en scène",
            "Alerter immédiatement la production et, si nécessaire, les autorités compétentes",
            "Documenter les incidents et les mesures correctives dans le journal de bord"
          ]
        }
      ]
    },
    {
      id: "article9",
      title: "Article 9 - Application de la charte",
      content: [
        "Cette charte engage moralement et professionnellement le responsable des enfants. Tout manquement grave aux principes énoncés peut entraîner une remise en cause de l'exercice de la profession."
      ]
    },
    {
      id: "article10",
      title: "Article 10 - Gestion du tournage",
      items: [
        "Identifier et signaler à la production les risques de difficulté de tournage"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bangers text-foreground tracking-wide mb-4">
                Charte du Responsable des Enfants
              </h1>
              <p className="text-xl text-accent font-semibold tracking-wide">
                Audiovisuel et Cinéma
              </p>
            </div>

            <div className="space-y-6">
              {articles.map((article) => {
                return (
                  <Card
                    key={article.id}
                    id={article.id}
                    className="border-accent/20 bg-card hover:border-accent/50 transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl md:text-2xl text-primary">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {article.content && (
                        <div className="space-y-4">
                          {article.content.map((paragraph, idx) => (
                            <p key={idx} className="text-foreground leading-relaxed">
                              {paragraph}
                            </p>
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
                              <h3 className="font-semibold text-lg mb-3 text-accent">
                                {section.subtitle}
                              </h3>
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
                );
              })}
            </div>

            <div className="mt-12 p-6 border border-border rounded-lg bg-card">
              <p className="text-muted-foreground mb-6">
                Date : <span className="inline-block w-40 border-b border-foreground/30" />
              </p>
              <p className="text-foreground font-medium">
                Signature du responsable des enfants :
                <span className="inline-block w-64 ml-2 border-b border-foreground/30" />
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChartePage;
