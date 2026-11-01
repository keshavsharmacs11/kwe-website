"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { galleryImages, type GalleryCategory } from "@/lib/gallery";

const filters: Array<"All" | GalleryCategory> = ["All", "Community", "Events", "Highlights"];

export default function GalleryExplorer() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visibleImages = useMemo(
    () => activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeFilter),
    [activeFilter],
  );

  const close = () => setSelectedIndex(null);
  const showNext = () => setSelectedIndex((current) => current === null ? null : (current + 1) % visibleImages.length);
  const showPrevious = () => setSelectedIndex((current) => current === null ? null : (current - 1 + visibleImages.length) % visibleImages.length);

  useEffect(() => {
    if (selectedIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
    // The modal should bind keyboard controls only while a photo is open.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, visibleImages]);

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filter gallery images">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={activeFilter === filter ? "is-active" : ""}
            aria-pressed={activeFilter === filter}
            onClick={() => {
              setActiveFilter(filter);
              setSelectedIndex(null);
            }}
          >
            {filter}
            <span>{filter === "All" ? galleryImages.length : galleryImages.filter((image) => image.category === filter).length}</span>
          </button>
        ))}
      </div>

      <div className="gallery-explorer-grid">
        {visibleImages.map((image, index) => (
          <button
            className="gallery-explorer-card"
            key={image.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Open ${image.title}`}
          >
            <span className="gallery-explorer-image">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 30vw" />
              <span className="gallery-explorer-open"><ArrowRight size={18} /></span>
            </span>
            <span className="gallery-explorer-caption">
              <span>{image.category}</span>
              <strong>{image.title}</strong>
            </span>
          </button>
        ))}
      </div>

      {selectedIndex !== null && visibleImages[selectedIndex] && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="KWE gallery image viewer" onClick={close}>
          <button className="gallery-lightbox-close" type="button" onClick={close} aria-label="Close image"><X size={22} /></button>
          <button className="gallery-lightbox-arrow gallery-lightbox-previous" type="button" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous image"><ArrowLeft size={20} /></button>
          <div className="gallery-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <div className="gallery-lightbox-photo">
              <Image src={visibleImages[selectedIndex].src} alt={visibleImages[selectedIndex].alt} fill sizes="90vw" priority />
            </div>
            <div className="gallery-lightbox-caption">
              <span>{visibleImages[selectedIndex].category}</span>
              <strong>{visibleImages[selectedIndex].title}</strong>
            </div>
          </div>
          <button className="gallery-lightbox-arrow gallery-lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next image"><ArrowRight size={20} /></button>
        </div>
      )}
    </>
  );
}
