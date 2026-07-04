"use client";

import { useTranslations } from "next-intl";
import { Baby, BookMarked, GraduationCap } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInUp from "@/components/ui/FadeInUp";
import BackgroundSection from "@/components/ui/BackgroundSection";
import { IMAGES } from "@/lib/images";

const classItems = [
  { key: "primary" as const, icon: Baby, grades: "1–4" },
  { key: "middle" as const, icon: BookMarked, grades: "5–9" },
  { key: "upper" as const, icon: GraduationCap, grades: "10–11" },
];

export default function Classes() {
  const t = useTranslations("classes");

  return (
    <BackgroundSection
      id="classes"
      image={IMAGES.classes}
      alt="O'quvchilar darsda"
      overlay="soft"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-8 md:grid-cols-3">
          {classItems.map(({ key, icon: Icon, grades }, index) => (
            <FadeInUp key={key} delay={index * 0.15}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white/90 shadow-elegant backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-gold">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="bg-gradient-to-br from-navy via-navy-light to-navy px-8 py-12 text-center">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold/80">
                    {grades}
                  </span>
                  <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-gold/30 bg-white/10 shadow-gold transition-transform duration-500 group-hover:scale-110">
                    <Icon className="text-gold-light" size={36} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-navy">
                    {t(`${key}.title`)}
                  </h3>
                  <div className="my-4 h-px w-12 bg-gold/40" />
                  <p className="leading-relaxed text-muted">
                    {t(`${key}.description`)}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </BackgroundSection>
  );
}
