import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

type SpinnerProps = React.ComponentProps<"svg">;

/**
 * Animated loading spinner for indicating processing states.
 * Uses Lucide's Loader2 icon with continuous rotation animation.
 */
function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner, type SpinnerProps };
