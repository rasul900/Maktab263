import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline" | "ghost";
  children: ReactNode;
};

export default function Button({
  variant = "primary",
  className,
  children,
  href = "#",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "relative overflow-hidden bg-gradient-to-r from-gold to-gold-light text-navy shadow-gold hover:shadow-elegant group border border-gold/30",
    outline:
      "border-2 border-white/60 text-white hover:bg-white/10 hover:border-gold/60 backdrop-blur-md",
    ghost: "text-navy hover:text-gold",
  };

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-9 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 md:text-base",
        variants[variant],
        className
      )}
      {...props}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-shine transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative z-10">{children}</span>
    </a>
  );
}
