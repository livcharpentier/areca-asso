import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, Calendar, Download } from "lucide-react";
import jsPDF from "jspdf";

const memberData: { [key: string]: any } = {
  "liv-charpentier": {
    firstName: "Liv",
    lastName: "Charpentier",
    photo: "/liv-charpentier.png",
    email: "liv.charp@wanadoo.fr",
    phone: "06 19 60 12 96",
    role: "Responsable enfants",
    bio: "Responsable des enfants sur tournage, 3ème Assistante mise en scène, Assistante régisseuse. Spécialisée dans l'encadrement et l'animation depuis 1996.",
    experienceYears: 28,
    availability: "Disponible",
    recentNews: "Atelier bricolage dans les écoles maternelle et primaire (2018-2025)",
    actualite: "En tournage — Les Enfants de la Résistance 2 (2025-2026)",
    cvUrl: "/CV_LIV_CHARPENTIER.pdf",
    filmography: {
      "Responsable des enfants": "Radin (2016), Le petit Spirou (2017), Rémi sans famille (2018), Parents d'élèves (2020), Le trésor du Petit Nicolas (2021), Abandon (2026), Histoire parallèle (2025), Les enfants de la résistance (2025), Karma (2026)",
      "Assistante Casting Rôles (Adultes/Enfants)": "Les vacances de Ducobu (2011), La guerre des boutons (2011), Sans laisser de traces (2010), Jamais contente (2017), La guerre des Lulus (2023), Le 3ème jour (2010)",
      "Casting Petits Rôles & Figurations": "L'ex-femme de ma vie (2004), Podium (2004), Aurore (2005), Marie Besnard (2006), Le grand Charles (2006), Comme mon père (2007), Famille (2007), Molière (2007), De l'autre côté du lit (2008), Elles et moi (2008), Transporter 3 (2008), Le petit Nicolas (2009), La reine et le cardinal (2009), Mes amis mes amours mes emmerdes (2009), Gainsbourg (2010), Les vacances du Petit Nicolas (2010), Les virtuoses episode 1 à 6 (2010), Pièce Montée (2010), Intouchables (2011), Les vacances de Ducobu (2011), L'élève Ducobu (2011), Omar m'a tuer (2011), Quelques heures de printemps (2012), Cloclo (2012), Star 80 (2012), Une famille formidable (2012), 20 ans d'écart (2013), La dernière campagne (2013), La grande boucle (2013), Les bracelets rouges (3 saisons, 2014-2018), On voulait tout casser (2015), Chocolat (2016), Stavisky l'escroc du siècle (2016), Love Locks (2017), Mon poussin (2017), Deux gouttes d'eau (2018), Vise le coeur (2022), La guerre des Lulus (2023), Plusieurs publicités : Nike, Vuitton, KFC, Vittel… (2012-2026)",
      "Casting Clips": "Plusieurs clips musicaux : Renan Luce, Raphael…",
      "Assistante Mise en Scène": "Pour elle (2008), La Voix des Steppes",
      "Coach Enfants": "Des nouvelles de la planète Mars (2016)",
      "Assistante Régisseuse": "Arthur et les Minimoys (2006), À l'intérieur (2007), Transporter 3 (2008), Arthur 3 (2010), Valerian (2017), Pub Afflelou, Pub KFC, Dracula (2025)"
    },
    animation: {
      "Animations entre 1996 et 2010": "Centre de loisirs, colonie de vacances, camp itinérant, encadrement voile, encadrement ski, surveillance mer, professeur spécialisé voile (ado, adulte).",
      "Professeur EPS (remplaçant) entre 1998 et 2005": "École maternelle, primaire, collège, lycée, et le centre sportif de la Ville de Paris le mercredi.",
      "Diplômes": "BAFA (1997). A2C (1996) / Monitorat fédéral de voile (aux Glenans, 2000) / Monitorat fédéral de voile (2003) / B1D1 Voile (2003). Maîtrise STAPS (2006). AFPS / A.F.S.P.A.M (brevet de secouriste avec matériel). B.N.S.S.A (brevet national de secouriste et sauvetage aquatique).",
      "Permis": "Voiture B. Bateau : Côtier / Rivière / Fleuve / Lac."
    }
  },
  "thomas-martin": {
    firstName: "Christophe", lastName: "Denis",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=ChrisYoung&backgroundColor=b6e3f4,c0aede,d1d4f9&hair=short01,short02,short03,short04,short05&hairColor=2c1b18,a55728,724133&skinColor=f8d25c,fd9841,edb98a&facialHair=blank",
    email: "christophe.denis@example.com", phone: "+33 6 23 45 67 89",
    role: "Responsable enfants",
    bio: "Spécialisé dans l'accompagnement des jeunes acteurs sur les tournages de longue durée.",
    experienceYears: 10, availability: "En tournage",
    recentNews: "Formation continue en psychologie de l'enfant"
  }
};

const MemberProfilePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const member = memberData[slug || ""];

  const generatePDF = () => {
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageW = 210;
    const margin = 18;
    const contentW = pageW - margin * 2;
    let y = 20;

    // Couleurs site
    const bleu = [59, 130, 246] as [number, number, number];
    const noir = [15, 23, 42] as [number, number, number];
    const gris = [100, 116, 139] as [number, number, number];
    const beige = [245, 240, 232] as [number, number, number];

    // Fond beige header
    doc.setFillColor(...beige);
    doc.rect(0, 0, pageW, 50, "F");

    // Nom
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(...noir);
    doc.text(`${member.firstName} ${member.lastName}`.toUpperCase(), margin, y + 8);

    // Role
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(...bleu);
    doc.text(member.role || "", margin, y + 16);

    // Contact
    doc.setFontSize(9);
    doc.setTextColor(...gris);
    let contactLine = "";
    if (member.phone) contactLine += member.phone + "  ";
    if (member.email) contactLine += member.email;
    doc.text(contactLine, margin, y + 23);

    y = 58;

    // Bio
    if (member.bio) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      doc.setTextColor(...gris);
      const bioLines = doc.splitTextToSize(member.bio, contentW);
      doc.text(bioLines, margin, y);
      y += bioLines.length * 5 + 6;
    }

    // Ligne séparatrice
    doc.setDrawColor(...bleu);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageW - margin, y);
    y += 8;

    const addSection = (title: string, text: string) => {
      if (y > 265) { doc.addPage(); y = 20; }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...bleu);
      doc.text(title.toUpperCase(), margin, y);
      y += 5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...noir);
      const lines = doc.splitTextToSize(text, contentW);
      lines.forEach((line: string) => {
        if (y > 275) { doc.addPage(); y = 20; }
        doc.text(line, margin, y);
        y += 4.5;
      });
      y += 4;
    };

    // Filmographie
    if (member.filmography) {
      Object.entries(member.filmography).forEach(([role, films]) => {
        addSection(role, films as string);
      });
    }

    // Animation
    if (member.animation) {
      Object.entries(member.animation).forEach(([period, text]) => {
        addSection(period, text as string);
      });
    }

    // CV Sections (diplomes)
    if (member.cvSections) {
      Object.entries(member.cvSections).forEach(([section, text]) => {
        addSection(section, text as string);
      });
    }

    // Footer
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(...gris);
    doc.text("ARECA — Association des Responsables Enfants Cinema et Audiovisuel", margin, 290);

    doc.save(`CV_${member.lastName}_${member.firstName}.pdf`);
  };

  if (!member) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Membre introuvable</h1>
          <Button onClick={() => navigate("/members")}>Retour aux membres</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/members")}
              className="mb-6 text-accent hover:text-accent/80"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux membres
            </Button>

            {/* En-tête profil */}
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              <Avatar className="w-28 h-36 !rounded-lg overflow-hidden ring-4 ring-accent/30">
                <AvatarImage src={member.photo} alt={`${member.firstName} ${member.lastName}`} className="!aspect-[3/4] object-cover" />
                <AvatarFallback className="!rounded-lg bg-accent/20 text-accent text-2xl font-bold h-full w-full">
                  {member.firstName[0]}{member.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-1">
                  {member.firstName} {member.lastName}
                </h1>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                {member.actualite && (
                  <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-3 py-1 mb-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse inline-block"></span>
                    <span className="text-sm font-semibold text-orange-700">{member.actualite}</span>
                  </div>
                )}
                {member.availability && (
                  <Badge variant={member.availability === "Disponible" ? "default" : "secondary"} className="mb-3">
                    {member.availability}
                  </Badge>
                )}
                {member.experienceYears && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{member.experienceYears} ans d'expérience</span>
                  </div>
                )}
              </div>
            </div>

            {/* Coordonnées */}
            <div className="flex flex-wrap gap-4 mb-8 p-4 rounded-lg border border-accent/20 bg-accent/5">
              {member.email && (
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-accent hover:text-accent/80">
                  <Mail className="w-4 h-4" /> {member.email}
                </a>
              )}
              {member.phone && (
                <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-accent hover:text-accent/80">
                  <Phone className="w-4 h-4" /> {member.phone}
                </a>
              )}
            </div>

            {/* Filmographie */}
            {member.filmography && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Filmographie</h2>
                <div className="space-y-4">
                  {Object.entries(member.filmography).map(([role, films], idx) => (
                    <div key={idx} className="border-l-2 border-accent/30 pl-4">
                      <h3 className="font-medium text-accent mb-1">{role}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{films as string}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Animation */}
            {member.animation && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Animation</h2>
                <div className="space-y-4">
                  {Object.entries(member.animation).map(([period, content], idx) => (
                    <div key={idx} className="border-l-2 border-accent/30 pl-4">
                      <h3 className="font-medium text-accent mb-1">{period}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{content as string}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CV / Diplômes */}
            {member.cvSections && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">CV</h2>
                <div className="space-y-4">
                  {Object.entries(member.cvSections).map(([section, content], idx) => (
                    <div key={idx} className="border-l-2 border-accent/30 pl-4">
                      <h3 className="font-medium text-accent mb-1">{section}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{content as string}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actualité */}
            {member.actualite && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block w-3 h-3 rounded-full bg-orange-500 animate-pulse"></span>
                  <h2 className="text-xl font-semibold" style={{color: "#ea580c"}}>Actualité</h2>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg px-5 py-4">
                  <p className="text-orange-800 font-medium leading-relaxed">{member.actualite}</p>
                </div>
              </div>
            )}
            {member.recentNews && !member.actualite && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-3">Actualité</h2>
                <p className="text-muted-foreground italic">{member.recentNews}</p>
              </div>
            )}

            {/* CV PDF (téléchargement) */}
            {member.cvUrl && (
              <Button
                size="lg"
                onClick={generatePDF}
                className="gap-2"
              >
                <Download className="h-5 w-5" />
                Télécharger le CV complet (PDF)
              </Button>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MemberProfilePage;