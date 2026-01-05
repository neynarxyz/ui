# Field

Comprehensive form field system with labels, descriptions, error handling, and flexible layouts for building accessible forms.

## Import

```tsx
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldSeparator,
  FieldTitle,
} from "@neynar/ui/field"
```

## Anatomy

```tsx
<Field orientation="vertical" data-invalid={hasError}>
  <FieldLabel htmlFor="input-id">Label Text</FieldLabel>
  <FieldContent>
    <Input id="input-id" />
    <FieldDescription>Helper text</FieldDescription>
    <FieldError errors={errors} />
  </FieldContent>
</Field>
```

## Components

| Component | Description |
|-----------|-------------|
| Field | Base field wrapper with orientation support |
| FieldLabel | Label for the field input |
| FieldContent | Container for input + description + error |
| FieldDescription | Helper text providing context |
| FieldError | Error message display with auto-deduplication |
| FieldGroup | Container for multiple related fields |
| FieldSet | Semantic fieldset container for field groups |
| FieldLegend | Legend for FieldSet with variant styles |
| FieldSeparator | Visual separator between field sections |
| FieldTitle | Title text for checkbox/switch fields |

## Props

### Field

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | "vertical" \| "horizontal" \| "responsive" | "vertical" | Layout orientation |
| data-invalid | boolean | - | Apply error styling when true |
| data-disabled | boolean | - | Apply disabled styling when true |

### FieldLabel

Extends Label component. Use `htmlFor` to associate with input.

### FieldContent

Container with consistent spacing for input + description + error.

### FieldDescription

Helper text automatically styled for placement. Supports links with underline styling.

### FieldError

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| errors | Array<{ message?: string }> | - | Error objects to display |
| children | ReactNode | - | Custom error content |

Automatically deduplicates errors by message. Shows single error as text, multiple errors as bulleted list.

### FieldGroup

Container for multiple fields with consistent spacing. Provides `@container/field-group` for responsive layouts.

### FieldSet

Semantic `<fieldset>` element for grouping related fields. Use with FieldLegend.

### FieldLegend

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | "legend" \| "label" | "legend" | Visual style variant |

### FieldSeparator

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Optional label text on separator |

### FieldTitle

Title text for fields with embedded controls (checkboxes, switches). Use inside FieldLabel.

## Orientation Variants

| Variant | Behavior |
|---------|----------|
| vertical | Label and input stacked vertically (default) |
| horizontal | Label and input side by side |
| responsive | Vertical on mobile, horizontal on larger screens (requires FieldGroup) |

## Data Attributes

| Attribute | When Present | Used For |
|-----------|--------------|----------|
| data-invalid | Field has errors | Error styling |
| data-disabled | Field is disabled | Disabled styling |
| data-orientation | Always | Current orientation value |
| data-slot | Always | Component identification |

## Examples

### Basic Field

```tsx
<Field>
  <FieldLabel htmlFor="username">Username</FieldLabel>
  <Input id="username" placeholder="Enter username" />
</Field>
```

### Field with Description

```tsx
<Field>
  <FieldLabel htmlFor="email">Email Address</FieldLabel>
  <FieldContent>
    <Input id="email" type="email" placeholder="your@email.com" />
    <FieldDescription>We'll never share your email</FieldDescription>
  </FieldContent>
</Field>
```

### Field with Error State

```tsx
const [errors, setErrors] = useState({ email: { message: "Invalid email" } })

<Field data-invalid={!!errors.email}>
  <FieldLabel htmlFor="email">Email *</FieldLabel>
  <FieldContent>
    <Input
      id="email"
      type="email"
      aria-invalid={!!errors.email}
    />
    <FieldError errors={[errors.email]} />
  </FieldContent>
</Field>
```

### Horizontal Layout with Switch

```tsx
<Field orientation="horizontal">
  <FieldLabel htmlFor="notifications">
    <Switch id="notifications" />
    <div>
      <FieldTitle>Enable Notifications</FieldTitle>
      <FieldDescription>Receive email updates</FieldDescription>
    </div>
  </FieldLabel>
</Field>
```

### Grouped Fields with Separator

```tsx
<FieldGroup>
  <Field>
    <FieldLabel htmlFor="name">Name</FieldLabel>
    <Input id="name" />
  </Field>

  <FieldSeparator>Security Settings</FieldSeparator>

  <Field>
    <FieldLabel htmlFor="password">Password</FieldLabel>
    <Input id="password" type="password" />
  </Field>
</FieldGroup>
```

### Field Set with Radio Group

```tsx
<FieldSet>
  <FieldLegend variant="label">Event Type</FieldLegend>
  <FieldGroup>
    <RadioGroup value={value} onValueChange={setValue}>
      <Field orientation="horizontal">
        <FieldLabel htmlFor="option-1">
          <RadioGroupItem value="option1" id="option-1" />
          <div>
            <FieldTitle>Option One</FieldTitle>
            <FieldDescription>First choice description</FieldDescription>
          </div>
        </FieldLabel>
      </Field>

      <Field orientation="horizontal">
        <FieldLabel htmlFor="option-2">
          <RadioGroupItem value="option2" id="option-2" />
          <div>
            <FieldTitle>Option Two</FieldTitle>
            <FieldDescription>Second choice description</FieldDescription>
          </div>
        </FieldLabel>
      </Field>
    </RadioGroup>
  </FieldGroup>
</FieldSet>
```

### Multiple Errors

```tsx
<Field data-invalid={true}>
  <FieldLabel htmlFor="password">Password</FieldLabel>
  <FieldContent>
    <Input id="password" type="password" aria-invalid={true} />
    <FieldError
      errors={[
        { message: "Must be at least 8 characters" },
        { message: "Must contain a number" },
        { message: "Must contain a special character" },
      ]}
    />
  </FieldContent>
</Field>
```

### Responsive Layout

```tsx
<FieldGroup>
  <Field orientation="responsive">
    <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
    <FieldContent>
      <Input id="phone" placeholder="+1 (555) 123-4567" />
      <FieldDescription>
        Vertical on mobile, horizontal on larger screens
      </FieldDescription>
    </FieldContent>
  </Field>
</FieldGroup>
```

### Disabled Field

```tsx
<Field data-disabled={true}>
  <FieldLabel htmlFor="readonly">Read Only Field</FieldLabel>
  <FieldContent>
    <Input
      id="readonly"
      disabled
      defaultValue="Cannot edit"
    />
    <FieldDescription>This field cannot be modified</FieldDescription>
  </FieldContent>
</Field>
```

## Accessibility

- Uses semantic HTML elements (`fieldset`, `legend`, `label`)
- FieldError uses `role="alert"` for screen reader announcements
- Supports `aria-invalid` on inputs for error states
- FieldLabel properly associates with inputs via `htmlFor`
- FieldDescription provides additional context without cluttering labels
- Disabled state reduces opacity for visual indication

## Best Practices

- Always use `htmlFor` on FieldLabel to associate with input `id`
- Set `data-invalid` on Field and `aria-invalid` on input for error states
- Use FieldContent when you have description or error messages
- For checkbox/switch fields, use horizontal orientation with FieldTitle
- Use FieldSet/FieldLegend for semantically related field groups
- Use FieldGroup for visual grouping without semantic fieldset
- Set `data-disabled` on Field when input is disabled
- Use FieldSeparator to organize long forms into sections

## Related

- [Input](./input.llm.md) - Text input component
- [Textarea](./textarea.llm.md) - Multi-line text input
- [Checkbox](./checkbox.llm.md) - Checkbox input
- [Switch](./switch.llm.md) - Toggle switch
- [Radio Group](./radio-group.llm.md) - Radio button group
- [Label](./label.llm.md) - Base label component
