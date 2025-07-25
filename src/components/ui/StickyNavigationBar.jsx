import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const StickyNavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const sections = [
    { id: 'services', label: 'Usługi', scrollOffset: 80 },
    { id: 'process', label: 'Proces', scrollOffset: 80 },
    { id: 'testimonials', label: 'Opinie', scrollOffset: 80 },
    { id: 'faq', label: 'FAQ', scrollOffset: 80 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      // Only track sections on main landing page
      if (location.pathname === '/main-landing-page') {
        const currentSection = sections.find(section => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId, offset = 80) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleBookingClick = () => {
    if (location.pathname === '/main-landing-page') {
      scrollToSection('booking', 80);
    } else {
      // Navigate to main page and then scroll to booking
      window.location.href = '/main-landing-page#booking';
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 smooth-transition ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm luxury-shadow' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/main-landing-page" 
            className="flex items-center space-x-3 hover-scale"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Car" size={24} color="var(--color-background)" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-foreground">
                Golden<span className="text-primary">Jazda</span>
              </h1>
              <p className="text-xs text-text-secondary -mt-1">Mobilne Detailing</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {location.pathname === '/main-landing-page' && (
              <div className="flex items-center space-x-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id, section.scrollOffset)}
                    className={`text-sm font-medium smooth-transition hover:text-primary ${
                      activeSection === section.id 
                        ? 'text-primary border-b-2 border-primary pb-1' :'text-text-secondary'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            )}
            
            {/* Contact Phone */}
            <a 
              href="tel:+1-555-GOLDEN" 
              className="flex items-center space-x-2 text-text-secondary hover:text-primary smooth-transition"
            >
              <Icon name="Phone" size={18} />
              <span className="text-sm font-medium">(555) GOLDEN</span>
            </a>
          </div>

          {/* Book Now CTA - Desktop */}
          <div className="hidden lg:block">
            <Button
              variant="default"
              onClick={handleBookingClick}
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary hover:bg-secondary text-primary-foreground font-semibold"
            >
              Zarezerwuj
            </Button>
          </div>

          {/* Mobile Menu Button & CTA */}
          <div className="flex items-center space-x-3 lg:hidden">
            <Button
              variant="default"
              size="sm"
              onClick={handleBookingClick}
              className="bg-primary hover:bg-secondary text-primary-foreground font-semibold"
            >
              Zarezerwuj
            </Button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-text-secondary hover:text-primary smooth-transition"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-sm z-200">
          <div className="px-4 py-6 space-y-6">
            {/* Contact Phone */}
            <a 
              href="tel:+1-555-GOLDEN" 
              className="flex items-center space-x-3 text-white hover:text-primary smooth-transition p-3 rounded-lg hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon name="Phone" size={20} />
              <span className="text-base font-medium">(555) GOLDEN</span>
            </a>

            {/* Section Navigation - Only on main landing page */}
            {location.pathname === '/main-landing-page' && (
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide px-3">
                  Eksploruj
                </h3>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id, section.scrollOffset)}
                    className={`w-full text-left p-3 rounded-lg smooth-transition ${
                      activeSection === section.id 
                        ? 'bg-primary/10 text-primary border-l-4 border-primary' :'text-white hover:bg-gray-800 hover:text-primary'
                    }`}
                  >
                    <span className="text-base font-medium">{section.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Navigation Links */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wide px-3">
                Nawigacja
              </h3>
              <Link
                to="/main-landing-page"
                onClick={() => setIsMenuOpen(false)}
                className={`block p-3 rounded-lg smooth-transition ${
                  location.pathname === '/main-landing-page' ?'bg-primary/10 text-primary border-l-4 border-primary' :'text-white hover:bg-gray-800 hover:text-primary'
                }`}
              >
                <span className="text-base font-medium">Strona Główna</span>
              </Link>
              <Link
                to="/booking-confirmation"
                onClick={() => setIsMenuOpen(false)}
                className={`block p-3 rounded-lg smooth-transition ${
                  location.pathname === '/booking-confirmation' ?'bg-primary/10 text-primary border-l-4 border-primary' :'text-white hover:bg-gray-800 hover:text-primary'
                }`}
              >
                <span className="text-base font-medium">Status Rezerwacji</span>
              </Link>
            </div>

            {/* Book Now CTA - Mobile */}
            <div className="pt-4 border-t border-gray-700">
              <Button
                variant="default"
                fullWidth
                onClick={handleBookingClick}
                iconName="Calendar"
                iconPosition="left"
                className="bg-primary hover:bg-secondary text-primary-foreground font-semibold"
              >
                Zarezerwuj Usługę
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default StickyNavigationBar;