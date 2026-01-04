# Switch

Toggle switch for binary on/off settings with keyboard support and form integration.

## Import

```tsx
import { Switch } from "@neynar/ui/switch"
```

## Anatomy

```tsx
<Switch />
```

The Switch component is a single component that internally uses `Switch.Root` and `Switch.Thumb` from Base UI.

## Props

### Switch

Extends all props from `Switch.Root.Props` from `@base-ui/react/switch`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | "sm" \| "default" | "default" | Size variant of the switch |
| checked | boolean | - | Controlled checked state |
| defaultChecked | boolean | false | Initial checked state (uncontrolled) |
| onCheckedChange | (checked: boolean, eventDetails) => void | - | Called when checked state changes |
| disabled | boolean | false | Disables interaction |
| readOnly | boolean | false | Prevents state changes but allows focus |
| required | boolean | false | Marks as required for form validation |
| name | string | - | Form field name |
| id | string | - | Element id for label association |
| aria-invalid | boolean | - | Shows error styling for validation |
| className | string | - | Additional CSS classes |

## Sizes

| Size | Dimensions | Use Case |
|------|------------|----------|
| sm | 14px × 24px | Compact layouts, dense settings panels |
| default | 18.4px × 32px | Standard size for most use cases |

## Data Attributes

The following data attributes are automatically applied for styling:

| Attribute | When Present |
|-----------|--------------|
| data-checked | Switch is on |
| data-unchecked | Switch is off |
| data-disabled | Switch is disabled |
| data-size="sm" \| "default" | Current size variant |

## Examples

### Basic Usage

```tsx
import { Switch } from "@neynar/ui/switch"
import { Label } from "@neynar/ui/label"

function Example() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
  )
}
```

### Controlled State

```tsx
import { useState } from "react"
import { Switch } from "@neynar/ui/switch"
import { Label } from "@neynar/ui/label"

function ControlledExample() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <Switch
          id="webhooks"
          checked={enabled}
          onCheckedChange={setEnabled}
        />
        <Label htmlFor="webhooks">Enable webhooks</Label>
      </div>
      <p className="text-sm text-muted-foreground">
        Status: {enabled ? "Enabled" : "Disabled"}
      </p>
    </div>
  )
}
```

### Settings Panel

```tsx
import { Switch } from "@neynar/ui/switch"
import { Label } from "@neynar/ui/label"

function SettingsPanel() {
  return (
    <div className="border-border divide-border divide-y rounded-lg border">
      <div className="flex items-center justify-between p-4">
        <div className="space-y-0.5">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Notifications
          </Label>
          <p className="text-muted-foreground text-xs">
            Receive alerts about important updates
          </p>
        </div>
        <Switch id="email" size="sm" defaultChecked />
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="space-y-0.5">
          <Label htmlFor="marketing" className="text-sm font-medium">
            Marketing Emails
          </Label>
          <p className="text-muted-foreground text-xs">
            Product updates and announcements
          </p>
        </div>
        <Switch id="marketing" size="sm" />
      </div>
    </div>
  )
}
```

### Form Integration

```tsx
import { Switch } from "@neynar/ui/switch"
import { Label } from "@neynar/ui/label"

function FormExample() {
  return (
    <form>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="terms" className="text-sm">
            I agree to the terms and conditions
          </Label>
          <Switch id="terms" name="terms" required />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
```

### With Disabled State

```tsx
import { Switch } from "@neynar/ui/switch"
import { Label } from "@neynar/ui/label"

function DisabledExample() {
  const [parentEnabled, setParentEnabled] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="main">Enable Feature</Label>
        <Switch
          id="main"
          checked={parentEnabled}
          onCheckedChange={setParentEnabled}
        />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="sub" className="text-muted-foreground">
          Sub-option (requires feature)
        </Label>
        <Switch
          id="sub"
          size="sm"
          disabled={!parentEnabled}
          defaultChecked
        />
      </div>
    </div>
  )
}
```

### Invalid State

```tsx
import { Switch } from "@neynar/ui/switch"
import { Label } from "@neynar/ui/label"

function ValidationExample() {
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const isInvalid = submitted && !agreed

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="required">Accept terms (required)</Label>
        <Switch
          id="required"
          checked={agreed}
          onCheckedChange={setAgreed}
          aria-invalid={isInvalid}
        />
      </div>
      {isInvalid && (
        <p className="text-destructive text-sm">
          You must accept the terms to continue
        </p>
      )}
      <button onClick={() => setSubmitted(true)}>Submit</button>
    </div>
  )
}
```

## Keyboard Interaction

| Key | Action |
|-----|--------|
| Space | Toggle checked state |
| Enter | Toggle checked state |
| Tab | Move focus to/from switch |

## Accessibility

- Renders a native `<input type="checkbox">` for form integration and screen readers
- Supports `aria-invalid` for validation error states
- Automatically manages focus states with visible focus ring
- Works with `<Label>` via `htmlFor` prop for clickable labels
- Disabled switches are properly announced and non-interactive

## Styling Notes

- Use `aria-invalid` prop to show error state (red border and ring)
- The switch has an extended click area (`after:absolute after:-inset-x-3 after:-inset-y-2`) for easier interaction
- Dark mode automatically adjusts colors for unchecked state background
- Focus ring uses `ring-ring/50` with 3px width for accessibility

## Related

- [Label](./label.llm.md) - Associate labels with switches
- [Checkbox](./checkbox.llm.md) - Alternative for yes/no choices
- [RadioGroup](./radio-group.llm.md) - Multiple exclusive options
