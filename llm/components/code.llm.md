# Code

Inline code component with monospace font and subtle background.

## Import

```tsx
import { Code } from "@neynar/ui/typography"
```

## Usage

```tsx
<Text>
  Use the <Code>useState</Code> hook for local state.
</Text>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | "default" \| "muted" \| "subtle" \| "destructive" \| "success" \| "warning" \| "info" | "default" | Text color |
| className | string | - | Additional CSS classes |

## Examples

### Basic

```tsx
<Code>npm install @neynar/ui</Code>
```

### Inline with Text

```tsx
<Text>
  The <Code>Button</Code> component accepts a <Code>variant</Code> prop.
</Text>
```

### With Colors

```tsx
<Code color="destructive">error.message</Code>
<Code color="success">response.data</Code>
```

### In Lists

```tsx
<ul>
  <li><Code>variant</Code> - Visual style</li>
  <li><Code>size</Code> - Component size</li>
  <li><Code>disabled</Code> - Disable interaction</li>
</ul>
```

## Styling

Default styling:
- Monospace font (`font-mono`)
- Small text size (`text-sm`)
- Muted background (`bg-muted`)
- Rounded corners
- Horizontal padding

## Note

For multi-line code blocks with syntax highlighting, use a dedicated solution like `prism-react-renderer` or `shiki`.

## Related

- [Text](./text.llm.md) - Paragraph text
- [Kbd](./kbd.llm.md) - Keyboard shortcuts
