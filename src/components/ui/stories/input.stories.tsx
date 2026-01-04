import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  CalendarIcon,
  FilterIcon,
  Loader2Icon,
  SearchIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../button";
import { Input } from "../input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "../input-group";
import { Label } from "../label";

const meta: Meta<typeof Input> = {
  title: "Components/Core Inputs/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
  argTypes: {
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "time",
        "datetime-local",
      ],
      description: "HTML input type",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    readOnly: {
      control: "boolean",
      description: "Read-only state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * Cast Search & Filtering - A realistic scenario showing inputs in context
 * of searching and filtering casts in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function CastSearchPanel() {
      const [searchQuery, setSearchQuery] = useState("");
      const [isSearching, setIsSearching] = useState(false);
      const [username, setUsername] = useState("");
      const [startDate, setStartDate] = useState("");
      const [endDate, setEndDate] = useState("");
      const [minEngagement, setMinEngagement] = useState("");
      const [emailError, setEmailError] = useState(false);
      const [notificationEmail, setNotificationEmail] = useState("");

      const handleSearch = () => {
        if (searchQuery.trim()) {
          setIsSearching(true);
          setTimeout(() => setIsSearching(false), 1500);
        }
      };

      const handleClearSearch = () => {
        setSearchQuery("");
      };

      const handleEmailBlur = () => {
        if (notificationEmail && !notificationEmail.includes("@")) {
          setEmailError(true);
        } else {
          setEmailError(false);
        }
      };

      return (
        <div className="w-full max-w-2xl space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-lg font-semibold">Cast Explorer</h2>
            <p className="text-muted-foreground text-sm">
              Search and filter casts from the Farcaster network.
            </p>
          </div>

          {/* Main Search */}
          <div className="space-y-2">
            <Label htmlFor="cast-search">Search Casts</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                {isSearching ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  <SearchIcon />
                )}
              </InputGroupAddon>
              <InputGroupInput
                id="cast-search"
                placeholder="Search by content, hash, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              {searchQuery && (
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    size="icon-xs"
                    aria-label="Clear search"
                    onClick={handleClearSearch}
                  >
                    <XIcon />
                  </InputGroupButton>
                </InputGroupAddon>
              )}
            </InputGroup>
          </div>

          {/* Filters */}
          <div className="border-border bg-card rounded-lg border p-4">
            <div className="mb-4 flex items-center gap-2">
              <FilterIcon className="size-4" />
              <h3 className="font-medium">Filters</h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Author Filter */}
              <div className="space-y-2">
                <Label htmlFor="author-filter">Author Username</Label>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <UserIcon />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="author-filter"
                    placeholder="e.g., dwr.eth"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </InputGroup>
              </div>

              {/* Engagement Filter */}
              <div className="space-y-2">
                <Label htmlFor="engagement-filter">Min Engagement</Label>
                <Input
                  id="engagement-filter"
                  type="number"
                  placeholder="e.g., 100"
                  value={minEngagement}
                  onChange={(e) => setMinEngagement(e.target.value)}
                  min="0"
                />
              </div>

              {/* Date Range */}
              <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <CalendarIcon />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="start-date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </InputGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <CalendarIcon />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="end-date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </InputGroup>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="border-border bg-card rounded-lg border p-4">
            <h3 className="mb-4 font-medium">Notification Settings</h3>
            <div className="space-y-2">
              <Label htmlFor="notification-email">Email Alerts</Label>
              <Input
                id="notification-email"
                type="email"
                placeholder="your@email.com"
                value={notificationEmail}
                onChange={(e) => setNotificationEmail(e.target.value)}
                onBlur={handleEmailBlur}
                aria-invalid={emailError}
              />
              {emailError && (
                <p className="text-destructive text-sm">
                  Please enter a valid email address
                </p>
              )}
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex justify-end gap-2 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setUsername("");
                setStartDate("");
                setEndDate("");
                setMinEngagement("");
                setNotificationEmail("");
                setEmailError(false);
              }}
            >
              Reset Filters
            </Button>
            <Button onClick={handleSearch}>
              <SearchIcon data-icon="inline-start" />
              Search
            </Button>
          </div>
        </div>
      );
    }

    return <CastSearchPanel />;
  },
};

/**
 * Complete design system reference showing all input types, states, and patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Input Types */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Input Types</h3>
          <p className="text-muted-foreground text-sm">
            Different HTML input types for various data formats.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Text</Label>
            <Input type="text" placeholder="Enter text" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="your@email.com" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label>Number</Label>
            <Input type="number" placeholder="123" />
          </div>
          <div className="space-y-2">
            <Label>Tel</Label>
            <Input type="tel" placeholder="+1 (555) 123-4567" />
          </div>
          <div className="space-y-2">
            <Label>URL</Label>
            <Input type="url" placeholder="https://example.com" />
          </div>
          <div className="space-y-2">
            <Label>Search</Label>
            <Input type="search" placeholder="Search..." />
          </div>
          <div className="space-y-2">
            <Label>Date</Label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <Label>Time</Label>
            <Input type="time" />
          </div>
          <div className="space-y-2">
            <Label>Datetime Local</Label>
            <Input type="datetime-local" />
          </div>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">States</h3>
          <p className="text-muted-foreground text-sm">
            Different input states for user interaction and validation.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Default</Label>
            <Input placeholder="Default state" />
          </div>
          <div className="space-y-2">
            <Label>With Value</Label>
            <Input defaultValue="Filled input" />
          </div>
          <div className="space-y-2">
            <Label>Disabled</Label>
            <Input placeholder="Disabled input" disabled />
          </div>
          <div className="space-y-2">
            <Label>Read Only</Label>
            <Input defaultValue="Read only value" readOnly />
          </div>
          <div className="space-y-2">
            <Label>Invalid</Label>
            <Input placeholder="Invalid input" aria-invalid="true" />
            <p className="text-destructive text-sm">This field is required</p>
          </div>
          <div className="space-y-2">
            <Label>With Helper Text</Label>
            <Input placeholder="Enter your name" />
            <p className="text-muted-foreground text-sm">
              Your full legal name
            </p>
          </div>
        </div>
      </section>

      {/* With Icons (using InputGroup) */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Icons & Addons</h3>
          <p className="text-muted-foreground text-sm">
            Inputs enhanced with icons, buttons, and text addons.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label>Search with Icon</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search..." />
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>With Clear Button</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search casts..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Clear">
                  <XIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>URL Input with Prefix</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="example.com" />
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Price Input with Suffix</Label>
            <InputGroup>
              <InputGroupInput type="number" placeholder="0.00" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>USD</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Username with Prefix & Suffix</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="username" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>.eth</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="space-y-2">
            <Label>Date Picker</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <CalendarIcon />
              </InputGroupAddon>
              <InputGroupInput type="date" />
            </InputGroup>
          </div>
        </div>
      </section>

      {/* File Input */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">File Input</h3>
          <p className="text-muted-foreground text-sm">
            File upload input with custom styling.
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="file-upload">Upload File</Label>
          <Input id="file-upload" type="file" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="file-upload-multiple">Upload Multiple Files</Label>
          <Input
            id="file-upload-multiple"
            type="file"
            multiple
            accept="image/*"
          />
        </div>
      </section>

      {/* Sizes Comparison */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Size Reference</h3>
          <p className="text-muted-foreground text-sm">
            Input height is h-9 (36px) by default to match other form controls.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Input placeholder="Default size (h-9)" />
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput placeholder="With icon (h-9)" />
          </InputGroup>
        </div>
      </section>

      {/* Form Layout Example */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Form Layout</h3>
          <p className="text-muted-foreground text-sm">
            Common form layout patterns with labels and helper text.
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              required
            />
            <p className="text-muted-foreground text-sm">
              We'll never share your email with anyone else.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput id="username" placeholder="username" />
            </InputGroup>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
        </form>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing input props.
 */
export const Interactive: Story = {
  args: {
    placeholder: "Enter text...",
    type: "text",
    disabled: false,
  },
};
