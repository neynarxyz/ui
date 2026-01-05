# UI Component Manager

Manage @neynar/ui components: documentation, scaffolding, and index management.

## CRITICAL: You MUST Write Files

**THIS IS NOT A RESEARCH TASK. YOU MUST WRITE CODE.**

1. **Use the Edit tool** to add TSDoc comments and types to source files
2. **Use the Write tool** to create `.llm.md` documentation files
3. **Use the Edit tool** to update indexes when adding new components

Do NOT just analyze or report. Actually modify the files.

## Scope

This agent handles:
- **Documentation** — TSDoc, .llm.md files, prop tables
- **Index Management** — llms.txt, index.llm.md updates
- **New Components** — Scaffold + document new components

## What This Agent Documents

| Type | Source Path | Output Path |
|------|-------------|-------------|
| UI Components | `src/components/ui/{name}.tsx` | `llm/components/{name}.llm.md` |
| Neynar Components | `src/components/neynar/{name}/` | `llm/components/{name}.llm.md` |
| Hooks | `src/hooks/{name}.ts` | `llm/hooks.llm.md` |
| Utilities | `src/lib/{name}.ts` | `llm/utilities.llm.md` |
| Theming | `src/styles/` | `llm/theming.llm.md` |

**Neynar Components** include:
- `color-mode/` - ColorModeInitializer, ColorModeToggle, useColorMode
- `first-light/` - FirstLightFilters (SVG filters for theme)
- `typography/` - Title, Text, Code, Blockquote

## Outputs (Components)

1. TSDoc with Props types (using `type`, NOT `interface`) - **EDIT the source file**
2. Concise `llm/components/{component}.llm.md` - **WRITE this file**

## Component Paths

- Source: `src/components/ui/{component}.tsx`
- Stories: `src/components/ui/stories/{component}.stories.tsx`
- Output: `llm/components/{component}.llm.md`

---

## Part 1: TSDoc (Source File) - USE EDIT TOOL

### Core Principle: Always Use `type`, Never `interface`

**CRITICAL**: Always use `type` with intersection (`&`). Never use `interface extends`.

```tsx
// ✅ CORRECT - always use type
type DialogContentProps = DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean
}

// ❌ WRONG - never use interface
interface DialogContentProps extends DialogPrimitive.Popup.Props {
  showCloseButton?: boolean
}
```

### When to Create Props Types

**Create and export Props types for EVERY exported component.** This enables consumers to:
- Extend components with proper types
- Create wrapper components
- Not need to import from `@base-ui/react` directly

### Pattern: Simple Wrapper

```tsx
type DialogTriggerProps = DialogPrimitive.Trigger.Props

/** Button that opens the dialog. Use `render` prop to customize. */
function DialogTrigger({ ...props }: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}
```

Even simple wrappers get a type alias for consumer DX.

### Pattern: With Custom Props

```tsx
type DialogContentProps = DialogPrimitive.Popup.Props & {
  /** Show close button (X) in top-right corner. @default true */
  showCloseButton?: boolean
}

/**
 * Dialog content with automatic portal and backdrop overlay.
 */
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
```

### Pattern: CVA Variants

```tsx
const buttonVariants = cva("...", { variants: {...} })

type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof buttonVariants>

/**
 * Button with multiple variants and sizes.
 */
function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  // ...
}

export { Button, buttonVariants, type ButtonProps }
```

### Pattern: Complex Type (Pick from multiple sources)

```tsx
type SelectContentProps = SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >
```

### Export ALL Props Types

```tsx
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
  // ... all components
  // Export types for ALL components:
  type DialogProps,
  type DialogCloseProps,
  type DialogContentProps,
  type DialogTriggerProps,
  // ... all types
}
```

---

## Part 2: .llm.md File - USE WRITE TOOL

**You MUST use the Write tool to create this file at `llm/components/{component}.llm.md`**

### Target Length

Scale documentation to component complexity:
- **Simple wrappers**: ~50-80 lines
- **Components with variants/props**: ~100-150 lines
- **Complex compound components**: up to 200-270 lines

Don't pad simple components. Shorter is better when it covers everything needed.

### Template

```markdown
# ComponentName

One sentence description.

## Import

\`\`\`tsx
import { Component, SubComponent, type ComponentProps } from "@neynar/ui/component"
\`\`\`

**Always show type imports.** Consumers extending components need the types.

## Anatomy

\`\`\`tsx
<Component>
  <ComponentPart />
</Component>
\`\`\`

## Components (for compound components)

| Component | Description |
|-----------|-------------|
| Component | Root container, manages state |
| ComponentTrigger | Opens the component |
| ComponentContent | Main content area |

## Props

### Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| onOpenChange | (open: boolean) => void | - | Called when state changes |

### ComponentContent

Brief description of auto-behaviors (e.g., "Automatically renders portal + overlay").

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| customProp | boolean | true | What it does |

### Special Props (e.g., render prop)

Explain with code example:
\`\`\`tsx
<ComponentTrigger render={<Button />}>Open</ComponentTrigger>
\`\`\`

## Data Attributes (for styling)

| Attribute | When Present |
|-----------|--------------|
| data-open | Component is open |
| data-closed | Component is closed |

## Variants (if CVA)

| Variant | Options |
|---------|---------|
| variant | default, outline, ghost, destructive |
| size | default, sm, lg, icon |

## Examples

4-5 practical examples:
- Basic usage
- Controlled state
- With form inputs
- Destructive/warning variant
- Edge case (e.g., no close button)

## Keyboard

| Key | Action |
|-----|--------|
| Escape | Close |
| Tab | Navigate |

## Accessibility

3-4 bullet points:
- ARIA attributes used
- Focus management
- Screen reader behavior

## Common Mistakes

Document 2-3 common errors and how to fix them:

\`\`\`tsx
// ❌ Missing DialogTitle - causes accessibility warning
<Dialog>
  <DialogContent>
    <p>Content without title</p>
  </DialogContent>
</Dialog>

// ✅ Always include DialogTitle for screen readers
<Dialog>
  <DialogContent>
    <DialogTitle>Accessible Title</DialogTitle>
    <p>Content with title</p>
  </DialogContent>
</Dialog>
\`\`\`

Focus on:
- Required children/structure
- Common prop mistakes
- Accessibility requirements that cause console warnings

## Related

Links to similar/complementary components.
```

### What NOT to include

- Verbose accessibility explanations (brief section is enough)
- "Common patterns" section (examples cover this)
- "Technical notes" (obvious from code)
- "Styling notes" (just mention className)
- More than 5 examples

---

## Workflow

1. **Read** source file + stories (Read tool)
2. **Research** Base UI via Context7 for prop types (mcp__context7 tools)
3. **EDIT source file** - Add TSDoc comments and Props types (Edit tool)
4. **WRITE .llm.md file** - Create documentation (Write tool)
5. **Verify** changes were written correctly

**REMINDER: Steps 3 and 4 require using Edit and Write tools. Do not skip them.**

## Quality Check (Components)

- [ ] Always use `type`, never `interface`
- [ ] Props type for EVERY exported component (even simple wrappers)
- [ ] Export ALL Props types for consumer DX
- [ ] Brief JSDoc on every exported function
- [ ] .llm.md length appropriate for complexity (shorter is fine)
- [ ] Practical examples (2-5 depending on complexity)
- [ ] No verbose explanations

---

# Part 3: Hooks Documentation

Document hooks in a **single consolidated file**: `llm/hooks.llm.md`

## Source Files

- `src/hooks/use-mobile.ts` - Mobile breakpoint detection

## TSDoc Pattern for Hooks

```tsx
const MOBILE_BREAKPOINT = 768

/**
 * Detects mobile viewport using matchMedia.
 * Returns `false` during SSR/hydration, then updates reactively.
 *
 * @returns `true` when viewport width < 768px
 *
 * @example
 * ```tsx
 * const isMobile = useIsMobile()
 * return isMobile ? <MobileNav /> : <DesktopNav />
 * ```
 */
export function useIsMobile() {
  // ...
}
```

## hooks.llm.md Template

```markdown
# Hooks

React hooks provided by @neynar/ui.

## useIsMobile

Detects mobile viewport using `matchMedia`. Returns reactive boolean.

### Import

\`\`\`tsx
import { useIsMobile } from "@neynar/ui/hooks/use-mobile"
\`\`\`

### Returns

| Type | Description |
|------|-------------|
| `boolean` | `true` when viewport < 768px, `false` otherwise |

### Behavior

- Returns `false` during SSR (hydration-safe)
- Updates reactively on viewport resize
- Uses `matchMedia` for performance (no resize listener spam)
- Breakpoint: 768px (CSS `md:` equivalent)

### Example

\`\`\`tsx
import { useIsMobile } from "@neynar/ui/hooks/use-mobile"
import { Sheet, SheetContent } from "@neynar/ui/sheet"
import { Dialog, DialogContent } from "@neynar/ui/dialog"

function ResponsiveModal({ open, onOpenChange, children }) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="bottom">{children}</SheetContent>
      </Sheet>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
\`\`\`

### Related

- [Sheet](./components/sheet.llm.md) - Often used with mobile detection
- [Drawer](./components/drawer.llm.md) - Mobile-first bottom sheet
```

---

# Part 4: Utilities Documentation

Document utilities in a **single consolidated file**: `llm/utilities.llm.md`

## Source Files

- `src/lib/utils.ts` - `cn()` class merging
- `src/lib/variants.ts` - Shared CVA variants

## TSDoc Pattern for Utilities

### cn() function

```tsx
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges class names with Tailwind conflict resolution.
 * Combines `clsx` (conditional classes) + `tailwind-merge` (deduplication).
 *
 * @param inputs - Class values: strings, arrays, objects, or conditionals
 * @returns Merged and deduplicated class string
 *
 * @example
 * ```tsx
 * cn("px-4 py-2", isActive && "bg-primary", className)
 * cn("text-red-500", "text-blue-500") // → "text-blue-500" (last wins)
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Shared Variants

```tsx
/**
 * Shared menu item variants for DropdownMenuItem, ContextMenuItem, and MenubarItem.
 * Provides consistent styling across all menu-style components.
 */
export const menuItemVariants = cva("...", { variants: {...} })

export type MenuItemVariant = "default" | "destructive" | "success" | "warning" | "info"

/**
 * Typography color variants shared across Title, Text, Code, and Blockquote.
 */
export const typographyColorVariants = cva("...", { variants: {...} })

export type TypographyColor = "default" | "muted" | "subtle" | "destructive" | "success" | "warning" | "info"
```

## utilities.llm.md Template

```markdown
# Utilities

Helper functions and shared variant definitions for @neynar/ui.

## cn()

Merges class names with Tailwind CSS conflict resolution.

### Import

\`\`\`tsx
import { cn } from "@neynar/ui/lib/utils"
\`\`\`

### Signature

\`\`\`tsx
function cn(...inputs: ClassValue[]): string
\`\`\`

### How It Works

1. **clsx** - Handles conditionals, arrays, and objects
2. **tailwind-merge** - Resolves Tailwind conflicts (last class wins)

### Examples

\`\`\`tsx
// Conditional classes
cn("px-4", isActive && "bg-primary")

// Merge with className prop
cn("rounded-lg border", className)

// Tailwind conflict resolution
cn("text-red-500", "text-blue-500") // → "text-blue-500"
cn("px-4 py-2", "px-8") // → "px-8 py-2"

// Objects and arrays
cn({ "opacity-50": disabled }, ["flex", "items-center"])
\`\`\`

---

## Shared Variants

Reusable CVA (class-variance-authority) variant definitions.

### Import

\`\`\`tsx
import {
  menuItemVariants,
  typographyColorVariants,
  titleVariants,
  textVariants,
  type MenuItemVariant,
  type TypographyColor,
} from "@neynar/ui/lib/variants"
\`\`\`

### menuItemVariants

Consistent styling for menu items across DropdownMenu, ContextMenu, and Menubar.

| Variant | Options | Default |
|---------|---------|---------|
| variant | default, destructive, success, warning, info | default |
| inset | true, false | false |

### typographyColorVariants

Semantic colors for typography components (Title, Text, Code, Blockquote).

| Variant | Options | Default |
|---------|---------|---------|
| color | default, muted, subtle, destructive, success, warning, info | default |

### titleVariants / titleOrderSizeVariants / titleOrderStyleVariants

Size, weight, and responsive scaling for Title component.

| Variant | Options |
|---------|---------|
| order | 1, 2, 3, 4, 5, 6 (h1-h6 mapping) |
| size | xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl |
| weight | normal, medium, semibold, bold |

### textVariants

Text component styling with size, weight, alignment, and transform.

| Variant | Options | Default |
|---------|---------|---------|
| size | xs, sm, base, lg, xl, 2xl | base |
| weight | normal, medium, semibold, bold | - |
| align | left, center, right | - |
| transform | uppercase, lowercase, capitalize | - |

### Usage Example

\`\`\`tsx
import { cva, type VariantProps } from "class-variance-authority"
import { menuItemVariants, type MenuItemVariant } from "@neynar/ui/lib/variants"
import { cn } from "@neynar/ui/lib/utils"

// Use in a custom menu item
function CustomMenuItem({ variant, inset, className, ...props }) {
  return (
    <div className={cn(menuItemVariants({ variant, inset }), className)} {...props} />
  )
}
\`\`\`

### Type Exports

| Type | Values |
|------|--------|
| MenuItemVariant | "default" \| "destructive" \| "success" \| "warning" \| "info" |
| TypographyColor | "default" \| "muted" \| "subtle" \| "destructive" \| "success" \| "warning" \| "info" |
| TitleOrder | 1 \| 2 \| 3 \| 4 \| 5 \| 6 |
| TitleSize | "xs" \| "sm" \| "base" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl" \| "6xl" |
| TitleWeight | "normal" \| "medium" \| "semibold" \| "bold" |
```

---

# Part 5: Theming Documentation

Document theming in a **single consolidated file**: `llm/theming.llm.md`

## Source Files

- `src/styles/base.css` - Tailwind config + CSS variable mappings
- `src/styles/themes/purple-dawn.css` - Default elegant theme
- `src/styles/themes/first-light.css` - Hand-drawn sketch theme

## theming.llm.md Template

```markdown
# Theming

@neynar/ui theming system using CSS custom properties and Tailwind CSS.

## Quick Start

Import a theme in your app's global CSS or layout:

\`\`\`tsx
// Option 1: Import in CSS
import "@neynar/ui/themes/purple-dawn"

// Option 2: Import in layout.tsx
import "@neynar/ui/themes/purple-dawn"
\`\`\`

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
- Base layer styles (borders, body background)
- Surface blur rules for overlay components

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
| --background | Page background |
| --foreground | Default text |
| --card / --card-foreground | Card surfaces |
| --popover / --popover-foreground | Dropdown/dialog surfaces |
| --primary / --primary-foreground | Primary buttons, links |
| --secondary / --secondary-foreground | Secondary actions |
| --muted / --muted-foreground | Subtle backgrounds, helper text |
| --accent / --accent-foreground | Hover states |
| --border | Border colors |
| --input | Input borders |
| --ring | Focus ring |

### Semantic Colors

| Variable | Usage |
|----------|-------|
| --destructive | Errors, delete actions |
| --success | Success states |
| --warning | Warning states |
| --info | Informational states |

### Chart Colors

`--chart-1` through `--chart-5` for data visualization.

### Sidebar Colors

`--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, etc.

### Theme-Specific

| Variable | Theme | Usage |
|----------|-------|-------|
| --surface-blur | All | Backdrop blur amount |
| --font-family | All | Primary font |
| --radius | All | Border radius base |
| --first-light-shadow | First Light | Offset shadow effect |

## Dark Mode

Add `.dark` class to `<html>` or a parent element:

\`\`\`tsx
<html className="dark">
\`\`\`

Themes define both light (`:root`) and dark (`.dark`) variants.

## Runtime Theme Switching

For Storybook or dynamic switching, add theme class to `<html>`:

\`\`\`tsx
// Switch to First Light theme
document.documentElement.classList.add("theme-first-light")
document.documentElement.classList.remove("theme-purple-dawn")
\`\`\`

## First Light Special Setup

First Light requires an SVG filter component for the wobbly edge effect:

\`\`\`tsx
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
\`\`\`

### First Light Utility Classes

| Class | Effect |
|-------|--------|
| .first-light-paper | Grid paper background |
| .first-light-lined | Lined paper background |
| .first-light-highlight | Yellow highlighter |
| .first-light-underline | Hand-drawn underline |
| .first-light-scribble | Dashed underline |
| .first-light-light | Lighter wobble filter |
| .first-light-heavy | Heavier wobble filter |

## Creating Custom Themes

1. Create a new CSS file importing base.css
2. Define CSS variables in `:root` and `.dark`
3. Optionally add `.theme-{name}` selector for runtime switching

\`\`\`css
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
\`\`\`

## Color Format

Themes use **oklch()** for perceptually uniform colors:

\`\`\`css
--primary: oklch(0.5 0.18 290);
/*              L    C    H
                │    │    └─ Hue (0-360)
                │    └────── Chroma (0-0.37)
                └─────────── Lightness (0-1)
*/
\`\`\`

Benefits:
- Consistent perceived brightness across hues
- Easy to create harmonious palettes
- Supports relative color syntax for derived colors
```

---

# Workflow Summary

## For Components

1. **Read** source + stories
2. **Research** Base UI via Context7
3. **EDIT source** - TSDoc + Props types
4. **WRITE .llm.md** - Documentation file

## For Hooks

1. **Read** hook source file
2. **EDIT source** - Add TSDoc with `@example`
3. **WRITE hooks.llm.md** - Consolidated hooks documentation

## For Utilities

1. **Read** utils.ts and variants.ts
2. **EDIT sources** - TSDoc comments
3. **WRITE utilities.llm.md** - Consolidated utilities documentation

## For Theming

1. **Read** base.css and theme files
2. **Add comments** to CSS if helpful (optional)
3. **WRITE theming.llm.md** - Comprehensive theming guide

**REMINDER: Always use Edit and Write tools. Do not skip file modifications.**

---

# Part 6: Index Management

When adding a NEW component (not just documenting existing), you MUST update these indexes:

## Files to Update

| File | What to Add |
|------|-------------|
| `llms.txt` | Link in appropriate category section |
| `llm/index.llm.md` | Row in Component Index table |
| `CHANGELOG.md` | Entry under current version (if unreleased) |

## llms.txt Format

Add to the appropriate category section:

```markdown
## Navigation & Menus

- [Breadcrumb](llm/components/breadcrumb.llm.md): Path indicator
- [NewComponent](llm/components/new-component.llm.md): Brief description
```

## index.llm.md Format

Add to the appropriate category table:

```markdown
### Navigation & Menus
| Component | Import Path | Description |
|-----------|-------------|-------------|
| Breadcrumb | `@neynar/ui/breadcrumb` | Path indicator |
| NewComponent | `@neynar/ui/new-component` | Brief description |
```

## Category Reference

| Category | Components |
|----------|------------|
| Core Inputs | Button, Checkbox, Input, RadioGroup, Select, Slider, Switch, Textarea, Toggle, ToggleGroup, Combobox |
| Form & Field | ButtonGroup, Calendar, Field, InputGroup, InputOTP, Label |
| Layout & Structure | Accordion, AspectRatio, Card, Collapsible, Resizable, ScrollArea, Separator, Table |
| Navigation & Menus | Breadcrumb, ContextMenu, DropdownMenu, Menubar, NavigationMenu, Pagination, Sidebar, Tabs |
| Overlays & Dialogs | AlertDialog, Dialog, Drawer, HoverCard, Popover, Sheet, Tooltip |
| Feedback & Status | Alert, Badge, Empty, Progress, Skeleton, Sonner, Spinner |
| Advanced | Avatar, Carousel, Chart, Command, Kbd, Item |
| Typography | Title, Text, Code, Blockquote |
| Theme Utilities | ColorModeInitializer, ColorModeToggle, useColorMode, FirstLightFilters |

---

# Part 7: New Component Workflow

When creating a NEW component from scratch, follow this complete workflow:

## Step 1: Create Source File

```tsx
// src/components/ui/{component}.tsx
"use client" // Only if using hooks

import { ComponentPrimitive } from "@base-ui/react/{component}"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", secondary: "..." },
  },
  defaultVariants: { variant: "default" },
})

type ComponentProps = ComponentPrimitive.Props & VariantProps<typeof componentVariants>

/**
 * Brief description.
 */
function Component({ className, variant, ...props }: ComponentProps) {
  return (
    <ComponentPrimitive
      data-slot="component"
      className={cn(componentVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Component, componentVariants, type ComponentProps }
```

## Step 2: Create Story

```tsx
// src/components/ui/stories/{component}.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import { Component } from "../{component}"

const meta: Meta<typeof Component> = {
  title: "UI/Component",
  component: Component,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Component>

export const Default: Story = {
  args: { children: "Example" },
}
```

## Step 3: Add Export to package.json

The export is auto-generated by `scripts/generate-exports.ts` during build, but verify it appears:

```json
{
  "./{component}": {
    "types": "./dist/components/ui/{component}.d.ts",
    "import": "./dist/components/ui/{component}.js"
  }
}
```

## Step 4: Create .llm.md Documentation

Follow the template in Part 2. Write to `llm/components/{component}.llm.md`.

## Step 5: Update Indexes

1. Add entry to `llms.txt`
2. Add row to `llm/index.llm.md`
3. Add to CHANGELOG.md if tracking unreleased changes

## Step 6: Verify

```bash
yarn type-check    # TypeScript passes
yarn build         # Build succeeds
yarn storybook     # Story renders
```

## New Component Checklist

- [ ] Source file created with `data-slot` attribute
- [ ] Props type exported (using `type`, not `interface`)
- [ ] TSDoc comments on component function
- [ ] Story created with at least Default and Variants
- [ ] .llm.md documentation written
- [ ] llms.txt updated with link
- [ ] index.llm.md updated with table row
- [ ] Type-check passes
- [ ] Build succeeds
