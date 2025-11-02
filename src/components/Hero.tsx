import heroCameras from "@/assets/hero-cameras.jpg";

const Hero = () => {
  return (
    <section className="relative h-[500px] mt-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroCameras})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bangers text-white mb-4 md:mb-6 leading-tight tracking-wider">
            Association Française des
            <span className="block bg-gradient-to-r from-accent via-blue-sky to-gold bg-clip-text text-transparent mt-1 md:mt-2 text-4xl md:text-6xl lg:text-8xl">
              Coordinateurs Jeunesse
            </span>
            <span className="block text-3xl md:text-5xl lg:text-7xl">Audiovisuel</span>
          </h1>
          <p className="text-base md:text-xl text-white/90 leading-relaxed mb-6 md:mb-8">
            Fédérer les professionnels de l'encadrement jeunesse dans le cinéma et l'audiovisuel
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <button className="px-6 md:px-8 py-2.5 md:py-3 bg-accent hover:bg-blue-vibrant text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base">
              Devenir membre
            </button>
            <button className="px-6 md:px-8 py-2.5 md:py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/30 transition-all hover:scale-105 text-sm md:text-base">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
