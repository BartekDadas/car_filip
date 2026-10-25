import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { BUSINESS, MAPS } from '../../../data/site';

const KontaktSection = () => {
    const [showMap, setShowMap] = useState(false);
    const contactInfo = [
        {
            icon: 'Phone',
            label: 'Telefon',
            value: '+48 534992730',
            href: 'tel:+48534992730',
        },
        {
            icon: 'Mail',
            label: 'E-mail',
            value: 'velor@onet.pl',
            href: 'mailto:velor@onet.pl',
        },
        {
            icon: 'MapPin',
            label: 'Lokalizacja',
            value: `${BUSINESS.street}, ${BUSINESS.city}`,
            href: MAPS.open,
            external: true,
        },
        {
            icon: 'Clock',
            label: 'Godziny pracy',
            value: 'Pon–Pt: 10:00–18:00, Sob: 11:00–16:00',
            href: null,
        },
    ];

    return (
        <section id="kontakt" className="py-20 lg:py-32 bg-surface">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="lux-divider mb-6"></div>
                    <h2 className="section-heading">Skontaktuj się z nami</h2>
                    <p className="section-subheading">
                        Zadzwoń lub napisz — wycena jest bezpłatna i niezobowiązująca.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                    {contactInfo.map((item, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl p-6 luxury-gradient-border hover-scale smooth-transition"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Icon name={item.icon} size={20} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-secondary font-sans mb-0.5">{item.label}</p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                            className="text-foreground font-medium hover:text-primary smooth-transition font-sans"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-foreground font-medium font-sans">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mapa i dojazd — mapa Google wczytywana dopiero po kliknięciu (prywatność, szybkość) */}
                <div className="mb-12 bg-card rounded-2xl overflow-hidden luxury-gradient-border">
                    <div className="relative aspect-[16/10] sm:aspect-[16/8] bg-muted">
                        {showMap ? (
                            <iframe
                                src={MAPS.embed}
                                title={`Mapa dojazdu — ${BUSINESS.name}, ${BUSINESS.street}, ${BUSINESS.city}`}
                                className="absolute inset-0 w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        ) : (
                            <button
                                type="button"
                                onClick={() => setShowMap(true)}
                                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 text-center px-6 group"
                            >
                                <span className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                                    <Icon name="MapPin" size={26} className="text-primary" />
                                </span>
                                <span className="text-foreground font-semibold font-sans">Pokaż mapę</span>
                                <span className="text-text-secondary text-xs font-sans max-w-xs">Mapa wczyta się z Google Maps. <a href="/polityka-prywatnosci" className="underline hover:text-foreground" onClick={(e) => e.stopPropagation()}>Prywatność</a></span>
                            </button>
                        )}
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <p className="text-foreground font-medium font-sans">{BUSINESS.street}, {BUSINESS.city}</p>
                            <p className="text-text-secondary text-sm font-sans">{BUSINESS.hours}</p>
                        </div>
                        <a
                            href={MAPS.directions}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[48px] items-center justify-center gap-2 px-6 rounded-full bg-[#0b0b0c] border border-white/15 text-white font-semibold hover:bg-black smooth-transition whitespace-nowrap"
                        >
                            <Icon name="Navigation" size={18} />
                            Nawiguj
                        </a>
                    </div>
                </div>

                {/* Trust cue + CTA */}
                <div className="text-center">
                    <button
                        type="button"
                        onClick={() => window.dispatchEvent(new Event('openContactModal'))}
                        className="w-full bg-card rounded-2xl p-8 luxury-gradient-border mb-8 hover:border-primary/60 smooth-transition group text-left"
                    >
                        <div className="flex items-center justify-center space-x-4">
                            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                                <Icon name="ShieldCheck" size={20} className="text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-foreground font-semibold font-sans group-hover:text-primary smooth-transition">Bezpłatna wycena →</h4>
                                <p className="text-text-secondary text-sm font-sans">
                                    Odpowiadamy w ciągu 24h. Bez presji, bez ukrytych kosztów.
                                </p>
                            </div>
                        </div>
                    </button>



                    {/* Social links */}
                    <div className="mt-10">
                        <p className="text-sm text-text-secondary mb-4 font-sans">Śledź nas</p>
                        <div className="flex justify-center space-x-3">
                            {[
                                { name: 'Instagram', icon: 'Instagram', href: 'https://www.instagram.com/velor_swidnica/' },
                                { name: 'Facebook', icon: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61579226108714' },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 bg-muted rounded-xl flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 smooth-transition"
                                >
                                    <Icon name={social.icon} size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KontaktSection;
