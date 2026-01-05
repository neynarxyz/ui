# HoverCard

Displays rich preview content when hovering over a trigger element.

## Import

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@neynar/ui/hover-card"
```

## Anatomy

```tsx
<HoverCard>
  <HoverCardTrigger>
    <a href="#">Hover over me</a>
  </HoverCardTrigger>
  <HoverCardContent>
    Preview content appears here
  </HoverCardContent>
</HoverCard>
```

## Components

| Component | Description |
|-----------|-------------|
| HoverCard | Root container, manages hover state and timing |
| HoverCardTrigger | Element that triggers the hover card (link, button, text, avatar) |
| HoverCardContent | Content container with automatic portal, positioning, and animations |

## Props

### HoverCard

Inherits all props from `@base-ui/react/preview-card` Root component.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| defaultOpen | boolean | false | Uncontrolled initial open state |
| onOpenChange | (open: boolean) => void | - | Called when open state changes |

### HoverCardTrigger

Inherits all props from `@base-ui/react/preview-card` Trigger component.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| render | ReactElement \| function | - | Custom element or render function for the trigger |

The `render` prop accepts a ReactElement or function for customization:

```tsx
// As a ReactElement
<HoverCardTrigger render={<Button variant="outline">Hover</Button>}>
  Content
</HoverCardTrigger>

// As a function
<HoverCardTrigger render={(props) => <a {...props} href="#">Link</a>}>
  Content
</HoverCardTrigger>
```

### HoverCardContent

Automatically renders portal and positioner. Combines props from Popup and Positioner components.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | "top" \| "right" \| "bottom" \| "left" | "bottom" | Which side of trigger to position the card |
| sideOffset | number | 4 | Distance from trigger in pixels |
| align | "start" \| "center" \| "end" | "center" | How to align relative to the trigger |
| alignOffset | number | 4 | Additional alignment axis offset in pixels |
| className | string | - | Custom CSS classes (merged with defaults) |
| initialFocus | boolean \| RefObject \| function | - | Element to focus when opened |
| finalFocus | boolean \| RefObject \| function | - | Element to focus when closed |

## Data Attributes

Use these for custom styling and animations:

| Attribute | When Present | Description |
|-----------|--------------|-------------|
| data-open | Card is open | Apply open state styles |
| data-closed | Card is closed | Apply closed state styles |
| data-side | Always | Value: "top" \| "right" \| "bottom" \| "left" |
| data-align | Always | Value: "start" \| "center" \| "end" |
| data-starting-style | Opening animation | Initial animation state |
| data-ending-style | Closing animation | Final animation state |

## Examples

### User Profile Preview

```tsx
<HoverCard>
  <HoverCardTrigger>
    <button className="inline-flex items-center gap-2">
      <Avatar size="sm">
        <AvatarImage src="/user.jpg" />
        <AvatarFallback>DR</AvatarFallback>
      </Avatar>
      <span className="font-medium">@dwr</span>
    </button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar size="lg">
            <AvatarImage src="/user.jpg" />
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Dan Romero</p>
            <p className="text-muted-foreground text-sm">@dwr</p>
          </div>
        </div>
        <Button size="sm">Follow</Button>
      </div>
      <p className="text-sm">
        Building Farcaster and Warpcast. Previously VP Eng at Coinbase.
      </p>
      <div className="flex items-center gap-4 text-sm">
        <div>
          <span className="font-semibold">124.5K</span>{" "}
          <span className="text-muted-foreground">followers</span>
        </div>
        <div>
          <span className="font-semibold">428</span>{" "}
          <span className="text-muted-foreground">following</span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

### Simple Text Preview

```tsx
<p>
  Learn more about{" "}
  <HoverCard>
    <HoverCardTrigger>
      <a href="#" className="text-primary hover:underline">
        typography
      </a>
    </HoverCardTrigger>
    <HoverCardContent>
      <p className="text-sm">
        Typography is the art and science of arranging type to make written
        language clear, visually appealing, and effective.
      </p>
    </HoverCardContent>
  </HoverCard>
  {" "}in design.
</p>
```

### Positioned Above with Custom Width

```tsx
<HoverCard>
  <HoverCardTrigger>
    <Badge variant="secondary" className="cursor-pointer">
      React 19
    </Badge>
  </HoverCardTrigger>
  <HoverCardContent side="top" className="w-96">
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">React 19</h4>
      <p className="text-muted-foreground text-xs leading-relaxed">
        Latest version of React with improved concurrent rendering,
        automatic batching, and new hooks for better performance.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>
```

### Rich Content with Avatar and Actions

```tsx
<HoverCard>
  <HoverCardTrigger>
    <Button variant="outline">Farcaster Protocol</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-72">
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <Avatar size="sm">
          <AvatarFallback>FC</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <h4 className="text-sm font-semibold">Farcaster Protocol</h4>
          <p className="text-muted-foreground text-xs">
            A sufficiently decentralized social network.
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="xs" variant="secondary">Learn More</Button>
        <Button size="xs" variant="outline">Documentation</Button>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

### Multiple Triggers in Feed

```tsx
<div className="space-y-4">
  {posts.map((post) => (
    <div key={post.id} className="border rounded-lg p-4">
      <div className="mb-2 flex items-center gap-2">
        <HoverCard>
          <HoverCardTrigger>
            <button className="inline-flex items-center gap-2">
              <Avatar size="sm">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>{post.author.initials}</AvatarFallback>
              </Avatar>
              <span className="font-medium hover:underline">
                @{post.author.username}
              </span>
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <UserProfilePreview user={post.author} />
          </HoverCardContent>
        </HoverCard>
        <span className="text-muted-foreground text-sm">{post.time}</span>
      </div>
      <p className="text-sm">{post.content}</p>
    </div>
  ))}
</div>
```

## Keyboard

HoverCard is primarily mouse/touch interaction, but keyboard navigation is supported:

| Key | Action |
|-----|--------|
| Hover | Open hover card after delay |
| Mouse leave | Close hover card after delay |
| Tab | Navigate through interactive elements inside content |
| Escape | Close hover card immediately |

## Accessibility

- Automatically manages focus when opening/closing
- Content is rendered in a portal to avoid z-index issues
- Uses ARIA attributes for screen reader support
- Supports keyboard navigation for interactive content
- Trigger remains accessible and keyboard-navigable
- Respects user's motion preferences for animations

## Styling Notes

- Default width is `w-64` (256px), customize with `className`
- Uses frosted glass effect with `bg-popover` at 75% opacity and backdrop blur
- Includes entry/exit animations via data attributes
- Side-specific slide animations (slides from opposite direction)
- Respects `--transform-origin` CSS variable for proper animation origins
- Compatible with all themes (classic, frosted, sketch)

## Related

- [Tooltip](/components/tooltip.llm.md) - For simple text hints (non-interactive)
- [Popover](/components/popover.llm.md) - For click-triggered interactive content
- [Dialog](/components/dialog.llm.md) - For modal overlays
- [Avatar](/components/avatar.llm.md) - Commonly used in hover card triggers
