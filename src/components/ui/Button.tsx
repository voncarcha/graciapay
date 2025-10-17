import React from "react";
import Link from "next/link";

type ButtonVariant = "default" | "outlined" | "outlinedWhite" | "large";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href">;

const baseClasses =
  "px-4 py-2 rounded-full transition-all duration-300 cursor-pointer font-[500]";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "text-white border-transparent h-[44px] bg-gradient-to-r from-primary to-red hover:bg-gradient-to-l",
  large:
    "text-white text-lg border-transparent h-[54px] bg-gradient-to-r from-primary to-red hover:bg-gradient-to-l",
  outlined:
    "border-2 text-red border-red hover:border-primary hover:text-primary",
  outlinedWhite:
    "border-2 text-white border-white hover:opacity-80",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className = "",
  href,
  ...props
}) => {
  const classes =
    `${baseClasses} ${variantClasses[variant]} ${className}`.trim();
  if (href) {
    return (
      <Link
        href={href}
        className={`${classes} flex items-center justify-center`}
        aria-label={typeof children === "string" ? children : undefined}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
