import React, { useEffect } from 'react';
import StickyNavigationBar from '../../components/ui/StickyNavigationBar';
import SuccessIndicator from './components/SuccessIndicator';
import BookingSummaryCard from './components/BookingSummaryCard';
import NextStepsGuide from './components/NextStepsGuide';
import ActionButtons from './components/ActionButtons';
import ServicePreparationTips from './components/ServicePreparationTips';
import Icon from '../../components/AppIcon';

const BookingConfirmation = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Booking Confirmed - GoldenRide Mobile Detailing';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <StickyNavigationBar />
      
      {/* Main Content */}
      <main className="pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Success Indicator */}
          <SuccessIndicator />
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Booking Summary */}
              <BookingSummaryCard />
              
              {/* Next Steps Guide */}
              <NextStepsGuide />
              
              {/* Action Buttons */}
              <ActionButtons />
            </div>
            
            {/* Right Column - Service Preparation Tips */}
            <div className="lg:col-span-1">
              <ServicePreparationTips />
            </div>
          </div>
          
          {/* Additional Information Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Customer Support */}
            <div className="bg-card rounded-xl p-6 luxury-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={24} color="var(--color-primary)" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-text-secondary text-sm mb-4">
                Need help or have questions? Our customer support team is here for you.
              </p>
              <a 
                href="tel:+1-555-GOLDEN" 
                className="text-primary hover:text-secondary font-semibold text-sm smooth-transition"
              >
                Call (555) GOLDEN
              </a>
            </div>
            
            {/* Satisfaction Guarantee */}
            <div className="bg-card rounded-xl p-6 luxury-shadow text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} color="var(--color-success)" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">100% Guarantee</h3>
              <p className="text-text-secondary text-sm mb-4">
                Not satisfied? We'll return within 24 hours to make it right, free of charge.
              </p>
              <span className="text-success font-semibold text-sm">
                Your satisfaction is guaranteed
              </span>
            </div>
            
            {/* Eco-Friendly Promise */}
            <div className="bg-card rounded-xl p-6 luxury-shadow text-center md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={24} color="var(--color-primary)" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Eco-Friendly</h3>
              <p className="text-text-secondary text-sm mb-4">
                We use only biodegradable, environmentally safe products for all our services.
              </p>
              <span className="text-primary font-semibold text-sm">
                Protecting your car &amp; planet
              </span>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-surface border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Car" size={20} color="var(--color-background)" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Golden<span className="text-primary">Ride</span>
                  </h3>
                  <p className="text-xs text-text-secondary -mt-1">Mobile Detailing</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Premium mobile car detailing services that bring showroom quality directly to your location. Eco-friendly products, professional results, guaranteed satisfaction.
              </p>
              <div className="flex items-center space-x-4">
                <a href="tel:+1-555-GOLDEN" className="text-primary hover:text-secondary smooth-transition">
                  <Icon name="Phone" size={20} />
                </a>
                <a href="mailto:info@goldenride.com" className="text-primary hover:text-secondary smooth-transition">
                  <Icon name="Mail" size={20} />
                </a>
                <a href="#" className="text-primary hover:text-secondary smooth-transition">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-primary hover:text-secondary smooth-transition">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/main-landing-page" className="text-text-secondary hover:text-primary text-sm smooth-transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/main-landing-page#services" className="text-text-secondary hover:text-primary text-sm smooth-transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/main-landing-page#pricing" className="text-text-secondary hover:text-primary text-sm smooth-transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/main-landing-page#faq" className="text-text-secondary hover:text-primary text-sm smooth-transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="text-text-secondary text-sm">
                  <Icon name="Phone" size={16} className="inline mr-2" />
                  (555) GOLDEN
                </p>
                <p className="text-text-secondary text-sm">
                  <Icon name="Mail" size={16} className="inline mr-2" />
                  info@goldenride.com
                </p>
                <p className="text-text-secondary text-sm">
                  <Icon name="MapPin" size={16} className="inline mr-2" />
                  Serving Greater Los Angeles
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} GoldenRide Mobile Detailing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookingConfirmation;