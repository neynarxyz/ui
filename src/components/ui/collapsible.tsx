"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

type CollapsibleProps = CollapsiblePrimitive.Root.Props;

/**
 * Root container for collapsible sections. Groups trigger and content.
 * Supports both controlled and uncontrolled state.
 */
function Collapsible({ ...props }: CollapsibleProps) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

type CollapsibleTriggerProps = CollapsiblePrimitive.Trigger.Props;

/**
 * Button that toggles the collapsible content.
 * Use `render` prop to customize the rendered element.
 */
function CollapsibleTrigger({ ...props }: CollapsibleTriggerProps) {
  return (
    <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
  );
}

type CollapsibleContentProps = CollapsiblePrimitive.Panel.Props;

/**
 * Collapsible content panel. Automatically animates height on open/close.
 * Hidden when closed unless `keepMounted` is true.
 */
function CollapsibleContent({ ...props }: CollapsibleContentProps) {
  return (
    <CollapsiblePrimitive.Panel data-slot="collapsible-content" {...props} />
  );
}

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  type CollapsibleProps,
  type CollapsibleTriggerProps,
  type CollapsibleContentProps,
};
