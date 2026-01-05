# InputGroup

Compound component for adding icons, text, buttons, or keyboard shortcuts to inputs and textareas.

## Import

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@neynar/ui/input-group"
```

## Anatomy

```tsx
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="icon-xs">
      <XIcon />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

## Components

| Component | Description |
|-----------|-------------|
| InputGroup | Root container that manages unified border, focus ring, and validation states |
| InputGroupInput | Input element without its own border/ring (integrated with group) |
| InputGroupTextarea | Textarea element without its own border/ring (integrated with group) |
| InputGroupAddon | Container for addon content (icons, text, buttons) at start/end |
| InputGroupButton | Button sized for use within addons |
| InputGroupText | Text label/prefix/suffix for addons (e.g., "https://", "USD") |

## Props

### InputGroup

Root container. Extends standard `<div>` props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| data-disabled | boolean | - | Disables addon opacity when set to "true" |

### InputGroupAddon

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | "inline-start" \| "inline-end" \| "block-start" \| "block-end" | "inline-start" | Position of addon relative to input |
| className | string | - | Additional CSS classes |

Clicking the addon automatically focuses the input (unless clicking a button inside).

### InputGroupButton

Extends Button component props with custom sizes.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | "xs" \| "sm" \| "icon-xs" \| "icon-sm" | "xs" | Button size optimized for input groups |
| variant | ButtonVariant | "ghost" | Button visual style |
| type | "button" \| "submit" \| "reset" | "button" | HTML button type |
| className | string | - | Additional CSS classes |

### InputGroupText

Extends standard `<span>` props. Use for text prefixes/suffixes like "https://", "@", "/", "USD", "MB".

### InputGroupInput

Extends standard `<input>` props. Inherits all Input component functionality but without its own border/focus ring.

### InputGroupTextarea

Extends standard `<textarea>` props. Inherits all Textarea component functionality but without its own border/focus ring.

## Alignment Options

| Align | Position | Use Case |
|-------|----------|----------|
| inline-start | Left side (horizontal) | Icons, text prefixes, leading buttons |
| inline-end | Right side (horizontal) | Icons, text suffixes, action buttons |
| block-start | Top (vertical) | Labels above input |
| block-end | Bottom (vertical) | Help text or actions below input |

## Button Sizes

| Size | Dimensions | Use Case |
|------|------------|----------|
| xs | h-6 (24px) | Text buttons with labels |
| sm | Standard height | Larger text buttons |
| icon-xs | 24x24px | Small icon-only buttons |
| icon-sm | 32x32px | Medium icon-only buttons |

## Data Attributes

| Attribute | When Present |
|-----------|--------------|
| data-slot="input-group" | On root container |
| data-slot="input-group-addon" | On addon containers |
| data-slot="input-group-control" | On input/textarea |
| data-align | Shows alignment value on addons |
| data-disabled="true" | When group is disabled (reduces addon opacity) |
| aria-invalid="true" | When input is invalid (shows destructive ring) |

## Examples

### Icon Addons

```tsx
// Icon at start
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
</InputGroup>

// Icon at end
<InputGroup>
  <InputGroupInput placeholder="Select date..." />
  <InputGroupAddon align="inline-end">
    <CalendarIcon />
  </InputGroupAddon>
</InputGroup>

// Both sides
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <XIcon />
  </InputGroupAddon>
</InputGroup>
```

### Text Addons

```tsx
// URL prefix
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="example.com" />
</InputGroup>

// Currency suffix
<InputGroup>
  <InputGroupInput type="number" placeholder="0.00" />
  <InputGroupAddon align="inline-end">
    <InputGroupText>USD</InputGroupText>
  </InputGroupAddon>
</InputGroup>

// Username format
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>@</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="username" />
  <InputGroupAddon align="inline-end">
    <InputGroupText>.eth</InputGroupText>
  </InputGroupAddon>
</InputGroup>
```

### Button Addons

```tsx
// Clear button
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." value={query} />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="icon-xs" aria-label="Clear" onClick={handleClear}>
      <XIcon />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>

// Copy button
<InputGroup>
  <InputGroupInput value="neynar_sk_prod_abc123" readOnly className="font-mono text-sm" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="icon-xs" aria-label="Copy" onClick={handleCopy}>
      {copied ? <CheckIcon /> : <CopyIcon />}
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>

// Action button with text
<InputGroup>
  <InputGroupInput placeholder="Enter email..." />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="xs">Send</InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

### Multiple Buttons

```tsx
// Password with visibility toggle and copy
<InputGroup>
  <InputGroupAddon align="inline-start">
    <LockIcon />
  </InputGroupAddon>
  <InputGroupInput type={showPassword ? "text" : "password"} placeholder="••••••••" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="icon-xs" aria-label="Toggle visibility" onClick={toggleVisibility}>
      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
    </InputGroupButton>
    <InputGroupButton size="icon-xs" aria-label="Copy" onClick={handleCopy}>
      <CopyIcon />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

### Complex Combinations

```tsx
// API endpoint builder with multiple addons
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>https://api.neynar.com/</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="v2/cast/conversation" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="xs" variant="outline">
      Test
    </InputGroupButton>
    <InputGroupButton size="icon-xs" aria-label="Copy">
      <CopyIcon />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

### States

```tsx
// Disabled
<InputGroup data-disabled="true">
  <InputGroupAddon align="inline-start">
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="Disabled..." disabled />
</InputGroup>

// Invalid/Error
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="Invalid input" aria-invalid="true" />
</InputGroup>

// Loading
<InputGroup>
  <InputGroupAddon align="inline-start">
    <Loader2Icon className="animate-spin" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Loading..." />
</InputGroup>

// Read-only
<InputGroup>
  <InputGroupAddon align="inline-start">
    <LockIcon />
  </InputGroupAddon>
  <InputGroupInput value="neynar_sk_readonly" readOnly className="font-mono text-sm" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="icon-xs" aria-label="Copy">
      <CopyIcon />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

## Keyboard

| Key | Action |
|-----|--------|
| Tab | Move focus to/from input |
| Click addon | Focus input (unless clicking button) |

Input and button keyboard interactions follow standard HTML behavior.

## Accessibility

- InputGroup uses `role="group"` for semantic grouping
- Clicking addon automatically focuses input for better UX
- Icon-only buttons require `aria-label` for screen readers
- Invalid state shows destructive border/ring when `aria-invalid="true"` is set
- Disabled state reduces addon opacity and disables interactive elements
- Focus ring appears on the entire group container, not individual inputs

## Styling Notes

### Icon Auto-Sizing

Icons within addons are automatically sized to 16px (`size-4`) unless a custom size class is applied.

### Focus Management

The InputGroup container manages the focus ring. Individual inputs/textareas have their borders and rings removed to integrate seamlessly.

### Validation States

Set `aria-invalid="true"` on InputGroupInput to show destructive border and ring on the entire group.

## Related

- **Input** - Standalone input without addons
- **Textarea** - Standalone textarea
- **Field** - Wrap InputGroup with label and description
- **Button** - Used within InputGroupButton
