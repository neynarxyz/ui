# Input

Text input field with support for all HTML input types.

## Import

```tsx
import { Input } from "@neynar/ui/input"
```

## Anatomy

```tsx
<Input type="text" placeholder="Enter text..." />
```

## Props

All standard HTML input attributes are supported via `React.ComponentProps<"input">`:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | string | "text" | HTML input type (text, email, password, number, tel, url, search, date, time, file, etc.) |
| placeholder | string | - | Placeholder text |
| value | string | - | Controlled input value |
| defaultValue | string | - | Uncontrolled default value |
| disabled | boolean | false | Disable the input |
| readOnly | boolean | false | Make input read-only |
| required | boolean | false | Mark as required field |
| aria-invalid | boolean | false | Show validation error styling |
| className | string | - | Additional CSS classes |

### Validation Styling

Set `aria-invalid="true"` to show error state with red border and ring:

```tsx
<Input aria-invalid="true" />
```

## Data Attributes

| Attribute | When Present |
|-----------|--------------|
| data-slot | Always "input" for styling hooks |

## Examples

### Basic Text Input

```tsx
<div className="space-y-2">
  <Label htmlFor="name">Name</Label>
  <Input id="name" placeholder="Enter your name" />
</div>
```

### Email Input with Validation

```tsx
function EmailInput() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  const handleBlur = () => {
    if (email && !email.includes("@")) {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur}
        aria-invalid={error}
      />
      {error && (
        <p className="text-sm text-destructive">
          Please enter a valid email address
        </p>
      )}
    </div>
  )
}
```

### Number Input

```tsx
<div className="space-y-2">
  <Label htmlFor="engagement">Min Engagement</Label>
  <Input
    id="engagement"
    type="number"
    placeholder="e.g., 100"
    min="0"
  />
</div>
```

### Password Input

```tsx
<div className="space-y-2">
  <Label htmlFor="password">Password</Label>
  <Input
    id="password"
    type="password"
    placeholder="••••••••"
  />
</div>
```

### Date Input

```tsx
<div className="space-y-2">
  <Label htmlFor="start-date">Start Date</Label>
  <Input
    id="start-date"
    type="date"
  />
</div>
```

### File Upload

```tsx
<div className="space-y-2">
  <Label htmlFor="file">Upload File</Label>
  <Input
    id="file"
    type="file"
    accept="image/*"
    multiple
  />
</div>
```

### Disabled State

```tsx
<Input placeholder="Disabled input" disabled />
```

### Read Only State

```tsx
<Input defaultValue="Read only value" readOnly />
```

### With Helper Text

```tsx
<div className="space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Enter username" />
  <p className="text-sm text-muted-foreground">
    Choose a unique username
  </p>
</div>
```

## Keyboard

Standard HTML input keyboard behavior:

| Key | Action |
|-----|--------|
| Tab | Move focus to next field |
| Shift+Tab | Move focus to previous field |
| Enter | Submit form (if in form) |
| Escape | Clear value (browser default) |

## Accessibility

- Wraps Base UI `Input` component with full keyboard and screen reader support
- Use with `Label` component for proper associations via `htmlFor` and `id`
- Set `aria-invalid="true"` for validation errors
- Use `required` attribute for required fields
- Include helper text with validation messages below the input

## Related

- [InputGroup](./input-group.llm.md) - For inputs with icons, buttons, or text addons
- [Label](./label.llm.md) - For accessible input labels
- [Textarea](./textarea.llm.md) - For multi-line text input
- [Select](./select.llm.md) - For dropdown selection
- [Combobox](./combobox.llm.md) - For searchable select with autocomplete
