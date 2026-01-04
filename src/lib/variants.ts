/**
 * @internal
 * Shared CVA variants used by menu and typography components.
 * Not exported publicly - use component props instead:
 *   - Menu styling: <DropdownMenuItem variant="destructive">
 *   - Typography: <Text color="muted" size="sm">
 */

import { cva } from "class-variance-authority";

/**
 * Shared menu item variants for DropdownMenuItem, ContextMenuItem, and MenubarItem.
 * Provides consistent styling across all menu-style components.
 */
export const menuItemVariants = cva(
  "gap-2 rounded-sm px-2 py-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground",
        destructive:
          "text-destructive focus:bg-destructive/10 dark:focus:bg-destructive/20 focus:text-destructive *:[svg]:text-destructive",
        success:
          "text-success focus:bg-success/10 dark:focus:bg-success/20 focus:text-success *:[svg]:text-success",
        warning:
          "text-warning focus:bg-warning/10 dark:focus:bg-warning/20 focus:text-warning *:[svg]:text-warning",
        info: "text-info focus:bg-info/10 dark:focus:bg-info/20 focus:text-info *:[svg]:text-info",
      },
      inset: {
        true: "pl-8",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      inset: false,
    },
  },
);

/** Variant options for menu items: default, destructive, success, warning, info */
export type MenuItemVariant =
  | "default"
  | "destructive"
  | "success"
  | "warning"
  | "info";

/**
 * Typography color variants shared across Title, Text, Code, and Blockquote components.
 * Provides semantic color options for consistent text styling.
 *
 * @example
 * ```tsx
 * import { typographyColorVariants } from "@neynar/ui/lib/variants"
 * import { cn } from "@neynar/ui/lib/utils"
 *
 * <span className={cn(typographyColorVariants({ color: "muted" }))}>
 *   Secondary text
 * </span>
 * ```
 */
export const typographyColorVariants = cva("", {
  variants: {
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      subtle: "text-subtle-foreground",
      destructive: "text-destructive",
      success: "text-success",
      warning: "text-warning",
      info: "text-info",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

/** Semantic color options for typography: default, muted, subtle, destructive, success, warning, info */
export type TypographyColor =
  | "default"
  | "muted"
  | "subtle"
  | "destructive"
  | "success"
  | "warning"
  | "info";

/**
 * Title order-based size defaults (only used when size prop is not specified).
 * Maps heading levels (h1-h6) to responsive font sizes.
 *
 * @example
 * ```tsx
 * // order: 1 → "text-3xl md:text-4xl lg:text-5xl"
 * // order: 6 → "text-sm md:text-base lg:text-lg"
 * ```
 */
export const titleOrderSizeVariants = cva("", {
  variants: {
    order: {
      1: "text-3xl md:text-4xl lg:text-5xl",
      2: "text-2xl md:text-3xl lg:text-4xl",
      3: "text-xl md:text-2xl lg:text-3xl",
      4: "text-lg md:text-xl lg:text-2xl",
      5: "text-base md:text-lg lg:text-xl",
      6: "text-sm md:text-base lg:text-lg",
    },
  },
});

/**
 * Title order-based style defaults (weight, tracking, leading).
 * Provides appropriate font-weight and line-height for each heading level.
 *
 * @example
 * ```tsx
 * // order: 1 → "font-bold tracking-tight leading-[1.1]"
 * // order: 6 → "font-medium leading-normal"
 * ```
 */
export const titleOrderStyleVariants = cva("", {
  variants: {
    order: {
      1: "font-bold tracking-tight leading-[1.1]",
      2: "font-semibold tracking-tight leading-[1.2]",
      3: "font-semibold tracking-tight leading-[1.25]",
      4: "font-semibold leading-[1.3]",
      5: "font-medium leading-[1.4]",
      6: "font-medium leading-normal",
    },
  },
  defaultVariants: {
    order: 2,
  },
});

/**
 * Title component variants for explicit size and weight overrides.
 * Use when you need to override the order-based defaults.
 *
 * @example
 * ```tsx
 * import { titleVariants } from "@neynar/ui/lib/variants"
 * import { cn } from "@neynar/ui/lib/utils"
 *
 * <h2 className={cn(titleVariants({ size: "4xl", weight: "bold" }))}>
 *   Large Bold Title
 * </h2>
 * ```
 */
export const titleVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs leading-4",
      sm: "text-sm leading-5",
      base: "text-base leading-6",
      lg: "text-lg leading-7",
      xl: "text-xl leading-7 tracking-tight",
      "2xl": "text-2xl leading-8 tracking-tight",
      "3xl": "text-3xl leading-9 tracking-tight",
      "4xl": "text-4xl leading-10 tracking-tighter",
      "5xl": "text-5xl leading-none tracking-tighter",
      "6xl": "text-6xl leading-none tracking-tighter",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
});

/** Heading level 1-6, maps to h1-h6 elements */
export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;

/** Font size options from xs to 6xl */
export type TitleSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";

/** Font weight options: normal, medium, semibold, bold */
export type TitleWeight = "normal" | "medium" | "semibold" | "bold";

/**
 * Text component variants with auto-scaling line-height and letter-spacing.
 * Provides consistent paragraph and body text styling.
 *
 * @example
 * ```tsx
 * import { textVariants } from "@neynar/ui/lib/variants"
 * import { cn } from "@neynar/ui/lib/utils"
 *
 * <p className={cn(textVariants({ size: "lg", weight: "medium", align: "center" }))}>
 *   Centered large text
 * </p>
 * ```
 */
export const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs leading-4",
      sm: "text-sm leading-5",
      base: "text-base leading-6",
      lg: "text-lg leading-7",
      xl: "text-xl leading-7 tracking-tight",
      "2xl": "text-2xl leading-8 tracking-tighter",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    transform: {
      uppercase: "uppercase tracking-wider",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
  },
  defaultVariants: {
    size: "base",
  },
});
