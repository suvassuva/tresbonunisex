import React from "react";
import Image from "next/image";
import Link from "next/image";
import NextLink from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { Sparkles, Heart, Award, Scissors, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Kamala & TRÈS BON Unisex Salon",
  description:
    "Discover the story behind TRÈS BON Unisex Salon in Bengaluru. Founded by Creative Director Kamala with 15+ years of mastery in gender-inclusive, architectural hair artistry.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Editorial Hero */}
      <section className="relative py-24 sm:py-32 bg-[#111111] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=80"
            alt="TRÈS BON Salon Sanctuary"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B59A72]">
            <span className="w-6 h-[1px] bg-[#B59A72]" />
            <span>Our Heritage</span>
            <span className="w-6 h-[1px] bg-[#B59A72]" />
          </div>
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight">
            ABOUT TRÈS BON
          </h1>
          <p className="font-editorial text-xl sm:text-2xl text-[#B59A72] tracking-[0.2em] font-light uppercase mt-2">
            {siteConfig.brandTagline}
          </p>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed pt-2">
            A sanctuary born from the conviction that personal style should transcend gender constraints, labels, and fleeting fast-fashion formulas.
          </p>
        </div>
      </section>

      {/* Our Story & Philosophy */}
      <section className="py-20 lg:py-28 bg-[#F7F4EF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B59A72] font-semibold block">
                The Genesis
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#111111] leading-tight">
                WHY TRÈS BON WAS CREATED
              </h2>
              <div className="space-y-4 text-stone-700 text-base font-light leading-relaxed">
                <p>
                  For years, mainstream salon experiences remained sharply segmented into traditional women&apos;s parlours or hurried barbershops. Clients seeking nuanced texture work, gender-affirming styling, or specialized scalp rejuvenation frequently had to settle for generic haircuts that did not match their personal aesthetic.
                </p>
                <p>
                  <strong>TRÈS BON</strong> was conceived as an editorial atelier opposite Kuvempu Park in Bengaluru—an inclusive haven where artistry, anatomical understanding, and unhurried hospitality coexist harmoniously.
                </p>
                <p className="text-[#777777]">
                  Every appointment begins with active listening. We examine hair density, facial symmetry, skin undertones, and your personal morning routine before picking up our shears or color brushes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#B59A72] shrink-0 mt-1" />
                  <span className="text-xs uppercase tracking-wider text-stone-800 font-medium">
                    Strictly Gender-Inclusive
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#B59A72] shrink-0 mt-1" />
                  <span className="text-xs uppercase tracking-wider text-stone-800 font-medium">
                    Ammonia-Free Formulations
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#B59A72] shrink-0 mt-1" />
                  <span className="text-xs uppercase tracking-wider text-stone-800 font-medium">
                    Ozone Micro-Mist Scalp Care
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#B59A72] shrink-0 mt-1" />
                  <span className="text-xs uppercase tracking-wider text-stone-800 font-medium">
                    Unrushed Consultations
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-xl border border-[#E5E1DA]">
                <Image
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80"
                  alt="Precision styling at TRÈS BON Unisex Salon"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Kamala Founder Section */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Founder Portrait */}
            <div className="lg:col-span-5 order-1">
              <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl border border-[#E5E1DA]">
                <Image
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80"
                  alt="Kamala - Founder & Creative Director"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-xs text-[#B59A72] text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1">
                  15+ Years Experience
                </div>
              </div>
            </div>

            {/* Founder Story */}
            <div className="lg:col-span-7 space-y-6 order-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B59A72]">
                <span className="w-6 h-[1px] bg-[#B59A72]" />
                <span>The Visionary</span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-5xl font-light text-[#111111]">
                KAMALA
              </h2>
              <p className="text-xs uppercase tracking-[0.25em] text-[#B59A72] font-semibold">
                Founder & Creative Director
              </p>

              <p className="text-stone-700 text-base sm:text-lg font-light leading-relaxed">
                With more than fifteen years spent at the forefront of contemporary hair design and aesthetic care, Kamala has developed a signature methodology grounded in anatomical precision and fluid wearability.
              </p>

              <div className="bg-[#F7F4EF] p-6 border-l-2 border-[#B59A72] space-y-2">
                <p className="font-editorial text-xl italic text-stone-900 leading-snug">
                  “My mission is not to transform you into someone else, but to reveal the most magnetic, effortless version of who you already are.”
                </p>
                <p className="text-xs uppercase tracking-wider text-[#777777]">
                  — Kamala, Founder & Creative Director
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#111111]">
                  Areas of Mastery:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-600">
                  <div className="flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-[#B59A72]" />
                    <span>Dry-cutting & Architectural Layering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#B59A72]" />
                    <span>European Balayage & Light Reflection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#B59A72]" />
                    <span>Gender-Affirming Silhouette Shaping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#B59A72]" />
                    <span>Couture Bridal Hair Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salon Atmosphere & Experience */}
      <section className="py-20 lg:py-28 bg-[#F7F4EF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Environment"
            title="THE SALON EXPERIENCE"
            description="Designed as an editorial oasis featuring warm tactile finishes, ambient natural light, and serene acoustic balance."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E5E1DA] p-6 space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                  alt="Salon interior"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-editorial text-xl font-light text-[#111111]">
                Sanctuary Interior
              </h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                Quiet luxury aesthetics with warm wood accents, champagne metal, and green views overlooking Kuvempu Park.
              </p>
            </div>

            <div className="bg-white border border-[#E5E1DA] p-6 space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
                  alt="Ergonomic styling station"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-editorial text-xl font-light text-[#111111]">
                Styling Stations
              </h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                Ergonomic leather chairs with wide spacing, full-length illuminated mirrors, and personal power ports.
              </p>
            </div>

            <div className="bg-white border border-[#E5E1DA] p-6 space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                  alt="Clean haircare products"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-editorial text-xl font-light text-[#111111]">
                Premium Products
              </h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                We exclusively use dermatologically approved, cruelty-free, and low-chemical European hair and skin elixirs.
              </p>
            </div>

            <div className="bg-white border border-[#E5E1DA] p-6 space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                  alt="Atmosphere and hospitality"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-editorial text-xl font-light text-[#111111]">
                Warm Hospitality
              </h3>
              <p className="text-xs text-[#777777] leading-relaxed">
                Complimentary artisanal herbal infusions, espresso, and an unhurried, peaceful atmosphere.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <NextLink
              href="/appointment"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white hover:bg-[#B59A72] text-xs uppercase tracking-[0.25em] font-semibold transition-colors duration-300 shadow-md"
            >
              <span>Book Your Experience</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NextLink>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="EXPERIENCE TRÈS BON"
        subtitle="Book a bespoke consultation with Kamala and our master styling team."
      />
    </div>
  );
}
