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
            <Card className="border-border bg-card hover:border-accent/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl text-primary font-semibold tracking-wide leading-relaxed mb-3">Présentation</h3>
                <p className="text-foreground leading-relaxed text-sm">
                  L'ARECA (Association des Responsables Enfants dans le Cinéma et l'Audiovisuel) regroupe les professionnels chargés de l'encadrement, de la protection et de la coordination des mineurs de moins de 16 ans sur les tournages. Elle œuvre pour la reconnaissance du métier, la défense des intérêts de la profession et la diffusion des bonnes pratiques auprès des productions, des institutions et des organisations professionnelles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-accent/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl text-primary font-semibold tracking-wide leading-relaxed mb-3">Nos missions</h3>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1 font-bold">•</span>
                    <span>Promouvoir et défendre la profession de responsable enfant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1 font-bold">•</span>
                    <span>Être l'interlocuteur des pouvoirs publics et des organisations professionnelles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1 font-bold">•</span>
                    <span>Clarifier la distinction entre responsable enfant et coach enfant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1 font-bold">•</span>
                    <span>Contribuer à la certification métier prévue en 2027</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
