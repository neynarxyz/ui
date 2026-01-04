import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { HashIcon, SearchIcon, UserIcon, UsersIcon } from "lucide-react";
import { useState } from "react";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  useComboboxAnchor,
} from "../combobox";

const meta: Meta<typeof Combobox> = {
  title: "Components/Core Inputs/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
  args: {
    onValueChange: fn(),
    onOpenChange: fn(),
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    multiple: {
      control: "boolean",
      description: "Allow multiple selections",
    },
    open: {
      control: "boolean",
      description: "Controlled open state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

/**
 * Farcaster Channel & FID Search - A realistic scenario showing combobox usage
 * for searching and selecting channels and FIDs in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function ChannelSearch() {
      const channels = [
        {
          id: "1",
          name: "base",
          description: "Base ecosystem discussions",
          subscribers: 45230,
        },
        {
          id: "2",
          name: "farcaster",
          description: "Official Farcaster channel",
          subscribers: 89450,
        },
        {
          id: "3",
          name: "builders",
          description: "For app builders and developers",
          subscribers: 12890,
        },
        {
          id: "4",
          name: "crypto",
          description: "Cryptocurrency discussions",
          subscribers: 34560,
        },
        {
          id: "5",
          name: "design",
          description: "Design and UX discussions",
          subscribers: 8920,
        },
        {
          id: "6",
          name: "warpcast",
          description: "Warpcast app updates",
          subscribers: 67340,
        },
      ];

      const [selectedChannel, setSelectedChannel] = useState<string | null>(
        null,
      );

      return (
        <div className="w-full max-w-md">
          <div className="mb-3">
            <label className="text-sm font-medium">Select Channel</label>
            <p className="text-muted-foreground text-xs">
              Choose a Farcaster channel to view analytics
            </p>
          </div>
          <Combobox
            value={selectedChannel}
            onValueChange={(value) => setSelectedChannel(value as string)}
          >
            <ComboboxInput placeholder="Search channels..." showClear />
            <ComboboxContent>
              <ComboboxList>
                <ComboboxEmpty>No channels found</ComboboxEmpty>
                {channels.map((channel) => (
                  <ComboboxItem key={channel.id} value={channel.id}>
                    <div className="flex items-center gap-2">
                      <HashIcon className="text-muted-foreground size-4" />
                      <div className="flex-1">
                        <div className="font-medium">/{channel.name}</div>
                        <div className="text-muted-foreground text-xs">
                          {channel.subscribers.toLocaleString()} subscribers
                        </div>
                      </div>
                    </div>
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      );
    }

    function FIDSearch() {
      const users = [
        {
          fid: 3,
          username: "dwr.eth",
          displayName: "Dan Romero",
          isVerified: true,
        },
        {
          fid: 2,
          username: "v",
          displayName: "Varun Srinivasan",
          isVerified: true,
        },
        {
          fid: 1234,
          username: "jessepollak",
          displayName: "Jesse Pollak",
          isVerified: true,
        },
        { fid: 5678, username: "ted", displayName: "Ted", isVerified: false },
        {
          fid: 9012,
          username: "pfista",
          displayName: "Paul Fist",
          isVerified: false,
        },
      ];

      const [selectedFIDs, setSelectedFIDs] = useState<string[]>([]);
      const anchorRef = useComboboxAnchor();

      return (
        <div className="w-full max-w-md">
          <div className="mb-3">
            <label className="text-sm font-medium">Select Users (FIDs)</label>
            <p className="text-muted-foreground text-xs">
              Search and select multiple Farcaster users
            </p>
          </div>
          <Combobox
            multiple
            value={selectedFIDs}
            onValueChange={(value) => setSelectedFIDs(value as string[])}
          >
            <ComboboxChips ref={anchorRef}>
              {selectedFIDs.map((item) => {
                const user = users.find((u) => u.fid.toString() === item);
                return (
                  <ComboboxChip key={item}>
                    <UserIcon className="size-3" />
                    {user?.username || item}
                  </ComboboxChip>
                );
              })}
              <ComboboxChipsInput placeholder="Search users by FID or username..." />
            </ComboboxChips>
            <ComboboxContent anchor={anchorRef}>
              <ComboboxList>
                <ComboboxEmpty>No users found</ComboboxEmpty>
                <ComboboxGroup>
                  <ComboboxLabel>Verified Users</ComboboxLabel>
                  {users
                    .filter((u) => u.isVerified)
                    .map((user) => (
                      <ComboboxItem key={user.fid} value={user.fid.toString()}>
                        <div className="flex items-center gap-2">
                          <UserIcon className="text-muted-foreground size-4" />
                          <div className="flex-1">
                            <div className="flex items-center gap-1">
                              <span className="font-medium">
                                @{user.username}
                              </span>
                              <span className="text-primary text-xs">✓</span>
                            </div>
                            <div className="text-muted-foreground text-xs">
                              FID: {user.fid}
                            </div>
                          </div>
                        </div>
                      </ComboboxItem>
                    ))}
                </ComboboxGroup>
                <ComboboxSeparator />
                <ComboboxGroup>
                  <ComboboxLabel>Other Users</ComboboxLabel>
                  {users
                    .filter((u) => !u.isVerified)
                    .map((user) => (
                      <ComboboxItem key={user.fid} value={user.fid.toString()}>
                        <div className="flex items-center gap-2">
                          <UserIcon className="text-muted-foreground size-4" />
                          <div className="flex-1">
                            <div className="font-medium">@{user.username}</div>
                            <div className="text-muted-foreground text-xs">
                              FID: {user.fid}
                            </div>
                          </div>
                        </div>
                      </ComboboxItem>
                    ))}
                </ComboboxGroup>
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      );
    }

    function DashboardFilters() {
      const [timeRange, setTimeRange] = useState<string | null>("7d");
      const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
      const anchorRef = useComboboxAnchor();

      const timeRanges = [
        { value: "24h", label: "Last 24 hours" },
        { value: "7d", label: "Last 7 days" },
        { value: "30d", label: "Last 30 days" },
        { value: "90d", label: "Last 90 days" },
      ];

      const channels = [
        "farcaster",
        "base",
        "builders",
        "crypto",
        "design",
        "warpcast",
      ];

      return (
        <div className="w-full max-w-2xl space-y-6">
          <div>
            <h2 className="text-lg font-semibold">Analytics Dashboard</h2>
            <p className="text-muted-foreground text-sm">
              Filter your Farcaster analytics by time range and channels
            </p>
          </div>

          <div className="border-border bg-card rounded-lg border p-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Time Range</label>
                <Combobox
                  value={timeRange}
                  onValueChange={(value) => setTimeRange(value as string)}
                >
                  <ComboboxInput placeholder="Select time range..." showClear />
                  <ComboboxContent>
                    <ComboboxList>
                      {timeRanges.map((range) => (
                        <ComboboxItem key={range.value} value={range.value}>
                          {range.label}
                        </ComboboxItem>
                      ))}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Channels</label>
                <Combobox
                  multiple
                  value={selectedChannels}
                  onValueChange={(value) =>
                    setSelectedChannels(value as string[])
                  }
                >
                  <ComboboxChips ref={anchorRef}>
                    {selectedChannels.map((item) => (
                      <ComboboxChip key={item}>
                        <HashIcon className="size-3" />
                        {item}
                      </ComboboxChip>
                    ))}
                    <ComboboxChipsInput placeholder="Select channels..." />
                  </ComboboxChips>
                  <ComboboxContent anchor={anchorRef}>
                    <ComboboxList>
                      <ComboboxEmpty>No channels found</ComboboxEmpty>
                      {channels.map((channel) => (
                        <ComboboxItem key={channel} value={channel}>
                          <HashIcon className="text-muted-foreground size-4" />/
                          {channel}
                        </ComboboxItem>
                      ))}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <div className="text-muted-foreground text-sm">
                {selectedChannels.length > 0
                  ? `${selectedChannels.length} channel${selectedChannels.length > 1 ? "s" : ""} selected`
                  : "All channels"}
              </div>
              <div className="flex gap-2">
                <button
                  className="text-muted-foreground hover:text-foreground text-sm"
                  onClick={() => {
                    setTimeRange("7d");
                    setSelectedChannels([]);
                  }}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-12">
        <ChannelSearch />
        <FIDSearch />
        <DashboardFilters />
      </div>
    );
  },
};

/**
 * Complete design system reference showing all combobox variants and use cases.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function SingleSelect() {
      const [value, setValue] = useState<string | null>(null);

      const frameworks = [
        { value: "next", label: "Next.js" },
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
        { value: "svelte", label: "Svelte" },
        { value: "angular", label: "Angular" },
      ];

      return (
        <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
          <ComboboxInput placeholder="Select framework..." showClear />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No framework found</ComboboxEmpty>
              {frameworks.map((framework) => (
                <ComboboxItem key={framework.value} value={framework.value}>
                  {framework.label}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      );
    }

    function MultiSelect() {
      const [values, setValues] = useState<string[]>([]);
      const anchorRef = useComboboxAnchor();

      const tags = [
        "react",
        "typescript",
        "tailwind",
        "nextjs",
        "vite",
        "storybook",
      ];

      return (
        <Combobox
          multiple
          value={values}
          onValueChange={(v) => setValues(v as string[])}
        >
          <ComboboxChips ref={anchorRef}>
            {values.map((item) => (
              <ComboboxChip key={item}>{item}</ComboboxChip>
            ))}
            <ComboboxChipsInput placeholder="Select tags..." />
          </ComboboxChips>
          <ComboboxContent anchor={anchorRef}>
            <ComboboxList>
              <ComboboxEmpty>No tags found</ComboboxEmpty>
              {tags.map((tag) => (
                <ComboboxItem key={tag} value={tag}>
                  {tag}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      );
    }

    function GroupedItems() {
      const [value, setValue] = useState<string | null>(null);

      const items = {
        fruits: ["apple", "banana", "cherry"],
        vegetables: ["carrot", "broccoli", "spinach"],
        grains: ["rice", "wheat", "oats"],
      };

      return (
        <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
          <ComboboxInput placeholder="Select food..." showClear />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No food found</ComboboxEmpty>
              <ComboboxGroup>
                <ComboboxLabel>Fruits</ComboboxLabel>
                {items.fruits.map((item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                ))}
              </ComboboxGroup>
              <ComboboxSeparator />
              <ComboboxGroup>
                <ComboboxLabel>Vegetables</ComboboxLabel>
                {items.vegetables.map((item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                ))}
              </ComboboxGroup>
              <ComboboxSeparator />
              <ComboboxGroup>
                <ComboboxLabel>Grains</ComboboxLabel>
                {items.grains.map((item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                ))}
              </ComboboxGroup>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      );
    }

    function WithIcons() {
      const [value, setValue] = useState<string | null>(null);

      const items = [
        { value: "user", label: "User", icon: UserIcon },
        { value: "users", label: "Users", icon: UsersIcon },
        { value: "search", label: "Search", icon: SearchIcon },
        { value: "hash", label: "Channel", icon: HashIcon },
      ];

      return (
        <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
          <ComboboxInput placeholder="Select option..." showClear />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No options found</ComboboxEmpty>
              {items.map((item) => (
                <ComboboxItem key={item.value} value={item.value}>
                  <item.icon className="text-muted-foreground size-4" />
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      );
    }

    function DisabledState() {
      return (
        <Combobox disabled>
          <ComboboxInput placeholder="Disabled combobox..." showClear />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxItem value="item1">Item 1</ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      );
    }

    function WithoutTrigger() {
      const [value, setValue] = useState<string | null>(null);

      const items = ["option1", "option2", "option3"];

      return (
        <Combobox value={value} onValueChange={(v) => setValue(v as string)}>
          <ComboboxInput
            placeholder="Type to search..."
            showTrigger={false}
            showClear
          />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results</ComboboxEmpty>
              {items.map((item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      );
    }

    return (
      <div className="w-full max-w-4xl space-y-10">
        {/* Single Selection */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Single Selection</h3>
            <p className="text-muted-foreground text-sm">
              Select a single item from a list with search functionality.
            </p>
          </div>
          <div className="w-72">
            <SingleSelect />
          </div>
        </section>

        {/* Multiple Selection */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Multiple Selection</h3>
            <p className="text-muted-foreground text-sm">
              Select multiple items shown as chips with remove buttons.
            </p>
          </div>
          <div className="w-96">
            <MultiSelect />
          </div>
        </section>

        {/* Grouped Items */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Grouped Items</h3>
            <p className="text-muted-foreground text-sm">
              Organize items into categories with labels and separators.
            </p>
          </div>
          <div className="w-72">
            <GroupedItems />
          </div>
        </section>

        {/* With Icons */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">With Icons</h3>
            <p className="text-muted-foreground text-sm">
              Add icons to items for better visual recognition.
            </p>
          </div>
          <div className="w-72">
            <WithIcons />
          </div>
        </section>

        {/* States */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">States</h3>
            <p className="text-muted-foreground text-sm">
              Different states and configurations.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Disabled</label>
              <DisabledState />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Without Trigger</label>
              <WithoutTrigger />
            </div>
          </div>
        </section>

        {/* Use Cases Reference */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Common Use Cases</h3>
            <p className="text-muted-foreground text-sm">
              Typical scenarios for combobox usage.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-muted-foreground border-b text-left text-sm">
                  <th className="pb-3 pr-4 font-medium">Type</th>
                  <th className="pb-3 pr-4 font-medium">Description</th>
                  <th className="pb-3 pr-4 font-medium">Example</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-mono text-sm">Single</td>
                  <td className="text-muted-foreground py-3 pr-4 text-sm">
                    Select one item from a searchable list
                  </td>
                  <td className="text-muted-foreground py-3 pr-4 text-sm">
                    Framework picker, country selector
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-mono text-sm">Multiple</td>
                  <td className="text-muted-foreground py-3 pr-4 text-sm">
                    Select multiple items with chip UI
                  </td>
                  <td className="text-muted-foreground py-3 pr-4 text-sm">
                    Tag picker, multi-user selector
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-mono text-sm">Grouped</td>
                  <td className="text-muted-foreground py-3 pr-4 text-sm">
                    Organize items into categories
                  </td>
                  <td className="text-muted-foreground py-3 pr-4 text-sm">
                    Command palette, categorized lists
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-mono text-sm">With Icons</td>
                  <td className="text-muted-foreground py-3 pr-4 text-sm">
                    Visual indicators for better UX
                  </td>
                  <td className="text-muted-foreground py-3 pr-4 text-sm">
                    Icon picker, entity selector
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  },
};

/**
 * Frosted effect demonstration - Comboboxes use a translucent background (75% opacity)
 * with backdrop blur (12px) creating a frosted glass effect.
 */
export const Frosted: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    const items = [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
      { value: "date", label: "Date" },
    ];

    return (
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
          <div className="bg-card rounded-lg border p-4">
            <div className="w-72">
              <Combobox>
                <ComboboxInput placeholder="Search fruits..." />
                <ComboboxContent>
                  <ComboboxList>
                    <ComboboxEmpty>No results found</ComboboxEmpty>
                    {items.map((item) => (
                      <ComboboxItem key={item.value} value={item.value}>
                        {item.label}
                      </ComboboxItem>
                    ))}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Interactive playground for testing combobox props.
 */
export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);

    const items = [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
      { value: "date", label: "Date" },
      { value: "elderberry", label: "Elderberry" },
    ];

    return (
      <div className="w-72">
        <Combobox
          {...args}
          value={value}
          onValueChange={(v) => {
            setValue(v as string);
            args.onValueChange?.(v);
          }}
        >
          <ComboboxInput placeholder="Select a fruit..." showClear />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No results found</ComboboxEmpty>
              {items.map((item) => (
                <ComboboxItem key={item.value} value={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
  args: {
    disabled: false,
  },
};
