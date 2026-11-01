import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, MapPin } from "lucide-react";
import { members } from "@/lib/members";

export default function MemberSpotlight() {
  const member = members[0];
  if (!member) return null;

  const instagram = member.socials.find((social) => social.platform === "instagram");

  return (
    <section id="community" className="member-spotlight section-pad">
      <div className="shell member-spotlight-layout">
        <div className="member-spotlight-image">
          <Image
            src={member.image}
            alt={member.imageAlt}
            fill
            sizes="(max-width: 760px) 90vw, 43vw"
          />
          <span className="member-image-note">A KWE member story</span>
        </div>

        <div className="member-spotlight-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> MEET OUR MEMBERS</p>
          <h2>Women with stories. <em>Ideas with impact.</em></h2>
          <p className="body-copy">
            Get to know the founders, leaders and changemakers who make the KWE
            community stronger.
          </p>

          <div className="member-spotlight-profile">
            <span className="member-profile-kicker">FEATURED MEMBER</span>
            <h3>{member.name}</h3>
            <p>{member.role} · {member.business}</p>
            {member.location && (
              <span className="member-location"><MapPin size={14} /> {member.location}</span>
            )}
          </div>

          <div className="member-spotlight-actions">
            <Link href="/members" className="button button-primary">
              Explore members <ArrowUpRight size={16} />
            </Link>
            {instagram && (
              <a className="text-link" href={instagram.href} target="_blank" rel="noreferrer">
                <Instagram size={16} /> {instagram.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
