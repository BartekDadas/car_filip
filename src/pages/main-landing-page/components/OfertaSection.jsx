import React from 'react';
import Icon from '../../../components/AppIcon';

const OfertaSection = () => {
    const services = [
        {
            icon: 'Paintbrush',
            title: 'Korekta lakieru',
            description: 'Usuwamy rysy, hologramy i niedoskonałości. Przywracamy głęboki połysk i idealną gładkość lakieru.',
        },
        {
            icon: 'Shield',
            title: 'Powłoka ceramiczna',
            description: 'Wieloletnia ochrona lakieru. Hydrofobowość, odporność na UV i efekt lustra na lata.',
        },
        {
            icon: 'Sparkles',
            title: 'Detailing wnętrza',
            description: 'Kompleksowe czyszczenie i pielęgnacja wnętrza. Skóra, plastiki, podsufitka — każdy detal.',
        },
        {
            icon: 'Droplets',
            title: 'Pranie tapicerki',
            description: 'Głębokie ekstrahowanie zabrudzeń. Usuwamy plamy, zapachy i alergeny z foteli i wykładzin.',
        },
        {
            icon: 'Car',
            title: 'Mycie detailingowe',
            description: 'Bezpieczne, ręczne mycie metodą dwóch wiader. Delikatnie dla lakieru, skutecznie dla brudu.',
        },
        {
            icon: 'Package',
            title: 'Pakiety ochronne',
            description: 'Kompleksowa ochrona nowego auta lub odświeżenie po zakupie. Lakier, wnętrze, felgi w jednym.',
        },
    ];

    return (
        <section id="oferta" className="py-20 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="gold-divider mb-6"></div>
                    <h2 className="section-heading">Co oferujemy</h2>
                    <p className="section-subheading">
                        Profesjonalne usługi detailingu samochodowego. Każda realizacja to indywidualne podejście
                        i dbałość o najdrobniejsze szczegóły.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-card rounded-2xl p-8 luxury-gradient-border hover-scale smooth-transition"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 smooth-transition">
                                <Icon name={service.icon} size={28} className="text-primary" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                                {service.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed text-sm font-sans">
                                {service.description}
                            </p>

                            {/* Hover accent line */}
                            <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 smooth-transition rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfertaSection;
