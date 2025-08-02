import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "najib@coaching-canada.com",
      href: "mailto:najib@coaching-canada.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Canada",
      href: null
    },
    {
      icon: Clock,
      title: "Disponibilité",
      value: "Lun-Ven 9h-18h",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 gradient-zen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-secondary mb-4">
            Prenons Contact
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Prêt à commencer votre parcours de transformation ? Contactez-moi pour une consultation gratuite.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Demande de Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                    Prénom *
                  </label>
                  <Input id="firstName" placeholder="Votre prénom" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                    Nom *
                  </label>
                  <Input id="lastName" placeholder="Votre nom" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email *
                </label>
                <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Téléphone
                </label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-foreground">
                  Service d'intérêt
                </label>
                <select 
                  id="service" 
                  className="w-full p-3 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="personal">Amélioration de soi et organisation</option>
                  <option value="youth">Orientation et coaching des jeunes</option>
                  <option value="family">Accompagnement des familles</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Décrivez brièvement votre situation et vos objectifs..."
                  className="min-h-[120px]"
                  required 
                />
              </div>

              <Button variant="hero" size="hero" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Envoyer la demande
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Je vous recontacterai dans les 24h pour planifier votre consultation gratuite de 30 minutes.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl">Informations de Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-smooth">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.title}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* FAQ Card */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl">Questions Fréquentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Combien coûte une séance de coaching ?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les tarifs varient selon le type d'accompagnement. La première consultation de 30 minutes est gratuite.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Combien de temps dure un accompagnement ?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    La durée dépend de vos objectifs. En moyenne, un accompagnement dure entre 3 à 6 mois.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Les séances se font-elles en présentiel ou à distance ?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Les deux options sont possibles selon vos préférences et votre localisation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;