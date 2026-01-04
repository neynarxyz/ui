# Tooltip

Displays contextual information on hover or focus.

## Import

```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@neynar/ui/tooltip"
```

## Anatomy

```tsx
<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>Helpful information</TooltipContent>
</Tooltip>
```

## Components

| Component | Description |
|-----------|-------------|
| Tooltip | Root container, manages open state automatically |
| TooltipTrigger | Element that shows tooltip on hover/focus |
| TooltipContent | Popup content with automatic portal, positioning, and arrow |
| TooltipProvider | Optional provider for configuring shared delay (auto-included in Tooltip) |

## Props

### Tooltip

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultOpen | boolean | - | Whether tooltip is initially open (uncontrolled) |
| open | boolean | - | Controlled open state |
| onOpenChange | (open: boolean) => void | - | Called when open state changes |
| trackCursorAxis | 'none' \| 'both' \| 'x' \| 'y' | 'none' | Which axis the tooltip should track the cursor on |

### TooltipTrigger

Standard trigger props with `render` prop support. Use `render` to customize:

```tsx
<TooltipTrigger render={<Button variant="ghost" size="icon" />}>
  <SettingsIcon />
</TooltipTrigger>
```

### TooltipContent

Automatically renders portal with positioner and arrow.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' | Which side to position tooltip |
| sideOffset | number | 4 | Distance from trigger in pixels |
| align | 'start' \| 'center' \| 'end' | 'center' | How to align tooltip relative to side |
| alignOffset | number | 0 | Offset along alignment axis in pixels |
| className | string | - | Additional CSS classes |

### TooltipProvider

Only needed when sharing state across multiple tooltips. Tooltip automatically includes provider.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| delay | number | 0 | Delay in ms before showing tooltips |

## Data Attributes (for styling)

| Attribute | When Present |
|-----------|--------------|
| data-open | Tooltip is open |
| data-closed | Tooltip is closed |
| data-side | Current side: 'top' \| 'bottom' \| 'left' \| 'right' |
| data-align | Current alignment: 'start' \| 'center' \| 'end' |
| data-starting-style | Tooltip is animating in |
| data-ending-style | Tooltip is animating out |
| data-instant | Animations should be instant |

## Examples

### Basic Usage

```tsx
<Tooltip>
  <TooltipTrigger>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This is a tooltip</p>
  </TooltipContent>
</Tooltip>
```

### Icon Button with Tooltip

```tsx
<Tooltip>
  <TooltipTrigger>
    <Button variant="ghost" size="icon">
      <SettingsIcon />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Settings</p>
  </TooltipContent>
</Tooltip>
```

### Placement Options

```tsx
<Tooltip>
  <TooltipTrigger>
    <Button>Show below</Button>
  </TooltipTrigger>
  <TooltipContent side="bottom" align="start">
    <p>Positioned at bottom-start</p>
  </TooltipContent>
</Tooltip>
```

### With Keyboard Shortcut

```tsx
<Tooltip>
  <TooltipTrigger>
    <Button variant="outline">Save</Button>
  </TooltipTrigger>
  <TooltipContent>
    <div className="flex items-center gap-2">
      <span>Save document</span>
      <kbd className="bg-background text-foreground rounded border px-1.5 py-0.5 font-mono text-xs">
        ⌘S
      </kbd>
    </div>
  </TooltipContent>
</Tooltip>
```

### Help Icon with Detailed Info

```tsx
<Tooltip>
  <TooltipTrigger>
    <button className="text-muted-foreground hover:text-foreground inline-flex items-center transition-colors">
      <HelpCircleIcon className="size-4" />
    </button>
  </TooltipTrigger>
  <TooltipContent side="top">
    <p className="max-w-xs">
      Track your API requests, rate limits, and usage patterns across all your applications.
    </p>
  </TooltipContent>
</Tooltip>
```

### Always Open (Controlled)

```tsx
<Tooltip defaultOpen>
  <TooltipTrigger>
    <Button variant="outline">Always visible</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This tooltip is always visible</p>
  </TooltipContent>
</Tooltip>
```

## Keyboard

| Key | Action |
|-----|--------|
| Tab | Move focus to/from trigger |
| Escape | Close tooltip |

## Accessibility

- Automatically adds ARIA attributes for screen readers
- Tooltip appears on hover and focus for keyboard users
- Content announced to screen readers when opened
- Works with disabled elements (tooltip still shows)
- Arrow provides visual relationship between trigger and content

## Related

- [Popover](./popover.llm.md) - For interactive content requiring click to open
- [HoverCard](./hover-card.llm.md) - For rich preview content on hover
