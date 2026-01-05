# Slider

Slider for selecting single values or ranges with one or more draggable thumbs.

## Import

```tsx
import { Slider } from "@neynar/ui/slider"
```

## Anatomy

```tsx
<Slider defaultValue={[50]} min={0} max={100} />
```

## Props

All props from Base UI Slider.Root are supported.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | number \| number[] | - | Uncontrolled initial value. Use array for ranges. |
| value | number \| number[] | - | Controlled value. Use array for ranges. |
| onValueChange | (value: number \| number[], eventDetails) => void | - | Called when value changes during interaction. |
| onValueCommitted | (value: number \| number[], eventDetails) => void | - | Called when interaction completes (pointerup). |
| min | number | 0 | Minimum value. |
| max | number | 100 | Maximum value. |
| step | number | 1 | Step increment for value changes. |
| largeStep | number | 10 | Step for Page Up/Down or Shift + Arrow keys. |
| minStepsBetweenValues | number | - | Minimum steps between thumbs in range slider. |
| disabled | boolean | false | Disables all interactions. |
| orientation | "horizontal" \| "vertical" | "horizontal" | Slider direction. |
| thumbAlignment | "center" \| "edge" \| "edge-client-only" | "edge" | How thumbs align at min/max positions. |
| thumbCollisionBehavior | "none" \| "push" \| "swap" | "push" | How thumbs interact when they collide. |
| name | string | - | Form field name for submission. |
| className | string | - | Additional classes for the control element. |

### Value Format

- **Single value**: `defaultValue={[50]}` or `value={[50]}`
- **Range (two thumbs)**: `defaultValue={[25, 75]}`
- **Multiple thumbs**: `defaultValue={[20, 40, 60, 80]}`

Values are always arrays. Component automatically creates the correct number of thumbs based on array length.

### Thumb Alignment

Set to `"edge"` by default (thumbs align to edges at min/max):
- `"center"` - Thumb centers align at min/max
- `"edge"` - Thumb edges align at min/max (default)
- `"edge-client-only"` - Like edge but only on client

## Data Attributes

Applied to control element for styling:

| Attribute | When Present |
|-----------|--------------|
| data-disabled | Slider is disabled |
| data-horizontal | Orientation is horizontal |
| data-vertical | Orientation is vertical |

Applied to individual elements via `data-slot`:
- `data-slot="slider"` - Root element
- `data-slot="slider-track"` - Track element
- `data-slot="slider-range"` - Filled indicator
- `data-slot="slider-thumb"` - Draggable thumb(s)

## Examples

### Basic Single Value

```tsx
function VolumeControl() {
  return (
    <div className="space-y-2">
      <label>Volume</label>
      <Slider defaultValue={[50]} min={0} max={100} />
    </div>
  )
}
```

### Controlled with Display

```tsx
function RateLimitControl() {
  const [value, setValue] = useState([60])

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label>Requests per minute</label>
        <span className="font-mono">{value[0]}</span>
      </div>
      <Slider
        value={value}
        onValueChange={(v) => setValue(Array.isArray(v) ? [...v] : [v])}
        min={10}
        max={200}
        step={10}
      />
    </div>
  )
}
```

### Range Selection

```tsx
function PriceRangeFilter() {
  const [range, setRange] = useState([25, 75])

  return (
    <div className="space-y-2">
      <label>Price Range: ${range[0]} - ${range[1]}</label>
      <Slider
        value={range}
        onValueChange={(v) => setRange(Array.isArray(v) ? [...v] : [v])}
        min={0}
        max={100}
        step={5}
      />
    </div>
  )
}
```

### With Step Increments

```tsx
<Slider
  defaultValue={[50]}
  min={0}
  max={100}
  step={25}
/>
```

### Vertical Orientation

```tsx
<div className="h-48">
  <Slider
    defaultValue={[50]}
    min={0}
    max={100}
    orientation="vertical"
  />
</div>
```

### Multiple Thresholds

```tsx
function AlertThresholds() {
  const [thresholds, setThresholds] = useState([25, 50, 75])

  return (
    <div className="space-y-2">
      <label>Alert Levels: {thresholds.join(', ')}</label>
      <Slider
        value={thresholds}
        onValueChange={(v) => setThresholds(Array.isArray(v) ? [...v] : [v])}
        min={0}
        max={100}
        step={5}
      />
    </div>
  )
}
```

### Disabled State

```tsx
<Slider
  defaultValue={[50]}
  min={0}
  max={100}
  disabled
/>
```

## Keyboard Navigation

| Key | Action |
|-----|--------|
| Arrow Left/Down | Decrease value by `step` |
| Arrow Right/Up | Increase value by `step` |
| Page Down | Decrease by `largeStep` (default 10) |
| Page Up | Increase by `largeStep` (default 10) |
| Shift + Arrow | Increase/decrease by `largeStep` |
| Home | Set to minimum value |
| End | Set to maximum value |
| Tab | Focus next thumb |
| Shift + Tab | Focus previous thumb |

## Accessibility

- Uses ARIA `slider` role with proper attributes
- Announces current value, min, max, and orientation to screen readers
- Full keyboard navigation support
- Focus indicators on thumbs with hover/focus ring
- Disabled state prevents interaction and reduces opacity
- Touch-friendly with adequate thumb size (16px)

## Related

- [Input](./input.llm.md) - For precise numeric entry
- [Select](./select.llm.md) - For discrete value selection
- [RadioGroup](./radio-group.llm.md) - For choosing one option
