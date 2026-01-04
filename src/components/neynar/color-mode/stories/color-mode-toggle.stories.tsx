import type { Meta, StoryObj } from "@storybook/react";
import { BellIcon, SearchIcon, UserIcon, MenuIcon } from "lucide-react";

import { ColorModeToggle } from "../color-mode-toggle";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof ColorModeToggle> = {
  title: "Theming/Components/ColorModeToggle",
  component: ColorModeToggle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "default", "lg"],
      description: "Button size (renders as icon when showLabel is false)",
    },
    showLabel: {
      control: "boolean",
      description: "Show color mode name label",
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Dropdown menu alignment",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorModeToggle>;

/**
 * Dashboard Header - A realistic scenario showing ColorModeToggle
 * in a typical application header with other controls.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function DashboardHeader() {
      return (
        <div className="w-full max-w-4xl space-y-6">
          {/* Main Header */}
          <header className="border-border bg-card flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg font-bold">
                N
              </div>
              <span className="font-semibold">Neynar Dashboard</span>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <SearchIcon className="size-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <BellIcon className="size-4" />
              </Button>
              <ColorModeToggle />
              <Button variant="ghost" size="icon">
                <UserIcon className="size-4" />
              </Button>
            </div>
          </header>

          {/* Settings Panel Example */}
          <div className="border-border bg-card rounded-lg border p-6 space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Appearance Settings</h2>
              <p className="text-muted-foreground text-sm">
                Customize how Neynar looks on your device.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b">
                <div>
                  <p className="font-medium">Color Mode</p>
                  <p className="text-muted-foreground text-sm">
                    Select your preferred color scheme.
                  </p>
                </div>
                <ColorModeToggle size="default" showLabel />
              </div>

              <div className="flex items-center justify-between py-3 border-b">
                <div>
                  <p className="font-medium">Compact Mode</p>
                  <p className="text-muted-foreground text-sm">
                    Reduce spacing for denser layouts.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Header Example */}
          <div className="border-border bg-card rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="icon">
                <MenuIcon className="size-5" />
              </Button>
              <span className="font-semibold">Mobile View</span>
              <div className="flex items-center gap-1">
                <ColorModeToggle variant="ghost" size="sm" />
                <Button variant="ghost" size="icon-sm">
                  <UserIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <DashboardHeader />;
  },
};

/**
 * Complete design system reference showing all ColorModeToggle variants and configurations.
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
            Different button styles for different contexts.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="text-center space-y-2">
            <ColorModeToggle variant="outline" />
            <p className="text-muted-foreground text-xs">outline (default)</p>
          </div>
          <div className="text-center space-y-2">
            <ColorModeToggle variant="default" />
            <p className="text-muted-foreground text-xs">default</p>
          </div>
          <div className="text-center space-y-2">
            <ColorModeToggle variant="secondary" />
            <p className="text-muted-foreground text-xs">secondary</p>
          </div>
          <div className="text-center space-y-2">
            <ColorModeToggle variant="ghost" />
            <p className="text-muted-foreground text-xs">ghost</p>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Sizes</h3>
          <p className="text-muted-foreground text-sm">
            All sizes render as icon buttons by default (no label).
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="text-center space-y-2">
            <ColorModeToggle size="xs" />
            <p className="text-muted-foreground text-xs">xs</p>
          </div>
          <div className="text-center space-y-2">
            <ColorModeToggle size="sm" />
            <p className="text-muted-foreground text-xs">sm</p>
          </div>
          <div className="text-center space-y-2">
            <ColorModeToggle size="default" />
            <p className="text-muted-foreground text-xs">default</p>
          </div>
          <div className="text-center space-y-2">
            <ColorModeToggle size="lg" />
            <p className="text-muted-foreground text-xs">lg</p>
          </div>
        </div>
      </section>

      {/* With Labels */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Labels</h3>
          <p className="text-muted-foreground text-sm">
            Show current color mode name for better UX in settings panels.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="text-center space-y-2">
            <ColorModeToggle size="sm" showLabel />
            <p className="text-muted-foreground text-xs">sm + showLabel</p>
          </div>
          <div className="text-center space-y-2">
            <ColorModeToggle size="default" showLabel />
            <p className="text-muted-foreground text-xs">default + showLabel</p>
          </div>
          <div className="text-center space-y-2">
            <ColorModeToggle size="lg" showLabel />
            <p className="text-muted-foreground text-xs">lg + showLabel</p>
          </div>
        </div>
      </section>

      {/* Menu Alignment */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Menu Alignment</h3>
          <p className="text-muted-foreground text-sm">
            Control dropdown position relative to trigger.
          </p>
        </div>
        <div className="flex justify-between max-w-md">
          <div className="text-center space-y-2">
            <ColorModeToggle align="start" />
            <p className="text-muted-foreground text-xs">start</p>
          </div>
          <div className="text-center space-y-2">
            <ColorModeToggle align="center" />
            <p className="text-muted-foreground text-xs">center</p>
          </div>
          <div className="text-center space-y-2">
            <ColorModeToggle align="end" />
            <p className="text-muted-foreground text-xs">end (default)</p>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Common Use Cases</h3>
          <p className="text-muted-foreground text-sm">
            Recommended configurations for typical scenarios.
          </p>
        </div>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Header / Toolbar</p>
              <p className="text-muted-foreground text-sm">
                Compact icon button
              </p>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2">
              <Button variant="ghost" size="icon-sm">
                <SearchIcon className="size-4" />
              </Button>
              <ColorModeToggle variant="ghost" size="sm" />
              <Button variant="ghost" size="icon-sm">
                <UserIcon className="size-4" />
              </Button>
            </div>
          </div>

          <div className="border rounded-lg p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Settings Panel</p>
              <p className="text-muted-foreground text-sm">
                Button with label for clarity
              </p>
            </div>
            <ColorModeToggle variant="outline" showLabel />
          </div>

          <div className="border rounded-lg p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Floating Action</p>
              <p className="text-muted-foreground text-sm">
                Prominent standalone button
              </p>
            </div>
            <ColorModeToggle variant="default" />
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Features</h3>
          <p className="text-muted-foreground text-sm">
            Built-in capabilities that work automatically.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <p className="font-medium">Zero Configuration</p>
            <p className="text-muted-foreground text-sm">
              Just import and use - no providers or setup required.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <p className="font-medium">System Detection</p>
            <p className="text-muted-foreground text-sm">
              Follows OS dark/light preference automatically.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <p className="font-medium">Cookie Persistence</p>
            <p className="text-muted-foreground text-sm">
              Color mode choice saved for SSR compatibility.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <p className="font-medium">Multi-Instance Sync</p>
            <p className="text-muted-foreground text-sm">
              Multiple toggles stay perfectly synchronized.
            </p>
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing ColorModeToggle props.
 */
export const Interactive: Story = {
  args: {
    variant: "outline",
    size: "default",
    showLabel: false,
    align: "end",
  },
};
