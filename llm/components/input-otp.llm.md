# InputOTP

One-time password input with individual character slots for verification codes, 2FA, and authentication flows.

## Import

```tsx
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@neynar/ui/input-otp"
```

## Anatomy

```tsx
<InputOTP maxLength={6} value={code} onChange={setCode}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

## Components

| Component | Description |
|-----------|-------------|
| InputOTP | Root container managing OTP input state and behavior |
| InputOTPGroup | Groups multiple slots together, supports error styling |
| InputOTPSlot | Individual character slot displaying current value |
| InputOTPSeparator | Visual separator between groups (minus icon) |

## Props

### InputOTP

Built on the `input-otp` library. Accepts all standard input props plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| maxLength | number | - | Number of character slots (required) |
| value | string | - | Controlled value state |
| onChange | (value: string) => void | - | Called when value changes |
| pattern | string | - | Regex pattern to validate input (e.g., `^[0-9]+$`) |
| disabled | boolean | false | Disabled state |
| autoFocus | boolean | false | Auto-focus on mount |
| containerClassName | string | - | Additional classes for container |
| onComplete | () => void | - | Called when all slots are filled |
| inputMode | string | 'numeric' | Virtual keyboard type on mobile |
| pasteTransformer | (text: string) => string | - | Transform pasted text before applying |

### InputOTPGroup

Container for grouping slots. Set `aria-invalid={true}` to show error state.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| aria-invalid | boolean | - | Shows error styling when true |
| className | string | - | Additional classes |

### InputOTPSlot

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| index | number | - | Zero-based slot position (required) |
| className | string | - | Additional classes |

Automatically displays character from context, active state, and animated caret.

### InputOTPSeparator

Visual separator with minus icon. Standard div props accepted.

## Data Attributes

### InputOTP

| Attribute | When Present |
|-----------|--------------|
| data-slot | Always "input-otp" |

### InputOTPSlot

| Attribute | When Present |
|-----------|--------------|
| data-slot | Always "input-otp-slot" |
| data-active | Slot is currently focused |

## Examples

### Basic 6-Digit Code

```tsx
import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@neynar/ui/input-otp"

function TwoFactorAuth() {
  const [code, setCode] = useState("")

  return (
    <InputOTP maxLength={6} value={code} onChange={setCode}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
```

### Email Verification with Error State

```tsx
import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@neynar/ui/input-otp"
import { Label } from "@neynar/ui/label"
import { Button } from "@neynar/ui/button"

function EmailVerification() {
  const [code, setCode] = useState("")
  const [error, setError] = useState(false)

  const handleVerify = () => {
    if (code !== "123456") {
      setError(true)
    }
  }

  return (
    <div className="space-y-3">
      <Label htmlFor="email-code">
        Enter the code sent to your email
      </Label>
      <InputOTP
        id="email-code"
        maxLength={6}
        value={code}
        onChange={setCode}
        pattern="^[0-9]+$"
      >
        <InputOTPGroup aria-invalid={error}>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup aria-invalid={error}>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      {error && (
        <p className="text-destructive text-sm">
          Invalid code. Please try again.
        </p>
      )}
      <Button onClick={handleVerify} disabled={code.length !== 6}>
        Verify
      </Button>
    </div>
  )
}
```

### 4-Digit PIN

```tsx
<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>
```

### 8-Digit Backup Code

```tsx
<InputOTP maxLength={8}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
    <InputOTPSlot index={6} />
    <InputOTPSlot index={7} />
  </InputOTPGroup>
</InputOTP>
```

### With Paste Transformer

```tsx
<InputOTP
  maxLength={6}
  pattern="^[0-9]+$"
  pasteTransformer={(text) => text.replaceAll("-", "")}
>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

Now users can paste "123-456" and it becomes "123456".

## Keyboard

| Key | Action |
|-----|--------|
| 0-9, A-Z | Enter character (if allowed by pattern) |
| Backspace | Delete previous character |
| Delete | Clear current slot |
| ArrowLeft | Move to previous slot |
| ArrowRight | Move to next slot |
| Cmd/Ctrl+V | Paste full code (transformed if pasteTransformer provided) |

## Accessibility

- Uses native input element for proper screen reader support
- Announces current slot and total slots to assistive technology
- Focus management handles keyboard navigation between slots
- Supports autocomplete="one-time-code" for iOS/Android SMS autofill
- Error state communicated via aria-invalid on groups

## Related

- [Label](./label.llm.md) - Form labels
- [Button](./button.llm.md) - Verification actions
- [Form](./form.llm.md) - Form integration
