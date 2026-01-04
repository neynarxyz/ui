# First Light

SVG filter component that enables hand-drawn wobble effects for the First Light theme.

## Import

```tsx
import { FirstLightFilters } from "@neynar/ui/first-light"
```

## Usage

Render once in your root layout when using the First Light theme:

```tsx
// app/layout.tsx
import "@neynar/ui/themes/first-light";
import { FirstLightFilters } from "@neynar/ui/first-light";
import { ColorModeInitializer } from "@neynar/ui/color-mode";

export default function Layout({ children }) {
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

## Props

No props. Zero configuration.

## How It Works

Renders an invisible SVG containing `<filter>` definitions that create displacement effects using fractal noise. The First Light theme CSS references these filters via `filter: url(#first-light-filter)`.

Without this component, the theme works but edges are straight instead of wobbly.

## Filter Definitions

| Filter ID | Effect | Use Case |
|-----------|--------|----------|
| `#first-light-filter` | Standard wobble | Default, applied to most components |
| `#first-light-filter-light` | Subtle wobble | Barely noticeable, for delicate elements |
| `#first-light-filter-heavy` | Pronounced wobble | More dramatic hand-drawn effect |

### Filter Parameters

| Filter | Base Frequency | Octaves | Scale |
|--------|----------------|---------|-------|
| Standard | 0.015 | 2 | 1.5 |
| Light | 0.006 | 1 | 0.4 |
| Heavy | 0.012 | 3 | 1.5 |

## CSS Classes

The First Light theme provides utility classes to apply filters:

```tsx
// Apply heavier wobble
<Card className="first-light-heavy">...</Card>

// Apply lighter wobble
<Button className="first-light-light">Subtle</Button>
```

| Class | Effect |
|-------|--------|
| `.first-light-light` | Applies `#first-light-filter-light` |
| `.first-light-heavy` | Applies `#first-light-filter-heavy` |

## Technical Details

```tsx
// The component renders this (simplified):
<svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0 }}>
  <defs>
    <filter id="first-light-filter">
      <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" />
      <feDisplacementMap scale="1.5" xChannelSelector="R" yChannelSelector="G" />
    </filter>
    {/* + light and heavy variants */}
  </defs>
</svg>
```

- Uses `feTurbulence` for organic noise generation
- Uses `feDisplacementMap` to distort element edges
- Each filter uses different seed for variety
- Filter extends beyond element bounds (x="-3%" etc.) to avoid clipping

## Theme Integration

The First Light theme automatically applies filters to components via CSS:

```css
/* In first-light.css */
.theme-first-light [data-slot="card"],
.theme-first-light [data-slot="button"],
/* ... etc ... */ {
  filter: url(#first-light-filter);
}
```

## Performance

- SVG is hidden and takes no layout space
- Filters are GPU-accelerated in modern browsers
- Minimal memory footprint (single SVG with 3 filters)
- No runtime JavaScript after initial render

## Accessibility

- SVG has `aria-hidden="true"`
- Purely decorative - no impact on screen readers
- Does not affect content readability
- Motion-safe (no animation)

## Related

- [Theming](../theming.llm.md) - Full theming documentation
- First Light theme: `@neynar/ui/themes/first-light`
