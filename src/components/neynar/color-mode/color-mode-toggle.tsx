"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useColorMode } from "./use-color-mode";
import { cn } from "@/lib/utils";

// Map regular sizes to icon sizes for when showLabel is false
const iconSizeMap = {
  xs: "icon-xs",
  sm: "icon-sm",
  default: "icon",
  lg: "icon-lg",
} as const;

// Icon sizes that scale with button size
const iconClassMap = {
  xs: "size-3",
  sm: "size-3.5",
  default: "size-4",
  lg: "size-5",
} as const;

// Text sizes that scale with button size
const textClassMap = {
  xs: "text-xs",
  sm: "text-sm",
  default: "text-base",
  lg: "text-lg",
} as const;

type ColorModeToggleSize = "xs" | "sm" | "default" | "lg";

type ColorModeToggleProps = {
  /**
   * Button size - when showLabel is false, renders as a square icon button
   * @default "default"
   */
  size?: ColorModeToggleSize;
  /**
   * Whether to show the current color mode name as text next to the icon
   * @default false
   */
  showLabel?: boolean;
  /**
   * Alignment of the dropdown menu relative to the trigger button
   * @default "end"
   */
  align?: "start" | "center" | "end";
} & Omit<React.ComponentProps<typeof Button>, "size">;

/**
 * ColorModeToggle - A zero-configuration color mode switcher with system, light, and dark modes
 *
 * A completely self-contained color mode toggle component that provides an intuitive dropdown
 * interface for switching between system preference, light mode, and dark mode. Works
 * immediately without any provider setup, context configuration, or additional dependencies.
 *
 * Built on top of Base UI components (Button + DropdownMenu) with the Neynar useColorMode
 * hook for state management. Handles color mode persistence via cookies, system preference
 * detection, real-time system changes, and synchronization across multiple instances.
 *
 * **Zero Configuration Design:**
 * Just import and use - no providers, no setup, no configuration required. The component
 * handles all color mode management internally and provides a complete solution out of the box.
 *
 * @example Basic usage (most common - icon button)
 * ```tsx
 * import { ColorModeToggle } from "@neynar/ui/color-mode";
 *
 * // Just drop it in! Works immediately with zero setup
 * function Header() {
 *   return (
 *     <header className="flex items-center justify-between p-4">
 *       <Logo />
 *       <ColorModeToggle />
 *     </header>
 *   );
 * }
 * ```
 *
 * @example With text labels for better UX
 * ```tsx
 * // Show current color mode name next to icon
 * <ColorModeToggle size="default" showLabel />
 *
 * // In a settings panel
 * <div className="space-y-4">
 *   <h3>Appearance</h3>
 *   <div className="flex items-center justify-between">
 *     <span>Color Mode</span>
 *     <ColorModeToggle size="sm" showLabel />
 *   </div>
 * </div>
 * ```
 *
 * @example Different visual variants
 * ```tsx
 * // Ghost button for minimalist toolbars
 * <ColorModeToggle variant="ghost" />
 *
 * // Secondary style for subtle integration
 * <ColorModeToggle variant="secondary" size="sm" />
 *
 * // Outline style (default) for clear boundaries
 * <ColorModeToggle variant="outline" size="lg" />
 * ```
 *
 * @param variant - Visual style variant inherited from Button component (default: "outline")
 * @param size - Button size: xs, sm, default, lg. Renders as icon button when showLabel is false (default: "default")
 * @param className - Additional CSS classes for custom styling
 * @param showLabel - Whether to show color mode name text. When false, renders as square icon button (default: false)
 * @param align - Dropdown menu alignment relative to trigger button (default: "end")
 *
 * @features
 * - **Zero Configuration**: Import and use immediately - no setup required
 * - **System Detection**: Automatically follows OS dark/light preference changes
 * - **Perfect Persistence**: Color mode choice saved via cookies for SSR compatibility
 * - **Multi-Instance Sync**: Multiple toggles stay perfectly synchronized
 * - **Real-Time Updates**: Responds to system color mode changes while app is running
 * - **Smooth Transitions**: CSS-based mode switching with no flash of wrong content
 * - **Accessibility First**: Full keyboard navigation and screen reader support
 * - **Touch Optimized**: Works perfectly on mobile and tablet devices
 * - **Framework Agnostic**: Works with Next.js, Vite, Create React App, etc.
 *
 * @accessibility
 * - **Keyboard Navigation**: Full support for Enter, Space, and Arrow keys
 * - **Screen Reader Support**: Proper ARIA labels and role announcements
 * - **Focus Management**: Visible focus indicators meeting WCAG 2.1 AA standards
 * - **State Communication**: Current selection clearly indicated with checkmarks
 *
 * @see {@link useColorMode} - The underlying color mode management hook with event-driven architecture
 * @see {@link ColorModeScript} - Component for FOUC prevention (required in root layout)
 * @since 1.0.0
 */
function ColorModeToggle({
  variant = "outline",
  size = "default",
  className,
  showLabel = false,
  align = "end",
  ...props
}: ColorModeToggleProps) {
  // Use icon size when no label, regular size when label is shown
  const buttonSize = showLabel ? size : iconSizeMap[size];
  const iconClass = iconClassMap[size];
  const textClass = textClassMap[size];

  const { preference, setPreference } = useColorMode();

  // Track hydration to prevent mismatch between server/client rendering.
  // This runs once after hydration to signal we can show client-specific values.
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional: standard hydration detection pattern
  useEffect(() => setMounted(true), []);

  // Simple icons and labels - no configuration needed
  const items = [
    { mode: "system" as const, Icon: Monitor, label: "System" },
    { mode: "light" as const, Icon: Sun, label: "Light" },
    { mode: "dark" as const, Icon: Moon, label: "Dark" },
  ];

  // Get current item based on preference, not resolved mode
  // Before hydration, always show "system" to match server render
  const currentItem = mounted
    ? items.find((item) => item.mode === preference) || items[0]
    : items[0]; // Always "system" on server

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant={variant}
            size={buttonSize}
            className={cn(className)}
            suppressHydrationWarning
            {...props}
          >
            {currentItem && <currentItem.Icon className={iconClass} />}
            {showLabel && (
              <span className={textClass}>{currentItem?.label}</span>
            )}
            <span className="sr-only">Toggle color mode</span>
          </Button>
        }
      />
      <DropdownMenuContent align={align}>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.mode}
            onClick={() => setPreference(item.mode)}
            className="flex items-center gap-2"
          >
            <item.Icon className="size-4" />
            <span>{item.label}</span>
            {preference === item.mode && (
              <span className="ml-auto text-xs opacity-60">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ColorModeToggle, type ColorModeToggleProps, type ColorModeToggleSize };
