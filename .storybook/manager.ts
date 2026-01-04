import { addons } from "storybook/manager-api"
import { create } from "storybook/theming/create"

const neynarTheme = create({
  base: "dark",

  // Brand
  brandTitle: "Neynar UI",
  brandUrl: "https://neynar.com",
  brandImage: "./neynar-logo.svg",
  brandTarget: "_blank",

  // UI colors
  colorPrimary: "#8A63D2",
  colorSecondary: "#8A63D2",

  // App background
  appBg: "#0a0a0a",
  appContentBg: "#0f0f0f",
  appPreviewBg: "#0a0a0a",
  appBorderColor: "#27272a",
  appBorderRadius: 8,

  // Text colors
  textColor: "#fafafa",
  textInverseColor: "#0a0a0a",
  textMutedColor: "#a1a1aa",

  // Toolbar
  barTextColor: "#a1a1aa",
  barHoverColor: "#8A63D2",
  barSelectedColor: "#8A63D2",
  barBg: "#0f0f0f",

  // Form colors
  buttonBg: "#27272a",
  buttonBorder: "#3f3f46",
  booleanBg: "#18181b",
  booleanSelectedBg: "#8A63D2",
  inputBg: "#18181b",
  inputBorder: "#27272a",
  inputTextColor: "#fafafa",
  inputBorderRadius: 6,
})

addons.setConfig({
  theme: neynarTheme,
  showNav: true,
  sidebar: {
    showRoots: true,
    collapsedRoots: ["utilities"],
  },
  layoutCustomisations: {
    showPanel(state, defaultValue) {
      // Hide panel for InContext and Variants stories, show for Interactive
      if (state.storyId?.endsWith("--in-context") || state.storyId?.endsWith("--variants")) {
        return false
      }
      return defaultValue
    },
  },
})
