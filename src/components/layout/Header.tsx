"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { GraduationCap, Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

const navKeys = [
  "about",
  "subjects",
  "classes",
  "admission",
  "leadership",
  "activities",
  "testimonials",
  "location",
  "contact",
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-gold/10 bg-white/90 shadow-glass backdrop-blur-xl"
          : "bg-gradient-to-b from-navy/40 to-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <a
          href="#hero"
          className={cn(
            "group flex items-center gap-3 transition-opacity hover:opacity-90",
            scrolled ? "text-navy" : "text-white"
          )}
        >
          <div
            className={cn(
              "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border shadow-gold transition-all duration-500 md:h-12 md:w-12",
              scrolled
                ? "border-gold/30 bg-gradient-to-br from-navy to-navy/80"
                : "border-gold-light/40 bg-gradient-to-br from-gold/90 to-gold-light/80"
            )}
          >
            {/* subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
            <GraduationCap
              size={24}
              strokeWidth={1.75}
              className={cn(
                "relative z-10 transition-transform duration-500 group-hover:scale-110",
                scrolled ? "text-gold" : "text-navy"
              )}
            />
          </div>
          <div className="hidden sm:block">
            <span className="block font-serif text-lg leading-none tracking-wide md:text-xl">
              263-MTM
            </span>
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.25em] transition-colors",
                scrolled ? "text-gold" : "text-gold-light"
              )}
            >
              Mirobod
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className={cn(
                "relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-gold after:to-gold-light after:transition-transform after:duration-300 hover:after:scale-x-100",
                scrolled
                  ? "text-navy/75 hover:bg-gold/5 hover:text-gold"
                  : "text-white/85 hover:bg-white/5 hover:text-gold-light"
              )}
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            className={cn(
              "rounded-xl border p-2 transition-all duration-300 xl:hidden",
              scrolled
                ? "border-gold/20 text-navy hover:bg-gold/10 hover:shadow-gold"
                : "border-white/20 text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menyu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="animate-in slide-in-from-top-4 fade-in border-t border-gold/10 bg-white/95 px-4 py-6 backdrop-blur-xl duration-300 xl:hidden">
          <div className="flex flex-col gap-1">
            {navKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-navy/80 transition-all duration-200 hover:translate-x-1 hover:bg-gold/10 hover:text-gold"
              >
                {t(key)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}