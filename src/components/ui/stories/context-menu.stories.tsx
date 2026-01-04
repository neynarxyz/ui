import type { Meta, StoryObj } from "@storybook/react";
import {
  CopyIcon,
  TrashIcon,
  EditIcon,
  ShareIcon,
  StarIcon,
  EyeIcon,
  EyeOffIcon,
  PinIcon,
  DownloadIcon,
  FlagIcon,
  MailIcon,
  MessageSquareIcon,
  UserIcon,
  HeartIcon,
  RepeatIcon,
  LinkIcon,
  BookmarkIcon,
  FilterIcon,
  MoreHorizontalIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  InfoIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "../context-menu";

/**
 * ContextMenu stories for design system documentation.
 *
 * Demonstrates right-click context menus for casts, API resources, and content
 * management. Includes nested submenus, checkbox items, radio groups, keyboard
 * shortcuts, and destructive actions.
 */
const meta: Meta<typeof ContextMenu> = {
  title: "Components/Navigation & Menus/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A context menu component triggered by right-click. Built on Base UI ContextMenu primitives. Supports nested submenus, checkboxes, radio groups, keyboard shortcuts, and destructive actions.",
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
 * Realistic Neynar Dashboard scenarios - right-click actions on casts,
 * API resources, and content cards.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function CastCard() {
      const [bookmarked, setBookmarked] = useState(false);
      const [hidden, setHidden] = useState(false);

      return (
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="border-border bg-card hover:bg-accent/50 w-full max-w-2xl cursor-default rounded-lg border p-4 transition-colors">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full">
                  <UserIcon className="size-5" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">@vitalik.eth</span>
                    <span className="text-muted-foreground text-sm">
                      2h ago
                    </span>
                  </div>
                  <p className="text-sm">
                    Building with Neynar APIs is incredible! The developer
                    experience makes integrating Farcaster into any app so much
                    easier.
                  </p>
                  <div className="text-muted-foreground flex gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <HeartIcon className="size-4" />
                      42
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquareIcon className="size-4" />
                      12
                    </span>
                    <span className="flex items-center gap-1">
                      <RepeatIcon className="size-4" />8
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-muted-foreground mt-2 text-xs">
                Right-click this cast for actions
              </div>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuGroup>
              <ContextMenuLabel>Cast Actions</ContextMenuLabel>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>
                <CopyIcon />
                Copy Cast Link
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <LinkIcon />
                Copy Cast Hash
              </ContextMenuItem>
              <ContextMenuItem>
                <UserIcon />
                View Profile
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuCheckboxItem
                checked={bookmarked}
                onCheckedChange={setBookmarked}
              >
                <BookmarkIcon />
                Bookmark Cast
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={hidden}
                onCheckedChange={setHidden}
              >
                {hidden ? <EyeIcon /> : <EyeOffIcon />}
                Hide from Feed
              </ContextMenuCheckboxItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <ShareIcon />
                Share
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>
                  <MailIcon />
                  Email
                </ContextMenuItem>
                <ContextMenuItem>
                  <CopyIcon />
                  Copy Link
                </ContextMenuItem>
                <ContextMenuItem>
                  <DownloadIcon />
                  Download as Image
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              <FlagIcon />
              Report Cast
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      );
    }

    function APIResourceCard() {
      const [visibility, setVisibility] = useState("public");

      return (
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="border-border bg-card hover:bg-accent/50 w-full max-w-2xl cursor-default rounded-lg border p-4 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-md p-2">
                    <FilterIcon className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium">Feed Filter: Trending</p>
                    <code className="text-muted-foreground font-mono text-xs">
                      filter_id: 0x8f3d...7a2b
                    </code>
                  </div>
                </div>
                <Button variant="ghost" size="icon-sm">
                  <MoreHorizontalIcon />
                </Button>
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-muted-foreground text-sm">
                  Custom filter for trending casts with engagement threshold
                </p>
                <div className="text-muted-foreground flex gap-4 text-xs">
                  <span>Created 2 days ago</span>
                  <span className="text-primary">• Active</span>
                </div>
              </div>
              <div className="text-muted-foreground mt-2 text-xs">
                Right-click for filter actions
              </div>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuGroup>
              <ContextMenuLabel>Filter Actions</ContextMenuLabel>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <EditIcon />
              Edit Filter
              <ContextMenuShortcut>⌘E</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <CopyIcon />
              Duplicate Filter
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel>Visibility</ContextMenuLabel>
            </ContextMenuGroup>
            <ContextMenuRadioGroup
              value={visibility}
              onValueChange={setVisibility}
            >
              <ContextMenuRadioItem value="public">
                <EyeIcon />
                Public
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="private">
                <EyeOffIcon />
                Private
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="team">
                <UserIcon />
                Team Only
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <StarIcon />
              Add to Favorites
            </ContextMenuItem>
            <ContextMenuItem>
              <PinIcon />
              Pin to Dashboard
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete Filter
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      );
    }

    function ContentGrid() {
      return (
        <div className="grid gap-4">
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="border-border bg-card hover:bg-accent/50 flex cursor-default items-center gap-3 rounded-lg border p-3 transition-colors">
                <div className="bg-primary/10 text-primary rounded-md p-2">
                  <DownloadIcon className="size-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">webhook-payload.json</p>
                  <p className="text-muted-foreground text-xs">2.4 KB</p>
                </div>
                <span className="text-muted-foreground text-xs">
                  Right-click
                </span>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-48">
              <ContextMenuItem>
                <DownloadIcon />
                Download
              </ContextMenuItem>
              <ContextMenuItem>
                <CopyIcon />
                Copy Content
              </ContextMenuItem>
              <ContextMenuItem>
                <ShareIcon />
                Share
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>

          <ContextMenu>
            <ContextMenuTrigger>
              <div className="border-border bg-card hover:bg-accent/50 flex cursor-default items-center gap-3 rounded-lg border p-3 transition-colors">
                <div className="bg-primary/10 text-primary rounded-md p-2">
                  <DownloadIcon className="size-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">api-response.json</p>
                  <p className="text-muted-foreground text-xs">1.8 KB</p>
                </div>
                <span className="text-muted-foreground text-xs">
                  Right-click
                </span>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-48">
              <ContextMenuItem>
                <DownloadIcon />
                Download
              </ContextMenuItem>
              <ContextMenuItem>
                <CopyIcon />
                Copy Content
              </ContextMenuItem>
              <ContextMenuItem>
                <ShareIcon />
                Share
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      );
    }

    return (
      <div className="w-full max-w-4xl space-y-12">
        {/* Cast Context Menu */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Cast Context Menu</h3>
            <p className="text-muted-foreground text-sm">
              Right-click on a cast to access actions like copy, share,
              bookmark, and report
            </p>
          </div>
          <CastCard />
        </section>

        {/* API Resource Context Menu */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">API Resource Context Menu</h3>
            <p className="text-muted-foreground text-sm">
              Right-click on API resources like filters to manage visibility and
              settings
            </p>
          </div>
          <APIResourceCard />
        </section>

        {/* Content Grid Context Menu */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">File Context Menu</h3>
            <p className="text-muted-foreground text-sm">
              Right-click on files to download, copy, share, or delete
            </p>
          </div>
          <ContentGrid />
        </section>
      </div>
    );
  },
};

/**
 * Complete design system reference showing all context menu components,
 * variants, and composition patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    const [showGrid, setShowGrid] = useState(true);
    const [showLabels, setShowLabels] = useState(true);
    const [sortBy, setSortBy] = useState("name");

    return (
      <div className="w-full max-w-4xl space-y-10">
        {/* Basic Context Menu */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Basic Context Menu</h3>
            <p className="text-muted-foreground text-sm">
              Standard context menu items with icons and shortcuts
            </p>
          </div>
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="border-border bg-card flex h-32 cursor-default items-center justify-center rounded-lg border">
                <p className="text-muted-foreground text-sm">
                  Right-click here
                </p>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuGroup>
                <ContextMenuLabel>Actions</ContextMenuLabel>
                <ContextMenuItem>
                  <EditIcon />
                  Edit
                </ContextMenuItem>
                <ContextMenuItem>
                  <CopyIcon />
                  Copy
                </ContextMenuItem>
                <ContextMenuItem>
                  <ShareIcon />
                  Share
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  <DownloadIcon />
                  Download (Disabled)
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* Menu Item Variants */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Menu Item Variants</h3>
            <p className="text-muted-foreground text-sm">
              Semantic variants for different action types and feedback
            </p>
          </div>
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="border-border bg-card flex h-32 cursor-default items-center justify-center rounded-lg border">
                <p className="text-muted-foreground text-sm">
                  Right-click for variants
                </p>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuItem>
                <EditIcon />
                Default Item
              </ContextMenuItem>
              <ContextMenuItem>
                <CopyIcon />
                Another Default
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="success">
                <CheckCircle2Icon />
                Approve
              </ContextMenuItem>
              <ContextMenuItem variant="warning">
                <AlertTriangleIcon />
                Mark for Review
              </ContextMenuItem>
              <ContextMenuItem variant="info">
                <InfoIcon />
                View Details
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Destructive Action
              </ContextMenuItem>
              <ContextMenuItem variant="destructive">
                <FlagIcon />
                Report Content
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* Keyboard Shortcuts */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Keyboard Shortcuts</h3>
            <p className="text-muted-foreground text-sm">
              Display keyboard shortcuts for quick actions
            </p>
          </div>
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="border-border bg-card flex h-32 cursor-default items-center justify-center rounded-lg border">
                <p className="text-muted-foreground text-sm">
                  Right-click for shortcuts
                </p>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuItem>
                <EditIcon />
                Edit
                <ContextMenuShortcut>⌘E</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <CopyIcon />
                Copy
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <ShareIcon />
                Share
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Delete
                <ContextMenuShortcut>⌫</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* Checkbox Items */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Checkbox Items</h3>
            <p className="text-muted-foreground text-sm">
              Toggle multiple independent options
            </p>
          </div>
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="border-border bg-card flex h-32 cursor-default items-center justify-center rounded-lg border">
                <p className="text-muted-foreground text-sm">
                  Right-click for view options
                </p>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuGroup>
                <ContextMenuLabel>View Options</ContextMenuLabel>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuCheckboxItem
                  checked={showGrid}
                  onCheckedChange={setShowGrid}
                >
                  Show Grid
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={showLabels}
                  onCheckedChange={setShowLabels}
                >
                  Show Labels
                </ContextMenuCheckboxItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* Radio Groups */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Radio Groups</h3>
            <p className="text-muted-foreground text-sm">
              Select one option from a mutually exclusive group
            </p>
          </div>
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="border-border bg-card flex h-32 cursor-default items-center justify-center rounded-lg border">
                <p className="text-muted-foreground text-sm">
                  Right-click for sort options
                </p>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuGroup>
                <ContextMenuLabel>Sort By</ContextMenuLabel>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                <ContextMenuRadioItem value="name">Name</ContextMenuRadioItem>
                <ContextMenuRadioItem value="date">Date</ContextMenuRadioItem>
                <ContextMenuRadioItem value="size">Size</ContextMenuRadioItem>
                <ContextMenuRadioItem value="type">Type</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* Nested Submenus */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Nested Submenus</h3>
            <p className="text-muted-foreground text-sm">
              Create hierarchical menu structures with submenus
            </p>
          </div>
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="border-border bg-card flex h-32 cursor-default items-center justify-center rounded-lg border">
                <p className="text-muted-foreground text-sm">
                  Right-click for nested menu
                </p>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuItem>
                <EditIcon />
                Edit
              </ContextMenuItem>
              <ContextMenuItem>
                <CopyIcon />
                Duplicate
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <ShareIcon />
                  Share
                </ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>
                    <MailIcon />
                    Email
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <CopyIcon />
                    Copy Link
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <DownloadIcon />
                    Download
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <StarIcon />
                  Add to
                </ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>
                    <StarIcon />
                    Favorites
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <PinIcon />
                    Pinned
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <BookmarkIcon />
                    Bookmarks
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* Grouped Items */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Grouped Items</h3>
            <p className="text-muted-foreground text-sm">
              Organize menu items into logical groups with labels
            </p>
          </div>
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="border-border bg-card flex h-32 cursor-default items-center justify-center rounded-lg border">
                <p className="text-muted-foreground text-sm">
                  Right-click for organized menu
                </p>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuGroup>
                <ContextMenuLabel>File Actions</ContextMenuLabel>
                <ContextMenuItem>
                  <EditIcon />
                  Edit
                </ContextMenuItem>
                <ContextMenuItem>
                  <CopyIcon />
                  Duplicate
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuLabel>Organization</ContextMenuLabel>
                <ContextMenuItem>
                  <StarIcon />
                  Add to Favorites
                </ContextMenuItem>
                <ContextMenuItem>
                  <PinIcon />
                  Pin
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* Inset Items */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Inset Items</h3>
            <p className="text-muted-foreground text-sm">
              Align items with extra padding when mixing with icon items
            </p>
          </div>
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="border-border bg-card flex h-32 cursor-default items-center justify-center rounded-lg border">
                <p className="text-muted-foreground text-sm">
                  Right-click for mixed alignment
                </p>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuGroup>
                <ContextMenuLabel>Navigation</ContextMenuLabel>
                <ContextMenuItem>
                  <UserIcon />
                  Profile
                </ContextMenuItem>
                <ContextMenuItem inset>Account Settings</ContextMenuItem>
                <ContextMenuItem inset>Privacy Settings</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuLabel inset>Preferences</ContextMenuLabel>
                <ContextMenuItem inset>General</ContextMenuItem>
                <ContextMenuItem inset>Appearance</ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        {/* Complex Example */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Complex Context Menu</h3>
            <p className="text-muted-foreground text-sm">
              Combination of all features: groups, submenus, checkboxes, radio
              groups, and shortcuts
            </p>
          </div>
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="border-border bg-card flex h-32 cursor-default items-center justify-center rounded-lg border">
                <p className="text-muted-foreground text-sm">
                  Right-click for full menu
                </p>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuGroup>
                <ContextMenuLabel>Cast Actions</ContextMenuLabel>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem>
                  <CopyIcon />
                  Copy Link
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <UserIcon />
                  View Profile
                </ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuCheckboxItem checked>
                  <BookmarkIcon />
                  Bookmarked
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>
                  <EyeOffIcon />
                  Hide from Feed
                </ContextMenuCheckboxItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <ShareIcon />
                  Share
                </ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>
                    <MailIcon />
                    Email
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <CopyIcon />
                    Copy Link
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <DownloadIcon />
                    Download as Image
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <FlagIcon />
                Report Cast
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </section>
      </div>
    );
  },
};

/**
 * Frosted effect demonstration - ContextMenus use a translucent background (75% opacity)
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
        <ContextMenu>
          <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed border-white/50 text-white">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuLabel>Frosted Menu</ContextMenuLabel>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <EditIcon />
              Edit
            </ContextMenuItem>
            <ContextMenuItem>
              <CopyIcon />
              Copy
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </div>
  ),
};

/**
 * Interactive playground for testing context menu props and behavior.
 */
export const Interactive: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger>
        <div className="border-border bg-card flex size-64 cursor-default items-center justify-center rounded-lg border">
          <p className="text-muted-foreground text-sm">Right-click here</p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuLabel>Actions</ContextMenuLabel>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <EditIcon />
          Edit
          <ContextMenuShortcut>⌘E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <CopyIcon />
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ShareIcon />
          Share
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <TrashIcon />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  args: {
    defaultOpen: false,
  },
};
