# Skeleton

Loading placeholder with pulse animation to indicate content is being fetched.

## Import

```tsx
import { Skeleton } from "@neynar/ui/skeleton"
```

## Anatomy

```tsx
<Skeleton className="h-4 w-full" />
```

## Props

Accepts all standard HTML `div` attributes via `React.ComponentProps<"div">`:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes for custom sizing and shape |

The Skeleton component applies default styling: `bg-muted rounded-md animate-pulse`. Use `className` to override dimensions and border radius.

## Data Attributes

| Attribute | When Present |
|-----------|--------------|
| data-slot="skeleton" | Always present for styling hooks |

## Examples

### Text Line

```tsx
<Skeleton className="h-4 w-full" />
```

### Multiple Lines

```tsx
<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-5/6" />
  <Skeleton className="h-4 w-4/6" />
</div>
```

### Avatar

```tsx
<Skeleton className="size-12 rounded-full" />
```

### User Profile Card

```tsx
<div className="flex items-center gap-4">
  <Skeleton className="size-16 rounded-full" />
  <div className="flex-1 space-y-2">
    <Skeleton className="h-5 w-32" />
    <Skeleton className="h-4 w-24" />
  </div>
</div>
```

### Button

```tsx
<Skeleton className="h-10 w-24" />
```

### Card with Image

```tsx
<div className="border rounded-lg p-4">
  <Skeleton className="aspect-video w-full mb-4" />
  <Skeleton className="h-5 w-3/4 mb-2" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-5/6 mt-2" />
</div>
```

### Cast Feed Item

```tsx
<div className="flex gap-3">
  <Skeleton className="size-10 rounded-full" />
  <div className="flex-1 space-y-3">
    <div className="flex items-center gap-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-3 w-16" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
    <div className="flex gap-4">
      <Skeleton className="h-8 w-16" />
      <Skeleton className="h-8 w-16" />
    </div>
  </div>
</div>
```

### API Analytics Card

```tsx
<div className="border rounded-lg p-4">
  <Skeleton className="h-4 w-24 mb-2" />
  <Skeleton className="h-8 w-16 mb-4" />
  <Skeleton className="h-2 w-full" />
</div>
```

### Data Table Row

```tsx
<div className="flex items-center gap-4 p-4">
  <Skeleton className="size-8 rounded" />
  <Skeleton className="h-4 flex-1" />
  <Skeleton className="h-4 w-24" />
  <Skeleton className="h-4 w-32" />
  <Skeleton className="size-8 rounded" />
</div>
```

## Accessibility

- Skeleton is purely visual and doesn't convey semantic meaning
- Ensure parent containers have appropriate ARIA live regions when content updates
- Consider using `aria-busy="true"` on loading containers
- Maintain proper layout structure so screen readers understand context when content loads

## Related

- [Spinner](./spinner.llm.md) - For indeterminate loading states
- [Progress](./progress.llm.md) - For determinate loading states
