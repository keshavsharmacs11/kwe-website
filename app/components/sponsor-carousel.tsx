
import Image from "next/image";
import { sponsors } from "@/lib/sponsors";

export default function SponsorCarousel() {
  if (sponsors.length === 0) {
    return (
      <section
        id="sponsors"
        className="sponsor-strip-section"
        aria-label="KWE sponsors and partners"
      >
        <p className="sponsor-strip-heading">
          OUR SPONSORS & PARTNERS
        </p>
        <p className="sponsor-strip-empty">
          Our valued sponsors and partners will be featured here.
        </p>
      </section>
    );
  }

  return (
    <section
      id="sponsors"
      className="sponsor-strip-section"
      aria-label="KWE sponsors and partners"
    >
      <p className="sponsor-strip-heading">
        OUR SPONSORS & PARTNERS
      </p>

      <div className="sponsor-strip-window">
        <div className="sponsor-strip-track">
          {[0, 1, 2, 3].map((group) => (
            <div
              className="sponsor-strip-group"
              key={group}
              aria-hidden={group !== 0}
            >
              {sponsors.map((sponsor) => {
                const content = (
                  <>
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={120}
                      height={55}
                      className={`sponsor-strip-logo ${
                      sponsor.id === "kwe" ? "sponsor-strip-logo--kwe" : ""
                     }`}
                    />
                   <span className="sponsor-strip-name">
                   {sponsor.id === "kwe" ? "KWE" : sponsor.name}
                  </span>
                  </>
                );

                return sponsor.website ? (
                  <a
                    className="sponsor-strip-item"
                    href={sponsor.website}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={group === 0 ? undefined : -1}
                    key={`${group}-${sponsor.id}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    className="sponsor-strip-item"
                    key={`${group}-${sponsor.id}`}
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
