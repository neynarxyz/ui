import type { Meta, StoryObj } from "@storybook/react";
import {
  BarChart3Icon,
  BookOpenIcon,
  ChevronDownIcon,
  CodeIcon,
  HomeIcon,
  KeyIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  SettingsIcon,
  UsersIcon,
  WebhookIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Badge } from "../badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "../sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Advanced & Specialized/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

/**
 * Neynar Developer Dashboard - A realistic sidebar showing the main navigation
 * for the Neynar developer portal with API tools, documentation, and settings.
 */
export const InContext: Story = {
  render: () => {
    const navItems = [
      { icon: HomeIcon, label: "Overview", active: true },
      { icon: KeyIcon, label: "API Keys", badge: "3" },
      { icon: WebhookIcon, label: "Webhooks" },
      { icon: BarChart3Icon, label: "Analytics" },
      { icon: UsersIcon, label: "Team" },
    ];

    const docsItems = [
      { label: "Getting Started", href: "#" },
      { label: "Authentication", href: "#" },
      { label: "REST API", href: "#" },
      { label: "Webhooks Guide", href: "#" },
    ];

    return (
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <SidebarMenuButton className="h-12">
                        <div className="bg-primary/10 flex size-8 items-center justify-center rounded-lg">
                          <LayoutDashboardIcon className="text-primary size-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold">Neynar</span>
                          <span className="text-muted-foreground text-xs">
                            Developer Portal
                          </span>
                        </div>
                        <ChevronDownIcon className="ml-auto size-4" />
                      </SidebarMenuButton>
                    }
                  />
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem>Switch Workspace</DropdownMenuItem>
                    <DropdownMenuItem>Create Workspace</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton isActive={item.active}>
                        <item.icon className="size-4" />
                        <span>{item.label}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="ml-auto">
                            {item.badge}
                          </Badge>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <Collapsible defaultOpen>
                <SidebarGroupLabel>
                  <CollapsibleTrigger className="flex w-full items-center">
                    <BookOpenIcon className="mr-2 size-4" />
                    Documentation
                    <ChevronDownIcon className="ml-auto size-4 transition-transform group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenuSub>
                      {docsItems.map((item) => (
                        <SidebarMenuSubItem key={item.label}>
                          <SidebarMenuSubButton href={item.href}>
                            {item.label}
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Developer</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <CodeIcon className="size-4" />
                      <span>API Playground</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <MessageSquareIcon className="size-4" />
                      <span>Support</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SettingsIcon className="size-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-12">
                  <Avatar className="size-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">John Developer</span>
                    <span className="text-muted-foreground text-xs">
                      john@example.com
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 items-center gap-4 border-b px-6">
            <SidebarTrigger />
            <h1 className="text-lg font-semibold">Dashboard Overview</h1>
          </header>
          <main className="p-6">
            <div className="text-muted-foreground">
              Main content area. Toggle the sidebar using the button or press
              ⌘B.
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    );
  },
};

/**
 * Complete design system reference showing sidebar variants and configurations.
 */
export const Variants: Story = {
  render: () => (
    <div className="space-y-12 p-8">
      {/* Basic Sidebar */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Sidebar</h3>
          <p className="text-muted-foreground text-sm">
            Standard sidebar with groups, labels, and menu items
          </p>
        </div>
        <div className="border-border h-[400px] overflow-hidden rounded-lg border">
          <SidebarProvider defaultOpen>
            <Sidebar>
              <SidebarHeader>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <LayoutDashboardIcon className="size-4" />
                      <span className="font-semibold">Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton isActive>
                          <HomeIcon className="size-4" />
                          <span>Home</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <UsersIcon className="size-4" />
                          <span>Users</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SettingsIcon className="size-4" />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarRail />
            </Sidebar>
            <SidebarInset>
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">Content Area</p>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </section>

      {/* With Sub-menus */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Sub-menus</h3>
          <p className="text-muted-foreground text-sm">
            Nested navigation with collapsible sub-items
          </p>
        </div>
        <div className="border-border h-[400px] overflow-hidden rounded-lg border">
          <SidebarProvider defaultOpen>
            <Sidebar>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Documentation</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <BookOpenIcon className="size-4" />
                          <span>Getting Started</span>
                        </SidebarMenuButton>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton href="#">
                              Introduction
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton href="#">
                              Installation
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton href="#">
                              Quick Start
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <CodeIcon className="size-4" />
                          <span>API Reference</span>
                        </SidebarMenuButton>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton href="#">
                              Authentication
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton href="#">
                              Endpoints
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarRail />
            </Sidebar>
            <SidebarInset>
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">Content Area</p>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </section>

      {/* With Footer */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With User Footer</h3>
          <p className="text-muted-foreground text-sm">
            Sidebar with user profile and actions in the footer
          </p>
        </div>
        <div className="border-border h-[400px] overflow-hidden rounded-lg border">
          <SidebarProvider defaultOpen>
            <Sidebar>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Main</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton isActive>
                          <HomeIcon className="size-4" />
                          <span>Dashboard</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="h-12">
                      <Avatar className="size-8">
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">Username</span>
                        <span className="text-muted-foreground text-xs">
                          user@example.com
                        </span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
              <SidebarRail />
            </Sidebar>
            <SidebarInset>
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">Content Area</p>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </section>

      {/* Button Sizes */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Menu Button Sizes</h3>
          <p className="text-muted-foreground text-sm">
            Different sizes for menu buttons
          </p>
        </div>
        <SidebarProvider defaultOpen>
          <div className="bg-sidebar w-64 space-y-2 rounded-lg border p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="sm">
                  <HomeIcon className="size-4" />
                  <span>Small</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton size="default">
                  <HomeIcon className="size-4" />
                  <span>Default</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <HomeIcon className="size-4" />
                  <span>Large</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </SidebarProvider>
      </section>

      {/* Active States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Active States</h3>
          <p className="text-muted-foreground text-sm">
            Visual indication of active menu items
          </p>
        </div>
        <SidebarProvider defaultOpen>
          <div className="bg-sidebar w-64 space-y-2 rounded-lg border p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <HomeIcon className="size-4" />
                  <span>Active Item</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <UsersIcon className="size-4" />
                  <span>Inactive Item</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <SettingsIcon className="size-4" />
                  <span>Another Item</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </SidebarProvider>
      </section>

      {/* With Badges */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Badges</h3>
          <p className="text-muted-foreground text-sm">
            Menu items with notification badges
          </p>
        </div>
        <SidebarProvider defaultOpen>
          <div className="bg-sidebar w-64 space-y-2 rounded-lg border p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <MessageSquareIcon className="size-4" />
                  <span>Messages</span>
                  <Badge className="ml-auto">5</Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <KeyIcon className="size-4" />
                  <span>API Keys</span>
                  <Badge variant="secondary" className="ml-auto">
                    3
                  </Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <WebhookIcon className="size-4" />
                  <span>Webhooks</span>
                  <Badge variant="destructive" className="ml-auto">
                    !
                  </Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </SidebarProvider>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing sidebar behavior.
 */
export const Interactive: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-10">
                <LayoutDashboardIcon className="size-4" />
                <span className="font-semibold">App Name</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <HomeIcon className="size-4" />
                    <span>Home</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <SettingsIcon className="size-4" />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-4">
          <SidebarTrigger />
          <span>Toggle Sidebar</span>
        </header>
        <main className="p-4">
          <p className="text-muted-foreground">Use ⌘B to toggle the sidebar</p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
};
