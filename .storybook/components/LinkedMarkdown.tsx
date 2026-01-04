import { Markdown } from "@storybook/addon-docs/blocks";

/**
 * Maps relative markdown file paths to Storybook story paths.
 * Keys should match how paths appear in the markdown files.
 */
const DOCS_TO_STORY_PATH: Record<string, string> = {
  // Theming docs (in theming/ folder)
  "theming/index.md": "?path=/docs/theming-overview--docs",
  "./theming/index.md": "?path=/docs/theming-overview--docs",
  "../theming/index.md": "?path=/docs/theming-overview--docs",

  // Theme-specific docs
  "theming/purple-dawn.md": "?path=/docs/theming-purple-dawn-theme--docs",
  "./theming/purple-dawn.md": "?path=/docs/theming-purple-dawn-theme--docs",
  "../theming/purple-dawn.md": "?path=/docs/theming-purple-dawn-theme--docs",
  "theming/first-light.md": "?path=/docs/theming-first-light-theme--docs",
  "./theming/first-light.md": "?path=/docs/theming-first-light-theme--docs",
  "../theming/first-light.md": "?path=/docs/theming-first-light-theme--docs",

  // Color mode docs
  "theming/color-mode-initializer.md": "?path=/docs/theming-components-colormodeinitializer--docs",
  "./theming/color-mode-initializer.md": "?path=/docs/theming-components-colormodeinitializer--docs",
  "../theming/color-mode-initializer.md": "?path=/docs/theming-components-colormodeinitializer--docs",
  "theming/use-color-mode.md": "?path=/docs/theming-components-usecolormode--docs",
  "./theming/use-color-mode.md": "?path=/docs/theming-components-usecolormode--docs",
  "../theming/use-color-mode.md": "?path=/docs/theming-components-usecolormode--docs",

  // Getting started docs
  "components.md": "?path=/docs/getting-started-component-reference--docs",
  "./components.md": "?path=/docs/getting-started-component-reference--docs",
  "../components.md": "?path=/docs/getting-started-component-reference--docs",

  "troubleshooting.md": "?path=/docs/getting-started-troubleshooting--docs",
  "./troubleshooting.md": "?path=/docs/getting-started-troubleshooting--docs",
  "../troubleshooting.md": "?path=/docs/getting-started-troubleshooting--docs",

  // Integration docs
  "integrations/nextjs.md": "?path=/docs/getting-started-next-js-integration--docs",
  "./integrations/nextjs.md": "?path=/docs/getting-started-next-js-integration--docs",
  "../integrations/nextjs.md": "?path=/docs/getting-started-next-js-integration--docs",

  "integrations/vite.md": "?path=/docs/getting-started-vite-integration--docs",
  "./integrations/vite.md": "?path=/docs/getting-started-vite-integration--docs",
  "../integrations/vite.md": "?path=/docs/getting-started-vite-integration--docs",
};

/**
 * Transforms relative markdown links to Storybook navigation paths.
 *
 * Matches patterns like:
 * - [Link Text](../theming.md)
 * - [Link Text](./components.md#section)
 * - [Link Text](theming.md#available-color-tokens)
 */
function transformMarkdownLinks(markdown: string): string {
  // Match markdown links: [text](path.md) or [text](path.md#anchor)
  const linkRegex = /\[([^\]]+)\]\(([^)]+\.md)(#[^)]+)?\)/g;

  return markdown.replace(linkRegex, (match, linkText, mdPath, anchor) => {
    const storyPath = DOCS_TO_STORY_PATH[mdPath];

    if (storyPath) {
      // Note: Storybook doesn't support anchor navigation in docs well,
      // but we include it for potential future support
      return `[${linkText}](${storyPath})`;
    }

    // Keep original link if no mapping found (external or unmapped)
    return match;
  });
}

interface LinkedMarkdownProps {
  children: string;
}

/**
 * Renders markdown with relative .md links transformed to Storybook paths.
 *
 * Usage in MDX:
 * ```tsx
 * import { LinkedMarkdown } from '../components/LinkedMarkdown';
 * import Doc from '../../docs/example.md?raw';
 *
 * <LinkedMarkdown>{Doc}</LinkedMarkdown>
 * ```
 */
export function LinkedMarkdown({ children }: LinkedMarkdownProps) {
  const transformedMarkdown = transformMarkdownLinks(children);
  return <Markdown>{transformedMarkdown}</Markdown>;
}
