# Empty

Compound component for displaying empty states with media, messaging, and call-to-action elements.

## Import

```tsx
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@neynar/ui/empty"
```

## Anatomy

```tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Icon />
    </EmptyMedia>
    <EmptyTitle>Title</EmptyTitle>
    <EmptyDescription>Description text</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Action</Button>
  </EmptyContent>
</Empty>
```

## Components

| Component | Description |
|-----------|-------------|
| Empty | Root container with centered flex layout and dashed border |
| EmptyHeader | Vertical stack for media, title, and description |
| EmptyMedia | Icon/media container with optional background styling |
| EmptyTitle | Large heading text |
| EmptyDescription | Supporting text with link styling |
| EmptyContent | Action area for buttons or links |

## Props

### Empty

Standard div props with centered layout and dashed border.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Empty state content |

### EmptyHeader

Standard div props. Groups media, title, and description.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Header content (media, title, description) |

### EmptyMedia

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | "default" \| "icon" | "default" | Styling variant |
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Icon or media element |

**Variant Behavior:**
- `default`: Transparent background, use with custom-sized icons
- `icon`: Muted background with padding, auto-sizes icons to size-6

### EmptyTitle

Standard div props for the title heading.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Title text |

### EmptyDescription

Standard div props with link styling support.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Description text (supports inline links) |

Inline links (`<a>`) are automatically styled with underlines and hover effects.

### EmptyContent

Standard div props for action elements.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Action buttons or links |

## Data Attributes

All components have unique `data-slot` attributes for styling hooks:

| Attribute | Component |
|-----------|-----------|
| data-slot="empty" | Empty |
| data-slot="empty-header" | EmptyHeader |
| data-slot="empty-icon" | EmptyMedia |
| data-slot="empty-title" | EmptyTitle |
| data-slot="empty-description" | EmptyDescription |
| data-slot="empty-content" | EmptyContent |

EmptyMedia also includes:
- `data-variant`: Current variant value

## Variants

### Media Variants

| Variant | Use Case |
|---------|----------|
| default | Large custom-sized icons (size-12), transparent background |
| icon | Standard icons with muted background, auto-sized to size-6 |

## Examples

### Basic Empty State

```tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <SearchIcon />
    </EmptyMedia>
    <EmptyTitle>No results found</EmptyTitle>
    <EmptyDescription>
      Try adjusting your search terms or filters.
    </EmptyDescription>
  </EmptyHeader>
</Empty>
```

### With Action Button

```tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <WebhookIcon />
    </EmptyMedia>
    <EmptyTitle>No webhooks configured</EmptyTitle>
    <EmptyDescription>
      Get started by creating your first webhook to receive real-time notifications.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>
      <WebhookIcon data-icon="inline-start" />
      Create Webhook
    </Button>
  </EmptyContent>
</Empty>
```

### With Multiple Actions

```tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <DatabaseIcon />
    </EmptyMedia>
    <EmptyTitle>No data sources</EmptyTitle>
    <EmptyDescription>
      Connect your first data source to start analyzing data.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <div className="flex flex-col gap-2 sm:flex-row">
      <Button>Connect Data Source</Button>
      <Button variant="outline">View Documentation</Button>
    </div>
  </EmptyContent>
</Empty>
```

### With Link in Description

```tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia>
      <DatabaseIcon className="size-12 text-muted-foreground" />
    </EmptyMedia>
    <EmptyTitle>No data available</EmptyTitle>
    <EmptyDescription>
      Start collecting data by setting up your first integration.{" "}
      <a href="#">Learn more</a>
    </EmptyDescription>
  </EmptyHeader>
</Empty>
```

### Large Icon (Default Variant)

```tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="default">
      <FileTextIcon className="size-12 text-muted-foreground" />
    </EmptyMedia>
    <EmptyTitle>No documents</EmptyTitle>
    <EmptyDescription>
      Use the default variant with manually sized icons for larger displays.
    </EmptyDescription>
  </EmptyHeader>
</Empty>
```

### Minimal (No Media)

```tsx
<Empty>
  <EmptyHeader>
    <EmptyTitle>No items to display</EmptyTitle>
    <EmptyDescription>
      Empty states can work without media icons for simpler contexts.
    </EmptyDescription>
  </EmptyHeader>
</Empty>
```

### Success/Completed State

```tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <InboxIcon />
    </EmptyMedia>
    <EmptyTitle>All caught up!</EmptyTitle>
    <EmptyDescription>
      You have no new notifications. We'll notify you when something happens.
    </EmptyDescription>
  </EmptyHeader>
</Empty>
```

## Composition Patterns

### Minimal Pattern
Header with media and title only (no description, no actions).

### Standard Pattern
Header with media, title, and description (no actions).

### Action Pattern
Complete header + content section with one or more buttons.

### Text-Only Pattern
Header with title and description, no media or actions.

## Accessibility

- Use semantic HTML elements for text content
- Ensure sufficient color contrast for text and icons
- Keep empty state messages clear and actionable
- Provide keyboard-accessible actions when present
- Consider loading states vs empty states for better UX

## Related

- Button - For empty state actions
- Alert - For error or warning states
- Card - Often contains empty states
