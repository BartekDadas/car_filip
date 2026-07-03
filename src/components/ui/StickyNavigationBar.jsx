import React, { useState, useEffect, useRef } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const StickyNavigationBar = ({ showUI = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sections = [
    { id: 'proces', label: 'Proces' },
    { id: 'portfolio', label: 'Realizacje' },
    { id: 'nasz-zespol', label: 'Zespół' },
    { id: 'oferta', label: 'Oferta' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  const midPoint = Math.ceil(sections.length / 2);
  const leftSections = sections.slice(0, midPoint);
  const rightSections = sections.slice(midPoint);

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
      <div className={`absolute inset-0 transition-all duration-300 ${isScrolled ? 'bg-background/95 shadow-lg shadow-black/20 lg:bg-white/95 lg:shadow-sm lg:shadow-black/5' : 'bg-transparent lg:bg-white'}`} style={{ backdropFilter: isScrolled ? 'blur(20px)' : 'none', WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none' }}></div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between h-[150px]">
            {/* Left Links */}
            <div className="flex items-center space-x-4 flex-1">
              {leftSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg smooth-transition ${activeSection === section.id
                    ? 'text-black bg-black/5'
                    : 'text-black hover:bg-black/5'
                    }`}
                >
                  {section.label}
                </button>
              ))}

              {/* Social Icons Desktop */}
              <div className="flex items-center space-x-2 ml-2 pl-4 border-l border-black/20">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black/70 smooth-transition p-2 hover:bg-black/5 rounded-full" aria-label="Facebook">
                  <Icon name="Facebook" size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black/70 smooth-transition p-2 hover:bg-black/5 rounded-full" aria-label="Instagram">
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
                className="h-[110px] w-auto invert contrast-[1.1] brightness-[1.1] grayscale opacity-100"
              />
            </button>

            {/* Right Links + Phone */}
            <div className="flex items-center justify-end space-x-4 flex-1">
              {rightSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg smooth-transition ${activeSection === section.id
                    ? 'text-black bg-black/5'
                    : 'text-black hover:bg-black/5'
                    }`}
                >
                  {section.label}
                </button>
              ))}
              <div className="h-4 w-[1px] bg-black/20 mx-2"></div>
              <div className="relative" ref={contactRef}>
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="flex items-center space-x-2 bg-black text-white hover:bg-black/90 smooth-transition px-4 py-2 rounded-lg font-bold text-sm tracking-widest uppercase ml-2"
                >
                  <Icon name="Phone" size={16} />
                  <span className="whitespace-nowrap">Zadzwoń</span>
                </button>
                
                {isContactOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-black/10 overflow-hidden flex flex-col p-2">
                    <a href="tel:+48123456789" className="flex items-center space-x-3 p-3 hover:bg-black/5 rounded-lg smooth-transition group">
                      <div className="bg-black/5 p-2 rounded-full group-hover:bg-black/10 smooth-transition">
                        <Icon name="Phone" size={18} className="text-black" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] text-black/50 uppercase tracking-wider font-semibold">Telefon</span>
                        <span className="text-black font-bold text-sm">+48 123 456 789</span>
                      </div>
                    </a>
                    <a href="mailto:kontakt@velorautospa.pl" className="flex items-center space-x-3 p-3 hover:bg-black/5 rounded-lg smooth-transition group">
                      <div className="bg-black/5 p-2 rounded-full group-hover:bg-black/10 smooth-transition">
                        <Icon name="Mail" size={18} className="text-black" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] text-black/50 uppercase tracking-wider font-semibold">E-mail</span>
                        <span className="text-black font-bold text-sm">kontakt@velorautospa.pl</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-between h-[91px] lg:hidden">
            {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center hover-scale"
          >
            <div className="relative flex items-center justify-center px-1">
              <img
                src="/assets/logo.png"
                alt="Velor Auto Spa"
                className="relative h-[71px] w-auto rounded-xl m-2.5"
              />
            </div>
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
              <div className="relative flex items-center justify-center px-1">
                <img
                  src="/assets/logo.png"
                  alt="Velor Auto Spa"
                  className="relative h-[92px] w-auto rounded-xl m-2.5"
                />
              </div>
            </button>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg text-white hover:text-white/80 smooth-transition"
            >
              <Icon name="X" size={28} />
            </button>
          </div>

          <div className="px-6 pt-10 pb-24 space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-4 smooth-transition text-lg font-medium ${activeSection === section.id
                  ? 'text-white border-l-2 border-white pl-6'
                  : 'text-white hover:text-white/80 hover:pl-6'
                  }`}
              >
                {section.label}
              </button>
            ))}

            <div className="pt-8 mt-6 border-t border-border space-y-4">
              <div className="flex items-center space-x-4 px-4 pb-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 -ml-3 rounded-full bg-white/5 text-white hover:text-white/80 hover:bg-white/10 smooth-transition" aria-label="Facebook">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-white hover:text-white/80 hover:bg-white/10 smooth-transition" aria-label="Instagram">
                  <Icon name="Instagram" size={24} />
                </a>
              </div>
              <a
                href="tel:+48123456789"
                className="flex items-center justify-center w-full bg-black text-white hover:bg-black/80 smooth-transition px-4 py-4 rounded-lg font-bold text-sm tracking-widest uppercase mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Zadzwoń
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default StickyNavigationBar;