import * as React from "react";
import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

import { cn } from "@/lib/utils";

type PopoverProps = PopoverPrimitive.Root.Props;

/**
 * Popover root component. Groups all parts of the popover and manages open state.
 * Use with `open`/`onOpenChange` for controlled state, or `defaultOpen` for uncontrolled.
 */
function Popover({ ...props }: PopoverProps) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

type PopoverTriggerProps = PopoverPrimitive.Trigger.Props;

/**
 * Button that opens the popover. Use `render` prop to customize the trigger element.
 */
function PopoverTrigger({ ...props }: PopoverTriggerProps) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

type PopoverContentProps = PopoverPrimitive.Popup.Props &
  Pick<
    PopoverPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >;

/**
 * Popover content with automatic portal and positioning.
 * Animates in/out with fade and zoom effects. Default width is w-72 (18rem).
 *
 * @param align - Horizontal alignment relative to trigger. @default "center"
 * @param alignOffset - Offset in pixels along alignment axis. @default 0
 * @param side - Which side of trigger to display on. @default "bottom"
 * @param sideOffset - Distance in pixels from trigger. @default 4
 */
function PopoverContent({
  className,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(
            "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 flex flex-col gap-4 rounded-md p-4 text-sm shadow-md ring-1 duration-100 z-50 w-72 origin-(--transform-origin) outline-hidden",
            className,
          )}
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
}

type PopoverHeaderProps = React.ComponentProps<"div">;

/**
 * Optional header wrapper for PopoverTitle and PopoverDescription.
 * Provides consistent spacing between title and description.
 */
function PopoverHeader({ className, ...props }: PopoverHeaderProps) {
  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-1 text-sm", className)}
      {...props}
    />
  );
}

type PopoverTitleProps = PopoverPrimitive.Title.Props;

/**
 * Heading that labels the popover. Renders an h2 element with proper ARIA attributes.
 */
function PopoverTitle({ className, ...props }: PopoverTitleProps) {
  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={cn("font-medium", className)}
      {...props}
    />
  );
}

type PopoverDescriptionProps = PopoverPrimitive.Description.Props;

/**
 * Optional description text for the popover. Styled with muted foreground color.
 */
function PopoverDescription({ className, ...props }: PopoverDescriptionProps) {
  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  type PopoverProps,
  type PopoverContentProps,
  type PopoverDescriptionProps,
  type PopoverHeaderProps,
  type PopoverTitleProps,
  type PopoverTriggerProps,
};
