import { cn } from "@/lib/utils";

type KbdProps = React.ComponentProps<"kbd">;

/**
 * Keyboard key display component for showing keyboard shortcuts and key combinations.
 * Supports text and icon content (e.g., Command, Arrow keys).
 */
function Kbd({ className, ...props }: KbdProps) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "bg-muted text-muted-foreground [[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10 h-5 w-fit min-w-5 gap-1 rounded-sm px-1 font-sans text-xs font-medium [&_svg:not([class*='size-'])]:size-3 pointer-events-none inline-flex items-center justify-center select-none",
        className,
      )}
      {...props}
    />
  );
}

type KbdGroupProps = React.ComponentProps<"div">;

/**
 * Container for grouping multiple Kbd components to represent key combinations.
 * Use for shortcuts like Cmd+K or sequential keys like G→H.
 */
function KbdGroup({ className, ...props }: KbdGroupProps) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("gap-1 inline-flex items-center", className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup, type KbdProps, type KbdGroupProps };
