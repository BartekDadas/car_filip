import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Usługi', href: '#services' },
    { name: 'Proces', href: '#process' },
    { name: 'Opinie', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' }
  ];

  const services = [
    { name: 'Podstawowe Mycie', href: '#booking' },
    { name: 'Deluxe Detail', href: '#booking' },
    { name: 'Powłoka Ceramiczna', href: '#booking' },
    { name: 'Czyszczenie Wnętrza', href: '#booking' },
    { name: 'Czyszczenie Komory Silnika', href: '#booking' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/goldenjazda' },
    { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/goldenjazda' },
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/goldenjazda' },
    { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com/goldenjazda' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Car" size={24} color="var(--color-background)" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Golden<span className="text-primary">Jazda</span>
                  </h3>
                  <p className="text-xs text-text-secondary -mt-1">Mobilne Detailing</p>
                </div>
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                Usługi mobilnego detailingu samochodowego premium, które przynoszą rezultaty na poziomie salonu bezpośrednio do Twojej lokalizacji. Doświadcz luksusu i wygody w jednym.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="tel:+1-555-GOLDEN"
                  className="flex items-center space-x-3 text-text-secondary hover:text-primary smooth-transition"
                >
                  <Icon name="Phone" size={18} />
                  <span>(555) GOLDEN</span>
                </a>
                <a 
                  href="mailto:info@goldenjazda.com"
                  className="flex items-center space-x-3 text-text-secondary hover:text-primary smooth-transition"
                >
                  <Icon name="Mail" size={18} />
                  <span>info@goldenjazda.com</span>
                </a>
                <div className="flex items-start space-x-3 text-text-secondary">
                  <Icon name="MapPin" size={18} className="mt-0.5 flex-shrink-0" />
                  <span>Obsługujemy Warszawę i Okolice</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Szybkie Linki</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-text-secondary hover:text-primary smooth-transition"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to="/booking-confirmation"
                    className="text-text-secondary hover:text-primary smooth-transition"
                  >
                    Status Rezerwacji
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Nasze Usługi</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-text-secondary hover:text-primary smooth-transition"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours & Social */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Godziny Pracy</h4>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Poniedziałek - Piątek</span>
                  <span className="text-foreground">7:00 - 19:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Sobota</span>
                  <span className="text-foreground">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Niedziela</span>
                  <span className="text-foreground">9:00 - 17:00</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h5 className="text-sm font-semibold text-foreground mb-4">Śledź Nas</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 smooth-transition"
                    >
                      <Icon name={social.icon} size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-text-secondary text-sm">
              © {currentYear} GoldenJazda Mobilne Detailing. Wszelkie prawa zastrzeżone.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-text-secondary hover:text-primary smooth-transition">
                Polityka Prywatności
              </a>
              <a href="#" className="text-text-secondary hover:text-primary smooth-transition">
                Regulamin
              </a>
              <a href="#" className="text-text-secondary hover:text-primary smooth-transition">
                Polityka Cookies
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-text-secondary text-sm">
                <Icon name="Shield" size={16} />
                <span>Licencjonowani i Ubezpieczeni</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary text-sm">
                <Icon name="Award" size={16} />
                <span>Akredytacja BBB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;