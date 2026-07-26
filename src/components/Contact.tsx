import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pt-40 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 uppercase tracking-wide">
            Contact
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-300 font-semibold tracking-wide leading-relaxed flex items-center gap-2">
                    <Mail className="w-5 h-5 text-accent" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-4">
                  <a href="mailto:contact@areca-asso.fr" className="text-accent hover:text-blue-vibrant font-semibold transition-colors">
                    contact@areca-asso.fr
                  </a>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-300 font-semibold tracking-wide leading-relaxed flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Adresse
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-4">
                  <p className="text-sm text-slate-200 font-medium">
                    Siège Social<br />
                    CST<br />
                    9 rue Baudoin<br />
                    75013 Paris<br />
                    France
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 border-accent/20 bg-gradient-to-br from-blue-950/80 to-slate-900/80 backdrop-blur hover:border-accent/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-amber-300 font-semibold tracking-wide leading-relaxed">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="mt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block text-slate-200">Nom</label>
                      <Input placeholder="Votre nom" className="border-2 focus:border-accent" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block text-slate-200">Prénom</label>
                      <Input placeholder="Votre prénom" className="border-2 focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-slate-200">Email</label>
                    <Input type="email" placeholder="votre.email@exemple.com" className="border-2 focus:border-blue-sky" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-slate-200">Sujet</label>
                    <Input placeholder="Sujet de votre message" className="border-2 focus:border-gold" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-slate-200">Message</label>
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
