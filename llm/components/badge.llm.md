# Badge

Small label for displaying metadata, status indicators, counts, and categorical information.

## Import

```tsx
import { Badge } from "@neynar/ui/badge"
```

## Anatomy

```tsx
<Badge variant="default">Label</Badge>
```

## Props

### Badge

Extends all HTML span attributes plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | "default" \| "secondary" \| "destructive" \| "success" \| "warning" \| "info" \| "outline" \| "ghost" \| "link" | "default" | Visual style variant |
| render | React.ReactElement \| ((state) => React.ReactElement) | - | Custom element to render as (e.g., `<a />`) |
| className | string | - | Additional CSS classes |

All standard HTML span attributes are supported (onClick, aria-*, data-*, etc.).

### Special Props

**render prop** - Render Badge as a different element:

```tsx
<Badge render={<a href="/docs" />}>Documentation</Badge>
```

## Variants

### Visual Variants

| Variant | Use Case | Appearance |
|---------|----------|------------|
| default | Primary emphasis, featured items | Solid primary color background |
| secondary | Neutral status, less emphasis | Subtle secondary background |
| outline | Low emphasis, borders | Border with transparent background |
| ghost | Minimal, hover reveals | Transparent, hover shows background |
| link | Clickable, link-style | Underlined text style |

### Semantic Variants

| Variant | Use Case | Appearance |
|---------|----------|------------|
| destructive | Errors, critical warnings | Red/destructive color with subtle background |
| success | Success states, confirmations | Green/success color with subtle background |
| warning | Warnings, alerts | Yellow/warning color with subtle background |
| info | Informational messages | Blue/info color with subtle background |

## Examples

### Basic Variants

```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Error</Badge>
```

### With Icons

Add `data-icon="inline-start"` or `data-icon="inline-end"` to icon elements for proper spacing:

```tsx
import { StarIcon, FlameIcon } from "lucide-react"

<Badge>
  <StarIcon data-icon="inline-start" />
  Featured
</Badge>

<Badge variant="destructive">
  <FlameIcon data-icon="inline-start" />
  Hot
</Badge>
```

### Counter Badges

```tsx
<Badge>3</Badge>
<Badge>12</Badge>
<Badge>99+</Badge>
<Badge variant="destructive">5</Badge>
```

### Status Indicators

Use colored dots for operational status:

```tsx
<Badge variant="secondary">
  <span className="bg-green-500 mr-1 size-2 rounded-full" />
  Online
</Badge>

<Badge variant="secondary">
  <span className="bg-yellow-500 mr-1 size-2 rounded-full" />
  Degraded
</Badge>

<Badge variant="secondary">
  <span className="bg-red-500 mr-1 size-2 rounded-full" />
  Offline
</Badge>
```

### As Link

```tsx
<Badge render={<a href="/pricing" />} variant="outline">
  Upgrade to Pro
</Badge>
```

### Plan Tiers

```tsx
import { CrownIcon, SparklesIcon } from "lucide-react"

<Badge variant="secondary">Free</Badge>
<Badge>
  <SparklesIcon data-icon="inline-start" />
  Popular
</Badge>
<Badge variant="outline">
  <CrownIcon data-icon="inline-start" />
  Enterprise
</Badge>
```

## Data Attributes

The Badge component sets these data attributes for styling:

| Attribute | Value |
|-----------|-------|
| data-slot | "badge" |
| data-icon | "inline-start" or "inline-end" (on icon elements) |

## Styling

### Icon Sizing

Icons inside Badge automatically get `size-3` (12px). Use `data-icon="inline-start"` or `data-icon="inline-end"` for proper padding:

```tsx
// Automatic icon sizing and spacing
<Badge>
  <StarIcon data-icon="inline-start" />
  Text
</Badge>
```

### Custom Styling

```tsx
<Badge className="text-lg px-4">
  Large Badge
</Badge>
```

## Accessibility

- Badge uses semantic HTML `<span>` by default
- Can be rendered as `<a>` via render prop for clickable badges
- Supports all ARIA attributes for enhanced semantics
- No built-in focus management (use render prop with `<button>` or `<a>` for interactive badges)

## Related

- **Button** - For clickable actions instead of labels
- **Avatar** - Can be combined with Badge for status indicators
- **Card** - Badges commonly used in card headers for categorization
