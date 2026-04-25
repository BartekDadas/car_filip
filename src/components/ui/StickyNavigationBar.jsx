import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const StickyNavigationBar = ({ showUI = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'oferta', label: 'Oferta' },
    { id: 'proces', label: 'Proces' },
    { id: 'cennik', label: 'Cennik' },
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-opacity duration-1000 ${showUI ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Scrolled background - separate layer to avoid blur issues */}
      <div className={`absolute inset-0 transition-all duration-300 ${isScrolled ? 'bg-background/95 shadow-lg shadow-black/20' : 'bg-transparent'}`} style={{ backdropFilter: isScrolled ? 'blur(20px)' : 'none', WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none' }}></div>
      <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-64">
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

            {/* Social Icons Desktop */}
            <div className="hidden xl:flex items-center space-x-2 ml-2 pl-4 border-l border-border/50">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary smooth-transition p-2 hover:bg-white/5 rounded-full" aria-label="Facebook">
                <Icon name="Facebook" size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary smooth-transition p-2 hover:bg-white/5 rounded-full" aria-label="Instagram">
                <Icon name="Instagram" size={18} />
              </a>
            </div>
          </div>

          {/* Center Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center hover-scale mx-8"
          >
            <img
              src="/assets/logo.png"
              alt="Velor Auto Spa"
              className="h-56 w-auto invert contrast-[1.1] brightness-[1.1] grayscale opacity-100"
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
        <div className="flex items-center justify-between h-24 lg:hidden">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center hover-scale"
          >
            <img
              src="/assets/logo.png"
              alt="Velor Auto Spa"
              className="h-24 w-auto invert contrast-[1.1] brightness-[1.1] grayscale opacity-100"
            />
          </button>

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
        <div
          className="
            lg:hidden fixed left-0 right-0 top-0 z-[999]
            h-[calc(100dvh+24px)] min-h-[calc(100dvh+24px)]
            overflow-y-auto overscroll-contain
            bg-background/80 backdrop-blur-2xl
            supports-[backdrop-filter]:bg-background/65
            border-b border-white/10
          "
          style={{
            WebkitBackdropFilter: 'blur(28px)',
            backdropFilter: 'blur(28px)',
            paddingBottom: 'calc(env(safe-area-inset-bottom) + 48px)',
          }}
        >
          {/* Mobile menu header */}
          <div className="sticky top-0 z-10 flex items-center justify-between h-28 px-4 bg-background/40 backdrop-blur-xl">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center hover-scale"
            >
              <img
                src="/assets/logo.png"
                alt="Velor Auto Spa"
                className="h-28 w-auto invert contrast-[1.1] brightness-[1.1] grayscale opacity-100"
              />
            </button>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg text-text-secondary hover:text-primary smooth-transition"
            >
              <Icon name="X" size={28} />
            </button>
          </div>

          <div className="px-6 pt-10 pb-24 space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-4 smooth-transition text-lg font-medium ${
                  activeSection === section.id
                    ? 'text-primary border-l-2 border-primary pl-6'
                    : 'text-text-secondary hover:text-foreground hover:pl-6'
                }`}
              >
                {section.label}
              </button>
            ))}

            <div className="pt-8 mt-6 border-t border-border space-y-4">
              <div className="flex items-center space-x-4 px-4 pb-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 -ml-3 rounded-full bg-white/5 text-text-secondary hover:text-primary hover:bg-white/10 smooth-transition" aria-label="Facebook">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-text-secondary hover:text-primary hover:bg-white/10 smooth-transition" aria-label="Instagram">
                  <Icon name="Instagram" size={24} />
                </a>
              </div>
              <a
                href="tel:+48123456789"
                className="flex items-center space-x-3 text-text-secondary hover:text-foreground smooth-transition px-4 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon name="Phone" size={20} />
                <span className="font-medium text-base">+48 123 456 789</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default StickyNavigationBar;