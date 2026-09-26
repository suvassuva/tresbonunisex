"use client";

import React, { useState, useMemo } from "react";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const CATEGORIES = ["ALL", "HAIR", "COLOUR", "BEAUTY", "GROOMING", "BRIDAL"] as const;

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredServices = useMemo(() => {
    if (activeCategory === "ALL") return servicesData;
    return servicesData.filter(
      (s) => s.category.toUpperCase() === activeCategory.toUpperCase()
    );
  }, [activeCategory]);

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Hero */}
      <section className="py-20 sm:py-28 bg-[#111111] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B59A72]">
            <span className="w-6 h-[1px] bg-[#B59A72]" />
            <span>Our Offerings</span>
            <span className="w-6 h-[1px] bg-[#B59A72]" />
          </div>
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight">
            SERVICES
          </h1>
          <p className="font-editorial text-xl sm:text-2xl text-[#B59A72] tracking-[0.2em] font-light uppercase mt-2">
            CRAFTED FOR YOU
          </p>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed pt-2">
            Every service at TRÈS BON is executed with architectural consideration, tailored directly to your texture, bone structure, and lifestyle.
          </p>
        </div>
      </section>

      {/* Filterable Services Grid */}
      <section className="py-20 lg:py-28 bg-[#F7F4EF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 border",
                    isActive
                      ? "bg-[#111111] text-white border-[#111111]"
                      : "bg-white text-[#777777] border-[#E5E1DA] hover:border-[#B59A72] hover:text-[#111111]"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="READY TO ELEVATE YOUR STYLE?"
        subtitle="Reserve an appointment with Kamala or our specialist team in BTM 2nd Stage."
      />
    </div>
  );
}
