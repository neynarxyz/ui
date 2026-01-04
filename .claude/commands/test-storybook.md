---
description: Test @neynar/ui components in Storybook using Playwright
argument-hint: <component-name or pattern, e.g. "Button" or "all C's">
---

# Test @neynar/ui Component(s) in Storybook

You are testing components from the @neynar/ui library in Storybook.

## CRITICAL: Sequential Execution

**Components MUST be tested ONE AT A TIME, in sequence.**

- Launch ONE playwright-runner subagent per component
- Wait for it to complete before starting the next
- Do NOT run multiple playwright-runner agents in parallel (they share browser state)

## Pre-flight: Ensure Storybook is Running

Before invoking the playwright-runner subagent, check if Storybook is running:

```bash
lsof -i :6006 | grep LISTEN
```

If NOT running, start it:
```bash
yarn storybook &
```

Then wait for it to be ready:
```bash
sleep 5 && curl -s -o /dev/null -w "%{http_code}" http://localhost:6006
```

## Component to Test

$ARGUMENTS

## Workflow

1. Parse the argument to determine which components to test
2. Create a todo list with all components
3. For EACH component (sequentially):
   a. Mark the component as `in_progress` in the todo list
   b. Launch a single playwright-runner subagent for that component
   c. Wait for the subagent to complete and return results
   d. Mark the component as `completed`
   e. Summarize results before moving to the next component
4. After all components are tested, provide a final summary

## Storybook URL Patterns

- Base URL: http://localhost:6006
- Story URL pattern: `/?path=/story/{category}-{component}--{story-name}`
- Docs URL pattern: `/?path=/docs/{category}-{component}--docs`

Category mappings (check sidebar for exact paths):
- Core Inputs: `components-core-inputs-{component}`
- Layout & Structure: `components-layout-structure-{component}`
- Overlays & Dialogs: `components-overlays-dialogs-{component}`
- Feedback & Status: `components-feedback-status-{component}`
- Navigation & Menus: `components-navigation-menus-{component}`
- Form & Field: `components-form-field-{component}`
- Typography: `components-typography-{component}`
- Advanced & Specialized: `components-advanced-specialized-{component}`

## Test Procedure for Each Component

For each component, launch a playwright-runner subagent with these instructions:

### 1. In Context Story
- Navigate to: `/?path=/story/{category}-{component}--in-context`
- Wait for load
- Take a screenshot named `{component}-in-context.png`
- Verify the component renders correctly in a realistic usage scenario

### 2. Variants Story
- Navigate to: `/?path=/story/{category}-{component}--variants`
- Wait for load
- Test mouse interactions (hover, click where applicable)
- Test keyboard navigation (Tab, Enter, Space, Arrow keys where applicable)
- Take a screenshot named `{component}-variants.png`
- Verify all variants display correctly without visual issues
- **CRITICAL: Verify variant completeness**
  - Check any reference tables or variant showcases in the story
  - Cross-reference with the Controls panel dropdown options (e.g., if Controls shows 9 variant options, the Variants story should demonstrate all 9)
  - Flag if any variants from the Controls dropdown are missing from the Variants story

### 3. Interactive Story
- Navigate to: `/?path=/story/{category}-{component}--interactive`
- Wait for load
- Open the Controls panel
- **Test each control systematically:**
  - For dropdowns (variant, size, etc.): cycle through all options, verify component updates
  - For booleans (disabled, etc.): toggle and verify state change
  - For text inputs: enter test values and verify
- Take screenshots of key states: `{component}-interactive-{state}.png`
- **For components with actions** (onClick, onChange, onValueChange, etc.):
  - Open the Actions panel
  - Trigger the action (click, change value, etc.)
  - Verify the action is captured (Actions tab shows count)

### 4. Controls Audit
Check that the Controls panel follows these rules:

**Props that MUST be hidden from controls:**
- Any prop starting with `on` (`onClick`, `onChange`, `onValueChange`, etc.) - Action handlers belong in Actions panel only
- `render` - Internal prop for custom rendering
- `as` / `asChild` - Internal composition props
- `ref` - Internal React ref

**Props that are OK:**
- `className` - Text control is fine; "Set string" button when undefined is acceptable

**Props that require judgment:**
- `children` - Only OK as a **text input** if the component naturally accepts simple text content (e.g., Button, Badge). If `children` appears as an object/JSON editor showing React element structure, it MUST be hidden - this is a violation.

Flag any controls that violate these rules.

## Report Format

Each subagent should return a structured report:

```
## Component Test Report: {ComponentName}

### Screenshots Taken
- {component}-in-context.png
- {component}-variants.png
- {component}-interactive.png

### Test Results
| Story | Visual | Interaction | Status |
|-------|--------|-------------|--------|
| In Context | {pass/fail} | N/A | {emoji} |
| Variants | {pass/fail} | {pass/fail/n/a} | {emoji} |
| Interactive | {pass/fail} | {pass/fail} | {emoji} |

### Variant Completeness
- Controls dropdown options: {list}
- Variants story shows: {list}
- Missing: {list or "None"}

### Controls Audit
- Exposed controls: {list}
- Violations: {list or "None"}

### Issues Found
{any problems}
```

## Important Notes

- If a story doesn't exist (404 or error), note it as missing
- Take screenshots at default size - don't resize unless testing responsive behavior
- For keyboard testing: Tab to focus, Enter/Space to activate, Arrows to navigate
- Check console for errors after each interaction
