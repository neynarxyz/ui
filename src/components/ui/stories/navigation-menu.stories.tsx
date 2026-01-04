import type { Meta, StoryObj } from "@storybook/react";
import {
  HomeIcon,
  BookOpenIcon,
  CodeIcon,
  PackageIcon,
  UsersIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  HelpCircleIcon,
  FileTextIcon,
  GithubIcon,
  TwitterIcon,
  MessageCircleIcon,
  RocketIcon,
  ZapIcon,
  ShieldIcon,
  ActivityIcon,
  BarChartIcon,
  BellIcon,
  CastIcon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../navigation-menu";

/**
 * NavigationMenu stories for design system documentation.
 *
 * Demonstrates horizontal navigation with mega menus, content panels,
 * link items, and nested navigation structures typical of main site
 * navigation and dashboard header navigation.
 */
const meta: Meta<typeof NavigationMenu> = {
  title: "Components/Navigation & Menus/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A horizontal navigation menu component built on Base UI NavigationMenu primitives. Supports mega menus with rich content panels, keyboard navigation, and smooth transitions. Perfect for main site navigation and dashboard headers.",
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: "text",
      description: "Default active item value (uncontrolled)",
    },
    value: {
      control: "text",
      description: "Controlled active item value",
    },
    onValueChange: {
      description: "Callback when active item changes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Realistic Neynar Dashboard scenario showing main navigation with mega menus
 * for products, resources, and community sections.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function ProductCard({
      icon: Icon,
      title,
      description,
    }: {
      icon: React.ComponentType<{ className?: string }>;
      title: string;
      description: string;
    }) {
      return (
        <NavigationMenuLink href="#" className="block rounded-md">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 text-primary rounded-md p-2">
              <Icon className="size-5" />
            </div>
            <div className="flex-1">
              <div className="font-medium">{title}</div>
              <div className="text-muted-foreground text-xs">{description}</div>
            </div>
          </div>
        </NavigationMenuLink>
      );
    }

    function ResourceLink({
      icon: Icon,
      title,
    }: {
      icon: React.ComponentType<{ className?: string }>;
      title: string;
    }) {
      return (
        <NavigationMenuLink href="#" className="block rounded-md">
          <div className="flex items-center gap-2">
            <Icon className="size-4" />
            <span>{title}</span>
          </div>
        </NavigationMenuLink>
      );
    }

    return (
      <div className="w-full space-y-12">
        {/* Main Site Navigation */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Main Site Navigation</h3>
            <p className="text-muted-foreground text-sm">
              Primary navigation with mega menus for product showcases and
              resource directories
            </p>
          </div>
          <div className="border-border flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary flex size-8 items-center justify-center rounded">
                <CastIcon className="text-primary-foreground size-5" />
              </div>
              <span className="font-semibold">Neynar</span>
            </div>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem value="products">
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4">
                      <div className="mb-4">
                        <h4 className="font-semibold">
                          Farcaster Development Platform
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Everything you need to build on Farcaster
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <ProductCard
                          icon={CodeIcon}
                          title="Farcaster API"
                          description="REST APIs for casts, users, and feeds"
                        />
                        <ProductCard
                          icon={ZapIcon}
                          title="Webhooks"
                          description="Real-time notifications for Farcaster events"
                        />
                        <ProductCard
                          icon={RocketIcon}
                          title="Mini Apps"
                          description="Build interactive Farcaster applications"
                        />
                        <ProductCard
                          icon={ShieldIcon}
                          title="Auth Kit"
                          description="Sign in with Farcaster authentication"
                        />
                        <ProductCard
                          icon={ActivityIcon}
                          title="Analytics"
                          description="Insights into Farcaster network activity"
                        />
                        <ProductCard
                          icon={BarChartIcon}
                          title="Hub Services"
                          description="Managed Farcaster hub infrastructure"
                        />
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem value="resources">
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] grid-cols-2 gap-4 p-4">
                      <div className="space-y-3">
                        <h4 className="text-muted-foreground text-xs font-semibold uppercase">
                          Learn
                        </h4>
                        <div className="space-y-2">
                          <ResourceLink
                            icon={BookOpenIcon}
                            title="Documentation"
                          />
                          <ResourceLink icon={CodeIcon} title="API Reference" />
                          <ResourceLink icon={FileTextIcon} title="Guides" />
                          <ResourceLink icon={RocketIcon} title="Quick Start" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-muted-foreground text-xs font-semibold uppercase">
                          Connect
                        </h4>
                        <div className="space-y-2">
                          <ResourceLink
                            icon={MessageCircleIcon}
                            title="Discord"
                          />
                          <ResourceLink icon={GithubIcon} title="GitHub" />
                          <ResourceLink icon={TwitterIcon} title="Twitter" />
                          <ResourceLink icon={HelpCircleIcon} title="Support" />
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem value="pricing">
                  <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem value="docs">
                  <NavigationMenuLink href="#">Docs</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">Sign in</span>
            </div>
          </div>
        </section>

        {/* Dashboard Navigation */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Dashboard Navigation</h3>
            <p className="text-muted-foreground text-sm">
              Application navigation with organized feature areas
            </p>
          </div>
          <div className="border-border rounded-lg border">
            <div className="border-b p-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem value="home">
                    <NavigationMenuLink
                      href="#"
                      className="flex items-center gap-2"
                    >
                      <HomeIcon className="size-4" />
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem value="apps">
                    <NavigationMenuTrigger>
                      <LayoutDashboardIcon className="mr-2 size-4" />
                      Apps
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[280px] p-4">
                        <div className="space-y-2">
                          <NavigationMenuLink
                            href="#"
                            className="block rounded-md"
                          >
                            <div className="flex items-center gap-2">
                              <RocketIcon className="size-4" />
                              <div>
                                <div className="font-medium">My Apps</div>
                                <div className="text-muted-foreground text-xs">
                                  View all applications
                                </div>
                              </div>
                            </div>
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            href="#"
                            className="block rounded-md"
                          >
                            <div className="flex items-center gap-2">
                              <PackageIcon className="size-4" />
                              <div>
                                <div className="font-medium">Templates</div>
                                <div className="text-muted-foreground text-xs">
                                  Start from a template
                                </div>
                              </div>
                            </div>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem value="analytics">
                    <NavigationMenuLink
                      href="#"
                      className="flex items-center gap-2"
                    >
                      <BarChartIcon className="size-4" />
                      Analytics
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem value="api">
                    <NavigationMenuTrigger>
                      <CodeIcon className="mr-2 size-4" />
                      API
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[300px] space-y-3 p-4">
                        <div>
                          <h4 className="mb-2 font-semibold">API Management</h4>
                          <div className="space-y-2">
                            <NavigationMenuLink
                              href="#"
                              className="block rounded-md"
                            >
                              <div className="flex items-center gap-2">
                                <CodeIcon className="size-4" />
                                API Keys
                              </div>
                            </NavigationMenuLink>
                            <NavigationMenuLink
                              href="#"
                              className="block rounded-md"
                            >
                              <div className="flex items-center gap-2">
                                <BellIcon className="size-4" />
                                Webhooks
                              </div>
                            </NavigationMenuLink>
                            <NavigationMenuLink
                              href="#"
                              className="block rounded-md"
                            >
                              <div className="flex items-center gap-2">
                                <FileTextIcon className="size-4" />
                                Usage & Logs
                              </div>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem value="settings">
                    <NavigationMenuLink
                      href="#"
                      className="flex items-center gap-2"
                    >
                      <SettingsIcon className="size-4" />
                      Settings
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="p-6">
              <div className="text-muted-foreground text-center text-sm">
                Dashboard content area
              </div>
            </div>
          </div>
        </section>

        {/* Compact Navigation */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Compact Text Navigation</h3>
            <p className="text-muted-foreground text-sm">
              Minimal navigation without icons for secondary nav areas
            </p>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem value="overview">
                <NavigationMenuLink href="#">Overview</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem value="features">
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[240px] space-y-2 p-4">
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Authentication
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Real-time Data
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Analytics
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Webhooks
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem value="community">
                <NavigationMenuLink href="#">Community</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem value="changelog">
                <NavigationMenuLink href="#">Changelog</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>
      </div>
    );
  },
};

/**
 * Complete design system reference showing all navigation menu patterns,
 * content layouts, and composition structures.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    return (
      <div className="w-full max-w-4xl space-y-10">
        {/* Basic Link Navigation */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Basic Link Navigation</h3>
            <p className="text-muted-foreground text-sm">
              Simple horizontal navigation with link items only
            </p>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem value="home">
                <NavigationMenuLink href="#">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem value="about">
                <NavigationMenuLink href="#">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem value="services">
                <NavigationMenuLink href="#">Services</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem value="contact">
                <NavigationMenuLink href="#">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        {/* With Icons */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">With Icons</h3>
            <p className="text-muted-foreground text-sm">
              Navigation items with leading icons for visual distinction
            </p>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem value="home">
                <NavigationMenuLink
                  href="#"
                  className="flex items-center gap-2"
                >
                  <HomeIcon className="size-4" />
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem value="users">
                <NavigationMenuLink
                  href="#"
                  className="flex items-center gap-2"
                >
                  <UsersIcon className="size-4" />
                  Team
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem value="settings">
                <NavigationMenuLink
                  href="#"
                  className="flex items-center gap-2"
                >
                  <SettingsIcon className="size-4" />
                  Settings
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        {/* Trigger Items */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Trigger Items</h3>
            <p className="text-muted-foreground text-sm">
              Navigation items that open content panels with chevron indicators
            </p>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem value="products">
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-4">
                    <div className="text-sm">Products content panel</div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem value="solutions">
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-4">
                    <div className="text-sm">Solutions content panel</div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        {/* Content Panel Layouts */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Content Panel Layouts</h3>
            <p className="text-muted-foreground text-sm">
              Different content layouts for mega menu panels
            </p>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem value="single-column">
                <NavigationMenuTrigger>Single Column</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[240px] space-y-2 p-4">
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Item One
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Item Two
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Item Three
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem value="two-column">
                <NavigationMenuTrigger>Two Columns</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] grid-cols-2 gap-3 p-4">
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Column 1 Item
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Column 2 Item
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Column 1 Item
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Column 2 Item
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem value="three-column">
                <NavigationMenuTrigger>Three Columns</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-3 gap-3 p-4">
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Col 1
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Col 2
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Col 3
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Col 1
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Col 2
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Col 3
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        {/* Rich Content Panels */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Rich Content Panels</h3>
            <p className="text-muted-foreground text-sm">
              Panels with headings, descriptions, and visual elements
            </p>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem value="rich-content">
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4">
                    <div className="mb-3">
                      <h4 className="font-semibold">Platform Features</h4>
                      <p className="text-muted-foreground text-sm">
                        Powerful tools for building on Farcaster
                      </p>
                    </div>
                    <div className="space-y-3">
                      <NavigationMenuLink href="#" className="block rounded-md">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 text-primary rounded-md p-2">
                            <ZapIcon className="size-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">Real-time Updates</div>
                            <div className="text-muted-foreground text-xs">
                              Get instant notifications via webhooks
                            </div>
                          </div>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#" className="block rounded-md">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 text-primary rounded-md p-2">
                            <ShieldIcon className="size-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">Secure Auth</div>
                            <div className="text-muted-foreground text-xs">
                              Sign in with Farcaster authentication
                            </div>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        {/* Mixed Links and Triggers */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Mixed Links and Triggers</h3>
            <p className="text-muted-foreground text-sm">
              Combining direct links with dropdown panels in one navigation
            </p>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem value="home">
                <NavigationMenuLink href="#">Home</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem value="products">
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[280px] space-y-2 p-4">
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Product A
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Product B
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Product C
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem value="pricing">
                <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem value="resources">
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[280px] space-y-2 p-4">
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Documentation
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      API Reference
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      Support
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem value="blog">
                <NavigationMenuLink href="#">Blog</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        {/* Active States */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Active States</h3>
            <p className="text-muted-foreground text-sm">
              Navigation items show active state when current
            </p>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem value="dashboard">
                <NavigationMenuLink href="#" data-active="true">
                  Dashboard
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem value="analytics">
                <NavigationMenuLink href="#">Analytics</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem value="reports">
                <NavigationMenuLink href="#">Reports</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        {/* Grouped Content */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Grouped Content Panels</h3>
            <p className="text-muted-foreground text-sm">
              Organize panel content into labeled sections
            </p>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem value="resources">
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] grid-cols-2 gap-4 p-4">
                    <div className="space-y-3">
                      <h4 className="text-muted-foreground text-xs font-semibold uppercase">
                        Documentation
                      </h4>
                      <div className="space-y-2">
                        <NavigationMenuLink
                          href="#"
                          className="block rounded-md"
                        >
                          Getting Started
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          href="#"
                          className="block rounded-md"
                        >
                          API Reference
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          href="#"
                          className="block rounded-md"
                        >
                          Guides
                        </NavigationMenuLink>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-muted-foreground text-xs font-semibold uppercase">
                        Community
                      </h4>
                      <div className="space-y-2">
                        <NavigationMenuLink
                          href="#"
                          className="block rounded-md"
                        >
                          Discord
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          href="#"
                          className="block rounded-md"
                        >
                          GitHub
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          href="#"
                          className="block rounded-md"
                        >
                          Twitter
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>
      </div>
    );
  },
};

/**
 * Frosted effect demonstration - NavigationMenu popups use a translucent background (75% opacity)
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
        <div className="bg-background rounded-lg border p-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem value="products">
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] space-y-3 p-4">
                    <NavigationMenuLink href="#" className="block rounded-md">
                      <div className="font-medium">Farcaster API</div>
                      <div className="text-muted-foreground text-sm">
                        REST APIs for casts, users, and feeds
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      <div className="font-medium">Webhooks</div>
                      <div className="text-muted-foreground text-sm">
                        Real-time notifications for events
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#" className="block rounded-md">
                      <div className="font-medium">Mini Apps</div>
                      <div className="text-muted-foreground text-sm">
                        Build interactive applications
                      </div>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem value="docs">
                <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem value="pricing">
                <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  ),
};

/**
 * Interactive playground for testing navigation menu props and behavior.
 */
export const Interactive: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem value="getting-started">
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] space-y-3 p-4">
              <NavigationMenuLink href="#" className="block rounded-md">
                <div className="font-medium">Introduction</div>
                <div className="text-muted-foreground text-sm">
                  Learn about Neynar platform
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block rounded-md">
                <div className="font-medium">Quick Start</div>
                <div className="text-muted-foreground text-sm">
                  Build your first app in 5 minutes
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block rounded-md">
                <div className="font-medium">Installation</div>
                <div className="text-muted-foreground text-sm">
                  Set up your development environment
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="components">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] grid-cols-3 gap-3 p-4">
              <NavigationMenuLink href="#" className="block rounded-md">
                <div className="font-medium">Button</div>
                <div className="text-muted-foreground text-xs">
                  Clickable actions
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block rounded-md">
                <div className="font-medium">Input</div>
                <div className="text-muted-foreground text-xs">Text fields</div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block rounded-md">
                <div className="font-medium">Card</div>
                <div className="text-muted-foreground text-xs">
                  Content containers
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block rounded-md">
                <div className="font-medium">Dialog</div>
                <div className="text-muted-foreground text-xs">
                  Modal windows
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block rounded-md">
                <div className="font-medium">Dropdown</div>
                <div className="text-muted-foreground text-xs">
                  Action menus
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#" className="block rounded-md">
                <div className="font-medium">Tabs</div>
                <div className="text-muted-foreground text-xs">
                  Tabbed interfaces
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="docs">
          <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  args: {
    defaultValue: undefined,
  },
};
