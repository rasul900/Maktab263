"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import BackgroundSection from "@/components/ui/BackgroundSection";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { IMAGES } from "@/lib/images";

const testimonialKeys = ["t1", "t2", "t3"] as const;

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonialKeys.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonialKeys.length) % testimonialKeys.length);

  return (
    <BackgroundSection
      id="testimonials"
      image={IMAGES.testimonials}
      alt="O'quvchilar guruhda"
      overlay="soft"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="mb-14 flex flex-col items-center justify-center gap-6 rounded-3xl border border-gold/20 bg-white/80 p-8 shadow-elegant backdrop-blur-md md:flex-row md:gap-12">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: star * 0.08, type: "spring" }}
              >
                <Star
                  size={32}
                  className={
                    star <= 4 ? "fill-gold text-gold" : "fill-gold/40 text-gold"
                  }
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center md:text-left">
            <p className="font-serif text-4xl text-navy">
              <AnimatedCounter value={4.5} decimals={1} />
              <span className="text-gradient-gold"> / 5</span>
            </p>
            <p className="mt-1 text-sm text-muted">
              {t("ratingLabel")} · {t("reviewsCount")}
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass-premium rounded-3xl p-8 md:p-12"
            >
              <Quote className="mb-4 text-gold/30" size={48} />
              <p className="font-serif text-xl leading-relaxed text-navy/80 md:text-2xl">
                &ldquo;{t(`items.${testimonialKeys[current]}.text`)}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-gold/10 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light font-serif text-lg text-navy">
                  {t(`items.${testimonialKeys[current]}.name`).charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy">
                    {t(`items.${testimonialKeys[current]}.name`)}
                  </p>
                  <p className="text-sm text-muted">
                    {t(`items.${testimonialKeys[current]}.role`)}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-white shadow-card transition hover:border-gold hover:bg-gold hover:text-white"
              aria-label="Oldingi"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonialKeys.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-10 bg-gold" : "w-2 bg-navy/20"
                  }`}
                  aria-label={`Sharh ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-white shadow-card transition hover:border-gold hover:bg-gold hover:text-white"
              aria-label="Keyingi"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
}
