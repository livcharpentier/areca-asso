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
      email: "liv.charpentier@example.com",
      phone: "+33 6 12 34 56 78",
      bio: "Coordinatrice jeunesse avec 15 ans d'expérience dans l'industrie cinématographique.",
      experienceYears: 15,
      specialties: ["Coordination plateau", "Gestion administrative"],
      availability: "Disponible",
      recentNews: "Actuellement sur le tournage du film 'La Grande Aventure'"
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
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-200">{member.bio}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-base text-slate-200">C.V</h4>
                      <ul className="space-y-1 text-sm text-slate-300">
                        {member.specialties.map((specialty, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent mt-0.5">•</span>
                            <span>{specialty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {member.recentNews && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-slate-200">Actualité</h4>
                        <p className="text-sm text-slate-300 italic">{member.recentNews}</p>
                      </div>
                    )}

                    <div className="pt-4 border-t border-slate-700 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${member.email}`} className="hover:text-accent">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Phone className="w-4 h-4" />
                        <a href={`tel:${member.phone}`} className="hover:text-accent">
                          {member.phone}
                        </a>
                      </div>
                    </div>
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
