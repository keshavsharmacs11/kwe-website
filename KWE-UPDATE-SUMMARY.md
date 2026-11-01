# KWE website visual refinement — v2

## Changes
- Added a dedicated brand and partner logo showcase to the homepage. The KWE logo is displayed as the first brand slide; confirmed sponsor logos are read from `lib/sponsors.ts` and displayed in a looping horizontal carousel.
- Until real sponsor logos are supplied, the showcase displays clearly-labelled partner invitation cards instead of invented sponsor identities.
- Refined the homepage photo gallery into an editorial, asymmetrical image layout with stronger image captions, hover treatment and responsive mobile layout.
- Improved typography, spacing, content contrast and card treatments for the story and experience sections.
- Preserved the existing KWE purple, plum, lavender, white and gold palette.
- Kept the dedicated `/members` and `/gallery` pages and existing homepage hero/navigation structure.

## Add confirmed sponsor logos
1. Place approved transparent PNG, SVG or WebP logo files in `public/images/sponsors/`.
2. Add entries to `lib/sponsors.ts` with the real name, logo path, and (if confirmed) website and tier.
3. The homepage carousel will display the sponsor logos automatically.

## Verification
- TypeScript check: `tsc --noEmit` passed.
- CSS brace balance checked.
- Production build should be run on the Windows development machine with `npm run build` before deployment.
