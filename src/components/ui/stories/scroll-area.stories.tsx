import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  ClockIcon,
  FileTextIcon,
  ServerIcon,
  WebhookIcon,
  XCircleIcon,
} from "lucide-react";

import { Badge } from "../badge";
import { ScrollArea, ScrollBar } from "../scroll-area";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/Advanced & Specialized/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for the scroll area container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

/**
 * Webhook Logs - A realistic scenario showing scrollable webhook delivery logs
 * in the Neynar Dashboard with both vertical and horizontal scrolling examples.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function WebhookLogs() {
      const webhookLogs = [
        {
          id: "wh_01",
          timestamp: "2025-12-29T14:32:15Z",
          event: "cast.created",
          endpoint: "https://api.example.com/webhooks/cast-created",
          status: "success",
          statusCode: 200,
          duration: "145ms",
        },
        {
          id: "wh_02",
          timestamp: "2025-12-29T14:31:42Z",
          event: "user.followed",
          endpoint: "https://api.example.com/webhooks/user-followed",
          status: "success",
          statusCode: 200,
          duration: "98ms",
        },
        {
          id: "wh_03",
          timestamp: "2025-12-29T14:30:18Z",
          event: "reaction.created",
          endpoint: "https://api.example.com/webhooks/reactions",
          status: "failed",
          statusCode: 500,
          duration: "5000ms",
        },
        {
          id: "wh_04",
          timestamp: "2025-12-29T14:28:55Z",
          event: "cast.created",
          endpoint: "https://api.example.com/webhooks/cast-created",
          status: "success",
          statusCode: 200,
          duration: "132ms",
        },
        {
          id: "wh_05",
          timestamp: "2025-12-29T14:27:33Z",
          event: "user.followed",
          endpoint: "https://api.example.com/webhooks/user-followed",
          status: "success",
          statusCode: 200,
          duration: "156ms",
        },
        {
          id: "wh_06",
          timestamp: "2025-12-29T14:26:12Z",
          event: "cast.deleted",
          endpoint: "https://api.example.com/webhooks/cast-deleted",
          status: "failed",
          statusCode: 404,
          duration: "3200ms",
        },
        {
          id: "wh_07",
          timestamp: "2025-12-29T14:24:47Z",
          event: "reaction.created",
          endpoint: "https://api.example.com/webhooks/reactions",
          status: "success",
          statusCode: 200,
          duration: "178ms",
        },
        {
          id: "wh_08",
          timestamp: "2025-12-29T14:23:21Z",
          event: "cast.created",
          endpoint: "https://api.example.com/webhooks/cast-created",
          status: "success",
          statusCode: 200,
          duration: "143ms",
        },
        {
          id: "wh_09",
          timestamp: "2025-12-29T14:22:05Z",
          event: "user.followed",
          endpoint: "https://api.example.com/webhooks/user-followed",
          status: "success",
          statusCode: 200,
          duration: "167ms",
        },
        {
          id: "wh_10",
          timestamp: "2025-12-29T14:20:38Z",
          event: "reaction.created",
          endpoint: "https://api.example.com/webhooks/reactions",
          status: "success",
          statusCode: 200,
          duration: "192ms",
        },
      ];

      const notifications = [
        {
          id: 1,
          type: "mention",
          user: "alice.eth",
          message: "mentioned you in a cast",
          time: "2m ago",
          read: false,
        },
        {
          id: 2,
          type: "follow",
          user: "bob.farcaster",
          message: "started following you",
          time: "15m ago",
          read: false,
        },
        {
          id: 3,
          type: "like",
          user: "charlie.xyz",
          message: "liked your cast",
          time: "1h ago",
          read: true,
        },
        {
          id: 4,
          type: "mention",
          user: "diana.eth",
          message: "mentioned you in a cast",
          time: "2h ago",
          read: true,
        },
        {
          id: 5,
          type: "follow",
          user: "eve.farcaster",
          message: "started following you",
          time: "3h ago",
          read: true,
        },
        {
          id: 6,
          type: "like",
          user: "frank.xyz",
          message: "liked your cast",
          time: "4h ago",
          read: true,
        },
        {
          id: 7,
          type: "mention",
          user: "grace.eth",
          message: "mentioned you in a cast",
          time: "5h ago",
          read: true,
        },
        {
          id: 8,
          type: "follow",
          user: "henry.farcaster",
          message: "started following you",
          time: "6h ago",
          read: true,
        },
      ];

      return (
        <div className="w-full max-w-5xl space-y-8">
          {/* Webhook Delivery Logs */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Webhook Delivery Logs</h2>
              <p className="text-muted-foreground text-sm">
                Real-time delivery status for all webhook endpoints
              </p>
            </div>
            <div className="border-border overflow-hidden rounded-lg border">
              <div className="bg-muted/50 border-border border-b px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <WebhookIcon className="size-5" />
                    <span className="font-medium">Recent Deliveries</span>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">7 Success</Badge>
                    <Badge variant="destructive">2 Failed</Badge>
                  </div>
                </div>
              </div>
              <ScrollArea className="h-[400px]">
                <div className="divide-y">
                  {webhookLogs.map((log) => (
                    <div key={log.id} className="px-4 py-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          {log.status === "success" ? (
                            <CheckCircle2Icon className="text-green-500 mt-0.5 size-5 shrink-0" />
                          ) : (
                            <XCircleIcon className="text-red-500 mt-0.5 size-5 shrink-0" />
                          )}
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <code className="text-foreground font-medium text-sm">
                                {log.event}
                              </code>
                              <Badge
                                variant={
                                  log.status === "success"
                                    ? "secondary"
                                    : "destructive"
                                }
                              >
                                {log.statusCode}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-xs">
                              {log.endpoint}
                            </p>
                            <div className="flex items-center gap-3 text-xs">
                              <span className="text-muted-foreground flex items-center gap-1">
                                <ClockIcon className="size-3" />
                                {new Date(log.timestamp).toLocaleTimeString()}
                              </span>
                              <span className="text-muted-foreground">
                                Duration: {log.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </section>

          {/* Notification List */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Notifications</h2>
              <p className="text-muted-foreground text-sm">
                Stay updated with your latest activity
              </p>
            </div>
            <div className="border-border overflow-hidden rounded-lg border">
              <ScrollArea className="h-[300px]">
                <div className="divide-y">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 ${!notification.read ? "bg-muted/30" : ""}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                          {notification.user.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm">
                            <span className="font-medium">
                              {notification.user}
                            </span>{" "}
                            {notification.message}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {notification.time}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="bg-primary size-2 shrink-0 rounded-full" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </section>

          {/* Horizontal Scroll Example */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">API Response Payload</h2>
              <p className="text-muted-foreground text-sm">
                Horizontal scrolling for wide content
              </p>
            </div>
            <div className="border-border overflow-hidden rounded-lg border">
              <div className="bg-muted/50 border-border border-b px-4 py-3">
                <div className="flex items-center gap-2">
                  <FileTextIcon className="size-5" />
                  <span className="font-medium">JSON Response</span>
                </div>
              </div>
              <ScrollArea className="h-[200px]">
                <div className="p-4">
                  <pre className="font-mono text-xs">
                    <code>
                      {JSON.stringify(
                        {
                          event: "cast.created",
                          timestamp: "2025-12-29T14:32:15Z",
                          data: {
                            cast: {
                              hash: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
                              author: {
                                fid: 12345,
                                username: "alice.eth",
                                display_name: "Alice",
                                pfp_url: "https://example.com/pfp/alice.png",
                              },
                              text: "This is a sample cast with a very long message that demonstrates horizontal scrolling in the ScrollArea component. The content extends beyond the visible area, requiring users to scroll horizontally to view the full message.",
                              embeds: ["https://example.com/image.png"],
                              reactions: {
                                likes: 42,
                                recasts: 13,
                              },
                            },
                          },
                        },
                        null,
                        2,
                      )}
                    </code>
                  </pre>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </section>
        </div>
      );
    }

    return <WebhookLogs />;
  },
};

/**
 * Complete design system reference showing all scroll area variants and use cases.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Vertical Scrolling */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Vertical Scrolling</h3>
          <p className="text-muted-foreground text-sm">
            Default behavior with vertical overflow and scrollbar.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border-border overflow-hidden rounded-lg border">
            <div className="bg-muted/50 border-border border-b px-4 py-2">
              <span className="text-sm font-medium">Compact List</span>
            </div>
            <ScrollArea className="h-[200px]">
              <div className="divide-y">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="px-4 py-2">
                    <p className="text-sm">List item {i + 1}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="border-border overflow-hidden rounded-lg border">
            <div className="bg-muted/50 border-border border-b px-4 py-2">
              <span className="text-sm font-medium">Card List</span>
            </div>
            <ScrollArea className="h-[200px]">
              <div className="space-y-2 p-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="border-border rounded-md border p-3">
                    <p className="font-medium text-sm">Card {i + 1}</p>
                    <p className="text-muted-foreground text-xs">
                      Content here
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Horizontal Scrolling</h3>
          <p className="text-muted-foreground text-sm">
            Horizontal overflow with explicit horizontal scrollbar.
          </p>
        </div>
        <div className="border-border overflow-hidden rounded-lg border">
          <div className="bg-muted/50 border-border border-b px-4 py-2">
            <span className="text-sm font-medium">Wide Content</span>
          </div>
          <ScrollArea className="h-[120px]">
            <div className="flex gap-4 p-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="border-border flex size-20 shrink-0 items-center justify-center rounded-md border"
                >
                  <span className="text-sm">{i + 1}</span>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* Different Heights */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Different Heights</h3>
          <p className="text-muted-foreground text-sm">
            Scroll areas can be sized to fit your layout needs.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border-border overflow-hidden rounded-lg border">
            <div className="bg-muted/50 border-border border-b px-4 py-2">
              <span className="text-sm font-medium">Small (150px)</span>
            </div>
            <ScrollArea className="h-[150px]">
              <div className="space-y-2 p-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <p key={i} className="text-sm">
                    Item {i + 1}
                  </p>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="border-border overflow-hidden rounded-lg border">
            <div className="bg-muted/50 border-border border-b px-4 py-2">
              <span className="text-sm font-medium">Medium (250px)</span>
            </div>
            <ScrollArea className="h-[250px]">
              <div className="space-y-2 p-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <p key={i} className="text-sm">
                    Item {i + 1}
                  </p>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="border-border overflow-hidden rounded-lg border">
            <div className="bg-muted/50 border-border border-b px-4 py-2">
              <span className="text-sm font-medium">Large (350px)</span>
            </div>
            <ScrollArea className="h-[350px]">
              <div className="space-y-2 p-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <p key={i} className="text-sm">
                    Item {i + 1}
                  </p>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>

      {/* Complex Content */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Complex Content</h3>
          <p className="text-muted-foreground text-sm">
            Scroll areas work with rich content including icons, badges, and
            multi-line text.
          </p>
        </div>
        <div className="border-border overflow-hidden rounded-lg border">
          <div className="bg-muted/50 border-border border-b px-4 py-3">
            <div className="flex items-center gap-2">
              <ServerIcon className="size-5" />
              <span className="font-medium">System Logs</span>
            </div>
          </div>
          <ScrollArea className="h-[300px]">
            <div className="divide-y">
              {[
                {
                  level: "info",
                  message: "Application started successfully",
                  timestamp: "14:32:15",
                },
                {
                  level: "success",
                  message: "Database connection established",
                  timestamp: "14:32:16",
                },
                {
                  level: "warning",
                  message: "API rate limit approaching threshold (85%)",
                  timestamp: "14:32:45",
                },
                {
                  level: "error",
                  message: "Failed to connect to external service",
                  timestamp: "14:33:02",
                },
                {
                  level: "info",
                  message: "Cache cleared successfully",
                  timestamp: "14:33:15",
                },
                {
                  level: "success",
                  message: "Background job completed",
                  timestamp: "14:33:30",
                },
                {
                  level: "warning",
                  message: "High memory usage detected",
                  timestamp: "14:33:45",
                },
                {
                  level: "info",
                  message: "New user registered",
                  timestamp: "14:34:00",
                },
              ].map((log, i) => (
                <div key={i} className="px-4 py-3">
                  <div className="flex items-start gap-3">
                    {log.level === "success" && (
                      <CheckCircle2Icon className="text-green-500 mt-0.5 size-5 shrink-0" />
                    )}
                    {log.level === "warning" && (
                      <AlertCircleIcon className="text-yellow-500 mt-0.5 size-5 shrink-0" />
                    )}
                    {log.level === "error" && (
                      <XCircleIcon className="text-red-500 mt-0.5 size-5 shrink-0" />
                    )}
                    {log.level === "info" && (
                      <FileTextIcon className="text-blue-500 mt-0.5 size-5 shrink-0" />
                    )}
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            log.level === "error" ? "destructive" : "secondary"
                          }
                        >
                          {log.level.toUpperCase()}
                        </Badge>
                        <span className="text-muted-foreground text-xs">
                          {log.timestamp}
                        </span>
                      </div>
                      <p className="text-sm">{log.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>

      {/* Bidirectional Scrolling */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Bidirectional Scrolling</h3>
          <p className="text-muted-foreground text-sm">
            Both vertical and horizontal scrolling for table-like content.
          </p>
        </div>
        <div className="border-border overflow-hidden rounded-lg border">
          <div className="bg-muted/50 border-border border-b px-4 py-2">
            <span className="text-sm font-medium">API Request Log</span>
          </div>
          <ScrollArea className="h-[250px]">
            <div className="min-w-[800px] divide-y">
              <div className="bg-muted/50 grid grid-cols-6 gap-4 px-4 py-2 text-xs font-medium">
                <div>Timestamp</div>
                <div>Method</div>
                <div>Endpoint</div>
                <div>Status</div>
                <div>Duration</div>
                <div>User Agent</div>
              </div>
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="grid grid-cols-6 gap-4 px-4 py-2 text-xs"
                >
                  <div className="text-muted-foreground">14:{30 + i}:00</div>
                  <div>
                    <Badge variant="secondary">GET</Badge>
                  </div>
                  <div className="font-mono">/v2/farcaster/user</div>
                  <div>
                    <Badge variant="secondary">200</Badge>
                  </div>
                  <div className="text-muted-foreground">{120 + i * 10}ms</div>
                  <div className="text-muted-foreground truncate">
                    Mozilla/5.0 Chrome/120.0.0.0
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* Focus States */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Focus States</h3>
          <p className="text-muted-foreground text-sm">
            ScrollArea viewport shows focus rings for keyboard navigation
            accessibility.
          </p>
        </div>
        <div className="border-border overflow-hidden rounded-lg border">
          <div className="bg-muted/50 border-border border-b px-4 py-2">
            <span className="text-sm font-medium">Click or Tab to Focus</span>
          </div>
          <ScrollArea className="h-[200px]">
            <div className="space-y-2 p-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="border-border rounded-md border p-3">
                  <p className="text-sm">
                    Focusable item {i + 1} - The scroll area viewport shows a
                    focus ring when focused for keyboard accessibility.
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing scroll area props.
 */
export const Interactive: Story = {
  render: () => (
    <div className="w-[400px]">
      <div className="border-border overflow-hidden rounded-lg border">
        <div className="bg-muted/50 border-border border-b px-4 py-3">
          <span className="font-medium">Interactive ScrollArea</span>
        </div>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4 p-4">
            <p className="text-sm">
              This is an interactive scroll area where you can test scrolling
              behavior. The content below extends beyond the visible height,
              triggering the scrollbar.
            </p>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="border-border rounded-md border p-3">
                <p className="font-medium text-sm">Item {i + 1}</p>
                <p className="text-muted-foreground text-xs">
                  This is some sample content for item {i + 1}. Scroll down to
                  see more items.
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  ),
};
