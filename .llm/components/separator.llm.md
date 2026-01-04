# Separator

Visual divider for separating content sections with support for horizontal and vertical orientations.

## Import

```tsx
import { Separator } from "@neynar/ui/separator"
```

## Anatomy

```tsx
<Separator />
```

## Props

### Separator

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | "horizontal" \| "vertical" | "horizontal" | Direction of the separator |
| className | string | - | Additional CSS classes |
| render | ReactElement \| function | - | Custom render function or element |

All Base UI Separator props are supported via SeparatorProps type.

## Data Attributes

| Attribute | When Present |
|-----------|--------------|
| data-slot | Always set to "separator" |
| data-orientation | Set to "horizontal" or "vertical" |

## Styling

The Separator uses data attributes for responsive sizing:

- **Horizontal**: `data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full`
- **Vertical**: `data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch`

For vertical separators, you typically need to set an explicit height:

```tsx
<Separator orientation="vertical" className="h-6" />
```

## Examples

### Basic Horizontal Separator

```tsx
<div className="space-y-4">
  <p>First section</p>
  <Separator />
  <p>Second section</p>
</div>
```

### Vertical Separator in Toolbar

```tsx
<div className="flex items-center gap-3">
  <Button>Bold</Button>
  <Button>Italic</Button>
  <Separator orientation="vertical" className="h-6" />
  <Button>Link</Button>
  <Button>Image</Button>
</div>
```

### In List Items

```tsx
<div className="border rounded-lg space-y-0">
  <div className="p-4">
    <p className="font-medium">Dashboard</p>
  </div>
  <Separator />
  <div className="p-4">
    <p className="font-medium">API Keys</p>
  </div>
  <Separator />
  <div className="p-4">
    <p className="font-medium">Settings</p>
  </div>
</div>
```

### Inline Metadata with Vertical Separators

```tsx
<div className="flex items-center gap-2 text-sm">
  <span>Status: 200 OK</span>
  <Separator orientation="vertical" className="h-4" />
  <span>Latency: 142ms</span>
  <Separator orientation="vertical" className="h-4" />
  <span>2 minutes ago</span>
</div>
```

### Custom Spacing

Control spacing with margin utilities:

```tsx
<div>
  <p>Tight spacing</p>
  <Separator className="my-2" />
  <p>Default spacing</p>
  <Separator className="my-4" />
  <p>Loose spacing</p>
  <Separator className="my-6" />
</div>
```

## Accessibility

- Renders as a `<div>` with proper ARIA role
- Accessible to screen readers
- Provides semantic separation between content sections
- Works with keyboard navigation (doesn't receive focus)

## Related

- [Card](./card.llm.md) - Often uses Separator to divide card sections
- [Dialog](./dialog.llm.md) - May use Separator between header/body/footer
- [Dropdown Menu](./dropdown-menu.llm.md) - Uses Separator to group menu items
