import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Members from "@/components/Members";
import Resources from "@/components/Resources";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger value="about" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            À propos
          </TabsTrigger>
          <TabsTrigger value="members" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Membres
          </TabsTrigger>
          <TabsTrigger value="resources" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Ressources
          </TabsTrigger>
          <TabsTrigger value="news" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Actualités
          </TabsTrigger>
          <TabsTrigger value="contact" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
            Contact
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-0">
          <About />
        </TabsContent>
        
        <TabsContent value="members" className="mt-0">
          <Members />
        </TabsContent>
        
        <TabsContent value="resources" className="mt-0">
          <Resources />
        </TabsContent>
        
        <TabsContent value="news" className="mt-0">
          <News />
        </TabsContent>
        
        <TabsContent value="contact" className="mt-0">
          <Contact />
        </TabsContent>
      </Tabs>

      <Footer />
    </div>
  );
};

export default Index;
