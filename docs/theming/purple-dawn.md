# Purple Dawn Theme

The default visual theme for @neynar/ui. Features elegant translucent surfaces with a subtle purple tint in dark mode.

---

## Installation

Import both base and theme in your CSS entry point:

```css
/* app/globals.css or src/index.css */
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/purple-dawn";
```

That's it! No additional setup required.

---

## Characteristics

| Feature | Description |
|---------|-------------|
| **Purple-tinted dark mode** | Subtle purple hues in dark mode backgrounds |
| **Translucent surfaces** | 75% opacity cards, popovers, and dialogs |
| **Backdrop blur** | 12px blur for frosted glass effect |
| **Smooth corners** | Configurable via `--radius` (default: 0.625rem) |
| **Figtree font** | Modern, readable sans-serif typeface |
| **OKLCH colors** | Perceptually uniform color space |

---

## Visual Tokens

```css
:root {
  /* Surface blur */
  --surface-blur: 12px;

  /* Border radius */
  --radius: 0.625rem;

  /* Card backgrounds (translucent) */
  --card: oklch(1 0 0 / 75%);

  /* Borders (semi-transparent) */
  --border: oklch(0 0 0 / 10%);
}

.dark {
  /* Subtle purple tint (hue 290) */
  --background: oklch(0.145 0.02 290);
  --card: oklch(0.205 0.03 290 / 75%);
  --border: oklch(0.6 0.06 290 / 20%);
}
```

---

## The Purple Tint

In dark mode, Purple Dawn adds a subtle purple chroma to background colors:

- **Background**: `oklch(0.145 0.02 290)` — Almost black with hint of purple
- **Cards/Popovers**: `oklch(0.205 0.03 290 / 75%)` — Slightly more purple, translucent
- **Secondary/Muted**: `oklch(0.26 0.035 290)` — Visible but not overwhelming
- **Accent**: `oklch(0.35 0.06 290)` — Most saturated background

The effect creates a sophisticated atmosphere while maintaining excellent readability.

---

## Customization

Override any token to adjust the effect:

```css
:root {
  /* More opaque, less blur */
  --card: oklch(1 0 0 / 95%);
  --surface-blur: 4px;

  /* Or disable blur entirely */
  --surface-blur: 0;
}

.dark {
  /* Increase or decrease the purple intensity */
  --background: oklch(0.145 0.03 290); /* More purple */
  --background: oklch(0.145 0.01 290); /* Less purple */
}
```

---

## When to Use

The Purple Dawn theme works well for:

- **Modern web applications** — Professional, polished look
- **Dashboard interfaces** — Cards and panels benefit from depth
- **Social applications** — The purple accent adds personality
- **Developer tools** — Sophisticated, focused aesthetic
