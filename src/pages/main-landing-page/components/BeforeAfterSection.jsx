import React, { useState } from 'react';
import Image from '../../../components/AppImage';

const BeforeAfterSection = () => {
    const comparisons = [
        {
            id: 1,
            title: 'Korekta lakieru',
            caption: 'Usunięcie rys i hologramów — pełen połysk jak z salonu',
            beforeImg: 'https://images.pexels.com/photos/6873087/pexels-photo-6873087.jpeg?auto=compress&cs=tinysrgb&w=800',
            afterImg: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 2,
            title: 'Detailing wnętrza',
            caption: 'Kompleksowe czyszczenie skóry, plastików i tkanin',
            beforeImg: 'https://images.pexels.com/photos/1104768/pexels-photo-1104768.jpeg?auto=compress&cs=tinysrgb&w=800',
            afterImg: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 3,
            title: 'Mycie i ochrona felg',
            caption: 'Oczyszczenie z nalotu hamulcowego i zabezpieczenie powłoką',
            beforeImg: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
            afterImg: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
    ];

    return (
        <section id="portfolio" className="py-20 lg:py-32 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="gold-divider mb-6"></div>
                    <h2 className="section-heading">Efekty naszej pracy</h2>
                    <p className="section-subheading">
                        Każda realizacja to widoczna różnica. Zobaczysz ją na własne oczy.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {comparisons.map((item) => (
                        <BeforeAfterCard key={item.id} comparison={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const BeforeAfterCard = ({ comparison }) => {
    const [showAfter, setShowAfter] = useState(false);

    return (
        <div className="group bg-card rounded-2xl overflow-hidden luxury-gradient-border hover-scale smooth-transition">
            {/* Image Container */}
            <div
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onMouseEnter={() => setShowAfter(true)}
                onMouseLeave={() => setShowAfter(false)}
                onClick={() => setShowAfter(!showAfter)}
            >
                {/* Before Image */}
                <Image
                    src={comparison.beforeImg}
                    alt={`${comparison.title} — przed`}
                    className={`absolute inset-0 w-full h-full object-cover smooth-transition ${showAfter ? 'opacity-0' : 'opacity-100'
                        }`}
                />

                {/* After Image */}
                <Image
                    src={comparison.afterImg}
                    alt={`${comparison.title} — po`}
                    className={`absolute inset-0 w-full h-full object-cover smooth-transition ${showAfter ? 'opacity-100' : 'opacity-0'
                        }`}
                />

                {/* Labels */}
                <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase font-sans smooth-transition ${showAfter
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-black/70 text-white backdrop-blur-sm'
                        }`}>
                        {showAfter ? 'Po' : 'Przed'}
                    </span>
                </div>

                {/* Hover instruction */}
                <div className={`absolute inset-0 flex items-center justify-center bg-black/30 smooth-transition ${showAfter ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                    <span className="text-white text-sm font-medium font-sans bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                        Najedź, aby zobaczyć efekt
                    </span>
                </div>
            </div>

            {/* Caption */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-foreground font-serif mb-2">
                    {comparison.title}
                </h3>
                <p className="text-text-secondary text-sm font-sans leading-relaxed">
                    {comparison.caption}
                </p>
            </div>
        </div>
    );
};

export default BeforeAfterSection;
