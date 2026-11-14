import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 uppercase tracking-wide">
            Contact
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border bg-card hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-primary font-semibold tracking-wide leading-relaxed flex items-center gap-2">
                    <Mail className="w-5 h-5 text-accent" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-4">
                  <a href="mailto:contact@arenca.fr" className="text-accent hover:text-blue-vibrant font-semibold transition-colors">
                    contact@arenca.fr
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-primary font-semibold tracking-wide leading-relaxed flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Adresse
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-4">
                  <p className="text-sm text-foreground font-medium">
                    Siège Social<br />
                    CST<br />
                    9 rue Baudoin<br />
                    75013 Paris<br />
                    France
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-primary font-semibold tracking-wide leading-relaxed">Suivez-nous</CardTitle>
                </CardHeader>
                <CardContent className="mt-4 space-y-2">
                  <a href="https://www.facebook.com/profile.php?id=61596592014224" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-blue-vibrant font-semibold transition-colors">
                    <Facebook className="w-5 h-5" /> Facebook
                  </a>
                  <a href="https://www.linkedin.com/company/arenca-association-des-responsables-enfants-dans-le-cin%C3%A9ma-et-l-audiovisuel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-blue-vibrant font-semibold transition-colors">
                    <Linkedin className="w-5 h-5" /> LinkedIn
                  </a>
                  <a href="https://www.instagram.com/arenca.asso/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-blue-vibrant font-semibold transition-colors">
                    <Instagram className="w-5 h-5" /> Instagram · @arenca.asso
                  </a>
                </CardContent>
              </Card>

              <div className="rounded-lg border-2 border-[#ee7d2b] bg-[#fdf1e7] p-4 text-sm text-foreground">
                <p className="font-bold mb-1">Demande d'adhésion</p>
                <p>
                  Pour toute demande d'adhésion, référez-vous au{" "}
                  <a href="/metier?onglet=reglement" className="text-accent underline font-semibold">règlement intérieur</a>.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 border-border bg-card hover:border-accent/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary font-semibold tracking-wide leading-relaxed">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="mt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block text-foreground">Nom</label>
                      <Input placeholder="Votre nom" className="border-2 focus:border-accent" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block text-foreground">Prénom</label>
                      <Input placeholder="Votre prénom" className="border-2 focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-foreground">Email</label>
                    <Input type="email" placeholder="votre.email@exemple.com" className="border-2 focus:border-blue-sky" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-foreground">Sujet</label>
                    <Input placeholder="Sujet de votre message" className="border-2 focus:border-gold" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-foreground">Message</label>
                    <Textarea 
                      placeholder="Votre message..." 
                      rows={5}
                      className="resize-none border-2 focus:border-accent"
                    />
                  </div>
                  <Button className="bg-accent text-white hover:bg-blue-vibrant shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
