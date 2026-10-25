import React, { useEffect, useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ showUI = true, showNaszaPraca = true, isNewUser = false }) => {
  const [videoSrc, setVideoSrc] = useState('/long.mp4');
  const [videoError, setVideoError] = useState(null);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateVideoSrc = () => {
      const mobile = mediaQuery.matches;
      setVideoSrc(mobile ? '/shorty.mp4' : '/long.mp4');
      setIsMobile(mobile);
    };

    updateVideoSrc();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateVideoSrc);
      return () => mediaQuery.removeEventListener('change', updateVideoSrc);
    }

    mediaQuery.addListener(updateVideoSrc);
    return () => mediaQuery.removeListener(updateVideoSrc);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWycenaClick = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        window.dispatchEvent(new Event('openContactModal'));
      }, 1200);
    }
  };

  const handleVideoError = (e) => {
    console.error('Video error:', e);
    setVideoError('Video failed to load');
  };

  return (
    <section className="relative min-h-[100dvh] flex items-end justify-center overflow-x-hidden">
      {/* Pełnoekranowe wideo w pętli */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        <video
          ref={videoRef}
          key={videoSrc}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={isMobile ? '/gemini-frame.png' : '/last_frame.png'}
          aria-hidden="true"
          onError={handleVideoError}
        >
          {!isMobile && <source src="/long.webm" type="video/webm" />}
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Multi-layer overlay for depth */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/40"></div>
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30"></div>
        {/* Subtle silver accent glow */}
        <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-[120px] pb-24 sm:pb-28 lg:pb-[13vh]">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-opacity duration-1000 ${showUI ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Main Headline */}
            <h1 className="hero-title mb-2 sm:mb-3 px-2">
              <span className="hero-title__main">Detailing</span>
              <span className="hero-title__sub">na najwyższym poziomie</span>
            </h1>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center justify-center gap-4 px-3 sm:px-0 w-full max-w-sm sm:max-w-none mx-auto mt-[30px] lg:mt-[50px]">
            {!isNewUser && (
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 w-full transition-opacity duration-1000 ${showUI ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <button type="button" onClick={handleWycenaClick} className="hero-cta hero-cta--primary">
                  <span>Zapytaj o darmową wycenę</span>
                  <Icon name="ArrowRight" size={18} strokeWidth={2} className="hero-cta__icon hero-cta__icon--right" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => scrollToId('proces')} className="hero-cta hero-cta--ghost">
                  <span>Jak pracujemy</span>
                  <Icon name="ArrowDown" size={18} strokeWidth={2} className="hero-cta__icon hero-cta__icon--down" aria-hidden="true" />
                </button>
              </div>
            )}
            {isNewUser && (
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 w-full transition-opacity duration-1000 ${showNaszaPraca ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <button type="button" onClick={() => scrollToId('portfolio')} className="hero-cta hero-cta--primary">
                  <span>Bezpłatna wycena</span>
                  <Icon name="ArrowRight" size={18} strokeWidth={2} className="hero-cta__icon hero-cta__icon--right" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => scrollToId('kontakt')} className="hero-cta hero-cta--ghost">
                  <span>Zadzwoń lub napisz</span>
                  <Icon name="ArrowDown" size={18} strokeWidth={2} className="hero-cta__icon hero-cta__icon--down" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          {/* Trust Indicators — szklane pigułki jak przycisk "Jak pracujemy", czytelne na każdej scenie wideo */}
          <ul className={`mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 px-2 transition-opacity duration-1000 ${showUI ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            {["Ponad 100+ zadowolonych klientów", "Gwarancja jakości", "Certyfikowani specjaliści"].map((label) => (
              <li key={label} className="hero-badge">
                <Icon name="Check" size={15} strokeWidth={2.25} className="shrink-0 text-white" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-5 h-9 border border-primary/40 rounded-full flex justify-center">
            <div className="w-1 h-2.5 bg-primary/60 rounded-full mt-1.5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;