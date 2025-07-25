import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Anna Kowalska",
      location: "Warszawa, Polska",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `GoldenJazda przemieniła moje BMW w stan salonowy bezpośrednio na moim podjeździe. Dbałość o szczegóły była niesamowita, a wygoda mobilnej usługi nie ma sobie równych. Nigdy więcej nie pojadę do tradycyjnej myjni!`,
      service: "Pakiet Deluxe Detail",
      date: "Lipiec 2025"
    },
    {
      id: 2,
      name: "Michał Nowak",
      location: "Kraków, Polska",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Jako zapracowany dyrektor doceniam usługi, które oszczędzają mi czas bez kompromisów w jakości. GoldenJazda przekroczyła moje oczekiwania swoją usługą powłoki ceramicznej. Moja Tesla wygląda absolutnie oszałamiająco, a ochrona jest warta każdej zapłaconej złotówki.`,
      service: "Pakiet Ceramic Coat",
      date: "Czerwiec 2025"
    },
    {
      id: 3,
      name: "Katarzyna Wiśniewska",
      location: "Gdańsk, Polska",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `Zespół przyjechał dokładnie na czas z całym profesjonalnym sprzętem. Byli uprzejmi, wydajni i pozostawili moje Audi wyglądające lepiej niż wtedy, gdy je pierwszy raz kupiłam. Produkty ekologiczne, których używają, również dają mi spokój ducha.`,
      service: "Pakiet Podstawowy",
      date: "Lipiec 2025"
    },
    {
      id: 4,
      name: "Piotr Zieliński",
      location: "Wrocław, Polska",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `Próbowałem wielu usług detailingu przez lata, ale GoldenJazda wyróżnia się profesjonalizmem i rezultatami. Potraktowali moje zabytkowe Porsche z należytą troską. Gorąco polecam ich usługi premium!`,
      service: "Pakiet Deluxe Detail",
      date: "Czerwiec 2025"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-warning fill-current' : 'text-border'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Co Mówią Nasi Klienci
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Nie wierz nam na słowo. Oto co mają do powiedzenia nasi zadowoleni klienci o swoim doświadczeniu z GoldenJazda.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-card rounded-2xl luxury-shadow-lg overflow-hidden">
            <div className="p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="Quote" size={24} color="var(--color-background)" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Service Badge */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                  {testimonials[currentTestimonial].service}
                </div>
              </div>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden luxury-shadow">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {testimonials[currentTestimonial].location}
                  </div>
                  <div className="text-primary text-xs font-medium">
                    {testimonials[currentTestimonial].date}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-16">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground luxury-shadow"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-16">
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground luxury-shadow"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full smooth-transition ${
                  currentTestimonial === index ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center space-x-2 text-text-secondary hover:text-primary smooth-transition text-sm"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
              <span>{isAutoPlaying ? "Zatrzymaj" : "Odtwórz"} Auto-przewijanie</span>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">4.9/5</div>
            <div className="text-sm text-text-secondary">Średnia Ocena</div>
            <div className="flex justify-center space-x-1">
              {renderStars(5)}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-text-secondary">Zadowolonych Klientów</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-text-secondary">Wskaźnik Satysfakcji</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;