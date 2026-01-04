import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ["./docs/*.mdx", "../src/**/*.stories.@(ts|tsx)"],

  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-themes",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "./vite.config.ts",
      },
    },
  },

  staticDirs: ["./public"],

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  docs: {
    autodocs: true,
  },
}

export default config
