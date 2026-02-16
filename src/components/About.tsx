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
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl text-amber-300 font-semibold tracking-wide leading-relaxed mb-3">Présentation</h3>
                <p className="text-slate-200 leading-relaxed text-sm">
                  L'ARECA (Association des Responsables Enfants dans le Cinéma et l'Audiovisuel) regroupe les professionnels chargés de l'encadrement, de la protection et de la coordination des mineurs de moins de 16 ans sur les tournages. Elle œuvre pour la reconnaissance du métier, la défense des intérêts de la profession et la diffusion des bonnes pratiques auprès des productions, des institutions et des organisations professionnelles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl text-amber-300 font-semibold tracking-wide leading-relaxed mb-3">Nos missions</h3>
                <ul className="space-y-2 text-slate-200 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1 font-bold">•</span>
                    <span>Promouvoir et défendre la profession de responsable enfant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1 font-bold">•</span>
                    <span>Assurer la formation continue et le perfectionnement professionnel</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent mb-2">270+</div>
                <div className="text-sm uppercase tracking-wider text-slate-300">Membres actifs</div>
              </CardContent>
            </Card>
            <Card className="text-center border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm uppercase tracking-wider text-slate-300">Productions suivies</div>
              </CardContent>
            </Card>
            <Card className="text-center border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm uppercase tracking-wider text-slate-300">Années d'expérience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;