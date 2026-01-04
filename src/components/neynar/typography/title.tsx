import * as React from "react";

import { cn } from "@/lib/utils";
import {
  titleVariants,
  titleOrderSizeVariants,
  titleOrderStyleVariants,
  typographyColorVariants,
  type TitleOrder,
  type TitleSize,
  type TitleWeight,
  type TypographyColor,
} from "@/lib/variants";

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  /** Semantic heading level - renders h1-h6. Default: 2 */
  order?: TitleOrder;
  /** Visual size override - independent of order. If not set, uses order's default sizing. */
  size?: TitleSize;
  /** Font weight override */
  weight?: TitleWeight;
  /** Text color */
  color?: TypographyColor;
  /** Change rendered element (simple polymorphism) */
  as?: React.ElementType;
  /** Change rendered element (advanced - takes precedence over `as`) */
  render?: React.ReactElement<{
    className?: string;
    children?: React.ReactNode;
  }>;
};

const orderToElement: Record<
  TitleOrder,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

function Title({
  order = 2,
  size,
  weight,
  color,
  as,
  render,
  className,
  children,
  ...props
}: TitleProps) {
  const classes = cn(
    // Order-based style defaults (weight, tracking, leading) - always applied
    titleOrderStyleVariants({ order }),
    // Size: use explicit size if provided, otherwise use order-based default
    size ? titleVariants({ size }) : titleOrderSizeVariants({ order }),
    // Weight override if provided (overrides order-based weight)
    weight && titleVariants({ weight }),
    typographyColorVariants({ color }),
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
  const Component = as ?? orderToElement[order];

  return (
    <Component data-slot="title" className={classes} {...props}>
      {children}
    </Component>
  );
}

export { Title, type TitleProps };
