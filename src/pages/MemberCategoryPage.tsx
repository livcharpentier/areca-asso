import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, Calendar } from "lucide-react";

const MemberCategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryTitles: { [key: string]: string } = {
    "responsables-enfants": "Responsables Enfants",
    "coachs": "Coachs",
    "precepteurs": "Précepteurs",
    "animateurs": "Animateurs",
    "cantiniers": "Cantiniers",
    "autres": "Autres membres"
  };

  // Mock data - à remplacer par des données de la base de données
  const mockMembers = [
    {
      id: 1,
      firstName: "Liv",
      lastName: "Charpentier",
      photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liv",
      email: "liv.charp@wanadoo.fr",
      phone: "06 19 60 12 96",
      bio: "Responsable Enfants sur tournage, 3ème Assistante mise en scène, Assistante régisseuse. Spécialisée dans l'encadrement et l'animation depuis 1996.",
      experienceYears: 28,
      filmography: {
        "Responsable Enfants": "Radin (2016), Le petit Spirou (2017), Rémi sans famille (2018), Parents d'élèves (2020), Le trésor du Petit Nicolas (2021), Abandon, Histoire parallèle, Les enfants de la résistance (2026), Karma (2026)",
        "Assistante Casting Rôles (Adultes/Enfants)": "Les vacances de Ducobu (2011), La guerre des boutons (2011), Sans laisser de traces (2010), Jamais contente (2017), La guerre des Lulus (2023), Le 3ème jour",
        "Casting Petits Rôles & Figurations": "Un mariage explosif (2002), L'ex-femme de ma vie (2004), Podium (2004), Aurore (2005), Marie Besnard (2006), Comme mon père (2007), Molière (2007), Famille (2007), De l'autre côté du lit (2008), Elles et moi (2008), Transporter 3 (2008), Le petit Nicolas (2009), Blue Valentine (2010), Gainsbourg (2010), Les vacances du Petit Nicolas (2010), Pièce Montée (2010), Intouchables (2011), Les vacances de Ducobu (2011), Omar m'a tuer (2011), Quelques heures de printemps (2012), Cloclo (2012), 20 ans d'écart (2013), La dernière campagne (2013), La grande boucle (2013), Les bracelets rouges (3 saisons, 2014-2018), On voulait tout casser (2015), Chocolat (2016), Vise le coeur (2022), La guerre des Lulus (2023), Stavisky (2024), Le retour de Charles, Deux gouttes d'eau, Mon poussin, Love Locks, Une famille formidable",
        "Assistante Mise en Scène": "Pour elle (2008), La Voix des Steppes",
        "Coach Enfants": "Des nouvelles de la planète Mars (2016)",
        "Assistante Régisseuse": "Arthur et les Minimoys (2006), À l'intérieur (2007), Transporter 3 (2008), Arthur 3 (2010), Pub Afflelou, Pub KFC, Dracula (2025)"
      },
      availability: "Disponible",
      recentNews: "Atelier bricolage dans les écoles maternelle et primaire (2018-2025)",
      cvUrl: "/CV_LIV_CHARPENTIER.pdf"
    },
    {
      id: 2,
      firstName: "Thomas",
      lastName: "Martin",
      photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
      email: "thomas.martin@example.com",
      phone: "+33 6 23 45 67 89",
      bio: "Spécialisé dans l'accompagnement des jeunes acteurs sur les tournages de longue durée.",
      experienceYears: 10,
      specialties: ["Accompagnement artistique", "Soutien psychologique"],
      availability: "En tournage",
      recentNews: "Formation continue en psychologie de l'enfant"
    },
    {
      id: 3,
      firstName: "Sophie",
      lastName: "Bernard",
      photoUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
      email: "sophie.bernard@example.com",
      phone: "+33 6 34 56 78 90",
      bio: "Passionnée par le cinéma jeunesse et forte de 12 ans d'expérience.",
      experienceYears: 12,
      specialties: ["Organisation", "Relations parents-production"],
      availability: "Disponible",
      recentNews: "Vient de terminer un projet avec Canal+"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/members")}
              className="mb-6 text-accent hover:text-blue-vibrant"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux catégories
            </Button>

            <h1 className="text-4xl font-bold text-foreground uppercase tracking-wide mb-8">
              {categoryTitles[category || ""] || "Membres"}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockMembers.map((member) => (
                <Card key={member.id} className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={member.photoUrl} alt={`${member.firstName} ${member.lastName}`} />
                        <AvatarFallback>{member.firstName[0]}{member.lastName[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-amber-300 font-semibold tracking-wide leading-relaxed mb-2">
                          {member.firstName} {member.lastName}
                        </CardTitle>
                        <Badge 
                          variant={member.availability === "Disponible" ? "default" : "secondary"}
                          className="mb-2"
                        >
                          {member.availability}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                          <Calendar className="w-4 h-4" />
                          <span>{member.experienceYears} ans d'expérience</span>
                        </div>
                        
                        {/* Coordonnées mises en avant */}
                        <div className="mt-4 space-y-2 border-t border-accent/30 pt-3">
                          <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-accent" />
                            <a href={`mailto:${member.email}`} className="text-base font-semibold text-accent hover:text-blue-vibrant">
                              {member.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-accent" />
                            <a href={`tel:${member.phone}`} className="text-base font-semibold text-accent hover:text-blue-vibrant">
                              {member.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-200">{member.bio}</p>
                    
                    {(member as any).filmography && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-base text-slate-200">Filmographie</h4>
                        {Object.entries((member as any).filmography).map(([role, films], idx) => (
                          <div key={idx} className="space-y-1">
                            <h5 className="text-sm font-medium text-accent">{role}</h5>
                            <p className="text-sm text-slate-300 leading-relaxed">{films as string}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {member.recentNews && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-slate-200">Actualité</h4>
                        <p className="text-sm text-slate-300 italic">{member.recentNews}</p>
                      </div>
                    )}

                    {(member as any).cvUrl && (
                      <div className="pt-4 border-t border-slate-700">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open((member as any).cvUrl, '_blank')}
                          className="w-full bg-accent/10 hover:bg-accent/20 border-accent/30 text-accent"
                        >
                          Télécharger le CV complet
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MemberCategoryPage;
