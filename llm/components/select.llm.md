# Select

Dropdown component for selecting a single value from a list of options with grouping, icons, and keyboard navigation.

## Import

```tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@neynar/ui/select"
```

## Anatomy

```tsx
<Select>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Group Label</SelectLabel>
      <SelectItem value="1">Option 1</SelectItem>
      <SelectItem value="2">Option 2</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Another Group</SelectLabel>
      <SelectItem value="3">Option 3</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

## Components

| Component | Description |
|-----------|-------------|
| Select | Root container, manages selection state and keyboard navigation |
| SelectTrigger | Button that opens the dropdown, includes chevron icon automatically |
| SelectValue | Displays the selected item's value or placeholder |
| SelectContent | Dropdown popup with automatic portal, positioning, and scroll buttons |
| SelectGroup | Groups related items under a label |
| SelectLabel | Non-selectable label for a group |
| SelectItem | Individual selectable option with automatic check indicator |
| SelectSeparator | Visual divider between groups |
| SelectScrollUpButton | Scroll indicator at top (automatic) |
| SelectScrollDownButton | Scroll indicator at bottom (automatic) |

## Props

### Select

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Controlled selected value |
| defaultValue | string | - | Uncontrolled default value |
| onValueChange | (value: string \| null) => void | - | Called when selection changes |
| disabled | boolean | false | Disables the entire select |
| name | string | - | Name attribute for form submission |

### SelectTrigger

Button that opens the dropdown. Automatically includes chevron icon.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | "sm" \| "default" | "default" | Trigger button size |
| className | string | - | Additional CSS classes |

### SelectValue

Displays the selected value or placeholder. Automatically shows selected item text.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| placeholder | string | - | Text shown when no value selected |
| className | string | - | Additional CSS classes |

### SelectContent

Automatically renders in a portal with backdrop overlay, positioning, and scroll indicators.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | "top" \| "right" \| "bottom" \| "left" | "bottom" | Preferred side to position relative to trigger |
| sideOffset | number | 4 | Distance from trigger in pixels |
| align | "start" \| "center" \| "end" | "center" | Alignment relative to trigger |
| alignOffset | number | 0 | Offset from aligned position |
| alignItemWithTrigger | boolean | true | Whether to align selected item with trigger |
| className | string | - | Additional CSS classes |

### SelectItem

Individual option. Automatically shows check icon when selected.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | **Required.** Unique value for this option |
| disabled | boolean | false | Disables this specific item |
| label | string | - | Label for keyboard text navigation (defaults to text content) |
| className | string | - | Additional CSS classes |

### SelectGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |

### SelectLabel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |

### SelectSeparator

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |

## Data Attributes (for styling)

### SelectTrigger

| Attribute | When Present |
|-----------|--------------|
| data-size | Always present with value "sm" or "default" |
| data-placeholder | No value selected |
| aria-invalid | Invalid state (for forms) |

### SelectItem

| Attribute | When Present |
|-----------|--------------|
| data-selected | Item is currently selected |
| data-highlighted | Item is keyboard-highlighted |
| data-disabled | Item is disabled |

### SelectContent

| Attribute | When Present |
|-----------|--------------|
| data-open | Popup is open |
| data-closed | Popup is closed |
| data-side | Position side (top/right/bottom/left) |

## Examples

### Basic Select

```tsx
<Select defaultValue="option2">
  <SelectTrigger className="w-[200px]">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### Controlled with State

```tsx
const [region, setRegion] = useState("us-east-1")

<Select value={region} onValueChange={(v) => v && setRegion(v)}>
  <SelectTrigger className="w-full">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
    <SelectItem value="us-west-2">US West (Oregon)</SelectItem>
    <SelectItem value="eu-west-1">EU (Ireland)</SelectItem>
  </SelectContent>
</Select>
```

### With Icons

```tsx
<Select defaultValue="admin">
  <SelectTrigger className="w-[280px]">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="admin">
      <SettingsIcon data-icon="inline-start" />
      Administrator
    </SelectItem>
    <SelectItem value="user">
      <UserIcon data-icon="inline-start" />
      Regular User
    </SelectItem>
  </SelectContent>
</Select>
```

### Grouped Options

```tsx
<Select defaultValue="react">
  <SelectTrigger className="w-[280px]">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Frontend</SelectLabel>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="vue">Vue</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Backend</SelectLabel>
      <SelectItem value="node">Node.js</SelectItem>
      <SelectItem value="python">Python</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

### Form Integration

```tsx
<div className="space-y-2">
  <label htmlFor="country" className="text-sm font-medium">
    Country
  </label>
  <Select defaultValue="us">
    <SelectTrigger id="country">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
    </SelectContent>
  </Select>
  <p className="text-muted-foreground text-xs">
    Select your country of residence.
  </p>
</div>
```

### Small Size

```tsx
<Select defaultValue="sm">
  <SelectTrigger size="sm" className="w-[180px]">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="sm">Small option</SelectItem>
    <SelectItem value="sm2">Another small</SelectItem>
  </SelectContent>
</Select>
```

### Disabled States

```tsx
// Disabled select
<Select defaultValue="option1" disabled>
  <SelectTrigger className="w-[200px]">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>

// Disabled items
<Select defaultValue="available">
  <SelectTrigger className="w-[200px]">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="available">Available</SelectItem>
    <SelectItem value="unavailable" disabled>
      Unavailable
    </SelectItem>
  </SelectContent>
</Select>
```

### Placeholder

```tsx
<Select>
  <SelectTrigger className="w-[280px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>
```

## Keyboard

| Key | Action |
|-----|--------|
| Space / Enter | Open dropdown (when closed) |
| Space / Enter | Select highlighted item (when open) |
| Escape | Close dropdown |
| ArrowDown | Highlight next item |
| ArrowUp | Highlight previous item |
| Home | Highlight first item |
| End | Highlight last item |
| Type characters | Jump to item starting with typed text |
| Tab | Close and move to next focusable element |

## Accessibility

- Uses `role="combobox"` on trigger with proper ARIA attributes
- Implements `aria-expanded`, `aria-controls`, and `aria-activedescendant`
- Selected items marked with `aria-selected="true"`
- Disabled items use `aria-disabled="true"`
- Keyboard navigation follows ARIA combobox pattern
- Focus management returns to trigger on close
- Screen readers announce selection changes

## Related

- [Combobox](/components/combobox) - Searchable select with filtering
- [Radio Group](/components/radio-group) - Single selection from visible options
- [Command](/components/command) - Command palette with search
