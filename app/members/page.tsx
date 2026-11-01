import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import EventAnnouncementBar from "@/app/components/event-announcement-bar";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";
import { members, type MemberSocialPlatform } from "@/lib/members";

export const metadata = {
  title: "KWE Members | Kurukshetra Women Entrepreneurs",
  description: "Meet the women entrepreneurs, founders and leaders who are part of the KWE community.",
};

const socialIcons: Record<MemberSocialPlatform, LucideIcon> = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  youtube: Youtube,
};

export default function MembersPage() {
  return (
    <main className="inner-page">
      <EventAnnouncementBar />
      <SiteHeader />

      <section className="directory-hero members-hero">
        <div className="shell directory-hero-content">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-mark" /> THE PEOPLE BEHIND KWE</p>
          <h1>Meet the women <em>who move us forward.</em></h1>
          <p>Founders, business owners and leaders building meaningful work, stronger networks and new possibilities.</p>
          <span className="directory-hero-rule" />
        </div>
      </section>

      <section className="directory-section section-pad">
        <div className="shell">
          <div className="directory-section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-mark" /> KWE MEMBER DIRECTORY</p>
              <h2>Meet our <em>members.</em></h2>
            </div>
            <p>Discover the people and businesses that make our community what it is.</p>
          </div>

          {members.length > 0 ? (
            <div className="member-directory-grid">
              {members.map((member) => (
                <article className="member-card" key={member.id}>
                  <div className="member-card-photo">
                    <Image src={member.image} alt={member.imageAlt} fill sizes="(max-width: 650px) 90vw, (max-width: 1000px) 45vw, 33vw" />
                    <span className="member-card-photo-label">KWE MEMBER</span>
                  </div>
                  <div className="member-card-content">
                    <div className="member-card-heading">
                      <div>
                        <h3>{member.name}</h3>
                        <p>{member.role} · {member.business}</p>
                      </div>
                      {member.location && <span className="member-location"><MapPin size={13} /> {member.location}</span>}
                    </div>
                    <p className="member-card-bio">{member.bio}</p>
                    <div className="member-socials" aria-label={`${member.name} social links`}>
                      {member.socials.map((social) => {
                        const Icon = socialIcons[social.platform];
                        return (
                          <a key={social.platform} href={social.href} target="_blank" rel="noreferrer" aria-label={`${member.name} on ${social.platform}`}>
                            <Icon size={17} />
                            <span>{social.label}</span>
                            <ArrowUpRight size={13} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="directory-empty-state">
              <h3>Member stories are coming soon.</h3>
              <p>We are preparing the KWE member directory. Please check back soon.</p>
            </div>
          )}

          <div className="directory-add-member">
            <div>
              <span>ARE YOU PART OF KWE?</span>
              <h3>Your story belongs in this community.</h3>
              <p>Connect with the KWE team to share your profile and public business links.</p>
            </div>
            <Link href="/#join" className="button button-primary">Connect with KWE <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
