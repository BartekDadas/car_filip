import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const KontaktSection = () => {
    const contactInfo = [
        {
            icon: 'Phone',
            label: 'Telefon',
            value: '+48 123 456 789',
            href: 'tel:+48123456789',
        },
        {
            icon: 'Mail',
            label: 'E-mail',
            value: 'kontakt@velorautospa.pl',
            href: 'mailto:kontakt@velorautospa.pl',
        },
        {
            icon: 'MapPin',
            label: 'Lokalizacja',
            value: 'Warszawa i okolice',
            href: null,
        },
        {
            icon: 'Clock',
            label: 'Godziny pracy',
            value: 'Pon–Pt: 8:00–18:00, Sob: 9:00–16:00',
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
                                { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/velorautospa' },
                                { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/velorautospa' },
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
