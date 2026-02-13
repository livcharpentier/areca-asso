import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Members = () => {
  const navigate = useNavigate();
  
  const membresExemples = [
    { name: "Liv Charpentier", slug: "liv-charpentier", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liv", role: "Responsable enfants", bio: "Spécialisée dans l'encadrement des enfants sur tournage depuis 1996. Casting et coordination." },
    { name: "Thomas Martin", slug: "thomas-martin", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas", role: "Responsable enfants", bio: "Accompagnement des jeunes acteurs sur les tournages de longue durée." },
    { name: "Sophie Bernard", slug: "sophie-bernard", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie", role: "Responsable enfants", bio: "12 ans d'expérience dans le cinéma jeunesse et les relations parents-production." },
    { name: "Claire Dupont", slug: "claire-dupont", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Claire", role: "Préceptrice", bio: "Enseignante détachée, suivi scolaire sur les tournages longs métrages." },
    { name: "Marc Lefèvre", slug: "marc-lefevre", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marc", role: "Précepteur", bio: "Professeur des écoles, spécialiste du maintien pédagogique en milieu audiovisuel." },
    { name: "Julie Moreau", slug: "julie-moreau", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julie", role: "Animatrice", bio: "Animation et encadrement jeunesse sur plateaux de cinéma et séries TV." },
    { name: "Pierre Roux", slug: "pierre-roux", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre", role: "Animateur", bio: "Animateur BAFA avec expérience en productions audiovisuelles jeunesse." },
    { name: "Emma Laurent", slug: "emma-laurent", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma", role: "Cantinière", bio: "Restauration adaptée aux enfants sur les tournages, respect des normes alimentaires." },
    { name: "Lucas Petit", slug: "lucas-petit", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas", role: "Responsable enfants", bio: "Coordinateur terrain, gestion des plannings enfants et lien avec les familles." },
    { name: "Camille Simon", slug: "camille-simon", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Camille", role: "Préceptrice", bio: "Suivi scolaire personnalisé et accompagnement éducatif sur tournages." },
  ];

  const categories = [
    { title: "Responsables des enfants", count: 10, description: "Coordinateurs et chefs de production jeunesse", slug: "responsables-enfants" },
    { title: "Précepteurs", count: 9, description: "Suivi pédagogique et scolaire", slug: "precepteurs" },
    { title: "Animateurs", count: 9, description: "Encadrants jeunesse", slug: "animateurs" },
    { title: "Cantiniers", count: 9, description: "Restauration sur tournages", slug: "cantiniers" },
    { title: "Autres membres", count: 9, description: "Membres associés et honoraires", slug: "autres" },
  ];

  return (
    <section id="membres" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
              Membres
            </h2>
            <Button className="bg-accent text-white hover:bg-blue-vibrant shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Search className="w-4 h-4 mr-2" />
              Rechercher un membre
            </Button>
          </div>

          {/* Trombinoscope */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 uppercase tracking-wide">Trombinoscope</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {membresExemples.map((membre, index) => (
                <div key={index} className="flex flex-col items-center text-center group cursor-pointer" onClick={() => navigate(`/member/${membre.slug}`)}>
                  <Avatar className="w-20 h-20 mb-3 ring-2 ring-accent/30 group-hover:ring-accent transition-all duration-300">
                    <AvatarImage src={membre.photo} alt={membre.name} />
                    <AvatarFallback className="bg-accent/20 text-accent text-lg font-bold">
                      {membre.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-semibold text-foreground">{membre.name}</span>
                  <span className="text-xs text-accent mb-2">{membre.role}</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">{membre.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Catégories */}
          <h3 className="text-xl font-semibold text-foreground mb-6 uppercase tracking-wide">Par catégorie</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => {
              const colors = [
                { bg: 'bg-blue-vibrantLight', text: 'text-accent', icon: 'text-accent' },
                { bg: 'bg-green-light', text: 'text-primary', icon: 'text-primary' },
                { bg: 'bg-blue-light', text: 'text-blue-sky', icon: 'text-blue-sky' },
                { bg: 'bg-gold-light', text: 'text-gold', icon: 'text-gold' },
                { bg: 'bg-blue-vibrantLight', text: 'text-accent', icon: 'text-accent' },
                { bg: 'bg-green-light', text: 'text-primary', icon: 'text-primary' }
              ];
              const color = colors[index];
              
              return (
                <Card 
                  key={index} 
                  className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  onClick={() => navigate(`/members/${category.slug}`)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-amber-300 font-semibold tracking-wide leading-relaxed flex items-center justify-between">
                      <span>{category.title}</span>
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-accent" />
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-accent mb-2">{category.count}</div>
                        <p className="text-sm text-slate-200">{category.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
