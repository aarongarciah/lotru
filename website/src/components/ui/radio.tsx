import * as React from "react";
import * as Primitives from "@base_ui/react/Radio";
import { styled } from "@pigment-css/react";

const RadioRoot = styled(Primitives.Root, {
  name: "RadioRoot",
  slot: "root",
})<React.ComponentProps<typeof Primitives.Root>>({
  alignItems: "center",
  border: "1px solid hsl(var(--color-border))",
  backgroundColor: "hsl(var(--color-muted))",
  borderRadius: "var(--borderRadius-full)",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: 0,
  height: "calc(var(--size-unit) * 5)",
  justifyContent: "center",
  padding: 0,
  transitionDuration: "var(--duration-fast)",
  transitionProperty: "background-color",
  transitionTimingFunction: "var(--easing-default)",
  width: "calc(var(--size-unit) * 5)",
  "&:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-background))",
  },
  "&:focus-visible": {
    "--ring-offset-width": "2px",
    "--ring-offset-color": "hsl(var(--color-background))",
    "--ring-offset-shadow": "0 0 0 var(--ring-offset-width) var(--ring-offset-color)",
    "--ring-width": "2px",
    "--ring-color": "hsl(var(--color-ring))",
    "--ring-shadow": "0 0 0 calc(var(--ring-offset-width) + var(--ring-width)) var(--ring-color)",
    boxShadow: "var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000)",
    outline: "none",
  },
  "&[data-disabled]": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  "&[data-radio='checked']": {
    backgroundColor: "hsl(var(--color-primary))",
    border: "none",
  },
  "&[data-radio='checked']:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-primary) / 80%)",
  },
} as React.CSSProperties);

const RadioIndicator = styled(Primitives.Indicator, {
  name: "RadioIndicator",
  slot: "indicator",
})<React.ComponentProps<typeof Primitives.Indicator>>({
  borderRadius: "var(--borderRadius-full)",
  boxSizing: "border-box",
  flexShrink: 0,
  height: "calc(var(--size-unit) * 2)",
  width: "calc(var(--size-unit) * 2)",
  "&[data-radio='unchecked']": {
    display: "none",
  },
  "&[data-radio='checked']": {
    backgroundColor: "hsl(var(--color-primaryForeground))",
  },
});

const Radio = (props: React.ComponentProps<typeof RadioRoot>) => (
  <RadioRoot {...props}>
    <RadioIndicator />
  </RadioRoot>
);
Radio.displayName = "Radio";

export { Radio };
