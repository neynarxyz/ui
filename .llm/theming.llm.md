# Theming

@neynar/ui theming system using CSS custom properties and Tailwind CSS.

## Quick Start

**Important:** Styles must be imported via CSS `@import`, not JS imports. This is because the CSS uses `@import "tailwindcss"` which requires Tailwind CSS v4 processing.

```css
/* In your global CSS file (e.g., globals.css, index.css) */
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/purple-dawn";
```

Then import the CSS file in your app entry:

```tsx
// main.tsx or layout.tsx
import "./index.css";  // or "./globals.css"
```

**Prerequisite:** Tailwind CSS v4 must be configured. See [llms.txt](../llms.txt) for Vite/Next.js setup.

## Concepts

- **Theme** = Visual aesthetic (purple-dawn, first-light) - imported via CSS
- **Color Mode** = Light or dark variant - controlled at runtime via `.dark` class

## Available Themes

| Theme | Import | Description |
|-------|--------|-------------|
| Purple Dawn | `@neynar/ui/themes/purple-dawn` | Default. Elegant translucent surfaces with purple tint |
| First Light | `@neynar/ui/themes/first-light` | Hand-drawn sketch aesthetic with wobbly edges |

## Architecture

### base.css (Infrastructure)

Shared by all themes. Contains:
- Tailwind CSS imports (`tailwindcss`, `tw-animate-css`)
- `@theme` block mapping CSS variables to Tailwind utilities
- `@source` directive for component class scanning
- Base layer styles (borders, body background)
- Surface blur rules for overlay components via `[data-slot]` selectors

**Do NOT import base.css directly.** Always import a theme.

### Theme Files

Each theme defines CSS custom properties for:
- Colors (background, foreground, semantic colors)
- Typography (font-family)
- Spacing (radius, surface-blur)
- Both light (`:root`) and dark (`.dark`) modes

## CSS Variables

### Core Colors

| Variable | Usage |
|----------|-------|
| `--background` | Page background |
| `--foreground` | Default text |
| `--card` / `--card-foreground` | Card surfaces |
| `--popover` / `--popover-foreground` | Dropdown/dialog surfaces |
| `--primary` / `--primary-foreground` | Primary buttons, links |
| `--secondary` / `--secondary-foreground` | Secondary actions |
| `--muted` / `--muted-foreground` | Subtle backgrounds, helper text |
| `--subtle-foreground` | Even lighter text (40% opacity) |
| `--accent` / `--accent-foreground` | Hover states |
| `--border` | Border colors |
| `--input` | Input borders |
| `--ring` | Focus ring |

### Semantic Colors

| Variable | Usage |
|----------|-------|
| `--destructive` | Errors, delete actions |
| `--success` | Success states |
| `--warning` | Warning states |
| `--info` | Informational states |

### Chart Colors

`--chart-1` through `--chart-5` for data visualization.

### Sidebar Colors

`--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-primary-foreground`, `--sidebar-accent`, `--sidebar-accent-foreground`, `--sidebar-border`, `--sidebar-ring`

### Theme-Specific Variables

| Variable | Theme | Usage |
|----------|-------|-------|
| `--surface-blur` | All | Backdrop blur amount (12px default, 4px for First Light) |
| `--font-family` | All | Primary font family |
| `--radius` | All | Border radius base (0.625rem default, 0 for First Light) |
| `--first-light-shadow` | First Light | Offset shadow effect (3px 3px) |
| `--first-light-shadow-hover` | First Light | Hover shadow (2px 2px) |
| `--first-light-shadow-active` | First Light | Active/pressed shadow (0px 0px) |

## Radius Utilities

The `--radius` variable is used to calculate multiple radius sizes via `@theme inline`:

```css
--radius-sm: calc(var(--radius) - 4px);
--radius-md: calc(var(--radius) - 2px);
--radius-lg: var(--radius);
--radius-xl: calc(var(--radius) + 4px);
--radius-2xl: calc(var(--radius) + 8px);
--radius-3xl: calc(var(--radius) + 12px);
--radius-4xl: calc(var(--radius) + 16px);
```

## Dark Mode

Add `.dark` class to `<html>` or a parent element:

```tsx
<html className="dark">
```

Themes define both light (`:root`) and dark (`.dark`) variants.

### Setup with ColorModeInitializer

To prevent flash of incorrect color mode:

```tsx
import { ColorModeInitializer } from "@neynar/ui/color-mode";

<html suppressHydrationWarning>
  <head>
    <ColorModeInitializer />
  </head>
  <body>{children}</body>
</html>
```

### Color Mode API

```tsx
// Get current mode
const isDark = document.documentElement.classList.contains('dark');

// Set mode programmatically
document.documentElement.classList.remove('light', 'dark');
document.documentElement.classList.add('dark');

// Persist preference
document.cookie = 'color-mode={"preference":"dark","mode":"dark"}; path=/; max-age=31536000';
```

## Runtime Theme Switching

For Storybook or dynamic switching, add theme class to `<html>`:

```tsx
// Switch to First Light theme
document.documentElement.classList.add("theme-first-light")
document.documentElement.classList.remove("theme-purple-dawn")

// Switch to Purple Dawn theme
document.documentElement.classList.add("theme-purple-dawn")
document.documentElement.classList.remove("theme-first-light")
```

## Purple Dawn Theme

The default theme with elegant translucent surfaces.

### Characteristics

- **Font**: Figtree Variable (sans-serif)
- **Radius**: 0.625rem (10px)
- **Surface Blur**: 12px
- **Color Tint**: Purple (hue 290)
- **Surface Opacity**: 75% for cards and popovers

### Light Mode Colors

```css
--background: oklch(0.96 0.06 290);      /* Light purple-tinted white */
--foreground: oklch(0.18 0.08 290);      /* Dark purple-tinted black */
--card: oklch(0.93 0.08 290 / 75%);      /* Translucent purple */
--primary: oklch(0.3 0.09 290);          /* Dark purple */
--border: oklch(0.18 0.08 290 / 20%);    /* 20% opacity border */
```

### Dark Mode Colors

```css
--background: oklch(0.145 0.02 290);     /* Very dark purple */
--foreground: oklch(0.985 0.01 290);     /* Near-white */
--card: oklch(0.205 0.03 290 / 75%);     /* Translucent dark purple */
--primary: oklch(0.87 0.02 290);         /* Light purple */
--border: oklch(0.985 0.01 290 / 15%);   /* 15% opacity border */
```

## First Light Theme

Hand-drawn wireframe aesthetic with wobbly SVG filters.

### Setup

First Light requires an SVG filter component for the wobbly edge effect:

```tsx
import "@neynar/ui/themes/first-light"
import { FirstLightFilters } from "@neynar/ui/first-light"

// Add once in your root layout
export function Layout({ children }) {
  return (
    <>
      <FirstLightFilters />
      {children}
    </>
  )
}
```

### Characteristics

- **Font**: Architects Daughter (handwriting)
- **Radius**: 0 (sharp corners)
- **Surface Blur**: 4px (minimal)
- **Color Style**: High contrast black/white with strong borders
- **Special Effect**: SVG turbulence filter for wobbly edges

### Light Mode (Paper)

```css
--background: #fafaf8;                   /* Warm white paper */
--foreground: #1a1a1a;                   /* Pencil black */
--border: rgba(0, 0, 0, 0.7);            /* Strong black border */
--accent: #fff3b0;                       /* Highlighter yellow */
```

### Dark Mode (Chalkboard)

```css
--background: #1e2a1e;                   /* Green-tinted chalkboard */
--foreground: #e8e8e8;                   /* Chalk white */
--border: rgba(255, 255, 255, 0.6);      /* White chalk border */
--accent: #e8d44d;                       /* Yellow chalk */
```

### First Light Utility Classes

| Class | Effect |
|-------|--------|
| `.first-light-paper` | Grid paper background (20px grid) |
| `.first-light-lined` | Lined paper background (28px lines) |
| `.first-light-highlight` | Yellow highlighter effect |
| `.first-light-underline` | Hand-drawn underline (slightly rotated) |
| `.first-light-scribble` | Dashed underline effect |
| `.first-light-light` | Lighter wobble filter intensity |
| `.first-light-heavy` | Heavier wobble filter intensity |

### SVG Filter Details

The `FirstLightFilters` component provides three filter intensities:

| Filter ID | Base Frequency | Octaves | Scale | Use Case |
|-----------|----------------|---------|-------|----------|
| `#first-light-filter` | 0.015 | 2 | 1.5 | Default wobble |
| `#first-light-filter-light` | 0.006 | 1 | 0.4 | Subtle wobble |
| `#first-light-filter-heavy` | 0.012 | 3 | 1.5 | Pronounced wobble |

## Frosted Glass Effect

Cards, popovers, dialogs, sheets, and menus use translucent backgrounds with backdrop blur:

- **Surface Opacity**: 75% on `--card` and `--popover`
- **Backdrop Blur**: Via `--surface-blur` variable (applied to `[data-slot]` elements)
- **Transparent Borders**: 10-20% opacity

Components that receive the blur effect (via `base.css`):
- `[data-slot="card"]`
- `[data-slot="popover-content"]`
- `[data-slot="hover-card-content"]`
- `[data-slot="dialog-content"]`
- `[data-slot="alert-dialog-content"]`
- `[data-slot="sheet-content"]`
- `[data-slot="drawer-content"]`
- `[data-slot="dropdown-menu-content"]`
- `[data-slot="context-menu-content"]`
- `[data-slot="menubar-content"]`
- `[data-slot="navigation-menu-popup"]`
- `[data-slot="combobox-content"]`
- `[data-slot="select-content"]`
- `[data-slot="command"]`

## Creating Custom Themes

1. Create a new CSS file importing base.css
2. Define CSS variables in `:root` and `.dark`
3. Optionally add `.theme-{name}` selector for runtime switching

```css
@import "../base.css";

:root,
html.theme-custom {
  --font-family: "Inter", sans-serif;
  --radius: 0.5rem;
  --surface-blur: 8px;
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.1 0 0);
  /* ... rest of variables */
}

.dark,
html.theme-custom.dark {
  --background: oklch(0.1 0 0);
  --foreground: oklch(0.98 0 0);
  /* ... dark mode overrides */
}
```

## Color Format

Themes use **oklch()** for perceptually uniform colors:

```css
--primary: oklch(0.5 0.18 290);
/*              L    C    H
                |    |    +-- Hue (0-360)
                |    +------- Chroma (0-0.37)
                +------------ Lightness (0-1)
*/
```

Benefits:
- Consistent perceived brightness across hues
- Easy to create harmonious palettes
- Supports relative color syntax for derived colors

### Relative Color Syntax

First Light theme uses relative color syntax for toast colors:

```css
--success-bg: oklch(from var(--success) 0.92 0.05 h / 90%);
--success-text: oklch(from var(--success) 0.25 c h);
```

This derives new colors from the base `--success` color, preserving hue while adjusting lightness and chroma.

## Using Theme Tokens in Tailwind

All CSS variables are mapped to Tailwind utilities via `@theme inline` in base.css:

```tsx
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground hover:bg-accent">
    Click
  </button>
</div>
```

Available color utilities: `bg-{token}`, `text-{token}`, `border-{token}`, etc.

## Customization

Override any token in your CSS:

```css
:root {
  --primary: oklch(0.6 0.25 260);  /* Custom purple */
  --radius: 0.5rem;                 /* Smaller corners */
}

.dark {
  --primary: oklch(0.7 0.2 260);
}
```
