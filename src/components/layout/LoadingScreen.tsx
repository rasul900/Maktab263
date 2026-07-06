"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";

export default function LoadingScreen() {
  const t = useTranslations("loading");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.7, duration: 0.5 }}
      onAnimationComplete={() => setVisible(false)}
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#081826]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_65%)]" />
      <div className="absolute inset-0 bg-mesh-navy opacity-60" />

      {/* Blur circles */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative flex flex-col items-center"
      >
        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "linear",
          }}
          className="absolute h-40 w-40 rounded-full border border-gold/20 border-dashed"
        />

        {/* Second Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="absolute h-32 w-32 rounded-full border border-white/10"
        />

        {/* Logo */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="relative mt-2 flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_0_60px_rgba(212,175,55,0.35)]"
        >
          <GraduationCap
              size={24}
              strokeWidth={1.75}
             
              />
          {/* Shine */}
          <motion.div
            animate={{
              x: [-120, 120],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 w-8 rotate-12 bg-white/40 blur-md"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
          className="mt-10 text-center"
        >
          <h1 className="font-serif text-4xl tracking-[0.2em] text-white">
            263-MTM
          </h1>

          <p className="mt-3 text-xs uppercase tracking-[0.45em] text-gold/80">
            {t("text")}
          </p>
        </motion.div>

        {/* Progress */}
        <div className="mt-10 w-56">
          <div className="relative h-[5px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="h-full rounded-full bg-gradient-to-r from-[#d4af37] via-[#ffe082] to-white"
            />

            <motion.div
              animate={{
                x: ["-100%", "220%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.3,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-sm"
            />
          </div>
        </div>

        {/* Loading dots */}
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-6 flex gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: i * 0.15,
              }}
              className="h-2 w-2 rounded-full bg-gold"
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}