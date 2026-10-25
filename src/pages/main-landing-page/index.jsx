import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StickyNavigationBar from '../../components/ui/StickyNavigationBar';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import ServicesGrid from './components/ServicesGrid';

import BeforeAfterSection from './components/BeforeAfterSection';
import NaszZespolSection from './components/NaszZespolSection';
import KontaktSection from './components/KontaktSection';
import Footer from './components/Footer';

const MainLandingPage = () => {
  const [showUI, setShowUI] = useState(false);
  const [showNaszaPraca, setShowNaszaPraca] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const location = useLocation();

  // Wejście z podstrony na /#sekcja — przewiń do sekcji z odstępem na pasek nawigacji
  useEffect(() => {
    if (!location.hash) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(location.hash.slice(1));
      if (!el) return;
      const header = document.getElementById('velor-header');
      const offset = header ? header.getBoundingClientRect().height + 24 : 96;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }, 150);
    return () => clearTimeout(timer);
  }, [location.hash]);

  useEffect(() => {
    const isReturningUser = localStorage.getItem('visited') === 'true';
    if (isReturningUser) {
      setShowUI(true);
      setShowNaszaPraca(true);
    } else {
      setIsNewUser(true);
      localStorage.setItem('visited', 'true');
      const timerNaszaPraca = setTimeout(() => setShowNaszaPraca(true), 3000);
      const timerUI = setTimeout(() => setShowUI(true), 4000);
      return () => {
        clearTimeout(timerNaszaPraca);
        clearTimeout(timerUI);
      };
    }
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <StickyNavigationBar showUI={showUI} />
      <HeroSection showUI={showUI} showNaszaPraca={showNaszaPraca} isNewUser={isNewUser} />
      <ServicesGrid />
      <ProcessSection />

      <BeforeAfterSection isNewUser={isNewUser} />
      <NaszZespolSection />
      <KontaktSection />
      <Footer />
    </div>
  );
};

export default MainLandingPage;