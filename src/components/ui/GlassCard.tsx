import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  premium?: boolean;
};

export default function GlassCard({
  children,
  className,
  dark = false,
  premium = false,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300 md:p-8",
        premium && "glass-premium",
        !premium && dark && "glass-dark text-white",
        !premium && !dark && "glass text-navy",
        className
      )}
    >
      {children}
    </div>
  );
}
