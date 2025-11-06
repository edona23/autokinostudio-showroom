import CarCard from "./CarCard";
import peugeot107 from "@/assets/peugeot-107-front.jpg";
import car2 from "@/assets/car-2-front.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import newCar from "@/assets/new-car-1.jpg";

const cars = [
  {
    id: 1,
    name: "Peugeot 107",
    year: 2010,
    price: "€3,500",
    mileage: "120,000 km",
    transmission: "Manuale",
    image: peugeot107,
  },
  {
    id: 2,
    name: "Mercedes-Benz C-Class",
    year: 2015,
    price: "€12,500",
    mileage: "135,000 km",
    transmission: "Automatike",
    image: car2,
  },
  {
    id: 3,
    name: "Mercedes S-Class",
    year: 2023,
    price: "€115,000",
    mileage: "6,000 km",
    transmission: "Automatike",
    image: car3,
  },
  {
    id: 4,
    name: "Porsche 911 Turbo S",
    year: 2024,
    price: "€225,000",
    mileage: "3,000 km",
    transmission: "PDK",
    image: car4,
  },
  {
    id: 5,
    name: "BMW X5",
    year: 2020,
    price: "€45,000",
    mileage: "65,000 km",
    transmission: "Automatike",
    image: car2,
  },
  {
    id: 6,
    name: "Audi A4",
    year: 2019,
    price: "€28,000",
    mileage: "85,000 km",
    transmission: "Automatike",
    image: car3,
  },
  {
    id: 7,
    name: "Volkswagen Golf",
    year: 2018,
    price: "€18,500",
    mileage: "95,000 km",
    transmission: "Manuale",
    image: peugeot107,
  },
  {
    id: 8,
    name: "Tesla Model 3",
    year: 2022,
    price: "€42,000",
    mileage: "25,000 km",
    transmission: "Automatike",
    image: car4,
  },
  {
    id: 9,
    name: "Makina e Re",
    year: 2024,
    price: "€25,000",
    mileage: "15,000 km",
    transmission: "Automatike",
    image: newCar,
  },
];

const Inventory = () => {
  return (
    <section id="inventory" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Inventari i Zgjedhur
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Eksploro përzgjedhjen tonë të kujdesshme të automjeteve premium
          </p>
        </div>
        
        <div className="max-h-[800px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
