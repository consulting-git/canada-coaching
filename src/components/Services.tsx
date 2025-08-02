import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Heart, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Amélioration de Soi et de son Organisation",
      description: "Développement personnel et professionnel pour atteindre vos objectifs et optimiser votre organisation quotidienne.",
      features: [
        "Définition d'objectifs clairs",
        "Gestion du temps et des priorités",
        "Développement des compétences",
        "Amélioration de la confiance en soi"
      ],
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Orientation et Coaching des Jeunes",
      description: "Accompagnement spécialisé pour aider les jeunes à découvrir leur voie et développer leur potentiel.",
      features: [
        "Orientation scolaire et professionnelle",
        "Développement de la motivation",
        "Gestion du stress et de l'anxiété",
        "Préparation aux transitions"
      ],
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Accompagnement des Familles",
      description: "Soutien et guidance pour améliorer la communication familiale et résoudre les difficultés ensemble.",
      features: [
        "Amélioration de la communication",
        "Résolution de conflits familiaux",
        "Gestion des périodes de transition",
        "Renforcement des liens familiaux"
      ],
      color: "text-destructive"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 gradient-zen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-secondary mb-4">
            Mes Services de Coaching
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un accompagnement personnalisé pour chaque étape de votre développement
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="shadow-medium hover:shadow-large transition-smooth group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full mt-6 group">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-2xl shadow-medium border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Prêt à commencer votre transformation ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Chaque parcours est unique. Discutons ensemble de vos objectifs et trouvons la meilleure approche pour vous accompagner.
            </p>
            <Button variant="hero" size="hero">
              Réserver une consultation gratuite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;