import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const OpinieSection = () => {
  const testimonials = [
    {
      name: 'Marek Wiśniewski',
      car: 'BMW 5 Series',
      city: 'Warszawa',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Korekta lakieru przeszła moje oczekiwania. Auto wygląda lepiej niż prosto z salonu. Profesjonalne podejście od A do Z.',
    },
    {
      name: 'Anna Kowalska',
      car: 'Audi A4',
      city: 'Piaseczno',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Powłoka ceramiczna działa rewelacyjnie. Po 6 miesiącach auto nadal odpycha brud i wodę. Zdecydowanie warto.',
    },
    {
      name: 'Tomasz Nowak',
      car: 'Mercedes GLC',
      city: 'Warszawa',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Detailing wnętrza na najwyższym poziomie. Skóra jak nowa, każdy zakamarek wyczyszczony. Polecam z czystym sumieniem.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Zrealizowanych usług' },
    { value: '4.9', label: 'Średnia ocena' },
    { value: '3+', label: 'Lata doświadczenia' },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={14}
        className={index < rating ? 'text-warning fill-current' : 'text-border'}
      />
    ));
  };

  return (
    <section id="opinie" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="lux-divider mb-6"></div>
          <h2 className="section-heading">Opinie klientów</h2>
          <p className="section-subheading">
            Zaufali nam właściciele setek aut. Oto co mówią o naszej pracy.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary font-sans mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary font-sans">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 luxury-gradient-border hover-scale smooth-transition"
            >
              {/* Stars */}
              <div className="flex space-x-0.5 mb-5">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <blockquote className="text-foreground text-base leading-relaxed mb-6 font-sans">
                „{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-5 border-t border-border">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm font-sans">
                    {testimonial.name}
                  </div>
                  <div className="text-text-secondary text-xs font-sans">
                    {testimonial.car} · {testimonial.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinieSection;