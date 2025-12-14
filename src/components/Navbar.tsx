import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">AUTO <span className="text-primary">KINOSTUDIO</span></span>
          </Link>
          
          {/* Desktop Navigation */}
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

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="tel:355693196222" className="hidden sm:block">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" />
                Telefono Tani
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={closeMenu}
                className="text-foreground hover:text-primary transition-colors px-2 py-2"
              >
                Faqja e pare
              </Link>
              <a 
                href="#inventory" 
                onClick={closeMenu}
                className="text-foreground hover:text-primary transition-colors px-2 py-2"
              >
                Inventari
              </a>
              <a 
                href="#contact" 
                onClick={closeMenu}
                className="text-foreground hover:text-primary transition-colors px-2 py-2"
              >
                Info
              </a>
              <a href="tel:355693196222" className="sm:hidden">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Phone className="mr-2 h-4 w-4" />
                  Telefono Tani
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
