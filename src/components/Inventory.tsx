import { useState, useMemo } from "react";
import CarCard from "./CarCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cars } from "@/data/cars";

const Inventory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [transmissionFilter, setTransmissionFilter] = useState<string>("all");
  const [mileageSort, setMileageSort] = useState<string>("none");
  const carsPerPage = 6;

  // Get unique years for filter options
  const years = useMemo(() => {
    const uniqueYears = [...new Set(cars.map(car => car.year))].sort((a, b) => b - a);
    return uniqueYears;
  }, []);

  // Get unique transmissions for filter options
  const transmissions = useMemo(() => {
    return [...new Set(cars.map(car => car.transmission))];
  }, []);

  // Filter and sort cars
  const filteredCars = useMemo(() => {
    let result = [...cars];
    
    // Filter by year
    if (yearFilter !== "all") {
      result = result.filter(car => car.year === parseInt(yearFilter));
    }
    
    // Filter by transmission
    if (transmissionFilter !== "all") {
      result = result.filter(car => car.transmission === transmissionFilter);
    }
    
    // Sort by mileage
    if (mileageSort !== "none") {
      result.sort((a, b) => {
        const mileageA = parseInt(a.mileage.replace(/[^0-9]/g, ""));
        const mileageB = parseInt(b.mileage.replace(/[^0-9]/g, ""));
        return mileageSort === "asc" ? mileageA - mileageB : mileageB - mileageA;
      });
    }
    
    return result;
  }, [yearFilter, transmissionFilter, mileageSort]);
  
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const currentCars = filteredCars.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (setter: (value: string) => void) => (value: string) => {
    setter(value);
    setCurrentPage(1);
  };
  
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  
  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  
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

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Select value={yearFilter} onValueChange={handleFilterChange(setYearFilter)}>
            <SelectTrigger className="w-[160px] bg-background">
              <SelectValue placeholder="Viti" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              <SelectItem value="all">Të gjitha vitet</SelectItem>
              {years.map(year => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={transmissionFilter} onValueChange={handleFilterChange(setTransmissionFilter)}>
            <SelectTrigger className="w-[160px] bg-background">
              <SelectValue placeholder="Transmisioni" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              <SelectItem value="all">Të gjitha</SelectItem>
              {transmissions.map(trans => (
                <SelectItem key={trans} value={trans}>{trans}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={mileageSort} onValueChange={handleFilterChange(setMileageSort)}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Rendit kilometrazhin" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              <SelectItem value="none">Pa renditje</SelectItem>
              <SelectItem value="asc">Km: Më pak → Më shumë</SelectItem>
              <SelectItem value="desc">Km: Më shumë → Më pak</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filteredCars.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Nuk u gjetën makina me këto filtra.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-center gap-4 mt-12">
          <Button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <ChevronLeft className="h-5 w-5" />
            Mbrapa
          </Button>
          
          <span className="text-foreground font-medium">
            Faqja {currentPage} nga {totalPages}
          </span>
          
          <Button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            Përpara
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Inventory;