# Alert

Displays contextual messages with optional icons and actions for notifications, warnings, errors, and informational content.

## Import

```tsx
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@neynar/ui/alert"
```

## Anatomy

```tsx
<Alert variant="default">
  <InfoIcon />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description with optional links.</AlertDescription>
  <AlertAction>
    <Button size="xs">Action</Button>
  </AlertAction>
</Alert>
```

## Components

| Component | Description |
|-----------|-------------|
| Alert | Root container with variant styling and grid layout |
| AlertTitle | Title heading, auto-positions next to icon |
| AlertDescription | Description content with muted foreground color |
| AlertAction | Action area positioned in top-right corner |

## Props

### Alert

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | "default" \| "destructive" \| "success" \| "warning" \| "info" | "default" | Visual style variant for different message types |
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Alert content (icon, title, description, action) |

All standard HTML div props are supported.

### AlertTitle

Standard HTML div props. Automatically positions next to icon when present using CSS grid. Supports inline links with underline styling on hover.

### AlertDescription

Standard HTML div props. Uses muted foreground color that adapts to the alert variant. Supports paragraph spacing and inline links.

### AlertAction

Standard HTML div props. Absolutely positioned in top-right corner (top-2.5, right-3). Use for dismiss buttons or action CTAs.

## Data Attributes

| Attribute | Element | When Present |
|-----------|---------|--------------|
| data-slot="alert" | Alert | Always on root alert element |
| data-slot="alert-title" | AlertTitle | Always on title element |
| data-slot="alert-description" | AlertDescription | Always on description element |
| data-slot="alert-action" | AlertAction | Always on action element |

The Alert uses `has-data-[slot=alert-action]:pr-18` to add right padding when an action is present, preventing content overlap.

## Variants

| Variant | Usage |
|---------|-------|
| default | General information, updates, neutral notifications |
| destructive | Errors, critical information requiring immediate attention |
| success | Successful actions, positive outcomes, confirmations |
| warning | Important warnings requiring attention but not critical |
| info | Informational messages, tips, helpful context |

## Icon Handling

When an SVG icon is included as a direct child:
- Alert switches to 2-column grid layout (`has-[>svg]:grid-cols-[auto_1fr]`)
- Icon is auto-sized to 16px (`*:[svg:not([class*='size-'])]:size-4`)
- Icon color matches variant text color
- Icon spans both rows and translates slightly down for alignment
- Title and description automatically position in second column

## Examples

### Basic Alert

```tsx
<Alert>
  <InfoIcon />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>
```

### Destructive/Error Alert

```tsx
<Alert variant="destructive">
  <AlertTriangleIcon />
  <AlertTitle>Authentication Error</AlertTitle>
  <AlertDescription>
    Your API key has expired or is invalid. Please generate a new key or check
    your credentials in the <a href="#settings">API settings</a> page.
  </AlertDescription>
</Alert>
```

### Success Alert

```tsx
<Alert variant="success">
  <CheckCircle2Icon />
  <AlertTitle>Plan Upgrade Successful</AlertTitle>
  <AlertDescription>
    Your account has been upgraded to the Pro plan. Your new rate limits and
    features are now active.
  </AlertDescription>
</Alert>
```

### With Dismiss Action

```tsx
<Alert variant="destructive">
  <AlertTriangleIcon />
  <AlertTitle>Rate Limit Warning</AlertTitle>
  <AlertDescription>
    You've used 95% of your API rate limit for this billing period. Your requests
    may be throttled. Consider <a href="#upgrade">upgrading your plan</a> to
    increase your limit.
  </AlertDescription>
  <AlertAction>
    <Button variant="ghost" size="icon-xs" aria-label="Dismiss">
      <XIcon />
    </Button>
  </AlertAction>
</Alert>
```

### With Primary Action Button

```tsx
<Alert>
  <InfoIcon />
  <AlertTitle>API v1 Deprecation Notice</AlertTitle>
  <AlertDescription>
    The v1 API endpoints will be deprecated on March 31, 2025. Please migrate to
    <a href="#migration">v2 endpoints</a> to avoid service disruption.
  </AlertDescription>
  <AlertAction>
    <Button size="xs" variant="outline">
      View Migration Guide
    </Button>
  </AlertAction>
</Alert>
```

### Description Only (No Title)

```tsx
<Alert>
  <InfoIcon />
  <AlertDescription>
    Your changes have been saved automatically.
  </AlertDescription>
</Alert>
```

### Without Icon

```tsx
<Alert>
  <AlertTitle>Simple Alert</AlertTitle>
  <AlertDescription>
    This alert doesn't have an icon, useful for less critical information.
  </AlertDescription>
</Alert>
```

### Warning Alert

```tsx
<Alert variant="warning">
  <AlertTriangleIcon />
  <AlertTitle>Webhook Configuration Required</AlertTitle>
  <AlertDescription>
    Set up webhooks to receive real-time notifications for cast events, reactions,
    and follows. <a href="#webhooks">Configure webhooks</a> in your dashboard settings.
  </AlertDescription>
</Alert>
```

### Info Alert

```tsx
<Alert variant="info">
  <BellIcon />
  <AlertTitle>Update Available</AlertTitle>
  <AlertDescription>
    A new version of the API is available with improved performance.
  </AlertDescription>
  <AlertAction>
    <Button size="xs">Learn More</Button>
  </AlertAction>
</Alert>
```

## Styling

### Custom Variants

Use the `alertVariants` function to extend or create custom variants:

```tsx
import { alertVariants } from "@neynar/ui/alert"

<Alert className={alertVariants({ variant: "success" })}>
  {/* ... */}
</Alert>
```

### Custom Styling

Override styles using className:

```tsx
<Alert className="border-2 shadow-lg">
  <AlertTitle className="text-lg">Custom Styled</AlertTitle>
  <AlertDescription className="text-base">
    With larger text and border.
  </AlertDescription>
</Alert>
```

## Accessibility

- Uses `role="alert"` for screen reader announcements
- Alert content is announced immediately when rendered
- Interactive elements (links, buttons) are keyboard accessible
- Link underlines and hover states provide clear affordance
- Variant colors provide additional visual context beyond text

## Layout Behavior

The Alert uses CSS Grid for flexible layout:
- **Without icon**: Single column layout
- **With icon**: Two-column grid with icon in first column
- **With action**: Adds right padding to prevent overlap
- **Responsive text**: Uses `text-balance` on mobile and `text-pretty` on desktop for optimal readability

## Common Patterns

### API Dashboard Notifications

```tsx
<div className="space-y-4">
  <Alert variant="destructive">
    <AlertTriangleIcon />
    <AlertTitle>Rate Limit Warning</AlertTitle>
    <AlertDescription>
      You've used 95% of your API rate limit for this billing period.
    </AlertDescription>
    <AlertAction>
      <Button variant="ghost" size="icon-xs">
        <XIcon />
      </Button>
    </AlertAction>
  </Alert>

  <Alert>
    <InfoIcon />
    <AlertTitle>API v1 Deprecation Notice</AlertTitle>
    <AlertDescription>
      The v1 API endpoints will be deprecated on March 31, 2025.
    </AlertDescription>
    <AlertAction>
      <Button size="xs" variant="outline">
        Learn More
      </Button>
    </AlertAction>
  </Alert>
</div>
```

### Inline Links

Alert descriptions automatically style links with underlines and hover states:

```tsx
<Alert>
  <InfoIcon />
  <AlertTitle>Documentation Updated</AlertTitle>
  <AlertDescription>
    We've updated our API documentation with new examples and best practices.
    <a href="#docs">View the updated docs</a> or <a href="#changelog">read the changelog</a>.
  </AlertDescription>
</Alert>
```

## Related

- **Toast** - For temporary notifications that auto-dismiss
- **Banner** - For persistent site-wide announcements
- **Dialog** - For alerts requiring user confirmation
