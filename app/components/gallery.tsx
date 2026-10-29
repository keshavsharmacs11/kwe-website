"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDownRight, ArrowLeft, ArrowRight, Instagram, X } from "lucide-react";

const images = [
  { src: "/images/community-women-1.jpg", alt: "Women entrepreneurs connecting at a KWE gathering", label: "The people" },
  { src: "/images/community-women-2.jpg", alt: "KWE community members sharing a moment", label: "The connections" },
  { src: "/images/community-women-3.jpg", alt: "Entrepreneurs taking part in a KWE event", label: "The energy" },
  { src: "/images/event-audience.jpg", alt: "A room full of women at a KWE community event", label: "The gathering" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const close = () => setSelected(null);
  const next = () => setSelected((index) => index === null ? null : (index + 1) % images.length);
  const previous = () => setSelected((index) => index === null ? null : (index - 1 + images.length) % images.length);

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button type="button" className={`gallery-card gallery-card-${index + 1}`} key={image.src} onClick={() => setSelected(index)} aria-label={`View image: ${image.label}`}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 80vw, 25vw" />
            <span className="gallery-card-caption"><span>{image.label}</span><ArrowDownRight size={18} /></span>
          </button>
        ))}
      </div>
      <div className="gallery-footer">
        <span>Moments that make us</span>
        <a className="text-link" href="https://www.instagram.com/kurukshetrawomenentrepreneurs/" target="_blank" rel="noreferrer">Follow on Instagram <Instagram size={16} /></a>
      </div>

      {selected !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="KWE photo viewer" onClick={close}>
          <button className="lightbox-close" type="button" onClick={close} aria-label="Close photo"><X size={22} /></button>
          <button className="lightbox-nav lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Previous photo"><ArrowLeft size={20} /></button>
          <div className="lightbox-image" onClick={(event) => event.stopPropagation()}>
            <Image src={images[selected].src} alt={images[selected].alt} fill sizes="90vw" />
            <p>{images[selected].label}</p>
          </div>
          <button className="lightbox-nav lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Next photo"><ArrowRight size={20} /></button>
        </div>
      )}
    </>
  );
}
