import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { cars } from "@/data/cars";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle, Phone, Calendar, Gauge, Settings, Fuel } from "lucide-react";

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Makina nuk u gjet</h1>
          <Link to="/#inventory">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kthehu te Inventari
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const phoneNumber = "355693196222";
  const whatsappMessage = encodeURIComponent(
    `Përshëndetje! Jam i/e interesuar për makinën: ${car.name} (${car.year}), Kilometrazhi: ${car.mileage}, Transmisioni: ${car.transmission}. Ju lutem më jepni më shumë informacion rreth çmimit.`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  const phoneUrl = `tel:+${phoneNumber}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Back button */}
        <Link to="/#inventory" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kthehu te Inventari
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary">
              <img
                src={car.images[selectedImage]}
                alt={`${car.name} - Foto ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground text-lg px-4 py-1">
                {car.year}
              </Badge>
            </div>

            {/* Thumbnail Gallery */}
            {car.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg transition-all ${
                      selectedImage === index
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${car.name} - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {car.name}
              </h1>
              <p className="text-xl text-muted-foreground">
                Makine e përdorur me cilësi të lartë
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary p-4 rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Viti</span>
                </div>
                <p className="text-xl font-bold text-foreground">{car.year}</p>
              </div>

              <div className="bg-secondary p-4 rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Gauge className="h-4 w-4" />
                  <span className="text-sm">Kilometrazhi</span>
                </div>
                <p className="text-xl font-bold text-foreground">{car.mileage}</p>
              </div>

              <div className="bg-secondary p-4 rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Settings className="h-4 w-4" />
                  <span className="text-sm">Transmisioni</span>
                </div>
                <p className="text-xl font-bold text-foreground">{car.transmission}</p>
              </div>

              {car.motor && (
                <div className="bg-secondary p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Fuel className="h-4 w-4" />
                    <span className="text-sm">Motori</span>
                  </div>
                  <p className="text-xl font-bold text-foreground">{car.motor}L</p>
                </div>
              )}
            </div>

            {/* Contact Section */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Interesuar për këtë makinë?
              </h3>
              <p className="text-muted-foreground">
                Na kontaktoni për të marrë informacion rreth çmimit dhe për të caktuar një takim.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Shkruaj në WhatsApp
                  </Button>
                </a>
                <a href={phoneUrl} className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    069 31 96 222
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CarDetail;