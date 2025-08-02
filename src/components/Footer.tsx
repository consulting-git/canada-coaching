import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/c716c243-dfad-4976-9b57-d6e1932eaf23.png" 
                alt="Najib Canada Coaching" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Services de coaching professionnel spécialisés dans l'amélioration de soi, 
              l'orientation des jeunes et l'accompagnement des familles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary-foreground">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#approach" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Mon Approche
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">najib@coaching-canada.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-foreground/60 text-sm">
              © 2024 Najib Canada Coaching. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-smooth">
                Politique de confidentialité
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-smooth">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;