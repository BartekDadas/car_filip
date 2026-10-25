import React from 'react';

// detailed (podstrona usługi): każde zdjęcie w naturalnych proporcjach — bez przycinania.
// uniform (kafelki na stronie głównej): całe pole zdjęć ma stały kształt 8:5 (dwa zdjęcia po ~4:5).
//   Zwykłe zdjęcia wypełniają pole; kolaże przed/po ("fit": "contain") są pokazane w całości
//   na rozmytym tle z tego samego pliku (bez dodatkowego pobierania, bez przycinania).
export default function ServiceGallery({ images, detailed = false, uniform = false }) {
  if (uniform) {
    const single = images.length === 1;
    return (
      <div className={`grid aspect-[8/5] gap-1.5 bg-background ${single ? 'grid-cols-1' : 'grid-cols-2'}`}>
        {images.map((image) => (
          <a key={image.src} href={image.src} target="_blank" rel="noopener noreferrer"
            aria-label={`${image.alt} — otwórz pełne zdjęcie`}
            className={`group relative block min-w-0 h-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-2px]`}>
            {image.fit === 'contain' && (
              <img src={image.src} alt="" aria-hidden="true" loading="lazy" decoding="async"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl brightness-50" />
            )}
            <img src={image.src} alt={image.alt} width={image.width} height={image.height}
              loading="lazy" decoding="async"
              className={`absolute inset-0 w-full h-full ${image.fit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-500 group-hover:scale-[1.03]`} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid items-start gap-2 bg-background ${images.length > 1 ? (detailed ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2') : 'grid-cols-1'}`}>
      {images.map((image) => (
        <a key={image.src} href={image.src} target="_blank" rel="noopener noreferrer"
          aria-label={`${image.alt} — otwórz pełne zdjęcie`}
          className="block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-2px]">
          <img src={image.src} alt={image.alt} width={image.width} height={image.height}
            loading="lazy" decoding="async" className="block w-full h-auto" />
        </a>
      ))}
    </div>
  );
}
