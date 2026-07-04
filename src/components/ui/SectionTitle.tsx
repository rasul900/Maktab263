"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
  showDivider?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  light = false,
  className,
  showDivider = true,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={cn("mb-14 text-center md:mb-20", className)}
    >
      <div className="mb-4 flex items-center justify-center gap-4">
        <span className="gold-line hidden max-w-[80px] sm:block" />
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-[0.25em] md:text-sm",
            light ? "text-gold-light" : "text-gold"
          )}
        >
          {subtitle}
        </span>
        <span className="gold-line hidden max-w-[80px] sm:block" />
      </div>

      <h2
        className={cn(
          "font-serif text-3xl leading-tight md:text-4xl lg:text-5xl xl:text-6xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>

      {showDivider && (
        <div className="mx-auto mt-6 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-gold/40" />
          <span className="h-2 w-2 rotate-45 border border-gold bg-gold/20" />
          <span className="h-px w-8 bg-gold/40" />
        </div>
      )}
    </motion.div>
  );
}
