"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (next: "uz" | "ru") => {
    router.replace(pathname, { locale: next });
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-navy/10 bg-white/60 p-1 backdrop-blur-sm">
      {(["uz", "ru"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => switchLocale(lang)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 md:px-4 md:text-sm",
            locale === lang
              ? "bg-navy text-white shadow-sm"
              : "text-navy/70 hover:text-navy"
          )}
          aria-label={lang === "uz" ? "O'zbek tili" : "Русский язык"}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
