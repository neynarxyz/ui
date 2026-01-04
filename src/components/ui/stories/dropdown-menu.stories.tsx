import type { Meta, StoryObj } from "@storybook/react";
import {
  UserIcon,
  SettingsIcon,
  LogOutIcon,
  PlusIcon,
  CopyIcon,
  TrashIcon,
  MailIcon,
  BellIcon,
  SunIcon,
  MoonIcon,
  MonitorIcon,
  ChevronDownIcon,
  FileTextIcon,
  DownloadIcon,
  ShareIcon,
  EditIcon,
  ArchiveIcon,
  StarIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  InfoIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../dropdown-menu";

/**
 * DropdownMenu stories for design system documentation.
 *
 * Demonstrates user menus, action menus, nested submenus, checkbox items,
 * radio groups, keyboard shortcuts, and all menu item variants including
 * destructive actions.
 */
const meta: Meta<typeof DropdownMenu> = {
  title: "Components/Navigation & Menus/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile dropdown menu component built on Base UI Menu primitives. Supports nested submenus, checkboxes, radio groups, keyboard shortcuts, and destructive actions.",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "Whether the menu is open by default (uncontrolled)",
    },
    open: {
      control: "boolean",
      description: "Controlled open state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Realistic Neynar Dashboard scenarios showing user menus, action menus,
 * and content management patterns.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function UserMenu() {
      const [notifications, setNotifications] = useState(true);
      const [marketing, setMarketing] = useState(false);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="icon">
              <UserIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UserIcon />
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={notifications}
                onCheckedChange={setNotifications}
              >
                <BellIcon />
                Push Notifications
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={marketing}
                onCheckedChange={setMarketing}
              >
                <MailIcon />
                Marketing Emails
              </DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOutIcon />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    function ContentActionsMenu() {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">
              Actions
              <ChevronDownIcon className="ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem>
              <EditIcon />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CopyIcon />
              Duplicate
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <ShareIcon />
                Share
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <MailIcon />
                  Email
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CopyIcon />
                  Copy Link
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DownloadIcon />
                  Export
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <ArchiveIcon />
              Archive
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <TrashIcon />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    function ThemeMenu() {
      const [theme, setTheme] = useState("system");

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon">
              <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
              <DropdownMenuRadioItem value="light">
                <SunIcon />
                Light
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">
                <MoonIcon />
                Dark
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="system">
                <MonitorIcon />
                System
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <div className="w-full max-w-4xl space-y-12">
        {/* User Menu Example */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">User Account Menu</h3>
            <p className="text-muted-foreground text-sm">
              Account settings, preferences, and sign out actions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <UserMenu />
            <span className="text-muted-foreground text-sm">
              Click the user icon to open the menu
            </span>
          </div>
        </section>

        {/* Content Actions Example */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Content Actions</h3>
            <p className="text-muted-foreground text-sm">
              Manage content with nested submenus and destructive actions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ContentActionsMenu />
            <span className="text-muted-foreground text-sm">
              Features nested share submenu
            </span>
          </div>
        </section>

        {/* Theme Selector Example */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Theme Selector</h3>
            <p className="text-muted-foreground text-sm">
              Radio group for exclusive selection (light/dark/system theme)
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ThemeMenu />
            <span className="text-muted-foreground text-sm">
              Click to select theme preference
            </span>
          </div>
        </section>

        {/* Context Menu Card */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Cast Actions</h3>
            <p className="text-muted-foreground text-sm">
              Actions menu for Farcaster cast management
            </p>
          </div>
          <div className="border-border bg-card rounded-lg border p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="font-medium">Latest Cast</p>
                <p className="text-muted-foreground text-sm">
                  Building with Neynar is amazing! The APIs make Farcaster
                  development so much easier.
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" size="icon-sm">
                    <ChevronDownIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>
                    <StarIcon />
                    Add to Favorites
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CopyIcon />
                    Copy Link
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ShareIcon />
                    Share Cast
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <EditIcon />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">
                    <TrashIcon />
                    Delete Cast
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>
      </div>
    );
  },
};

/**
 * Complete design system reference showing all menu components, variants,
 * and composition patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    const [showIcons, setShowIcons] = useState(true);
    const [showShortcuts, setShowShortcuts] = useState(true);
    const [position, setPosition] = useState("bottom");

    return (
      <div className="w-full max-w-4xl space-y-10">
        {/* Basic Menu Items */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Basic Menu Items</h3>
            <p className="text-muted-foreground text-sm">
              Standard menu items with optional icons and shortcuts
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">Basic Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusIcon />
                New Item
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileTextIcon />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CopyIcon />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <ArchiveIcon />
                Archive (Disabled)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Menu Item Variants */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Menu Item Variants</h3>
            <p className="text-muted-foreground text-sm">
              Semantic variants for different action types and feedback
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">Item Variants</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <EditIcon />
                Default Item
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CopyIcon />
                Another Default
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="success">
                <CheckCircle2Icon />
                Success Action
              </DropdownMenuItem>
              <DropdownMenuItem variant="warning">
                <AlertTriangleIcon />
                Warning Action
              </DropdownMenuItem>
              <DropdownMenuItem variant="info">
                <InfoIcon />
                Info Action
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <TrashIcon />
                Destructive Action
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <LogOutIcon />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Keyboard Shortcuts */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Keyboard Shortcuts</h3>
            <p className="text-muted-foreground text-sm">
              Display keyboard shortcuts for quick actions
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">With Shortcuts</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <PlusIcon />
                New File
                <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileTextIcon />
                Open
                <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CopyIcon />
                Copy
                <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <SettingsIcon />
                Preferences
                <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Checkbox Items */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Checkbox Items</h3>
            <p className="text-muted-foreground text-sm">
              Toggle multiple independent options
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">View Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Display Settings</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuCheckboxItem
                  checked={showIcons}
                  onCheckedChange={setShowIcons}
                >
                  Show Icons
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showShortcuts}
                  onCheckedChange={setShowShortcuts}
                >
                  Show Shortcuts
                </DropdownMenuCheckboxItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Radio Groups */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Radio Groups</h3>
            <p className="text-muted-foreground text-sm">
              Select one option from a mutually exclusive group
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">Position: {position}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Menu Position</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Right
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Nested Submenus */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Nested Submenus</h3>
            <p className="text-muted-foreground text-sm">
              Create hierarchical menu structures with submenus
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">File Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <PlusIcon />
                New File
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <FileTextIcon />
                  Open Recent
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Project A</DropdownMenuItem>
                  <DropdownMenuItem>Project B</DropdownMenuItem>
                  <DropdownMenuItem>Project C</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Clear History</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <ShareIcon />
                  Share
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <MailIcon />
                    Email
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CopyIcon />
                    Copy Link
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <DownloadIcon />
                    Download
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <TrashIcon />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Grouped Items */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Grouped Items</h3>
            <p className="text-muted-foreground text-sm">
              Organize menu items into logical groups with labels
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">Organized Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <UserIcon />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuLabel>Team</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <PlusIcon />
                  Invite Members
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MailIcon />
                  Team Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOutIcon />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Inset Items */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Inset Items</h3>
            <p className="text-muted-foreground text-sm">
              Align items with extra padding when mixing with icon items
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">Mixed Alignment</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserIcon />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem inset>Account Settings</DropdownMenuItem>
              <DropdownMenuItem inset>Privacy Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuLabel inset>Preferences</DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuItem inset>General</DropdownMenuItem>
              <DropdownMenuItem inset>Appearance</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Content Alignment */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Content Alignment</h3>
            <p className="text-muted-foreground text-sm">
              Control menu alignment relative to trigger (start, center, end)
            </p>
          </div>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline">Align Start</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>Action 1</DropdownMenuItem>
                <DropdownMenuItem>Action 2</DropdownMenuItem>
                <DropdownMenuItem>Action 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline">Align Center</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem>Action 1</DropdownMenuItem>
                <DropdownMenuItem>Action 2</DropdownMenuItem>
                <DropdownMenuItem>Action 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline">Align End</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>Action 1</DropdownMenuItem>
                <DropdownMenuItem>Action 2</DropdownMenuItem>
                <DropdownMenuItem>Action 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>
      </div>
    );
  },
};

/**
 * Frosted effect demonstration - DropdownMenus use a translucent background (75% opacity)
 * with backdrop blur (12px) creating a frosted glass effect.
 */
export const Frosted: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Colorful busy background */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-4">
        <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
        <div className="rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500" />
        <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-500" />
        <div className="rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500" />
        <div className="rounded-lg bg-gradient-to-br from-red-500 to-rose-500" />
        <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500" />
        <div className="rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500" />
        <div className="rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500" />
        <div className="rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500" />
        <div className="rounded-lg bg-gradient-to-br from-lime-500 to-green-500" />
        <div className="rounded-lg bg-gradient-to-br from-sky-500 to-blue-500" />
        <div className="rounded-lg bg-gradient-to-br from-orange-500 to-red-500" />
        <div className="rounded-lg bg-gradient-to-br from-violet-500 to-purple-500" />
        <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500" />
        <div className="rounded-lg bg-gradient-to-br from-rose-500 to-pink-500" />
        <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-lime-500" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-8">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Frosted Menu</DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserIcon />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOutIcon />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  ),
};

/**
 * Interactive playground for testing dropdown menu props and behavior.
 */
export const Interactive: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon />
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  args: {
    defaultOpen: false,
  },
};
