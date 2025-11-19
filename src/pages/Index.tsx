import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ChildSupervisorRole from "@/components/ChildSupervisorRole";
import WorkTimeRegulations from "@/components/WorkTimeRegulations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ChildSupervisorRole />
      <WorkTimeRegulations />
      <Footer />
    </div>
  );
};

export default Index;
