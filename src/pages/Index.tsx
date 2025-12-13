import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Inventory from "@/components/Inventory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Inventory />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
