import { Landmark } from "lucide-react";

const CaisseDepots = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 p-5 rounded-lg border-2 border-emerald-400/40">
      <h4 className="text-lg font-bold text-emerald-200 mb-3 flex items-center gap-2">
        <Landmark className="h-5 w-5" />
        Caisse des Dépôts et Consignations - Mission d'intérêt général
      </h4>
      <div className="space-y-4 text-slate-100">
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">Rôle de la Caisse des Dépôts</p>
          <div className="text-sm space-y-2">
            <p>La Caisse des Dépôts est <strong>garante de la conservation des rémunérations des mineurs</strong> jusqu'à leur majorité (18 ans).</p>
            <p>Les versements se font sur un <strong>compte au nom de l'enfant</strong>. Les représentants légaux ne peuvent en aucun cas le créditer ou le débiter.</p>
            <p className="text-emerald-300">À noter : si l'enfant a plus de 16 ans, sa rémunération lui est directement versée par son employeur.</p>
          </div>
        </div>
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">💰 Répartition de la rémunération</p>
          <div className="text-sm space-y-2">
            <div className="flex items-center gap-3">
              <span className="bg-emerald-500 text-white font-bold px-3 py-1 rounded">90%</span>
              <p>Versés à la Caisse des Dépôts (pécule conservé jusqu'à la majorité)</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-amber-500 text-white font-bold px-3 py-1 rounded">10%</span>
              <p>À disposition des représentants légaux</p>
            </div>
            <p className="text-yellow-300 text-xs mt-2">Pour ESM : la part est fixée par décision de la Commission DREETS</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-emerald-900/40 p-3 rounded border border-emerald-400/40 text-center">
            <p className="text-2xl font-bold text-emerald-300">Gratuit</p>
            <p className="text-xs text-muted-foreground">Aucun frais de dépôt ni gestion</p>
          </div>
          <div className="bg-emerald-900/40 p-3 rounded border border-emerald-400/40 text-center">
            <p className="text-2xl font-bold text-emerald-300">2,76%</p>
            <p className="text-xs text-muted-foreground">Taux de rémunération (nov. 2025)</p>
          </div>
          <div className="bg-emerald-900/40 p-3 rounded border border-emerald-400/40 text-center">
            <p className="text-2xl font-bold text-emerald-300">30 ans</p>
            <p className="text-xs text-muted-foreground">Conservation après majorité</p>
          </div>
        </div>
        <div className="bg-amber-900/30 p-3 rounded border border-amber-400/40">
          <p className="font-semibold text-primary mb-2">📅 Prescription applicable</p>
          <div className="text-sm">
            <p>À la majorité, la Caisse des Dépôts adresse un courrier recommandé précisant les modalités pour récupérer le pécule.</p>
            <p className="mt-1">Sans réclamation : fonds conservés <strong>30 ans</strong> (non rémunérés après majorité), puis acquis à l'État.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 p-5 rounded-lg border-2 border-emerald-400/40">
      <h4 className="text-lg font-bold text-emerald-200 mb-3 flex items-center gap-2">
        🎓 Restitution à la Majorité (18 ans)
      </h4>
      <div className="space-y-4 text-slate-100">
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">Pourquoi les revenus sont-ils bloqués ?</p>
          <div className="text-sm space-y-2">
            <p>Pour <strong>protéger les mineurs</strong> et éviter les abus, la loi encadre strictement les revenus des enfants du spectacle et du mannequinat.</p>
            <p>Les sommes sont <strong>sécurisées jusqu'à 18 ans</strong> sur un compte à la Caisse des Dépôts, garantissant un capital pour l'entrée dans la vie adulte.</p>
            <p className="text-emerald-300">Gestion <strong>totalement gratuite</strong>. Taux de rémunération : <strong>2,76%</strong> depuis le 1er novembre 2025.</p>
          </div>
        </div>
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">📬 Comment récupérer ses revenus à 18 ans ?</p>
          <div className="text-sm space-y-2">
            <p>Dans le mois de vos 18 ans, vous recevrez une <strong>lettre recommandée</strong> avec la procédure à suivre.</p>
            <ol className="ml-4 list-decimal space-y-1 mt-2">
              <li>Cliquez sur <strong>"Faire ma démarche en ligne"</strong> sur le site CDC</li>
              <li>Créez un compte profil <strong>Particulier</strong></li>
              <li>Remplissez la demande en indiquant votre <strong>N° compte CDC</strong></li>
              <li>Joignez les pièces justificatives (voir ci-dessous)</li>
              <li>Suivez l'avancement dans votre espace personnel</li>
            </ol>
          </div>
        </div>
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">📄 Pièces justificatives requises :</p>
          <ul className="text-sm space-y-1 ml-4 list-disc">
            <li><strong>Pièce d'identité</strong> (CNI, passeport ou carte de séjour) - Recto/Verso</li>
            <li><strong>RIB actif</strong> à votre nom et prénom</li>
          </ul>
          <p className="text-yellow-300 text-xs mt-2">⚠️ Majeurs sous tutelle et héritiers : demandes par courrier uniquement.</p>
        </div>
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">💡 Cas particulier : percevoir avant 18 ans</p>
          <div className="text-sm">
            <p>Après 16 ans, la <strong>Commission DDCS/DIRECCTE</strong> peut autoriser le versement direct d'une partie de la rémunération.</p>
            <p className="text-muted-foreground mt-1">La part bloquée reste à la CDC jusqu'à la majorité.</p>
          </div>
        </div>
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-emerald-200 mb-2">📍 Changement de coordonnées</p>
          <div className="text-sm">
            <p>En cas de changement d'adresse, envoyez un mail à :</p>
            <a href="mailto:contacts-consignations@caissedesdepots.fr" className="text-emerald-300 hover:text-emerald-100 underline">
              contacts-consignations@caissedesdepots.fr
            </a>
            <p className="text-muted-foreground mt-1 text-xs">Objet : "Changement adresse postale représentant légal ESM"</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-emerald-900/40 p-3 rounded border border-emerald-400/40">
            <a href="https://consignations.caissedesdepots.fr/particulier/restitution-jeunes-majeurs-enfance-protegee/restitution-remuneration-enfants-spectacle-mannequinat-esm" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-100 underline text-sm">
              Faire ma démarche de restitution ESM →
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-5 rounded-lg border-2 border-slate-400/40">
      <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
        📞 Contact et Références
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-100">
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-foreground mb-2">Service Consignations</p>
          <p className="text-lg font-bold text-emerald-300">01 58 50 89 88</p>
          <p className="text-xs text-muted-foreground">Prix d'un appel local</p>
          <p className="text-sm mt-2">Lundi - Vendredi : 9h-12h / 13h-17h</p>
        </div>
        <div className="bg-black/30 p-3 rounded">
          <p className="font-semibold text-foreground mb-2">Textes de référence</p>
          <ul className="text-xs space-y-1">
            <li>• Articles L7124-1 et suivants du Code du travail</li>
            <li>• Articles R7124-1 et suivants du Code du travail</li>
            <li>• Article R7124-35 du Code du travail</li>
            <li>• Loi n° 2020-1266 du 19/10/2020</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default CaisseDepots;
