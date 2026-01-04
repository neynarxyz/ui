# Accordion

Collapsible content sections with expand/collapse controls for FAQs, documentation, and hierarchical content.

## Import

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@neynar/ui/accordion"
```

## Anatomy

```tsx
<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question or title</AccordionTrigger>
    <AccordionContent>Answer or content</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Components

| Component | Description |
|-----------|-------------|
| Accordion | Root container, manages open/closed state and keyboard navigation |
| AccordionItem | Groups a trigger with its content panel, requires unique `value` |
| AccordionTrigger | Button that toggles the item, includes automatic chevron icons |
| AccordionContent | Collapsible panel with automatic slide animation |

## Props

### Accordion

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | any[] | - | Uncontrolled initial open items (single value or array) |
| value | any[] | - | Controlled open items (for managing state externally) |
| onValueChange | (value: any[]) => void | - | Called when items open/close |
| multiple | boolean | false | Allow multiple items open simultaneously |
| disabled | boolean | false | Disable all items |
| orientation | 'vertical' \| 'horizontal' | 'vertical' | Visual orientation, affects keyboard navigation |
| loopFocus | boolean | true | Loop focus when reaching end with arrow keys |

### AccordionItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | any | (auto) | Unique identifier for this item (required for controlled state) |
| disabled | boolean | false | Disable this specific item |
| onOpenChange | (open: boolean) => void | - | Called when this item opens/closes |

### AccordionTrigger

Accepts all Base UI Accordion.Trigger props. Automatically includes chevron icons that flip based on open state.

### AccordionContent

Accepts all Base UI Accordion.Panel props. Automatically animates height with slide down/up transitions.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| keepMounted | boolean | false | Keep content in DOM when closed (for SEO/hydration) |
| hiddenUntilFound | boolean | false | Use `hidden="until-found"` for browser's find-in-page |

## Data Attributes

All components support data attributes for styling:

| Attribute | When Present |
|-----------|--------------|
| data-open | Item/panel is expanded |
| data-closed | Item/panel is collapsed |
| data-disabled | Item/accordion is disabled |
| data-orientation | Current orientation ('vertical' or 'horizontal') |
| data-index | Index of the item in the accordion |
| data-starting-style | Panel is animating in |
| data-ending-style | Panel is animating out |

## Examples

### Single Item Open (Default)

```tsx
<Accordion defaultValue={["faq-1"]}>
  <AccordionItem value="faq-1">
    <AccordionTrigger>How do I get started?</AccordionTrigger>
    <AccordionContent>
      Sign up for a free account and generate your API key from the dashboard.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="faq-2">
    <AccordionTrigger>What are the rate limits?</AccordionTrigger>
    <AccordionContent>
      Free tier: 1,000 requests/day. Pro: 100,000 requests/day.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Multiple Items Open

```tsx
<Accordion defaultValue={["item-1", "item-2"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>API Features</AccordionTrigger>
    <AccordionContent>
      Real-time feeds, webhooks, and comprehensive user data.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>Authentication</AccordionTrigger>
    <AccordionContent>
      Sign-in with Farcaster (SIWF) and API key authentication.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Controlled State

```tsx
function ControlledAccordion() {
  const [openItems, setOpenItems] = useState(["item-1"])

  return (
    <Accordion value={openItems} onValueChange={setOpenItems}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Controlled Item</AccordionTrigger>
        <AccordionContent>
          Open state is managed externally via React state.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

### With Icons and Rich Content

```tsx
<Accordion>
  <AccordionItem value="feature-1">
    <AccordionTrigger>
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary rounded-md p-1.5">
          <ZapIcon className="size-4" />
        </div>
        <span>Real-time Updates</span>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <p>Access real-time feeds with sub-second latency.</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Automatic pagination</li>
        <li>Advanced filtering</li>
      </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Disabled Items

```tsx
<Accordion>
  <AccordionItem value="active">
    <AccordionTrigger>Active Item</AccordionTrigger>
    <AccordionContent>This item can be toggled.</AccordionContent>
  </AccordionItem>

  <AccordionItem value="disabled" disabled>
    <AccordionTrigger>Disabled Item</AccordionTrigger>
    <AccordionContent>This content cannot be accessed.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Keyboard

| Key | Action |
|-----|--------|
| Space / Enter | Toggle focused item |
| Tab | Move to next focusable element |
| Shift + Tab | Move to previous focusable element |
| ArrowDown | Move focus to next item trigger (vertical) |
| ArrowUp | Move focus to previous item trigger (vertical) |
| Home | Focus first item trigger |
| End | Focus last item trigger |

## Accessibility

- Full keyboard navigation with arrow keys and roving tabindex
- ARIA attributes automatically applied (`aria-expanded`, `aria-controls`, `aria-labelledby`)
- Screen readers announce expanded/collapsed state changes
- Focus management maintains expected tab order
- Supports `hiddenUntilFound` for browser find-in-page functionality

## Related

- [Collapsible](./collapsible.llm.md) - Single collapsible section without accordion semantics
- [Tabs](./tabs.llm.md) - Alternative for showing one section at a time
- [Dialog](./dialog.llm.md) - For overlay content instead of inline expansion
