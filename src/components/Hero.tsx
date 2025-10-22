import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Discover Your Dream Car
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Premium vehicles, exceptional service, and unbeatable deals at Auto Kinostudio
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
            View Inventory
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10 text-lg px-8">
            <MapPin className="mr-2 h-5 w-5" />
            Visit Our Dealership
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
