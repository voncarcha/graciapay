import React from "react";

type ButtonVariant = "default" | "outlined";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses = "px-4 py-2 rounded-full transition-all duration-300 cursor-pointer font-[500]";

const variantClasses: Record<ButtonVariant, string> = {
  default: "text-white border-transparent h-[44px] bg-gradient-to-r from-primary to-red hover:bg-gradient-to-l",
  outlined: "border-2 text-red border-red hover:border-primary hover:text-primary",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;


