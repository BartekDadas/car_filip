import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import { services } from '../../data/services';
import { BUSINESS, servicePath } from '../../data/site';

// Pasek nawigacji wzorowany na układzie meritoros.pl: pływająca biała "pigułka",
// logo po lewej, menu z rozwijanymi listami na środku, przyciski po prawej.
const CONTACT = {
  phoneLabel: BUSINESS.phoneLabel,
  phoneHref: BUSINESS.phoneHref,
  email: BUSINESS.email,
  emailHref: `mailto:${BUSINESS.email}`,
  instagram: BUSINESS.instagram,
  facebook: BUSINESS.facebook,
};

const navItems = [
  {
    label: 'Usługi',
    children: services.map((service) => ({ label: service.title, to: servicePath(service.id) })),
  },
  { label: 'Proces', section: 'proces' },
  { label: 'Realizacje', section: 'portfolio' },
  { label: 'Zespół', section: 'nasz-zespol' },
  {
    label: 'Kontakt',
    children: [
      { label: CONTACT.phoneLabel, href: CONTACT.phoneHref, icon: 'Phone' },
      { label: CONTACT.email, href: CONTACT.emailHref, icon: 'Mail' },
      { label: 'Instagram', href: CONTACT.instagram, icon: 'Instagram', external: true },
      { label: 'Facebook', href: CONTACT.facebook, icon: 'Facebook', external: true },
      { label: 'Formularz kontaktowy', section: 'kontakt', icon: 'MessageSquare' },
    ],
  },
];

const StickyNavigationBar = ({ showUI = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) setOpenAccordion(null);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId) => {
    // Na podstronach (usługi, polityka) wracamy na stronę główną do danej sekcji
    if (location.pathname !== '/') {
      closeMenu();
      navigate(`/#${sectionId}`);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.getElementById('velor-header');
      const offset = header ? header.getBoundingClientRect().height + 24 : 96;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    closeMenu();
  };

  // Jeden element listy rozwijanej (desktop i mobile różnią się tylko klasami)
  const renderChild = (child, className) => {
    const content = (
      <>
        {child.icon && <Icon name={child.icon} size={16} className="shrink-0 text-slate-500" />}
        <span>{child.label}</span>
      </>
    );
    const classes = `flex items-center gap-2.5 ${className}`;

    if (child.to) {
      return (
        <Link key={child.label} to={child.to} className={classes} onClick={closeMenu}>
          {content}
        </Link>
      );
    }
    if (child.section) {
      return (
        <button key={child.label} type="button" onClick={() => scrollToSection(child.section)} className={`${classes} w-full text-left`}>
          {content}
        </button>
      );
    }
    return (
      <a
        key={child.label}
        href={child.href}
        className={classes}
        onClick={closeMenu}
        {...(child.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  };

  return (
    <header
      id="velor-header"
      className={`fixed top-4 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-12 w-full max-w-[1400px] mx-auto transition-opacity duration-1000 ${showUI ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div
        className={`backdrop-blur-md rounded-full px-5 sm:px-6 py-3 flex items-center transition-[background-color,box-shadow] duration-300 ${isScrolled ? 'bg-white/[0.98] shadow-[0_4px_24px_0_rgba(0,0,0,0.10)]' : 'bg-white/95 shadow-lg shadow-black/5'}`}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => {
            closeMenu();
            if (location.pathname !== '/') navigate('/');
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center shrink-0"
          aria-label="Velor Detailing & Protection — przewiń na górę"
        >
          <img
            src="/assets/logo.png"
            alt="Velor Detailing & Protection"
            className="h-10 lg:h-11 w-auto block invert grayscale contrast-[1.1]"
            loading="eager"
          />
        </button>

        {/* Desktop: menu */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-7 text-[15px] xl:text-[17px] text-slate-900 font-medium" aria-label="Menu główne">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group shrink-0">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="flex items-center gap-1.5 hover:text-slate-600 transition-colors py-4 -my-4 whitespace-nowrap"
                >
                  {item.label}
                  <Icon name="ChevronDown" size={16} strokeWidth={1.5} className="text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all z-50 w-[280px]">
                  <div className="bg-[#f2f4f6] rounded-[2rem] p-3 flex flex-col gap-0.5 shadow-xl shadow-black/5 border border-white/60">
                    {item.children.map((child) =>
                      renderChild(child, 'px-4 py-2.5 rounded-2xl text-slate-900 hover:bg-white hover:shadow-sm transition-colors text-[16px]')
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.section)}
                className="flex items-center gap-1.5 hover:text-slate-600 transition-colors py-4 -my-4 whitespace-nowrap shrink-0"
              >
                {item.label}
                <span className="w-4 h-4 shrink-0" aria-hidden="true"></span>
              </button>
            )
          )}
        </nav>

        {/* Desktop: przyciski po prawej */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1 px-1.5 py-1 rounded-full border border-slate-200">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1.5 rounded-full text-slate-700 hover:bg-[#f2f4f6] transition-colors">
              <Icon name="Instagram" size={18} strokeWidth={1.5} />
            </a>
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-1.5 rounded-full text-slate-700 hover:bg-[#f2f4f6] transition-colors">
              <Icon name="Facebook" size={18} strokeWidth={1.5} />
            </a>
          </div>
          <a
            href={CONTACT.emailHref}
            className="hidden xl:flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 text-slate-700 text-base font-medium hover:border-slate-300 hover:bg-white transition-colors whitespace-nowrap"
          >
            <Icon name="Mail" size={16} strokeWidth={1.5} />
            Napisz
          </a>
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full text-base font-medium hover:bg-black/80 transition-colors whitespace-nowrap"
          >
            <Icon name="Phone" size={16} strokeWidth={1.5} />
            Zadzwoń
          </a>
        </div>

        {/* Mobile: hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden ml-auto text-slate-900"
          aria-expanded={isMenuOpen}
          aria-controls="velor-mobile-menu"
          aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
        >
          <Icon name={isMenuOpen ? 'X' : 'Menu'} size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile: rozwijane menu pod paskiem */}
      {isMenuOpen && (
        <>
          <div className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[-1]" onClick={closeMenu} aria-hidden="true"></div>
          <div id="velor-mobile-menu" className="lg:hidden mt-3 bg-[#f2f4f6]/95 backdrop-blur-md rounded-3xl px-6 py-6 shadow-xl max-h-[80svh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Menu</span>
              <button
                type="button"
                onClick={closeMenu}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200/70 hover:bg-slate-300 transition-colors"
                aria-label="Zamknij menu"
              >
                <Icon name="X" size={16} strokeWidth={2} className="text-slate-700" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 text-slate-900 text-base font-medium" aria-label="Menu mobilne">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(openAccordion === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between py-2.5 px-2 rounded-xl hover:bg-white/60 transition-colors"
                      aria-expanded={openAccordion === item.label}
                    >
                      <span>{item.label}</span>
                      <Icon name="ChevronDown" size={16} strokeWidth={1.5} className={`text-slate-400 transition-transform duration-200 ${openAccordion === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openAccordion === item.label && (
                      <div className="pl-4 flex flex-col gap-1 mt-1 mb-2">
                        {item.children.map((child) =>
                          renderChild(child, 'py-2 px-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-colors text-sm font-normal')
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => scrollToSection(item.section)}
                    className="text-left py-2.5 px-2 rounded-xl hover:bg-white/60 hover:text-slate-600 transition-colors"
                  >
                    {item.label}
                  </button>
                )
              )}

              <div className="mt-3 pt-3 border-t border-slate-200 flex flex-col gap-3">
                <a
                  href={CONTACT.emailHref}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-full text-center font-medium hover:border-slate-300 transition-colors"
                >
                  <Icon name="Mail" size={16} strokeWidth={1.5} />
                  Napisz
                </a>
                <a
                  href={CONTACT.phoneHref}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full text-center font-medium hover:bg-black/80 transition-colors"
                >
                  <Icon name="Phone" size={16} strokeWidth={1.5} />
                  Zadzwoń
                </a>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-center gap-3">
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 rounded-full text-slate-700 hover:bg-white/60 transition-colors">
                  <Icon name="Instagram" size={20} strokeWidth={1.5} />
                </a>
                <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2.5 rounded-full text-slate-700 hover:bg-white/60 transition-colors">
                  <Icon name="Facebook" size={20} strokeWidth={1.5} />
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default StickyNavigationBar;
