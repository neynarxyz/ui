# First Light Theme

A hand-drawn, wireframe aesthetic with wobbly SVG filters, handwritten fonts, and offset shadows. Named to complement Purple Dawn — representing the earliest glimmer of an idea before it's fully formed.

---

## Installation

### 1. Import Styles in Your CSS

```css
/* app/globals.css or src/index.css */
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/first-light";
```

### 2. Add the FirstLightFilters Component

The `<FirstLightFilters />` component renders SVG filters that create the wobbly edge effect. It must be included in your layout:

```tsx
// app/layout.tsx
import { ColorModeInitializer } from "@neynar/ui/color-mode";
import { FirstLightFilters } from "@neynar/ui/first-light";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorModeInitializer />
      </head>
      <body>
        <FirstLightFilters />
        {children}
      </body>
    </html>
  );
}
```

---

## Characteristics

| Feature | Description |
|---------|-------------|
| **Wobbly borders** | SVG turbulence filters on all components |
| **Architects Daughter** | Handwritten Google Font |
| **Sharp corners** | `--radius: 0` for sketch-pad look |
| **Offset shadows** | Hand-drawn depth effect |
| **Paper palette** | Warm cream (light) / chalkboard (dark) |
| **Subtle transparency** | 90% opacity with 4px blur |

---

## Visual Tokens

```css
:root,
.theme-first-light {
  /* No rounded corners */
  --radius: 0;

  /* Minimal blur */
  --surface-blur: 4px;

  /* Light mode: cream paper */
  --background: oklch(0.97 0.01 85);
  --foreground: oklch(0.2 0.02 50);

  /* First Light-style border */
  --border: oklch(0.3 0.02 50 / 30%);
}

.dark.theme-first-light {
  /* Dark mode: chalkboard */
  --background: oklch(0.18 0.02 160);
  --foreground: oklch(0.95 0.01 100);
}
```

---

## The FirstLightFilters Component

The `<FirstLightFilters />` component injects an SVG with turbulence filters:

```tsx
import { FirstLightFilters } from "@neynar/ui/first-light";

// Renders an invisible SVG with filter definitions
// Components reference these filters via CSS
<FirstLightFilters />
```

Without this component, the theme will work but edges will be straight instead of wobbly.

---

## When to Use

The First Light theme works well for:

- **Prototypes and wireframes** — Show work-in-progress
- **Playful applications** — Games, creative tools
- **Educational content** — Approachable, friendly feel
- **Differentiation** — Stand out from typical SaaS designs
