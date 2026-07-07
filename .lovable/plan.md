## Scope

Only touch `src/components/Footer.tsx` and `src/components/FloatingActions.tsx`. No design, color, typography, or layout changes elsewhere.

## Changes

### 1. `src/components/Footer.tsx`

**Company column** — Update the `cols` array so the Company entry only contains `About Rudra` (remove Talk to Us, Careers, Press). Explore + Vehicles columns stay unchanged.

**Copyright** — Replace the dynamic `© {new Date().getFullYear()} …` string with the exact literal:
`© 2026 Rudra Tours & Travels. Luxury Journeys Begin Here.`

**Social icons** — In the bottom-row icon list, remove `MessageCircle` and `Facebook`; keep only Instagram, and add a YouTube icon (lucide `Youtube`). Both:
- `target="_blank"`, `rel="noopener noreferrer"`
- Placeholder `href="[YOUTUBE_URL]"` / `href="[INSTAGRAM_URL]"`
- `aria-label="Visit YouTube"` / `aria-label="Visit Instagram"`
- Keep existing hover animation and icon sizing
- Centered in the bottom row

**Bottom-row layout** — Restructure into three vertically stacked, centered rows on all breakpoints, keeping current padding/border/typography:
```
© 2026 Rudra Tours & Travels. Luxury Journeys Begin Here.
        [YouTube]   [Instagram]
Designed and developed by [DIMISI LOGO]
```
Use `flex-col items-center gap-4` on the bottom container (replace the current `md:flex-row justify-between` split).

**DIMISI logo — make it visibly bigger and premium**
- Bump size from `h-4` to `h-8 md:h-10` (roughly 2–2.5× current) so it reads as a real brand mark.
- Keep transparent background, `object-contain`, no distortion.
- Add `loading="lazy"` and `decoding="async"` for performance.
- Keep the wrapping `<a href="https://dimisi.tech/" target="_blank" rel="noopener noreferrer" aria-label="Visit DIMISI website">`.
- Preserve spacing: `inline-flex items-center gap-2` around the "Designed and developed by" text + logo.

Header/top footer grid (brand block + Explore/Vehicles/Company) stays untouched aside from the Company links list.

### 2. `src/components/FloatingActions.tsx`

Raise the floating stack so it never overlaps the taller footer bottom row.
- Line 48: change `bottom-6` → `bottom-10 md:bottom-12` (≈40–48px), keep `right-4 md:right-5`, `z-[70]`, and the flex/gap classes.
- Line 112 (chat panel): adjust `bottom-[260px]` → `bottom-[300px]` so the panel still sits above the raised trigger buttons.
- No animation, z-index, or spacing-between-buttons changes.

## Non-goals

No changes to: footer background, colors, typography, borders, top footer columns' styling, brand block, contact links, navigation, other pages, or floating-button visuals/animations.

## Verification

- Visual check via preview at desktop + mobile widths that:
  - Bottom row shows three centered rows in the specified order.
  - DIMISI logo is clearly larger and crisp.
  - Only YouTube + Instagram icons remain, centered.
  - WhatsApp/chat buttons don't overlap footer content when scrolled to bottom.
- `tsgo --noEmit` clean.
