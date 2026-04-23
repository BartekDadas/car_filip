import React, { useEffect, useState, useRef } from 'react';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [videoSrc, setVideoSrc] = useState('/long.mp4');
  const [videoError, setVideoError] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateVideoSrc = () => {
      setVideoSrc(mediaQuery.matches ? '/shorty.mp4' : '/long.mp4');
    };

    updateVideoSrc();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateVideoSrc);
      return () => mediaQuery.removeEventListener('change', updateVideoSrc);
    }

    mediaQuery.addListener(updateVideoSrc);
    return () => mediaQuery.removeListener(updateVideoSrc);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoError = (e) => {
    console.error('Video error:', e);
    setVideoError('Video failed to load');
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          key={videoSrc}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg"
          aria-hidden="true"
          onError={handleVideoError}
          onEnded={handleVideoEnded}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30"></div>
        {/* Subtle silver accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Silver decorative line */}
          <div className="lux-divider mb-8"></div>

          {/* Overline */}
          <p className="text-primary text-sm sm:text-base font-medium tracking-[0.2em] uppercase mb-6 font-sans">
            Premium Detailing Samochodowy
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight uppercase">
            Perfekcja{' '}
            <span className="text-transparent bg-gradient-to-r from-primary via-white to-secondary bg-clip-text">
              w Każdym
            </span>
            <br />
            Detalu
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
            Przywracamy lakierowi salonowy połysk. Profesjonalna korekta, powłoki ceramiczne
            i kompleksowy detailing — dla tych, którzy oczekują więcej.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="xl"
              onClick={scrollToContact}
              iconName="ArrowRight"
              iconPosition="right"
              className="bg-primary hover:bg-secondary text-primary-foreground font-semibold px-10 py-4 text-lg"
            >
              Umów bezpłatną wycenę
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={() => {
                const el = document.getElementById('oferta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              iconName="ChevronDown"
              iconPosition="right"
              className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary px-10 py-4 text-lg"
            >
              Zobacz ofertę
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-text-secondary">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-sm font-medium font-sans">Ponad 500 zadowolonych klientów</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-sm font-medium font-sans">Gwarancja jakości</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-sm font-medium font-sans">Certyfikowane produkty</span>
            </div>
          </div>
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