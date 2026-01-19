import type { StorybookConfig } from "@storybook/react-vite"

// Base path for deployment - "/" for local dev, "/ui/" for production
const basePath = process.env.STORYBOOK_BASE_PATH || "/";

// Only inject base tag when deploying to subpath
const baseTag = basePath !== "/" ? `<base href="${basePath}">` : "";

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

  viteFinal: (config) => {
    config.base = basePath;
    return config;
  },

  managerHead: (head) => `${baseTag}${head}`,

  previewHead: (head) => `${baseTag}${head}`,
}

export default config
