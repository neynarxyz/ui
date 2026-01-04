"use client";

/**
 * FirstLightFilters - SVG filter definitions for hand-drawn/sketch effects
 *
 * This component must be rendered once in your app (typically in your root layout)
 * when using the First Light theme. It provides the SVG filters that create the
 * hand-drawn wobble effect on components.
 *
 * @example
 * ```tsx
 * // app/layout.tsx
 * import "@neynar/ui/themes/first-light";
 * import { FirstLightFilters } from "@neynar/ui/first-light";
 *
 * export default function Layout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <FirstLightFilters />
 *         {children}
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export function FirstLightFilters() {
  return (
    <svg
      className="absolute h-0 w-0"
      aria-hidden="true"
      style={{ position: "absolute", width: 0, height: 0 }}
    >
      <defs>
        {/* Standard first-light filter - hand-drawn wobble */}
        <filter
          id="first-light-filter"
          x="-3%"
          y="-3%"
          width="106%"
          height="106%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="2"
            seed="1"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="1.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Light first-light filter - barely noticeable */}
        <filter
          id="first-light-filter-light"
          x="-2%"
          y="-2%"
          width="104%"
          height="104%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006"
            numOctaves="1"
            seed="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="0.4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Heavy first-light filter - more pronounced wobble */}
        <filter
          id="first-light-filter-heavy"
          x="-3%"
          y="-3%"
          width="106%"
          height="106%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="3"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="1.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
