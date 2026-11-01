# Kurukshetra Women Entrepreneurs (KWE) website

A responsive Next.js homepage concept for Kurukshetra Women Entrepreneurs, built with TypeScript, React, and custom CSS using the KWE brand palette.

## Included

- Responsive navigation with a mobile menu
- Hero announcement carousel with two editable KWE announcements
- Own Your Spotlight 2026 event details and WhatsApp joining CTA
- Event/awards enquiry CTA routed to WhatsApp
- Conditional `LIVE NOW` state for a verified livestream
- Community, event experience, and photo gallery sections
- Click-to-expand gallery lightbox
- Floating WhatsApp action
- Locally stored logo and event imagery cropped from the assets supplied for this project
- Responsive styling for desktop, tablet, and mobile

## Requirements

- Node.js 20.9 or newer (Node 22 recommended)
- npm

## Run locally on Windows

1. Extract the ZIP to a folder, for example `D:\KWE-website`.
2. Ensure Node.js 20.9 or newer is installed (Node 22 is recommended).
3. Open that folder in VS Code.
4. Open Terminal → New Terminal.
5. Run:

   ```powershell
   npm install
   npm run dev
   ```

6. Open `http://localhost:3000` in your browser.

Alternatively, double-click `start-local.cmd` to install dependencies (if needed) and start the dev server.

For a production build:

```powershell
npm run build
npm run start
```

## Where to change content

### Event announcements and livestream state

Edit `lib/announcements.ts`.

- The first item is **Own Your Spotlight 2026**.
- The second item is the KWE Awards information slide.
- Edit the title, text, date, venue, image, and WhatsApp message in each item.
- The default status is `upcoming` or `announcement`.
- Only when a livestream is actually running should you set `status: "live"` and provide the real stream URL in `liveUrl`.

Example for a confirmed active stream:

```ts
status: "live",
liveUrl: "https://your-confirmed-live-stream-url",
```

Do not set the live state until KWE confirms the stream URL and that the stream is live.

### WhatsApp contact

The WhatsApp number is used in `app/components/site-header.tsx`, `app/components/announcement-slider.tsx`, and `app/page.tsx`. It is currently configured as `+91 82953 98406` (`918295398406` in the WhatsApp URL). Replace all occurrences if KWE provides another official number.

### Brand colors

Edit the CSS variables at the top of `app/globals.css`:

- Violet: `#9900E6`
- Pale pink: `#F7D8FF`
- White: `#FFFFFF`
- Charcoal: `#292929`
- Deep purple: `#2F003B`

### Images

Local images are in `public/images/`. Replace them with approved, high-resolution KWE event photos and member portraits when available. Use photos that KWE has permission to publish. Some current images are crops from the supplied event poster, so replace them with original high-resolution photos for the strongest production result.

### Instagram

The Instagram links currently point to:

`https://www.instagram.com/kurukshetrawomenentrepreneurs/`

#
## Members, sponsors and gallery content

### Add a member profile

Edit `lib/members.ts`. Add one object to the `members` array with a unique `id`, verified `name`, `role`, `business`, an approved portrait path under `public/images/`, a short approved bio, and any confirmed public social URLs. Supported social platforms are `instagram`, `linkedin`, `facebook`, and `youtube`. The Members page and homepage spotlight use this single source of data.

### Add a sponsor or partner logo

Place the approved logo file in `public/images/sponsors/`, then add its details to `lib/sponsors.ts`. Use transparent SVG, WebP or PNG files where possible. Add a `website` only when the partner has supplied or confirmed the URL. The homepage sponsor carousel does not invent placeholder sponsor brands; it displays a partnership enquiry panel until real logos are added.

### Add a gallery photograph

Place the approved image in `public/images/` and add an entry to `lib/gallery.ts`. Choose one category: `Community`, `Events`, or `Highlights`. The homepage preview and `/gallery` page use the same image list. Use descriptive alt text and images KWE has permission to publish.

### New website routes

- `/members` — member directory with profile photographs and public social links.
- `/gallery` — filtered photo gallery with image lightbox.

The homepage navigation and footer link to both pages. The top KWE updates bar also links to the member, gallery and sponsor sections.

## SEO and domain

Edit title, description and social metadata in `app/layout.tsx`. Add the confirmed production domain before deployment if required.

## Before production launch

- Confirm the WhatsApp contact number is official.
- Confirm event date, venue, and the precise joining/registration message.
- Replace any low-resolution poster crops with original event photographs where possible.
- Verify whether KWE Awards nominations are currently open before publishing any such claim.
- Add a verified livestream URL before switching a slide to `status: "live"`.
- Test all links and review the page on a real phone.
- Add analytics, consent messaging, a privacy policy, or an admin CMS only if KWE requires them.

## Current scope

This first delivery is a frontend landing page. It does not include a database, login, payment processing, a member admin panel, or automatic Instagram-feed integration. Joining currently opens WhatsApp, as requested. These can be added later if the confirmed requirements call for them.
