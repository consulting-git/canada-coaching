import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent mb-4">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Coaching Professionnel Canada</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Améliorer la vie,{" "}
                <span className="text-accent">orienter l'avenir</span>,{" "}
                accompagner les familles
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Services de coaching professionnel spécialisés dans l'amélioration de soi et de son organisation,
                l'orientation et le coaching des jeunes, ainsi que l'accompagnement des familles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="hero" className="bg-primary hover:bg-primary-hover">
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="hero" className="border-white/30 text-white hover:bg-white/10">
                Découvrir mes services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">5+</div>
                <div className="text-sm text-white/80">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">200+</div>
                <div className="text-sm text-white/80">Clients accompagnés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">95%</div>
                <div className="text-sm text-white/80">Satisfaction client</div>
              </div>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center shadow-large">
                <div className="text-white/60 text-lg font-medium">Photo professionnelle</div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-accent/20 blur-xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-primary/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;