# Label

Accessible label component for form controls with automatic disabled state styling.

## Import

```tsx
import { Label } from "@neynar/ui/label"
```

## Anatomy

```tsx
<Label htmlFor="input-id">Label Text</Label>
<Input id="input-id" />
```

## Props

Extends all native HTML `<label>` element props including:

| Prop | Type | Description |
|------|------|-------------|
| htmlFor | string | ID of the associated form control (creates accessible relationship) |
| className | string | Additional CSS classes |
| children | ReactNode | Label content (text, icons, indicators, etc.) |

### Automatic Disabled States

The Label component automatically responds to disabled states:
- **peer-disabled**: When the associated input uses `disabled` prop
- **group-data-[disabled=true]**: When wrapped in a disabled group/fieldset

## Data Attributes

| Attribute | Value |
|-----------|-------|
| data-slot | "label" |

## Examples

### Basic Label with Input

```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### Required Field Indicator

```tsx
<Label htmlFor="username">
  Username
  <span className="text-destructive ml-1">*</span>
</Label>
<Input id="username" required />
```

### Label with Helper Icon

```tsx
import { InfoIcon } from "lucide-react"

<Label htmlFor="api-key">
  API Key
  <InfoIcon className="text-muted-foreground ml-1 size-3.5" />
</Label>
<Input id="api-key" />
<p className="text-muted-foreground text-sm">
  Find your API key in the dashboard settings
</p>
```

### Checkbox Label Pattern

```tsx
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms" className="font-normal cursor-pointer">
    I agree to the terms and conditions
  </Label>
</div>
```

### Radio Group Label Pattern

```tsx
<div className="space-y-3">
  <Label className="font-medium">Choose an option</Label>
  <RadioGroup defaultValue="option-1">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-1" id="opt-1" />
      <Label htmlFor="opt-1" className="font-normal cursor-pointer">
        Option 1
      </Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-2" id="opt-2" />
      <Label htmlFor="opt-2" className="font-normal cursor-pointer">
        Option 2
      </Label>
    </div>
  </RadioGroup>
</div>
```

### Switch with Description

```tsx
<div className="flex items-center justify-between">
  <div className="space-y-0.5">
    <Label htmlFor="notifications">Email Notifications</Label>
    <p className="text-muted-foreground text-sm">
      Receive email alerts for updates
    </p>
  </div>
  <Switch id="notifications" />
</div>
```

### Disabled State

```tsx
<div className="space-y-2">
  <Label htmlFor="disabled-input" className="opacity-50">
    Disabled Field
  </Label>
  <Input id="disabled-input" disabled />
</div>
```

### Error State

```tsx
<div className="space-y-2">
  <Label htmlFor="error-input" className="text-destructive">
    Invalid Field
  </Label>
  <Input id="error-input" aria-invalid="true" />
  <p className="text-destructive text-sm">This field is required</p>
</div>
```

### Horizontal Form Layout

```tsx
<div className="grid grid-cols-3 items-center gap-4">
  <Label htmlFor="username" className="text-right">
    Username
  </Label>
  <Input id="username" className="col-span-2" />
</div>
```

### Complex Label with Badge

```tsx
<Label htmlFor="api-endpoint" className="flex items-center gap-2">
  API Endpoint
  <span className="bg-primary/10 text-primary rounded px-1.5 py-0.5 text-xs font-medium">
    Required
  </span>
</Label>
<Input id="api-endpoint" required />
```

### Label with Link

```tsx
<Label htmlFor="webhook">
  Webhook URL
  <a href="/docs/webhooks" className="text-primary hover:underline ml-1 text-xs font-normal">
    (Learn more)
  </a>
</Label>
<Input id="webhook" type="url" />
```

## Accessibility

- Uses native `<label>` element for proper form control association
- Clicking the label focuses/activates the associated control via `htmlFor` prop
- Automatically handles disabled state styling via `peer-disabled` and `group-data-[disabled]`
- Screen readers announce the label text when the associated control receives focus
- Supports nested content (icons, badges, links) while maintaining accessibility

## Styling Patterns

### Font Weight Variations

```tsx
{/* Default: font-medium */}
<Label htmlFor="default">Default Weight</Label>

{/* Normal weight for checkbox/radio labels */}
<Label htmlFor="checkbox" className="font-normal">
  Checkbox Option
</Label>
```

### Cursor Styles

```tsx
{/* Clickable for checkbox/radio */}
<Label htmlFor="check" className="cursor-pointer">

{/* Not allowed for disabled */}
<Label htmlFor="disabled" className="cursor-not-allowed">
```

## Related

- [Input](./input.llm.md) - Text input component
- [Checkbox](./checkbox.llm.md) - Checkbox component
- [Radio Group](./radio-group.llm.md) - Radio button group
- [Switch](./switch.llm.md) - Toggle switch
- [Textarea](./textarea.llm.md) - Multi-line text input
