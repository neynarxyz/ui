import * as React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import { cn } from "@/lib/utils";

/**
 * Props for the ScrollArea component
 * @property {string} className - Additional CSS classes to apply
 * @property {React.ReactNode} children - Content to be rendered within the scrollable area
 */
export type ScrollAreaProps = ScrollAreaPrimitive.Root.Props;

/**
 * ScrollArea component that provides a customizable scrollable container with styled scrollbars.
 * Built on Base UI's ScrollArea primitive with automatic overflow detection and custom scrollbar styling.
 *
 * @component
 * @example
 * ```tsx
 * <ScrollArea className="h-72 w-48 rounded-md border p-4">
 *   <div>Long content that needs scrolling...</div>
 * </ScrollArea>
 * ```
 *
 * @example
 * ```tsx
 * // With horizontal scrolling
 * <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
 *   <div className="flex gap-4 p-4">
 *     <div>Item 1</div>
 *     <div>Item 2</div>
 *     <div>Item 3</div>
 *   </div>
 * </ScrollArea>
 * ```
 *
 * @param {ScrollAreaProps} props - Component props extending Base UI ScrollArea.Root.Props
 * @returns {React.ReactElement} A styled scrollable container with custom scrollbars
 */
function ScrollArea({ className, children, ...props }: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

/**
 * Props for the ScrollBar component
 * @property {string} className - Additional CSS classes to apply
 * @property {"vertical" | "horizontal"} orientation - Scrollbar orientation (default: "vertical")
 */
export type ScrollBarProps = ScrollAreaPrimitive.Scrollbar.Props;

/**
 * ScrollBar component that renders a custom-styled scrollbar for the ScrollArea.
 * Automatically positions itself based on orientation and includes a draggable thumb.
 * Typically used internally by ScrollArea but can be used independently for custom layouts.
 *
 * @component
 * @example
 * ```tsx
 * // Custom ScrollArea with horizontal scrollbar only
 * <ScrollAreaPrimitive.Root>
 *   <ScrollAreaPrimitive.Viewport>
 *     {children}
 *   </ScrollAreaPrimitive.Viewport>
 *   <ScrollBar orientation="horizontal" />
 * </ScrollAreaPrimitive.Root>
 * ```
 *
 * @param {ScrollBarProps} props - Component props extending Base UI ScrollArea.Scrollbar.Props
 * @returns {React.ReactElement} A styled scrollbar with draggable thumb
 */
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollBarProps) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="rounded-full bg-border relative flex-1"
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollBar };
