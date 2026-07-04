"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  image: string;
  alt: string;
  children: ReactNode;
  className?: string;
  overlay?: "hero" | "section" | "light" | "soft";
  id?: string;
  minHeight?: string;
};

export default function BackgroundSection({
  image,
  alt,
  children,
  className = "",
  overlay = "section",
  id,
  minHeight = "min-h-0",
}: Props) {
  const overlayClass = {
    hero: "bg-hero-gradient",
    section: "bg-section-overlay",
    light:
      "bg-gradient-to-br from-navy/75 via-navy/55 to-navy/40",
    soft: "bg-gradient-to-b from-soft/70 via-soft/50 to-soft/80",
  };

  return (
    <section
      id={id}
      className={cn("relative isolate overflow-hidden", minHeight, className)}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover scale-105"
          sizes="100vw"
          priority={overlay === "hero"}
        />
        <div className={cn("absolute inset-0", overlayClass[overlay])} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,97,0.12),transparent_55%)]" />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
