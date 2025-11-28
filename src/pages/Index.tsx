import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ChildSupervisorRole from "@/components/ChildSupervisorRole";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ChildSupervisorRole />
      <Footer />
    </div>
  );
};

export default Index;
