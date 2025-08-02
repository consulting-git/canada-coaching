import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 gradient-zen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-foreground space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-2 text-primary mb-4">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-medium text-sm sm:text-base">Coaching Professionnel Canada</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-secondary">
                Améliorer la vie,{" "}
                <span className="text-primary font-normal">orienter l'avenir</span>,{" "}
                accompagner les familles
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Services de coaching professionnel spécialisés dans l'amélioration de soi et de son organisation,
                l'orientation et le coaching des jeunes, ainsi que l'accompagnement des familles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="default" size="lg" className="transition-zen">
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="outline" size="lg" className="transition-zen">
                Découvrir mes services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-primary mb-1">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-primary mb-1">200+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Clients accompagnés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-primary mb-1">95%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction client</div>
              </div>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative z-10">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-full bg-gradient-subtle backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-soft">
                <div className="text-muted-foreground text-base sm:text-lg font-light">Photo professionnelle</div>
              </div>
            </div>
            {/* Decorative elements - softer, more zen */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 blur-2xl"></div>
              <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;