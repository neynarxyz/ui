# ButtonGroup

Groups related buttons together with fused borders and shared styling for toolbars, split buttons, and bulk actions.

## Import

```tsx
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@neynar/ui/button-group"
```

## Anatomy

```tsx
<ButtonGroup orientation="horizontal">
  <Button>First</Button>
  <ButtonGroupSeparator />
  <Button>Second</Button>
  <ButtonGroupText>Status</ButtonGroupText>
</ButtonGroup>
```

## Components

| Component | Description |
|-----------|-------------|
| ButtonGroup | Root container with fused border styling |
| ButtonGroupSeparator | Visual divider between button sections |
| ButtonGroupText | Text/status display element within group |

## Props

### ButtonGroup

Extends all native `div` props plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | "horizontal" \| "vertical" | "horizontal" | Layout direction of buttons |

**Auto-behaviors:**
- Fuses borders between adjacent buttons
- Rounds only outer corners
- Handles focus visibility (z-index management)
- Supports Input and Select components

### ButtonGroupSeparator

Extends `Separator` component props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | "horizontal" \| "vertical" | "vertical" | Separator direction |

**Note:** Typically inherits orientation from parent ButtonGroup context, but can be overridden.

### ButtonGroupText

Extends all native `div` props plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| render | React.Element \| function | - | Custom element or render function |

**Render prop example:**

```tsx
<ButtonGroupText render={<span />}>
  Custom text
</ButtonGroupText>
```

## Data Attributes

| Attribute | Element | Description |
|-----------|---------|-------------|
| data-slot="button-group" | ButtonGroup | Identifies container |
| data-slot="button-group-text" | ButtonGroupText | Identifies text element |
| data-slot="button-group-separator" | ButtonGroupSeparator | Identifies separator |
| data-orientation | ButtonGroup | Current orientation value |

## Examples

### Basic Horizontal Group

```tsx
<ButtonGroup>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>
```

### Vertical Group with Icons

```tsx
<ButtonGroup orientation="vertical">
  <Button variant="secondary">
    <KeyIcon data-icon="inline-start" />
    API Keys
  </Button>
  <Button variant="secondary">
    <MailIcon data-icon="inline-start" />
    Webhooks
  </Button>
  <Button variant="secondary">
    <SettingsIcon data-icon="inline-start" />
    Settings
  </Button>
</ButtonGroup>
```

### Split Button Pattern

```tsx
<ButtonGroup>
  <Button variant="default">Save Changes</Button>
  <Button variant="default" size="icon">
    <ChevronDownIcon />
  </Button>
</ButtonGroup>
```

### With Separators

```tsx
<ButtonGroup>
  <Button variant="outline" size="sm">
    <CopyIcon data-icon="inline-start" />
    Copy
  </Button>
  <Button variant="outline" size="sm">
    <EditIcon data-icon="inline-start" />
    Edit
  </Button>
  <ButtonGroupSeparator />
  <Button variant="outline" size="sm">
    <TrashIcon data-icon="inline-start" />
    Delete
  </Button>
</ButtonGroup>
```

### Pagination with Text

```tsx
<ButtonGroup>
  <Button variant="outline" size="sm" disabled>
    Previous
  </Button>
  <ButtonGroupText>1 of 10</ButtonGroupText>
  <Button variant="outline" size="sm">
    Next
  </Button>
</ButtonGroup>
```

### Bulk Actions with Status

```tsx
<ButtonGroup>
  <ButtonGroupText>
    <CheckIcon />
    3 selected
  </ButtonGroupText>
  <Button variant="outline" size="sm">
    <RefreshCwIcon data-icon="inline-start" />
    Regenerate
  </Button>
  <Button variant="outline" size="sm">
    <DownloadIcon data-icon="inline-start" />
    Export
  </Button>
  <ButtonGroupSeparator />
  <Button variant="outline" size="sm">
    <TrashIcon data-icon="inline-start" />
    Delete
  </Button>
</ButtonGroup>
```

### Search Bar with Input

```tsx
<ButtonGroup>
  <Input placeholder="Search..." className="flex-1" />
  <Button variant="outline" size="icon">
    <SearchIcon />
  </Button>
</ButtonGroup>
```

### Filter Toggle Group

```tsx
function FilterExample() {
  const [filter, setFilter] = useState("all")

  return (
    <ButtonGroup>
      <Button
        variant={filter === "all" ? "secondary" : "outline"}
        size="sm"
        onClick={() => setFilter("all")}
      >
        All
      </Button>
      <Button
        variant={filter === "active" ? "secondary" : "outline"}
        size="sm"
        onClick={() => setFilter("active")}
      >
        Active
      </Button>
      <Button
        variant={filter === "inactive" ? "secondary" : "outline"}
        size="sm"
        onClick={() => setFilter("inactive")}
      >
        Inactive
      </Button>
    </ButtonGroup>
  )
}
```

## Keyboard

ButtonGroup inherits keyboard navigation from child components:

| Key | Action |
|-----|--------|
| Tab | Navigate to next focusable element |
| Shift+Tab | Navigate to previous focusable element |
| Space/Enter | Activate focused button |

## Accessibility

- Uses `role="group"` to semantically group related buttons
- Maintains proper focus order through natural DOM structure
- Focus visibility handled with z-index elevation on `:focus-visible`
- Child buttons maintain individual ARIA attributes and keyboard support

## Related

- [Button](./button.llm.md) - Individual button component
- [Separator](./separator.llm.md) - Standalone separator
- [Input](./input.llm.md) - Works with Input in search patterns
- [Select](./select.llm.md) - Works with Select in filter patterns
