"use client";

import * as React from "react";
import {
  Group as PanelGroup,
  Panel,
  Separator as PanelResizeHandle,
} from "react-resizable-panels";

import { cn } from "@/lib/utils";

type ResizablePanelGroupProps = React.ComponentProps<typeof PanelGroup>;

/**
 * Container for resizable panels. Manages layout orientation and panel resizing behavior.
 * Supports both horizontal and vertical layouts with optional persistence via `id` prop.
 */
function ResizablePanelGroup({
  className,
  ...props
}: ResizablePanelGroupProps) {
  return (
    <PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full aria-[orientation=vertical]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

type ResizablePanelProps = React.ComponentProps<typeof Panel>;

/**
 * Individual resizable panel within a ResizablePanelGroup.
 * Supports size constraints (minSize, maxSize), default sizing, and collapse behavior.
 */
function ResizablePanel({ ...props }: ResizablePanelProps) {
  return <Panel data-slot="resizable-panel" {...props} />;
}

type ResizableHandleProps = React.ComponentProps<typeof PanelResizeHandle> & {
  /** Display a visible grip indicator on the resize handle. @default false */
  withHandle?: boolean;
};

/**
 * Resize handle between panels. Appears as a thin line with optional visible grip indicator.
 * Supports keyboard navigation and focus states.
 */
function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizableHandleProps) {
  return (
    <PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "group bg-border focus-visible:ring-primary relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[resize-handle-state=hover]:bg-primary data-[resize-handle-state=drag]:bg-primary aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border group-data-[resize-handle-state=hover]:bg-primary group-data-[resize-handle-state=drag]:bg-primary h-6 w-1 rounded-lg z-10 flex shrink-0" />
      )}
    </PanelResizeHandle>
  );
}

export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  type ResizablePanelGroupProps,
  type ResizablePanelProps,
  type ResizableHandleProps,
};
