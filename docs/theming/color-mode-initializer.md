# ColorModeInitializer

A script component that prevents flash of unstyled content (FOUC) by applying the user's preferred color mode before the page renders.

---

## Usage

Add `ColorModeInitializer` to your root layout's `<head>`:

```tsx
// app/layout.tsx
import { ColorModeInitializer } from "@neynar/ui/color-mode";
import "./globals.css"; // Contains: @import "@neynar/ui/styles"; @import "@neynar/ui/themes/purple-dawn";

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

---

## How It Works

1. **Reads cookie** — Checks for saved `color-mode` preference
2. **Checks system** — Falls back to `prefers-color-scheme` media query
3. **Applies class** — Adds `dark` or `light` class to `<html>` element
4. **Runs inline** — Executes before page content renders (no FOUC)

---

## Important Notes

- **Must be in `<head>`** — The script needs to run before body content
- **Use `suppressHydrationWarning`** — Prevents React hydration mismatch warnings
- **Zero runtime cost** — Just an inline script, no React component overhead
- **Works with SSR** — Cookie-based for server-side rendering compatibility

---

## Cookie Format

The component reads/writes a cookie named `color-mode`:

```json
{
  "preference": "system" | "light" | "dark",
  "mode": "light" | "dark"
}
```

- `preference` — What the user selected
- `mode` — The resolved actual mode (for SSR)
