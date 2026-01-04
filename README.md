<h1 align="center">@neynar/ui</h1>

<p align="center">
  <strong>Beautiful React components built on Base UI + Tailwind CSS v4</strong>
</p>

<p align="center">
  <a href="https://neynar-ui.vercel.app">📚 Storybook</a> ·
  <a href="https://neynar.com">🚀 Neynar</a> ·
  <a href="https://docs.neynar.com">📖 Docs</a>
</p>

---

## What is this? 🤔

@neynar/ui is a full-featured React component library—the same components that power Neynar App Studio and our suite of developer tools.

**One package. 50+ components. Zero configuration.**

```tsx
import "@neynar/ui/styles";
import "@neynar/ui/themes/purple-dawn";
import { Button } from "@neynar/ui/button";
import { Card } from "@neynar/ui/card";
import { Alert } from "@neynar/ui/alert";

export default function App() {
  return (
    <Card>
      <Alert variant="success">Ready to ship 🚀</Alert>
      <Button>Get Started</Button>
    </Card>
  );
}
```

## Why @neynar/ui? ✨

| Feature | Description |
|---|---|
| **Built for AI** | Designed for AI coding assistants—sensible defaults, clear APIs, zero config. LLMs love it. |
| **Modern Stack** | shadcn/ui patterns on Base UI primitives, Tailwind CSS v4, OKLCH colors, TypeScript-first. |
| **Production-Ready** | Battle-tested in Neynar App Studio and used by developers building on Farcaster. |
| **RSC-Ready** | `"use client"` directives baked in. Use interactive components from Server Components—no wrapping needed. |
| **Fully Accessible** | WCAG 2.1 AA compliant with keyboard navigation and screen reader support. |
| **Themes** | Ships with Purple Dawn and First Light themes. Easy to customize or create your own with CSS variables. |

---

## Installation 📦

```bash
# npm
npm install @neynar/ui

# pnpm
pnpm add @neynar/ui

# yarn
yarn add @neynar/ui
```

---

## What's Included 🎁

### Full shadcn/ui Collection

This package includes the **complete set of shadcn/ui components**, rebuilt on [Base UI](https://base-ui.com) primitives with Tailwind CSS v4. Every component you'd expect, ready to use.

### Neynar Extras

New components we've added beyond the base collection:

- **Typography** — Semantic text components: `Title`, `Text`, `Code`, `Blockquote`, `Caption`, `Overline`
- **Color Mode** — SSR-safe dark mode with automatic system detection, cookie persistence, `<ColorModeInitializer />` and `<ColorModeToggle />` components

### Neynar Enhancements

Improvements we've made to existing components:

- **Toast (Sonner)** — Pre-configured with colored variants, custom icons, and `richColors` enabled by default
- **Extended Variants** — Semantic `success`, `warning`, and `info` variants added to Button, Badge, Alert, and Menu Items

### Components

| Category | Components |
|----------|------------|
| **Core Inputs** | Button, Checkbox, Combobox, Input, RadioGroup, Select, Slider, Switch, Textarea, Toggle, ToggleGroup |
| **Form & Field** | ButtonGroup, Calendar, Field, InputGroup, InputOTP, Label |
| **Layout & Structure** | Accordion, AspectRatio, Card, Collapsible, Resizable, Separator, Table |
| **Navigation & Menus** | Breadcrumb, ContextMenu, DropdownMenu, Menubar, NavigationMenu, Pagination, Tabs |
| **Overlays & Dialogs** | AlertDialog, Dialog, Drawer, HoverCard, Popover, Sheet, Tooltip |
| **Feedback & Status** | Alert, Badge, Empty, Progress, Skeleton, Sonner, Spinner |
| **Advanced & Specialized** | Avatar, Carousel, Chart, Command, Kbd, ScrollArea, Sidebar |
| **Neynar Custom** | ColorModeInitializer, ColorModeToggle, Title, Text, Code, Blockquote, Caption, Overline |

### Hooks & Utilities

| Export | Description |
|--------|-------------|
| `@neynar/ui/use-mobile` | `useMobile()` hook for responsive breakpoint detection |
| `@neynar/ui/utils` | `cn()` utility for merging Tailwind classes |

---

## Import Examples 📝

Each component has its own export path:

```tsx
// Core components
import { Button } from "@neynar/ui/button";
import { Input } from "@neynar/ui/input";
import { Card, CardHeader, CardContent } from "@neynar/ui/card";

// Color Mode
import { ColorModeInitializer, ColorModeToggle, useColorMode } from "@neynar/ui/color-mode";

// Typography
import { Title, Text, Caption } from "@neynar/ui/typography";

// Toast
import { Toaster, toast } from "@neynar/ui/sonner";

// Utilities
import { cn } from "@neynar/ui/utils";
import { useMobile } from "@neynar/ui/use-mobile";
```

---

## Setup & Customization 🎨

Create a CSS file with your styles and theme, then import it in your app's entry point (e.g., `layout.tsx` or `main.tsx`):

```css
/* app/globals.css */
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/purple-dawn";

/* Optional: override any design token */
:root {
  --radius: 0.5rem;
  --primary: oklch(0.6 0.2 260); /* purple */
}
.dark {
  --primary: oklch(0.75 0.15 260); /* lighter purple */
}
```

See the [Theming Guide](./docs/theming/index.md) for the full list of customizable tokens.

### Color Mode

Zero-configuration dark mode:

```tsx
// Add to your root layout
<ColorModeInitializer />

// Drop in anywhere for user control
<ColorModeToggle />

// Programmatic access
const { mode, preference, setPreference } = useColorMode();
```

### Data Slots

All components include `data-slot` attributes for targeted CSS and testing:

```css
/* Style specific component parts */
[data-slot="dialog-content"] { backdrop-filter: blur(20px); }
[data-slot="button"] { font-weight: 600; }
```

```ts
// Stable E2E test selectors
page.locator('[data-slot="dialog-trigger"]').click()
```

---

## Framework Support 🛠️

Works with any React framework:

- **Next.js**
- **Vite**
- **Remix**
- **Astro**
- **TanStack Start**

---

## Documentation 📖

### Storybook

Interactive component explorer with live examples:

- **[View Storybook](https://neynar-ui.vercel.app)**

### Integration Guides

Framework-specific setup guides:

- [Next.js Integration](./docs/integrations/nextjs.md)
- [Vite Integration](./docs/integrations/vite.md) — React + Vite setup

### Reference

- [Component Reference](./docs/components.md) — Complete component catalog
- [Theming Guide](./docs/theming/index.md) — Themes, color mode, CSS variables
  - [ColorModeInitializer](./docs/theming/color-mode-initializer.md) — SSR-safe color mode setup
  - [useColorMode Hook](./docs/theming/use-color-mode.md) — Programmatic control
  - [Purple Dawn Theme](./docs/theming/purple-dawn.md) — Default theme reference
  - [First Light Theme](./docs/theming/first-light.md) — Hand-drawn aesthetic
- [Troubleshooting](./docs/troubleshooting.md) — Common issues and solutions

### For AI Assistants

LLM-optimized documentation for AI coding assistants:

- [LLM Documentation Guide](./docs/llm-documentation.md) — How to use our AI-optimized docs
- [llms.txt](./llms.txt) — Compact overview for quick context
- [llms-full.txt](./llms-full.txt) — Complete documentation (~16k lines)
- [.llm/](./.llm/) — Per-component markdown docs

---

## About Neynar

**🚀 The Farcaster Platform**

[Neynar](https://neynar.com) powers the best apps in the Farcaster ecosystem. We provide the infrastructure, APIs, and tools so you can build without managing your own nodes. See [About Neynar](./docs/about-neynar.md) for more details.

| Category | Description |
|----------|-------------|
| **APIs** | Hubs, feeds, users, casts, reactions, channels |
| **Infrastructure** | Managed hubs, webhooks, analytics |
| **Tools** | SDKs, debugging, monitoring |

**Thousands of developers** trust Neynar to power their social applications.

**[✨ Start building at neynar.com ✨](https://neynar.com)**

---

## Credits

Made by the Neynar team.

Built on the shoulders of giants:
- [shadcn/ui](https://ui.shadcn.com) for the component patterns
- [Base UI](https://base-ui.com) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com) for styling

---

<p align="center">
  MIT License · Made with 💜 by <a href="https://neynar.com">Neynar</a>
</p>
