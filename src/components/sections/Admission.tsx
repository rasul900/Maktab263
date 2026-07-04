"use client";

import { useTranslations } from "next-intl";
import { FileText, UserCheck, ClipboardList, CheckCircle2 } from "lucide-react";
import BackgroundSection from "@/components/ui/BackgroundSection";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInUp from "@/components/ui/FadeInUp";
import { IMAGES } from "@/lib/images";

const stepKeys = ["step1", "step2", "step3"] as const;
const stepIcons = [FileText, UserCheck, ClipboardList];
const docKeys = ["birth", "passport", "photo", "medical", "school"] as const;

export default function Admission() {
  const t = useTranslations("admission");

  return (
    <BackgroundSection
      id="admission"
      image={IMAGES.admission}
      alt="Qabul hujjatlari"
      overlay="section"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} light />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-7 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-gold via-gold/40 to-transparent md:block" />

          {stepKeys.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <FadeInUp key={step} delay={index * 0.15}>
                <div className="relative mb-10 flex gap-6 md:mb-12">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold to-gold-light text-navy shadow-gold">
                    <Icon size={24} />
                  </div>
                  <div className="glass-premium flex-1 rounded-2xl p-6 md:p-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-serif text-xl text-navy md:text-2xl">
                      {t(`steps.${step}.title`)}
                    </h3>
                    <p className="mt-2 text-muted">
                      {t(`steps.${step}.description`)}
                    </p>

                    {step === "step1" && (
                      <ul className="mt-5 space-y-3">
                        {docKeys.map((doc) => (
                          <li
                            key={doc}
                            className="flex items-start gap-3 rounded-xl bg-gold/5 p-3 text-navy/80"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-0.5 shrink-0 text-gold"
                            />
                            <span>{t(`documents.${doc}`)}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {step === "step2" && (
                      <p className="mt-4 rounded-xl border border-gold/20 bg-gold/10 p-4 text-navy/80">
                        {t("ageNote")}
                      </p>
                    )}

                    {step === "step3" && (
                      <p className="mt-4 rounded-xl border border-gold/20 bg-gold/10 p-4 text-navy/80">
                        {t("processNote")}
                      </p>
                    )}
                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </BackgroundSection>
  );
}
