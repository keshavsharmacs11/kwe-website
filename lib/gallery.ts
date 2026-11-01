export type GalleryCategory = "Community" | "Events" | "Highlights";

export type KweGalleryImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
};

/** Current approved image assets supplied with the KWE project. */
export const galleryImages: KweGalleryImage[] = [
  {
    id: "community-01",
    src: "/images/community-women-1.jpg",
    alt: "A KWE community member taking part in a gathering",
    title: "Women who make the community",
    category: "Community",
  },
  {
    id: "community-02",
    src: "/images/community-women-2.jpg",
    alt: "A woman entrepreneur engaging with the KWE gathering",
    title: "Conversations that connect",
    category: "Community",
  },
  {
    id: "community-03",
    src: "/images/community-women-3.jpg",
    alt: "A KWE attendee sharing an enthusiastic moment",
    title: "The energy in the room",
    category: "Community",
  },
  {
    id: "event-audience",
    src: "/images/event-audience.jpg",
    alt: "A gathering of women at a KWE event",
    title: "A room full of possibility",
    category: "Events",
  },
  {
    id: "kwe-event",
    src: "/images/kwe-event-photo.jpg",
    alt: "Women raising their hands together at a KWE event",
    title: "Together, we move forward",
    category: "Events",
  },
  {
    id: "spotlight-poster",
    src: "/images/own-your-spotlight-poster.jpg",
    alt: "Own Your Spotlight KWE summit event poster",
    title: "Own Your Spotlight",
    category: "Highlights",
  },
];
