import ServiceGallery from '../../components/ServiceGallery';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../main-landing-page/components/Footer';
import { services } from '../../data/services';

export default function ItemDetails() {
  const { id } = useParams();
  const service = services.find((item) => String(item.id) === id);
  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 py-10 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/#oferta" className="inline-flex min-h-[48px] items-center text-primary mb-6 underline underline-offset-4">← Wszystkie usługi</a>
          {!service ? <h1 className="text-3xl text-foreground">Nie znaleziono usługi</h1> : (
            <article className="bg-card rounded-2xl overflow-hidden border border-primary/20">
              <ServiceGallery images={service.images} detailed />
              <div className="p-6 sm:p-10 lg:p-12">
                <p className="text-primary text-xs uppercase tracking-widest mb-4">Szczegóły usługi</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8 break-words">{service.title}</h1>
                <div className="text-text-secondary leading-relaxed space-y-5">{service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                <h2 className="text-2xl font-serif text-foreground mt-10 mb-5">Cennik</h2>
                <dl className="divide-y divide-white/10">{service.prices.map(([label, price]) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6 py-4">
                    <dt className="text-text-secondary min-w-0">{label}</dt>
                    <dd className="text-primary font-semibold sm:text-right sm:max-w-[45%] sm:shrink-0">{price}</dd>
                  </div>
                ))}</dl>
                <a href="/#kontakt" className="mt-8 flex min-h-[48px] items-center justify-center text-center px-5 py-4 bg-primary text-black font-bold rounded-xl hover:bg-secondary">Zapytaj o wycenę</a>
              </div>
            </article>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
