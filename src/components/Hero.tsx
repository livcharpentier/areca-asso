import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Users, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent mb-8">
            <Film className="w-4 h-4" />
            <span className="text-sm font-medium">Association Professionnelle</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Association Française des
            <span className="block text-accent mt-2">Coordinateurs Jeunesse</span>
            <span className="block mt-2">Audiovisuel</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Fédérer les professionnels, valoriser le métier, partager les bonnes pratiques
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6 group"
            >
              Devenir membre
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
            >
              Découvrir l'AFCJA
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-primary-foreground/5 border border-accent/20 backdrop-blur-sm">
              <Users className="w-10 h-10 text-accent mb-3 mx-auto" />
              <div className="text-3xl font-bold text-primary-foreground mb-1">200+</div>
              <div className="text-primary-foreground/70">Membres actifs</div>
            </div>
            <div className="p-6 rounded-xl bg-primary-foreground/5 border border-accent/20 backdrop-blur-sm">
              <Film className="w-10 h-10 text-accent mb-3 mx-auto" />
              <div className="text-3xl font-bold text-primary-foreground mb-1">500+</div>
              <div className="text-primary-foreground/70">Productions suivies</div>
            </div>
            <div className="p-6 rounded-xl bg-primary-foreground/5 border border-accent/20 backdrop-blur-sm">
              <BookOpen className="w-10 h-10 text-accent mb-3 mx-auto" />
              <div className="text-3xl font-bold text-primary-foreground mb-1">15+</div>
              <div className="text-primary-foreground/70">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
