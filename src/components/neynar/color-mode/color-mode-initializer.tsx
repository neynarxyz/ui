"use client";

import { useColorMode } from "./use-color-mode";

/**
 * Color mode initialization script (internal).
 *
 * For Vite/static HTML apps, copy this script into your index.html <head>.
 * See docs/integrations/vite.md for the full script to copy.
 */
const colorModeScript = `(function() {
  try {
    var cookie = document.cookie.match(/color-mode=([^;]*)/) || document.cookie.match(/theme=([^;]*)/);
    var stored = cookie ? JSON.parse(decodeURIComponent(cookie[1])) : null;
    var preference = stored ? stored.preference : 'system';
    var mode = preference === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : preference;
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.style.colorScheme = mode;
  } catch (e) {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
  }
})();`;

/**
 * ColorModeInitializer - Prevents flash of unstyled content (FOUC) during color mode initialization
 *
 * A React component that injects the color mode initialization script into the page.
 * Use this in SSR frameworks like Next.js where React controls the document.
 *
 * **For Vite/static HTML apps:** This component won't prevent FOUC because React
 * renders after first paint. Instead, copy the initialization script directly into
 * your `index.html` `<head>`. See the Vite integration guide for the full script.
 *
 * @component
 * @example Next.js App Router
 * ```tsx
 * // app/layout.tsx
 * import { ColorModeInitializer } from "@neynar/ui/color-mode";
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en" suppressHydrationWarning>
 *       <head>
 *         <ColorModeInitializer />
 *       </head>
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 * ```
 *
 * @example Vite - copy script to index.html instead
 * ```html
 * <!-- See docs/integrations/vite.md for the full script to copy -->
 * <head>
 *   <script>
 *     (function() {
 *       // ... color mode initialization script
 *     })();
 *   </script>
 * </head>
 * ```
 *
 * @see {@link useColorMode} - Hook for runtime color mode management
 * @see {@link ColorModeToggle} - UI component for user color mode switching
 * @since 1.0.0
 */
export function ColorModeInitializer() {
  useColorMode();
  return <script dangerouslySetInnerHTML={{ __html: colorModeScript }} />;
}
