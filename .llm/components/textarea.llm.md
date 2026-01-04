# Textarea

Multi-line text input with automatic vertical growth and comprehensive validation states.

## Import

```tsx
import { Textarea } from "@neynar/ui/textarea"
```

## Anatomy

```tsx
<Textarea placeholder="Enter text..." />
```

## Props

Extends all native `<textarea>` HTML props including:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| rows | number | - | Initial number of visible text rows |
| cols | number | - | Width in average character widths |
| disabled | boolean | false | Disables the textarea |
| aria-invalid | boolean | false | Shows error state with red border and ring |
| placeholder | string | - | Placeholder text |
| value | string | - | Controlled value |
| onChange | (e: ChangeEvent) => void | - | Change handler |
| className | string | - | Additional CSS classes |

All standard textarea attributes are supported (maxLength, autoFocus, readOnly, etc.)

## Auto-Grow Behavior

Textarea uses `field-sizing-content` to automatically grow vertically based on content:

```tsx
// Auto-grows from min-h-16 as content expands
<Textarea
  placeholder="Start typing and watch this grow..."
  className="min-h-16"
/>
```

The component has a default `min-h-16` (64px minimum height).

## Resize Control

Override the default resize behavior via className:

```tsx
// Disable resize handles
<Textarea className="resize-none" />

// Vertical resize only (default browser behavior)
<Textarea className="resize-y" />

// Both directions
<Textarea className="resize" />
```

## States

### Error State

Use `aria-invalid` for validation errors:

```tsx
<Textarea
  aria-invalid={hasError}
  placeholder="Required field..."
/>
```

Error styling:
- Red border (`border-destructive`)
- Red focus ring (`ring-destructive/20`, darker in dark mode)
- Works with Label component error state

### Disabled State

```tsx
<Textarea
  disabled
  value="Cannot edit this content"
/>
```

Disabled styling:
- 50% opacity
- No pointer cursor
- Not focusable

## Data Attributes

| Attribute | Purpose |
|-----------|---------|
| data-slot="textarea" | Component identifier for styling and testing |

## Examples

### Basic with Label

```tsx
import { Label } from "@neynar/ui/label"

<div className="space-y-2">
  <Label htmlFor="description">Description</Label>
  <Textarea
    id="description"
    placeholder="Enter a description..."
    rows={3}
  />
</div>
```

### Controlled with Character Count

```tsx
function CommentForm() {
  const [value, setValue] = useState("")
  const maxLength = 280
  const remaining = maxLength - value.length
  const isOverLimit = remaining < 0

  return (
    <div className="space-y-2">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-invalid={isOverLimit}
        placeholder="What's on your mind?"
      />
      <p className={isOverLimit ? "text-destructive" : "text-muted-foreground"}>
        {remaining} characters remaining
      </p>
    </div>
  )
}
```

### Code/JSON Input

```tsx
<Textarea
  className="font-mono text-sm"
  placeholder="Paste JSON here..."
  rows={8}
  defaultValue={`{\n  "event": "cast.created",\n  "data": { ... }\n}`}
/>
```

### With Validation Error

```tsx
function FeedbackForm() {
  const [feedback, setFeedback] = useState("")
  const [error, setError] = useState("")

  const validate = () => {
    if (feedback.length < 10) {
      setError("Feedback must be at least 10 characters")
    }
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="feedback" className={error ? "text-destructive" : ""}>
        Feedback
      </Label>
      <Textarea
        id="feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        onBlur={validate}
        aria-invalid={!!error}
      />
      {error && (
        <p className="text-destructive text-sm">{error}</p>
      )}
    </div>
  )
}
```

### Webhook Payload Editor

```tsx
<div className="space-y-2">
  <Label>Request Body (JSON)</Label>
  <Textarea
    className="font-mono text-sm"
    rows={8}
    defaultValue={webhookPayload}
  />
  <Button size="sm">
    <SendIcon data-icon="inline-start" />
    Send Test Request
  </Button>
</div>
```

## Keyboard

Standard textarea keyboard behavior:

| Key | Action |
|-----|--------|
| Tab | Move focus (can be prevented) |
| Enter | New line |
| Ctrl/Cmd + A | Select all |
| Ctrl/Cmd + Z | Undo |

## Accessibility

- Semantic `<textarea>` element
- Works with Label component via htmlFor/id
- Error state communicated via `aria-invalid`
- Placeholder provides input hint (not a replacement for label)
- Disabled state prevents focus and interaction
- Full keyboard navigation support

## Styling Notes

The component includes comprehensive focus and error states:
- **Focus**: Blue ring (`ring-ring/50`) with 3px width
- **Error**: Red border and ring in both light/dark modes
- **Dark mode**: Subtle background tint (`bg-input/30`)
- **Transitions**: Smooth color and shadow changes

## Related

- **[Label](/components/label.llm.md)** - Accessible form labels
- **[Input](/components/input.llm.md)** - Single-line text input
- **[Form](/components/form.llm.md)** - Form validation patterns
