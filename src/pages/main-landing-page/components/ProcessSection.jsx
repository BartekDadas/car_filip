import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: 'MessageSquare',
      title: 'Kontakt i konsultacja',
      description: 'Napisz lub zadzwoń. Omawiamy Twoje potrzeby, stan auta i dobieramy odpowiednią usługę.',
    },
    {
      number: '02',
      icon: 'Search',
      title: 'Ocena auta i wycena',
      description: 'Oceniamy stan lakieru i wnętrza. Przedstawiamy szczegółową, transparentną wycenę.',
    },
    {
      number: '03',
      icon: 'Wrench',
      title: 'Realizacja usługi',
      description: 'Wykonujemy usługę z najwyższą precyzją, używając certyfikowanych produktów premium.',
    },
    {
      number: '04',
      icon: 'Trophy',
      title: 'Efekt końcowy',
      description: 'Odbierasz auto w perfekcyjnym stanie. Omawiamy efekty i zalecenia pielęgnacyjne.',
    },
  ];

  return (
    <section id="proces" className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="gold-divider mb-6"></div>
          <h2 className="section-heading">Jak pracujemy</h2>
          <p className="section-subheading">
            Prosty, przejrzysty proces od pierwszego kontaktu do efektu końcowego.
            Każdy krok przybliża Twoje auto do perfekcji.
          </p>
        </div>

        {/* Steps — Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative text-center px-6">
              {/* Step number circle */}
              <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full bg-card border border-primary/30 mb-8 group">
                <span className="text-2xl font-bold text-primary font-sans">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Icon name={step.icon} size={24} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground font-serif mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Steps — Mobile */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-5">
              {/* Number + line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary font-sans">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-[1px] h-16 bg-gradient-to-b from-primary/30 to-transparent mt-3"></div>
                )}
              </div>

              {/* Content */}
              <div className="pt-2 pb-4">
                <h3 className="text-lg font-bold text-foreground font-serif mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;