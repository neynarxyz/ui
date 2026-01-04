import * as React from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

type ItemGroupProps = React.ComponentProps<"div">;

/**
 * Container for organizing related items in a vertical list.
 * Automatically adjusts gap based on child item sizes.
 */
function ItemGroup({ className, ...props }: ItemGroupProps) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn(
        "gap-4 has-[[data-size=sm]]:gap-2.5 has-[[data-size=xs]]:gap-2 group/item-group flex w-full flex-col",
        className,
      )}
      {...props}
    />
  );
}

type ItemSeparatorProps = React.ComponentProps<typeof Separator>;

/**
 * Horizontal separator for dividing items within an ItemGroup.
 */
function ItemSeparator({ className, ...props }: ItemSeparatorProps) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("my-2", className)}
      {...props}
    />
  );
}

const itemVariants = cva(
  "[a]:hover:bg-muted rounded-md border text-sm w-full group/item focus-visible:border-ring focus-visible:ring-ring/50 flex items-center flex-wrap outline-none transition-colors duration-100 focus-visible:ring-[3px] [a]:transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent",
        outline: "border-border",
        muted: "bg-muted/50 border-transparent",
      },
      size: {
        default: "gap-3.5 px-4 py-3.5",
        sm: "gap-2.5 px-3 py-2.5",
        xs: "gap-2 px-2.5 py-2 [[data-slot=dropdown-menu-content]_&]:p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ItemProps = useRender.ComponentProps<"div"> &
  VariantProps<typeof itemVariants>;

/**
 * Flexible list item component for displaying structured content.
 * Use `render` prop to customize the underlying element (e.g., `<a>`, `<button>`).
 */
function Item({
  className,
  variant = "default",
  size = "default",
  render,
  ...props
}: ItemProps) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(itemVariants({ variant, size, className })),
      },
      props,
    ),
    render,
    state: {
      slot: "item",
      variant,
      size,
    },
  });
}

const itemMediaVariants = cva(
  "gap-2 group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start flex shrink-0 items-center justify-center [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "[&_svg:not([class*='size-'])]:size-4",
        image:
          "size-10 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type ItemMediaProps = React.ComponentProps<"div"> &
  VariantProps<typeof itemMediaVariants>;

/**
 * Media container for icons, images, or avatars in an item.
 * Automatically aligns with description text when present.
 */
function ItemMedia({
  className,
  variant = "default",
  ...props
}: ItemMediaProps) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  );
}

type ItemContentProps = React.ComponentProps<"div">;

/**
 * Main content area for title and description.
 * Flexes to fill available space.
 */
function ItemContent({ className, ...props }: ItemContentProps) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "gap-1 group-data-[size=xs]/item:gap-0 flex flex-1 flex-col [&+[data-slot=item-content]]:flex-none",
        className,
      )}
      {...props}
    />
  );
}

type ItemTitleProps = React.ComponentProps<"div">;

/**
 * Title text with medium weight.
 * Supports inline badges and icons.
 */
function ItemTitle({ className, ...props }: ItemTitleProps) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "gap-2 text-sm leading-snug font-medium underline-offset-4 line-clamp-1 flex w-fit items-center",
        className,
      )}
      {...props}
    />
  );
}

type ItemDescriptionProps = React.ComponentProps<"p">;

/**
 * Secondary description text.
 * Automatically truncates after 2 lines.
 */
function ItemDescription({ className, ...props }: ItemDescriptionProps) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "text-muted-foreground text-left text-sm leading-normal group-data-[size=xs]/item:text-xs [&>a:hover]:text-primary line-clamp-2 font-normal [&>a]:underline [&>a]:underline-offset-4",
        className,
      )}
      {...props}
    />
  );
}

type ItemActionsProps = React.ComponentProps<"div">;

/**
 * Container for action buttons or controls.
 */
function ItemActions({ className, ...props }: ItemActionsProps) {
  return (
    <div
      data-slot="item-actions"
      className={cn("gap-2 flex items-center", className)}
      {...props}
    />
  );
}

type ItemHeaderProps = React.ComponentProps<"div">;

/**
 * Full-width header section for complex item layouts.
 */
function ItemHeader({ className, ...props }: ItemHeaderProps) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "gap-2 flex basis-full items-center justify-between",
        className,
      )}
      {...props}
    />
  );
}

type ItemFooterProps = React.ComponentProps<"div">;

/**
 * Full-width footer section for additional information.
 */
function ItemFooter({ className, ...props }: ItemFooterProps) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "gap-2 flex basis-full items-center justify-between",
        className,
      )}
      {...props}
    />
  );
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
  type ItemProps,
  type ItemMediaProps,
  type ItemContentProps,
  type ItemActionsProps,
  type ItemGroupProps,
  type ItemSeparatorProps,
  type ItemTitleProps,
  type ItemDescriptionProps,
  type ItemHeaderProps,
  type ItemFooterProps,
};
