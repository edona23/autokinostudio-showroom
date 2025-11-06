import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">AUTO <span className="text-primary">KINOSTUDIO</span></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Faqja e pare
            </Link>
            <a href="#inventory" className="text-foreground hover:text-primary transition-colors">
              Inventari
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Info
            </a>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Phone className="mr-2 h-4 w-4" />
            Telefono Tani
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
