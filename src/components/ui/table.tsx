import * as React from "react";

import { cn } from "@/lib/utils";

type TableProps = React.ComponentProps<"table">;

/**
 * Root table component with automatic horizontal scrolling container.
 * Wraps standard HTML table element with responsive overflow behavior.
 */
function Table({ className, ...props }: TableProps) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}

type TableHeaderProps = React.ComponentProps<"thead">;

/**
 * Table header section for column headings.
 * Use with TableHead for individual header cells.
 */
function TableHeader({ className, ...props }: TableHeaderProps) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}

type TableBodyProps = React.ComponentProps<"tbody">;

/**
 * Table body section for data rows.
 * Use with TableRow and TableCell for row content.
 */
function TableBody({ className, ...props }: TableBodyProps) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

type TableFooterProps = React.ComponentProps<"tfoot">;

/**
 * Table footer section for summary rows.
 * Typically used for totals or aggregated data.
 */
function TableFooter({ className, ...props }: TableFooterProps) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

type TableRowProps = React.ComponentProps<"tr">;

/**
 * Table row with hover and selection states.
 * Add `data-state="selected"` attribute to highlight row.
 */
function TableRow({ className, ...props }: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className,
      )}
      {...props}
    />
  );
}

type TableHeadProps = React.ComponentProps<"th">;

/**
 * Table header cell for column titles.
 * Use within TableHeader > TableRow.
 */
function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  );
}

type TableCellProps = React.ComponentProps<"td">;

/**
 * Table data cell for row content.
 * Use within TableBody > TableRow.
 */
function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  );
}

type TableCaptionProps = React.ComponentProps<"caption">;

/**
 * Table caption for accessibility and description.
 * Rendered below the table by default.
 */
function TableCaption({ className, ...props }: TableCaptionProps) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  type TableProps,
  type TableHeaderProps,
  type TableBodyProps,
  type TableFooterProps,
  type TableHeadProps,
  type TableRowProps,
  type TableCellProps,
  type TableCaptionProps,
};
