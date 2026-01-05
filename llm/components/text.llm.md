# Text

Paragraph text component with size, weight, color, alignment, and truncation options.

## Import

```tsx
import { Text, Caption, Overline } from "@neynar/ui/typography"
```

## Usage

```tsx
<Text>Default paragraph text</Text>
<Text size="lg" weight="semibold">Large semibold text</Text>
<Text color="muted">Secondary text</Text>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | "xs" \| "sm" \| "base" \| "lg" \| "xl" \| "2xl" | "base" | Text size |
| weight | "normal" \| "medium" \| "semibold" \| "bold" | - | Font weight |
| color | "default" \| "muted" \| "subtle" \| "destructive" \| "success" \| "warning" \| "info" | "default" | Text color |
| align | "left" \| "center" \| "right" | - | Text alignment |
| transform | "uppercase" \| "lowercase" \| "capitalize" | - | Text transform |
| wrap | "pretty" \| "balance" | - | Text wrapping strategy |
| lineClamp | 1 \| 2 \| 3 \| 4 \| 5 \| 6 | - | Truncate after N lines |
| as | React.ElementType | "p" | Change rendered element |
| render | React.ReactElement | - | Advanced polymorphism |

## Convenience Components

### Caption

Small muted text for metadata, timestamps, secondary info.

```tsx
<Caption>Posted 3 hours ago</Caption>
// Equivalent to: <Text size="xs" color="muted">
```

### Overline

Uppercase label text for categories and section headers.

```tsx
<Overline>Featured Article</Overline>
// Equivalent to: <Text size="xs" transform="uppercase">
```

## Examples

### Sizes

```tsx
<Text size="xs">Extra small</Text>
<Text size="sm">Small</Text>
<Text size="base">Base (default)</Text>
<Text size="lg">Large</Text>
<Text size="xl">Extra large</Text>
```

### Colors

```tsx
<Text color="default">Default text</Text>
<Text color="muted">Muted helper text</Text>
<Text color="destructive">Error message</Text>
<Text color="success">Success message</Text>
```

### Truncation

```tsx
<Text lineClamp={2}>
  This long text will be truncated after two lines with an ellipsis...
</Text>
```

### Text Wrapping

```tsx
<Text wrap="balance">
  Balanced text distributes words evenly across lines
</Text>
<Text wrap="pretty">
  Pretty text avoids orphaned words on the last line
</Text>
```

### Polymorphism

```tsx
// Simple: change element
<Text as="span">Inline text</Text>
<Text as="label">Label text</Text>

// Advanced: render prop
<Text render={<a href="/link" />}>Link text</Text>
```

## Related

- [Title](./title.llm.md) - Heading component
- [Code](./code.llm.md) - Inline code
- [Blockquote](./blockquote.llm.md) - Quoted content
