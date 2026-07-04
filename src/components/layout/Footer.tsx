"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-mesh-navy opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="mb-6 flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-gold/30">
              <Image
                src={IMAGES.schoolLogo}
                alt="263-MTM"
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div>
              <span className="block font-serif text-2xl">263-MTM</span>
              <span className="text-xs uppercase tracking-[0.2em] text-gold/80">
                Mirobod tumani
              </span>
            </div>
          </div>
          <p className="max-w-md leading-relaxed text-white/65">
            {t("description")}
          </p>
        </div>

        <div className="space-y-5">
          <h3 className="font-serif text-lg text-gold-light">Kontakt</h3>
          <div className="flex items-start gap-3 text-sm text-white/65">
            <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
            <span>{t("address")}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/65">
            <Phone size={18} className="shrink-0 text-gold" />
            <span>+998 (71) 290-18-77</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/65">
            <Mail size={18} className="shrink-0 text-gold" />
            <span>mirobodxtb@mail.ru</span>
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="font-serif text-lg text-gold-light">Ish vaqti</h3>
          <div className="flex items-center gap-3 text-sm text-white/65">
            <Clock size={18} className="shrink-0 text-gold" />
            <span>{t("hours")}</span>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-8 text-center text-sm text-white/45">
        {t("copyright", { year })}
      </div>
    </footer>
  );
}
