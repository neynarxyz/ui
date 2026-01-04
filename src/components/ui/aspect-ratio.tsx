import { cn } from "@/lib/utils";

type AspectRatioProps = React.ComponentProps<"div"> & {
  /** Aspect ratio as width/height (e.g., 16/9, 1, 4/3) */
  ratio: number;
};

/**
 * Container that maintains a consistent aspect ratio.
 * Automatically adjusts height based on width to preserve proportions.
 */
function AspectRatio({ ratio, className, ...props }: AspectRatioProps) {
  return (
    <div
      data-slot="aspect-ratio"
      style={
        {
          "--ratio": ratio,
        } as React.CSSProperties
      }
      className={cn("relative aspect-(--ratio)", className)}
      {...props}
    />
  );
}

export { AspectRatio, type AspectRatioProps };
