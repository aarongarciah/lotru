"use client";

import * as React from "react";
import * as Primitives from "@base_ui/react/Dialog";
import { styled } from "@pigment-css/react";
import { XIcon } from "lucide-react";

const Sheet = (props: React.ComponentPropsWithoutRef<typeof Primitives.Root>) => {
  return <Primitives.Root {...props} />;
};
Sheet.displayName = "Sheet";

const SheetTrigger = React.forwardRef<
  React.ElementRef<typeof Primitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof Primitives.Trigger>
>(({ ...props }, ref) => {
  return <Primitives.Trigger ref={ref} {...props} />;
});
SheetTrigger.displayName = "SheetTrigger";

const SheetClose = React.forwardRef<
  React.ElementRef<typeof Primitives.Close>,
  React.ComponentPropsWithoutRef<typeof Primitives.Close>
>(({ ...props }, ref) => {
  return <Primitives.Close ref={ref} {...props} />;
});
SheetClose.displayName = "SheetClose";

const SheetOverlay = styled(Primitives.Backdrop, {
  name: "SheetOverlay",
  slot: "overlay",
})({
  backgroundColor: "hsl(var(--color-overlay))",
  inset: 0,
  position: "fixed",
  zIndex: "var(--zIndex-overlay)",
});

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof Primitives.Popup> {
  side: "left" | "right";
}

const SheetContent = styled(Primitives.Popup, {
  name: "SheetContent",
  slot: "content",
})<SheetContentProps>({
  backgroundColor: "hsl(var(--color-surface))",
  bottom: 0,
  boxShadow: "var(--shadow-xl)",
  boxSizing: "border-box",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  maxWidth: "70%",
  opacity: 0,
  padding: "calc(var(--spacing-unit) * 6)",
  position: "fixed",
  top: 0,
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "transform, opacity",
  transitionTimingFunction: "var(--easing-default)",
  width: "var(--size-full)",
  zIndex: "var(--zIndex-modal)",
  "&:focus-visible": {
    outline: "none",
  },
  "&[data-state='open']": {
    opacity: 1,
    transform: "translateX(0)",
  },
  "&[data-entering]": {
    opacity: 0,
  },
  "@media (min-width: 768px)": {
    maxWidth: "var(--size-sm)",
  },
  variants: [
    {
      props: { side: "left" },
      style: {
        left: 0,
        transform: "translateX(-100%)",
        "&[data-entering]": {
          transform: "translateX(-100%)",
        },
      },
    },
    {
      props: { side: "right" },
      style: {
        right: 0,
        transform: "translateX(100%)",
        "&[data-entering]": {
          transform: "translateX(100%)",
        },
      },
    },
  ],
});

const SheetHeaderRoot = styled("div", {
  name: "SheetHeader",
  slot: "header",
})({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 2)",
});

const SheedHeaderClose = styled("button", {
  name: "SheetHeaderClose",
  slot: "close",
})({
  appearance: "none",
  background: "none",
  border: "none",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  cursor: "pointer",
  opacity: 0.7,
  padding: 0,
  position: "absolute",
  right: "calc(var(--spacing-unit) * 4)",
  top: "calc(var(--spacing-unit) * 4)",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "background-color",
  transitionTimingFunction: "var(--easing-default)",
  "&:hover:not(:disabled)": {
    opacity: 1,
  },
  "& svg": {
    height: "calc(var(--size-unit) * 4)",
    width: "calc(var(--size-unit) * 4)",
  },
});

const SheetHeader = React.forwardRef<
  React.ElementRef<typeof SheetHeaderRoot>,
  React.ComponentPropsWithoutRef<typeof SheetHeaderRoot>
>(({ children, className, ...props }, ref) => {
  return (
    <SheetHeaderRoot ref={ref} className={className} {...props}>
      {children}
      <Primitives.Close
        render={
          <SheedHeaderClose>
            <XIcon />
          </SheedHeaderClose>
        }
      />
    </SheetHeaderRoot>
  );
});

const SheetTitle = styled(Primitives.Title)({
  color: "hsl(var(--color-foreground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-lg)",
  lineHeight: "var(--lineHeight-normal)",
  fontWeight: "var(--fontWeight-semibold)",
  marginBlock: 0,
});

const SheetDescription = styled(Primitives.Description, {
  name: "SheetDescription",
  slot: "description",
})({
  color: "hsl(var(--color-mutedForeground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-compact)",
  marginBlock: 0,
});

const SheetFooter = styled("div", {
  name: "SheetFooter",
  slot: "footer",
})({
  display: "flex",
  justifyContent: "flex-end",
});

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
};