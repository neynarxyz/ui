import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Detects mobile viewport using matchMedia.
 * Returns `false` during SSR/hydration, then updates reactively on resize.
 *
 * @returns `true` when viewport width < 768px, `false` otherwise
 *
 * @example
 * ```tsx
 * import { useIsMobile } from "@neynar/ui/hooks/use-mobile"
 *
 * function ResponsiveLayout() {
 *   const isMobile = useIsMobile()
 *   return isMobile ? <MobileNav /> : <DesktopNav />
 * }
 * ```
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
