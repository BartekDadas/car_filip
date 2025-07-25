import React, { useEffect } from 'react';
import StickyNavigationBar from '../../components/ui/StickyNavigationBar';
import HeroSection from './components/HeroSection';
import BookingWidget from './components/BookingWidget';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

const MainLandingPage = () => {
  const handleBookNowClick = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <StickyNavigationBar />

      {/* Hero Section */}
      <HeroSection onBookNowClick={handleBookNowClick} />

      {/* Booking Widget */}
      <BookingWidget />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection onBookNowClick={handleBookNowClick} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLandingPage;