import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CennikSection = () => {
    const scrollToContact = () => {
        const el = document.getElementById('kontakt');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const packages = [
        {
            name: 'Pakiet Podstawowy',
            tagline: 'Odświeżenie i ochrona',
            priceFrom: 299,
            popular: false,
            features: [
                'Mycie detailingowe (metoda dwóch wiader)',
                'Czyszczenie felg i opon',
                'Odkurzanie wnętrza',
                'Czyszczenie szyb wewnątrz i na zewnątrz',
                'Nabłyszczanie plastików',
                'Wosk syntetyczny',
            ],
        },
        {
            name: 'Pakiet Premium',
            tagline: 'Kompleksowy detailing',
            priceFrom: 699,
            popular: true,
            features: [
                'Wszystko z Pakietu Podstawowego',
                'Jednoetapowa korekta lakieru',
                'Głębokie czyszczenie wnętrza',
                'Pielęgnacja skóry / pranie tapicerki',
                'Czyszczenie komory silnika',
                'Wosk naturalny klasy premium',
                'Zabezpieczenie felg',
                'Gwarancja efektu 30 dni',
            ],
        },
        {
            name: 'Pakiet VIP',
            tagline: 'Maksymalna perfekcja',
            priceFrom: 1499,
            popular: false,
            features: [
                'Wszystko z Pakietu Premium',
                'Wieloetapowa korekta lakieru',
                'Aplikacja powłoki ceramicznej',
                'Ochrona hydrofobowa szyb',
                'Zabezpieczenie tapicerki / skóry',
                'Renowacja plastików zewnętrznych',
                'Gwarancja powłoki 12 miesięcy',
                'Zestaw do pielęgnacji w zestawie',
            ],
        },
    ];

    return (
        <section id="cennik" className="py-20 lg:py-32 bg-background">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="gold-divider mb-6"></div>
                    <h2 className="section-heading">Cennik</h2>
                    <p className="section-subheading">
                        Transparentne ceny bez ukrytych kosztów. Wybierz pakiet dopasowany do potrzeb Twojego auta.
                        Ostateczna wycena po bezpłatnej konsultacji.
                    </p>
                </div>

                {/* Vertical Pricing Cards */}
                <div className="space-y-6">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative bg-card rounded-2xl overflow-hidden smooth-transition hover-scale ${pkg.popular
                                    ? 'ring-2 ring-primary'
                                    : 'luxury-gradient-border'
                                }`}
                        >
                            {/* Popular badge */}
                            {pkg.popular && (
                                <div className="absolute top-0 right-0">
                                    <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-1.5 text-xs font-semibold tracking-wide rounded-bl-xl">
                                        Najpopularniejszy
                                    </div>
                                </div>
                            )}

                            <div className="p-8 lg:p-10">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                                    {/* Left — Name + Price */}
                                    <div className="lg:w-1/3 flex-shrink-0">
                                        <h3 className="text-2xl font-bold text-foreground font-serif mb-1">
                                            {pkg.name}
                                        </h3>
                                        <p className="text-text-secondary text-sm font-sans mb-5">{pkg.tagline}</p>

                                        <div className="flex items-baseline space-x-1 mb-5">
                                            <span className="text-sm text-text-secondary font-sans">od</span>
                                            <span className="text-4xl font-bold text-primary font-sans">{pkg.priceFrom}</span>
                                            <span className="text-lg text-text-secondary font-sans">zł</span>
                                        </div>

                                        <Button
                                            variant={pkg.popular ? 'default' : 'outline'}
                                            size="lg"
                                            onClick={scrollToContact}
                                            className={`font-semibold w-full lg:w-auto ${pkg.popular
                                                    ? 'bg-primary hover:bg-secondary text-primary-foreground'
                                                    : 'border-primary/40 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary'
                                                }`}
                                        >
                                            Zapytaj o wycenę
                                        </Button>
                                    </div>

                                    {/* Right — Features */}
                                    <div className="lg:w-2/3">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {pkg.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-start space-x-3">
                                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                                                        <Icon name="Check" size={12} className="text-primary" />
                                                    </div>
                                                    <span className="text-text-secondary text-sm leading-relaxed font-sans">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <div className="mt-12 text-center">
                    <p className="text-text-secondary text-sm font-sans max-w-2xl mx-auto">
                        Ceny mogą się różnić w zależności od wielkości pojazdu i stanu lakieru.
                        Każda realizacja poprzedzona jest bezpłatną konsultacją i indywidualną wyceną.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CennikSection;
