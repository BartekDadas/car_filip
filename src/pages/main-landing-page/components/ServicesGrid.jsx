import ServiceGallery from '../../../components/ServiceGallery';
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../../data/services';

export default function ServicesGrid() {
  return (
    <section id="oferta" className="revealed py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="lux-divider mb-6" />
          <h2 className="section-heading">Nasze Usługi</h2>
          <p className="section-subheading">Odkryj naszą pełną ofertę profesjonalnego detailingu.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <article key={service.id} className="min-w-0 bg-card rounded-2xl overflow-hidden border border-primary/20 flex flex-col">
              <ServiceGallery images={service.images} />
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3 font-serif">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm mb-6 flex-1">{service.summary}</p>
                <p className="text-primary font-semibold mb-4">{service.price}</p>
                <Link to={`/item/${service.id}`} aria-label={`Więcej: ${service.title}`} className="inline-flex min-h-[48px] items-center justify-center px-4 py-3 border border-primary/30 text-primary font-semibold text-sm uppercase tracking-widest hover:bg-primary hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-lg smooth-transition">Więcej</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
