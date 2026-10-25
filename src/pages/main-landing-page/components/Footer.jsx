import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../../data/services';
import { BUSINESS, MAPS, servicePath } from '../../../data/site';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm font-sans">
          {/* Firma i kontakt */}
          <div>
            <p className="text-foreground font-semibold mb-3">{BUSINESS.name}</p>
            <address className="not-italic text-text-secondary leading-relaxed space-y-1">
              <a href={MAPS.open} target="_blank" rel="noopener noreferrer" className="block hover:text-foreground smooth-transition">
                {BUSINESS.street}, {BUSINESS.city}
              </a>
              <a href={BUSINESS.phoneHref} className="block hover:text-foreground smooth-transition">{BUSINESS.phoneLabel}</a>
              <a href={`mailto:${BUSINESS.email}`} className="block hover:text-foreground smooth-transition">{BUSINESS.email}</a>
              <span className="block">{BUSINESS.hours}</span>
            </address>
          </div>

          {/* Usługi — linki do podstron lokalnych */}
          <nav aria-label="Usługi">
            <p className="text-foreground font-semibold mb-3">Usługi {BUSINESS.cityIn}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-1.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={servicePath(service.id)} className="text-text-secondary hover:text-foreground smooth-transition">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + informacje */}
          <div>
            <p className="text-foreground font-semibold mb-3">Obserwuj nas</p>
            <ul className="space-y-1.5 text-text-secondary">
              <li><a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground smooth-transition">Instagram</a></li>
              <li><a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-foreground smooth-transition">Facebook</a></li>
              <li className="pt-3"><Link to="/polityka-prywatnosci" className="hover:text-foreground smooth-transition">Polityka prywatności</Link></li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-border text-center text-text-secondary text-xs font-sans">
          © {currentYear} {BUSINESS.name}. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
