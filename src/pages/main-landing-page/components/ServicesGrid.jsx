import React from 'react';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
  // Create an array of 9 items
  const items = Array.from({ length: 9 }).map((_, index) => ({
    id: index + 1,
    title: `Usługa ${index + 1}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  }));

  return (
    <section id="oferta" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="lux-divider mb-6"></div>
          <h2 className="section-heading">Nasze Usługi</h2>
          <p className="section-subheading">
            Odkryj naszą pełną ofertę profesjonalnego detailingu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative bg-card rounded-2xl p-8 luxury-gradient-border hover-scale smooth-transition flex flex-col"
            >
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                {item.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed text-sm font-sans mb-6 flex-grow">
                {item.description}
              </p>

              <Link
                to={`/item/${item.id}`}
                className="inline-flex items-center justify-center px-6 py-3 border border-primary/30 text-primary font-semibold text-sm uppercase tracking-widest hover:bg-primary hover:text-black smooth-transition rounded-lg"
              >
                Więcej
              </Link>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 smooth-transition rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
