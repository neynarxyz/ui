import * as React from "react";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";

import { cn } from "@/lib/utils";
import { menuItemVariants, type MenuItemVariant } from "@/lib/variants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckIcon } from "lucide-react";

type MenubarProps = MenubarPrimitive.Props;

/**
 * Horizontal menubar for application-level navigation and actions.
 * Typically used at the top of an application with File, Edit, View, Help menus.
 */
function Menubar({ className, ...props }: MenubarProps) {
  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={cn(
        "bg-background h-9 gap-1 rounded-md border p-1 shadow-xs flex items-center",
        className,
      )}
      {...props}
    />
  );
}

type MenubarMenuProps = React.ComponentProps<typeof DropdownMenu>;

/** Individual menu within the menubar. Manages open/close state for a single menu. */
function MenubarMenu({ ...props }: MenubarMenuProps) {
  return <DropdownMenu data-slot="menubar-menu" {...props} />;
}

type MenubarGroupProps = React.ComponentProps<typeof DropdownMenuGroup>;

/** Groups related menu items together with optional label. */
function MenubarGroup({ ...props }: MenubarGroupProps) {
  return <DropdownMenuGroup data-slot="menubar-group" {...props} />;
}

type MenubarPortalProps = React.ComponentProps<typeof DropdownMenuPortal>;

/** Renders menu content in a portal. Automatically used by MenubarContent. */
function MenubarPortal({ ...props }: MenubarPortalProps) {
  return <DropdownMenuPortal data-slot="menubar-portal" {...props} />;
}

type MenubarTriggerProps = React.ComponentProps<typeof DropdownMenuTrigger>;

/** Button that opens a menu. Use `render` prop to customize. */
function MenubarTrigger({ className, ...props }: MenubarTriggerProps) {
  return (
    <DropdownMenuTrigger
      data-slot="menubar-trigger"
      className={cn(
        "hover:bg-muted aria-expanded:bg-muted rounded-sm px-2 py-1 text-sm font-medium flex items-center outline-hidden select-none",
        className,
      )}
      {...props}
    />
  );
}

type MenubarContentProps = React.ComponentProps<typeof DropdownMenuContent>;

/**
 * Menu content container with automatic portal rendering.
 * Includes backdrop blur (frosted glass effect) and smooth animations.
 */
function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: MenubarContentProps) {
  return (
    <DropdownMenuContent
      data-slot="menubar-content"
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-md p-1 shadow-md ring-1 duration-100",
        className,
      )}
      {...props}
    />
  );
}

type MenubarItemProps = MenuPrimitive.Item.Props & {
  /** Adds left padding for items in menus with leading icons/checkboxes. */
  inset?: boolean;
  /** Visual variant for different action types. @default "default" */
  variant?: MenuItemVariant;
};

/**
 * Interactive menu item. Supports variants (default, destructive, success, warning, info).
 * Use `inset` for items in menus with icons/checkboxes.
 */
function MenubarItem({
  className,
  inset = false,
  variant = "default",
  ...props
}: MenubarItemProps) {
  return (
    <MenuPrimitive.Item
      data-slot="menubar-item"
      className={cn(
        menuItemVariants({ variant, inset }),
        "group/menubar-item",
        className,
      )}
      {...props}
    />
  );
}

type MenubarCheckboxItemProps = MenuPrimitive.CheckboxItem.Props;

/**
 * Menu item with checkbox for toggling independent boolean options.
 * Displays checkmark when checked. Use for multiple toggleable settings.
 */
function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: MenubarCheckboxItemProps) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm data-disabled:opacity-50 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="left-2 size-4 [&_svg:not([class*='size-'])]:size-4 pointer-events-none absolute flex items-center justify-center">
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

type MenubarRadioGroupProps = React.ComponentProps<
  typeof DropdownMenuRadioGroup
>;

/** Container for radio items. Manages single selection from mutually exclusive options. */
function MenubarRadioGroup({ ...props }: MenubarRadioGroupProps) {
  return <DropdownMenuRadioGroup data-slot="menubar-radio-group" {...props} />;
}

type MenubarRadioItemProps = MenuPrimitive.RadioItem.Props;

/**
 * Menu item with radio button for selecting one option from a group.
 * Must be wrapped in MenubarRadioGroup. Displays checkmark when selected.
 */
function MenubarRadioItem({
  className,
  children,
  ...props
}: MenubarRadioItemProps) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      <span className="left-2 size-4 [&_svg:not([class*='size-'])]:size-4 pointer-events-none absolute flex items-center justify-center">
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
}

type MenubarLabelProps = React.ComponentProps<typeof DropdownMenuLabel>;

/** Non-interactive label for grouping menu items. Use inside MenubarGroup. */
function MenubarLabel({ className, inset, ...props }: MenubarLabelProps) {
  return (
    <DropdownMenuLabel
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className,
      )}
      {...props}
    />
  );
}

type MenubarSeparatorProps = React.ComponentProps<typeof DropdownMenuSeparator>;

/** Visual separator between menu items or groups. */
function MenubarSeparator({ className, ...props }: MenubarSeparatorProps) {
  return (
    <DropdownMenuSeparator
      data-slot="menubar-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

type MenubarShortcutProps = React.ComponentProps<typeof DropdownMenuShortcut>;

/**
 * Keyboard shortcut hint displayed on the right side of menu items.
 * Shows in muted color, highlights on focus. For display only, doesn't bind keys.
 */
function MenubarShortcut({ className, ...props }: MenubarShortcutProps) {
  return (
    <DropdownMenuShortcut
      data-slot="menubar-shortcut"
      className={cn(
        "text-muted-foreground group-focus/menubar-item:text-accent-foreground text-xs tracking-widest ml-auto",
        className,
      )}
      {...props}
    />
  );
}

type MenubarSubProps = React.ComponentProps<typeof DropdownMenuSub>;

/** Container for nested submenu. Manages open/close state for the submenu. */
function MenubarSub({ ...props }: MenubarSubProps) {
  return <DropdownMenuSub data-slot="menubar-sub" {...props} />;
}

type MenubarSubTriggerProps = React.ComponentProps<
  typeof DropdownMenuSubTrigger
> & {
  /** Adds left padding for alignment with items that have icons/checkboxes. */
  inset?: boolean;
};

/**
 * Menu item that opens a submenu on hover or click.
 * Displays chevron icon automatically. Use inside MenubarSub.
 */
function MenubarSubTrigger({
  className,
  inset,
  ...props
}: MenubarSubTriggerProps) {
  return (
    <DropdownMenuSubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground gap-2 rounded-sm px-2 py-1.5 text-sm data-[inset]:pl-8 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

type MenubarSubContentProps = React.ComponentProps<
  typeof DropdownMenuSubContent
>;

/**
 * Content container for submenu items.
 * Positioned relative to trigger, includes backdrop blur and animations.
 */
function MenubarSubContent({ className, ...props }: MenubarSubContentProps) {
  return (
    <DropdownMenuSubContent
      data-slot="menubar-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-32 rounded-md p-1 shadow-lg ring-1 duration-100",
        className,
      )}
      {...props}
    />
  );
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  type MenubarProps,
  type MenubarPortalProps,
  type MenubarMenuProps,
  type MenubarTriggerProps,
  type MenubarContentProps,
  type MenubarGroupProps,
  type MenubarSeparatorProps,
  type MenubarLabelProps,
  type MenubarItemProps,
  type MenubarShortcutProps,
  type MenubarCheckboxItemProps,
  type MenubarRadioGroupProps,
  type MenubarRadioItemProps,
  type MenubarSubProps,
  type MenubarSubTriggerProps,
  type MenubarSubContentProps,
};
