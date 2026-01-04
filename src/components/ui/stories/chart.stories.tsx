import type { Meta, StoryObj } from "@storybook/react";
import {
  Area,
  AreaChart as RechartsAreaChart,
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  RadialBar,
  RadialBarChart as RechartsRadialBarChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../chart";

/**
 * Chart component stories showcasing data visualization patterns.
 *
 * Demonstrates line charts, bar charts, area charts, and pie charts using Recharts.
 * InContext story shows realistic API usage analytics for Neynar Dashboard.
 * Interactive story provides a playground for testing chart configurations.
 * Variants story displays all chart types and configuration options.
 */
const meta: Meta<typeof ChartContainer> = {
  title: "Components/Advanced & Specialized/Chart",
  component: ChartContainer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible chart container built on Recharts with theming, configuration, and accessibility support. Provides responsive containers for all chart types with consistent styling and color management across light and dark modes.",
      },
    },
  },
  argTypes: {
    config: {
      control: { type: "object" },
      description:
        "Chart configuration object defining series labels, colors, and optional icons. Supports both single colors and theme-aware color mappings for light/dark modes.",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for custom styling and sizing",
    },
    children: {
      control: false,
      description:
        "Recharts chart components (LineChart, BarChart, AreaChart, PieChart, etc.)",
    },
    id: {
      control: { type: "text" },
      description: "Optional unique identifier for the chart container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for API analytics
const apiUsageData = [
  { date: "Jan 1", requests: 12400, rateLimit: 50000, errors: 240 },
  { date: "Jan 8", requests: 18200, rateLimit: 50000, errors: 182 },
  { date: "Jan 15", requests: 24800, rateLimit: 50000, errors: 496 },
  { date: "Jan 22", requests: 31200, rateLimit: 50000, errors: 312 },
  { date: "Jan 29", requests: 42400, rateLimit: 50000, errors: 424 },
  { date: "Feb 5", requests: 38900, rateLimit: 50000, errors: 389 },
  { date: "Feb 12", requests: 45600, rateLimit: 50000, errors: 456 },
];

const endpointData = [
  { endpoint: "/v2/user", requests: 15600 },
  { endpoint: "/v2/cast", requests: 12400 },
  { endpoint: "/v2/feed", requests: 9800 },
  { endpoint: "/v2/channel", requests: 7200 },
  { endpoint: "/v2/notifications", requests: 5400 },
];

const statusCodeData = [
  { status: "2xx Success", count: 42800, fill: "var(--color-success)" },
  { status: "4xx Client", count: 1240, fill: "var(--color-client-error)" },
  { status: "5xx Server", count: 180, fill: "var(--color-server-error)" },
];

// Base configuration for interactive controls
const baseConfig = {
  requests: {
    label: "API Requests",
    color: "var(--chart-1)",
  },
  rateLimit: {
    label: "Rate Limit",
    color: "var(--chart-2)",
  },
  errors: {
    label: "Errors",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

/**
 * API Usage Analytics - A realistic Neynar Dashboard scenario.
 * Shows API request metrics, endpoint usage, and error tracking.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    const apiConfig = {
      requests: {
        label: "API Requests",
        color: "var(--chart-1)",
      },
      rateLimit: {
        label: "Rate Limit",
        color: "var(--chart-2)",
      },
      errors: {
        label: "Error Count",
        color: "var(--chart-3)",
      },
    } satisfies ChartConfig;

    const endpointConfig = {
      requests: {
        label: "Requests",
        color: "var(--chart-1)",
      },
    } satisfies ChartConfig;

    const statusConfig = {
      success: {
        label: "2xx Success",
        color: "hsl(142 76% 36%)",
      },
      "client-error": {
        label: "4xx Client Error",
        color: "hsl(48 96% 53%)",
      },
      "server-error": {
        label: "5xx Server Error",
        color: "hsl(0 84% 60%)",
      },
    } satisfies ChartConfig;

    return (
      <div className="w-full max-w-5xl space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">API Analytics</h2>
          <p className="text-muted-foreground text-sm">
            Monitor your Neynar API usage, performance, and rate limits over the
            past 7 weeks.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-card border-border rounded-lg border p-4">
            <div className="text-muted-foreground text-sm font-medium">
              Total Requests
            </div>
            <div className="mt-2 text-2xl font-bold">233,500</div>
            <div className="mt-1 text-xs text-green-600">
              +18.2% from last period
            </div>
          </div>
          <div className="bg-card border-border rounded-lg border p-4">
            <div className="text-muted-foreground text-sm font-medium">
              Avg Response Time
            </div>
            <div className="mt-2 text-2xl font-bold">142ms</div>
            <div className="mt-1 text-xs text-green-600">-8.4% improvement</div>
          </div>
          <div className="bg-card border-border rounded-lg border p-4">
            <div className="text-muted-foreground text-sm font-medium">
              Success Rate
            </div>
            <div className="mt-2 text-2xl font-bold">97.2%</div>
            <div className="mt-1 text-xs text-green-600">+0.3% increase</div>
          </div>
          <div className="bg-card border-border rounded-lg border p-4">
            <div className="text-muted-foreground text-sm font-medium">
              Rate Limit Usage
            </div>
            <div className="mt-2 text-2xl font-bold">91.2%</div>
            <div className="mt-1 text-xs text-yellow-600">Close to limit</div>
          </div>
        </div>

        {/* Main Chart - API Usage Over Time */}
        <div className="bg-card border-border space-y-4 rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">API Usage Over Time</h3>
              <p className="text-muted-foreground text-sm">
                Weekly request volume and error tracking
              </p>
            </div>
            <div className="text-muted-foreground text-sm">Last 7 weeks</div>
          </div>
          <ChartContainer config={apiConfig} className="h-[400px]">
            <RechartsAreaChart data={apiUsageData} accessibilityLayer>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 6)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value, name) => [
                      typeof value === "number"
                        ? value.toLocaleString()
                        : value,
                      name,
                    ]}
                    labelFormatter={(label) => `Week of ${label}`}
                  />
                }
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Area
                dataKey="rateLimit"
                type="monotone"
                fill="var(--color-rateLimit)"
                fillOpacity={0.2}
                stroke="var(--color-rateLimit)"
                strokeWidth={1}
                strokeDasharray="5 5"
              />
              <Area
                dataKey="requests"
                type="monotone"
                fill="var(--color-requests)"
                fillOpacity={0.6}
                stroke="var(--color-requests)"
                strokeWidth={2}
              />
              <Line
                dataKey="errors"
                type="monotone"
                stroke="var(--color-errors)"
                strokeWidth={2}
                dot={{ fill: "var(--color-errors)", strokeWidth: 2, r: 4 }}
              />
            </RechartsAreaChart>
          </ChartContainer>
        </div>

        {/* Secondary Charts */}
        <div className="grid grid-cols-2 gap-6">
          {/* Top Endpoints */}
          <div className="bg-card border-border space-y-4 rounded-lg border p-6">
            <div>
              <h4 className="font-semibold">Top API Endpoints</h4>
              <p className="text-muted-foreground text-sm">
                Most requested endpoints this week
              </p>
            </div>
            <ChartContainer config={endpointConfig} className="h-[280px]">
              <RechartsBarChart
                data={endpointData}
                layout="vertical"
                accessibilityLayer
              >
                <XAxis type="number" tickLine={false} axisLine={false} />
                <YAxis
                  type="category"
                  dataKey="endpoint"
                  tickLine={false}
                  axisLine={false}
                  width={120}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value) => [
                        typeof value === "number"
                          ? value.toLocaleString()
                          : value,
                        "Requests",
                      ]}
                    />
                  }
                />
                <Bar
                  dataKey="requests"
                  fill="var(--color-requests)"
                  radius={4}
                />
              </RechartsBarChart>
            </ChartContainer>
          </div>

          {/* Status Code Distribution */}
          <div className="bg-card border-border space-y-4 rounded-lg border p-6">
            <div>
              <h4 className="font-semibold">Response Status Distribution</h4>
              <p className="text-muted-foreground text-sm">
                HTTP status code breakdown
              </p>
            </div>
            <ChartContainer config={statusConfig} className="h-[280px]">
              <RechartsPieChart>
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      nameKey="status"
                      formatter={(value) => [
                        typeof value === "number"
                          ? value.toLocaleString()
                          : value,
                        "Requests",
                      ]}
                    />
                  }
                />
                <Pie
                  data={statusCodeData}
                  dataKey="count"
                  nameKey="status"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                />
                <ChartLegend content={<ChartLegendContent />} />
              </RechartsPieChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Complete design system reference showing all chart types and configurations.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    const simpleData = [
      { month: "Jan", value: 2400, secondary: 1400 },
      { month: "Feb", value: 1398, secondary: 2100 },
      { month: "Mar", value: 9800, secondary: 2000 },
      { month: "Apr", value: 3908, secondary: 2780 },
      { month: "May", value: 4800, secondary: 1890 },
      { month: "Jun", value: 3800, secondary: 2390 },
    ];

    const pieChartData = [
      { category: "Desktop", value: 275, fill: "var(--color-desktop)" },
      { category: "Mobile", value: 200, fill: "var(--color-mobile)" },
      { category: "Tablet", value: 187, fill: "var(--color-tablet)" },
      { category: "Other", value: 90, fill: "var(--color-other)" },
    ];

    const radialData = [
      { name: "Usage", value: 72, fill: "var(--color-usage)" },
    ];

    return (
      <div className="w-full max-w-5xl space-y-10">
        {/* Chart Types */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Chart Types</h3>
            <p className="text-muted-foreground text-sm">
              Different visualization types for various data patterns.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {/* Line Chart */}
            <div className="space-y-3">
              <h4 className="font-medium">Line Chart</h4>
              <ChartContainer
                config={{
                  value: { label: "Value", color: "var(--chart-1)" },
                }}
                className="h-[200px]"
              >
                <RechartsLineChart data={simpleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    dataKey="value"
                    type="monotone"
                    stroke="var(--color-value)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-value)", strokeWidth: 2 }}
                  />
                </RechartsLineChart>
              </ChartContainer>
            </div>

            {/* Bar Chart */}
            <div className="space-y-3">
              <h4 className="font-medium">Bar Chart</h4>
              <ChartContainer
                config={{
                  value: { label: "Primary", color: "var(--chart-2)" },
                  secondary: { label: "Secondary", color: "var(--chart-3)" },
                }}
                className="h-[200px]"
              >
                <RechartsBarChart data={simpleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="var(--color-value)" radius={4} />
                  <Bar
                    dataKey="secondary"
                    fill="var(--color-secondary)"
                    radius={4}
                  />
                </RechartsBarChart>
              </ChartContainer>
            </div>

            {/* Area Chart */}
            <div className="space-y-3">
              <h4 className="font-medium">Area Chart</h4>
              <ChartContainer
                config={{
                  value: { label: "Primary", color: "var(--chart-4)" },
                  secondary: { label: "Secondary", color: "var(--chart-5)" },
                }}
                className="h-[200px]"
              >
                <RechartsAreaChart data={simpleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    dataKey="value"
                    type="natural"
                    fill="var(--color-value)"
                    fillOpacity={0.6}
                    stroke="var(--color-value)"
                    strokeWidth={2}
                  />
                  <Area
                    dataKey="secondary"
                    type="natural"
                    fill="var(--color-secondary)"
                    fillOpacity={0.4}
                    stroke="var(--color-secondary)"
                    strokeWidth={2}
                  />
                </RechartsAreaChart>
              </ChartContainer>
            </div>

            {/* Pie Chart */}
            <div className="space-y-3">
              <h4 className="font-medium">Pie Chart</h4>
              <ChartContainer
                config={{
                  desktop: { label: "Desktop", color: "var(--chart-1)" },
                  mobile: { label: "Mobile", color: "var(--chart-2)" },
                  tablet: { label: "Tablet", color: "var(--chart-3)" },
                  other: { label: "Other", color: "var(--chart-4)" },
                }}
                className="h-[200px]"
              >
                <RechartsPieChart>
                  <ChartTooltip
                    content={<ChartTooltipContent nameKey="category" />}
                  />
                  <Pie
                    data={pieChartData}
                    dataKey="value"
                    nameKey="category"
                    innerRadius={40}
                    outerRadius={80}
                  />
                </RechartsPieChart>
              </ChartContainer>
            </div>
          </div>
        </section>

        {/* Tooltip Indicators */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Tooltip Indicators</h3>
            <p className="text-muted-foreground text-sm">
              Different indicator styles for chart tooltips.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {/* Dot Indicator */}
            <div className="space-y-3">
              <h4 className="font-medium">Dot Indicator (Default)</h4>
              <ChartContainer
                config={{
                  value: { label: "Value", color: "var(--chart-1)" },
                }}
                className="h-[180px]"
              >
                <RechartsLineChart data={simpleData.slice(0, 4)}>
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Line
                    dataKey="value"
                    stroke="var(--color-value)"
                    strokeWidth={2}
                  />
                </RechartsLineChart>
              </ChartContainer>
            </div>

            {/* Line Indicator */}
            <div className="space-y-3">
              <h4 className="font-medium">Line Indicator</h4>
              <ChartContainer
                config={{
                  value: { label: "Value", color: "var(--chart-2)" },
                }}
                className="h-[180px]"
              >
                <RechartsLineChart data={simpleData.slice(0, 4)}>
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Line
                    dataKey="value"
                    stroke="var(--color-value)"
                    strokeWidth={2}
                  />
                </RechartsLineChart>
              </ChartContainer>
            </div>

            {/* Dashed Indicator */}
            <div className="space-y-3">
              <h4 className="font-medium">Dashed Indicator</h4>
              <ChartContainer
                config={{
                  value: { label: "Value", color: "var(--chart-3)" },
                }}
                className="h-[180px]"
              >
                <RechartsLineChart data={simpleData.slice(0, 4)}>
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Line
                    dataKey="value"
                    stroke="var(--color-value)"
                    strokeWidth={2}
                  />
                </RechartsLineChart>
              </ChartContainer>
            </div>
          </div>
        </section>

        {/* Special Charts */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">
              Specialized Visualizations
            </h3>
            <p className="text-muted-foreground text-sm">
              Advanced chart types for specific use cases.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {/* Horizontal Bar Chart */}
            <div className="space-y-3">
              <h4 className="font-medium">Horizontal Bar Chart</h4>
              <ChartContainer
                config={{
                  value: { label: "Value", color: "var(--chart-1)" },
                }}
                className="h-[240px]"
              >
                <RechartsBarChart
                  data={simpleData.slice(0, 5)}
                  layout="vertical"
                >
                  <XAxis type="number" tickLine={false} axisLine={false} />
                  <YAxis
                    type="category"
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    width={40}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="var(--color-value)" radius={4} />
                </RechartsBarChart>
              </ChartContainer>
            </div>

            {/* Radial Progress */}
            <div className="space-y-3">
              <h4 className="font-medium">Radial Bar Chart</h4>
              <ChartContainer
                config={{
                  usage: { label: "Usage", color: "var(--chart-2)" },
                }}
                className="h-[240px]"
              >
                <RechartsRadialBarChart
                  data={radialData}
                  startAngle={90}
                  endAngle={-270}
                  innerRadius={60}
                  outerRadius={100}
                >
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <RadialBar dataKey="value" cornerRadius={10} />
                </RechartsRadialBarChart>
              </ChartContainer>
            </div>
          </div>
        </section>

        {/* With Legend */}
        <section className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Charts with Legend</h3>
            <p className="text-muted-foreground text-sm">
              Adding legends for multi-series charts.
            </p>
          </div>
          <div className="space-y-3">
            <ChartContainer
              config={{
                value: { label: "Primary Series", color: "var(--chart-1)" },
                secondary: {
                  label: "Secondary Series",
                  color: "var(--chart-2)",
                },
              }}
              className="h-[280px]"
            >
              <RechartsAreaChart data={simpleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Area
                  dataKey="value"
                  type="monotone"
                  fill="var(--color-value)"
                  fillOpacity={0.6}
                  stroke="var(--color-value)"
                  strokeWidth={2}
                />
                <Area
                  dataKey="secondary"
                  type="monotone"
                  fill="var(--color-secondary)"
                  fillOpacity={0.4}
                  stroke="var(--color-secondary)"
                  strokeWidth={2}
                />
              </RechartsAreaChart>
            </ChartContainer>
          </div>
        </section>
      </div>
    );
  },
};

/**
 * Interactive playground for testing chart configurations.
 */
export const Interactive: Story = {
  args: {
    config: baseConfig,
    className: "h-[300px] w-[600px]",
  },
  render: (args) => (
    <ChartContainer {...args}>
      <RechartsBarChart data={apiUsageData} accessibilityLayer>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="requests" fill="var(--color-requests)" radius={4} />
        <Bar dataKey="errors" fill="var(--color-errors)" radius={4} />
      </RechartsBarChart>
    </ChartContainer>
  ),
};
