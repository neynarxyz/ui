# Card

Flexible card container with compound components for building structured layouts with headers, content, actions, and footers.

## Import

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@neynar/ui/card"
```

## Anatomy

```tsx
<Card>
  <CardHeader>
    <CardTitle />
    <CardDescription />
    <CardAction />
  </CardHeader>
  <CardContent />
  <CardFooter />
</Card>
```

## Components

| Component | Description |
|-----------|-------------|
| Card | Root container with shadow, border, rounded corners, and size variants |
| CardHeader | Grid layout header supporting title, description, and action button |
| CardTitle | Heading or name displayed in the header |
| CardDescription | Secondary text below the title with muted styling |
| CardAction | Container for buttons/controls positioned in top-right of header |
| CardContent | Main content area with consistent padding |
| CardFooter | Footer section for actions or metadata |

## Props

### Card

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | "default" \| "sm" | "default" | Controls padding and spacing (default: py-6 px-6 gap-6, sm: py-4 px-4 gap-4) |
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Card content |

**Standard div props**: All `React.ComponentProps<"div">` are supported.

### CardHeader

Automatically creates a grid layout:
- **Without CardAction**: Single column for title/description
- **With CardAction**: Two columns `[1fr auto]` with action in top-right
- **With CardDescription**: Two rows for title and description

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Header content (Title, Description, Action) |

**Standard div props**: All `React.ComponentProps<"div">` are supported.

### CardTitle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Title text or content |

**Standard div props**: All `React.ComponentProps<"div">` are supported.

**Default styling**: `text-base font-medium` (default size), `text-sm font-medium` (small size)

### CardDescription

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Description text |

**Standard div props**: All `React.ComponentProps<"div">` are supported.

**Default styling**: `text-sm text-muted-foreground`

### CardAction

Automatically positioned in the top-right corner of the header, spanning both title and description rows.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Action buttons or controls |

**Standard div props**: All `React.ComponentProps<"div">` are supported.

### CardContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Main card content |

**Standard div props**: All `React.ComponentProps<"div">` are supported.

### CardFooter

Add `border-t` class for visual separation from content.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Footer content |

**Standard div props**: All `React.ComponentProps<"div">` are supported.

**Default styling**: `flex items-center`

## Data Attributes

### Card

| Attribute | Value | When Applied |
|-----------|-------|--------------|
| data-slot | "card" | Always |
| data-size | "default" \| "sm" | Always (matches size prop) |

### Subcomponents

All subcomponents include `data-slot` attributes for styling:
- `data-slot="card-header"`
- `data-slot="card-title"`
- `data-slot="card-description"`
- `data-slot="card-action"`
- `data-slot="card-content"`
- `data-slot="card-footer"`

## Variants

### Size

| Variant | Padding | Gap | Font Size (Title) |
|---------|---------|-----|-------------------|
| default | py-6 px-6 | gap-6 | text-base |
| sm | py-4 px-4 | gap-4 | text-sm |

## Examples

### Basic Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>API Usage</CardTitle>
    <CardDescription>Your current billing period</CardDescription>
  </CardHeader>
  <CardContent>
    <p>847,231 / 1,000,000 requests used</p>
  </CardContent>
</Card>
```

### With Action Button

```tsx
<Card>
  <CardHeader>
    <CardTitle>Settings</CardTitle>
    <CardDescription>Manage your preferences</CardDescription>
    <CardAction>
      <Button variant="outline">Edit</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Your account settings and preferences.</p>
  </CardContent>
</Card>
```

### With Footer Actions

```tsx
<Card>
  <CardHeader>
    <CardTitle>Confirm Action</CardTitle>
    <CardDescription>This action cannot be undone</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Are you sure you want to delete this item?</p>
  </CardContent>
  <CardFooter className="border-t">
    <Button variant="outline">Cancel</Button>
    <Button variant="destructive">Delete</Button>
  </CardFooter>
</Card>
```

### Small Size Card

```tsx
<Card size="sm">
  <CardHeader>
    <CardTitle>Compact Card</CardTitle>
    <CardDescription>Reduced padding</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Small size for dense layouts.</p>
  </CardContent>
</Card>
```

### Content Only

```tsx
<Card>
  <CardContent>
    <p>Simple card with just content, no header or footer.</p>
  </CardContent>
</Card>
```

### With Status Indicator

```tsx
<Card>
  <CardHeader>
    <div className="flex items-center gap-2">
      <CheckCircle2Icon className="text-green-500 size-5" />
      <CardTitle>Success</CardTitle>
    </div>
    <CardDescription>Operation completed successfully</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your changes have been saved.</p>
  </CardContent>
</Card>
```

### Dashboard Stats Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Total Requests</CardTitle>
    <CardDescription>Last 30 days</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <div className="text-3xl font-bold">1,284,563</div>
      <div className="text-muted-foreground flex items-center gap-1 text-sm">
        <TrendingUpIcon className="text-green-500 size-4" />
        <span className="text-green-500">12.5%</span> from last month
      </div>
    </div>
  </CardContent>
</Card>
```

### With Progress and Footer

```tsx
<Card>
  <CardHeader>
    <CardTitle>API Rate Limit</CardTitle>
    <CardDescription>Requests this month: 847,231 / 1,000,000</CardDescription>
    <CardAction>
      <Button variant="outline">Upgrade</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <Progress value={84.7} className="h-2" />
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">84.7% used</span>
        <span className="text-muted-foreground">152,769 remaining</span>
      </div>
    </div>
  </CardContent>
  <CardFooter className="border-t">
    <p className="text-muted-foreground text-sm">
      Resets on January 1, 2024
    </p>
  </CardFooter>
</Card>
```

### Complex Layout with Avatar

```tsx
<Card>
  <CardHeader>
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full text-lg font-semibold">
        JD
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <CardTitle>Jane Doe</CardTitle>
          <Badge variant="outline">Admin</Badge>
        </div>
        <CardDescription>jane.doe@example.com</CardDescription>
      </div>
    </div>
    <CardAction>
      <Button variant="ghost">Edit</Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm">API Access</span>
        <CheckCircle2Icon className="text-green-500 size-5" />
      </div>
    </div>
  </CardContent>
  <CardFooter className="border-t">
    <span className="text-muted-foreground text-sm">
      Last active: 2 hours ago
    </span>
  </CardFooter>
</Card>
```

## Theming

The Card component uses the following CSS custom properties:

- `--card`: Background color
- `--card-foreground`: Text color
- `--border`: Ring/border color
- `--muted-foreground`: Description text color

For frosted glass effects, the component respects:
- `--surface-blur`: Backdrop blur amount
- 75% opacity on `--card` background

## Accessibility

- Use semantic HTML elements within cards for proper structure
- CardTitle should contain heading elements when appropriate (`<h2>`, `<h3>`, etc.)
- Ensure sufficient color contrast between text and card background
- Footer buttons should have clear, actionable labels

## Related

- [Button](./button.llm.md) - For actions in CardAction and CardFooter
- [Badge](./badge.llm.md) - For status indicators in headers
- [Progress](./progress.llm.md) - For usage stats within cards
- [Avatar](./avatar.llm.md) - For user cards with profile images
