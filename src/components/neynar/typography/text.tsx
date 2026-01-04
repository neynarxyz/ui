import * as React from "react";

import { cn } from "@/lib/utils";
import {
  textVariants,
  typographyColorVariants,
  type TypographyColor,
} from "@/lib/variants";

type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
type TextWeight = "normal" | "medium" | "semibold" | "bold";
type TextAlign = "left" | "center" | "right";
type TextTransform = "uppercase" | "lowercase" | "capitalize";
type TextWrap = "pretty" | "balance";
type LineClamp = 1 | 2 | 3 | 4 | 5 | 6;

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  /** Text size - uses Tailwind scale. Default: "base" */
  size?: TextSize;
  /** Font weight */
  weight?: TextWeight;
  /** Text color */
  color?: TypographyColor;
  /** Text alignment */
  align?: TextAlign;
  /** Text transform */
  transform?: TextTransform;
  /** Text wrapping: "pretty" avoids orphans, "balance" equalizes line lengths */
  wrap?: TextWrap;
  /** Truncate text after N lines with ellipsis (uses Tailwind line-clamp-*) */
  lineClamp?: LineClamp;
  /** Change rendered element (simple polymorphism) */
  as?: React.ElementType;
  /** Change rendered element (advanced - takes precedence over `as`) */
  render?: React.ReactElement<{
    className?: string;
    children?: React.ReactNode;
  }>;
};

const lineClampClasses: Record<LineClamp, string> = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6",
};

const wrapClasses: Record<TextWrap, string> = {
  pretty: "text-pretty",
  balance: "text-balance",
};

function Text({
  size,
  weight,
  color,
  align,
  transform,
  wrap,
  lineClamp,
  as,
  render,
  className,
  children,
  ...props
}: TextProps) {
  const classes = cn(
    textVariants({ size, weight, align, transform }),
    typographyColorVariants({ color }),
    wrap && wrapClasses[wrap],
    lineClamp && lineClampClasses[lineClamp],
    className,
  );

  // render prop takes precedence
  if (render) {
    return React.cloneElement(render, {
      className: cn(classes, render.props.className),
      children,
      ...props,
    });
  }

  // as prop for simple element swap
  const Component = as ?? "p";

  return (
    <Component data-slot="text" className={classes} {...props}>
      {children}
    </Component>
  );
}

/**
 * Caption - convenience alias for small, muted text.
 * Ideal for metadata, timestamps, and secondary information.
 */
function Caption(props: TextProps) {
  return <Text size="xs" color="muted" {...props} />;
}

/**
 * Overline - convenience alias for uppercase label text.
 * Ideal for category labels and section headers.
 */
function Overline(props: TextProps) {
  return <Text size="xs" transform="uppercase" {...props} />;
}

export {
  Text,
  Caption,
  Overline,
  type TextProps,
  type TextSize,
  type TextWeight,
  type TextAlign,
  type TextTransform,
  type TextWrap,
  type LineClamp,
};
