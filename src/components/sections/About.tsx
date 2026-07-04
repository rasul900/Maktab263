"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Building2, Calendar, Award, Quote } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlassCard from "@/components/ui/GlassCard";
import FadeInUp from "@/components/ui/FadeInUp";
import { IMAGES } from "@/lib/images";

export default function About() {
  const t = useTranslations("about");

  const infoItems = [
    { icon: Calendar, label: t("foundedLabel"), value: t("foundedValue") },
    { icon: Building2, label: t("statusLabel"), value: t("statusValue") },
    { icon: Award, label: t("founderLabel"), value: t("founderValue") },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ivory py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeInUp>
            <div className="relative mb-8">
              <Quote
                className="absolute -left-2 -top-4 text-gold/20"
                size={48}
              />
              <p className="relative pl-6 text-lg leading-relaxed text-navy/80 md:text-xl">
                {t("description")}
              </p>
            </div>

            <div className="space-y-4">
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="group flex items-center gap-5 rounded-2xl border border-gold/10 bg-white p-5 shadow-card transition-all duration-300 hover:border-gold/30 hover:shadow-elegant"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 shadow-inner-gold transition-transform group-hover:scale-105">
                    <Icon className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {label}
                    </p>
                    <p className="font-serif text-xl text-navy">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-navy/10" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant ring-1 ring-gold/20">
                <Image
                  src={IMAGES.about}
                  alt="Maktab kutubxonasi"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-8 -left-6 grid w-[calc(100%+1rem)] grid-cols-3 gap-3 md:-left-10 md:gap-4">
                {[
                  { value: 11, suffix: "", label: t("stats.classes") },
                  {
                    value: 4.5,
                    decimals: 1,
                    suffix: "",
                    label: t("stats.rating"),
                  },
                  {
                    value: 130,
                    suffix: "+",
                    label: t("stats.reviews"),
                  },
                ].map((stat) => (
                  <GlassCard
                    key={stat.label}
                    premium
                    className="text-center !p-4 md:!p-5"
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={"decimals" in stat ? stat.decimals : 0}
                      className="block font-serif text-2xl text-gold md:text-3xl"
                    />
                    <p className="mt-1 text-[10px] leading-tight text-muted md:text-xs">
                      {stat.label}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
