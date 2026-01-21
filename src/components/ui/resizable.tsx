"use client";

import * as React from "react";
import {
  Group as PanelGroup,
  Panel,
  Separator as PanelResizeHandle,
  type PanelImperativeHandle,
} from "react-resizable-panels";

import { cn } from "@/lib/utils";

/** Default duration of the collapse/expand animation in milliseconds. */
const DEFAULT_DURATION = 400;

/** Default easing function for collapse/expand animations. */
const DEFAULT_EASING = "cubic-bezier(0.16, 1, 0.3, 1)";

/** Generate CSS transition value for animated collapse/expand. */
function getTransitionStyle(durationMs: number, easing: string): string {
  const seconds = durationMs / 1000;
  return `flex-grow ${seconds}s ${easing}, flex-basis ${seconds}s ${easing}`;
}


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

type ResizablePanelProps = Omit<
  React.ComponentProps<typeof Panel>,
  "panelRef"
> & {
  /** Enable smooth CSS transition for collapse/expand. Drag resizing stays instant. @default false */
  animated?: boolean;
  /** Controlled collapsed state. When provided, the panel syncs to this value. */
  collapsed?: boolean;
  /** Animation duration in milliseconds. Only applies when `animated` is true. @default 400 */
  duration?: number;
};

/**
 * Individual resizable panel within a ResizablePanelGroup.
 * Supports size constraints (minSize, maxSize), default sizing, and collapse behavior.
 *
 * Control collapse state declaratively via the `collapsed` prop.
 * When `animated` is true, collapse/expand transitions are smooth.
 *
 * @example
 * <ResizablePanel collapsed={isCollapsed} animated collapsible>
 */
function ResizablePanel({
  className,
  animated,
  collapsed,
  duration = DEFAULT_DURATION,
  ...props
}: ResizablePanelProps) {
  const panelRef = React.useRef<PanelImperativeHandle>(null);
  const elementRef = React.useRef<HTMLDivElement>(null);
  const animatedRef = React.useRef(animated);
  const durationRef = React.useRef(duration);
  const isFirstRender = React.useRef(true);

  // Keep the refs in sync with prop changes
  React.useEffect(() => {
    animatedRef.current = animated;
    durationRef.current = duration;
  }, [animated, duration]);

  /** Apply transition, call action, then remove transition after duration */
  const withTransition = React.useCallback(
    (action: () => void, skipAnimation = false) => {
      const panelEl = elementRef.current?.closest(
        '[data-panel][data-slot="resizable-panel"]',
      ) as HTMLElement | null;

      if (animatedRef.current && panelEl && !skipAnimation) {
        const ms = durationRef.current;
        // Read easing from CSS variable, fallback to default
        const easing =
          getComputedStyle(panelEl)
            .getPropertyValue("--resizable-easing")
            .trim() || DEFAULT_EASING;
        panelEl.style.transition = getTransitionStyle(ms, easing);
        action();
        setTimeout(() => {
          panelEl.style.transition = "";
        }, ms);
      } else {
        action();
      }
    },
    [],
  );

  // Sync collapsed prop to panel state
  React.useEffect(() => {
    if (collapsed === undefined) return;

    // On first render, defer to allow panel registration
    if (isFirstRender.current) {
      isFirstRender.current = false;
      // Use requestAnimationFrame to ensure panel is registered
      requestAnimationFrame(() => {
        if (collapsed) {
          panelRef.current?.collapse();
        }
      });
      return;
    }

    // After first render, check current state before acting
    const isCurrentlyCollapsed = panelRef.current?.isCollapsed() ?? false;
    if (collapsed === isCurrentlyCollapsed) return;

    if (collapsed) {
      withTransition(() => panelRef.current?.collapse());
    } else {
      withTransition(() => panelRef.current?.expand());
    }
  }, [collapsed, withTransition]);

  return (
    <Panel
      data-slot="resizable-panel"
      panelRef={panelRef}
      elementRef={elementRef}
      className={cn(className)}
      {...props}
    />
  );
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
        "group bg-border focus-visible:ring-primary/50 focus-visible:bg-primary/50 relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:outline-hidden data-[resize-handle-state=hover]:bg-primary/50 data-[resize-handle-state=drag]:bg-primary/50 data-[resize-handle-state=active]:bg-primary/50 aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border group-focus-visible:bg-primary/50 group-data-[resize-handle-state=hover]:bg-primary/50 group-data-[resize-handle-state=drag]:bg-primary/50 group-data-[resize-handle-state=active]:bg-primary/50 h-6 w-1 rounded-lg z-10 flex shrink-0" />
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
