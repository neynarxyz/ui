import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CalendarIcon, TrendingUpIcon, BarChart3Icon } from "lucide-react";
import { addDays, format, subDays } from "date-fns";

import { Calendar } from "../calendar";
import { Button } from "../button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";
import { Label } from "../label";

const meta: Meta<typeof Calendar> = {
  title: "Components/Form & Field/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "multiple", "range"],
      description: "Selection mode for dates",
    },
    showOutsideDays: {
      control: "boolean",
      description: "Show days from previous/next months",
    },
    captionLayout: {
      control: "select",
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
      description: "Layout style for month/year caption",
    },
    buttonVariant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
      description: "Visual style variant for navigation buttons",
    },
    disabled: {
      control: "boolean",
      description: "Disable all date selection",
    },
    numberOfMonths: {
      control: "number",
      description: "Number of months to display",
      min: 1,
      max: 12,
    },
    showWeekNumber: {
      control: "boolean",
      description: "Show week numbers",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

/**
 * API Analytics Date Range - A realistic scenario showing the Calendar component
 * in the context of selecting date ranges for viewing API usage analytics in the
 * Neynar Dashboard.
 */
export const InContext: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function AnalyticsDateRangePicker() {
      const [dateRange, setDateRange] = useState<{ from: Date; to?: Date }>({
        from: subDays(new Date(), 7),
        to: new Date(),
      });

      const formatDateRange = () => {
        if (!dateRange?.from) return "Select date range";
        if (!dateRange.to) return format(dateRange.from, "MMM dd, yyyy");
        return `${format(dateRange.from, "MMM dd, yyyy")} - ${format(dateRange.to, "MMM dd, yyyy")}`;
      };

      return (
        <div className="w-full max-w-4xl space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">API Usage Analytics</h2>
            <p className="text-muted-foreground text-sm">
              View your API request metrics and usage patterns over time.
            </p>
          </div>

          {/* Date Range Selector Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="size-5" />
                Select Date Range
              </CardTitle>
              <CardDescription>
                Choose a time period to analyze your API usage metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Selection */}
              <div className="border-border bg-muted/50 flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-md p-2">
                    <BarChart3Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Selected Period</p>
                    <p className="text-muted-foreground text-sm">
                      {formatDateRange()}
                    </p>
                  </div>
                </div>
                {dateRange?.from && dateRange?.to && (
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      {Math.ceil(
                        (dateRange.to.getTime() - dateRange.from.getTime()) /
                          (1000 * 60 * 60 * 24) +
                          1,
                      )}{" "}
                      days
                    </p>
                    <p className="text-muted-foreground text-xs">in range</p>
                  </div>
                )}
              </div>

              {/* Quick Presets */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Quick Presets</Label>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setDateRange({
                        from: subDays(new Date(), 7),
                        to: new Date(),
                      })
                    }
                  >
                    Last 7 days
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setDateRange({
                        from: subDays(new Date(), 30),
                        to: new Date(),
                      })
                    }
                  >
                    Last 30 days
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setDateRange({
                        from: subDays(new Date(), 90),
                        to: new Date(),
                      })
                    }
                  >
                    Last 90 days
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setDateRange({ from: new Date(), to: new Date() })
                    }
                  >
                    Today
                  </Button>
                </div>
              </div>

              {/* Calendar */}
              <div className="flex justify-center">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={(range) =>
                    range?.from &&
                    setDateRange({ from: range.from, to: range.to })
                  }
                  numberOfMonths={2}
                  disabled={(date) => date > new Date()}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-2 border-t pt-4">
                <Button
                  variant="outline"
                  onClick={() => setDateRange({ from: new Date() })}
                >
                  Clear
                </Button>
                <Button>
                  <TrendingUpIcon data-icon="inline-start" />
                  View Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return <AnalyticsDateRangePicker />;
  },
};

/**
 * Complete design system reference showing all Calendar modes, caption layouts,
 * and configuration options.
 */
export const Variants: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => {
    function SingleDateExample() {
      const [selected, setSelected] = useState<Date | undefined>(new Date());
      return (
        <Calendar mode="single" selected={selected} onSelect={setSelected} />
      );
    }

    function RangeDateExample() {
      const [selected, setSelected] = useState<{ from: Date; to?: Date }>({
        from: subDays(new Date(), 7),
        to: new Date(),
      });
      return (
        <Calendar
          mode="range"
          selected={selected}
          onSelect={(range) =>
            range?.from && setSelected({ from: range.from, to: range.to })
          }
        />
      );
    }

    function MultipleDateExample() {
      const [selected, setSelected] = useState<Date[]>([
        new Date(),
        addDays(new Date(), 2),
        addDays(new Date(), 5),
      ]);
      return (
        <Calendar
          mode="multiple"
          selected={selected}
          onSelect={(dates) => dates && setSelected(dates)}
          required
        />
      );
    }

    function TwoMonthsExample() {
      const [selected, setSelected] = useState<{ from: Date; to?: Date }>({
        from: subDays(new Date(), 7),
        to: new Date(),
      });
      return (
        <Calendar
          mode="range"
          selected={selected}
          onSelect={(range) =>
            range?.from && setSelected({ from: range.from, to: range.to })
          }
          numberOfMonths={2}
        />
      );
    }

    function DropdownCaptionExample() {
      const [selected, setSelected] = useState<Date | undefined>(new Date());
      return (
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          captionLayout="dropdown"
          fromYear={2020}
          toYear={2030}
        />
      );
    }

    function DropdownMonthsExample() {
      const [selected, setSelected] = useState<Date | undefined>(new Date());
      return (
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          captionLayout="dropdown-months"
          fromYear={2020}
          toYear={2030}
        />
      );
    }

    function DropdownYearsExample() {
      const [selected, setSelected] = useState<Date | undefined>(new Date());
      return (
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          captionLayout="dropdown-years"
          fromYear={2020}
          toYear={2030}
        />
      );
    }

    function WeekNumbersExample() {
      const [selected, setSelected] = useState<Date | undefined>(new Date());
      return (
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          showWeekNumber
        />
      );
    }

    function DisabledDatesExample() {
      const [selected, setSelected] = useState<Date | undefined>(new Date());
      return (
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          disabled={(date) =>
            date < new Date() || date > addDays(new Date(), 30)
          }
        />
      );
    }

    function HiddenOutsideDaysExample() {
      const [selected, setSelected] = useState<Date | undefined>(new Date());
      return (
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          showOutsideDays={false}
        />
      );
    }

    return (
      <div className="w-full max-w-6xl space-y-12">
        {/* Selection Modes */}
        <section className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Selection Modes</h3>
            <p className="text-muted-foreground text-sm">
              Different modes for single date, date range, or multiple date
              selection.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <div>
                <p className="font-medium">Single Date</p>
                <p className="text-muted-foreground text-xs">Select one date</p>
              </div>
              <SingleDateExample />
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Date Range</p>
                <p className="text-muted-foreground text-xs">
                  Select start and end dates
                </p>
              </div>
              <RangeDateExample />
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Multiple Dates</p>
                <p className="text-muted-foreground text-xs">
                  Select multiple individual dates
                </p>
              </div>
              <MultipleDateExample />
            </div>
          </div>
        </section>

        {/* Caption Layouts */}
        <section className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Caption Layouts</h3>
            <p className="text-muted-foreground text-sm">
              Different styles for the month/year header with label or dropdown
              navigation.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <div>
                <p className="font-medium">Label Caption (Default)</p>
                <p className="text-muted-foreground text-xs">
                  Simple text label with arrows
                </p>
              </div>
              <SingleDateExample />
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Dropdown Caption</p>
                <p className="text-muted-foreground text-xs">
                  Dropdown selectors for month and year
                </p>
              </div>
              <DropdownCaptionExample />
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Dropdown Months Only</p>
                <p className="text-muted-foreground text-xs">
                  Month dropdown with year label
                </p>
              </div>
              <DropdownMonthsExample />
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Dropdown Years Only</p>
                <p className="text-muted-foreground text-xs">
                  Year dropdown with month label
                </p>
              </div>
              <DropdownYearsExample />
            </div>
          </div>
        </section>

        {/* Multiple Months */}
        <section className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Multiple Months</h3>
            <p className="text-muted-foreground text-sm">
              Display multiple months side-by-side for easier range selection.
            </p>
          </div>
          <div className="flex justify-center">
            <TwoMonthsExample />
          </div>
        </section>

        {/* Additional Features */}
        <section className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Additional Features</h3>
            <p className="text-muted-foreground text-sm">
              Week numbers, disabled dates, and outside day visibility options.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <div>
                <p className="font-medium">Week Numbers</p>
                <p className="text-muted-foreground text-xs">
                  Show ISO week numbers
                </p>
              </div>
              <WeekNumbersExample />
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Disabled Dates</p>
                <p className="text-muted-foreground text-xs">
                  Restrict selectable dates
                </p>
              </div>
              <DisabledDatesExample />
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Hidden Outside Days</p>
                <p className="text-muted-foreground text-xs">
                  Hide days from adjacent months
                </p>
              </div>
              <HiddenOutsideDaysExample />
            </div>
          </div>
        </section>

        {/* Button Variants */}
        <section className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">
              Navigation Button Variants
            </h3>
            <p className="text-muted-foreground text-sm">
              Customize the appearance of navigation arrow buttons.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {(
              [
                "default",
                "outline",
                "secondary",
                "ghost",
                "destructive",
                "link",
              ] as const
            ).map((variant) => {
              function ButtonVariantExample() {
                const [selected, setSelected] = useState<Date | undefined>(
                  new Date(),
                );
                return (
                  <Calendar
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    buttonVariant={variant}
                  />
                );
              }

              return (
                <div key={variant} className="space-y-3">
                  <div>
                    <p className="font-medium capitalize">{variant} Buttons</p>
                    <p className="text-muted-foreground text-xs">
                      Navigation button variant
                    </p>
                  </div>
                  <ButtonVariantExample />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  },
};

/**
 * Interactive playground for testing Calendar props.
 */
export const Interactive: Story = {
  args: {
    mode: "single",
    showOutsideDays: true,
    captionLayout: "label",
    buttonVariant: "ghost",
  },
  render: (args) => {
    function InteractiveCalendar() {
      const [selected, setSelected] = useState<Date | undefined>(new Date());

      return (
        <Calendar
          {...args}
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />
      );
    }

    return <InteractiveCalendar />;
  },
};
