import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import {
  BarChart3Icon,
  BookOpenIcon,
  CalendarIcon,
  CreditCardIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  Loader2Icon,
  MessagesSquareIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";
import { useState } from "react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../command";
import { Button } from "../button";

const meta: Meta<typeof Command> = {
  title: "Components/Advanced & Specialized/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    filter: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Command>;

/**
 * Quick Actions Palette (⌘K) - A realistic command palette for the Neynar Dashboard.
 * This demonstrates the primary use case: a searchable command palette for quick navigation
 * and actions across the dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function CommandPaletteDemo() {
      const [open, setOpen] = useState(false);
      const [loading, setLoading] = useState(false);
      const [selectedCommand, setSelectedCommand] = useState<string | null>(
        null,
      );

      const handleSelect = (value: string) => {
        setSelectedCommand(value);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setOpen(false);
          setSelectedCommand(null);
        }, 1000);
      };

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Demo Instructions */}
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Command Palette Demo</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Click the button below to open the command palette. This is
              typically triggered with ⌘K (Mac) or Ctrl+K (Windows) keyboard
              shortcuts in production applications.
            </p>
            <div className="mt-4">
              <Button onClick={() => setOpen(true)}>
                Open Command Palette
                <kbd className="bg-muted text-muted-foreground ml-2 rounded border px-1.5 py-0.5 text-xs font-mono">
                  ⌘K
                </kbd>
              </Button>
            </div>
          </div>

          {/* Command Dialog */}
          <CommandDialog
            open={open}
            onOpenChange={setOpen}
            title="Quick Actions"
            description="Search for commands and navigate the dashboard"
          >
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup heading="Navigation">
                  <CommandItem
                    onSelect={() => handleSelect("dashboard")}
                    disabled={loading && selectedCommand === "dashboard"}
                  >
                    {loading && selectedCommand === "dashboard" ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      <LayoutDashboardIcon />
                    )}
                    Dashboard
                    <CommandShortcut>⌘D</CommandShortcut>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => handleSelect("analytics")}
                    disabled={loading && selectedCommand === "analytics"}
                  >
                    {loading && selectedCommand === "analytics" ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      <BarChart3Icon />
                    )}
                    Analytics
                    <CommandShortcut>⌘A</CommandShortcut>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => handleSelect("users")}
                    disabled={loading && selectedCommand === "users"}
                  >
                    {loading && selectedCommand === "users" ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      <UsersIcon />
                    )}
                    Users
                    <CommandShortcut>⌘U</CommandShortcut>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => handleSelect("messages")}
                    disabled={loading && selectedCommand === "messages"}
                  >
                    {loading && selectedCommand === "messages" ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      <MessagesSquareIcon />
                    )}
                    Messages
                    <CommandShortcut>⌘M</CommandShortcut>
                  </CommandItem>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Actions">
                  <CommandItem
                    onSelect={() => handleSelect("new-api-key")}
                    disabled={loading && selectedCommand === "new-api-key"}
                  >
                    {loading && selectedCommand === "new-api-key" ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      <ZapIcon />
                    )}
                    Create API Key
                    <CommandShortcut>⌘N</CommandShortcut>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => handleSelect("billing")}
                    disabled={loading && selectedCommand === "billing"}
                  >
                    {loading && selectedCommand === "billing" ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      <CreditCardIcon />
                    )}
                    Billing & Usage
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => handleSelect("docs")}
                    disabled={loading && selectedCommand === "docs"}
                  >
                    {loading && selectedCommand === "docs" ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      <BookOpenIcon />
                    )}
                    Documentation
                    <CommandShortcut>⌘?</CommandShortcut>
                  </CommandItem>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Settings">
                  <CommandItem
                    onSelect={() => handleSelect("profile")}
                    disabled={loading && selectedCommand === "profile"}
                  >
                    {loading && selectedCommand === "profile" ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      <UserIcon />
                    )}
                    Profile Settings
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => handleSelect("settings")}
                    disabled={loading && selectedCommand === "settings"}
                  >
                    {loading && selectedCommand === "settings" ? (
                      <Loader2Icon className="animate-spin" />
                    ) : (
                      <SettingsIcon />
                    )}
                    General Settings
                    <CommandShortcut>⌘,</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CommandDialog>

          {/* Recent Actions Display */}
          <div className="rounded-lg border p-4">
            <h4 className="text-sm font-medium">Recent Actions</h4>
            <p className="text-muted-foreground mt-1 text-xs">
              {selectedCommand
                ? `Loading ${selectedCommand}...`
                : "No recent actions"}
            </p>
          </div>
        </div>
      );
    }

    return <CommandPaletteDemo />;
  },
};

/**
 * Complete design system reference showing all Command component features,
 * sub-components, and interaction patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Basic Command */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Command</h3>
          <p className="text-muted-foreground text-sm">
            Simple command menu with search input and grouped items.
          </p>
        </div>
        <Command className="w-full max-w-md">
          <CommandInput placeholder="Search commands..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem>
                <FileTextIcon />
                New File
              </CommandItem>
              <CommandItem>
                <UserIcon />
                New User
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                Settings
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>

      {/* With Groups and Separators */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">
            Multiple Groups with Separators
          </h3>
          <p className="text-muted-foreground text-sm">
            Organize commands into logical groups separated by visual dividers.
          </p>
        </div>
        <Command className="w-full max-w-md">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem>
                <LayoutDashboardIcon />
                Dashboard
              </CommandItem>
              <CommandItem>
                <BarChart3Icon />
                Analytics
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <UserIcon />
                Profile
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                Preferences
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>

      {/* With Keyboard Shortcuts */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Keyboard Shortcuts</h3>
          <p className="text-muted-foreground text-sm">
            Display keyboard shortcuts to help users learn and navigate faster.
          </p>
        </div>
        <Command className="w-full max-w-md">
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Quick Actions">
              <CommandItem>
                <ZapIcon />
                Quick Action
                <CommandShortcut>⌘K</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <FileTextIcon />
                New Document
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                Settings
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <BookOpenIcon />
                Help
                <CommandShortcut>⌘?</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>

      {/* Empty State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Empty State</h3>
          <p className="text-muted-foreground text-sm">
            Displayed when search returns no results.
          </p>
        </div>
        <Command className="w-full max-w-md">
          <CommandInput placeholder="Try searching for 'xyz'..." />
          <CommandList>
            <CommandEmpty>
              <div className="py-6 text-center">
                <p className="text-sm">No results found.</p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Try a different search term.
                </p>
              </div>
            </CommandEmpty>
          </CommandList>
        </Command>
      </section>

      {/* Complex Command with Multiple Features */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Full-Featured Command</h3>
          <p className="text-muted-foreground text-sm">
            Complete example with groups, separators, shortcuts, and icons.
          </p>
        </div>
        <Command className="w-full max-w-md">
          <CommandInput placeholder="Search everything..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Pages">
              <CommandItem>
                <LayoutDashboardIcon />
                Dashboard
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <BarChart3Icon />
                Analytics
                <CommandShortcut>⌘A</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <UsersIcon />
                Team
                <CommandShortcut>⌘T</CommandShortcut>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Actions">
              <CommandItem>
                <FileTextIcon />
                Create Document
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ZapIcon />
                Quick Action
                <CommandShortcut>⌘K</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                Billing
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Help">
              <CommandItem>
                <BookOpenIcon />
                Documentation
                <CommandShortcut>⌘?</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <MessagesSquareIcon />
                Support
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>

      {/* Different Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Different Widths</h3>
          <p className="text-muted-foreground text-sm">
            Command components adapt to different container widths.
          </p>
        </div>
        <div className="space-y-4">
          <Command className="w-64">
            <CommandInput placeholder="Small..." />
            <CommandList>
              <CommandGroup>
                <CommandItem>
                  <FileTextIcon />
                  Item
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
          <Command className="w-96">
            <CommandInput placeholder="Medium..." />
            <CommandList>
              <CommandGroup>
                <CommandItem>
                  <FileTextIcon />
                  Item
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
          <Command className="w-full max-w-2xl">
            <CommandInput placeholder="Large..." />
            <CommandList>
              <CommandGroup>
                <CommandItem>
                  <FileTextIcon />
                  Item
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing Command component props.
 */
export const Interactive: Story = {
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <Command {...args} className="w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={action("onSelect: calendar")}>
            <CalendarIcon />
            Calendar
          </CommandItem>
          <CommandItem onSelect={action("onSelect: search-emoji")}>
            <SmileIcon />
            Search Emoji
          </CommandItem>
          <CommandItem onSelect={action("onSelect: documents")}>
            <FileTextIcon />
            Documents
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
