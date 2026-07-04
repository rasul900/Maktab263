"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { Phone, Mail, Clock, Send } from "lucide-react";
import BackgroundSection from "@/components/ui/BackgroundSection";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInUp from "@/components/ui/FadeInUp";
import GlassCard from "@/components/ui/GlassCard";
import { IMAGES } from "@/lib/images";

export default function Contact() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <BackgroundSection
      id="contact"
      image={IMAGES.contact}
      alt="Bog'lanish"
      overlay="soft"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeInUp>
            <GlassCard premium className="h-full space-y-8">
              {[
                {
                  icon: Phone,
                  label: t("phone"),
                  content: (
                    <>
                      <a
                        href="tel:+998712901877"
                        className="block font-semibold text-navy transition hover:text-gold"
                      >
                        +998 (71) 290-18-77
                      </a>
                      <a
                        href="tel:+998935446034"
                        className="block font-semibold text-navy transition hover:text-gold"
                      >
                        +998 (93) 544-60-34
                      </a>
                    </>
                  ),
                },
                {
                  icon: Mail,
                  label: t("email"),
                  content: (
                    <a
                      href="mailto:mirobodxtb@mail.ru"
                      className="font-semibold text-navy transition hover:text-gold"
                    >
                      mirobodxtb@mail.ru
                    </a>
                  ),
                },
                {
                  icon: Clock,
                  label: t("hours"),
                  content: (
                    <>
                      <p className="font-semibold text-navy">
                        {t("hoursValue")}
                      </p>
                      <p className="text-sm text-muted">{t("hoursSunday")}</p>
                    </>
                  ),
                },
              ].map(({ icon: Icon, label, content }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5">
                    <Icon className="text-gold" size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">
                      {label}
                    </p>
                    <div className="mt-1">{content}</div>
                  </div>
                </div>
              ))}
            </GlassCard>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <GlassCard premium>
              {submitted ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                    <Send className="text-gold" size={28} />
                  </div>
                  <p className="font-serif text-xl text-navy">
                    {t("form.success")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: "name", label: t("form.name"), type: "text" },
                    { id: "phone", label: t("form.phone"), type: "tel" },
                  ].map(({ id, label, type }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy/70"
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        required
                        className="w-full rounded-xl border border-gold/15 bg-white/90 px-4 py-3.5 text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy/70"
                    >
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-xl border border-gold/15 bg-white/90 px-4 py-3.5 text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold to-gold-light px-8 py-4 font-semibold text-navy shadow-gold transition hover:shadow-elegant"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-shine transition-transform duration-700 group-hover:translate-x-full" />
                    <Send size={18} className="relative z-10" />
                    <span className="relative z-10">{t("form.submit")}</span>
                  </button>
                </form>
              )}
            </GlassCard>
          </FadeInUp>
        </div>
      </div>
    </BackgroundSection>
  );
}
