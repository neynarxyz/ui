import type { Meta, StoryObj } from "@storybook/react";
import {
  FileIcon,
  FolderOpenIcon,
  SaveIcon,
  DownloadIcon,
  PrinterIcon,
  ScissorsIcon,
  CopyIcon,
  ClipboardIcon,
  UndoIcon,
  RedoIcon,
  SearchIcon,
  ReplaceIcon,
  ZoomInIcon,
  ZoomOutIcon,
  MaximizeIcon,
  LayoutIcon,
  PanelLeftIcon,
  TerminalIcon,
  SettingsIcon,
  BellIcon,
  HelpCircleIcon,
  BookOpenIcon,
  MessageSquareIcon,
  LogOutIcon,
  SunIcon,
  MoonIcon,
  MonitorIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  InfoIcon,
} from "lucide-react";
import { useState } from "react";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarLabel,
  MenubarGroup,
} from "../menubar";

/**
 * Menubar stories for design system documentation.
 *
 * Demonstrates application navigation menubars with File, Edit, View, and Help
 * menus. Shows nested submenus, keyboard shortcuts, checkbox items, radio groups,
 * and all menu item variants including destructive actions.
 */
const meta: Meta<typeof Menubar> = {
  title: "Components/Navigation & Menus/Menubar",
  component: Menubar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A horizontal menubar component for application-level navigation and actions. Built on Base UI Menubar primitives with support for nested submenus, keyboard shortcuts, checkboxes, and radio groups.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Realistic Neynar Dashboard scenario showing a complete application menubar
 * with File, Edit, View, and Help menus.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function ApplicationMenubar() {
      const [showSidebar, setShowSidebar] = useState(true);
      const [showToolbar, setShowToolbar] = useState(true);
      const [showStatusBar, setShowStatusBar] = useState(false);
      const [theme, setTheme] = useState("system");
      const [notifications, setNotifications] = useState(true);

      return (
        <div className="w-full max-w-4xl space-y-6">
          {/* Application Header with Menubar */}
          <div className="border-border bg-background space-y-4 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-md p-2">
                  <FileIcon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Neynar Dashboard</h3>
                  <p className="text-muted-foreground text-xs">
                    Application workspace
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs">
                  Last saved: 2 minutes ago
                </span>
              </div>
            </div>

            <Menubar>
              {/* File Menu */}
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <FileIcon />
                    New File
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <FolderOpenIcon />
                    Open
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <SaveIcon />
                    Save
                    <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Save As...
                    <MenubarShortcut>⇧⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <DownloadIcon />
                      Export
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Export as JSON</MenubarItem>
                      <MenubarItem>Export as CSV</MenubarItem>
                      <MenubarItem>Export as PDF</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Custom Export...</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem>
                    <PrinterIcon />
                    Print
                    <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* Edit Menu */}
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <UndoIcon />
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <RedoIcon />
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <ScissorsIcon />
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <CopyIcon />
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <ClipboardIcon />
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <SearchIcon />
                    Find
                    <MenubarShortcut>⌘F</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <ReplaceIcon />
                    Replace
                    <MenubarShortcut>⌘H</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* View Menu */}
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarGroup>
                    <MenubarLabel>Panels</MenubarLabel>
                    <MenubarCheckboxItem
                      checked={showSidebar}
                      onCheckedChange={setShowSidebar}
                    >
                      <PanelLeftIcon />
                      Sidebar
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem
                      checked={showToolbar}
                      onCheckedChange={setShowToolbar}
                    >
                      <LayoutIcon />
                      Toolbar
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem
                      checked={showStatusBar}
                      onCheckedChange={setShowStatusBar}
                    >
                      Status Bar
                    </MenubarCheckboxItem>
                  </MenubarGroup>
                  <MenubarSeparator />
                  <MenubarGroup>
                    <MenubarLabel>Zoom</MenubarLabel>
                  </MenubarGroup>
                  <MenubarItem>
                    <ZoomInIcon />
                    Zoom In
                    <MenubarShortcut>⌘+</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <ZoomOutIcon />
                    Zoom Out
                    <MenubarShortcut>⌘-</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Reset Zoom
                    <MenubarShortcut>⌘0</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <MaximizeIcon />
                    Full Screen
                    <MenubarShortcut>⌃⌘F</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <SunIcon />
                      Theme
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarRadioGroup value={theme} onValueChange={setTheme}>
                        <MenubarRadioItem value="light">
                          <SunIcon />
                          Light
                        </MenubarRadioItem>
                        <MenubarRadioItem value="dark">
                          <MoonIcon />
                          Dark
                        </MenubarRadioItem>
                        <MenubarRadioItem value="system">
                          <MonitorIcon />
                          System
                        </MenubarRadioItem>
                      </MenubarRadioGroup>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>

              {/* Tools Menu */}
              <MenubarMenu>
                <MenubarTrigger>Tools</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <TerminalIcon />
                    Developer Console
                    <MenubarShortcut>⌥⌘I</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <SettingsIcon />
                    Settings
                    <MenubarShortcut>⌘,</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarGroup>
                    <MenubarCheckboxItem
                      checked={notifications}
                      onCheckedChange={setNotifications}
                    >
                      <BellIcon />
                      Enable Notifications
                    </MenubarCheckboxItem>
                  </MenubarGroup>
                </MenubarContent>
              </MenubarMenu>

              {/* Help Menu */}
              <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <BookOpenIcon />
                    Documentation
                  </MenubarItem>
                  <MenubarItem>
                    <MessageSquareIcon />
                    Community
                  </MenubarItem>
                  <MenubarItem>
                    <HelpCircleIcon />
                    Support
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>About Neynar</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            {/* Content Area showing current state */}
            <div className="border-border bg-card space-y-2 rounded-md border p-4">
              <h4 className="text-sm font-medium">View Settings</h4>
              <div className="text-muted-foreground space-y-1 text-xs">
                <p>Sidebar: {showSidebar ? "Visible" : "Hidden"}</p>
                <p>Toolbar: {showToolbar ? "Visible" : "Hidden"}</p>
                <p>Status Bar: {showStatusBar ? "Visible" : "Hidden"}</p>
                <p>Theme: {theme}</p>
                <p>Notifications: {notifications ? "Enabled" : "Disabled"}</p>
              </div>
            </div>
          </div>

          {/* Code Editor Menubar Example */}
          <div className="border-border bg-background space-y-4 rounded-lg border p-4">
            <div>
              <h3 className="font-semibold">Code Editor</h3>
              <p className="text-muted-foreground text-sm">
                Menubar for developer tools and code editing
              </p>
            </div>

            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New File</MenubarItem>
                  <MenubarItem>Open Folder...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Save All</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem variant="destructive">Close Editor</MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Selection</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Select All</MenubarItem>
                  <MenubarItem>Expand Selection</MenubarItem>
                  <MenubarItem>Shrink Selection</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Add Cursor Above</MenubarItem>
                  <MenubarItem>Add Cursor Below</MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Go</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Go to Line...</MenubarItem>
                  <MenubarItem>Go to Symbol...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Back</MenubarItem>
                  <MenubarItem>Forward</MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Terminal</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <TerminalIcon />
                    New Terminal
                  </MenubarItem>
                  <MenubarItem>Split Terminal</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Run Task...</MenubarItem>
                  <MenubarItem>Run Build Task...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      );
    }

    return <ApplicationMenubar />;
  },
};

/**
 * Complete design system reference showing all menubar components, variants,
 * and composition patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    const [textSize, setTextSize] = useState("medium");
    const [showLineNumbers, setShowLineNumbers] = useState(true);
    const [wordWrap, setWordWrap] = useState(false);

    return (
      <div className="w-full max-w-4xl space-y-10">
        {/* Basic Menubar */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Basic Menubar</h3>
            <p className="text-muted-foreground text-sm">
              Simple menubar with File, Edit, and View menus
            </p>
          </div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New</MenubarItem>
                <MenubarItem>Open</MenubarItem>
                <MenubarItem>Save</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Zoom In</MenubarItem>
                <MenubarItem>Zoom Out</MenubarItem>
                <MenubarItem>Reset Zoom</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </section>

        {/* With Icons and Shortcuts */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Icons & Shortcuts</h3>
            <p className="text-muted-foreground text-sm">
              Menu items with icons and keyboard shortcuts
            </p>
          </div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <FileIcon />
                  New File
                  <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <FolderOpenIcon />
                  Open
                  <MenubarShortcut>⌘O</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <SaveIcon />
                  Save
                  <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <PrinterIcon />
                  Print
                  <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </section>

        {/* Menu Item Variants */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Menu Item Variants</h3>
            <p className="text-muted-foreground text-sm">
              Semantic variants for different action types and feedback
            </p>
          </div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Actions</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <SaveIcon />
                  Save Changes
                </MenubarItem>
                <MenubarItem>
                  <DownloadIcon />
                  Download
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="success">
                  <CheckCircle2Icon />
                  Approve
                </MenubarItem>
                <MenubarItem variant="warning">
                  <AlertTriangleIcon />
                  Mark for Review
                </MenubarItem>
                <MenubarItem variant="info">
                  <InfoIcon />
                  View Details
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">
                  <LogOutIcon />
                  Sign Out
                </MenubarItem>
                <MenubarItem variant="destructive" disabled>
                  Delete (Disabled)
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </section>

        {/* Nested Submenus */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Nested Submenus</h3>
            <p className="text-muted-foreground text-sm">
              Hierarchical menu structures with multiple levels
            </p>
          </div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <FileIcon />
                  New File
                </MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger>
                    <FolderOpenIcon />
                    Open Recent
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Project A</MenubarItem>
                    <MenubarItem>Project B</MenubarItem>
                    <MenubarItem>Project C</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Clear History</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>
                    <DownloadIcon />
                    Export
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Export as JSON</MenubarItem>
                    <MenubarItem>Export as CSV</MenubarItem>
                    <MenubarItem>Export as XML</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>More Formats</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Export as YAML</MenubarItem>
                        <MenubarItem>Export as TOML</MenubarItem>
                        <MenubarItem>Export as Markdown</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </section>

        {/* Checkbox Items */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Checkbox Items</h3>
            <p className="text-muted-foreground text-sm">
              Toggle multiple independent view options
            </p>
          </div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarLabel>Editor Options</MenubarLabel>
                  <MenubarCheckboxItem
                    checked={showLineNumbers}
                    onCheckedChange={setShowLineNumbers}
                  >
                    Show Line Numbers
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={wordWrap}
                    onCheckedChange={setWordWrap}
                  >
                    Word Wrap
                  </MenubarCheckboxItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarItem>Toggle Minimap</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <div className="text-muted-foreground text-xs">
            Line Numbers: {showLineNumbers ? "On" : "Off"}, Word Wrap:{" "}
            {wordWrap ? "On" : "Off"}
          </div>
        </section>

        {/* Radio Groups */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Radio Groups</h3>
            <p className="text-muted-foreground text-sm">
              Select one option from mutually exclusive choices
            </p>
          </div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Format</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarLabel>Text Size</MenubarLabel>
                </MenubarGroup>
                <MenubarRadioGroup value={textSize} onValueChange={setTextSize}>
                  <MenubarRadioItem value="small">Small</MenubarRadioItem>
                  <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
                  <MenubarRadioItem value="large">Large</MenubarRadioItem>
                  <MenubarRadioItem value="xlarge">
                    Extra Large
                  </MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <div className="text-muted-foreground text-xs">
            Selected size: {textSize}
          </div>
        </section>

        {/* Disabled Items */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Disabled Items</h3>
            <p className="text-muted-foreground text-sm">
              Menu items can be disabled when actions are unavailable
            </p>
          </div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <UndoIcon />
                  Undo
                  <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>
                  <RedoIcon />
                  Redo (Nothing to redo)
                  <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <CopyIcon />
                  Copy
                  <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>
                  <ClipboardIcon />
                  Paste (Clipboard empty)
                  <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </section>

        {/* Complete Application Menubar */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">
              Complete Application Menubar
            </h3>
            <p className="text-muted-foreground text-sm">
              Full-featured menubar with all component types
            </p>
          </div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <FileIcon />
                  New
                  <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <FolderOpenIcon />
                  Open
                  <MenubarShortcut>⌘O</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <SaveIcon />
                  Save
                  <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger>Export</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>PDF Document</MenubarItem>
                    <MenubarItem>Text File</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem disabled>Redo</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarCheckboxItem checked>Toolbar</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Status Bar</MenubarCheckboxItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Theme</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarRadioGroup value="system">
                      <MenubarRadioItem value="light">Light</MenubarRadioItem>
                      <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
                      <MenubarRadioItem value="system">System</MenubarRadioItem>
                    </MenubarRadioGroup>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Documentation</MenubarItem>
                <MenubarItem>Keyboard Shortcuts</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>About</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </section>

        {/* Minimal Menubar */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Minimal Menubar</h3>
            <p className="text-muted-foreground text-sm">
              Simple menubar without icons or shortcuts
            </p>
          </div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New</MenubarItem>
                <MenubarItem>Open</MenubarItem>
                <MenubarItem>Save</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Close</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Documentation</MenubarItem>
                <MenubarItem>About</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </section>
      </div>
    );
  },
};

/**
 * Frosted effect demonstration - Menubar menus use a translucent background (75% opacity)
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
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <FileIcon />
                New File
              </MenubarItem>
              <MenubarItem>
                <FolderOpenIcon />
                Open
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <SaveIcon />
                Save
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <UndoIcon />
                Undo
              </MenubarItem>
              <MenubarItem>
                <RedoIcon />
                Redo
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  ),
};

/**
 * Interactive playground for testing menubar props and behavior.
 */
export const Interactive: Story = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileIcon />
            New File
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <FolderOpenIcon />
            Open
            <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <SaveIcon />
            Save
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <UndoIcon />
            Undo
            <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <RedoIcon />
            Redo
            <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <CopyIcon />
            Copy
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <ClipboardIcon />
            Paste
            <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <BookOpenIcon />
            Documentation
          </MenubarItem>
          <MenubarItem>
            <HelpCircleIcon />
            Support
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  args: {},
};
