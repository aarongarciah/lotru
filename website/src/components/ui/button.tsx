import * as React from "react";
import { keyframes, styled } from "@pigment-css/react";
import { LoaderCircleIcon } from "lucide-react";

const spinKeyFrames = keyframes({
  from: { transform: "rotate(0)" },
  to: { transform: "rotate(360deg)" },
});

interface ButtonRootProps extends React.ComponentPropsWithoutRef<"button"> {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant: "solid" | "outline" | "ghost";
}

const ButtonRoot = styled("button", {
  name: "ButtonRoot",
  slot: "root",
})<ButtonRootProps>({
  alignItems: "center",
  appearance: "none",
  borderRadius: "var(--borderRadius-sm)",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  overflow: "hidden",
  position: "relative",
  width: "var(--size-fit)",
  "&:focus-visible": {
    outline: "2px solid hsl(var(--color-ring))",
    outlineOffset: "2px",
  },
  "& svg": {
    flexShrink: 0,
    fontSize: "1.1em",
    height: "1.1em",
    width: "1.1em",
  },
  variants: [
    {
      props: { variant: "solid" },
      style: {
        backgroundColor: "hsl(var(--color-primary))",
        border: "none",
        color: "hsl(var(--color-primaryForeground))",
        transitionDuration: "var(--duration-normal)",
        transitionProperty: "background-color",
        transitionTimingFunction: "var(--easing-default)",
        "&:hover": {
          backgroundColor: "hsl(var(--color-primary) / 80%)",
        },
        "&:active": {
          backgroundColor: "hsl(var(--color-primary))",
        },
        "&:disabled": {
          backgroundColor: "hsl(var(--color-backgroundDisabled))",
          color: "hsl(var(--color-foregroundDisabled))",
        },
      },
    },
    {
      props: { variant: "outline" },
      style: {
        backgroundColor: "transparent",
        borderColor: "hsl(var(--color-border))",
        borderStyle: "solid",
        borderWidth: "1px",
        color: "hsl(var(--color-foreground))",
        transitionDuration: "var(--duration-normal)",
        transitionProperty: "background-color",
        transitionTimingFunction: "var(--easing-default)",
        "&:hover": {
          backgroundColor: "hsl(var(--color-backgroundHover))",
        },
        "&:active": {
          backgroundColor: "hsl(var(--color-backgroundPressed))",
        },
        "&:disabled": {
          backgroundColor: "hsl(var(--color-backgroundDisabled))",
          color: "hsl(var(--color-foregroundDisabled))",
        },
      },
    },
    {
      props: { variant: "ghost" },
      style: {
        backgroundColor: "transparent",
        border: "none",
        color: "hsl(var(--color-foreground))",
        transitionDuration: "var(--duration-normal)",
        transitionProperty: "background-color",
        transitionTimingFunction: "var(--easing-default)",
        "&:hover": {
          backgroundColor: "hsl(var(--color-backgroundHover))",
        },
        "&:active": {
          backgroundColor: "hsl(var(--color-backgroundPressed))",
        },
        "&:disabled": {
          backgroundColor: "transparent",
          color: "hsl(var(--color-foregroundDisabled))",
        },
      },
    },
    {
      props: { size: "xs" },
      style: {
        fontSize: "var(--fontSize-xs)",
        gap: "calc(var(--spacing-unit) * 2)",
        height: "calc(var(--size-unit) * 8)",
        lineHeight: "var(--lineHeight-tighter)",
        minWidth: "calc(var(--size-unit) * 8)",
        paddingInline: "calc(var(--spacing-unit) * 3)",
      },
    },
    {
      props: { size: "sm" },
      style: {
        gap: "calc(var(--spacing-unit) * 2)",
        height: "calc(var(--size-unit) * 9)",
        fontSize: "var(--fontSize-sm)",
        lineHeight: "var(--lineHeight-tight)",
        minWidth: "calc(var(--size-unit) * 9)",
        paddingInline: "calc(var(--spacing-unit) * 3.5)",
      },
    },
    {
      props: { size: "md" },
      style: {
        fontSize: "var(--fontSize-sm)",
        gap: "calc(var(--spacing-unit) * 2)",
        height: "calc(var(--size-unit) * 10)",
        lineHeight: "var(--lineHeight-tight)",
        minWidth: "calc(var(--size-unit) * 10)",
        paddingInline: "calc(var(--spacing-unit) * 4)",
      },
    },
    {
      props: { size: "lg" },
      style: {
        fontSize: "var(--fontSize-md)",
        gap: "calc(var(--spacing-unit) * 2)",
        height: "calc(var(--size-unit) * 11)",
        lineHeight: "var(--lineHeight-normal)",
        minWidth: "calc(var(--size-unit) * 11)",
        paddingInline: "calc(var(--spacing-unit) * 4.5)",
      },
    },
    {
      props: { size: "xl" },
      style: {
        fontSize: "var(--fontSize-md)",
        gap: "calc(var(--spacing-unit) * 2.5)",
        height: "calc(var(--size-unit) * 12)",
        lineHeight: "var(--lineHeight-normal)",
        minWidth: "calc(var(--size-unit) * 12)",
        paddingInline: "calc(var(--spacing-unit) * 5)",
      },
    },
    {
      props: { size: "2xl" },
      style: {
        fontSize: "var(--fontSize-lg)",
        gap: "calc(var(--spacing-unit) * 3)",
        height: "calc(var(--size-unit) * 16)",
        lineHeight: "var(--lineHeight-relaxed)",
        minWidth: "calc(var(--size-unit) * 16)",
        paddingInline: "calc(var(--spacing-unit) * 7)",
      },
    },
  ],
});

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  isLoading?: boolean;
  loadingText?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "solid" | "outline" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      /**
       * Whether the button is disabled.
       */
      disabled,
      /**
       * Whether to show a loading spinner.
       */
      isLoading = false,
      /**
       * The text to show when the button is loading.
       */
      loadingText,
      /**
       * The button's size.
       */
      size = "md",
      /**
       * The button's style.
       */
      variant = "solid",
      ...props
    }: ButtonProps,
    ref
  ) => {
    const renderInner = () => {
      if (isLoading) {
        return (
          <React.Fragment>
            <LoaderCircleIcon
              style={{
                animation: `${spinKeyFrames} 1s linear infinite`,
              }}
            />
            {loadingText}
          </React.Fragment>
        );
      }

      return children;
    };

    return (
      <ButtonRoot ref={ref} disabled={disabled || isLoading} size={size} variant={variant} {...props}>
        {renderInner()}
      </ButtonRoot>
    );
  }
);
Button.displayName = "Button";

export { Button };
