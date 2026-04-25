import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const BeforeAfterSection = ({ isNewUser = false }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [shouldRenderModal, setShouldRenderModal] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        let timer;

        if (isModalOpen) {
            setShouldRenderModal(true);
            document.body.style.overflow = 'hidden';

            timer = window.setTimeout(() => {
                setIsModalVisible(true);
            }, 30);
        } else {
            setIsModalVisible(false);
            document.body.style.overflow = '';

            timer = window.setTimeout(() => {
                setShouldRenderModal(false);
            }, 1500);
        }

        return () => {
            window.clearTimeout(timer);
        };
    }, [isModalOpen]);

    useEffect(() => {
        window.addEventListener('openContactModal', openModal);
        return () => {
            window.removeEventListener('openContactModal', openModal);
            document.body.style.overflow = '';
        };
    }, []);

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

    const modal = shouldRenderModal
        ? createPortal(
              <div
                  className={`
                    fixed left-0 right-0 top-0 bottom-0 z-[9999]
                    flex items-end justify-center
                    bg-black/80 backdrop-blur-sm
                    transition-opacity duration-[1500ms]
                    ${isModalVisible ? 'opacity-100' : 'opacity-0'}
                  `}
                  style={{
                      height: '100dvh',
                      minHeight: '100dvh',
                      paddingTop: 'env(safe-area-inset-top)',
                  }}
                  onClick={(e) => {
                      if (e.target === e.currentTarget) setIsModalOpen(false);
                  }}
              >
                  <div
                      className={`
                        relative w-full
                        h-[calc(100dvh-env(safe-area-inset-top))]
                        max-h-[calc(100dvh-env(safe-area-inset-top))]
                        overflow-y-auto overscroll-contain
                        bg-card border border-border luxury-shadow
                        rounded-t-2xl
                        px-6 pt-6 pb-[calc(env(safe-area-inset-bottom)+32px)]
                        transition-transform duration-[1500ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        will-change-transform
                        ${isModalVisible ? 'translate-y-0' : 'translate-y-full'}
                      `}
                      onClick={(e) => e.stopPropagation()}
                  >
                      <div className="sm:hidden flex justify-center mb-4">
                          <div className="w-10 h-1 bg-border rounded-full"></div>
                      </div>

                      <button
                          type="button"
                          onClick={() => setIsModalOpen(false)}
                          className="absolute top-4 right-4 z-10 text-text-secondary hover:text-foreground smooth-transition"
                      >
                          <Icon name="X" size={24} />
                      </button>

                      <h3 className="text-xl sm:text-2xl font-bold text-foreground font-serif mb-6 pr-8">
                          Bezpłatna wycena
                      </h3>

                      <form
                          className="space-y-4"
                          onSubmit={(e) => {
                              e.preventDefault();
                              setIsModalOpen(false);
                          }}
                      >
                          <div>
                              <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1">
                                  Imię
                              </label>
                              <input
                                  required
                                  type="text"
                                  className="w-full px-4 py-2 text-sm bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary smooth-transition"
                              />
                          </div>

                          <div>
                              <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1">
                                  Email
                              </label>
                              <input
                                  required
                                  type="email"
                                  className="w-full px-4 py-2 text-sm bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary smooth-transition"
                              />
                          </div>

                          <div>
                              <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1">
                                  Twoje auto
                              </label>
                              <input
                                  required
                                  type="text"
                                  className="w-full px-4 py-2 text-sm bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary smooth-transition"
                                  placeholder="np. BMW Seria 3, 2020"
                              />
                          </div>

                          <div>
                              <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1">
                                  Co chcesz umyć i dodatkowe pytania do nas
                              </label>
                              <textarea
                                  required
                                  rows="4"
                                  className="w-full px-4 py-2 text-sm bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary smooth-transition"
                              />
                          </div>

                          <div className="pt-6">
                              <Button
                                  type="submit"
                                  className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold py-3"
                              >
                                  Wyślij zapytanie
                              </Button>
                          </div>
                      </form>
                  </div>
              </div>,
              document.body
          )
        : null;

    return (
        <section id="portfolio" className="py-20 lg:py-32 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="lux-divider mb-6"></div>
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

                {/* New User CTA */}
                {isNewUser && (
                    <div className="mt-16 text-center">
                        <Button
                            variant="default"
                            size="xl"
                            onClick={openModal}
                            className="bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-12 py-4 text-lg border border-zinc-700"
                        >
                            Bezpłatna wycena
                        </Button>
                    </div>
                )}
            </div>

            {modal}
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
