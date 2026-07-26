import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Heart, Users, Briefcase, GraduationCap, Scale, Eye, PenLine, AlertTriangle } from "lucide-react";

const ChartePage = () => {
  const articles = [
    {
      id: "preambule",
      icon: FileText,
      title: "Préambule",
      content: [
        "La présente charte définit les principes fondamentaux et les engagements du responsable des enfants dans le cadre de productions audiovisuelles et cinématographiques. Elle vise à garantir la protection, le bien-être et l'épanouissement des mineurs tout en facilitant la réalisation des projets artistiques."
      ]
    },
    {
      id: "article1",
      icon: Shield,
      title: "Article 1 - Principes fondamentaux",
      sections: [
        {
          subtitle: "L'intérêt supérieur de l'enfant",
          items: ["Le responsable des enfants place l'intérêt, la sécurité et le bien-être du mineur au cœur de toutes ses actions et décisions."]
        },
        {
          subtitle: "Le respect de la législation",
          items: ["Le responsable s'engage à respecter scrupuleusement la réglementation en vigueur concernant le travail des mineurs, notamment les durées d'intervention, les temps de repos et les autorisations nécessaires."]
        },
        {
          subtitle: "La bienveillance et la confidentialité",
          items: ["Le responsable adopte une attitude bienveillante et respectueuse envers l'enfant et sa famille, et garantit la confidentialité des informations personnelles."]
        }
      ]
    },
    {
      id: "article2",
      icon: Heart,
      title: "Article 2 - Engagement envers l'enfant",
      sections: [
        {
          subtitle: "Protection physique et psychologique",
          items: [
            "Veiller à la sécurité physique de l'enfant sur le plateau et lors des déplacements",
            "Protéger l'enfant de toute situation inappropriée ou traumatisante",
            "Être attentif aux signes de fatigue, de stress ou de mal-être",
            "Créer un environnement rassurant et adapté"
          ]
        },
        {
          subtitle: "Accompagnement personnalisé et gestion des transitions",
          items: [
            "S'adapter au rythme, à la personnalité et aux besoins spécifiques de chaque enfant",
            "Favoriser l'expression des émotions et être à l'écoute",
            "Encourager et valoriser l'enfant dans son travail artistique",
            "Respecter les limites de l'enfant",
            "Préparer l'enfant à l'entrée et à la sortie du tournage (transitions école/plateau, fin de tournage)",
            "Identifier et signaler à la production les risques de difficulté de transition"
          ]
        },
        {
          subtitle: "Préservation de l'équilibre",
          items: [
            "Garantir le respect des horaires et des temps de repos",
            "Organiser des activités ludiques et éducatives pendant les temps d'attente",
            "Maintenir un lien avec la scolarité si nécessaire",
            "Préserver l'enfance et la spontanéité"
          ]
        }
      ]
    },
    {
      id: "article3",
      icon: Users,
      title: "Article 3 - Engagement envers la famille",
      sections: [
        {
          subtitle: "Communication transparente",
          items: [
            "Informer régulièrement la famille du déroulement du tournage",
            "Être disponible et réactif aux questions et préoccupations",
            "Transmettre les informations importantes en temps réel",
            "Établir une relation de confiance dès la préparation"
          ]
        },
        {
          subtitle: "Respect des valeurs familiales",
          items: [
            "Prendre en compte les souhaits et les limites fixées par les parents",
            "Respecter l'éducation et les principes familiaux",
            "Associer la famille aux décisions importantes concernant l'enfant"
          ]
        }
      ]
    },
    {
      id: "article4",
      icon: Briefcase,
      title: "Article 4 - Engagement envers la production",
      sections: [
        {
          subtitle: "Professionnalisme",
          items: [
            "Assurer une présence constante et fiable auprès de l'enfant",
            "Tenir à jour un journal de bord quotidien détaillé",
            "Respecter les contraintes de production dans le cadre légal",
            "Communiquer efficacement avec toutes les équipes"
          ]
        },
        {
          subtitle: "Coordination et médiation",
          items: [
            "Faire le lien entre la famille, l'enfant, la mise en scène et les équipes techniques",
            "Anticiper et résoudre les situations conflictuelles",
            "Faciliter le travail des équipes tout en protégeant l'enfant",
            "Proposer des solutions adaptées aux besoins de tous"
          ]
        },
        {
          subtitle: "Organisation rigoureuse",
          items: [
            "Planifier et coordonner la logistique (transport, hébergement, repas)",
            "Préparer l'enfant aux scènes à tourner en transmettant les consignes",
            "Gérer les autorisations administratives",
            "Constituer et superviser une équipe d'animation si nécessaire"
          ]
        }
      ]
    },
    {
      id: "article5",
      icon: GraduationCap,
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
      icon: Scale,
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
      icon: Eye,
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
      icon: PenLine,
      title: "Article 8 - Application de la charte",
      content: [
        "Cette charte engage moralement et professionnellement le responsable des enfants. Tout manquement grave aux principes énoncés peut entraîner une remise en cause de l'exercice de la profession."
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
              <h1 className="text-4xl md:text-5xl font-bangers text-primary tracking-wide mb-4">
                Charte du Responsable des Enfants
              </h1>
              <p className="text-xl text-accent font-semibold tracking-wide">
                Audiovisuel et Cinéma
              </p>
            </div>

            <div className="space-y-6">
              {articles.map((article) => {
                const Icon = article.icon;
                return (
                  <Card
                    key={article.id}
                    id={article.id}
                    className="border-accent/20 bg-card hover:border-accent/50 transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl md:text-2xl text-primary">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
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
