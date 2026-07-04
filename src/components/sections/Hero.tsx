"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronDown, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { IMAGES } from "@/lib/images";

export default function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative isolate min-h-screen overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero}
          alt="263-sonli maktab binosi"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-mesh-navy" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/80 to-transparent" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute left-8 top-1/4 h-32 w-32 rounded-full border border-gold/10" />
        <div className="absolute right-12 top-1/3 h-48 w-48 rounded-full border border-white/5" />
        <div className="absolute bottom-1/4 left-1/4 h-px w-24 bg-gradient-to-r from-gold/40 to-transparent" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-32 pb-24 md:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-5 py-2 backdrop-blur-md"
        >
          <Sparkles className="text-gold" size={16} />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Mirobod tumani · 2003
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl font-serif text-4xl leading-[1.1] text-white md:text-5xl lg:text-7xl"
        >
          {t("title")}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 h-1 w-24 origin-left rounded-full bg-gradient-to-r from-gold to-champagne"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Button href="#admission" variant="primary">
            {t("ctaAdmission")}
          </Button>
          <Button href="#contact" variant="outline">
            {t("ctaContact")}
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60"
        aria-label={t("scrollDown")}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          {t("scrollDown")}
        </span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1">
          <ChevronDown size={14} className="animate-pulse-soft" />
        </div>
      </motion.a>
    </section>
  );
}
