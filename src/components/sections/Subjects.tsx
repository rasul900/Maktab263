"use client";

import { useTranslations } from "next-intl";
import {
  BookOpen,
  Calculator,
  Atom,
  FlaskConical,
  Leaf,
  Globe,
  Landmark,
  Monitor,
  Languages,
  MessageCircle,
  Dumbbell,
  PenLine,
} from "lucide-react";
import BackgroundSection from "@/components/ui/BackgroundSection";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInUp from "@/components/ui/FadeInUp";
import { IMAGES } from "@/lib/images";

const subjectKeys = [
  "native",
  "literature",
  "math",
  "physics",
  "chemistry",
  "biology",
  "geography",
  "history",
  "informatics",
  "english",
  "russian",
  "pe",
] as const;

const icons = {
  native: PenLine,
  literature: BookOpen,
  math: Calculator,
  physics: Atom,
  chemistry: FlaskConical,
  biology: Leaf,
  geography: Globe,
  history: Landmark,
  informatics: Monitor,
  english: Languages,
  russian: MessageCircle,
  pe: Dumbbell,
};

export default function Subjects() {
  const t = useTranslations("subjects");

  return (
    <BackgroundSection
      id="subjects"
      image={IMAGES.subjects}
      alt="Zamonaviy sinf xonasi"
      overlay="section"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} light />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {subjectKeys.map((key, index) => {
            const Icon = icons[key];
            return (
              <FadeInUp key={key} delay={index * 0.04}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-gold/40 hover:bg-white/15 hover:shadow-gold md:p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-navy/40 shadow-inner-gold transition-all group-hover:scale-110 group-hover:border-gold/50">
                    <Icon className="text-gold-light" size={26} />
                  </div>
                  <p className="relative font-medium text-white">{t(`items.${key}`)}</p>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </BackgroundSection>
  );
}
