import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

const Resources = () => {
  const conventions = [
    { title: "Convention Collective Cinéma (CCNPC)", items: ["Grille des salaires", "Texte intégral", "Fiches pratiques"] },
    { title: "Convention Collective Audiovisuel (CCNPAV)", items: ["Grille des salaires", "Texte intégral", "Dispositions"] },
    { title: "Stages et conventions", items: ["Conventions de stage", "Rémunération", "Modèles"] },
    { title: "Tournages internationaux", items: ["Réglementations", "Équivalences", "Contacts utiles"] },
  ];

  const tools = [
    "Fiches de renseignements enfants",
    "Planning type journée tournage",
    "Suivi scolaire tournage",
    "Calendrier scolaire & examens",
    "Calendrier des vacances",
  ];

  return (
    <section id="conventions" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 uppercase tracking-wide">
            Conventions / Salaires
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {conventions.map((convention, index) => {
              const colors = [
                { border: 'border-t-accent', icon: 'text-accent', bg: 'bg-blue-vibrantLight' },
                { border: 'border-t-primary', icon: 'text-primary', bg: 'bg-green-light' },
                { border: 'border-t-blue-sky', icon: 'text-blue-sky', bg: 'bg-blue-light' },
                { border: 'border-t-gold', icon: 'text-gold', bg: 'bg-gold-light' }
              ];
              const color = colors[index % 4];
              
              return (
                <Card key={index} className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl text-amber-300 font-semibold tracking-wide leading-relaxed flex items-start gap-3">
                      <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{convention.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4">
                    <ul className="space-y-2">
                      {convention.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-slate-200 flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                          <Download className="w-3 h-3 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div id="outils">
            <h2 className="text-3xl font-bold text-foreground mb-8 uppercase tracking-wide">
              Boîte à Outils
            </h2>
            <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded bg-accent/10 hover:bg-accent/20 transition-all hover:scale-105 cursor-pointer group">
                      <FileText className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-200">{tool}</span>
                      <Download className="w-4 h-4 ml-auto text-accent group-hover:scale-125 transition-transform" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
