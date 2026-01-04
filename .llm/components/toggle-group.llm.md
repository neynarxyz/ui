# ToggleGroup

A group of toggle buttons that share state, commonly used for formatting toolbars, view switchers, and filter controls.

## Import

```tsx
import { ToggleGroup, ToggleGroupItem } from "@neynar/ui/toggle-group"
```

## Anatomy

```tsx
<ToggleGroup>
  <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
  <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
  <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
</ToggleGroup>
```

## Components

| Component | Description |
|-----------|-------------|
| ToggleGroup | Root container that manages shared state and layout |
| ToggleGroupItem | Individual toggle button within the group |

## Props

### ToggleGroup

Inherits all props from `@base-ui/react/toggle-group` plus variant styling props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `any[]` | - | Controlled state: array of pressed item values |
| defaultValue | `any[]` | - | Uncontrolled initial state |
| onValueChange | `(value: any[]) => void` | - | Called when selection changes |
| multiple | `boolean` | `true` | Allow multiple items to be pressed |
| variant | `"default" \| "outline"` | - | Visual style inherited by all items |
| size | `"default" \| "sm" \| "lg"` | - | Size variant inherited by all items |
| spacing | `number` | `0` | Gap between items (0 = joined buttons) |
| orientation | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction |
| disabled | `boolean` | `false` | Disable all toggles in the group |
| loopFocus | `boolean` | `true` | Wrap focus when reaching end with arrow keys |

**Note:** By default, `multiple={true}` allows multiple selections. Set `multiple={false}` for single selection mode.

### ToggleGroupItem

Inherits variant and size from parent ToggleGroup context unless explicitly overridden.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `string` | - | **Required.** Unique identifier for this item |
| variant | `"default" \| "outline"` | Inherits from group | Override group variant |
| size | `"default" \| "sm" \| "lg"` | Inherits from group | Override group size |
| aria-label | `string` | - | Required for icon-only buttons |

## Data Attributes

### ToggleGroup

| Attribute | When Present |
|-----------|--------------|
| data-orientation | Always: `"horizontal"` or `"vertical"` |
| data-disabled | Group is disabled |
| data-multiple | Multiple selection is enabled |
| data-spacing | Always: spacing value |
| data-variant | Always: variant name |
| data-size | Always: size name |

### ToggleGroupItem

| Attribute | When Present |
|-----------|--------------|
| data-pressed | Item is in pressed state |
| data-disabled | Item is disabled |

## Variants

### Visual Variants

| Variant | Appearance |
|---------|------------|
| default | Transparent background, fills on press |
| outline | Border with shadow, subtle background on press |

### Sizes

| Size | Height | Min Width | Padding |
|------|--------|-----------|---------|
| sm | 32px | 32px | 6px |
| default | 36px | 36px | 8px |
| lg | 40px | 40px | 10px |

## Examples

### Single Selection (Time Range Picker)

```tsx
function TimeRangePicker() {
  const [range, setRange] = useState(["7d"])

  return (
    <ToggleGroup
      value={range}
      onValueChange={(value) => {
        if (value) setRange(value)
      }}
      variant="outline"
      spacing={0}
    >
      <ToggleGroupItem value="1d">1D</ToggleGroupItem>
      <ToggleGroupItem value="7d">7D</ToggleGroupItem>
      <ToggleGroupItem value="30d">30D</ToggleGroupItem>
      <ToggleGroupItem value="90d">90D</ToggleGroupItem>
    </ToggleGroup>
  )
}
```

### Multiple Selection (Text Formatting)

```tsx
function TextFormatting() {
  return (
    <ToggleGroup variant="outline" spacing={0}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

### View Switcher (Icon-Only)

```tsx
function ViewSwitcher() {
  const [view, setView] = useState(["grid"])

  return (
    <ToggleGroup
      value={view}
      onValueChange={(value) => {
        if (value) setView(value)
      }}
      variant="outline"
      spacing={0}
    >
      <ToggleGroupItem value="grid" aria-label="Grid view">
        <GridIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="list" aria-label="List view">
        <ListIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

### Vertical Layout with Spacing

```tsx
<ToggleGroup orientation="vertical" spacing={2} variant="outline">
  <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
  <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
  <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
</ToggleGroup>
```

### Separated Buttons (Spacing > 0)

```tsx
<ToggleGroup variant="outline" spacing={4}>
  <ToggleGroupItem value="filter1">Active</ToggleGroupItem>
  <ToggleGroupItem value="filter2">Pending</ToggleGroupItem>
  <ToggleGroupItem value="filter3">Archived</ToggleGroupItem>
</ToggleGroup>
```

## Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Focus the group (first/last item based on direction) |
| ArrowRight / ArrowDown | Move focus to next item |
| ArrowLeft / ArrowUp | Move focus to previous item |
| Space / Enter | Toggle the focused item |
| Home | Focus first item |
| End | Focus last item |

Arrow key direction depends on `orientation`: horizontal uses Left/Right, vertical uses Up/Down.

## Accessibility

- Uses `role="group"` for the container
- Each toggle uses `aria-pressed` to indicate state
- Icon-only buttons **must** include `aria-label`
- Keyboard navigation follows ARIA authoring practices
- Focus management automatically handles arrow key navigation

## Styling Notes

### Joined Buttons (spacing=0)

When `spacing={0}`, items are visually joined:
- First item keeps left border radius (or top for vertical)
- Middle items have no border radius
- Last item keeps right border radius (or bottom for vertical)
- Outline variant: middle items share borders (no duplicate borders)

### Context Inheritance

Items automatically inherit `variant` and `size` from the parent ToggleGroup via React context. You can override these per-item if needed.

## Related

- [Toggle](./toggle.llm.md) - Single toggle button
- [Button](./button.llm.md) - Standard button component
- [RadioGroup](./radio-group.llm.md) - Radio button groups
