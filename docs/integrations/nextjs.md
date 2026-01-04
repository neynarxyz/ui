# Next.js Integration

This guide covers integrating @neynar/ui with Next.js applications.

## Installation

```bash
npm install @neynar/ui
```

## Setup

### 1. Import Styles in globals.css

```css
/* app/globals.css */
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

### 2. Configure Root Layout

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import { ColorModeInitializer } from "@neynar/ui/color-mode";
import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "Built with @neynar/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

### 3. Use Components

```tsx
// app/page.tsx
import { Button } from "@neynar/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@neynar/ui/card";

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </main>
  );
}
```

## Server Components

Many @neynar/ui components work directly in Server Components—they don't require `"use client"`. Components like Button, Card, Badge, Alert, Input, and Table are pure and can be used anywhere.

Components that use React hooks (like Dialog, Select, Tabs, Sidebar) are marked with `"use client"` internally. You can still import and use them in Server Components—Next.js handles the client boundary automatically.

```tsx
// app/dashboard/page.tsx (Server Component)
import { Button } from "@neynar/ui/button";  // Works directly
import { Card } from "@neynar/ui/card";      // Works directly
import { Dialog } from "@neynar/ui/dialog";  // Has internal "use client", still works

export default async function Dashboard() {
  const data = await fetchData(); // Server-side data fetching

  return (
    <Card>
      <h1>Dashboard</h1>
      <Button>Click me</Button>
    </Card>
  );
}
```

## Common Patterns

### Form Handling with Server Actions

```tsx
// app/contact/page.tsx
import { Button } from "@neynar/ui/button";
import { Input } from "@neynar/ui/input";
import { Label } from "@neynar/ui/label";

async function submitForm(formData: FormData) {
  "use server";
  const email = formData.get("email");
  // Process form...
}

export default function Contact() {
  return (
    <form action={submitForm}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <Button type="submit">Subscribe</Button>
      </div>
    </form>
  );
}
```

### Dynamic Imports (Code Splitting)

For large components like Chart or Calendar:

```tsx
import dynamic from "next/dynamic";

const Chart = dynamic(
  () => import("@neynar/ui/chart").then((mod) => ({ default: mod.Chart })),
  { ssr: false, loading: () => <div>Loading chart...</div> }
);
```

### Color Mode Toggle

```tsx
// components/header.tsx
"use client";

import { ColorModeToggle } from "@neynar/ui/color-mode";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1>My App</h1>
      <ColorModeToggle />
    </header>
  );
}
```

### With next/link

Use the `render` prop to make a Button render as a Link:

```tsx
import Link from "next/link";
import { Button } from "@neynar/ui/button";

<Button render={<Link href="/about" />}>
  About Us
</Button>

// With variant
<Button variant="outline" render={<Link href="/settings" />}>
  Settings
</Button>
```

The `render` prop composes the Button styling with the Link component, avoiding nested interactive elements.

## Troubleshooting

### Hydration Mismatch

Add `suppressHydrationWarning` to your `<html>` element:

```tsx
<html lang="en" suppressHydrationWarning>
```

### Styles Not Loading

Ensure you import both base and theme in your globals.css:

```css
@import "@neynar/ui/styles";
@import "@neynar/ui/themes/purple-dawn";
```

### Module Not Found

Clear the Next.js cache:

```bash
rm -rf .next
npm run dev
```

## Related Documentation

- [Theming Guide](../theming/index.md) - Custom themes and color mode
- [Component Reference](../components.md) - Full component catalog
- [Troubleshooting](../troubleshooting.md) - Common issues
