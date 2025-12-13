import peugeot107Front from "@/assets/peugeot-107-front.jpg";
import peugeot107Back from "@/assets/peugeot-107-back.jpg";
import peugeot107Interior from "@/assets/peugeot-107-interior.jpg";
import peugeot107Side from "@/assets/peugeot-107-side.jpg";
import car2Front from "@/assets/car-2-front.jpg";
import car2Back from "@/assets/car-2-back.jpg";
import car2Interior from "@/assets/car-2-interior.jpg";
import car2Side from "@/assets/car-2-side.jpg";
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
import newCar1 from "@/assets/new-car-1.jpg";
import newCar2 from "@/assets/new-car-2.jpg";
import newCar3 from "@/assets/new-car-3.jpg";
import newCar4 from "@/assets/new-car-4.jpg";
import newCar5 from "@/assets/new-car-5.jpg";
import newCar6 from "@/assets/new-car-6.jpg";
import newCar7 from "@/assets/new-car-7.jpg";
import newCar8 from "@/assets/new-car-8.jpg";
import newCar9 from "@/assets/new-car-9.jpg";
import audiRS4Front from "@/assets/audi-rs4-front.jpg";
import audiRS4Side from "@/assets/audi-rs4-side.jpg";
import audiRS4Back from "@/assets/audi-rs4-back.jpg";
import audiRS4Interior from "@/assets/audi-rs4-interior.jpg";

export interface Car {
  id: number;
  name: string;
  year: number;
  mileage: string;
  transmission: string;
  motor?: number;
  images: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Peugeot 107",
    year: 2010,
    mileage: "120,000 km",
    transmission: "Manuale",
    images: [peugeot107Front, peugeot107Back, peugeot107Side, peugeot107Interior],
  },
  {
    id: 2,
    name: "Mercedes-Benz C-Class",
    year: 2015,
    mileage: "135,000 km",
    transmission: "Automatike",
    images: [car2Front, car2Back, car2Side, car2Interior],
  },
  {
    id: 3,
    name: "Mercedes S-Class",
    year: 2023,
    mileage: "6,000 km",
    transmission: "Automatike",
    images: [car3],
  },
  {
    id: 4,
    name: "Porsche 911 Turbo S",
    year: 2024,
    mileage: "3,000 km",
    transmission: "PDK",
    images: [car4],
  },
  {
    id: 5,
    name: "BMW X5",
    year: 2020,
    mileage: "65,000 km",
    transmission: "Automatike",
    images: [car5],
  },
  {
    id: 6,
    name: "Audi A4",
    year: 2019,
    mileage: "85,000 km",
    transmission: "Automatike",
    images: [car41],
  },
  {
    id: 7,
    name: "Volkswagen Golf",
    year: 2018,
    mileage: "95,000 km",
    transmission: "Manuale",
    images: [car42],
  },
  {
    id: 8,
    name: "Tesla Model 3",
    year: 2022,
    mileage: "25,000 km",
    transmission: "Automatike",
    images: [car43],
  },
  {
    id: 9,
    name: "Makina e Re",
    year: 2024,
    mileage: "15,000 km",
    transmission: "Automatike",
    images: [newCar1, newCar2, newCar3, newCar4, newCar5, newCar6, newCar7, newCar8, newCar9],
  },
  {
    id: 10,
    name: "Range Rover Sport",
    year: 2021,
    mileage: "45,000 km",
    transmission: "Automatike",
    images: [car44],
  },
  {
    id: 11,
    name: "BMW 5 Series",
    year: 2020,
    mileage: "70,000 km",
    transmission: "Automatike",
    images: [car45],
  },
  {
    id: 12,
    name: "Audi Q7",
    year: 2019,
    mileage: "80,000 km",
    transmission: "Automatike",
    images: [car46],
  },
  {
    id: 13,
    name: "Mercedes GLE",
    year: 2021,
    mileage: "55,000 km",
    transmission: "Automatike",
    images: [car47],
  },
  {
    id: 14,
    name: "Passat",
    year: 2013,
    motor: 2.0,
    mileage: "40,000 km",
    transmission: "Automatike",
    images: [car48],
  },
  {
    id: 15,
    name: "Mercedes Benz E220d",
    year: 2016,
    mileage: "160,000 km",
    transmission: "Automatike",
    images: [car51],
  },
  {
    id: 16,
    name: "Honda Jazz",
    year: 2009,
    motor: 1.4,
    mileage: "120,000 km",
    transmission: "Automatike",
    images: [car52],
  },
  {
    id: 17,
    name: "Mercedes Benz C220",
    year: 2008,
    motor: 3.0,
    mileage: "205,000 km",
    transmission: "Automatike",
    images: [car53],
  },
  {
    id: 18,
    name: "Volkswagen Golf VII",
    year: 2017,
    motor: 3.0,
    mileage: "141.000 km",
    transmission: "Automatike",
    images: [car54],
  },
  {
    id: 19,
    name: "Toyota Land Cruiser",
    year: 2008,
    motor: 3.0,
    mileage: "170,000 km",
    transmission: "Automatike",
    images: [car55],
  },
  {
    id: 20,
    name: "Fiat Punto",
    year: 2007,
    motor: 1.2,
    mileage: "150,000 km",
    transmission: "Manuale",
    images: [car56],
  },
  {
    id: 21,
    name: "Pasat",
    year: 2013,
    motor: 2.0,
    mileage: "250,000 km",
    transmission: "Automatike",
    images: [car57],
  },
  {
    id: 22,
    name: "Seat Altea",
    year: 2007,
    motor: 2.0,
    mileage: "150,000 km",
    transmission: "Automatike",
    images: [car58],
  },
  {
    id: 23,
    name: "Audi RS4 Avant",
    year: 2021,
    motor: 2.9,
    mileage: "61,000 km",
    transmission: "Automatike",
    images: [audiRS4Front, audiRS4Side, audiRS4Back, audiRS4Interior],
  },
];