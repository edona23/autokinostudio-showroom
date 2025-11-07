import CarCard from "./CarCard";
import peugeot107 from "@/assets/peugeot-107-front.jpg";
import car2 from "@/assets/car-2-front.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car41 from "@/assets/car-41.jpg";
import car42 from "@/assets/car-42.jpg";
import car43 from "@/assets/car-43.jpg";
import car44 from "@/assets/car-44.jpg";
import car45 from "@/assets/car-45.jpg";
import car46 from "@/assets/car-46.jpg";
import car47 from "@/assets/car-47.jpg";
import car48 from "@/assets/car-48.jpg";
import car51 from "@/assets/car-51.jpg";
import car52 from "@/assets/car-52.jpg";
import car53 from "@/assets/car-53.jpg";
import car54 from "@/assets/car-54.jpg";
import car55 from "@/assets/car-55.jpg";
import car56 from "@/assets/car-56.jpg";
import car57 from "@/assets/car-57.jpg";
import car58 from "@/assets/car-58.jpg";
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
    image: car5,
  },
  {
    id: 6,
    name: "Audi A4",
    year: 2019,
    price: "€28,000",
    mileage: "85,000 km",
    transmission: "Automatike",
    image: car41,
  },
  {
    id: 7,
    name: "Volkswagen Golf",
    year: 2018,
    price: "€18,500",
    mileage: "95,000 km",
    transmission: "Manuale",
    image: car42,
  },
  {
    id: 8,
    name: "Tesla Model 3",
    year: 2022,
    price: "€42,000",
    mileage: "25,000 km",
    transmission: "Automatike",
    image: car43,
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
  {
    id: 10,
    name: "Range Rover Sport",
    year: 2021,
    price: "€68,000",
    mileage: "45,000 km",
    transmission: "Automatike",
    image: car44,
  },
  {
    id: 11,
    name: "BMW 5 Series",
    year: 2020,
    price: "€38,000",
    mileage: "70,000 km",
    transmission: "Automatike",
    image: car45,
  },
  {
    id: 12,
    name: "Audi Q7",
    year: 2019,
    price: "€52,000",
    mileage: "80,000 km",
    transmission: "Automatike",
    image: car46,
  },
  {
    id: 13,
    name: "Mercedes GLE",
    year: 2021,
    price: "€65,000",
    mileage: "55,000 km",
    transmission: "Automatike",
    image: car47,
  },
  {
    id: 14,
    name: "Porsche Cayenne",
    year: 2020,
    price: "€78,000",
    mileage: "40,000 km",
    transmission: "Automatike",
    image: car48,
  },
  {
    id: 15,
    name: "Lexus RX",
    year: 2021,
    price: "€48,000",
    mileage: "35,000 km",
    transmission: "Automatike",
    image: car51,
  },
  {
    id: 16,
    name: "Volvo XC90",
    year: 2020,
    price: "€55,000",
    mileage: "60,000 km",
    transmission: "Automatike",
    image: car52,
  },
  {
    id: 17,
    name: "Land Rover Discovery",
    year: 2019,
    price: "€62,000",
    mileage: "75,000 km",
    transmission: "Automatike",
    image: car53,
  },
  {
    id: 18,
    name: "Jaguar F-Pace",
    year: 2021,
    price: "€58,000",
    mileage: "42,000 km",
    transmission: "Automatike",
    image: car54,
  },
  {
    id: 19,
    name: "Alfa Romeo Stelvio",
    year: 2020,
    price: "€44,000",
    mileage: "52,000 km",
    transmission: "Automatike",
    image: car55,
  },
  {
    id: 20,
    name: "Maserati Levante",
    year: 2021,
    price: "€72,000",
    mileage: "38,000 km",
    transmission: "Automatike",
    image: car56,
  },
  {
    id: 21,
    name: "Genesis GV80",
    year: 2022,
    price: "€65,000",
    mileage: "28,000 km",
    transmission: "Automatike",
    image: car57,
  },
  {
    id: 22,
    name: "Cadillac Escalade",
    year: 2021,
    price: "€82,000",
    mileage: "32,000 km",
    transmission: "Automatike",
    image: car58,
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
