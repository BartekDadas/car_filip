import React from 'react';

// Let each source image determine its height: never crop photographs or collages.
export default function ServiceGallery({ images, detailed = false }) {
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
