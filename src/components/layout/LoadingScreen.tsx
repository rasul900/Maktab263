"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { IMAGES } from "@/lib/images";

export default function LoadingScreen() {
  const t = useTranslations("loading");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      onAnimationComplete={() => setVisible(false)}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
    >
      <div className="absolute inset-0 bg-mesh-navy opacity-60" />

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex flex-col items-center gap-8"
      >
        <div className="relative">
          <div className="absolute -inset-4 rounded-full border border-gold/20 animate-pulse-soft" />
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-2 border-gold/40 shadow-gold">
            <Image
              src={IMAGES.schoolLogo}
              alt="263-MTM"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center">
          <p className="font-serif text-3xl text-white">263-MTM</p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gold/80">
            {t("text")}
          </p>
        </div>

        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="h-full rounded-full bg-gradient-to-r from-gold to-champagne"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
