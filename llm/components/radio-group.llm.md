# RadioGroup

Mutually exclusive selection from a group of options.

## Import

```tsx
import { RadioGroup, RadioGroupItem } from "@neynar/ui/radio-group"
```

## Anatomy

```tsx
<RadioGroup value={value} onValueChange={setValue}>
  <RadioGroupItem value="option-1" id="option-1" />
  <RadioGroupItem value="option-2" id="option-2" />
</RadioGroup>
```

## Components

| Component | Description |
|-----------|-------------|
| RadioGroup | Container that manages state for radio items |
| RadioGroupItem | Individual radio button with automatic indicator |

## Props

### RadioGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | unknown | - | Controlled selected value |
| onValueChange | (value: unknown) => void | - | Called when selection changes |
| defaultValue | unknown | - | Uncontrolled initial value |
| name | string | - | Form field name for submission |
| disabled | boolean | false | Disable all radio items |
| readOnly | boolean | false | Prevent selection changes |
| required | boolean | false | Mark as required for forms |
| inputRef | Ref\<HTMLInputElement\> | - | Ref to hidden input element |
| className | string | - | Additional CSS classes |

### RadioGroupItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Value for this radio option |
| id | string | - | HTML id for label association |
| disabled | boolean | false | Disable this specific item |
| aria-invalid | boolean | - | Mark as invalid (error state) |
| className | string | - | Additional CSS classes |

The RadioGroupItem automatically renders a checked indicator (filled circle) when selected.

## Data Attributes

### RadioGroup

| Attribute | When Present |
|-----------|--------------|
| data-disabled | Group is disabled |

### RadioGroupItem

| Attribute | When Present |
|-----------|--------------|
| data-checked | Item is selected |
| data-unchecked | Item is not selected |
| data-disabled | Item is disabled |

## Examples

### Basic Usage

```tsx
function NotificationPreferences() {
  const [method, setMethod] = useState("email")

  return (
    <RadioGroup value={method} onValueChange={(v) => setMethod(v as string)}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="email" id="email" />
        <Label htmlFor="email">Email</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="sms" id="sms" />
        <Label htmlFor="sms">SMS</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="push" id="push" />
        <Label htmlFor="push">Push Notifications</Label>
      </div>
    </RadioGroup>
  )
}
```

### Uncontrolled with Default Value

```tsx
<RadioGroup defaultValue="standard" name="shipping">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="standard" id="standard" />
    <Label htmlFor="standard">Standard Shipping</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="express" id="express" />
    <Label htmlFor="express">Express Shipping</Label>
  </div>
</RadioGroup>
```

### With Descriptions

```tsx
<RadioGroup defaultValue="mainnet">
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="mainnet" id="mainnet" className="mt-0.5" />
    <div className="flex-1">
      <Label htmlFor="mainnet" className="font-medium">Mainnet</Label>
      <p className="text-muted-foreground text-sm">
        Production-ready network with real users and data.
      </p>
    </div>
  </div>
  <div className="flex items-start space-x-3">
    <RadioGroupItem value="testnet" id="testnet" className="mt-0.5" />
    <div className="flex-1">
      <Label htmlFor="testnet" className="font-medium">Testnet</Label>
      <p className="text-muted-foreground text-sm">
        Testing environment for development.
      </p>
    </div>
  </div>
</RadioGroup>
```

### Error State

```tsx
function FormField() {
  const [value, setValue] = useState("")
  const [showError, setShowError] = useState(false)

  return (
    <div className="space-y-2">
      <RadioGroup
        value={value}
        onValueChange={(v) => {
          setValue(v as string)
          setShowError(false)
        }}
        aria-invalid={showError}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="yes" aria-invalid={showError} />
          <Label htmlFor="yes">Yes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="no" aria-invalid={showError} />
          <Label htmlFor="no">No</Label>
        </div>
      </RadioGroup>
      {showError && (
        <p className="text-destructive text-sm">Please make a selection.</p>
      )}
    </div>
  )
}
```

### Disabled Group

```tsx
<RadioGroup disabled defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
</RadioGroup>
```

### Individual Disabled Items

```tsx
<RadioGroup defaultValue="available-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="available-1" id="available-1" />
    <Label htmlFor="available-1">Available Option</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="sold-out" id="sold-out" disabled />
    <Label htmlFor="sold-out">Sold Out</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="available-2" id="available-2" />
    <Label htmlFor="available-2">Another Available</Label>
  </div>
</RadioGroup>
```

### Card-Based Layout

```tsx
<RadioGroup defaultValue="pro">
  <div className="grid gap-4 sm:grid-cols-3">
    <label
      htmlFor="free"
      className="hover:border-primary/50 border-border flex cursor-pointer flex-col gap-3 rounded-lg border p-4"
    >
      <RadioGroupItem value="free" id="free" />
      <div>
        <p className="font-semibold">Free Plan</p>
        <p className="text-muted-foreground text-sm">Perfect for testing</p>
      </div>
    </label>

    <label
      htmlFor="pro"
      className="hover:border-primary/50 border-primary border-2 flex cursor-pointer flex-col gap-3 rounded-lg p-4"
    >
      <RadioGroupItem value="pro" id="pro" />
      <div>
        <p className="font-semibold">Pro Plan</p>
        <p className="text-muted-foreground text-sm">For production apps</p>
      </div>
    </label>

    <label
      htmlFor="enterprise"
      className="hover:border-primary/50 border-border flex cursor-pointer flex-col gap-3 rounded-lg border p-4"
    >
      <RadioGroupItem value="enterprise" id="enterprise" />
      <div>
        <p className="font-semibold">Enterprise</p>
        <p className="text-muted-foreground text-sm">Custom solutions</p>
      </div>
    </label>
  </div>
</RadioGroup>
```

## Keyboard

| Key | Action |
|-----|--------|
| Tab | Focus next radio item |
| Shift+Tab | Focus previous radio item |
| Space | Select focused item |
| Arrow Down/Right | Select next item |
| Arrow Up/Left | Select previous item |

## Accessibility

- Each RadioGroupItem should have a unique `id` and paired `<Label htmlFor={id}>`
- Uses `role="radiogroup"` and `role="radio"` with proper ARIA attributes
- Manages focus with roving tabindex for keyboard navigation
- Error states use `aria-invalid` for screen reader announcements
- Disabled state prevents interaction and is announced to assistive technologies

## Related

- [Label](./label.llm.md) - For labeling radio items
- [Checkbox](./checkbox.llm.md) - For multi-select options
- [Select](./select.llm.md) - For dropdown selections
