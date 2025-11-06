import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Automjete premium, shërbim i jashtëzakonshëm dhe oferta të papërsëritshme në Auto Kinostudio
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8" asChild>
            <a href="#inventory">
              Shiko Inventarin
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10 text-lg px-8">
            <MapPin className="mr-2 h-5 w-5" />
            Vizito Koncesionin Tonë
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
