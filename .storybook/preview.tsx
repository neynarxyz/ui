import type { Decorator, Preview } from "@storybook/react";
import { create } from "storybook/theming/create";

import { FirstLightFilters } from "../src/components/neynar/first-light";

// Import styles (Tailwind, @theme block, base styles)
import "../src/styles/styles.css";

// Import theme variables - each has :root + .theme-X scoped rules
import "../src/styles/themes/purple-dawn.css";
import "../src/styles/themes/first-light.css";

/**
 * Decorator that applies theme (purple-dawn/first-light) and color mode (light/dark)
 *
 * Theme switching uses .theme-X classes (e.g., .theme-purple-dawn, .theme-first-light)
 * Color mode uses .dark/.light classes
 */
const themeDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme || "purple-dawn";
  const colorMode = context.globals.colorMode || "dark";
  const isFirstLight = theme === "first-light";

  // Apply classes to html element
  if (typeof document !== "undefined") {
    const html = document.documentElement;

    // Remove all theme classes, then add the selected one
    html.classList.remove("theme-purple-dawn", "theme-first-light");
    html.classList.add(`theme-${theme}`);

    // Apply color mode
    html.classList.remove("dark", "light");
    html.classList.add(colorMode);
  }

  return (
    <>
      {isFirstLight && <FirstLightFilters />}
      <Story />
    </>
  );
};

const neynarDocsTheme = create({
  base: "dark",
  brandTitle: "Neynar UI",
  brandUrl: "https://neynar.com",
  colorPrimary: "#8A63D2",
  colorSecondary: "#8A63D2",
  appBg: "#0a0a0a",
  appContentBg: "#0f0f0f",
  appPreviewBg: "#0a0a0a",
  appBorderColor: "#27272a",
  textColor: "#fafafa",
  textMutedColor: "#a1a1aa",
  barBg: "#0f0f0f",
});

const preview: Preview = {
  decorators: [themeDecorator],

  // Global argTypes - hide internal props from Controls panel
  argTypes: {
    // Action handlers should only appear in Actions panel, not Controls
    onClick: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onValueChange: { table: { disable: true } },
    onCheckedChange: { table: { disable: true } },
    onSelect: { table: { disable: true } },
    onOpenChange: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    onSubmit: { table: { disable: true } },
    onKeyDown: { table: { disable: true } },
    onKeyUp: { table: { disable: true } },
    onMouseEnter: { table: { disable: true } },
    onMouseLeave: { table: { disable: true } },
    // Internal props
    render: { table: { disable: true } },
    as: { table: { disable: true } },
    asChild: { table: { disable: true } },
    ref: { table: { disable: true } },
    // className as text control (shows "Set string" when undefined, which is fine)
    className: {
      control: { type: "text" },
    },
  },

  globalTypes: {
    theme: {
      description: "Visual theme",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          {
            value: "purple-dawn",
            title: "Purple Dawn Theme",
            icon: "star",
            right: "Default",
          },
          {
            value: "first-light",
            title: "First Light Theme",
            icon: "edit",
            right: "Hand-drawn",
          },
        ],
        dynamicTitle: true,
        showReset: false,
      },
    },
    colorMode: {
      description: "Color mode (light/dark)",
      toolbar: {
        title: "Mode",
        icon: "moon",
        items: [
          { value: "light", title: "Light Mode", icon: "sun" },
          { value: "dark", title: "Dark Mode", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: "purple-dawn",
    colorMode: "dark",
  },

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      disable: true,
    },
    docs: {
      theme: neynarDocsTheme,
    },
    options: {
      storySort: {
        order: [
          "Getting Started",
          ["Introduction", "AI Assistants", "Component Reference", "Next.js Integration", "Vite Integration", "Troubleshooting", "About Neynar"],
          "Theming",
          [
            "Overview",
            "Purple Dawn Theme",
            "First Light Theme",
            "Components",
            ["ColorModeToggle", "ColorModeInitializer", "useColorMode"],
          ],
          "Components",
          [
            "Button",
            "Badge",
            "Card",
            "Input",
            "Textarea",
            "Select",
            "Checkbox",
            "Switch",
            "Radio Group",
            "Slider",
            "Accordion",
            "Tabs",
            "Dialog",
            "Sheet",
            "Drawer",
            "Alert Dialog",
            "Popover",
            "Tooltip",
            "Dropdown Menu",
            "Context Menu",
            "Navigation Menu",
            "Menubar",
            "Command",
            "Combobox",
            "Table",
            "Calendar",
            "Carousel",
            "Chart",
            "*",
          ],
          "Utilities",
          "*",
        ],
      },
    },
  },
};

export default preview;
