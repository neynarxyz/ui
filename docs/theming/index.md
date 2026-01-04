# Theming Guide

@neynar/ui provides a comprehensive theming system built on CSS custom properties and Tailwind CSS v4. This guide covers everything from basic setup to advanced customization.

## Terminology

- **Theme** = Visual aesthetic (e.g., purple-dawn, first-light) - imported via CSS
- **Color Mode** = Light or dark variant of any theme - controlled at runtime

## Quick Start

### 1. Import Styles + Theme in Your CSS

Import both the base infrastructure and your chosen theme:

```css
/* app/globals.css or src/index.css */
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/purple-dawn";

/* Or for hand-drawn style */
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/first-light";
```

### 2. Add the Color Mode Initializer

The `ColorModeInitializer` component prevents flash of unstyled content (FOUC) by applying the user's preferred color mode before the page renders:

```tsx
// app/layout.tsx
import { ColorModeInitializer } from "@neynar/ui/color-mode";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorModeInitializer />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 3. Add Color Mode Toggle (Optional)

Allow users to switch between light, dark, and system color modes:

```tsx
import { ColorModeToggle } from "@neynar/ui/color-mode";

function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1>My App</h1>
      <ColorModeToggle />
    </header>
  );
}
```

## How Color Mode Works

### Detection Order

1. **Cookie** - User's saved preference (persists across sessions)
2. **System** - OS/browser preference (`prefers-color-scheme`)
3. **Default** - Falls back to light mode

### Storage

- Color mode preference is stored in a cookie named `color-mode`
- Cookie is HTTP-only safe and works with SSR
- Valid values: `light`, `dark`, `system`

## CSS Custom Properties

@neynar/ui uses OKLCH color space for perceptually uniform colors. All color values are defined as CSS custom properties:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0 / 80%);
  --primary: oklch(0.205 0 0);
  --border: oklch(0 0 0 / 10%);
  /* ... more colors */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0 / 80%);
  --primary: oklch(0.87 0 0);
  --border: oklch(1 0 0 / 10%);
  /* ... more colors */
}
```

### Available Color Tokens

| Token | Usage |
|-------|-------|
| `--background` | Page background |
| `--foreground` | Primary text color |
| `--card` | Card backgrounds |
| `--card-foreground` | Card text |
| `--popover` | Popover/dropdown backgrounds |
| `--popover-foreground` | Popover text |
| `--primary` | Primary actions, buttons |
| `--primary-foreground` | Text on primary backgrounds |
| `--secondary` | Secondary actions |
| `--secondary-foreground` | Text on secondary backgrounds |
| `--muted` | Muted backgrounds |
| `--muted-foreground` | Muted text, placeholders |
| `--accent` | Accent highlights |
| `--accent-foreground` | Text on accent backgrounds |
| `--destructive` | Error states, destructive actions |
| `--destructive-foreground` | Text on destructive backgrounds |
| `--border` | Border colors |
| `--input` | Input borders |
| `--ring` | Focus rings |

### Neynar Custom Tokens

Beyond the standard shadcn/ui tokens, @neynar/ui adds these custom tokens:

| Token | Default | Usage |
|-------|---------|-------|
| `--surface-blur` | `12px` | Backdrop blur for glass surfaces |
| `--success` | `oklch(0.55 0.18 145)` | Success states, positive feedback |
| `--warning` | `oklch(0.65 0.18 65)` | Warning states, caution |
| `--info` | `oklch(0.55 0.18 230)` | Informational states |
| `--subtle-foreground` | `oklch(0.45 0 0)` | Very muted text (placeholders, hints) |

### Frosted Surfaces

Cards, popovers, dialogs, sheets, drawers, and menus use a glass effect by default:

- **75% opacity backgrounds** — `--card` and `--popover` include transparency
- **Backdrop blur** — Controlled by `--surface-blur` token (default 12px)
- **Transparent borders** — `--border` uses 10% opacity

To customize the glass effect:

```css
:root {
  /* More opaque, less blur */
  --card: oklch(1 0 0 / 95%);
  --surface-blur: 4px;

  /* Or disable blur entirely */
  --surface-blur: 0;
}
```

## Visual Themes

@neynar/ui ships with multiple visual themes. Always import `@neynar/ui/styles` first, then your chosen theme.

### Available Themes

| Theme | Import | Description |
|-------|--------|-------------|
| **Purple Dawn** | `@neynar/ui/themes/purple-dawn` | Elegant with subtle purple tint (default) |
| **First Light** | `@neynar/ui/themes/first-light` | Hand-drawn wireframe aesthetic |

### Purple Dawn (Default)

```css
/* app/globals.css */
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/purple-dawn";
```

Features:
- **Purple-tinted dark mode** — Subtle purple hues in dark mode backgrounds
- **Translucent surfaces** — 75% opacity cards with backdrop blur
- **Smooth corners** — Configurable via `--radius`
- **Figtree font** — Modern, readable sans-serif

### First Light Theme

```css
/* app/globals.css */
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/first-light";
```

Then add the FirstLightFilters component to your layout:

```tsx
// app/layout.tsx
import { ColorModeInitializer } from "@neynar/ui/color-mode";
import { FirstLightFilters } from "@neynar/ui/first-light";
import "./globals.css";

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

Features:
- **Wobbly borders** — SVG turbulence filters applied to all components
- **Architects Daughter font** — handwritten feel throughout
- **Sharp corners** — `--radius: 0` for that sketch-pad look
- **Offset shadows** — hand-drawn depth effect
- **Paper/chalkboard palette** — warm paper in light mode, dark chalkboard in dark mode
- **Subtle transparency** — 90% opacity with 4px blur

### Theme Architecture

- **Styles** (`@neynar/ui/styles`) — Tailwind imports, @theme block, component styles
- **Theme** (`@neynar/ui/themes/*`) — Only CSS custom properties, scoped under `:root` and `.theme-X`

This separation enables:
- **Tree-shaking** — Themes contain no duplicate infrastructure
- **Runtime switching** — Toggle `.theme-X` classes for theme preview tools

```css
/* Themes only define variables, scoped to :root AND their own class */
:root,
.theme-purple-dawn {
  --radius: 0.625rem;
  --surface-blur: 12px;
  /* ... */
}

:root,
.theme-first-light {
  --radius: 0;
  --surface-blur: 4px;
  /* ... */
}
```

### Runtime Theme Switching

For tools that need to switch themes at runtime (like Storybook), import base once and both themes:

```css
/* Import in CSS */
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/purple-dawn";
@import "@neynar/ui/themes/first-light";
```

```tsx
// ThemeSwitcher.tsx
import { FirstLightFilters } from "@neynar/ui/first-light";

function ThemeSwitcher() {
  const [theme, setTheme] = useState<'purple-dawn' | 'first-light'>('purple-dawn');

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('theme-purple-dawn', 'theme-first-light');
    html.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <>
      {theme === 'first-light' && <FirstLightFilters />}
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="purple-dawn">Purple Dawn</option>
        <option value="first-light">First Light</option>
      </select>
    </>
  );
}
```

## Customizing Colors

### Override in Your CSS

Create a custom stylesheet that overrides the default colors:

```css
/* styles/theme.css */
:root {
  /* Custom brand colors */
  --primary: oklch(55% 0.25 260); /* Purple */
  --primary-foreground: oklch(98% 0 0);
}

.dark {
  --primary: oklch(70% 0.2 260);
  --primary-foreground: oklch(10% 0 0);
}
```

### Using Tailwind

All color tokens are available as Tailwind utilities:

```tsx
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Click me
  </button>
</div>
```

## Programmatic Color Mode Control

### Using the Color Mode API

```tsx
// Get current color mode
const isDark = document.documentElement.classList.contains('dark');

// Set color mode programmatically
document.documentElement.classList.remove('light', 'dark');
document.documentElement.classList.add('dark');
document.cookie = 'color-mode={"preference":"dark","mode":"dark"}; path=/; max-age=31536000';
```

### Color Mode Change Events

ColorModeToggle components dispatch a custom event when the color mode changes:

```tsx
useEffect(() => {
  const handleColorModeChange = (e: CustomEvent) => {
    console.log('Color mode changed to:', e.detail.mode);
  };

  window.addEventListener('color-mode-change', handleColorModeChange);
  return () => window.removeEventListener('color-mode-change', handleColorModeChange);
}, []);
```

## Best Practices

1. **Always use `suppressHydrationWarning`** on the `<html>` element to prevent hydration mismatches
2. **Place ColorModeScript in `<head>`** for earliest possible execution
3. **Use semantic color tokens** (`primary`, `destructive`) instead of raw colors
4. **Test both color modes** during development using the ColorModeToggle
5. **Consider reduced motion** - transitions respect `prefers-reduced-motion`

## Troubleshooting

### Flash of Wrong Color Mode

Make sure the `ColorModeInitializer` component is in the `<head>` and renders before any content.

### Color Mode Not Persisting

Check that cookies are enabled and not being blocked by browser settings.

### Colors Look Wrong

Ensure you're importing both base and a theme in your CSS:
```css
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/purple-dawn";
```

---

## Related Documentation

- [Next.js Integration](../integrations/nextjs.md) - Framework-specific setup
- [Vite Integration](../integrations/vite.md) - Vite + React setup
- [Component Reference](../components.md) - Full component catalog
- [Troubleshooting](../troubleshooting.md) - Common issues
