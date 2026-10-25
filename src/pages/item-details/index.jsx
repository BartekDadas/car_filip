import ServiceGallery from '../../components/ServiceGallery';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import StickyNavigationBar from '../../components/ui/StickyNavigationBar';
import Footer from '../main-landing-page/components/Footer';
import { services } from '../../data/services';
import { BUSINESS, MAPS, SERVICE_SEO, servicePath } from '../../data/site';

export default function ItemDetails() {
  const { slug } = useParams();
  const service = services.find((item) => SERVICE_SEO[item.id]?.slug === slug);
  const seo = service ? SERVICE_SEO[service.id] : null;
  const otherServices = services.filter((item) => item !== service);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {seo && (
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
        </Helmet>
      )}
      <StickyNavigationBar />
      <main className="flex-1 pt-28 sm:pt-32 pb-10 sm:pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/#oferta" className="inline-flex min-h-[48px] items-center text-primary mb-6 underline underline-offset-4">← Wszystkie usługi</Link>
          {!service ? <h1 className="text-3xl text-foreground">Nie znaleziono usługi</h1> : (
            <>
              <article className="bg-card rounded-2xl overflow-hidden border border-primary/20">
                <ServiceGallery images={service.images} detailed />
                <div className="p-6 sm:p-10 lg:p-12">
                  <p className="text-primary text-xs uppercase tracking-widest mb-4">{BUSINESS.name} · {BUSINESS.city}</p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8 break-words">{seo.heading}</h1>
                  <div className="text-text-secondary leading-relaxed space-y-5">{service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                  <h2 className="text-2xl font-serif text-foreground mt-10 mb-5">Cennik — {service.title.toLowerCase()}</h2>
                  <dl className="divide-y divide-white/10">{service.prices.map(([label, price]) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6 py-4">
                      <dt className="text-text-secondary min-w-0">{label}</dt>
                      <dd className="text-primary font-semibold sm:text-right sm:max-w-[45%] sm:shrink-0">{price}</dd>
                    </div>
                  ))}</dl>

                  {/* Gdzie wykonujemy usługę — lokalny kontekst dla klienta i wyszukiwarki */}
                  <div className="mt-10 rounded-xl border border-white/10 p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-foreground mb-2">Gdzie nas znajdziesz</h2>
                    <p className="text-text-secondary leading-relaxed">
                      {service.title} wykonujemy w naszym studio {BUSINESS.cityIn}, {BUSINESS.street}. {BUSINESS.hours}.
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <a href={MAPS.directions} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-2 px-5 rounded-full border border-white/20 text-foreground hover:bg-white/5 smooth-transition">
                        Nawiguj do studia
                      </a>
                      <a href={BUSINESS.phoneHref} className="inline-flex min-h-[48px] items-center justify-center gap-2 px-5 rounded-full bg-white text-black font-semibold hover:bg-white/90 smooth-transition">
                        Zadzwoń: {BUSINESS.phoneLabel}
                      </a>
                    </div>
                  </div>

                  <Link to="/#kontakt" className="mt-8 flex min-h-[48px] items-center justify-center text-center px-5 py-4 bg-primary text-black font-bold rounded-xl hover:bg-secondary">Zapytaj o wycenę</Link>
                </div>
              </article>

              {/* Linki do pozostałych usług — ułatwiają poruszanie się i indeksowanie */}
              <nav className="mt-12" aria-label="Pozostałe usługi">
                <h2 className="text-xl font-serif text-foreground mb-4">Pozostałe usługi {BUSINESS.cityIn}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {otherServices.map((item) => (
                    <li key={item.id}>
                      <Link to={servicePath(item.id)} className="flex min-h-[48px] items-center justify-between gap-3 px-5 py-3 rounded-xl border border-white/10 text-text-secondary hover:text-foreground hover:border-white/25 smooth-transition">
                        <span>{item.title}</span>
                        <span className="text-primary text-sm whitespace-nowrap">{item.price}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
