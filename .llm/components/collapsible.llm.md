# Collapsible

Expandable sections that show and hide content with smooth animations.

## Import

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@neynar/ui/collapsible"
```

## Anatomy

```tsx
<Collapsible>
  <CollapsibleTrigger />
  <CollapsibleContent />
</Collapsible>
```

## Components

| Component | Description |
|-----------|-------------|
| Collapsible | Root container, manages open/closed state |
| CollapsibleTrigger | Button that toggles the content visibility |
| CollapsibleContent | Panel that shows/hides with animation |

## Props

### Collapsible

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| defaultOpen | boolean | - | Initial open state (uncontrolled) |
| onOpenChange | (open: boolean, details: object) => void | - | Called when open state changes |
| disabled | boolean | - | Disables all interactions |
| className | string \| function | - | CSS class or function returning class based on state |
| style | CSSProperties \| function | - | Style object or function returning styles based on state |
| render | ReactElement \| function | - | Custom render element or function |

### CollapsibleTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| nativeButton | boolean | true | Whether to render a native `<button>` element |
| className | string \| function | - | CSS class or function returning class based on state |
| style | CSSProperties \| function | - | Style object or function returning styles based on state |
| render | ReactElement \| function | - | Custom render element or function |

**Note**: Set `nativeButton={false}` if using `render` to replace with a non-button element (e.g., `<div>`).

### CollapsibleContent

Automatically animates height when opening/closing using CSS variables.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| keepMounted | boolean | false | Keep element in DOM when closed |
| hiddenUntilFound | boolean | false | Enable browser's page search to find and expand content |
| className | string \| function | - | CSS class or function returning class based on state |
| style | CSSProperties \| function | - | Style object or function returning styles based on state |
| render | ReactElement \| function | - | Custom render element or function |

**Note**: `hiddenUntilFound` overrides `keepMounted` and uses `hidden="until-found"` attribute.

### Render Prop

All components support the `render` prop to customize the rendered element:

```tsx
<CollapsibleTrigger render={<Button variant="outline" />}>
  Toggle Settings
</CollapsibleTrigger>
```

## Data Attributes

Use these for styling based on component state:

| Attribute | When Present | Where |
|-----------|--------------|-------|
| data-panel-open | Collapsible is open | Trigger |
| data-starting-style | Panel is animating in | Content |
| data-ending-style | Panel is animating out | Content |

## CSS Variables

Available for custom animations:

| Variable | Description | Where |
|----------|-------------|-------|
| --collapsible-panel-height | Current panel height | Content |
| --collapsible-panel-width | Current panel width | Content |

## Examples

### Basic Usage

```tsx
<Collapsible defaultOpen>
  <CollapsibleTrigger className="flex items-center justify-between border rounded-lg p-4">
    <span>Click to toggle</span>
    <ChevronDownIcon />
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="border-x border-b p-4">
      Hidden content that slides open
    </div>
  </CollapsibleContent>
</Collapsible>
```

### Controlled State

```tsx
function Settings() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Toggle</Button>

      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger>
          Settings {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Advanced settings panel</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
```

### Settings Panel with Icons

```tsx
<Collapsible>
  <CollapsibleTrigger className="flex items-center justify-between border rounded-lg p-4">
    <div className="flex items-center gap-3">
      <div className="bg-primary/10 text-primary rounded-md p-2">
        <SettingsIcon className="size-5" />
      </div>
      <div>
        <p className="font-medium">API Settings</p>
        <p className="text-sm text-muted-foreground">Configure rate limits</p>
      </div>
    </div>
    <ChevronDownIcon className="size-5" />
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="border-x border-b p-4">
      <Label htmlFor="rate-limit">Rate Limit</Label>
      <Input id="rate-limit" type="number" defaultValue="10000" />
    </div>
  </CollapsibleContent>
</Collapsible>
```

### Multiple Independent Sections

```tsx
function AdvancedSettings() {
  return (
    <div className="space-y-3">
      <Collapsible>
        <CollapsibleTrigger className="w-full border rounded-lg p-4">
          API Settings
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="border-x border-b p-4">API configuration</div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="w-full border rounded-lg p-4">
          Security
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="border-x border-b p-4">Security settings</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
```

### Nested Collapsibles

```tsx
<Collapsible defaultOpen>
  <CollapsibleTrigger className="border rounded-lg p-4">
    Integrations
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="border-x border-b p-4 space-y-2">
      <Collapsible>
        <CollapsibleTrigger className="border rounded p-3 text-sm">
          Email Integration
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-1 border rounded p-3">
            Configure email settings
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="border rounded p-3 text-sm">
          Webhooks
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-1 border rounded p-3">
            Configure webhooks
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </CollapsibleContent>
</Collapsible>
```

### Animated Chevron with Data Attributes

```tsx
<Collapsible>
  <CollapsibleTrigger className="group border rounded-lg p-4">
    <ChevronDownIcon className="transition-transform group-data-[panel-open]:rotate-180" />
    Expand Section
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="border-x border-b p-4">Content</div>
  </CollapsibleContent>
</Collapsible>
```

### Disabled State

```tsx
<Collapsible disabled>
  <CollapsibleTrigger className="border rounded-lg p-4 opacity-50 cursor-not-allowed">
    Disabled Section
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="border-x border-b p-4">Cannot be opened</div>
  </CollapsibleContent>
</Collapsible>
```

## Keyboard

| Key | Action |
|-----|--------|
| Space | Toggle when trigger is focused |
| Enter | Toggle when trigger is focused |

## Accessibility

- Trigger automatically receives `role="button"` and proper ARIA attributes
- Content visibility controlled with proper ARIA states
- Focus management handled automatically
- Keyboard navigation fully supported with Space/Enter keys
- Use `hiddenUntilFound` prop to enable browser's Ctrl+F/Cmd+F page search to find and expand collapsed content

## Related

- [Accordion](/components/accordion.llm.md) - For mutually exclusive collapsible sections
- [Dialog](/components/dialog.llm.md) - For modal content overlays
- [Tabs](/components/tabs.llm.md) - For switching between different views
