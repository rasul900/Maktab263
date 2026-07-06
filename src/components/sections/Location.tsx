"use client";

import { useTranslations } from "next-intl";
import { MapPin, Building, ShoppingBag, TrainFront } from "lucide-react";
import BackgroundSection from "@/components/ui/BackgroundSection";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInUp from "@/components/ui/FadeInUp";
import GlassCard from "@/components/ui/GlassCard";
import { IMAGES } from "@/lib/images";

const landmarkKeys = ["school31", "makro", "metro"] as const;
const landmarkIcons = [Building, ShoppingBag, TrainFront];

const MAP_EMBED =
  "https://www.google.com/maps?q=7825%2B6H6%2C+Tashkent%2C+Uzbekistan&hl=uz&z=16&output=embed";

export default function Location() {
  const t = useTranslations("location");

  return (
    <BackgroundSection
      id="location"
      image={IMAGES.location}
      alt="Toshkent xaritasi"
      overlay="section"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} light />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeInUp>
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-elegant ring-1 ring-gold/10">
              <iframe
                title="Maktab joylashuvi — Google Maps"
                src={MAP_EMBED}
                className="h-80 w-full border-0 md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <GlassCard premium className="h-full">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5">
                  <MapPin className="text-gold" size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-navy">Manzil</h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {t("address")}
                  </p>
                </div>
              </div>

              <div className="my-8 gold-line" />

              <div>
                <h3 className="font-serif text-xl text-navy">
                  {t("landmarksTitle")}
                </h3>
                <ul className="mt-5 space-y-4">
                  {landmarkKeys.map((key, index) => {
                    const Icon = landmarkIcons[index];
                    return (
                      <li
                        key={key}
                        className="flex items-center gap-4 rounded-xl border border-gold/10 bg-gold/5 p-4 text-navy/80"
                      >
                        <Icon size={20} className="shrink-0 text-gold" />
                        <span>{t(`landmarks.${key}`)}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <p className="mt-8 rounded-2xl border border-gold/15 bg-navy/5 p-5 text-sm leading-relaxed text-navy/70">
                {t("transport")}
              </p>
            </GlassCard>
          </FadeInUp>
        </div>
      </div>
    </BackgroundSection>
  );
}
