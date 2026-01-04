# Popover

Floating content panel anchored to a trigger element for contextual information, forms, or interactive content.

## Import

```tsx
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "@neynar/ui/popover"
```

## Anatomy

```tsx
<Popover>
  <PopoverTrigger>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Title</PopoverTitle>
      <PopoverDescription>Description</PopoverDescription>
    </PopoverHeader>
    {/* Content */}
  </PopoverContent>
</Popover>
```

## Components

| Component | Description |
|-----------|-------------|
| Popover | Root container managing open state |
| PopoverTrigger | Button that opens the popover |
| PopoverContent | Main content panel with portal and positioning |
| PopoverHeader | Optional wrapper for title and description |
| PopoverTitle | Heading label (h2 element) |
| PopoverDescription | Optional description text |

## Props

### Popover

Root component managing state. Use `open`/`onOpenChange` for controlled state.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| defaultOpen | boolean | false | Initial open state (uncontrolled) |
| onOpenChange | (open: boolean) => void | - | Callback when open state changes |
| modal | boolean \| "trap-focus" | false | Modal behavior: `true` locks scroll and traps focus, `"trap-focus"` only traps focus |

### PopoverTrigger

Opens the popover when clicked. Renders a button by default.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| render | ReactElement | - | Custom element to use as trigger |
| openOnHover | boolean | false | Open popover on hover instead of click |
| delay | number | 300 | Hover delay in ms (requires openOnHover) |

### PopoverContent

Automatically renders portal and positioner. Includes fade and zoom animations.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | "top" \| "right" \| "bottom" \| "left" | "bottom" | Which side of trigger to display on |
| align | "start" \| "center" \| "end" | "center" | Alignment relative to trigger |
| sideOffset | number | 4 | Distance from trigger in pixels |
| alignOffset | number | 0 | Offset along alignment axis in pixels |
| className | string | - | Additional CSS classes (default width is w-72) |

### PopoverHeader

Optional container for title and description with consistent spacing.

Standard `div` props.

### PopoverTitle

Heading label with ARIA attributes. Renders h2 element.

Standard Base UI Title props (className, render, etc).

### PopoverDescription

Optional description text styled with muted foreground.

Standard Base UI Description props (className, render, etc).

## Data Attributes

Available on PopoverContent for styling:

| Attribute | When Present |
|-----------|--------------|
| data-open | Popover is open |
| data-closed | Popover is closed |
| data-side | Value is current side (top/right/bottom/left) |
| data-starting-style | During opening animation |
| data-ending-style | During closing animation |

## Examples

### User Profile Preview

```tsx
<Popover>
  <PopoverTrigger>
    <button className="flex items-center gap-2">
      <Avatar />
      <span>vitalik.eth</span>
    </button>
  </PopoverTrigger>
  <PopoverContent className="w-80" side="bottom" align="start">
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <Avatar size="lg" />
        <div className="flex-1">
          <p className="font-semibold">vitalik.eth</p>
          <p className="text-muted-foreground text-sm">@vitalik</p>
        </div>
        <Button size="sm">Follow</Button>
      </div>
      <p className="text-sm">Creator of Ethereum...</p>
    </div>
  </PopoverContent>
</Popover>
```

### Filter Form

```tsx
function FilterPopover() {
  const [open, setOpen] = useState(false)
  const [dateRange, setDateRange] = useState("last-7-days")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <Button variant="outline" size="sm">
          <SettingsIcon className="mr-2 size-4" />
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" side="bottom" align="end">
        <PopoverHeader>
          <PopoverTitle>Filter Options</PopoverTitle>
          <PopoverDescription>
            Customize the data displayed
          </PopoverDescription>
        </PopoverHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date-range">Date Range</Label>
            <select
              id="date-range"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="last-7-days">Last 7 days</option>
              <option value="last-30-days">Last 30 days</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button size="sm" onClick={() => setOpen(false)}>
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

### Contextual Help

```tsx
<div className="flex items-center gap-2">
  <Label htmlFor="api-key">API Key</Label>
  <Popover>
    <PopoverTrigger>
      <button className="text-muted-foreground hover:text-foreground">
        <HelpCircleIcon className="size-4" />
      </button>
    </PopoverTrigger>
    <PopoverContent className="w-80" side="right">
      <PopoverHeader>
        <PopoverTitle>About API Keys</PopoverTitle>
      </PopoverHeader>
      <div className="space-y-2 text-sm">
        <p>API keys authenticate requests to the Neynar API...</p>
        <ul className="text-muted-foreground ml-4 list-disc space-y-1">
          <li>Production keys have higher rate limits</li>
          <li>Development keys are for testing only</li>
        </ul>
      </div>
    </PopoverContent>
  </Popover>
</div>
```

### Custom Trigger Element

```tsx
<Popover>
  <PopoverTrigger>
    <Button variant="ghost" size="icon-sm">
      <InfoIcon className="size-4" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80" side="left">
    <PopoverHeader>
      <PopoverTitle>Billing Information</PopoverTitle>
      <PopoverDescription>
        Your subscription details
      </PopoverDescription>
    </PopoverHeader>
    <div className="space-y-3 text-sm">
      <div className="flex justify-between">
        <span className="text-muted-foreground">Current plan</span>
        <span className="font-medium">Pro ($99/mo)</span>
      </div>
      <div className="flex justify-between">
        <span className="text-muted-foreground">Next charge</span>
        <span className="font-medium">$99.00</span>
      </div>
    </div>
  </PopoverContent>
</Popover>
```

### Hover Trigger

```tsx
<Popover>
  <PopoverTrigger openOnHover delay={200}>
    <span className="underline decoration-dotted">Hover me</span>
  </PopoverTrigger>
  <PopoverContent side="top">
    <p className="text-sm">This opens on hover with 200ms delay</p>
  </PopoverContent>
</Popover>
```

## Keyboard

| Key | Action |
|-----|--------|
| Escape | Close popover |
| Tab | Navigate focus within popover |

## Accessibility

- PopoverTitle automatically provides `aria-labelledby` for the popover
- PopoverDescription provides `aria-describedby` when present
- Focus is trapped within popover when `modal` is true or "trap-focus"
- Popover closes on Escape key press
- Focus returns to trigger when popover closes

## Related

- **Tooltip** - For simple text hints without interaction
- **Dropdown Menu** - For menus with selectable actions
- **Dialog** - For modal content requiring user action
- **Hover Card** - Similar to Popover but specifically for hover interactions
