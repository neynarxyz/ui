import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

type EmptyProps = React.ComponentProps<"div">;

/**
 * Empty state container with centered content layout.
 * Displays messaging and actions when data or content is unavailable.
 */
function Empty({ className, ...props }: EmptyProps) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "gap-4 rounded-lg border-dashed p-12 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance",
        className,
      )}
      {...props}
    />
  );
}

type EmptyHeaderProps = React.ComponentProps<"div">;

/**
 * Container for empty state header content (media, title, description).
 * Centers and vertically stacks its children.
 */
function EmptyHeader({ className, ...props }: EmptyHeaderProps) {
  return (
    <div
      data-slot="empty-header"
      className={cn("gap-2 flex max-w-sm flex-col items-center", className)}
      {...props}
    />
  );
}

const emptyMediaVariants = cva(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type EmptyMediaProps = React.ComponentProps<"div"> &
  VariantProps<typeof emptyMediaVariants>;

/**
 * Media/icon container for empty states.
 * @param variant - "default" for transparent background, "icon" for muted background with padding
 */
function EmptyMedia({
  className,
  variant = "default",
  ...props
}: EmptyMediaProps) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  );
}

type EmptyTitleProps = React.ComponentProps<"div">;

/**
 * Title for empty state messages. Displays in larger, medium-weight font.
 */
function EmptyTitle({ className, ...props }: EmptyTitleProps) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  );
}

type EmptyDescriptionProps = React.ComponentProps<"p">;

/**
 * Description text for empty states with support for inline links.
 * Links are styled with underlines and hover effects.
 */
function EmptyDescription({ className, ...props }: EmptyDescriptionProps) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-sm/relaxed text-muted-foreground [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className,
      )}
      {...props}
    />
  );
}

type EmptyContentProps = React.ComponentProps<"div">;

/**
 * Container for empty state actions (buttons, links).
 * Centers and vertically stacks action elements.
 */
function EmptyContent({ className, ...props }: EmptyContentProps) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "gap-4 text-sm flex w-full max-w-sm min-w-0 flex-col items-center text-balance",
        className,
      )}
      {...props}
    />
  );
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
  emptyMediaVariants,
  type EmptyProps,
  type EmptyHeaderProps,
  type EmptyMediaProps,
  type EmptyTitleProps,
  type EmptyDescriptionProps,
  type EmptyContentProps,
};
