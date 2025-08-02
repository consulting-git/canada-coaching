import { Card, CardContent } from "@/components/ui/card";
import { Ear, Target, TrendingUp, Shield } from "lucide-react";

const Approach = () => {
  const approaches = [
    {
      icon: Ear,
      title: "Écoute Active",
      description: "Un espace sécurisé pour exprimer vos besoins et préoccupations sans jugement.",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: Target,
      title: "Objectifs Personnalisés",
      description: "Définition d'objectifs adaptés à votre situation et à vos aspirations uniques.",
      gradient: "from-accent/10 to-accent/5"
    },
    {
      icon: TrendingUp,
      title: "Accompagnement Progressif",
      description: "Un suivi régulier avec des étapes claires pour mesurer vos progrès.",
      gradient: "from-destructive/10 to-destructive/5"
    },
    {
      icon: Shield,
      title: "Développement de l'Autonomie",
      description: "Vous donner les outils pour devenir acteur de votre propre changement.",
      gradient: "from-secondary/20 to-secondary/10"
    }
  ];

  return (
    <section id="approach" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-secondary mb-4">
            Mon Approche
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une méthode personnalisée basée sur l'écoute, la bienveillance et l'accompagnement vers l'autonomie.
          </p>
        </div>

        {/* Approach Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${approach.gradient} border-border/50 hover:shadow-medium transition-smooth group`}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-background shadow-soft flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Methodology Section */}
        <div className="mt-20">
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-medium border border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Une méthode éprouvée, des résultats durables
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Diagnostic Initial</h4>
                      <p className="text-muted-foreground">Évaluation complète de votre situation actuelle et identification de vos besoins.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Plan d'Action Personnalisé</h4>
                      <p className="text-muted-foreground">Création d'une stratégie sur mesure avec des objectifs clairs et réalisables.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-destructive font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Accompagnement Continu</h4>
                      <p className="text-muted-foreground">Suivi régulier, ajustements et soutien tout au long de votre parcours.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                  <div className="text-center text-foreground">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-sm uppercase tracking-wide opacity-80">Personnalisé</div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent/20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary/20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;