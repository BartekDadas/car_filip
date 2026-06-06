import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

/* ── Mock video data ─────────────────────────────────────────────────── */
const videos = [
    {
        id: 1,
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        title: 'Korekta Lakieru',
        caption: 'Usunięcie rys i hologramów — blask jak z salonu',
        tag: 'Korekta',
    },
    {
        id: 2,
        src: 'https://www.w3schools.com/html/movie.mp4',
        title: 'Detailing Wnętrza',
        caption: 'Kompleksowe czyszczenie skóry, plastików i tkanin',
        tag: 'Wnętrze',
    },
    {
        id: 3,
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        title: 'Powłoka Ceramiczna',
        caption: 'Wieloletnia ochrona lakieru i efekt hydrofobowy',
        tag: 'Ceramika',
    },
    {
        id: 4,
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        title: 'Oklejanie PPF',
        caption: 'Fizyczna tarcza przed odpryskami i zarysowaniami',
        tag: 'PPF',
    },
    {
        id: 5,
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        title: 'Mycie Detailingowe',
        caption: 'Bezpieczne mycie bez mikrorys, z dekontaminacją',
        tag: 'Mycie',
    },
];

const CARD_W = 280; // px — active card width
const GAP    = 20;  // px — gap between cards

/* ── Individual Video Card ───────────────────────────────────────────── */
const VideoCard = ({ video, isActive, isMuted, onMuteToggle }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress]   = useState(0);

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;
        if (isActive) {
            el.currentTime = 0;
            el.play().catch(() => {});
            setIsPlaying(true);
        } else {
            el.pause();
            el.currentTime = 0;
            setIsPlaying(false);
            setProgress(0);
        }
    }, [isActive]);

    useEffect(() => {
        if (videoRef.current) videoRef.current.muted = isMuted;
    }, [isMuted]);

    const handleTimeUpdate = () => {
        const el = videoRef.current;
        if (!el || !el.duration) return;
        setProgress((el.currentTime / el.duration) * 100);
    };

    const handleClick = () => {
        const el = videoRef.current;
        if (!el) return;
        if (el.paused) { el.play(); setIsPlaying(true); }
        else           { el.pause(); setIsPlaying(false); }
    };

    return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900 luxury-gradient-border">
            <video
                ref={videoRef}
                src={video.src}
                loop
                muted={isMuted}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onClick={handleClick}
                className="w-full h-full object-cover cursor-pointer"
                draggable={false}
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20 pointer-events-none" />

            {/* Tag */}
            <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase font-sans bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    {video.tag}
                </span>
            </div>

            {/* Mute */}
            <button
                onClick={(e) => { e.stopPropagation(); onMuteToggle(); }}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 smooth-transition"
            >
                <Icon name={isMuted ? 'VolumeX' : 'Volume2'} size={16} />
            </button>

            {/* Play indicator */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                        <Icon name="Play" size={28} className="text-white ml-1" />
                    </div>
                </div>
            )}

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="text-white text-lg font-bold font-serif mb-1">{video.title}</h3>
                <p className="text-white/70 text-sm font-sans leading-snug">{video.caption}</p>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
                <div className="h-full bg-primary smooth-transition" style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
};

/* ── Main Section ────────────────────────────────────────────────────── */
const BeforeAfterSection = ({ isNewUser = false }) => {
    const INITIAL = Math.floor(videos.length / 2); // start at middle item
    const [current, setCurrent] = useState(INITIAL);
    const [isMuted, setIsMuted] = useState(true);
    const [isModalOpen, setIsModalOpen]       = useState(false);
    const [shouldRenderModal, setShouldRenderModal] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const trackRef    = useRef(null);
    const cardRefs    = useRef([]);
    const isScrolling = useRef(false);

    /* Detect mobile width for enabling/disabling swipe scroll */
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false
    );
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        const update = () => setIsMobile(mq.matches);
        if (mq.addEventListener) {
            mq.addEventListener('change', update);
            return () => mq.removeEventListener('change', update);
        }
        mq.addListener(update);
        return () => mq.removeListener(update);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    /* ── Imperatively scroll to a card ── */
    const scrollToIndex = useCallback((index, animate = true) => {
        const track = trackRef.current;
        const card  = cardRefs.current[index];
        if (!track || !card) return;

        const trackRect = track.getBoundingClientRect();
        const cardRect  = card.getBoundingClientRect();

        // Centre the card inside the visible track area
        const offset =
            card.offsetLeft - track.scrollLeft          // card left relative to track viewport
            + cardRect.width / 2                        // + half card
            - trackRect.width / 2;                      // - half track

        track.scrollBy({ left: offset, behavior: animate ? 'smooth' : 'instant' });
    }, []);

    /* ── Centre first card instantly on mount ── */
    useLayoutEffect(() => {
        scrollToIndex(INITIAL, false);
    }, [INITIAL, scrollToIndex]);

    /* ── Sync index while user swipes natively (debounced) ── */
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let timer;
        const onScroll = () => {
            isScrolling.current = true;
            clearTimeout(timer);
            timer = setTimeout(() => {
                isScrolling.current = false;
                // Find which card is closest to centre
                const trackCentre = track.scrollLeft + track.clientWidth / 2;
                let closest = 0;
                let minDist = Infinity;
                cardRefs.current.forEach((card, i) => {
                    if (!card) return;
                    const cardCentre = card.offsetLeft + card.offsetWidth / 2;
                    const dist = Math.abs(cardCentre - trackCentre);
                    if (dist < minDist) { minDist = dist; closest = i; }
                });
                setCurrent(closest);
            }, 80);
        };

        track.addEventListener('scroll', onScroll, { passive: true });
        return () => { track.removeEventListener('scroll', onScroll); clearTimeout(timer); };
    }, []);

    /* ── Button navigation ── */
    const prev = useCallback(() => {
        const n = (current - 1 + videos.length) % videos.length;
        setCurrent(n);
        scrollToIndex(n);
    }, [current, scrollToIndex]);

    const next = useCallback(() => {
        const n = (current + 1) % videos.length;
        setCurrent(n);
        scrollToIndex(n);
    }, [current, scrollToIndex]);

    const goTo = useCallback((i) => {
        setCurrent(i);
        scrollToIndex(i);
    }, [scrollToIndex]);

    /* ── Keyboard ── */
    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [prev, next]);

    /* ── Modal lifecycle ── */
    useEffect(() => {
        let timer;
        if (isModalOpen) {
            setShouldRenderModal(true);
            document.body.style.overflow = 'hidden';
            timer = window.setTimeout(() => setIsModalVisible(true), 30);
        } else {
            setIsModalVisible(false);
            document.body.style.overflow = '';
            timer = window.setTimeout(() => setShouldRenderModal(false), 1500);
        }
        return () => window.clearTimeout(timer);
    }, [isModalOpen]);

    useEffect(() => {
        window.addEventListener('openContactModal', openModal);
        return () => {
            window.removeEventListener('openContactModal', openModal);
            document.body.style.overflow = '';
        };
    }, []);

    /* ── Modal JSX ── */
    const modal = shouldRenderModal
        ? createPortal(
              <div
                  className={`fixed left-0 right-0 top-0 bottom-0 z-[9999] flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-[1500ms] md:duration-700 ${isModalVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  style={{ height: '100dvh', minHeight: '100dvh', paddingTop: 'env(safe-area-inset-top)' }}
                  onClick={(e) => { if (e.target === e.currentTarget && window.innerWidth < 768) closeModal(); }}
              >
                  <div
                      className={`relative w-full md:w-[500px] md:max-w-[90vw] h-[calc(100dvh-env(safe-area-inset-top))] md:h-auto max-h-[calc(100dvh-env(safe-area-inset-top))] md:max-h-[90vh] overflow-y-auto overscroll-contain bg-card border border-border luxury-shadow rounded-t-2xl md:rounded-2xl px-6 pt-6 pb-[calc(env(safe-area-inset-bottom)+32px)] md:pb-8 transition-all duration-[1500ms] md:duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:ease-out will-change-transform ${isModalVisible ? 'translate-y-0 md:opacity-100 md:scale-100' : 'translate-y-full md:translate-y-8 md:opacity-0 md:scale-95'}`}
                      onClick={(e) => e.stopPropagation()}
                  >
                      <div className="md:hidden flex justify-center mb-4"><div className="w-10 h-1 bg-border rounded-full" /></div>
                      <button type="button" onClick={closeModal} className="absolute top-4 right-4 z-10 text-text-secondary hover:text-foreground smooth-transition"><Icon name="X" size={24} /></button>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground font-serif mb-6 pr-8">Bezpłatna wycena</h3>
                      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
                          <div><label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1">Imię</label><input required type="text" className="w-full px-4 py-2 text-sm bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary smooth-transition" /></div>
                          <div><label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1">Email</label><input required type="email" className="w-full px-4 py-2 text-sm bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary smooth-transition" /></div>
                          <div><label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1">Twoje auto</label><input required type="text" placeholder="np. BMW Seria 3, 2020" className="w-full px-4 py-2 text-sm bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary smooth-transition" /></div>
                          <div><label className="block text-xs sm:text-sm font-medium text-text-secondary mb-1">Co chcesz umyć i dodatkowe pytania</label><textarea required rows="4" className="w-full px-4 py-2 text-sm bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary smooth-transition" /></div>
                          <div className="pt-6"><Button type="submit" className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold py-3">Wyślij zapytanie</Button></div>
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
                <div className="text-center mb-14">
                    <div className="lux-divider mb-6" />
                    <h2 className="section-heading">Efekty naszej pracy</h2>
                    <p className="section-subheading">
                        Każda realizacja to widoczna różnica. Zobaczysz ją na własne oczy.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6">

                    {/* Counter */}
                    <p className="text-text-secondary text-sm font-sans tracking-widest uppercase">
                        {String(current + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
                    </p>

                    {/* ─────────────────────────────────────────────────
                        Scroll-snap track
                        • overflow-x scroll, hidden scrollbar
                        • scroll-snap-type: x mandatory  → one snap per swipe
                        • padding centres first/last card in the viewport
                    ───────────────────────────────────────────────── */}
                    <div
                        ref={trackRef}
                        className="w-full"
                        style={{
                            overflowX: isMobile ? 'scroll' : 'hidden',
                            scrollSnapType: isMobile ? 'x mandatory' : 'none',
                            WebkitOverflowScrolling: 'touch',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            paddingLeft:  `calc(50% - ${CARD_W / 2}px)`,
                            paddingRight: `calc(50% - ${CARD_W / 2}px)`,
                            scrollPaddingInline: `calc(50% - ${CARD_W / 2}px)`,
                        }}
                    >
                        <div
                            className="flex items-center"
                            style={{ gap: GAP, width: 'max-content' }}
                        >
                            {videos.map((video, i) => {
                                const isAct = i === current;
                                return (
                                    <div
                                        key={video.id}
                                        ref={(el) => (cardRefs.current[i] = el)}
                                        onClick={() => !isAct && goTo(i)}
                                        style={{
                                            scrollSnapAlign: 'center',
                                            flexShrink: 0,
                                            width:   `${CARD_W}px`,
                                            height:  isAct ? '520px' : '390px',
                                            opacity: isAct ? 1 : 0.38,
                                            transform: isAct ? 'scale(1)' : 'scale(0.92)',
                                            transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                                            cursor: isAct ? 'default' : 'pointer',
                                        }}
                                    >
                                        <VideoCard
                                            video={video}
                                            isActive={isAct}
                                            isMuted={isMuted}
                                            onMuteToggle={() => setIsMuted((m) => !m)}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Dot indicators */}
                    <div className="flex gap-2">
                        {videos.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`rounded-full smooth-transition ${
                                    i === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-border hover:bg-primary/50'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Prev / Next buttons (always visible) */}
                    <div className="flex gap-4">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary smooth-transition luxury-shadow"
                        >
                            <Icon name="ChevronLeft" size={22} />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary smooth-transition luxury-shadow"
                        >
                            <Icon name="ChevronRight" size={22} />
                        </button>
                    </div>
                </div>

                {/* CTA */}
                {isNewUser && (
                    <div className="mt-16 text-center">
                        <Button variant="default" size="xl" onClick={openModal}
                            className="bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-12 py-4 text-lg border border-zinc-700">
                            Bezpłatna wycena
                        </Button>
                    </div>
                )}
            </div>

            {modal}
        </section>
    );
};

export default BeforeAfterSection;
