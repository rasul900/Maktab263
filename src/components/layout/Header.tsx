"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/lib/images";

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
            "flex items-center gap-3 transition-opacity hover:opacity-90",
            scrolled ? "text-navy" : "text-white"
          )}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-gold/30 shadow-gold md:h-11 md:w-11">
            <Image
              src={IMAGES.schoolLogo}
              alt=""
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div className="hidden sm:block">
            <span className="block font-serif text-lg leading-none md:text-xl">
              263-MTM
            </span>
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.2em]",
                scrolled ? "text-gold" : "text-gold-light"
              )}
            >
              Mirobod
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-4 xl:flex xl:gap-5">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className={cn(
                "relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full",
                scrolled
                  ? "text-navy/75 hover:text-gold"
                  : "text-white/85 hover:text-gold-light"
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
              "rounded-xl border p-2 transition xl:hidden",
              scrolled
                ? "border-gold/20 text-navy hover:bg-gold/10"
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
        <nav className="border-t border-gold/10 bg-white/95 px-4 py-6 backdrop-blur-xl xl:hidden">
          <div className="flex flex-col gap-1">
            {navKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-navy/80 transition hover:bg-gold/10 hover:text-gold"
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
