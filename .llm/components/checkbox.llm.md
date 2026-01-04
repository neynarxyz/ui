# Checkbox

Binary selection component for forms, settings, and multi-select interfaces.

## Import

```tsx
import { Checkbox } from "@neynar/ui/checkbox"
```

## Anatomy

```tsx
<Checkbox />
```

The component includes a built-in indicator with check icon - no need for separate child components.

## Props

All Base UI Checkbox.Root props are supported. Common props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | - | Controlled checked state |
| defaultChecked | boolean | false | Initial checked state (uncontrolled) |
| onCheckedChange | (checked: boolean) => void | - | Called when state changes |
| disabled | boolean | false | Prevents user interaction |
| required | boolean | false | Must be checked before form submission |
| name | string | - | Form field name |
| value | string | - | Form value when checked |
| indeterminate | boolean | false | Show indeterminate/mixed state |
| readOnly | boolean | false | Prevents state changes but shows value |

### Styling Props

| Prop | Type | Description |
|------|------|-------------|
| className | string | Additional CSS classes |

## Data Attributes

Use these for custom styling:

| Attribute | When Present |
|-----------|--------------|
| data-checked | Checkbox is checked |
| data-unchecked | Checkbox is unchecked |
| data-disabled | Component is disabled |
| data-readonly | Component is readonly |
| data-required | Field is required |
| data-invalid | Validation failed (with Field) |
| data-focused | Checkbox has focus |

## Examples

### Basic Usage

```tsx
<label className="flex items-center gap-2">
  <Checkbox />
  <span>Accept terms and conditions</span>
</label>
```

### Controlled State

```tsx
function NewsletterSubscription() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <label className="flex items-center gap-2">
      <Checkbox
        checked={subscribed}
        onCheckedChange={(checked) => setSubscribed(checked as boolean)}
      />
      <span>Subscribe to newsletter</span>
    </label>
  )
}
```

### With Label Component

```tsx
import { Label } from "@neynar/ui/label"

<label className="flex items-center gap-2">
  <Checkbox defaultChecked />
  <Label>Enable notifications</Label>
</label>
```

### With Description

```tsx
<label className="flex items-start gap-3">
  <Checkbox defaultChecked />
  <div className="flex-1">
    <Label>Email notifications</Label>
    <p className="text-muted-foreground text-xs">
      Receive email updates about your account activity
    </p>
  </div>
</label>
```

### Form Integration

```tsx
<form>
  <fieldset className="space-y-3">
    <legend className="text-sm font-medium">Preferences</legend>

    <label className="flex items-center gap-2">
      <Checkbox name="weekly-summary" defaultChecked />
      <Label>Send weekly summaries</Label>
    </label>

    <label className="flex items-center gap-2">
      <Checkbox name="dark-mode" />
      <Label>Enable dark mode</Label>
    </label>

    <label className="flex items-center gap-2">
      <Checkbox name="public-profile" required />
      <Label>I accept the terms of service *</Label>
    </label>
  </fieldset>
</form>
```

### Disabled State

```tsx
<label className="flex items-center gap-2">
  <Checkbox disabled defaultChecked />
  <Label>Admin access (requires Pro plan)</Label>
</label>
```

### Permission Settings Example

```tsx
function APIPermissions() {
  const [permissions, setPermissions] = useState({
    readAccess: true,
    writeAccess: false,
    adminAccess: false,
  })

  const togglePermission = (key: keyof typeof permissions) => {
    setPermissions(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-3">
      <label className="flex items-start gap-3">
        <Checkbox
          checked={permissions.readAccess}
          onCheckedChange={() => togglePermission('readAccess')}
        />
        <div className="flex-1">
          <Label>Read Access</Label>
          <p className="text-muted-foreground text-xs">
            Fetch casts, users, and channel data
          </p>
        </div>
      </label>

      <label className="flex items-start gap-3">
        <Checkbox
          checked={permissions.writeAccess}
          onCheckedChange={() => togglePermission('writeAccess')}
        />
        <div className="flex-1">
          <Label>Write Access</Label>
          <p className="text-muted-foreground text-xs">
            Publish casts and update profiles
          </p>
        </div>
      </label>

      <label className="flex items-start gap-3">
        <Checkbox
          checked={permissions.adminAccess}
          onCheckedChange={() => togglePermission('adminAccess')}
          disabled
        />
        <div className="flex-1">
          <Label>Admin Access</Label>
          <p className="text-muted-foreground text-xs">
            Full administrative permissions (Enterprise only)
          </p>
        </div>
      </label>
    </div>
  )
}
```

## Keyboard

| Key | Action |
|-----|--------|
| Space | Toggle checked state |
| Enter | Toggle checked state (in forms) |
| Tab | Move focus to next element |
| Shift + Tab | Move focus to previous element |

## Accessibility

- Renders semantic HTML with hidden native checkbox input
- Full keyboard navigation support
- Proper ARIA attributes automatically applied
- Works with form labels via native label element
- Supports required field validation
- Focus visible states for keyboard users

## Styling Notes

- Size: 16px × 16px (size-4)
- Border radius: 4px
- Checked state shows primary color background
- Includes focus ring on keyboard focus
- Disabled state reduces opacity to 50%
- Peer class allows styling adjacent elements based on state

## Related

- [Label](./label.llm.md) - Accessible labels for form fields
- [Switch](./switch.llm.md) - Alternative for on/off toggles
- [Radio Group](./radio-group.llm.md) - Single selection from multiple options
