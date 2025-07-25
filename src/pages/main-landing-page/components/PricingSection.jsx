import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('deluxe');

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Wash',
      price: 49,
      originalPrice: 59,
      duration: '45-60 minutes',
      description: 'Perfect for regular maintenance and quick refresh',
      popular: false,
      features: [
        'Exterior hand wash & dry',
        'Wheel cleaning & tire shine',
        'Window cleaning (exterior)',
        'Dashboard & console wipe',
        'Vacuum interior',
        'Air freshener application'
      ],
      color: 'border-border',
      buttonVariant: 'outline'
    },
    {
      id: 'deluxe',
      name: 'Deluxe Detail',
      price: 89,
      originalPrice: 109,
      duration: '90-120 minutes',
      description: 'Our most popular comprehensive detailing service',
      popular: true,
      features: [
        'Everything in Basic Wash',
        'Clay bar treatment',
        'Premium wax application',
        'Interior deep cleaning',
        'Leather conditioning',
        'Engine bay cleaning',
        'Headlight restoration',
        '30-day satisfaction guarantee'
      ],
      color: 'border-primary',
      buttonVariant: 'default'
    },
    {
      id: 'ceramic',
      name: 'Ceramic Coat',
      price: 199,
      originalPrice: 249,
      duration: '3-4 hours',
      description: 'Ultimate protection with ceramic coating technology',
      popular: false,
      features: [
        'Everything in Deluxe Detail',
        'Paint correction (minor scratches)',
        'Ceramic coating application',
        'UV protection & hydrophobic coating',
        'Interior fabric protection',
        'Chrome & trim restoration',
        '6-month coating warranty',
        'Maintenance kit included'
      ],
      color: 'border-secondary',
      buttonVariant: 'outline'
    }
  ];

  const handleBookService = (planId) => {
    setSelectedPlan(planId);
    // Scroll to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the perfect service package for your vehicle. All prices include equipment, products, and professional service.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-card rounded-2xl luxury-shadow hover-scale smooth-transition border-2 ${plan.color} ${
                plan.popular ? 'scale-105 lg:scale-110' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold luxury-shadow">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {plan.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-primary">
                        ${plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-lg text-text-secondary line-through">
                          ${plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-text-secondary mt-1">
                      {plan.duration}
                    </div>
                  </div>

                  {/* Savings Badge */}
                  {plan.originalPrice && (
                    <div className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium mb-6">
                      Save ${plan.originalPrice - plan.price}
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                        <Icon name="Check" size={12} className="text-success" />
                      </div>
                      <span className="text-text-secondary text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.buttonVariant}
                  size="lg"
                  fullWidth
                  onClick={() => handleBookService(plan.id)}
                  iconName="Calendar"
                  iconPosition="left"
                  className={`font-semibold ${
                    plan.popular 
                      ? 'bg-primary hover:bg-secondary text-primary-foreground' 
                      : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  Book {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-card rounded-2xl p-8 luxury-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={24} color="var(--color-background)" />
              </div>
              <h4 className="font-semibold text-foreground">Service Area</h4>
              <p className="text-text-secondary text-sm">
                We serve Los Angeles County and surrounding areas. Free travel within 15 miles.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                <Icon name="Shield" size={24} color="var(--color-background)" />
              </div>
              <h4 className="font-semibold text-foreground">Satisfaction Guarantee</h4>
              <p className="text-text-secondary text-sm">
                Not happy with the results? We'll return within 24 hours to make it right.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                <Icon name="CreditCard" size={24} color="var(--color-background)" />
              </div>
              <h4 className="font-semibold text-foreground">Flexible Payment</h4>
              <p className="text-text-secondary text-sm">
                Accept all major credit cards, PayPal, and contactless payments for your convenience.
              </p>
            </div>
          </div>
        </div>

        {/* Special Offer */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              First-Time Customer Special
            </h3>
            <p className="text-lg text-text-secondary mb-6">
              Get 20% off your first service when you book online today. Use code: <span className="font-mono font-bold text-primary">GOLDEN20</span>
            </p>
            <Button
              variant="default"
              size="lg"
              onClick={() => handleBookService('deluxe')}
              iconName="Percent"
              iconPosition="left"
              className="bg-primary hover:bg-secondary text-primary-foreground font-semibold"
            >
              Claim Your Discount
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;