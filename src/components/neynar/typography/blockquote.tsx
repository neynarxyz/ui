import * as React from "react";

import { cn } from "@/lib/utils";
import { typographyColorVariants, type TypographyColor } from "@/lib/variants";

type BlockquoteColor = Extract<TypographyColor, "default" | "muted" | "subtle">;

interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  /** Text color (limited to neutral colors for semantic appropriateness) */
  color?: BlockquoteColor;
}

/**
 * Blockquote component for quoted content with a left border accent.
 */
function Blockquote({ color, className, children, ...props }: BlockquoteProps) {
  return (
    <blockquote
      data-slot="blockquote"
      className={cn(
        "border-l-4 border-border pl-4 italic",
        typographyColorVariants({ color }),
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export { Blockquote, type BlockquoteProps, type BlockquoteColor };
