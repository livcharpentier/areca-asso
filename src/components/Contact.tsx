import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 uppercase tracking-wide">
            Contact
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader className="bg-coral-light">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Mail className="w-5 h-5 text-accent" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-4">
                  <a href="mailto:contact@afcja.fr" className="text-accent hover:text-coral font-semibold transition-colors">
                    contact@afcja.fr
                  </a>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader className="bg-green-light">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Adresse
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-4">
                  <p className="text-sm text-muted-foreground font-medium">
                    Siège Social<br />
                    75000 Paris<br />
                    France
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 border-t-4 border-t-blue-sky hover:shadow-xl transition-all">
              <CardHeader className="bg-blue-light">
                <CardTitle className="text-blue-sky">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="mt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Nom</label>
                      <Input placeholder="Votre nom" className="border-2 focus:border-accent" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Prénom</label>
                      <Input placeholder="Votre prénom" className="border-2 focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email</label>
                    <Input type="email" placeholder="votre.email@exemple.com" className="border-2 focus:border-blue-sky" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Sujet</label>
                    <Input placeholder="Sujet de votre message" className="border-2 focus:border-gold" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message</label>
                    <Textarea 
                      placeholder="Votre message..." 
                      rows={5}
                      className="resize-none border-2 focus:border-accent"
                    />
                  </div>
                  <Button className="bg-accent text-white hover:bg-coral shadow-lg hover:shadow-xl transition-all hover:scale-105">
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
