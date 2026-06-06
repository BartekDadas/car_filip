import React, { useEffect, useState, useRef } from 'react';
import Button from '../../../components/ui/Button';

const HeroSection = ({ showUI = true, showNaszaPraca = true, isNewUser = false }) => {
  const [videoSrc, setVideoSrc] = useState('/long.mp4');
  const [videoError, setVideoError] = useState(null);
  const videoRef = useRef(null);
  const playCount = useRef(0);
  const [showVideo, setShowVideo] = useState(true);
  const [offerPressed, setOfferPressed] = useState(false);
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

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
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

  const handleVideoEnded = () => {
    playCount.current += 1;
    if (playCount.current < 2) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    } else {
      setShowVideo(false);
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {showVideo ? (
          <video
            ref={videoRef}
            key={videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster={isMobile ? '/gemini-frame.png' : '/last-frame.png'}
            aria-hidden="true"
            onError={handleVideoError}
            onEnded={handleVideoEnded}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={isMobile ? '/gemini-frame.png' : '/last-frame.png'}
            alt="Background"
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        )}
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30"></div>
        {/* Subtle silver accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-opacity duration-1000 ${showUI ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Silver decorative line */}
            <div className="lux-divider mb-8"></div>

            {/* Overline */}
            <p className="text-primary text-xs sm:text-base font-medium tracking-[0.2em] uppercase mb-4 sm:mb-6 font-sans">
              Detailing & Protection
            </p>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 sm:mb-6 leading-[1.1] tracking-tight uppercase px-2">
              Twoje{' '}
              <span className="text-transparent bg-gradient-to-r from-primary via-white to-secondary bg-clip-text">
                auto czystsze
              </span>
              <br />
              z naszego garażu!
            </h1>


          </div>

          {/* CTA */}
          <div className="flex flex-col items-center justify-center gap-4 px-3 sm:px-0 w-full max-w-sm sm:max-w-none mx-auto mt-[30px]">
            {!isNewUser && (
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full transition-opacity duration-1000 ${showUI ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <Button
                  variant="default"
                  size="xl"
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    handleWycenaClick();
                    window.setTimeout(() => {
                      btn.blur();
                    }, 180);
                  }}
                  onMouseUp={(e) => e.currentTarget.blur()}
                  onTouchEnd={(e) => {
                    window.setTimeout(() => {
                      e.currentTarget.blur();
                    }, 180);
                  }}
                  iconName="ArrowRight"
                  className="bg-primary hover:bg-secondary text-primary-foreground font-semibold w-full sm:w-[320px] px-2 sm:px-4 py-4 uppercase tracking-widest text-xs sm:text-sm"
                >
                  Napisz o darmową wycenę
                </Button>

                <Button
                  variant="outline"
                  size="xl"
                  onClick={(e) => {
                    const btn = e.currentTarget;

                    setOfferPressed(true);

                    const el = document.getElementById('oferta');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });

                    window.setTimeout(() => {
                      setOfferPressed(false);

                      btn.blur();

                      if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur();
                      }
                    }, 250);
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.blur();
                  }}
                  onTouchEnd={(e) => {
                    const btn = e.currentTarget;

                    window.setTimeout(() => {
                      setOfferPressed(false);
                      btn.blur();

                      if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur();
                      }
                    }, 250);
                  }}
                  iconName="ChevronDown"
                  iconPosition="right"
                  className={`
                    border-primary/40
                    hover:bg-primary/10
                    hover:border-primary

                    focus:!text-foreground
                    focus-visible:!text-foreground
                    hover:!text-foreground

                    w-full sm:w-[320px] px-2 sm:px-4 py-4 uppercase tracking-widest text-xs sm:text-sm

                    ${offerPressed ? '!text-black' : '!text-foreground'}
                  `}
                >
                  Zobacz ofertę
                </Button>
              </div>
            )}
            {isNewUser && (
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full transition-opacity duration-1000 ${showNaszaPraca ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <Button
                  variant="default"
                  size="xl"
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const el = document.getElementById('portfolio');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    window.setTimeout(() => {
                      btn.blur();
                    }, 180);
                  }}
                  onMouseUp={(e) => e.currentTarget.blur()}
                  onTouchEnd={(e) => {
                    window.setTimeout(() => {
                      e.currentTarget.blur();
                    }, 180);
                  }}
                  className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-black hover:brightness-110 font-bold w-full sm:w-[320px] px-2 sm:px-4 py-4 uppercase tracking-widest text-xs sm:text-sm"
                >
                  Nasza praca
                </Button>

                <Button
                  variant="outline"
                  size="xl"
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const el = document.getElementById('kontakt');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    window.setTimeout(() => {
                      btn.blur();
                    }, 180);
                  }}
                  onMouseUp={(e) => e.currentTarget.blur()}
                  onTouchEnd={(e) => {
                    window.setTimeout(() => {
                      e.currentTarget.blur();
                    }, 180);
                  }}
                  className={`
                    border-primary/40
                    hover:bg-primary/10
                    hover:border-primary

                    focus:!text-foreground
                    focus-visible:!text-foreground
                    hover:!text-foreground
                    w-full sm:w-[320px] px-2 sm:px-4 py-4 uppercase tracking-widest text-xs sm:text-sm
                    !text-foreground
                  `}
                >
                  Zadzwoń lub napisz
                </Button>
              </div>
            )}
          </div>

          {/* Trust Indicators */}
          <div className={`mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-text-secondary transition-opacity duration-1000 ${showUI ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium font-sans">Ponad 100+ zadowolonych klientów</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium font-sans">Gwarancja jakości</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium font-sans">Certyfikowani specjaliści</span>
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