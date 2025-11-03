import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Members from "@/components/Members";
import Resources from "@/components/Resources";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <Hero />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
