import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md active:translate-y-px",
        secondary:
          "bg-violet-600 text-white shadow-sm hover:bg-violet-700 hover:shadow-md active:translate-y-px",
        outline:
          "border border-slate-300 bg-white text-slate-900 hover:border-blue-300 hover:bg-blue-50",
        ghost: "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-3 text-sm",
        lg: "px-6 py-3.5 text-base",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonStyles>;

type CommonProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { children, className, fullWidth, variant, size } = props;
  const classes = twMerge(buttonStyles({ variant, size, fullWidth }), className);

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    const isInternal = href.startsWith("/");

    if (isInternal) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;
