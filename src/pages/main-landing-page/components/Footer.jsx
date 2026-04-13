import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Oferta', id: 'oferta' },
    { label: 'Proces', id: 'proces' },
    { label: 'Cennik', id: 'cennik' },
    { label: 'Opinie', id: 'opinie' },
    { label: 'Kontakt', id: 'kontakt' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/goldenjazda' },
    { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/goldenjazda' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-5">
                <img
                  src="/assets/logo.png"
                  alt="DS Car Detailing"
                  className="h-24 lg:h-32 w-auto"
                />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed font-sans mb-5">
                Profesjonalny detailing samochodowy. Perfekcja w każdym detalu — od korekty lakieru po kompleksową ochronę.
              </p>

              {/* Social */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 smooth-transition"
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 font-sans">
                Nawigacja
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-text-secondary text-sm hover:text-primary smooth-transition font-sans"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 font-sans">
                Usługi
              </h4>
              <ul className="space-y-3 text-sm text-text-secondary font-sans">
                <li>Korekta lakieru</li>
                <li>Powłoka ceramiczna</li>
                <li>Detailing wnętrza</li>
                <li>Pranie tapicerki</li>
                <li>Mycie detailingowe</li>
                <li>Pakiety ochronne</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 font-sans">
                Kontakt
              </h4>
              <div className="space-y-3 text-sm font-sans">
                <a
                  href="tel:+48123456789"
                  className="flex items-center space-x-3 text-text-secondary hover:text-primary smooth-transition"
                >
                  <Icon name="Phone" size={16} />
                  <span>+48 123 456 789</span>
                </a>
                <a
                  href="mailto:kontakt@goldenjazda.pl"
                  className="flex items-center space-x-3 text-text-secondary hover:text-primary smooth-transition"
                >
                  <Icon name="Mail" size={16} />
                  <span>kontakt@goldenjazda.pl</span>
                </a>
                <div className="flex items-start space-x-3 text-text-secondary">
                  <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Warszawa i okolice</span>
                </div>
                <div className="flex items-start space-x-3 text-text-secondary">
                  <Icon name="Clock" size={16} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Pon–Pt: 8:00–18:00</p>
                    <p>Sob: 9:00–16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <div className="text-text-secondary text-xs font-sans">
              © {currentYear} GoldenJazda. Wszelkie prawa zastrzeżone.
            </div>
            <div className="flex items-center space-x-6 text-xs font-sans">
              <a href="#" className="text-text-secondary hover:text-primary smooth-transition">
                Polityka prywatności
              </a>
              <a href="#" className="text-text-secondary hover:text-primary smooth-transition">
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;