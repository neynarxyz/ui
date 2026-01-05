# Avatar

Display user profile images with automatic fallback support, status badges, and grouping.

## Import

```tsx
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@neynar/ui/avatar"
```

## Anatomy

```tsx
<Avatar size="default">
  <AvatarImage src="/user.jpg" alt="Username" />
  <AvatarFallback>UN</AvatarFallback>
  <AvatarBadge>
    <CheckIcon />
  </AvatarBadge>
</Avatar>

<AvatarGroup>
  <Avatar>...</Avatar>
  <Avatar>...</Avatar>
  <AvatarGroupCount>+5</AvatarGroupCount>
</AvatarGroup>
```

## Components

| Component | Description |
|-----------|-------------|
| Avatar | Root container with size variants |
| AvatarImage | Image element with automatic fallback |
| AvatarFallback | Fallback content (initials or icon) shown when image unavailable |
| AvatarBadge | Status indicator positioned at bottom-right |
| AvatarGroup | Container for stacked avatars with ring borders |
| AvatarGroupCount | Counter badge showing overflow count ("+N") |

## Props

### Avatar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | "sm" \| "default" \| "lg" | "default" | Avatar size variant |

Extends all Base UI Avatar.Root props.

### AvatarImage

Standard `img` element props via Base UI Avatar.Image.

| Prop | Type | Description |
|------|------|-------------|
| src | string | Image source URL |
| alt | string | Alternative text for accessibility |

### AvatarFallback

Extends Base UI Avatar.Fallback props. Accepts text content (typically initials) or icon elements.

### AvatarBadge

Standard `span` element props. Can contain icons or be used as colored dot.

### AvatarGroup

Standard `div` element props. Automatically applies ring borders and negative spacing to child avatars.

### AvatarGroupCount

Standard `div` element props. Display text like "+12" or icons.

## Sizes

| Size | Dimensions | Use Case |
|------|------------|----------|
| sm | 24px | Compact lists, inline mentions |
| default | 32px | Standard UI, activity feeds |
| lg | 40px | Profile headers, featured users |

## Data Attributes

| Attribute | Value | Applied To |
|-----------|-------|------------|
| data-slot | "avatar" | Avatar root |
| data-slot | "avatar-image" | AvatarImage |
| data-slot | "avatar-fallback" | AvatarFallback |
| data-slot | "avatar-badge" | AvatarBadge |
| data-slot | "avatar-group" | AvatarGroup |
| data-slot | "avatar-group-count" | AvatarGroupCount |
| data-size | "sm" \| "default" \| "lg" | Avatar root (for size styling) |

## Examples

### Basic Usage

```tsx
<Avatar>
  <AvatarImage src="https://i.imgur.com/xIe7Wlb.png" alt="@dwr.eth" />
  <AvatarFallback>DW</AvatarFallback>
</Avatar>
```

### With Sizes

```tsx
<Avatar size="sm">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>

<Avatar size="default">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>

<Avatar size="lg">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

### Fallback States

```tsx
{/* Initials fallback */}
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

{/* Icon fallback */}
<Avatar>
  <AvatarFallback>
    <UserIcon className="size-4" />
  </AvatarFallback>
</Avatar>
```

### With Status Badge

```tsx
{/* Verification badge */}
<Avatar>
  <AvatarImage src="/user.jpg" alt="Verified user" />
  <AvatarFallback>VU</AvatarFallback>
  <AvatarBadge>
    <CheckIcon />
  </AvatarBadge>
</Avatar>

{/* Online status dot */}
<Avatar>
  <AvatarImage src="/user.jpg" alt="Online user" />
  <AvatarFallback>OU</AvatarFallback>
  <AvatarBadge className="bg-green-500" />
</Avatar>

{/* Custom status */}
<Avatar>
  <AvatarFallback>PU</AvatarFallback>
  <AvatarBadge className="bg-yellow-500">
    <ZapIcon />
  </AvatarBadge>
</Avatar>
```

### Avatar Group

```tsx
{/* Basic group */}
<AvatarGroup>
  <Avatar>
    <AvatarImage src="/user1.jpg" alt="User 1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="/user2.jpg" alt="User 2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>U3</AvatarFallback>
  </Avatar>
</AvatarGroup>

{/* With overflow count */}
<AvatarGroup>
  <Avatar size="sm">
    <AvatarImage src="/user1.jpg" alt="User 1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar size="sm">
    <AvatarImage src="/user2.jpg" alt="User 2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar size="sm">
    <AvatarFallback>U3</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>+8</AvatarGroupCount>
</AvatarGroup>

{/* Icon with count */}
<AvatarGroup>
  <Avatar>
    <AvatarFallback>
      <UsersIcon className="size-4" />
    </AvatarFallback>
  </Avatar>
  <AvatarGroupCount>24</AvatarGroupCount>
</AvatarGroup>
```

### User Profile

```tsx
<div className="flex items-center gap-4">
  <Avatar size="lg">
    <AvatarImage
      src="https://i.imgur.com/xIe7Wlb.png"
      alt="@dwr.eth"
    />
    <AvatarFallback>DW</AvatarFallback>
    <AvatarBadge>
      <CheckIcon />
    </AvatarBadge>
  </Avatar>
  <div>
    <p className="font-semibold">Dan Romero</p>
    <p className="text-muted-foreground text-sm">@dwr.eth</p>
  </div>
</div>
```

### Activity Feed

```tsx
<div className="flex items-start gap-3">
  <Avatar>
    <AvatarImage src="/user.jpg" alt="@username" />
    <AvatarFallback>UN</AvatarFallback>
    <AvatarBadge className="bg-green-500">
      <ZapIcon />
    </AvatarBadge>
  </Avatar>
  <div className="flex-1">
    <p className="text-sm">
      <span className="font-medium">@username</span> cast a new post
    </p>
    <p className="text-muted-foreground text-xs">2 minutes ago</p>
  </div>
</div>
```

## Accessibility

- AvatarImage includes `alt` attribute for screen readers
- AvatarFallback provides text alternative when images fail to load
- Proper semantic HTML with appropriate ARIA attributes via Base UI
- Badge icons should be decorative; status communicated through other means

## Technical Notes

- Image loading handled automatically by Base UI Avatar primitive
- Fallback displays only when image fails to load or src is missing
- Badge automatically scales with avatar size (sm shows no icon, default/lg show icons)
- AvatarGroup applies negative spacing (`-space-x-2`) and ring borders automatically
- Uses `data-size` attribute for responsive badge sizing
- Group uses `/avatar` and `/avatar-group` context for nested styling

## Related

- [Button](./button.llm.md) - For clickable avatar actions
- [Card](./card.llm.md) - For profile cards with avatars
- [Dialog](./dialog.llm.md) - For profile modals
