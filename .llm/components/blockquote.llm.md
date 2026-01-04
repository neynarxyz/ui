# Blockquote

Quoted content with left border accent and italic styling.

## Import

```tsx
import { Blockquote } from "@neynar/ui/typography"
```

## Usage

```tsx
<Blockquote>
  The best way to predict the future is to invent it.
</Blockquote>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | "default" \| "muted" \| "subtle" | "default" | Text color (limited to neutral colors) |
| className | string | - | Additional CSS classes |

## Examples

### Basic Quote

```tsx
<Blockquote>
  Design is not just what it looks like and feels like.
  Design is how it works.
</Blockquote>
```

### With Attribution

```tsx
<figure>
  <Blockquote>
    The only way to do great work is to love what you do.
  </Blockquote>
  <figcaption>
    <Caption>— Steve Jobs</Caption>
  </figcaption>
</figure>
```

### Muted Style

```tsx
<Blockquote color="muted">
  A subtle quote that doesn't demand attention.
</Blockquote>
```

### In Article Context

```tsx
<article>
  <Title order={2}>Key Insights</Title>
  <Text>The author makes several important points:</Text>
  <Blockquote>
    Simplicity is the ultimate sophistication.
  </Blockquote>
  <Text>This philosophy guides the entire design system.</Text>
</article>
```

## Styling

Default styling:
- Left border accent (`border-l-4 border-border`)
- Left padding (`pl-4`)
- Italic text

## Color Restriction

Colors are limited to `default`, `muted`, and `subtle` for semantic appropriateness. Blockquotes represent quoted content, not status messages.

## Related

- [Text](./text.llm.md) - Paragraph text
- [Title](./title.llm.md) - Headings
- [Card](./card.llm.md) - For featured quotes
