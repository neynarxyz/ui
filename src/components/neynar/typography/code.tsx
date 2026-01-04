import * as React from "react";

import { cn } from "@/lib/utils";
import { typographyColorVariants, type TypographyColor } from "@/lib/variants";

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  /** Text color */
  color?: TypographyColor;
}

/**
 * Inline code component with monospace font and subtle background.
 * For code blocks, use a dedicated syntax highlighting solution.
 */
function Code({ color, className, children, ...props }: CodeProps) {
  return (
    <code
      data-slot="code"
      className={cn(
        "font-mono text-sm bg-muted px-1.5 py-0.5 rounded",
        typographyColorVariants({ color }),
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
}

export { Code, type CodeProps };
