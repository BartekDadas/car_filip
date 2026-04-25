import React, { useEffect, useState } from 'react';
import StickyNavigationBar from '../../components/ui/StickyNavigationBar';
import HeroSection from './components/HeroSection';
import OfertaSection from './components/OfertaSection';
import ProcessSection from './components/ProcessSection';
import CennikSection from './components/CennikSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import KontaktSection from './components/KontaktSection';
import Footer from './components/Footer';

const MainLandingPage = () => {
  const [showUI, setShowUI] = useState(false);
  const [showNaszaPraca, setShowNaszaPraca] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

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
      <OfertaSection />
      <ProcessSection />
      <CennikSection />
      <BeforeAfterSection isNewUser={isNewUser} />
      <KontaktSection />
      <Footer />
    </div>
  );
};

export default MainLandingPage;