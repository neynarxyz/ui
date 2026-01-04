# Spinner

Animated loading spinner for indicating processing states and asynchronous operations.

## Import

```tsx
import { Spinner } from "@neynar/ui/spinner"
```

## Anatomy

```tsx
<Spinner />
```

## Props

Extends all standard SVG element props (`React.ComponentProps<"svg">`), including `className`, `aria-*`, and SVG attributes.

### Common Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Custom CSS classes. Default size is `size-4` (16px) |
| color | string | - | Icon color (inherits from text color by default) |
| size | number \| string | - | Icon size in pixels or as string |
| strokeWidth | number \| string | - | Stroke width for the icon |

### Built-in Attributes

- `role="status"` - Announces loading state to screen readers
- `aria-label="Loading"` - Provides accessible label
- `animate-spin` - Continuous rotation animation

## Sizing

Use Tailwind size utilities via `className`:

```tsx
// Extra small (12px)
<Spinner className="size-3" />

// Small/Default (16px)
<Spinner className="size-4" />

// Medium (24px)
<Spinner className="size-6" />

// Large (32px)
<Spinner className="size-8" />

// Extra large (48px)
<Spinner className="size-12" />
```

## Examples

### Basic Loading Indicator

```tsx
<div className="flex items-center justify-center">
  <Spinner className="size-8" />
</div>
```

### With Loading Text

```tsx
<div className="flex flex-col items-center gap-3">
  <Spinner className="size-8" />
  <p className="text-sm text-muted-foreground">Loading content...</p>
</div>
```

### In Button (Loading State)

```tsx
<Button disabled>
  <Spinner data-icon="inline-start" />
  Loading...
</Button>
```

The `data-icon="inline-start"` attribute uses Button's internal spacing for icons at the start position.

### Small Button

```tsx
<Button size="sm" disabled>
  <Spinner data-icon="inline-start" className="size-3.5" />
  Saving...
</Button>
```

### Inline with Text

```tsx
<div className="flex items-center gap-2">
  <Spinner className="size-4" />
  <span className="text-sm">Syncing with Farcaster network...</span>
</div>
```

### Custom Colors

```tsx
// Primary color
<Spinner className="size-6 text-primary" />

// Custom color
<Spinner className="size-6 text-blue-600" />

// Destructive
<Spinner className="size-6 text-destructive" />

// Muted
<Spinner className="size-6 text-muted-foreground" />
```

### Full-Page Loading

```tsx
<div className="flex min-h-[400px] items-center justify-center">
  <Spinner className="size-12" />
</div>
```

### Card Loading State

```tsx
<Card>
  <CardContent className="flex min-h-[200px] flex-col items-center justify-center gap-3">
    <Spinner className="size-8" />
    <p className="text-sm text-muted-foreground">Loading activity feed...</p>
  </CardContent>
</Card>
```

### Conditional Loading with Success State

```tsx
function DataLoader() {
  const [status, setStatus] = useState<"loading" | "success">("loading")

  return (
    <Button onClick={handleLoad} disabled={status === "loading"}>
      {status === "loading" ? (
        <Spinner data-icon="inline-start" />
      ) : (
        <CheckCircle2Icon data-icon="inline-start" className="text-green-600" />
      )}
      {status === "loading" ? "Loading..." : "Fetch Data"}
    </Button>
  )
}
```

## Size Reference

| Class | Pixels | Use Case |
|-------|--------|----------|
| `size-3` | 12px | Extra small buttons, tight spaces |
| `size-4` | 16px | Default, inline text, small buttons |
| `size-6` | 24px | Medium buttons, prominent indicators |
| `size-8` | 32px | Large buttons, card loading states |
| `size-12` | 48px | Full page loading, empty states |

## Accessibility

- Built-in `role="status"` for ARIA live region announcement
- `aria-label="Loading"` provides screen reader context
- Animation respects `prefers-reduced-motion` when configured
- Color contrast should meet WCAG AA standards (use appropriate text colors)

## Implementation Notes

- Uses Lucide's `Loader2Icon` component
- Animated via Tailwind's `animate-spin` utility
- Inherits text color by default for easy theming
- SVG renders inline for optimal performance
- No additional JavaScript runtime overhead

## Related

- [Button](./button.llm.md) - Often used with Spinner for loading states
- [Skeleton](./skeleton.llm.md) - Alternative loading indicator for content placeholders
