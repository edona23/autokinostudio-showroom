import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative flex items-start justify-center overflow-hidden min-h-[40vh] sm:min-h-[60vh]">
      <div className="hidden sm:block w-full h-full min-h-[60vh]">
        <img 
          src={heroImage} 
          alt="Auto Kinostudio Hero" 
          className="w-full h-full object-contain min-h-[60vh] object-top" 
        />
      </div>
      
      <div className="absolute inset-0 flex items-end justify-center pb-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8" asChild>
            <a href="#inventory">
              Shiko Makinat
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10 text-lg px-8">
            <MapPin className="mr-2 h-5 w-5" />
            Vizito Showroom-in Tonë
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
