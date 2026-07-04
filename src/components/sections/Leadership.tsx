"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Award } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInUp from "@/components/ui/FadeInUp";
import { IMAGES } from "@/lib/images";

export default function Leadership() {
  const t = useTranslations("leadership");

  return (
    <section
      id="leadership"
      className="relative overflow-hidden bg-gradient-to-b from-ivory via-soft to-ivory py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-mesh-navy opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <FadeInUp>
          <div className="mx-auto max-w-4xl">
            <div className="glass-premium overflow-hidden rounded-3xl shadow-elegant">
              <div className="grid md:grid-cols-5">
                <div className="relative md:col-span-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-navy/5" />
                  <div className="relative aspect-[3/4] md:aspect-auto md:h-full md:min-h-[420px]">
                    <Image
                      src={IMAGES.director}
                      alt={t("director.name")}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 320px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/20" />
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-gold/30 bg-navy/80 px-4 py-2 backdrop-blur-md md:bottom-6 md:left-6">
                    <Award className="text-gold" size={16} />
                    <span className="text-xs font-semibold text-white">
                      {t("director.role")}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:col-span-3 md:p-12">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                    {t("director.role")}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight text-navy md:text-4xl">
                    {t("director.name")}
                  </h3>
                  <div className="my-6 gold-line max-w-xs" />
                  <p className="text-lg leading-relaxed text-navy/70">
                    {t("director.bio")}
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
                    <span className="font-serif text-sm italic text-gold">
                      263-MTM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
