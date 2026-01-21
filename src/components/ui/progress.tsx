"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cn } from "@/lib/utils";

type ProgressProps = ProgressPrimitive.Root.Props & {
  /**
   * Enable smooth CSS transitions on the progress indicator.
   * - `true` uses default 500ms duration
   * - A number specifies custom duration in milliseconds
   * @default false
   */
  smooth?: boolean | number;
};

/**
 * Root container for progress bar with label and value support.
 * Automatically includes track and indicator. Use `value={null}` for indeterminate state.
 */
function Progress({
  className,
  children,
  value,
  smooth = false,
  style,
  ...props
}: ProgressProps) {
  const isSmooth = Boolean(smooth);
  const duration = typeof smooth === "number" ? smooth : 500;

  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      data-smooth={isSmooth || undefined}
      className={cn(
        "flex flex-wrap gap-3",
        isSmooth && "**:data-[slot=progress-indicator]:duration-(--progress-duration)",
        className,
      )}
      style={
        {
          ...(isSmooth && { "--progress-duration": `${duration}ms` }),
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  );
}

type ProgressTrackProps = ProgressPrimitive.Track.Props;

/**
 * Container for the progress indicator. Customize height with className (e.g., `h-2`, `h-3`).
 */
function ProgressTrack({ className, ...props }: ProgressTrackProps) {
  return (
    <ProgressPrimitive.Track
      className={cn(
        "bg-muted h-1.5 rounded-full relative flex w-full items-center overflow-x-hidden",
        className,
      )}
      data-slot="progress-track"
      {...props}
    />
  );
}

type ProgressIndicatorProps = ProgressPrimitive.Indicator.Props;

/**
 * Visual indicator showing progress completion. Customize color with className
 * (e.g., `bg-green-500`, `bg-red-500` for semantic states).
 */
function ProgressIndicator({ className, ...props }: ProgressIndicatorProps) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn("bg-primary h-full transition-all", className)}
      {...props}
    />
  );
}

type ProgressLabelProps = ProgressPrimitive.Label.Props;

/**
 * Text label describing the progress task.
 */
function ProgressLabel({ className, ...props }: ProgressLabelProps) {
  return (
    <ProgressPrimitive.Label
      className={cn("text-sm font-medium", className)}
      data-slot="progress-label"
      {...props}
    />
  );
}

type ProgressValueProps = ProgressPrimitive.Value.Props;

/**
 * Displays formatted progress value (e.g., "65%"). Auto-positioned to right via `ml-auto`.
 */
function ProgressValue({ className, ...props }: ProgressValueProps) {
  return (
    <ProgressPrimitive.Value
      className={cn(
        "text-muted-foreground ml-auto text-sm tabular-nums",
        className,
      )}
      data-slot="progress-value"
      {...props}
    />
  );
}

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
  type ProgressProps,
  type ProgressTrackProps,
  type ProgressIndicatorProps,
  type ProgressLabelProps,
  type ProgressValueProps,
};
