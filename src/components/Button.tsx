import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25",
  secondary:
    "bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/25",
  ghost: "bg-transparent text-foreground hover:bg-white/60 hover:text-primary",
  outline:
    "border border-slate-200 bg-white text-slate-900 hover:border-primary hover:text-primary hover:bg-slate-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-6 text-base",
};

export function Button(props: ButtonAsButtonProps): JSX.Element;
export function Button(props: ButtonAsLinkProps): JSX.Element;
export function Button(
  props: ButtonAsButtonProps | ButtonAsLinkProps,
): JSX.Element {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    href,
    ...rest
  } = props as ButtonAsButtonProps & ButtonAsLinkProps;

  const classes = clsx(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as Omit<ButtonAsLinkProps, "href" | "children">)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as Omit<ButtonAsButtonProps, "children">)}>
      {children}
    </button>
  );
}

export default Button;
