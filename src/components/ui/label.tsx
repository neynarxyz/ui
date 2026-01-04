"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type LabelProps = React.ComponentProps<"label">;

/**
 * Accessible label component that associates with form controls.
 * Automatically styles for disabled states via peer and group data attributes.
 */
function Label({ className, ...props }: LabelProps) {
  return (
    <label
      data-slot="label"
      className={cn(
        "gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  );
}

export { Label, type LabelProps };
