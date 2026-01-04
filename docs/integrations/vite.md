# Vite + React Integration

This guide covers integrating @neynar/ui with Vite-based React applications.

## Installation

```bash
npm install @neynar/ui
```

## Setup

### 1. Import Styles in index.css

```css
/* src/index.css */
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/purple-dawn";

/* Optional: Override theme variables */
:root {
  --primary: oklch(55% 0.25 260);  /* Custom purple */
  --radius: 0.5rem;                 /* Slightly smaller corners */
}

.dark {
  --primary: oklch(70% 0.2 260);   /* Lighter in dark mode */
}
```

See the [Theming Guide](../theming/index.md#available-color-tokens) for the full list of customizable variables.

### 2. Configure Entry Point

```tsx
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 3. Add Color Mode Script to index.html

For FOUC prevention, add the color mode script directly to your HTML head. This must be in static HTML because React components render after first paint.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My App</title>
    <script>
      // Color mode initialization - prevents flash of wrong theme
      (function() {
        try {
          var cookie = document.cookie.match(/color-mode=([^;]*)/) || document.cookie.match(/theme=([^;]*)/);
          var stored = cookie ? JSON.parse(decodeURIComponent(cookie[1])) : null;
          var preference = stored ? stored.preference : 'system';
          var mode = preference === 'system'
            ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
            : preference;
          if (mode === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          document.documentElement.style.colorScheme = mode;
        } catch (e) {
          document.documentElement.classList.remove('dark');
          document.documentElement.style.colorScheme = 'light';
        }
      })();
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

> **Note:** Unlike Next.js where you use `<ColorModeInitializer />` in the layout, Vite requires the script in static HTML. The `ColorModeInitializer` component renders after React mounts, which is too late to prevent FOUC.

### 4. Use Components

```tsx
// src/App.tsx
import { ColorModeToggle } from "@neynar/ui/color-mode";
import { Button } from "@neynar/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-bold">My App</h1>
        <ColorModeToggle />
      </header>
      <main className="container mx-auto py-8">
        <Button>Hello World</Button>
      </main>
    </div>
  );
}

export default App;
```

## Code Splitting

Use React.lazy for large components:

```tsx
import { Suspense, lazy } from "react";
import { Skeleton } from "@neynar/ui/skeleton";

const Chart = lazy(() =>
  import("@neynar/ui/chart").then((mod) => ({ default: mod.Chart }))
);

function Dashboard() {
  return (
    <Suspense fallback={<Skeleton className="h-64 w-full" />}>
      <Chart data={chartData} />
    </Suspense>
  );
}
```

## Production Build

Vite automatically tree-shakes unused components. For optimal bundles, use per-component imports:

```tsx
// Good - Only imports what's needed
import { Button } from "@neynar/ui/button";
import { Card } from "@neynar/ui/card";
```

Build and preview:

```bash
npm run build
npm run preview
```

## Troubleshooting

### Styles Not Applying

Ensure both base and theme are imported in your index.css:

```css
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/purple-dawn";
```

### HMR Issues

If hot module replacement isn't working:

```bash
rm -rf node_modules/.vite
npm run dev
```

## Related Documentation

- [Theming Guide](../theming/index.md) - Custom themes and color mode
- [Component Reference](../components.md) - Full component catalog
- [Troubleshooting](../troubleshooting.md) - Common issues
