import React from 'react';
import Icon from '../../../components/AppIcon';

const OfertaSection = () => {
    const services = [
        {
            icon: 'Sparkles',
            title: 'Detailing Zewnętrzny',
            description: 'Skupiamy się na przywróceniu blasku i zabezpieczeniu karoserii Twojego samochodu podczas jednego, rozbudowanego procesu. Usługa obejmuje dokładne mycie dekontaminacyjne, glinkowanie lakieru oraz ręczną aplikację wysokiej klasy wosku hydrofobowego. To idealny wybór, aby szybko odświeżyć wygląd auta i zabezpieczyć lakier przed szkodliwym działaniem warunków atmosferycznych.',
        },
        {
            icon: 'Car',
            title: 'Detailing Całościowy',
            description: 'Kompleksowa opieka nad Twoim pojazdem, łącząca zaawansowaną kosmetykę wnętrza z pełną odnową zewnętrzną. W środku przeprowadzamy gruntowne pranie tapicerki i pędzelkowanie detali, natomiast na zewnątrz wykonujemy pełną dekontaminację lakieru zwieńczoną woskowaniem. To idealny pakiet dla osób, które chcą ponownie poczuć się w swoim aucie jak w dniu jego wyjazdu z salonu.',
        },
        {
            icon: 'Droplets',
            title: 'DIP Shine',
            description: 'Pakiet DIP Shine to szybki zastrzyk niesamowitego blasku i podstawowa ochrona dedykowana dla zapracowanych kierowców. Obejmuje on staranne mycie detailingowe nadwozia, odświeżenie plastików wnętrza oraz aplikację zaawansowanego sealantu polimerowego na lakier. Twój samochód zyska wyjątkową szklistość oraz barierę odpychającą wodę i brud w zaledwie kilka godzin.',
        },
        {
            icon: 'Shield',
            title: 'DIP Ceramic',
            description: 'Zestaw DIP Ceramic to trwała tarcza ochronna oparta na najnowszych technologiach kwarcowych, stworzona z myślą o wymagających klientach. Po pełnym przygotowaniu i jednoetapowej korekcie lakieru, aplikujemy certyfikowaną powłokę ceramiczną o trwałości do 3 lat. Zapewnia ona bezkompromisową ochronę przed mikrozarysowaniami, agresywną chemią drogową oraz blaknięciem od słońca.',
        },
        {
            icon: 'Crown',
            title: 'DIP Ultimate',
            description: 'Nasz flagowy zestaw DIP Ultimate to absolutne maksimum luksusu, odnowy i długoterminowego zabezpieczenia każdej, nawet najmniejszej powierzchni Twojego auta. W ramach tego pakietu wykonujemy wieloetapową korektę lakieru, aplikujemy powłoki grafenowe na karoserię, szyby oraz felgi, a całe wnętrze zabezpieczamy dedykowanymi impregnatami. To prestiżowa inwestycja, która gwarantuje spektakularny wygląd i najdłuższą możliwą żywotność wszystkich elementów pojazdu.',
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
