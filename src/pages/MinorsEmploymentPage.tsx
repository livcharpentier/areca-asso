import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import RegulationsInfo from "@/components/RegulationsInfo";

const MinorsEmploymentPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Sections réglementation et informations */}
      <RegulationsInfo />
      
      {/* Réglementation des horaires détaillée */}
      <WorkTimeRegulations />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Dossier Obligatoire et autres informations complémentaires */}
            <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-blue-400/60 rounded-lg p-6 backdrop-blur">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">
                Dossier Obligatoire à Constituer
              </h3>
              <div className="space-y-3 text-slate-100">
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30">
                  <p className="font-semibold text-blue-200 mb-2">Documents requis :</p>
                  <ul className="text-sm ml-4 list-disc space-y-1">
                    <li>Autorisation parentale écrite</li>
                    <li>Certificat médical (validité selon âge de l'enfant)</li>
                    <li>Avis pédagogique de l'Éducation Nationale</li>
                    <li>Assurance responsabilité civile</li>
                    <li>Casier judiciaire B3 du Responsable enfants</li>
                    <li>Planning détaillé du tournage</li>
                    <li>Justificatifs de scolarité</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Castings */}
            <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-purple-400/60 rounded-lg p-6 backdrop-blur">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">
                Nouvelle Obligation - Castings
              </h3>
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-400/30">
                <p className="text-slate-100">
                  <strong className="text-purple-200">Présence obligatoire d'un adulte référent</strong> lors de tous les castings avec des mineurs
                </p>
              </div>
            </div>

            {/* Scolarité */}
            <div className="mb-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-green-400/60 rounded-lg p-6 backdrop-blur">
              <h3 className="text-2xl font-bold text-green-300 mb-4">
                Scolarité Obligatoire
              </h3>
              <div className="space-y-3 text-slate-100">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30">
                  <p className="font-semibold text-green-200 mb-2">Obligation :</p>
                  <p className="text-sm">
                    En cas d'absence scolaire pendant le tournage, un <strong>répétiteur agréé par l'Éducation Nationale</strong> doit être présent pour assurer la continuité pédagogique.
                  </p>
                </div>
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30">
                  <p className="font-semibold text-green-200 mb-2">Horaires :</p>
                  <p className="text-sm">
                    Minimum <strong>3 heures d'enseignement par jour</strong> en période scolaire obligatoire
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MinorsEmploymentPage;
