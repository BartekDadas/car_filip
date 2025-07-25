import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProcessSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollContainerRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: 'Zarezerwuj',
      subtitle: 'Rezerwacja Online',
      description: 'Wybierz preferowaną datę, godzinę i pakiet usług przez nasz prosty system rezerwacji online.',
      icon: 'Calendar',
      color: 'from-primary to-secondary'
    },
    {
      id: 2,
      title: 'Przyjeżdżamy',
      subtitle: 'Profesjonalny Zespół',
      description: 'Nasi certyfikowani technicy przyjeżdżają do Ciebie z całym profesjonalnym sprzętem i produktami ekologicznymi.',
      icon: 'Truck',
      color: 'from-secondary to-primary'
    },
    {
      id: 3,
      title: 'Detailing',
      subtitle: 'Usługa Premium',
      description: 'Wykonujemy dokładną usługę detailingu używając produktów premium i sprawdzonych technik dla wyjątkowych rezultatów.',
      icon: 'Sparkles',
      color: 'from-primary to-warning'
    },
    {
      id: 4,
      title: 'Ciesz się',
      subtitle: 'Perfekcyjne Rezultaty',
      description: 'Zrelaksuj się i ciesz się swoim świeżo wydetailowanym pojazdem, który wygląda i czuje się jak nowy.',
      icon: 'Heart',
      color: 'from-warning to-primary'
    }
  ];

  const scrollToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
    if (scrollContainerRef.current) {
      const stepWidth = scrollContainerRef.current.scrollWidth / steps.length;
      scrollContainerRef.current.scrollTo({
        left: stepIndex * stepWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const stepWidth = scrollContainerRef.current.scrollWidth / steps.length;
      const newCurrentStep = Math.round(scrollLeft / stepWidth);
      setCurrentStep(newCurrentStep);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="process" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nasz Prosty Proces
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Od rezerwacji do zakończenia, usprawniliśmy każdy krok, aby zapewnić Ci bezproblemowe doświadczenie.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 text-center group">
                {/* Icon Circle */}
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 smooth-transition luxury-shadow`}>
                  <Icon name={step.icon} size={32} color="var(--color-background)" />
                </div>

                {/* Step Number */}
                <div className="text-sm font-semibold text-primary mb-2">
                  Krok {step.id}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <div className="text-sm font-medium text-secondary mb-4">
                  {step.subtitle}
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          {/* Step Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToStep(index)}
                className={`w-3 h-3 rounded-full smooth-transition ${
                  currentStep === index ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>

          {/* Scrollable Steps */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex-shrink-0 w-80 snap-center bg-card rounded-2xl p-6 luxury-shadow"
              >
                <div className="text-center">
                  {/* Icon Circle */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${step.color} mb-6 luxury-shadow`}>
                    <Icon name={step.icon} size={28} color="var(--color-background)" />
                  </div>

                  {/* Step Number */}
                  <div className="text-sm font-semibold text-primary mb-2">
                    Krok {step.id}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>

                  {/* Subtitle */}
                  <div className="text-sm font-medium text-secondary mb-4">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              iconName="ChevronLeft"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Poprzedni
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
              iconName="ChevronRight"
              iconPosition="right"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Następny
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;