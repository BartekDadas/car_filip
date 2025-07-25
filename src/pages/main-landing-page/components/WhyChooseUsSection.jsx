import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyChooseUsSection = () => {
  const features = [
    {
      id: 1,
      icon: 'Leaf',
      title: 'Produkty Ekologiczne',
      description: 'Używamy tylko biodegradowalnych, bezpiecznych dla środowiska produktów czyszczących, które chronią Twój samochód i planetę.',
      color: 'text-success'
    },
    {
      id: 2,
      icon: 'Clock',
      title: 'Dostępność 24/7',
      description: 'Zarezerwuj usługę w dowolnym czasie i miejscu. Pracujemy według Twojego harmonogramu z elastycznymi opcjami czasowymi.',
      color: 'text-primary'
    },
    {
      id: 3,
      icon: 'Shield',
      title: 'Gwarancja Satysfakcji',
      description: '100% gwarancja satysfakcji lub wracamy, aby to naprawić. Twoje szczęście to nasz najwyższy priorytet.',
      color: 'text-warning'
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Dlaczego GoldenJazda?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Doświadcz różnicy z naszą usługą mobilnego detailingu premium, która stawia na pierwszym miejscu jakość i wygodę.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-card rounded-2xl p-8 luxury-shadow hover-scale smooth-transition group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 group-hover:scale-110 smooth-transition`}>
                  <Icon 
                    name={feature.icon} 
                    size={32} 
                    className={feature.color}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-text-secondary">Zadowolonych Klientów</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">5★</div>
            <div className="text-sm text-text-secondary">Średnia Ocena</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">3</div>
            <div className="text-sm text-text-secondary">Lata Doświadczenia</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24h</div>
            <div className="text-sm text-text-secondary">Czas Odpowiedzi</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;