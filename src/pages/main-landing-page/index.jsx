import React, { useEffect } from 'react';
import StickyNavigationBar from '../../components/ui/StickyNavigationBar';
import HeroSection from './components/HeroSection';
import OfertaSection from './components/OfertaSection';
import ProcessSection from './components/ProcessSection';
import CennikSection from './components/CennikSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import OpinieSection from './components/TestimonialsSection';
import KontaktSection from './components/KontaktSection';
import Footer from './components/Footer';

const MainLandingPage = () => {
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
      <StickyNavigationBar />
      <HeroSection />
      <OfertaSection />
      <ProcessSection />
      <CennikSection />
      <BeforeAfterSection />
      <OpinieSection />
      <KontaktSection />
      <Footer />
    </div>
  );
};

export default MainLandingPage;