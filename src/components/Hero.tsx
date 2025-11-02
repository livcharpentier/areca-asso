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
        <div className="flex flex-col justify-end h-full max-w-2xl pb-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bangers text-white mb-3 leading-tight tracking-wider">
            Association Française des
            <span className="block bg-gradient-to-r from-accent via-blue-sky to-gold bg-clip-text text-transparent mt-2 text-3xl md:text-5xl lg:text-6xl">
              Coordinateurs Jeunesse
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl">Audiovisuel</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed mb-4">
            Fédérer les professionnels de l'encadrement jeunesse dans le cinéma et l'audiovisuel
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="px-4 md:px-5 py-1.5 md:py-2 bg-accent hover:bg-blue-vibrant text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-xs">
              Devenir membre
            </button>
            <button className="px-4 md:px-5 py-1.5 md:py-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/30 transition-all hover:scale-105 text-xs">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
