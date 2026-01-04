import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with Tailwind CSS conflict resolution.
 * Combines `clsx` (conditional classes) + `tailwind-merge` (deduplication).
 *
 * @param inputs - Class values: strings, arrays, objects, or conditionals
 * @returns Merged and deduplicated class string
 *
 * @example
 * ```tsx
 * // Conditional classes
 * cn("px-4 py-2", isActive && "bg-primary", className)
 *
 * // Tailwind conflict resolution (last wins)
 * cn("text-red-500", "text-blue-500") // → "text-blue-500"
 * cn("px-4 py-2", "px-8") // → "px-8 py-2"
 *
 * // Objects and arrays
 * cn({ "opacity-50": disabled }, ["flex", "items-center"])
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
