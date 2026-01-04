# Button

Versatile button component with multiple visual variants, semantic colors, and flexible sizing.

## Import

```tsx
import { Button } from "@neynar/ui/button"
```

## Anatomy

```tsx
<Button variant="default" size="default">
  Click me
</Button>
```

## Props

### Button

Extends all standard HTML button attributes plus Base UI Button props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | "default" \| "outline" \| "secondary" \| "ghost" \| "destructive" \| "success" \| "warning" \| "info" \| "link" | "default" | Visual style variant |
| size | "default" \| "xs" \| "sm" \| "lg" \| "icon" \| "icon-xs" \| "icon-sm" \| "icon-lg" | "default" | Button size |
| disabled | boolean | false | Disables the button |
| render | ReactElement \| Function | - | Custom element to render as (maintains button semantics) |
| className | string | - | Additional CSS classes |
| focusableWhenDisabled | boolean | true | Whether button remains focusable when disabled |
| nativeButton | boolean | true | Whether component renders native `<button>` when using render prop |

All standard `<button>` HTML attributes are supported: `type`, `onClick`, `onFocus`, `aria-label`, etc.

### Icon Placement

Icons are placed using `data-icon` attributes on child elements:

```tsx
// Icon at start
<Button>
  <PlusIcon data-icon="inline-start" />
  Create
</Button>

// Icon at end
<Button>
  Continue
  <ArrowRightIcon data-icon="inline-end" />
</Button>
```

The component automatically sizes icons to `size-4` (16px) except for `xs` sizes which use `size-3` (12px). Icons receive proper spacing via gap utilities.

### Render Prop

Use the `render` prop to compose the button with other elements while maintaining button semantics:

```tsx
// Render as link
<Button render={<a href="/dashboard" />}>
  Dashboard
</Button>

// Compose with Next.js Link
<Button render={<Link href="/login" />}>
  Sign in
</Button>
```

## Variants

### Visual Variants

| Variant | Use Case |
|---------|----------|
| default | Primary actions, most important button in a context |
| outline | Secondary actions, neutral emphasis with border |
| secondary | Alternative actions, less emphasis than default |
| ghost | Tertiary actions, minimal visual weight |
| link | Text-only actions that look like links |

### Semantic Variants

| Variant | Use Case |
|---------|----------|
| destructive | Delete, revoke, or other destructive actions |
| success | Confirm, approve, or positive actions |
| warning | Caution, proceed with care actions |
| info | Informational or help actions |

### Size Variants

| Size | Height | Use Case |
|------|--------|----------|
| xs | 24px (h-6) | Compact UIs, inline actions, tags |
| sm | 32px (h-8) | Dense tables, toolbars, secondary actions |
| default | 36px (h-9) | Standard buttons in forms and dialogs |
| lg | 40px (h-10) | Marketing pages, prominent CTAs |

### Icon-Only Sizes

| Size | Dimensions | Use Case |
|------|------------|----------|
| icon-xs | 24x24px | Compact icon buttons |
| icon-sm | 32x32px | Small icon buttons in toolbars |
| icon | 36x36px | Standard icon buttons |
| icon-lg | 40x40px | Large icon buttons for emphasis |

## Data Attributes

| Attribute | When Present |
|-----------|--------------|
| data-slot="button" | Always present (for styling context) |
| data-disabled | Button is disabled |
| data-focusable | Button remains focusable when disabled |
| aria-expanded | Button controls expandable content (auto-styled) |
| aria-invalid | Button is in invalid state (auto-styled with destructive ring) |

## Examples

### Basic Usage

```tsx
<Button>Click me</Button>
<Button variant="outline">Cancel</Button>
<Button variant="destructive">Delete</Button>
```

### With Icons

```tsx
// Icon at start
<Button>
  <PlusIcon data-icon="inline-start" />
  Create Key
</Button>

// Icon at end
<Button variant="secondary">
  Continue
  <SendIcon data-icon="inline-end" />
</Button>

// Icon only - requires aria-label
<Button size="icon" variant="ghost" aria-label="Settings">
  <SettingsIcon />
</Button>
```

### Loading State

```tsx
function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Button disabled={isLoading}>
      {isLoading ? (
        <Loader2Icon data-icon="inline-start" className="animate-spin" />
      ) : (
        <SendIcon data-icon="inline-start" />
      )}
      {isLoading ? "Sending..." : "Send"}
    </Button>
  )
}
```

### API Key Management Context

```tsx
function APIKeyActions() {
  const [copied, setCopied] = useState(false)

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={() => setCopied(true)}>
        <CopyIcon data-icon="inline-start" />
        {copied ? "Copied!" : "Copy"}
      </Button>
      <Button variant="outline" size="sm">
        <RefreshCwIcon data-icon="inline-start" />
        Regenerate
      </Button>
      <Button variant="destructive" size="sm">
        <TrashIcon data-icon="inline-start" />
        Revoke
      </Button>
    </div>
  )
}
```

### Form Actions

```tsx
<div className="flex justify-end gap-2">
  <Button variant="outline" type="button">Cancel</Button>
  <Button type="submit">
    <SendIcon data-icon="inline-start" />
    Save Changes
  </Button>
</div>
```

## Keyboard

| Key | Action |
|-----|--------|
| Space | Activate button |
| Enter | Activate button |
| Tab | Move focus to/from button |

## Accessibility

- Rendered as native `<button>` element by default
- Supports `aria-label` for icon-only buttons (required for accessibility)
- Disabled buttons remain focusable by default (set `focusableWhenDisabled={false}` to change)
- Focus visible ring with 3px width for clear focus indication
- Supports `aria-invalid` state for form validation with red ring/border
- Screen readers announce button role and state automatically

## Styling Notes

### Icon Auto-Sizing

Icons are automatically sized based on button size:
- Default sizes: 16px (`size-4`)
- `xs` and `icon-xs`: 12px (`size-3`)
- Override with explicit class: `<Icon className="size-5" />`

### Button Group Context

When inside `data-slot="button-group"`, buttons automatically adjust border radius to connect seamlessly.

### Dark Mode

All variants include dark mode optimized colors that automatically adapt based on theme settings.

## Related

- **Button Group** - Group multiple buttons with connected borders
- **Toggle Button** - Button with on/off state
- **Dialog** - Use Button as DialogTrigger
