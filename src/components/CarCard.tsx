import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Eye, MessageCircle, Phone } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CarCardProps {
  id: number;
  name: string;
  year: number;
  mileage: string;
  transmission: string;
  images: string[];
  sold?: boolean;
}

const CarImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-64">
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      <img 
        src={src} 
        alt={alt}
        className={`w-full h-64 object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

const CarCard = ({ id, name, year, mileage, transmission, images, sold }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = "355693196222";
  const whatsappMessage = encodeURIComponent(
    `Përshëndetje! Jam i/e interesuar për makinën: ${name} (${year}), Kilometrazhi: ${mileage}, Transmisioni: ${transmission}. Ju lutem më jepni më shumë informacion rreth çmimit.`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  const phoneUrl = `tel:+${phoneNumber}`;

  return (
    <Card className="bg-card border-border overflow-hidden group hover:shadow-[0_20px_60px_-15px_hsl(24_95%_53%_/_0.3)] transition-all duration-500">
      <Link to={`/car/${id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <CarImage src={image} alt={`${name} - Image ${index + 1}`} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" onClick={(e) => e.preventDefault()} />
            <CarouselNext className="right-2" onClick={(e) => e.preventDefault()} />
          </Carousel>
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground z-10">
            {year}
          </Badge>
          {sold && (
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center z-20">
              <Badge className="bg-destructive text-destructive-foreground text-lg px-4 py-2 rotate-[-15deg]">
                SHITUR
              </Badge>
            </div>
          )}
        </div>
      </Link>
      
      <CardContent className="p-6">
        <Link to={`/car/${id}`}>
          <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">{name}</h3>
        </Link>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-muted-foreground text-sm">Kilometrazhi</p>
            <p className="text-foreground font-semibold">{mileage}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Transmisioni</p>
            <p className="text-foreground font-semibold">{transmission}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex flex-col gap-3">
        <Link to={`/car/${id}`} className="w-full">
          <Button variant="outline" className="w-full">
            <Eye className="mr-2 h-4 w-4" />
            Shiko Detajet
          </Button>
        </Link>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <MessageCircle className="mr-2 h-4 w-4" />
              Kontakto për Çmimin
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-background">
            <DialogHeader>
              <DialogTitle className="text-foreground">Kontakto për {name}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Zgjidhni mënyrën e kontaktit për të marrë informacion rreth çmimit.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Detajet e Makinës:</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li><span className="font-medium">Modeli:</span> {name}</li>
                  <li><span className="font-medium">Viti:</span> {year}</li>
                  <li><span className="font-medium">Kilometrazhi:</span> {mileage}</li>
                  <li><span className="font-medium">Transmisioni:</span> {transmission}</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Shkruaj në WhatsApp
                  </Button>
                </a>
                <a href={phoneUrl} className="w-full">
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Telefono: 069 31 96 222
                  </Button>
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
