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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bangers text-white mb-4 leading-tight tracking-wider drop-shadow-2xl">
            Association des
            <span className="block text-gold mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,0,0.5)' }}>
              Responsables Enfants
            </span>
            <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl">dans le Cinéma et l'Audiovisuel</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed drop-shadow-lg font-medium">
            Fédérer les professionnels de l'encadrement des mineurs dans le cinéma et l'audiovisuel
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
