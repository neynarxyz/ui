import { cn } from "@/lib/utils";

type SkeletonProps = React.ComponentProps<"div">;

/**
 * Skeleton loading placeholder with pulse animation.
 * Use to indicate content is loading while maintaining layout structure.
 */
function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-muted rounded-md animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton, type SkeletonProps };
