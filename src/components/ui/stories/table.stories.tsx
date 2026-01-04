import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertCircleIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CheckCircle2Icon,
  ClockIcon,
  ExternalLinkIcon,
  MoreHorizontalIcon,
  XCircleIcon,
} from "lucide-react";

import { Badge } from "../badge";
import { Button } from "../button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";

const meta: Meta<typeof Table> = {
  title: "Components/Layout & Structure/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for the table",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

/**
 * Neynar Dashboard Tables - Realistic scenarios showing tables in context
 * of transaction history, webhook logs, and API request monitoring.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function DashboardTables() {
      return (
        <div className="w-full max-w-6xl space-y-8">
          {/* Transaction History Table */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Transaction History</h3>
              <p className="text-muted-foreground text-sm">
                Recent API credit purchases and usage transactions.
              </p>
            </div>
            <div className="border-border rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-xs">
                      txn_9k2m4n8p
                    </TableCell>
                    <TableCell>Credit Purchase</TableCell>
                    <TableCell className="font-medium">$99.00</TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        <CheckCircle2Icon
                          data-icon="inline-start"
                          className="size-3"
                        />
                        Completed
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      2025-12-29 14:23
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon-sm">
                        <ExternalLinkIcon className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">
                      txn_7h5k3m2n
                    </TableCell>
                    <TableCell>API Usage</TableCell>
                    <TableCell className="font-medium">-$12.50</TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        <CheckCircle2Icon
                          data-icon="inline-start"
                          className="size-3"
                        />
                        Completed
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      2025-12-28 09:15
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon-sm">
                        <ExternalLinkIcon className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">
                      txn_4f2j8k1m
                    </TableCell>
                    <TableCell>Credit Purchase</TableCell>
                    <TableCell className="font-medium">$49.00</TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        <ClockIcon
                          data-icon="inline-start"
                          className="size-3"
                        />
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      2025-12-27 16:42
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon-sm">
                        <ExternalLinkIcon className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">
                      txn_2d9h5k3p
                    </TableCell>
                    <TableCell>Refund</TableCell>
                    <TableCell className="font-medium">$25.00</TableCell>
                    <TableCell>
                      <Badge variant="destructive">
                        <XCircleIcon
                          data-icon="inline-start"
                          className="size-3"
                        />
                        Failed
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      2025-12-26 11:08
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon-sm">
                        <ExternalLinkIcon className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={2}>Total Balance</TableCell>
                    <TableCell className="font-semibold">$110.50</TableCell>
                    <TableCell colSpan={3} />
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>

          {/* Webhook Logs Table */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Webhook Logs</h3>
              <p className="text-muted-foreground text-sm">
                Recent webhook delivery attempts and their status.
              </p>
            </div>
            <div className="border-border rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event Type</TableHead>
                    <TableHead>Webhook URL</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Response</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-xs">
                      cast.created
                    </TableCell>
                    <TableCell className="font-mono text-xs">
                      https://api.example.com/webhooks
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        <CheckCircle2Icon
                          data-icon="inline-start"
                          className="size-3"
                        />
                        200 OK
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      42ms
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      2025-12-29 14:45:23
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontalIcon className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">
                      user.updated
                    </TableCell>
                    <TableCell className="font-mono text-xs">
                      https://api.example.com/webhooks
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        <CheckCircle2Icon
                          data-icon="inline-start"
                          className="size-3"
                        />
                        200 OK
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      38ms
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      2025-12-29 14:44:15
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontalIcon className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">
                      reaction.added
                    </TableCell>
                    <TableCell className="font-mono text-xs">
                      https://api.example.com/webhooks
                    </TableCell>
                    <TableCell>
                      <Badge variant="destructive">
                        <XCircleIcon
                          data-icon="inline-start"
                          className="size-3"
                        />
                        500 Error
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      1,203ms
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      2025-12-29 14:43:08
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontalIcon className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">
                      cast.created
                    </TableCell>
                    <TableCell className="font-mono text-xs">
                      https://api.example.com/webhooks
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        <AlertCircleIcon
                          data-icon="inline-start"
                          className="size-3"
                        />
                        Timeout
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      30,000ms
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      2025-12-29 14:42:01
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontalIcon className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableCaption>
                  Showing the last 4 webhook deliveries
                </TableCaption>
              </Table>
            </div>
          </div>

          {/* API Request Logs Table */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">API Request Logs</h3>
              <p className="text-muted-foreground text-sm">
                Monitor your API usage, endpoints, and response times.
              </p>
            </div>
            <div className="border-border rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Endpoint</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Response Time</TableHead>
                    <TableHead>Requests</TableHead>
                    <TableHead className="text-right">Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-xs">
                      /v2/farcaster/cast
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-mono">
                        GET
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        <CheckCircle2Icon
                          data-icon="inline-start"
                          className="size-3"
                        />
                        Healthy
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      125ms avg
                    </TableCell>
                    <TableCell className="font-medium">1,245</TableCell>
                    <TableCell className="text-right">
                      <span className="text-green-600 flex items-center justify-end gap-1 text-sm">
                        <ArrowUpIcon className="size-3" />
                        +12%
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">
                      /v2/farcaster/user/bulk
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-mono">
                        GET
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        <CheckCircle2Icon
                          data-icon="inline-start"
                          className="size-3"
                        />
                        Healthy
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      89ms avg
                    </TableCell>
                    <TableCell className="font-medium">2,891</TableCell>
                    <TableCell className="text-right">
                      <span className="text-green-600 flex items-center justify-end gap-1 text-sm">
                        <ArrowUpIcon className="size-3" />
                        +8%
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">
                      /v2/farcaster/feed
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-mono">
                        GET
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        <AlertCircleIcon
                          data-icon="inline-start"
                          className="size-3"
                        />
                        Degraded
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      523ms avg
                    </TableCell>
                    <TableCell className="font-medium">456</TableCell>
                    <TableCell className="text-right">
                      <span className="text-red-600 flex items-center justify-end gap-1 text-sm">
                        <ArrowDownIcon className="size-3" />
                        -15%
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">
                      /v2/farcaster/cast
                    </TableCell>
                    <TableCell>
                      <Badge className="font-mono">POST</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        <CheckCircle2Icon
                          data-icon="inline-start"
                          className="size-3"
                        />
                        Healthy
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      198ms avg
                    </TableCell>
                    <TableCell className="font-medium">678</TableCell>
                    <TableCell className="text-right">
                      <span className="text-green-600 flex items-center justify-end gap-1 text-sm">
                        <ArrowUpIcon className="size-3" />
                        +5%
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={4}>Total API Requests Today</TableCell>
                    <TableCell className="font-semibold">5,270</TableCell>
                    <TableCell className="text-right">
                      <span className="text-green-600 flex items-center justify-end gap-1 text-sm font-medium">
                        <ArrowUpIcon className="size-3" />
                        +9%
                      </span>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </div>
      );
    }

    return <DashboardTables />;
  },
};

/**
 * Complete design system reference showing all table components,
 * variants, and composition patterns.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Basic Table */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Table</h3>
          <p className="text-muted-foreground text-sm">
            Simple table with header, body, and footer sections.
          </p>
        </div>
        <div className="border-border rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV003</TableCell>
                <TableCell>Unpaid</TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell className="text-right">$350.00</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$750.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </section>

      {/* With Caption */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Caption</h3>
          <p className="text-muted-foreground text-sm">
            Table with a descriptive caption below.
          </p>
        </div>
        <div className="border-border rounded-lg border">
          <Table>
            <TableCaption>A list of your recent transactions</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Purchase</TableCell>
                <TableCell>2025-12-29</TableCell>
                <TableCell className="text-right">$99.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Refund</TableCell>
                <TableCell>2025-12-28</TableCell>
                <TableCell className="text-right">-$25.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* With Badges */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Status Badges</h3>
          <p className="text-muted-foreground text-sm">
            Tables commonly use badges for status indicators.
          </p>
        </div>
        <div className="border-border rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Uptime</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">API Gateway</TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    <CheckCircle2Icon
                      data-icon="inline-start"
                      className="size-3"
                    />
                    Operational
                  </Badge>
                </TableCell>
                <TableCell>99.99%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Webhooks</TableCell>
                <TableCell>
                  <Badge variant="outline">
                    <AlertCircleIcon
                      data-icon="inline-start"
                      className="size-3"
                    />
                    Degraded
                  </Badge>
                </TableCell>
                <TableCell>98.50%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Database</TableCell>
                <TableCell>
                  <Badge variant="destructive">
                    <XCircleIcon data-icon="inline-start" className="size-3" />
                    Offline
                  </Badge>
                </TableCell>
                <TableCell>85.20%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* With Actions */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Action Buttons</h3>
          <p className="text-muted-foreground text-sm">
            Tables can include action buttons for row-level operations.
          </p>
        </div>
        <div className="border-border rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>API Key</TableHead>
                <TableHead>Environment</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  neynar_sk_***_8f3d
                </TableCell>
                <TableCell>
                  <Badge variant="default">Production</Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  2025-12-15
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon-sm">
                      <ExternalLinkIcon className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <MoreHorizontalIcon className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">
                  neynar_sk_***_2k9m
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">Development</Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  2025-12-10
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon-sm">
                      <ExternalLinkIcon className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <MoreHorizontalIcon className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Selectable Rows */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Selectable Rows</h3>
          <p className="text-muted-foreground text-sm">
            Rows can be highlighted using the data-state attribute.
          </p>
        </div>
        <div className="border-border rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Alice Johnson</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell>
                  <Badge variant="secondary">Active</Badge>
                </TableCell>
              </TableRow>
              <TableRow data-state="selected">
                <TableCell className="font-medium">Bob Smith</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>
                  <Badge variant="secondary">Active</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Carol White</TableCell>
                <TableCell>Designer</TableCell>
                <TableCell>
                  <Badge variant="outline">Inactive</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Compact Table */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Compact Table</h3>
          <p className="text-muted-foreground text-sm">
            Condensed spacing for dense data display.
          </p>
        </div>
        <div className="border-border rounded-lg border">
          <Table className="text-xs">
            <TableHeader>
              <TableRow>
                <TableHead className="h-8 px-2">ID</TableHead>
                <TableHead className="h-8 px-2">Event</TableHead>
                <TableHead className="h-8 px-2">Time</TableHead>
                <TableHead className="h-8 px-2">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="p-1 px-2 font-mono">001</TableCell>
                <TableCell className="p-1 px-2">cast.created</TableCell>
                <TableCell className="p-1 px-2 text-muted-foreground">
                  14:32:15
                </TableCell>
                <TableCell className="p-1 px-2">
                  <Badge variant="secondary" className="h-5 text-xs">
                    OK
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="p-1 px-2 font-mono">002</TableCell>
                <TableCell className="p-1 px-2">user.updated</TableCell>
                <TableCell className="p-1 px-2 text-muted-foreground">
                  14:31:42
                </TableCell>
                <TableCell className="p-1 px-2">
                  <Badge variant="secondary" className="h-5 text-xs">
                    OK
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="p-1 px-2 font-mono">003</TableCell>
                <TableCell className="p-1 px-2">reaction.added</TableCell>
                <TableCell className="p-1 px-2 text-muted-foreground">
                  14:30:18
                </TableCell>
                <TableCell className="p-1 px-2">
                  <Badge variant="destructive" className="h-5 text-xs">
                    Error
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing table props.
 */
export const Interactive: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="border-border w-full max-w-2xl rounded-lg border">
      <Table>
        <TableCaption>A simple interactive table example</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Item 1</TableCell>
            <TableCell>
              <Badge variant="secondary">Active</Badge>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Item 2</TableCell>
            <TableCell>
              <Badge variant="outline">Pending</Badge>
            </TableCell>
            <TableCell className="text-right">$150.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Item 3</TableCell>
            <TableCell>
              <Badge variant="secondary">Active</Badge>
            </TableCell>
            <TableCell className="text-right">$350.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right">$750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
};
