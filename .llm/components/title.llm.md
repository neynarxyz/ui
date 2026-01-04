# Title

Semantic heading component (h1-h6) with independent visual sizing.

## Import

```tsx
import { Title } from "@neynar/ui/typography"
```

## Usage

```tsx
<Title>Default h2 heading</Title>
<Title order={1}>Page title (h1)</Title>
<Title order={3} size="xl">Visually large h3</Title>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| order | 1 \| 2 \| 3 \| 4 \| 5 \| 6 | 2 | Semantic heading level (h1-h6) |
| size | "xs" \| "sm" \| "base" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl" \| "6xl" | auto | Visual size (overrides order default) |
| weight | "normal" \| "medium" \| "semibold" \| "bold" | auto | Font weight (overrides order default) |
| color | "default" \| "muted" \| "subtle" \| "destructive" \| "success" \| "warning" \| "info" | "default" | Text color |
| as | React.ElementType | auto | Change rendered element |
| render | React.ReactElement | - | Advanced polymorphism |

## Order Defaults

Each order has default size and weight:

| Order | Element | Default Size | Default Weight |
|-------|---------|--------------|----------------|
| 1 | h1 | 4xl | bold |
| 2 | h2 | 3xl | bold |
| 3 | h3 | 2xl | semibold |
| 4 | h4 | xl | semibold |
| 5 | h5 | lg | medium |
| 6 | h6 | base | medium |

## Examples

### Semantic Headings

```tsx
<Title order={1}>Page Title</Title>
<Title order={2}>Section Heading</Title>
<Title order={3}>Subsection</Title>
```

### Visual Override

```tsx
// Semantic h3, but visually as large as h1
<Title order={3} size="4xl">
  SEO-friendly h3 with hero styling
</Title>
```

### Colors

```tsx
<Title color="muted">Secondary heading</Title>
<Title color="destructive">Error heading</Title>
```

### Polymorphism

```tsx
// Render as different element
<Title as="div">Non-semantic title styling</Title>

// Advanced: render prop
<Title render={<a href="/section" />}>Linked heading</Title>
```

## Accessibility

- Use `order` for semantic structure (screen readers)
- Use `size` for visual presentation
- Don't skip heading levels (h1 → h3)

## Related

- [Text](./text.llm.md) - Paragraph text
- [Code](./code.llm.md) - Inline code
