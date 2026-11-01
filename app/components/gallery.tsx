"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowDownRight, ArrowLeft, ArrowRight, Instagram, X } from "lucide-react";
import { galleryImages } from "@/lib/gallery";

const previewImages = galleryImages.slice(0, 4);

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const close = () => setSelected(null);
  const next = () => setSelected((index) => index === null ? null : (index + 1) % previewImages.length);
  const previous = () => setSelected((index) => index === null ? null : (index - 1 + previewImages.length) % previewImages.length);

  return (
    <>
      <div className="gallery-grid">
        {previewImages.map((image, index) => (
          <button
            type="button"
            className={`gallery-card gallery-card-${index + 1}`}
            key={image.id}
            onClick={() => setSelected(index)}
            aria-label={`View image: ${image.title}`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 80vw, 25vw" />
            <span className="gallery-card-caption">
              <span>{image.title}</span>
              <ArrowDownRight size={18} />
            </span>
          </button>
        ))}
      </div>

      <div className="gallery-footer">
        <span>Moments that make us</span>
        <div className="gallery-footer-links">
          <Link className="text-link" href="/gallery">View full gallery <ArrowRight size={16} /></Link>
          <a className="text-link" href="https://www.instagram.com/kurukshetrawomenentrepreneurs/" target="_blank" rel="noreferrer">
            Follow on Instagram <Instagram size={16} />
          </a>
        </div>
      </div>

      {selected !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="KWE photo viewer" onClick={close}>
          <button className="lightbox-close" type="button" onClick={close} aria-label="Close photo"><X size={22} /></button>
          <button className="lightbox-nav lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Previous photo"><ArrowLeft size={20} /></button>
          <div className="lightbox-image" onClick={(event) => event.stopPropagation()}>
            <Image src={previewImages[selected].src} alt={previewImages[selected].alt} fill sizes="90vw" />
            <p>{previewImages[selected].title}</p>
          </div>
          <button className="lightbox-nav lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Next photo"><ArrowRight size={20} /></button>
        </div>
      )}
    </>
  );
}
