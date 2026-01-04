import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  BoldIcon,
  GridIcon,
  ItalicIcon,
  ListIcon,
  MoonIcon,
  SunIcon,
  UnderlineIcon,
} from "lucide-react";
import { useState } from "react";

import { Toggle } from "../toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Core Inputs/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  args: {
    onPressedChange: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "Toggle size",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    pressed: {
      control: "boolean",
      description: "Pressed/active state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

/**
 * View Mode Toggles - A realistic scenario showing toggles in context
 * of managing view preferences in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function CastExplorer() {
      const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
      const [theme, setTheme] = useState<"light" | "dark">("light");
      const [formatting, setFormatting] = useState({
        bold: false,
        italic: false,
        underline: false,
      });

      return (
        <div className="w-full max-w-xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">Cast Explorer</h2>
            <p className="text-muted-foreground text-sm">
              Browse and filter casts from the Farcaster network.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="border-border bg-card rounded-lg border p-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">View Mode</p>
                <p className="text-muted-foreground text-xs">
                  Choose how to display casts
                </p>
              </div>
              <div className="flex gap-2">
                <Toggle
                  pressed={viewMode === "grid"}
                  onPressedChange={(pressed) =>
                    pressed ? setViewMode("grid") : setViewMode("list")
                  }
                  aria-label="Grid view"
                >
                  <GridIcon />
                  Grid
                </Toggle>
                <Toggle
                  pressed={viewMode === "list"}
                  onPressedChange={(pressed) =>
                    pressed ? setViewMode("list") : setViewMode("grid")
                  }
                  aria-label="List view"
                >
                  <ListIcon />
                  List
                </Toggle>
              </div>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="border-border bg-card rounded-lg border p-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">Appearance</p>
                <p className="text-muted-foreground text-xs">
                  Customize your theme
                </p>
              </div>
              <div className="flex gap-2">
                <Toggle
                  variant="outline"
                  pressed={theme === "light"}
                  onPressedChange={(pressed) =>
                    pressed ? setTheme("light") : setTheme("dark")
                  }
                  aria-label="Light theme"
                >
                  <SunIcon />
                  Light
                </Toggle>
                <Toggle
                  variant="outline"
                  pressed={theme === "dark"}
                  onPressedChange={(pressed) =>
                    pressed ? setTheme("dark") : setTheme("light")
                  }
                  aria-label="Dark theme"
                >
                  <MoonIcon />
                  Dark
                </Toggle>
              </div>
            </div>
          </div>

          {/* Text Formatting Toggles */}
          <div className="border-border bg-card rounded-lg border p-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">Text Formatting</p>
                <p className="text-muted-foreground text-xs">
                  Apply formatting to your cast
                </p>
              </div>
              <div className="flex gap-2">
                <Toggle
                  size="sm"
                  variant="outline"
                  pressed={formatting.bold}
                  onPressedChange={(pressed) =>
                    setFormatting((prev) => ({ ...prev, bold: pressed }))
                  }
                  aria-label="Toggle bold"
                >
                  <BoldIcon />
                </Toggle>
                <Toggle
                  size="sm"
                  variant="outline"
                  pressed={formatting.italic}
                  onPressedChange={(pressed) =>
                    setFormatting((prev) => ({ ...prev, italic: pressed }))
                  }
                  aria-label="Toggle italic"
                >
                  <ItalicIcon />
                </Toggle>
                <Toggle
                  size="sm"
                  variant="outline"
                  pressed={formatting.underline}
                  onPressedChange={(pressed) =>
                    setFormatting((prev) => ({ ...prev, underline: pressed }))
                  }
                  aria-label="Toggle underline"
                >
                  <UnderlineIcon />
                </Toggle>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <CastExplorer />;
  },
};

/**
 * Complete design system reference showing all toggle variants, sizes, and states.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Visual Variants */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Visual Variants</h3>
          <p className="text-muted-foreground text-sm">
            Different styles for different contexts.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Toggle variant="default">Default</Toggle>
          <Toggle variant="outline">Outline</Toggle>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Sizes</h3>
          <p className="text-muted-foreground text-sm">
            Multiple sizes for different contexts and density needs.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Toggle size="sm">Small</Toggle>
          <Toggle size="default">Default</Toggle>
          <Toggle size="lg">Large</Toggle>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Icons</h3>
          <p className="text-muted-foreground text-sm">
            Icons can be used alone or with text.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Toggle>
            <GridIcon />
            Grid
          </Toggle>
          <Toggle variant="outline">
            <ListIcon />
            List
          </Toggle>
          <Toggle>
            <BoldIcon />
          </Toggle>
          <Toggle variant="outline">
            <ItalicIcon />
          </Toggle>
        </div>
      </section>

      {/* Pressed State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Pressed State</h3>
          <p className="text-muted-foreground text-sm">
            Toggles can be in an active/pressed state.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Toggle pressed={false}>Unpressed</Toggle>
          <Toggle pressed>Pressed</Toggle>
          <Toggle variant="outline" pressed={false}>
            Unpressed Outline
          </Toggle>
          <Toggle variant="outline" pressed>
            Pressed Outline
          </Toggle>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">States</h3>
          <p className="text-muted-foreground text-sm">
            Disabled and pressed states.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Toggle disabled>Disabled</Toggle>
          <Toggle variant="outline" disabled>
            Disabled Outline
          </Toggle>
          <Toggle pressed disabled>
            Disabled Pressed
          </Toggle>
          <Toggle variant="outline" pressed disabled>
            Disabled Pressed Outline
          </Toggle>
        </div>
      </section>

      {/* All Variants × Sizes Matrix */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Variant × Size Matrix</h3>
          <p className="text-muted-foreground text-sm">
            Complete combination reference.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-muted-foreground border-b text-left text-sm">
                <th className="pb-3 pr-4 font-medium">Variant</th>
                <th className="pb-3 pr-4 font-medium">SM</th>
                <th className="pb-3 pr-4 font-medium">Default</th>
                <th className="pb-3 pr-4 font-medium">LG</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {(["default", "outline"] as const).map((variant) => (
                <tr key={variant} className="border-b last:border-0">
                  <td className="py-3 pr-4 font-mono text-sm capitalize">
                    {variant}
                  </td>
                  <td className="py-3 pr-4">
                    <Toggle variant={variant} size="sm">
                      Toggle
                    </Toggle>
                  </td>
                  <td className="py-3 pr-4">
                    <Toggle variant={variant} size="default">
                      Toggle
                    </Toggle>
                  </td>
                  <td className="py-3 pr-4">
                    <Toggle variant={variant} size="lg">
                      Toggle
                    </Toggle>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Icon-Only Toggles */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Icon-Only Toggles</h3>
          <p className="text-muted-foreground text-sm">
            Toggles with only icons for compact toolbars.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Toggle size="sm" aria-label="Toggle bold">
            <BoldIcon />
          </Toggle>
          <Toggle size="default" aria-label="Toggle italic">
            <ItalicIcon />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle underline">
            <UnderlineIcon />
          </Toggle>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Toggle variant="outline" size="sm" aria-label="Toggle bold">
            <BoldIcon />
          </Toggle>
          <Toggle variant="outline" size="default" aria-label="Toggle italic">
            <ItalicIcon />
          </Toggle>
          <Toggle variant="outline" size="lg" aria-label="Toggle underline">
            <UnderlineIcon />
          </Toggle>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing toggle props.
 */
export const Interactive: Story = {
  args: {
    children: "Toggle",
    variant: "default",
    size: "default",
    disabled: false,
    pressed: false,
  },
};
