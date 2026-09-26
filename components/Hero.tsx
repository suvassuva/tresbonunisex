"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Background Image with luxury dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=2000&q=85"
          alt="TRÈS BON Unisex Salon interior with ambient lighting"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-10000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#111111]/50 to-[#111111]" />
      </div>

      {/* Editorial Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#B59A72]/40 bg-[#111111]/60 backdrop-blur-sm mb-6"
        >
          <MapPin className="w-3.5 h-3.5 text-[#B59A72]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#B59A72] font-medium">
            BTM 2nd Stage • Bengaluru
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight uppercase leading-[1.05]"
        >
          {siteConfig.brandTagline}
        </motion.h1>

        {/* Subtitle / Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-2xl leading-relaxed"
        >
          Premium hair, beauty and grooming experiences crafted around your individuality.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <Link
            href="/appointment"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#B59A72] text-[#111111] hover:bg-white text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] font-semibold transition-all duration-300 shadow-lg text-center whitespace-nowrap"
          >
            Book Appointment
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-white/30 text-white hover:border-[#B59A72] hover:text-[#B59A72] text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center gap-2 group text-center whitespace-nowrap"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Subtle Bottom Accent Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 sm:mt-16 w-full max-w-sm sm:max-w-none mx-auto px-2"
        >
          {/* Mobile view: 2 neatly spaced rows to prevent cutoff */}
          <div className="flex flex-col sm:hidden items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-stone-300 font-medium">
            <div className="flex items-center gap-3">
              <span className="whitespace-nowrap">Creative Hair</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B59A72] shrink-0" />
              <span className="whitespace-nowrap">Vibrant Colour</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="whitespace-nowrap">Scalp Wellness</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B59A72] shrink-0" />
              <span className="whitespace-nowrap">Luxury Facials</span>
            </div>
          </div>

          {/* Desktop view: single elegant line */}
          <div className="hidden sm:flex items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-stone-400 font-medium">
            <span className="whitespace-nowrap">Creative Hair</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B59A72] shrink-0" />
            <span className="whitespace-nowrap">Vibrant Colour</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B59A72] shrink-0" />
            <span className="whitespace-nowrap">Scalp Wellness</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B59A72] shrink-0" />
            <span className="whitespace-nowrap">Luxury Facials</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
