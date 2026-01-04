import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  CheckCircle2Icon,
  ClockIcon,
  FilterIcon,
  SearchIcon,
  XCircleIcon,
} from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../pagination";

/**
 * Pagination stories showcasing navigation patterns for multi-page data sets.
 *
 * Demonstrates realistic dashboard scenarios including API logs, transaction history,
 * and data tables. Shows all component variants including page numbers, ellipsis,
 * and previous/next controls with proper active states and accessibility.
 */
const meta: Meta<typeof Pagination> = {
  title: "Components/Navigation & Menus/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A composable pagination component for navigating through multi-page data sets with semantic HTML and full accessibility support.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for the pagination container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * API Request Logs - A realistic scenario showing pagination in the context
 * of viewing API request logs in the Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function APILogsTable() {
      const [currentPage, setCurrentPage] = useState(2);
      const totalPages = 42;

      const logs = [
        {
          id: "req_9k2m1p",
          endpoint: "/v2/farcaster/cast",
          method: "GET",
          status: 200,
          time: "23ms",
          timestamp: "2 minutes ago",
        },
        {
          id: "req_8j1n0o",
          endpoint: "/v2/farcaster/user/bulk",
          method: "POST",
          status: 200,
          time: "145ms",
          timestamp: "5 minutes ago",
        },
        {
          id: "req_7h0m9n",
          endpoint: "/v2/farcaster/feed",
          method: "GET",
          status: 429,
          time: "12ms",
          timestamp: "8 minutes ago",
        },
        {
          id: "req_6g9l8m",
          endpoint: "/v2/farcaster/cast/conversation",
          method: "GET",
          status: 200,
          time: "89ms",
          timestamp: "12 minutes ago",
        },
        {
          id: "req_5f8k7l",
          endpoint: "/v2/farcaster/user/search",
          method: "GET",
          status: 500,
          time: "2341ms",
          timestamp: "15 minutes ago",
        },
      ];

      function handlePageClick(page: number) {
        setCurrentPage(page);
      }

      return (
        <div className="w-full max-w-5xl space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">API Request Logs</h2>
              <p className="text-muted-foreground text-sm">
                View and analyze your API request history
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm hover:bg-accent">
                <FilterIcon className="size-4" />
                Filters
              </button>
              <div className="relative">
                <SearchIcon className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search logs..."
                  className="h-9 w-64 rounded-md border border-border bg-background pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-lg border border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border bg-muted/50">
                  <tr className="text-muted-foreground text-left text-sm">
                    <th className="px-4 py-3 font-medium">Request ID</th>
                    <th className="px-4 py-3 font-medium">Endpoint</th>
                    <th className="px-4 py-3 font-medium">Method</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Response Time</th>
                    <th className="px-4 py-3 font-medium">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log) => (
                    <tr
                      key={log.id}
                      className="border-b border-border last:border-0 hover:bg-muted/50"
                    >
                      <td className="px-4 py-3">
                        <code className="text-muted-foreground rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                          {log.id}
                        </code>
                      </td>
                      <td className="px-4 py-3 font-mono text-sm">
                        {log.endpoint}
                      </td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-blue-500/10 px-2 py-1 font-mono text-xs font-medium text-blue-600 dark:text-blue-400">
                          {log.method}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          {log.status === 200 ? (
                            <CheckCircle2Icon className="size-4 text-green-600 dark:text-green-400" />
                          ) : (
                            <XCircleIcon
                              className={
                                log.status === 429
                                  ? "size-4 text-yellow-600 dark:text-yellow-400"
                                  : "size-4 text-red-600 dark:text-red-400"
                              }
                            />
                          )}
                          <span className="font-mono text-sm">
                            {log.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <ClockIcon className="text-muted-foreground size-4" />
                          <span className="text-muted-foreground text-sm">
                            {log.time}
                          </span>
                        </div>
                      </td>
                      <td className="text-muted-foreground px-4 py-3 text-sm">
                        {log.timestamp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground text-sm">
              Showing <span className="font-medium text-foreground">6-10</span>{" "}
              of <span className="font-medium text-foreground">420</span>{" "}
              requests
            </p>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageClick(currentPage - 1);
                    }}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageClick(1);
                    }}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === 2}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageClick(2);
                    }}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageClick(3);
                    }}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageClick(totalPages);
                    }}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        handlePageClick(currentPage + 1);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      );
    }

    return <APILogsTable />;
  },
};

/**
 * Complete design system reference showing all pagination patterns and states.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="w-full max-w-4xl space-y-10">
      {/* Basic Pagination */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Basic Pagination</h3>
          <p className="text-muted-foreground text-sm">
            Standard pagination with previous/next and page numbers.
          </p>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>

      {/* With Ellipsis */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">With Ellipsis</h3>
          <p className="text-muted-foreground text-sm">
            Use ellipsis to indicate skipped pages in large data sets.
          </p>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>

      {/* First Page State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">First Page State</h3>
          <p className="text-muted-foreground text-sm">
            Pagination at the beginning of a data set.
          </p>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">25</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>

      {/* Middle Page State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Middle Page State</h3>
          <p className="text-muted-foreground text-sm">
            Pagination in the middle of a data set with ellipsis on both sides.
          </p>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">12</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                13
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">14</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">25</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>

      {/* Last Page State */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Last Page State</h3>
          <p className="text-muted-foreground text-sm">
            Pagination at the end of a data set.
          </p>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">23</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">24</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                25
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>

      {/* Few Pages */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Few Pages</h3>
          <p className="text-muted-foreground text-sm">
            Pagination for small data sets without ellipsis.
          </p>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>

      {/* Minimal (Only Controls) */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Minimal (Only Controls)</h3>
          <p className="text-muted-foreground text-sm">
            Simple previous/next navigation without page numbers.
          </p>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>

      {/* Active States Comparison */}
      <section className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Active vs Inactive States</h3>
          <p className="text-muted-foreground text-sm">
            Visual comparison of page link states.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border p-4">
          <div className="flex flex-col items-center gap-2">
            <PaginationLink href="#">Inactive</PaginationLink>
            <span className="text-muted-foreground text-xs">Default state</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PaginationLink href="#" isActive>
              Active
            </PaginationLink>
            <span className="text-muted-foreground text-xs">Current page</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PaginationEllipsis />
            <span className="text-muted-foreground text-xs">Ellipsis</span>
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Interactive playground for testing pagination props.
 */
export const Interactive: Story = {
  render: (args) => (
    <Pagination {...args}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
