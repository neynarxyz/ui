# Troubleshooting Guide

Common issues and solutions when using @neynar/ui.

## Installation Issues

### Module Not Found

**Error:** `Cannot find module '@neynar/ui/button'`

**Solutions:**
1. Ensure the package is installed:
   ```bash
   npm install @neynar/ui
   ```

2. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. For monorepos, ensure the workspace is linked correctly.

### Peer Dependency Warnings

**Error:** `WARN peer dependency react@^19 not installed`

**Solution:** @neynar/ui requires React 19+. Upgrade React:
```bash
npm install react@^19 react-dom@^19
```

## Styling Issues

### Styles Not Loading

**Symptom:** Components render but have no styling.

**Solutions:**

1. Import base and theme in your CSS entry point:
   ```css
   /* app/globals.css or src/index.css */
   @import "@neynar/ui/styles";
   @import "@neynar/ui/themes/purple-dawn";  /* Or first-light */
   ```

2. Ensure Tailwind is configured to scan node_modules:
   ```ts
   // tailwind.config.ts
   content: [
     "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@neynar/ui/dist/**/*.js",
   ]
   ```

3. Verify CSS is being processed by your bundler.

### Dark Mode Not Working

**Symptom:** Theme toggle doesn't change colors.

**Solutions:**

1. Add the ColorModeInitializer component to your layout:
   ```tsx
   import { ColorModeInitializer } from "@neynar/ui/color-mode";

   // In your root layout
   <html>
     <head>
       <ColorModeInitializer />
     </head>
   </html>
   ```

2. Ensure `suppressHydrationWarning` is on `<html>`:
   ```tsx
   <html suppressHydrationWarning>
   ```

### Flash of Unstyled Content (FOUC)

**Symptom:** Brief flash of wrong theme on page load.

**Solutions:**

1. Move ColorModeInitializer component to `<head>`:
   ```tsx
   <head>
     <ColorModeInitializer />
   </head>
   ```

2. Ensure your globals.css imports are correct:
   ```css
   @import "@neynar/ui/styles";
   @import "@neynar/ui/themes/purple-dawn";
   ```

## TypeScript Issues

### Type Errors with Components

**Error:** `Property 'X' does not exist on type...`

**Solutions:**

1. Ensure you're using the correct component variant:
   ```tsx
   // Button variants: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "success" | "warning" | "info"
   import { Button } from "@neynar/ui/button";
   <Button variant="outline">Click</Button>
   ```

2. Check prop types in your IDE - hover over component for available props.

### Generic Component Types

**Issue:** Can't infer generic types for components like Select.

**Solution:** Explicitly type your values:
```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@neynar/ui/select";

const [value, setValue] = useState<string>("");

<Select value={value} onValueChange={(v) => v && setValue(v)}>
  ...
</Select>
```

## React Issues

### Hydration Mismatch

**Error:** `Hydration failed because the initial UI does not match...`

**Solutions:**

1. Add `suppressHydrationWarning` to html element:
   ```tsx
   <html lang="en" suppressHydrationWarning>
   ```

2. Ensure ColorModeInitializer component is in the head, not body.

3. For dynamic content, use client-side rendering:
   ```tsx
   const [mounted, setMounted] = useState(false);
   useEffect(() => setMounted(true), []);
   if (!mounted) return null;
   ```

### Refs Not Working

**Issue:** `ref` prop not forwarding to DOM element.

**Solution:** Most @neynar/ui components forward refs. Check you're using the correct ref type:
```tsx
import { Button } from "@neynar/ui/button";

const buttonRef = useRef<HTMLButtonElement>(null);
<Button ref={buttonRef}>Click</Button>
```

## Component-Specific Issues

### Dialog/Sheet Not Opening

**Solutions:**

1. Ensure you have both trigger and content:
   ```tsx
   import { Dialog, DialogTrigger, DialogContent } from "@neynar/ui/dialog";
   import { Button } from "@neynar/ui/button";

   <Dialog>
     <DialogTrigger>
       <Button>Open</Button>
     </DialogTrigger>
     <DialogContent>
       Content here
     </DialogContent>
   </Dialog>
   ```

2. For controlled usage, manage open state:
   ```tsx
   const [open, setOpen] = useState(false);
   <Dialog open={open} onOpenChange={setOpen}>
   ```

### Select Value Not Updating

**Solution:** Handle null values in onValueChange:
```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@neynar/ui/select";

<Select
  value={value}
  onValueChange={(v) => v && setValue(v)}
>
```

### Calendar Date Selection Issues

**Solution:** Use proper handlers for different modes:
```tsx
import { Calendar } from "@neynar/ui/calendar";

// Single date
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>

// Date range
<Calendar
  mode="range"
  selected={dateRange}
  onSelect={(range) => range?.from && setDateRange({ from: range.from, to: range.to })}
/>
```

## Performance Issues

### Large Bundle Size

**Solutions:**

1. Use per-component imports:
   ```tsx
   // Good - Only imports what's needed
   import { Button } from "@neynar/ui/button";
   import { Card } from "@neynar/ui/card";
   ```

2. Use dynamic imports for heavy components:
   ```tsx
   import dynamic from "next/dynamic";
   import { Chart } from "@neynar/ui/chart";

   const ChartLazy = dynamic(() => import("@neynar/ui/chart").then(m => ({ default: m.Chart })), {
     ssr: false
   });
   ```

### Slow Initial Render

**Solutions:**

1. Lazy load components not needed immediately.
2. Use Suspense with loading states.
3. Consider code splitting by route.

## Getting Help

If you can't resolve an issue:

1. Check [Storybook](https://neynar-ui.vercel.app) for working examples
2. Search existing [GitHub issues](https://github.com/neynarxyz/frontend-monorepo/issues)
3. Create a new issue with:
   - @neynar/ui version
   - Framework and version (Next.js, Vite, etc.)
   - Minimal reproduction code
   - Expected vs actual behavior
