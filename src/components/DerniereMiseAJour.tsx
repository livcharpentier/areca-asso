// Date de la dernière mise en ligne du site (mise à jour automatiquement à chaque publication)
const DerniereMiseAJour = ({ className = "" }: { className?: string }) => {
  const date = new Date(__DATE_MISE_A_JOUR__).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  });
  return (
    <p className={className}>
      Dernière mise à jour du site : <span className="font-semibold">{date}</span>
    </p>
  );
};

export default DerniereMiseAJour;
