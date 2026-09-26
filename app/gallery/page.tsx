import React from "react";
import { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Editorial Gallery | TRÈS BON Unisex Salon Bengaluru",
  description:
    "Explore our visual lookbook of precision cuts, artisan balayage, beard sculpting, dewy facials, and couture bridal styling in BTM 2nd Stage.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Editorial Hero */}
      <section className="py-20 sm:py-28 bg-[#111111] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B59A72]">
            <span className="w-6 h-[1px] bg-[#B59A72]" />
            <span>Visual Lookbook</span>
            <span className="w-6 h-[1px] bg-[#B59A72]" />
          </div>
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight">
            GALLERY
          </h1>
          <p className="font-editorial text-xl sm:text-2xl text-[#B59A72] tracking-[0.2em] font-light uppercase mt-2">
            STYLE IN MOTION
          </p>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed pt-2">
            Click on any image to open the high-resolution lightbox preview and explore the nuances of our craftsmanship.
          </p>
        </div>
      </section>

      {/* Interactive Gallery Grid */}
      <section className="py-20 lg:py-28 bg-[#F7F4EF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid previewOnly={false} />
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="INSPIRED BY A LOOK?"
        subtitle="Bring your reference to TRÈS BON and let our stylists customize it to your features."
      />
    </div>
  );
}
