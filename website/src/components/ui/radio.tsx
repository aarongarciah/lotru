import * as React from "react";
import * as Primitives from "@base_ui/react/Radio";
import { styled } from "@pigment-css/react";

const RadioRoot = styled(Primitives.Root, {
  name: "RadioRoot",
  slot: "root",
})({
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
  margin: 0,
  outline: "none",
  padding: 0,
  transitionDuration: "var(--duration-fast)",
  transitionProperty: "background-color",
  transitionTimingFunction: "var(--easing-default)",
  width: "calc(var(--size-unit) * 5)",
  "&:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-background))",
  },
  "&:focus-visible": {
    outline: "2px solid hsl(var(--color-ring))",
    outlineOffset: "2px",
  },
  "&[data-disabled]": {
    cursor: "not-allowed",
  },
  "&[data-radio='checked']": {
    backgroundColor: "hsl(var(--color-primary))",
    border: "none",
  },
  "&[data-radio='checked']:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-primary) / 80%)",
  },
  "&[data-radio='checked'][data-disabled]": {
    backgroundColor: "hsl(var(--color-muted))",
    border: "1px solid hsl(var(--color-border))",
  },
});

const RadioIndicator = styled(Primitives.Indicator, {
  name: "RadioIndicator",
  slot: "indicator",
})({
  borderRadius: "var(--borderRadius-full)",
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

interface RadioProps extends React.ComponentPropsWithoutRef<typeof RadioRoot> {}

const Radio = React.forwardRef<React.ElementRef<typeof RadioRoot>, RadioProps>(({ ...props }: RadioProps, ref) => (
  <RadioRoot ref={ref} tabIndex={0} {...props}>
    <RadioIndicator />
  </RadioRoot>
));
Radio.displayName = "Radio";

export { Radio };