# Item

Flexible compound component system for building structured list items with media, content, and actions.

## Import

```tsx
import {
  Item,
  ItemGroup,
  ItemSeparator,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
} from "@neynar/ui/item"
```

## Anatomy

```tsx
<ItemGroup>
  <Item>
    <ItemMedia variant="icon">
      <Icon />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Title</ItemTitle>
      <ItemDescription>Description text</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button />
    </ItemActions>
  </Item>
</ItemGroup>
```

## Components

| Component | Description |
|-----------|-------------|
| ItemGroup | Container for organizing related items in a vertical list |
| Item | Root item component, supports `render` prop for custom elements |
| ItemSeparator | Horizontal divider between items |
| ItemMedia | Container for icons, images, or avatars |
| ItemContent | Main content area that flexes to fill space |
| ItemTitle | Medium-weight title text with badge support |
| ItemDescription | Secondary description text (truncates at 2 lines) |
| ItemActions | Container for buttons or controls |
| ItemHeader | Full-width header for complex layouts |
| ItemFooter | Full-width footer for additional info |

## Props

### Item

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | "default" \| "outline" \| "muted" | "default" | Visual style variant |
| size | "default" \| "sm" \| "xs" | "default" | Size affecting padding and spacing |
| render | ReactNode | - | Custom element to render as (e.g., `<a>`, `<button>`) |

### ItemMedia

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | "default" \| "icon" \| "image" | "default" | Media type determining sizing and layout |

**Behavior**: Automatically aligns to top when `ItemDescription` is present using CSS container queries.

### ItemGroup

Container with `role="list"` that automatically adjusts gap based on child item sizes:
- `size="default"`: gap-4
- `size="sm"`: gap-2.5
- `size="xs"`: gap-2

### render Prop (Item)

Customize the underlying HTML element:

```tsx
// Render as link
<Item render={<a href="/profile" />}>
  <ItemContent>
    <ItemTitle>View Profile</ItemTitle>
  </ItemContent>
</Item>

// Render as button
<Item render={<button onClick={handleClick} />}>
  <ItemContent>
    <ItemTitle>Clickable Item</ItemTitle>
  </ItemContent>
</Item>
```

## Data Attributes

| Attribute | When Present | Used By |
|-----------|--------------|---------|
| data-slot="item" | Always | Item component |
| data-slot="item-media" | Always | ItemMedia component |
| data-slot="item-content" | Always | ItemContent component |
| data-slot="item-title" | Always | ItemTitle component |
| data-slot="item-description" | Always | ItemDescription component |
| data-slot="item-actions" | Always | ItemActions component |
| data-slot="item-header" | Always | ItemHeader component |
| data-slot="item-footer" | Always | ItemFooter component |
| data-slot="item-separator" | Always | ItemSeparator component |
| data-variant | Always | ItemMedia (icon/image/default) |

## Variants

### Visual Variants

| Variant | Description |
|---------|-------------|
| default | Clean appearance with transparent border |
| outline | Visible border for clear separation |
| muted | Subtle background (bg-muted/50) for grouped items |

### Size Variants

| Size | Padding | Gap | Use Case |
|------|---------|-----|----------|
| default | py-3.5 px-4 | gap-3.5 | Regular content, standard lists |
| sm | py-2.5 px-3 | gap-2.5 | Compact layouts, sidebars |
| xs | py-2 px-2.5 | gap-2 | Dense lists, activity feeds |

### Media Variants

| Variant | Size | Description |
|---------|------|-------------|
| default | auto | Transparent background, flex container |
| icon | auto | Auto-sizes SVG icons to size-4 |
| image | size-10 (default) | Fixed container with rounded corners, scales to size-8 (sm) and size-6 (xs) |

## Examples

### Basic List Item

```tsx
<ItemGroup>
  <Item variant="outline">
    <ItemMedia variant="icon">
      <KeyIcon />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>API Key</ItemTitle>
      <ItemDescription>Production key created 3 months ago</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button variant="ghost" size="icon-sm">
        <CopyIcon />
      </Button>
    </ItemActions>
  </Item>
</ItemGroup>
```

### With Status Badge

```tsx
<Item variant="outline">
  <ItemMedia variant="icon">
    <WebhookIcon className="text-green-500" />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>
      Production Webhook
      <Badge variant="secondary">Active</Badge>
    </ItemTitle>
    <ItemDescription>https://api.example.com/webhooks/neynar</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="ghost">Test</Button>
  </ItemActions>
</Item>
```

### Complex Layout with Header/Footer

```tsx
<Item variant="muted">
  <ItemMedia variant="icon">
    <WebhookIcon />
  </ItemMedia>
  <ItemContent>
    <ItemHeader>
      <div className="flex flex-col gap-1">
        <ItemTitle>
          Staging Webhook
          <Badge variant="destructive">Failed</Badge>
        </ItemTitle>
        <ItemDescription>https://staging.example.com/webhooks</ItemDescription>
      </div>
      <ItemActions>
        <Button variant="ghost">Retry</Button>
      </ItemActions>
    </ItemHeader>
    <ItemFooter className="border-border w-full border-t pt-2">
      <div className="flex items-center gap-2 text-sm">
        <XCircleIcon className="text-red-500 size-4" />
        <span className="text-muted-foreground">Last failure: Connection timeout (5xx)</span>
      </div>
    </ItemFooter>
  </ItemContent>
</Item>
```

### Team Member with Avatar

```tsx
<Item>
  <ItemMedia variant="icon">
    <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-full text-sm font-semibold">
      JD
    </div>
  </ItemMedia>
  <ItemContent>
    <ItemTitle>
      Jane Doe
      <Badge variant="outline">Owner</Badge>
    </ItemTitle>
    <ItemDescription>jane.doe@example.com • Full access to all resources</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="ghost" size="icon-sm">
      <MoreHorizontalIcon />
    </Button>
  </ItemActions>
</Item>
```

### Activity Feed (Compact)

```tsx
<ItemGroup>
  <Item size="xs">
    <ItemMedia variant="icon">
      <CheckCircle2Icon className="text-green-500 size-4" />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>API key created</ItemTitle>
      <ItemDescription>Production key created by jane.doe@example.com</ItemDescription>
    </ItemContent>
    <ItemContent>
      <div className="text-muted-foreground flex items-center gap-1 text-xs">
        <ClockIcon className="size-3" />
        2 hours ago
      </div>
    </ItemContent>
  </Item>
</ItemGroup>
```

### Document List with Images

```tsx
<Item variant="outline">
  <ItemMedia variant="image">
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 flex size-full items-center justify-center">
      <FileIcon className="text-white size-6" />
    </div>
  </ItemMedia>
  <ItemContent>
    <ItemTitle>API Documentation.pdf</ItemTitle>
    <ItemDescription>Last modified 3 days ago • 2.4 MB</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="ghost">Download</Button>
    <Button variant="ghost" size="icon-sm">
      <ChevronRightIcon />
    </Button>
  </ItemActions>
</Item>
```

### List with Separators

```tsx
<ItemGroup>
  <Item variant="muted">
    <ItemContent>
      <ItemTitle>First Item</ItemTitle>
    </ItemContent>
  </Item>

  <ItemSeparator />

  <Item variant="muted">
    <ItemContent>
      <ItemTitle>Second Item</ItemTitle>
    </ItemContent>
  </Item>
</ItemGroup>
```

## Accessibility

- ItemGroup renders with `role="list"` for semantic list structure
- Focus ring styles on Item when using `render` prop with interactive elements
- ItemDescription automatically truncates with `line-clamp-2` to prevent excessive text
- Links within ItemDescription receive underline and hover styles
- All interactive elements maintain proper focus indicators

## Composition Patterns

### Multiple Content Areas

Use multiple `ItemContent` components for side-by-side content sections:

```tsx
<Item>
  <ItemContent>
    <ItemTitle>Main Content</ItemTitle>
    <ItemDescription>Primary description</ItemDescription>
  </ItemContent>
  <ItemContent>
    <div className="text-muted-foreground text-xs">2 hours ago</div>
  </ItemContent>
</Item>
```

The first `ItemContent` flexes to fill space, subsequent ones use `flex-none`.

### Icon with Background

Wrap icons in colored containers for visual emphasis:

```tsx
<ItemMedia variant="icon">
  <div className="bg-primary/10 text-primary rounded-md p-2">
    <KeyIcon className="size-5" />
  </div>
</ItemMedia>
```

## Related

- [Button](/components/button) - For ItemActions controls
- [Badge](/components/badge) - For status indicators in titles
- [Separator](/components/separator) - Used by ItemSeparator
