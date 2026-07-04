"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import BackgroundSection from "@/components/ui/BackgroundSection";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInUp from "@/components/ui/FadeInUp";
import { IMAGES } from "@/lib/images";

const activityKeys = [
  "sport",
  "science",
  "art",
  "olympiad",
  "holiday",
  "community",
] as const;

const activityImages = [
  IMAGES.activity1,
  IMAGES.activity2,
  IMAGES.activity3,
  IMAGES.activity4,
  IMAGES.activity5,
  IMAGES.activity6,
];

export default function Activities() {
  const t = useTranslations("activities");

  return (
    <BackgroundSection
      id="activities"
      image={IMAGES.activity1}
      alt="Maktab tadbirlari"
      overlay="section"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} light />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {activityKeys.map((key, index) => (
            <FadeInUp key={key} delay={index * 0.08}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-gold">
                <Image
                  src={activityImages[index]}
                  alt={t(`items.${key}`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-navy/10" />
                <div className="absolute inset-x-0 bottom-0 border-t border-gold/20 bg-navy/40 p-4 backdrop-blur-sm md:p-6">
                  <div className="mb-2 h-0.5 w-8 bg-gold transition-all group-hover:w-16" />
                  <p className="font-serif text-base text-white md:text-lg">
                    {t(`items.${key}`)}
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
