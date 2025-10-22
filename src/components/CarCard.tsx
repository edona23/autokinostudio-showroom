import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

interface CarCardProps {
  id: number;
  name: string;
  year: number;
  price: string;
  mileage: string;
  transmission: string;
  image: string;
}

const CarCard = ({ name, year, price, mileage, transmission, image }: CarCardProps) => {
  return (
    <Card className="bg-card border-border overflow-hidden group hover:shadow-[0_20px_60px_-15px_hsl(24_95%_53%_/_0.3)] transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          {year}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-4">{name}</h3>
        
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
        
        <div className="border-t border-border pt-4">
          <p className="text-3xl font-bold text-primary">{price}</p>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Eye className="mr-2 h-4 w-4" />
          Shiko Detajet
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
