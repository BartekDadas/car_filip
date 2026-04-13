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
            value: 'kontakt@goldenjazda.pl',
            href: 'mailto:kontakt@goldenjazda.pl',
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
                    <div className="gold-divider mb-6"></div>
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
                    <div className="bg-card rounded-2xl p-8 luxury-gradient-border mb-8">
                        <div className="flex items-center justify-center space-x-4 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Icon name="ShieldCheck" size={20} className="text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="text-foreground font-semibold font-sans">Bezpłatna wycena</h4>
                                <p className="text-text-secondary text-sm font-sans">
                                    Odpowiadamy w ciągu 24h. Bez presji, bez ukrytych kosztów.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Direct CTA buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            variant="default"
                            size="xl"
                            onClick={() => window.open('tel:+48123456789')}
                            iconName="Phone"
                            iconPosition="left"
                            className="bg-primary hover:bg-secondary text-primary-foreground font-semibold px-10"
                        >
                            Zadzwoń teraz
                        </Button>
                        <Button
                            variant="outline"
                            size="xl"
                            onClick={() => window.open('mailto:kontakt@goldenjazda.pl')}
                            iconName="Mail"
                            iconPosition="left"
                            className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary px-10"
                        >
                            Napisz e-mail
                        </Button>
                    </div>

                    {/* Social links */}
                    <div className="mt-10">
                        <p className="text-sm text-text-secondary mb-4 font-sans">Śledź nas</p>
                        <div className="flex justify-center space-x-3">
                            {[
                                { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/goldenjazda' },
                                { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/goldenjazda' },
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
