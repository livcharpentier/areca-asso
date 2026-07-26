import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CircleHelp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqItems = [
    {
      question: "Qu'est-ce qu'un responsable mineur sur un tournage ?",
      answer: "Le responsable mineur est un professionnel chargé d'assurer la sécurité, le bien-être et le respect des droits des enfants travaillant sur les plateaux de tournage. Il veille au respect des horaires de travail, des temps de repos et accompagne l'enfant tout au long de la production."
    },
    {
      question: "Quelles sont les conditions pour travailler avec des enfants dans l'audiovisuel ?",
      answer: "L'emploi d'enfants dans le spectacle et l'audiovisuel nécessite une autorisation individuelle délivrée par la commission des enfants du spectacle de la DRIEETS. Les horaires de travail sont strictement encadrés selon l'âge de l'enfant."
    },
    {
      question: "Comment devenir membre de l'ARECA ?",
      answer: "Pour devenir membre de l'ARECA, vous devez exercer le métier de responsable enfants ou être en formation pour ce métier. Rendez-vous sur notre page Contact pour nous envoyer votre candidature."
    },
    {
      question: "Quels sont les horaires de travail autorisés pour les enfants ?",
      answer: "Les horaires varient selon l'âge : les enfants de moins de 3 ans ne peuvent travailler que 1h par jour, de 3 à 6 ans 2h, de 6 à 11 ans 3h, de 11 à 14 ans 4h, et de 14 à 16 ans 6h. Le travail de nuit est interdit."
    },
    {
      question: "Qu'est-ce que la commission des enfants du spectacle ?",
      answer: "La commission des enfants du spectacle est une instance qui délivre les autorisations individuelles de travail pour les mineurs dans le spectacle. Elle vérifie que les conditions d'emploi respectent la législation et le bien-être de l'enfant."
    },
    {
      question: "Quel est le rôle de l'ARECA ?",
      answer: "L'ARECA (Association des Responsables Enfants dans le Cinéma et l'Audiovisuel) a pour mission de fédérer les professionnels du secteur, de promouvoir les bonnes pratiques et de défendre les intérêts de la profession."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-40 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <CircleHelp className="h-10 w-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bangers text-primary tracking-wide">
                Questions Fréquentes
              </h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Retrouvez les réponses aux questions les plus courantes sur le métier de responsable enfants et l'association ARECA.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
