const DerniereMiseAJour = () => {
  const date = new Date(__DATE_MISE_A_JOUR__).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  });
  return (
    <section className="px-4 pb-10 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-xl border border-[#16213f]/20 bg-white/70 px-5 py-4 text-center">
          <p className="text-sm text-muted-foreground">Dernière mise à jour du site</p>
          <p className="text-lg font-semibold text-[#16213f]">{date}</p>
        </div>
      </div>
    </section>
  );
};

export default DerniereMiseAJour;
