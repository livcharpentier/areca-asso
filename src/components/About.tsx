import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="association" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 uppercase tracking-wide">
            L'Association
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-accent">Présentation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  L'AFCJA rassemble les professionnels de l'encadrement jeunesse dans le cinéma et l'audiovisuel. 
                  Notre objectif est de garantir les meilleures conditions de travail pour les enfants et les professionnels qui les accompagnent.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Nos Missions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1 font-bold">•</span>
                    <span>Valoriser le métier de coordinateur jeunesse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">•</span>
                    <span>Fédérer les professionnels du secteur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-sky mt-1 font-bold">•</span>
                    <span>Défendre les droits et la réglementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1 font-bold">•</span>
                    <span>Partager les bonnes pratiques</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center bg-coral-light border-2 border-accent hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent mb-2">270+</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Membres actifs</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-green-light border-2 border-primary hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Productions suivies</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-blue-light border-2 border-blue-sky hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-sky mb-2">15+</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Années d'expérience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
