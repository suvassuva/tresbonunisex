"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandsData, BrandItem, avedaProducts } from "@/data/brands";
import { CTASection } from "@/components/CTASection";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle,
  MessageSquare,
  Calendar,
  Globe,
  ShoppingBag,
  ExternalLink,
  Scissors,
} from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All Brands" },
  { id: "hair", label: "Hair Care" },
  { id: "skin", label: "Skin & Facials" },
  { id: "waxing", label: "Waxing & Smooth Skin" },
] as const;

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredBrands = useMemo(() => {
    if (activeTab === "all") return brandsData;
    return brandsData.filter((brand) => brand.category === activeTab);
  }, [activeTab]);

  return (
    <div className="flex flex-col w-full bg-[#F7F4EF]">
      {/* 01. Editorial Hero Header */}
      <section className="relative py-20 sm:py-28 bg-[#111111] text-white overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B59A72]/20 via-transparent to-transparent opacity-70" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#B59A72]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#B59A72] uppercase">
            <span className="w-8 h-[1px] bg-[#B59A72]" />
            <span>Salon Formulations & Retail</span>
            <span className="w-8 h-[1px] bg-[#B59A72]" />
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-white leading-tight">
            OUR CURATED BRANDS
          </h1>

          <p className="font-editorial text-lg sm:text-2xl text-[#B59A72] tracking-[0.15em] font-light uppercase max-w-2xl mx-auto">
            World-Class Hair, Skin & Body Laboratories
          </p>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed pt-2">
            At TRÈS BON, we never compromise on what touches your hair and skin. Every shampoo, color molecule, facial nectar, and waxing resin is sourced directly from certified international innovators to ensure clinical safety, lasting nourishment, and visible transformation.
          </p>
        </div>
      </section>

      {/* 02. Category Switcher */}
      <section className="sticky top-[68px] z-30 bg-[#F7F4EF]/95 backdrop-blur-md border-b border-[#E5E1DA] py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((tab) => {
              const isActive = activeTab === tab.id;
              const count =
                tab.id === "all"
                  ? brandsData.length
                  : brandsData.filter((b) => b.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 sm:px-6 py-2.5 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 border flex items-center gap-2 whitespace-nowrap",
                    isActive
                      ? "bg-[#111111] text-white border-[#111111] shadow-sm"
                      : "bg-white text-[#777777] border-[#E5E1DA] hover:border-[#B59A72] hover:text-[#111111]"
                  )}
                >
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.2 rounded-full",
                      isActive
                        ? "bg-[#B59A72] text-[#111111] font-bold"
                        : "bg-stone-100 text-stone-500"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03. Brand Showcase Cards */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-20">
            {filteredBrands.map((brand, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <article
                  key={brand.id}
                  id={brand.id}
                  className="bg-white border border-[#E5E1DA] hover:border-[#B59A72]/60 transition-all duration-300 shadow-sm overflow-hidden"
                >
                  <div
                    className={cn(
                      "grid grid-cols-1 lg:grid-cols-12 items-stretch",
                      !isEven && "lg:flex-row-reverse"
                    )}
                  >
                    {/* Brand Imagery & Visual Badge */}
                    <div
                      className={cn(
                        "lg:col-span-5 relative min-h-[300px] sm:min-h-[400px] bg-stone-100 overflow-hidden",
                        !isEven && "lg:order-2"
                      )}
                    >
                      <Image
                        src={brand.image}
                        alt={`${brand.name} professional salon products`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Origin & Badge Overlay */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 bg-[#111111]/90 backdrop-blur-xs text-[#B59A72] text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium px-3 py-1.5 border border-[#B59A72]/40">
                          <Globe className="w-3.5 h-3.5" />
                          <span>{brand.origin}</span>
                        </span>
                        <span className="bg-[#B59A72] text-[#111111] text-[10px] uppercase tracking-wider font-bold px-2.5 py-1">
                          {brand.badge}
                        </span>
                      </div>

                      {/* Bottom Image Caption */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-[#B59A72] font-semibold">
                          {brand.categoryLabel}
                        </p>
                        <p className="font-editorial text-2xl font-light">
                          {brand.name}
                        </p>
                      </div>
                    </div>

                    {/* Brand Details & In-Salon Offerings */}
                    <div
                      className={cn(
                        "lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8",
                        !isEven && "lg:order-1"
                      )}
                    >
                      <div className="space-y-6">
                        {/* Header details */}
                        <div className="space-y-2 border-b border-[#E5E1DA] pb-6">
                          <div className="flex flex-wrap items-center gap-3">
                            <h2 className="font-editorial text-3xl sm:text-4xl text-[#111111] font-light">
                              {brand.name}
                            </h2>
                            {brand.takeHomeAvailable && (
                              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 font-medium">
                                <ShoppingBag className="w-3 h-3" />
                                <span>Take-Home Retail Available</span>
                              </span>
                            )}
                          </div>
                          <p className="font-editorial text-lg italic text-[#B59A72]">
                            “{brand.tagline}”
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                          {brand.description}
                        </p>

                        {/* Two Column Breakdown: Key Lines vs In-Salon Rituals */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                          {/* Key Formulations */}
                          <div className="bg-[#F7F4EF] p-5 border-l-2 border-[#B59A72] space-y-3">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#111111] block">
                              Signature Formulations & Tech
                            </span>
                            <ul className="space-y-2 text-xs text-stone-700">
                              {brand.keyLines.map((line, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#B59A72] shrink-0 mt-1.5" />
                                  <span>{line}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* In-Salon Services */}
                          <div className="bg-white p-5 border border-[#E5E1DA] space-y-3">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#111111] block flex items-center gap-1.5">
                              <Scissors className="w-3.5 h-3.5 text-[#B59A72]" />
                              <span>Experience In-Salon At TRÈS BON</span>
                            </span>
                            <ul className="space-y-2 text-xs text-stone-700">
                              {brand.inSalonServices.map((svc, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle className="w-3.5 h-3.5 text-[#B59A72] shrink-0 mt-0.5" />
                                  <span className="font-medium text-[#111111]">
                                    {svc}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="pt-6 border-t border-[#E5E1DA] flex flex-col sm:flex-row items-center gap-3">
                        <Link
                          href="/appointment"
                          className="w-full sm:w-auto px-6 py-3.5 bg-[#111111] text-white hover:bg-[#B59A72] text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300 flex items-center justify-center gap-2 shadow-xs whitespace-nowrap"
                        >
                          <Calendar className="w-3.5 h-3.5 text-[#B59A72]" />
                          <span>Book {brand.name} Service</span>
                        </Link>

                        <a
                          href={getGeneralWhatsAppLink(
                            `Hi TRÈS BON Salon, I would like to inquire about ${brand.name} products and treatment availability.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-6 py-3.5 border border-[#B59A72] text-[#B59A72] hover:bg-[#B59A72] hover:text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Inquire via WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Aveda Specific Matching Products Spotlight */}
                  {brand.id === "aveda" && (
                    <div className="border-t border-[#E5E1DA] bg-stone-50/70 p-6 sm:p-10">
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                        <div>
                          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#B59A72] font-semibold mb-1">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Featured In-Salon & Take-Home Systems</span>
                          </div>
                          <h3 className="font-editorial text-2xl sm:text-3xl text-[#111111] font-light">
                            AVEDA BOTANICAL FORMULATIONS
                          </h3>
                        </div>
                        <p className="text-xs text-stone-500 max-w-xs sm:text-right">
                          100% authentic formulations available for professional in-salon treatment & home care purchase
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {avedaProducts.map((prod) => (
                          <div
                            key={prod.id}
                            className="bg-white border border-[#E5E1DA] hover:border-[#B59A72] transition-all duration-300 flex flex-col justify-between shadow-xs overflow-hidden group"
                          >
                            <div>
                              {/* Product Image */}
                              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                                <Image
                                  src={prod.image}
                                  alt={prod.name}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 33vw"
                                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-2.5 left-2.5 bg-[#111111]/90 backdrop-blur-xs text-[#B59A72] text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5">
                                  {prod.collection}
                                </div>
                                <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-[#111111] text-[10px] font-medium px-2 py-0.5 shadow-xs">
                                  {prod.size}
                                </div>
                              </div>

                              <div className="p-5 space-y-4">
                                <div>
                                  <span className="text-[10px] uppercase tracking-wider text-[#B59A72] font-semibold block mb-1">
                                    {prod.category}
                                  </span>
                                  <h4 className="font-editorial text-xl font-normal text-[#111111] group-hover:text-[#B59A72] transition-colors leading-snug">
                                    {prod.name}
                                  </h4>
                                </div>

                                <div className="text-xs text-stone-600 bg-stone-50 p-2.5 border border-[#E5E1DA]/50">
                                  <p className="font-semibold text-[#111111] text-[11px] mb-0.5">Ideal For:</p>
                                  <p className="text-[11px] leading-relaxed">{prod.idealFor}</p>
                                </div>

                                {/* Key Botanical Actives */}
                                <div className="pt-2 border-t border-[#E5E1DA]/60 space-y-1.5">
                                  <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-800 block">
                                    Botanical Active Science:
                                  </span>
                                  <ul className="space-y-1 text-[11px] text-stone-600">
                                    {prod.keyIngredients.map((ing, i) => (
                                      <li key={i} className="flex items-start gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#B59A72] shrink-0 mt-1" />
                                        <span>{ing}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Key Benefits */}
                                <div className="pt-2 border-t border-[#E5E1DA]/60 space-y-1.5">
                                  <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-800 block">
                                    Proven Hair Benefits:
                                  </span>
                                  <ul className="space-y-1 text-[11px] text-stone-600">
                                    {prod.keyBenefits.map((ben, i) => (
                                      <li key={i} className="flex items-start gap-1.5">
                                        <CheckCircle className="w-3.5 h-3.5 text-[#B59A72] shrink-0 mt-0.5" />
                                        <span>{ben}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* In-Salon Ritual */}
                                <div className="pt-2 border-t border-[#E5E1DA]/60 bg-[#F7F4EF]/80 p-2.5 text-[11px] text-stone-700">
                                  <span className="font-semibold text-[#111111] block mb-0.5">In-Salon Treatment:</span>
                                  <span>{prod.inSalonRitual}</span>
                                </div>
                              </div>
                            </div>

                            <div className="p-5 pt-0">
                              <a
                                href={getGeneralWhatsAppLink(
                                  `Hi TRÈS BON Salon, I would like to inquire about purchasing / reserving the Aveda ${prod.name}.`
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2.5 border border-[#B59A72] text-[#B59A72] hover:bg-[#B59A72] hover:text-white text-[11px] uppercase tracking-wider font-semibold transition-colors duration-200 flex items-center justify-center gap-1.5"
                              >
                                <ShoppingBag className="w-3.5 h-3.5" />
                                <span>Inquire / Reserve on WhatsApp</span>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. Quality & Safety Promise */}
      <section className="py-20 bg-[#111111] text-white border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B59A72] font-semibold block">
              The TRÈS BON Promise
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white leading-tight">
              FORMULATION INTEGRITY
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              We never use unauthorized parallel imports or compromised generic substitutes. Every product applied in our salon or placed in your home care bag meets the highest European and international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1A1A1A] p-6 border border-white/10 hover:border-[#B59A72]/50 transition-colors space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#B59A72]" />
              <h3 className="font-editorial text-xl font-light text-white">
                100% Direct Sourced
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Direct partnerships with verified brand principals ensuring unadulterated, sealed, fresh formulations.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-6 border border-white/10 hover:border-[#B59A72]/50 transition-colors space-y-3">
              <Sparkles className="w-6 h-6 text-[#B59A72]" />
              <h3 className="font-editorial text-xl font-light text-white">
                Hard Water & Climate Defense
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Formulations specifically targeted to neutralize Bengaluru’s hard water minerals and urban humidity.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-6 border border-white/10 hover:border-[#B59A72]/50 transition-colors space-y-3">
              <CheckCircle className="w-6 h-6 text-[#B59A72]" />
              <h3 className="font-editorial text-xl font-light text-white">
                Sensitive Skin Formulations
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                From low-temp stripless resins to ammonia-free and colophony-free waxes, comfort is our primary mandate.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-6 border border-white/10 hover:border-[#B59A72]/50 transition-colors space-y-3">
              <ShoppingBag className="w-6 h-6 text-[#B59A72]" />
              <h3 className="font-editorial text-xl font-light text-white">
                Prescriptive Home Care
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Our stylists prescribe only the precise products your scalp and skin require to maintain salon results at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Final Call To Action */}
      <CTASection
        title="EXPERIENCE WORLD-CLASS FORMULATIONS"
        subtitle="Schedule a consultation with Kamala and our master styling team in BTM 2nd Stage, Bengaluru."
      />
    </div>
  );
}
