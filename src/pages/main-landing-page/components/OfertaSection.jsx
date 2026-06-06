import React from 'react';
import Icon from '../../../components/AppIcon';

const OfertaSection = () => {
    const services = [
        {
            icon: 'Sparkles',
            title: 'Wieloetapowa Korekta Lakieru',
            description: 'Przywróć zmatowiałej karoserii głęboki, salonowy blask, pozbywając się nieestetycznych zarysowań i hologramów. Profesjonalne polerowanie, od delikatnego "One-Step" po pełną korektę, idealnie przygotowuje auto pod aplikację powłok ochronnych lub wosków.',
        },
        {
            icon: 'Shield',
            title: 'Aplikacja Powłoki Grafenowej lub Ceramicznej',
            description: 'Zabezpiecz lakier przed drobnymi mikrozarysowaniami, szkodliwymi promieniami UV oraz blaknięciem koloru. Wyjątkowy efekt hydrofobowy sprawia, że brud i woda spływają same, co znacząco ułatwia utrzymanie samochodu w czystości przez lata.',
        },
        {
            icon: 'Layers',
            title: 'Oklejanie Folią Ochronną PPF',
            description: 'Zapewnij swojemu autu fizyczną tarczę przed uszkodzeniami mechanicznymi i odpryskami, wykorzystując zaawansowane folie samoregenerujące. To niezawodne rozwiązanie, które nie tylko fizycznie chroni lakier, ale również sprawia, że codzienne mycie staje się czystą przyjemnością.',
        },
        {
            icon: 'Droplets',
            title: 'Kompleksowy Detailing i Pranie Wnętrza',
            description: 'Odzyskaj pierwotną świeżość i nieskazitelną czystość środka, nawet jeśli tapicerka znajduje się w bardzo zaniedbanym stanie. Usługa obejmuje precyzyjne pranie ekstrakcyjne tapicerki materiałowej, czyszczenie detali oraz profesjonalną regenerację elementów skórzanych.',
        },
        {
            icon: 'Car',
            title: 'Pakiet Ochronny "Nowe Auto"',
            description: 'Zabezpiecz swój nowy pojazd prosto z salonu, usuwając najpierw fabryczne mikrozarysowania za pomocą delikatnej korekty. Auto od pierwszego kilometra zyskuje szklistość i bezkompromisową ochronę, zanim zdąży złapać uszkodzenia na drodze.',
        },
        {
            icon: 'Wand2',
            title: 'Bezpieczne Mycie Detailingowe z Dekontaminacją',
            description: 'Oczyść karoserię z trudnych osadów drogowych za pomocą piany aktywnej i technik, które gwarantują brak nowych mikrorys na lakierze. Profesjonalne usunięcie zanieczyszczeń zapobiega niszczeniu powłoki i przygotowuje auto do kolejnych sezonów.',
        },
        {
            icon: 'Wrench',
            title: 'Serwis i Odświeżenie Powłok Ochronnych',
            description: 'Przywróć swojej powłoce ceramicznej lub grafenowej początkową hydrofobowość, poślizg i blask po dłuższym czasie użytkowania. Fachowy serwis obejmuje dogłębne usunięcie osadów z lakieru i regenerację nałożonego wcześniej zabezpieczenia, co wydłuża jego żywotność.',
        },
    ];

    return (
        <section id="oferta" className="py-20 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="lux-divider mb-6"></div>
                    <h2 className="section-heading">Co oferujemy</h2>
                    <p className="section-subheading">
                        Profesjonalne usługi detailingu samochodowego. Każda realizacja to indywidualne podejście
                        i dbałość o najdrobniejsze szczegóły.
                    </p>
                </div>

                {/* Sub-section: Oferta Podstawowa */}
                <div className="mb-12">
                    <div className="flex flex-col items-center text-center mb-10 gap-3">
                        <div className="flex items-center gap-4 w-full max-w-md">
                            <div className="h-[1px] flex-1 bg-primary/30"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                            <div className="h-[1px] flex-1 bg-primary/30"></div>
                        </div>
                        <h3 style={{fontFamily: '"League Spartan", sans-serif', letterSpacing: '0.15em'}} className="text-2xl md:text-3xl font-semibold text-primary uppercase">
                            Oferta Podstawowa
                        </h3>
                        <div className="flex items-center gap-4 w-full max-w-md">
                            <div className="h-[1px] flex-1 bg-primary/30"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                            <div className="h-[1px] flex-1 bg-primary/30"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {services.slice(0, 2).map((service, index) => (
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

                {/* Sub-section: Pakiety DIP */}
                <div>
                    <div className="flex flex-col items-center text-center mb-10 gap-3">
                        <div className="flex items-center gap-4 w-full max-w-md">
                            <div className="h-[1px] flex-1 bg-primary/30"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                            <div className="h-[1px] flex-1 bg-primary/30"></div>
                        </div>
                        <h3 style={{fontFamily: '"League Spartan", sans-serif', letterSpacing: '0.15em'}} className="text-2xl md:text-3xl font-semibold text-primary uppercase">
                            Pakiety DIP
                        </h3>
                        <div className="flex items-center gap-4 w-full max-w-md">
                            <div className="h-[1px] flex-1 bg-primary/30"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                            <div className="h-[1px] flex-1 bg-primary/30"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {services.slice(2).map((service, index) => (
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
            </div>
        </section>
    );
};

export default OfertaSection;
