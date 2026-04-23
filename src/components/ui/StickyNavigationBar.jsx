import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const StickyNavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'oferta', label: 'Oferta' },
    { id: 'proces', label: 'Proces' },
    { id: 'cennik', label: 'Cennik' },
    { id: 'opinie', label: 'Opinie' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 smooth-transition ${isScrolled ? 'bg-background/95 backdrop-blur-md luxury-shadow' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-52">
          {/* Left Links */}
          <div className="flex items-center space-x-4 flex-1">
            {sections.slice(0, 2).map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg smooth-transition ${activeSection === section.id
                  ? 'text-primary bg-primary/10'
                  : 'text-text-secondary hover:text-foreground hover:bg-white/5'
                  }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Center Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center hover-scale mx-8"
          >
            <img
              src="/assets/logo.png"
              alt="Velor Auto Spa"
              className="h-44 w-auto invert contrast-[1.1] brightness-[1.1] grayscale opacity-100"
            />
          </button>

          {/* Right Links + Phone */}
          <div className="flex items-center justify-end space-x-4 flex-1">
            {sections.slice(2).map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg smooth-transition ${activeSection === section.id
                  ? 'text-primary bg-primary/10'
                  : 'text-text-secondary hover:text-foreground hover:bg-white/5'
                  }`}
              >
                {section.label}
              </button>
            ))}
            <div className="h-4 w-[1px] bg-border mx-2"></div>
            <a
              href="tel:+48123456789"
              className="flex items-center space-x-2 text-text-secondary hover:text-primary smooth-transition"
            >
              <Icon name="Phone" size={16} />
              <span className="text-sm font-medium whitespace-nowrap">+48 123 456 789</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-between h-44 lg:hidden">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center hover-scale"
          >
            <img
              src="/assets/logo.png"
              alt="Velor Auto Spa"
              className="h-36 w-auto invert contrast-[1.1] brightness-[1.1] grayscale opacity-100"
            />
          </button>

          <div className="flex items-center space-x-3">
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection('kontakt')}
              className="bg-primary hover:bg-secondary text-primary-foreground font-semibold"
            >
              Kontakt
            </Button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-primary smooth-transition"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-md z-200">
          <div className="px-6 py-8 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg smooth-transition text-lg font-medium ${activeSection === section.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-white/5 hover:text-primary'
                  }`}
              >
                {section.label}
              </button>
            ))}

            <div className="pt-6 mt-4 border-t border-border space-y-4">
              <a
                href="tel:+48123456789"
                className="flex items-center space-x-3 text-text-secondary hover:text-primary smooth-transition px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon name="Phone" size={20} />
                <span className="font-medium">+48 123 456 789</span>
              </a>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default StickyNavigationBar;