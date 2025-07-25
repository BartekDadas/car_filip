import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FinalCTASection = ({ onBookNowClick }) => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg"
          alt="Luksusowy samochód z salonowym połyskiem"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Przywróć{' '}
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Salonowy Połysk
            </span>
          </h2>

          {/* Sub-headline */}
          <p className="text-xl lg:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Nie pozwól swojemu pojazdowi stracić blasku. Doświadcz wygody i jakości mobilnego detailingu premium już dziś.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button
              variant="default"
              size="xl"
              onClick={onBookNowClick}
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary hover:bg-secondary text-primary-foreground font-bold px-12 py-4 text-xl"
            >
              Zarezerwuj Usługę Teraz
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              iconName="Phone"
              iconPosition="left"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 text-xl font-bold"
            >
              Zadzwoń (555) GOLDEN
            </Button>
          </div>

          {/* Urgency Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-text-secondary">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="font-medium">Dostępne Dziś</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-text-secondary">
              <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
              <span className="font-medium">Ograniczone Miejsca</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-text-secondary">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="font-medium">Rezerwacja w 60 Sekund</span>
            </div>
          </div>

          {/* Special Offer Reminder */}
          <div className="mt-12 inline-block bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl px-8 py-4">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Percent" size={24} className="text-primary" />
              <span className="text-foreground font-semibold">
                Nowi klienci oszczędzają 20% z kodem: 
                <span className="font-mono text-primary ml-2">GOLDEN20</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default FinalCTASection;