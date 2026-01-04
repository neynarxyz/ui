"use client";

import { useEffect, useState } from "react";

/**
 * Module-level flag to ensure the system color mode listener is set up only once.
 *
 * This is a pragmatic tradeoff: module-level mutable state is generally a code smell
 * in React (SSR issues, test leakage, not idiomatic), but the alternative would be
 * requiring users to wrap their app in a <ColorModeProvider>. Since we want zero-config
 * "just works" behavior, we accept this pattern here.
 *
 * It's safe because:
 * - Only runs client-side (window check in setupSystemListener)
 * - The listener is truly global (system color scheme is one per browser)
 * - It's idempotent and stateless (reads from cookie each time)
 */
let systemListenerInitialized = false;

/**
 * Color mode preference options for the color mode system
 *
 * Controls how the application determines the active color mode:
 * - `"system"` - Automatically follows the user's OS preference
 * - `"light"` - Forces light mode regardless of system preference
 * - `"dark"` - Forces dark mode regardless of system preference
 *
 * @example
 * ```tsx
 * const { preference, setPreference } = useColorMode();
 *
 * // Switch to dark mode
 * setPreference("dark");
 *
 * // Follow system preference
 * setPreference("system");
 * ```
 *
 * @since 1.0.0
 */
export type ColorModePreference = "system" | "light" | "dark";

/**
 * Internal color mode state structure stored in cookies
 *
 * Maintains both the user's preference and the actual mode value
 * to handle system color mode changes efficiently.
 *
 * @internal
 */
type ColorModeState = {
  /** User's selected color mode preference */
  preference: ColorModePreference;
  /** Actual mode applied to the DOM */
  mode: "light" | "dark";
};

/**
 * Cookie configuration for color mode persistence
 *
 * Uses secure defaults for cross-site compatibility and long-term storage.
 *
 * @internal
 */
const COOKIE_NAME = "color-mode";
const COOKIE_OPTIONS = {
  path: "/",
  maxAge: 60 * 60 * 24 * 365, // 1 year
  sameSite: "lax" as const,
};

/**
 * Retrieves the stored color mode preference from browser cookies
 *
 * Safely parses the cookie value and handles malformed data gracefully.
 * Returns null if no valid color mode data is found or if running server-side.
 *
 * @returns The stored color mode state or null if unavailable
 * @internal
 */
function getColorModeFromCookie(): ColorModeState | null {
  if (typeof document === "undefined") return null;

  // Try new cookie name first, then fall back to legacy "theme" cookie
  let match = document.cookie.match(
    new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`),
  );
  if (!match) {
    match = document.cookie.match(/(?:^|; )theme=([^;]*)/);
  }
  if (!match) return null;

  try {
    const decoded = decodeURIComponent(match[1] || "");
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

/**
 * Persists the current color mode state to browser cookies
 *
 * Stores the complete color mode state as a JSON string with appropriate
 * cookie settings for security and longevity. Safe for server-side rendering.
 *
 * @param state - The color mode state to persist
 * @internal
 */
function setColorModeCookie(state: ColorModeState) {
  if (typeof document === "undefined") return;

  const value = JSON.stringify(state);
  let cookieString = `${COOKIE_NAME}=${encodeURIComponent(value)}`;

  cookieString += `; path=${COOKIE_OPTIONS.path}`;
  cookieString += `; max-age=${COOKIE_OPTIONS.maxAge}`;
  cookieString += `; samesite=${COOKIE_OPTIONS.sameSite}`;

  document.cookie = cookieString;
}

/**
 * Detects the user's system color mode preference
 *
 * Uses the CSS media query `prefers-color-scheme` to determine if the user
 * has configured their OS to prefer dark or light modes. Falls back to
 * light mode for server-side rendering or unsupported browsers.
 *
 * @returns The system's preferred color mode
 * @internal
 */
function getSystemColorMode(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Applies the specified color mode to the document
 *
 * Updates the document's class list and color-scheme CSS property to reflect
 * the chosen mode. This triggers CSS-based mode switching throughout the
 * application and ensures native elements respect the mode choice.
 *
 * @param mode - The color mode to apply ("light" or "dark")
 * @internal
 */
function applyColorMode(mode: "light" | "dark") {
  if (typeof document === "undefined") return;

  // For light mode, remove dark class (light is default)
  // For dark mode, add dark class
  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Set color-scheme for native elements
  document.documentElement.style.colorScheme = mode;
}

/**
 * Sets up a global listener for system color mode changes.
 * Only runs once per module load, regardless of how many hook instances exist.
 *
 * @internal
 */
function setupSystemListener() {
  if (systemListenerInitialized || typeof window === "undefined") return;
  systemListenerInitialized = true;

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", () => {
    // Only respond if current preference is "system"
    const stored = getColorModeFromCookie();
    if (stored?.preference !== "system") return;

    const mode: "light" | "dark" = mediaQuery.matches ? "dark" : "light";
    const newState: ColorModeState = { preference: "system", mode };

    setColorModeCookie(newState);
    applyColorMode(mode);
    window.dispatchEvent(
      new CustomEvent("color-mode-change", { detail: newState }),
    );
  });
}

/**
 * Hook for managing application color mode with automatic system preference detection
 *
 * A complete color mode management solution that handles persistence, system preference
 * detection, and DOM manipulation without requiring any context providers. Designed
 * for applications that need simple light/dark mode switching with optional system
 * preference following.
 *
 * This hook works in conjunction with the {@link ColorModeScript} component to provide
 * a complete color mode solution with FOUC prevention and perfect synchronization
 * across multiple instances.
 *
 * Features:
 * - **Perfect synchronization**: Multiple hook instances stay in sync via custom events
 * - **Automatic persistence**: Color mode preference saved to cookies across sessions
 * - **System preference detection**: Automatically follows OS dark/light mode when set to "system"
 * - **Live system updates**: Responds to system color mode changes in real-time
 * - **SSR compatible**: Works safely during server-side rendering
 * - **Type safe**: Full TypeScript support with proper type definitions
 * - **No provider required**: Self-contained hook that works out of the box
 *
 * @example Basic color mode switching
 * ```tsx
 * function ColorModeToggle() {
 *   const { preference, mode, setPreference } = useColorMode();
 *
 *   const toggleMode = () => {
 *     setPreference(mode === "dark" ? "light" : "dark");
 *   };
 *
 *   return (
 *     <button onClick={toggleMode}>
 *       Switch to {mode === "dark" ? "light" : "dark"} mode
 *     </button>
 *   );
 * }
 * ```
 *
 * @example Color mode selector dropdown
 * ```tsx
 * function ColorModeSelector() {
 *   const { preference, setPreference } = useColorMode();
 *
 *   return (
 *     <select value={preference} onChange={(e) => setPreference(e.target.value as ColorModePreference)}>
 *       <option value="system">Follow system</option>
 *       <option value="light">Light mode</option>
 *       <option value="dark">Dark mode</option>
 *     </select>
 *   );
 * }
 * ```
 *
 * @returns Object containing current color mode state and setter function
 * @returns returns.preference - The user's selected color mode preference
 * @returns returns.mode - The actual color mode currently applied (always "light" or "dark")
 * @returns returns.setPreference - Function to change the color mode preference
 *
 * @see {@link ColorModePreference} - Available color mode preference options
 * @see {@link ColorModeScript} - Component for FOUC prevention
 * @see {@link ColorModeToggle} - UI component for color mode switching
 * @since 1.0.0
 */
export function useColorMode() {
  // Initialize state from cookie or default to system
  const [state, setState] = useState<ColorModeState>(() => {
    const saved = getColorModeFromCookie();
    if (saved) return saved;

    const mode = getSystemColorMode();
    return { preference: "system", mode };
  });

  // Set color mode preference - dispatch event, let event handler update state
  function setPreference(newPreference: ColorModePreference) {
    const mode =
      newPreference === "system" ? getSystemColorMode() : newPreference;
    const newState = { preference: newPreference, mode };

    // Update cookie and DOM immediately
    setColorModeCookie(newState);
    applyColorMode(mode);

    // Broadcast change - ALL instances (including this one) will update state from this event
    window.dispatchEvent(
      new CustomEvent("color-mode-change", {
        detail: newState,
      }),
    );
  }

  // Set up global system listener once (idempotent) and listen for color mode changes
  useEffect(() => {
    setupSystemListener();

    const handleColorModeChange = (event: CustomEvent) => {
      setState(event.detail);
    };

    window.addEventListener(
      "color-mode-change",
      handleColorModeChange as EventListener,
    );
    return () =>
      window.removeEventListener(
        "color-mode-change",
        handleColorModeChange as EventListener,
      );
  }, []);

  return {
    preference: state.preference,
    mode: state.mode,
    setPreference,
  };
}
