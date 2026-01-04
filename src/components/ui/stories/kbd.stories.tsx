import type { Meta, StoryObj } from "@storybook/react";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CommandIcon,
  CornerDownLeftIcon,
  DeleteIcon,
  OptionIcon,
} from "lucide-react";

import { Kbd, KbdGroup } from "../kbd";

const meta: Meta<typeof Kbd> = {
  title: "Components/Advanced & Specialized/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: "text",
      description: "Content to display inside the kbd element",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

/**
 * Keyboard Shortcuts Reference - A realistic scenario showing keyboard shortcuts
 * help panel in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function KeyboardShortcutsHelp() {
      const shortcuts = [
        {
          category: "Navigation",
          items: [
            {
              keys: (
                <KbdGroup>
                  <Kbd>
                    <CommandIcon />
                  </Kbd>
                  <Kbd>K</Kbd>
                </KbdGroup>
              ),
              description: "Open command palette",
            },
            {
              keys: (
                <KbdGroup>
                  <Kbd>
                    <CommandIcon />
                  </Kbd>
                  <Kbd>/</Kbd>
                </KbdGroup>
              ),
              description: "Focus search",
            },
            {
              keys: (
                <KbdGroup>
                  <Kbd>G</Kbd>
                  <Kbd>H</Kbd>
                </KbdGroup>
              ),
              description: "Go to home",
            },
            {
              keys: (
                <KbdGroup>
                  <Kbd>G</Kbd>
                  <Kbd>D</Kbd>
                </KbdGroup>
              ),
              description: "Go to dashboard",
            },
            {
              keys: (
                <KbdGroup>
                  <Kbd>G</Kbd>
                  <Kbd>A</Kbd>
                </KbdGroup>
              ),
              description: "Go to analytics",
            },
          ],
        },
        {
          category: "Actions",
          items: [
            {
              keys: (
                <KbdGroup>
                  <Kbd>
                    <CommandIcon />
                  </Kbd>
                  <Kbd>N</Kbd>
                </KbdGroup>
              ),
              description: "Create new API key",
            },
            {
              keys: (
                <KbdGroup>
                  <Kbd>
                    <CommandIcon />
                  </Kbd>
                  <Kbd>S</Kbd>
                </KbdGroup>
              ),
              description: "Save changes",
            },
            {
              keys: (
                <KbdGroup>
                  <Kbd>
                    <CommandIcon />
                  </Kbd>
                  <Kbd>
                    <CornerDownLeftIcon />
                  </Kbd>
                </KbdGroup>
              ),
              description: "Submit form",
            },
            {
              keys: <Kbd>Esc</Kbd>,
              description: "Close dialog",
            },
          ],
        },
        {
          category: "Selection",
          items: [
            {
              keys: (
                <KbdGroup>
                  <Kbd>
                    <CommandIcon />
                  </Kbd>
                  <Kbd>A</Kbd>
                </KbdGroup>
              ),
              description: "Select all",
            },
            {
              keys: (
                <KbdGroup>
                  <Kbd>
                    <CommandIcon />
                  </Kbd>
                  <Kbd>C</Kbd>
                </KbdGroup>
              ),
              description: "Copy",
            },
            {
              keys: (
                <KbdGroup>
                  <Kbd>
                    <CommandIcon />
                  </Kbd>
                  <Kbd>V</Kbd>
                </KbdGroup>
              ),
              description: "Paste",
            },
            {
              keys: (
                <KbdGroup>
                  <Kbd>
                    <CommandIcon />
                  </Kbd>
                  <Kbd>
                    <DeleteIcon />
                  </Kbd>
                </KbdGroup>
              ),
              description: "Delete selected",
            },
          ],
        },
        {
          category: "List Navigation",
          items: [
            {
              keys: (
                <Kbd>
                  <ArrowUpIcon />
                </Kbd>
              ),
              description: "Move up",
            },
            {
              keys: (
                <Kbd>
                  <ArrowDownIcon />
                </Kbd>
              ),
              description: "Move down",
            },
            {
              keys: (
                <KbdGroup>
                  <Kbd>
                    <OptionIcon />
                  </Kbd>
                  <Kbd>
                    <ArrowUpIcon />
                  </Kbd>
                </KbdGroup>
              ),
              description: "Jump to first",
            },
            {
              keys: (
                <KbdGroup>
                  <Kbd>
                    <OptionIcon />
                  </Kbd>
                  <Kbd>
                    <ArrowDownIcon />
                  </Kbd>
                </KbdGroup>
              ),
              description: "Jump to last",
            },
          ],
        },
      ];

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">Keyboard Shortcuts</h2>
            <p className="text-muted-foreground text-sm">
              Speed up your workflow with these keyboard shortcuts
            </p>
          </div>

          {/* Shortcuts by Category */}
          <div className="space-y-6">
            {shortcuts.map((section) => (
              <div key={section.category} className="space-y-3">
                <h3 className="text-sm font-semibold">{section.category}</h3>
                <div className="space-y-2">
                  {section.items.map((shortcut, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-md py-2"
                    >
                      <span className="text-sm">{shortcut.description}</span>
                      <div className="flex items-center gap-2">
                        {shortcut.keys}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Hint */}
          <div className="border-t pt-4">
            <p className="text-muted-foreground text-center text-sm">
              Press{" "}
              <KbdGroup>
                <Kbd>
                  <CommandIcon />
                </Kbd>
                <Kbd>?</Kbd>
              </KbdGroup>{" "}
              to toggle this help panel
            </p>
          </div>
        </div>
      );
    }

    return <KeyboardShortcutsHelp />;
  },
};

/**
 * Complete design system reference showing all kbd usage patterns and combinations.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Single Keys */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Single Keys</h3>
          <p className="text-muted-foreground text-sm">
            Individual keyboard keys for simple shortcuts.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Kbd>A</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Space</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>Ctrl</Kbd>
          <Kbd>Alt</Kbd>
        </div>
      </section>

      {/* Modifier Keys with Icons */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Modifier Keys with Icons</h3>
          <p className="text-muted-foreground text-sm">
            Special modifier keys shown with icons for better recognition.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Kbd>
            <CommandIcon />
          </Kbd>
          <Kbd>
            <OptionIcon />
          </Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>Ctrl</Kbd>
        </div>
      </section>

      {/* Arrow Keys */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Arrow Keys</h3>
          <p className="text-muted-foreground text-sm">
            Directional navigation keys with icon representation.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Kbd>
            <ArrowUpIcon />
          </Kbd>
          <Kbd>
            <ArrowDownIcon />
          </Kbd>
          <Kbd>
            <ArrowLeftIcon />
          </Kbd>
          <Kbd>
            <ArrowRightIcon />
          </Kbd>
        </div>
      </section>

      {/* Special Keys */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Special Keys</h3>
          <p className="text-muted-foreground text-sm">
            Special action keys with icons.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Kbd>
            <CornerDownLeftIcon />
          </Kbd>
          <Kbd>
            <DeleteIcon />
          </Kbd>
        </div>
      </section>

      {/* Key Combinations */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Key Combinations (KbdGroup)</h3>
          <p className="text-muted-foreground text-sm">
            Multiple keys pressed together for complex shortcuts.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-6">
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
            <span className="text-muted-foreground text-sm">Command + K</span>
          </div>
          <div className="flex items-center gap-6">
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
            <span className="text-muted-foreground text-sm">
              Command + Shift + P
            </span>
          </div>
          <div className="flex items-center gap-6">
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>Alt</Kbd>
              <Kbd>
                <DeleteIcon />
              </Kbd>
            </KbdGroup>
            <span className="text-muted-foreground text-sm">
              Ctrl + Alt + Delete
            </span>
          </div>
          <div className="flex items-center gap-6">
            <KbdGroup>
              <Kbd>
                <OptionIcon />
              </Kbd>
              <Kbd>
                <ArrowUpIcon />
              </Kbd>
            </KbdGroup>
            <span className="text-muted-foreground text-sm">
              Option + Arrow Up
            </span>
          </div>
        </div>
      </section>

      {/* Sequential Keys */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Sequential Keys</h3>
          <p className="text-muted-foreground text-sm">
            Keys pressed in sequence (not simultaneously) for Vim-like
            shortcuts.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-6">
            <KbdGroup>
              <Kbd>G</Kbd>
              <Kbd>H</Kbd>
            </KbdGroup>
            <span className="text-muted-foreground text-sm">
              G then H (Go Home)
            </span>
          </div>
          <div className="flex items-center gap-6">
            <KbdGroup>
              <Kbd>G</Kbd>
              <Kbd>D</Kbd>
            </KbdGroup>
            <span className="text-muted-foreground text-sm">
              G then D (Go Dashboard)
            </span>
          </div>
          <div className="flex items-center gap-6">
            <KbdGroup>
              <Kbd>G</Kbd>
              <Kbd>G</Kbd>
            </KbdGroup>
            <span className="text-muted-foreground text-sm">
              G twice (Go to Top)
            </span>
          </div>
        </div>
      </section>

      {/* Common Shortcuts */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Common Shortcuts</h3>
          <p className="text-muted-foreground text-sm">
            Standard keyboard shortcuts used across applications.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Save</span>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>S</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Copy</span>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Paste</span>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>V</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Undo</span>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>Z</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Redo</span>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>Z</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Select All</span>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>A</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Find</span>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>F</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">New Tab</span>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>T</Kbd>
            </KbdGroup>
          </div>
        </div>
      </section>

      {/* In Prose Context */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">In Documentation</h3>
          <p className="text-muted-foreground text-sm">
            Using kbd elements inline with text for documentation.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p>
            To open the command palette, press{" "}
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>{" "}
            at any time.
          </p>
          <p>
            Use the arrow keys{" "}
            <Kbd>
              <ArrowUpIcon />
            </Kbd>{" "}
            and{" "}
            <Kbd>
              <ArrowDownIcon />
            </Kbd>{" "}
            to navigate through the list.
          </p>
          <p>
            Press{" "}
            <Kbd>
              <CornerDownLeftIcon />
            </Kbd>{" "}
            to select an item or <Kbd>Esc</Kbd> to close the menu.
          </p>
          <p>
            You can save your changes by pressing{" "}
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>S</Kbd>
            </KbdGroup>{" "}
            or clicking the Save button.
          </p>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing kbd props.
 */
export const Interactive: Story = {
  args: {
    children: "K",
  },
};
