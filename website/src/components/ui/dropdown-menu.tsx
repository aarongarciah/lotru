"use client";

import * as React from "react";
import * as Primitives from "@base_ui/react/Menu";
import { styled } from "@pigment-css/react";

const DropdownMenu = (props: React.ComponentProps<typeof Primitives.Root>) => (
  <Primitives.Root {...props} />
);
DropdownMenu.displayName = "DropdownMenu";

const DropdownMenuTrigger = (props: React.ComponentProps<typeof Primitives.Trigger>) => (
  <Primitives.Trigger {...props} />
);
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

const DropdownMenuPositioner = (props: React.ComponentProps<typeof Primitives.Positioner>) => (
  <Primitives.Positioner {...props} />
);
DropdownMenuPositioner.displayName = "DropdownMenuPositioner";

const DropdownMenuContent = styled(Primitives.Popup, {
  name: "DropdownMenuContent",
  slot: "content",
})<React.ComponentProps<typeof Primitives.Popup>>({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-lg)",
  boxShadow: "var(--shadow-md)",
  boxSizing: "border-box",
  minWidth: "8rem",
  padding: "var(--spacing-unit)",
  zIndex: "var(--zIndex-popover)",
  "&:focus-visible": {
    outline: "none",
  },
});

const DropdownMenuLabel = styled("div", {
  name: "DropdownMenuLabel",
  slot: "label",
})<React.ComponentProps<"div">>({
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-semibold)",
  paddingBlock: "calc(var(--spacing-unit) * 1.5)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
});

const DropdownMenuItem = styled(Primitives.Item, {
  name: "DropdownMenuItem",
  slot: "item",
})<React.ComponentProps<typeof Primitives.Item>>({
  alignItems: "center",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "flex",
  fontSize: "var(--fontSize-sm)",
  gap: "calc(var(--spacing-unit) * 2)",
  lineHeight: "var(--lineHeight-tight)",
  paddingBlock: "calc(var(--spacing-unit) * 1.5)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
  position: "relative",
  userSelect: "none",
  "&:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-primary) / 10%)",
  },
  "&:focus-visible": {
    outline: "none",
  },
  "&[data-disabled]": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  "& svg": {
    flexShrink: 0,
    fontSize: "1rem",
    height: "1rem",
    pointerEvents: "none",
    width: "1rem",
  },
});

const DropdownMenuShortcut = styled("span", {
  name: "DropdownMenuShortcut",
  slot: "shortcut",
})<React.ComponentProps<"span">>({
  boxSizing: "border-box",
  color: "hsl(var(--color-mutedForeground))",
  fontSize: "var(--fontSize-xs)",
  marginInlineStart: "auto",
});

const DropdownMenuSeparator = styled(Primitives.Separator, {
  name: "MenuSeparator",
  slot: "separator",
})<React.ComponentProps<typeof Primitives.Separator>>({
  backgroundColor: "hsl(var(--color-border))",
  boxSizing: "border-box",
  height: "1px",
  marginBlock: "var(--spacing-unit)",
  marginInline: "calc(var(--spacing-unit) * -1)",
});

const DropdownMenuGroup = Primitives.Group;

const DropdownMenuGroupLabel = styled(Primitives.GroupLabel, {
  name: "MenuGroupLabel",
  slot: "groupLabel",
})<React.ComponentProps<typeof Primitives.GroupLabel>>({
  boxSizing: "border-box",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-medium)",
  paddingBlock: "calc(var(--spacing-unit) * 1.5)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
});

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPositioner,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
};
