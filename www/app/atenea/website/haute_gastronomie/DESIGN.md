---
name: Haute Gastronomie
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4e453d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#80756c'
  outline-variant: '#d2c4b9'
  surface-tint: '#725a41'
  primary: '#725a41'
  on-primary: '#ffffff'
  primary-container: '#d9b99b'
  on-primary-container: '#604931'
  inverse-primary: '#e1c1a2'
  secondary: '#5e5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdb'
  on-secondary-container: '#63635f'
  tertiary: '#635d5a'
  on-tertiary: '#ffffff'
  tertiary-container: '#c5bdb9'
  on-tertiary-container: '#514c49'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcbd'
  primary-fixed-dim: '#e1c1a2'
  on-primary-fixed: '#291805'
  on-primary-fixed-variant: '#59422b'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#e9e1dc'
  tertiary-fixed-dim: '#cdc5c0'
  on-tertiary-fixed: '#1e1b18'
  on-tertiary-fixed-variant: '#4b4642'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  h1:
    fontFamily: Noto Serif
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  section-padding: 120px
  element-gap: 24px
---

## Brand & Style

This design system is anchored in the concept of "The Blank Canvas"—where the interface disappears to prioritize the artistry of the cuisine. It targets an ultra-high-net-worth audience that values discretion, restraint, and intentionality. The emotional response is one of tranquility and exclusivity.

The style is a marriage of **Minimalism** and **High-End Editorial**. It utilizes vast amounts of "white space" (rendered in ivory and cream) to create a sense of breathability. Every element is placed with mathematical precision, echoing the plating of a Michelin-starred dish. The aesthetic avoids heavy shadows or digital-first trends, opting instead for a flat, paper-like tactile quality that feels physical and permanent.

## Colors

The palette is a monochromatic exploration of light, using subtle shifts in temperature to create depth without contrast fatigue.

*   **Primary (Champagne Gold):** Used sparingly for interactive accents, icons, and signature flourishes. It should never be used for large surfaces.
*   **Secondary (Ivory/Cream):** The foundation of the UI. This replaces pure white for all main containers and background layers to provide warmth and a premium feel.
*   **Neutral (Deep Bronze/Charcoal):** Used for typography and iconography. We avoid pure #000000 to maintain the softness of the "light and airy" aesthetic.
*   **Surface White:** Reserved exclusively for high-light areas or to create a "clean" break between ivory sections.

## Typography

Typography is the primary vehicle for luxury in this design system. We utilize a high-contrast Serif for all editorial and heading elements to evoke the feeling of a printed menu.

The Sans-Serif (Manrope) is selected for its architectural clarity and is used at lighter weights (300/400) to maintain the airy feel. Letter spacing is increased for labels and captions to enhance readability and prestige. Headings should utilize "optical sizing" where possible, favoring tight tracking for large displays and standard tracking for sub-heads.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy with oversized margins. To evoke luxury, the design system utilizes "wasteful" spacing—intentionally large gutters and section padding that suggest the interface is not crowded or rushed.

A 12-column grid is used, but content typically occupies the central 8 columns to ensure a focused, editorial reading experience. Vertical rhythm is expansive; sections are separated by significant whitespace (120px+) to allow the eye to rest between pieces of information. Alignment is primarily centered or staggered (asymmetrical) to avoid the rigid look of standard SaaS platforms.

## Elevation & Depth

This design system rejects traditional drop shadows. Depth is communicated through **Tonal Layering** and **Low-Contrast Outlines**.

*   **Tonal Layering:** Objects "float" by sitting on a background that is 2-3% darker or warmer than the object itself (e.g., a pure white card on a cream background).
*   **Hairline Borders:** Interactive elements use 1px solid borders in a very light champagne or muted grey.
*   **Micro-shadows:** If a shadow is absolutely necessary for accessibility, it must be an ambient, highly diffused shadow with less than 5% opacity, using the primary champagne gold as a tint rather than black.

## Shapes

The shape language is dominated by **sharp geometry**. We use `roundedness: 1` (4px) only to take the "edge" off digital screens, making the interface feel refined rather than aggressive. 

For the most part, imagery and primary containers should remain perfectly sharp (0px) to mimic high-end stationery and architectural blueprints. Circular elements are used exclusively for small decorative accents or high-action buttons (like a "Book Now" floating action) to provide a soft counterpoint to the prevailing rectangular grid.

## Components

Components in this design system are understated and emphasize fine details:

*   **Buttons:** Primary buttons are either ghost-style with a 1px border or solid champagne with white text. They feature generous horizontal padding and use the `label-caps` typography style. Hover states are subtle, involving a slight shift in background tint rather than a scale effect.
*   **Inputs:** Minimalist underlines or 1px boxed fields. Labels are always positioned above the field in `label-caps`. 
*   **Cards:** Non-elevated. They are defined by their background color (White on Cream) and 1px hairline borders. Images within cards should have a subtle "zoom" effect on hover but no movement of the card itself.
*   **Navigation:** A centered, minimalist top bar. The active state is indicated by a simple 1px underline or a color shift to champagne gold.
*   **Specialty Components:** 
    *   *The Tasting Menu Slider:* A horizontal scroll component with high-resolution food photography and minimal text overlays.
    *   *Reservation Modal:* A full-screen, immersive overlay using an off-white backdrop with 95% opacity to maintain the airy aesthetic.