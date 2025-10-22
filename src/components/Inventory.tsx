import CarCard from "./CarCard";
import peugeot107 from "@/assets/peugeot-107-front.jpg";
import car2 from "@/assets/car-2-front.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";

const cars = [
  {
    id: 1,
    name: "Peugeot 107",
    year: 2010,
    price: "€3,500",
    mileage: "120,000 km",
    transmission: "Manual",
    image: peugeot107,
  },
  {
    id: 2,
    name: "Mercedes-Benz C-Class",
    year: 2015,
    price: "€12,500",
    mileage: "135,000 km",
    transmission: "Automatic",
    image: car2,
  },
  {
    id: 3,
    name: "Mercedes S-Class",
    year: 2023,
    price: "$115,000",
    mileage: "3,800 mi",
    transmission: "Automatic",
    image: car3,
  },
  {
    id: 4,
    name: "Porsche 911 Turbo S",
    year: 2024,
    price: "$225,000",
    mileage: "1,800 mi",
    transmission: "PDK",
    image: car4,
  },
];

const Inventory = () => {
  return (
    <section id="inventory" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Inventory
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of premium vehicles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;
