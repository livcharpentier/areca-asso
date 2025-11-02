import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative h-[500px] mt-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Association Française des
            <span className="block bg-gradient-to-r from-accent via-coral to-gold bg-clip-text text-transparent mt-2">
              Coordinateurs Jeunesse
            </span>
            <span className="block">Audiovisuel</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Fédérer les professionnels de l'encadrement jeunesse dans le cinéma et l'audiovisuel
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-accent hover:bg-coral text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Devenir membre
            </button>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/30 transition-all hover:scale-105">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
