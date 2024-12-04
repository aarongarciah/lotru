import * as React from "react";
import { styled } from "@pigment-css/react";

const InputRoot = styled("input", {
  name: "InputRoot",
  slot: "root",
})<
  Omit<React.ComponentProps<"input">, "size"> & {
    size: "sm" | "md" | "lg" | "xl";
  }
>({
  appearance: "none",
  backgroundColor: "var(--color-background)",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  maxWidth: "var(--size-xs)",
  position: "relative",
  width: "var(--size-full)",
  "&:focus-visible": {
    "--ring-offset-width": "0px",
    "--ring-offset-color": "hsl(var(--color-background))",
    "--ring-offset-shadow": "0 0 0 var(--ring-offset-width) var(--ring-offset-color)",
    "--ring-width": "3px",
    "--ring-color": "hsl(var(--color-ring) / 20%)",
    "--ring-shadow": "0 0 0 calc(var(--ring-offset-width) + var(--ring-width)) var(--ring-color)",
    borderColor: "hsl(var(--color-ring))",
    boxShadow: "var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000)",
    outline: "none",
  },
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  '&[data-field="invalid"]': {
    borderColor: "hsl(var(--color-danger))",
  },
  '&[data-field="invalid"]:focus-visible': {
    "--ring-color": "hsl(var(--color-danger) / 20%)",
  },
  "&::placeholder": {
    color: "hsl(var(--color-mutedForeground))",
  },
  "&::placeholder:disabled": {
    color: "hsl(var(--color-mutedForeground))",
  },
  variants: [
    {
      props: { size: "sm" },
      style: {
        fontSize: "var(--fontSize-sm)",
        height: "calc(var(--size-unit) * 9)",
        minWidth: "calc(var(--size-unit) * 9)",
        paddingBlock: "calc(var(--spacing-unit) * 1.5)",
        paddingInline: "calc(var(--spacing-unit) * 2.5)",
      },
    },
    {
      props: { size: "md" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 10)",
        minWidth: "calc(var(--size-unit) * 10)",
        paddingBlock: "calc(var(--spacing-unit) * 2)",
        paddingInline: "calc(var(--spacing-unit) * 3)",
      },
    },
    {
      props: { size: "lg" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 11)",
        minWidth: "calc(var(--size-unit) * 11)",
        paddingBlock: "calc(var(--spacing-unit) * 2.5)",
        paddingInline: "calc(var(--spacing-unit) * 3.5)",
      },
    },
    {
      props: { size: "xl" },
      style: {
        fontSize: "var(--fontSize-lg)",
        height: "calc(var(--size-unit) * 12)",
        minWidth: "calc(var(--size-unit) * 12)",
        paddingBlock: "calc(var(--spacing-unit) * 3)",
        paddingInline: "calc(var(--spacing-unit) * 4)",
      },
    },
  ],
} as React.CSSProperties);

const Input = React.forwardRef<
  HTMLInputElement,
  Omit<React.ComponentPropsWithoutRef<"input">, "size"> & {
    size?: "sm" | "md" | "lg" | "xl";
  }
>(({ size = "md", ...props }, ref) => <InputRoot ref={ref} size={size} {...props} />);
Input.displayName = "Input";

export { Input };
