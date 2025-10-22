import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Visit Our Dealership
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Come experience the Auto Kinostudio difference in person
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">
                123 Luxury Drive<br />
                Beverly Hills, CA 90210
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">
                (555) 123-4567<br />
                (555) 987-6543
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">
                info@autokinostudio.com<br />
                sales@autokinostudio.com
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Mon-Fri: 9AM - 8PM<br />
                Sat-Sun: 10AM - 6PM
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12">
            Schedule a Visit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
