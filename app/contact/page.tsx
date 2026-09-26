import React from "react";
import { Metadata } from "next";
import { ContactInfo } from "@/components/ContactInfo";
import { GoogleMap } from "@/components/GoogleMap";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Contact & Location | TRÈS BON Unisex Salon BTM 2nd Stage",
  description:
    "Find TRÈS BON Unisex Salon in BTM 2nd Stage opposite Kuvempu Park, Bengaluru. Phone: +91 7483 502 470. Operational hours, directions, and direct WhatsApp contact.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Editorial Hero */}
      <section className="py-20 sm:py-28 bg-[#111111] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B59A72]">
            <span className="w-6 h-[1px] bg-[#B59A72]" />
            <span>Connect With Us</span>
            <span className="w-6 h-[1px] bg-[#B59A72]" />
          </div>
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight">
            VISIT TRÈS BON
          </h1>
          <p className="font-editorial text-xl sm:text-2xl text-[#B59A72] tracking-[0.2em] font-light uppercase mt-2">
            BTM 2ND STAGE • BENGALURU
          </p>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed pt-2">
            Located right opposite the greenery of Kuvempu Park. We welcome walk-ins based on availability, but recommend reservations.
          </p>
        </div>
      </section>

      {/* Contact Information & Map Section */}
      <section className="py-20 lg:py-28 bg-[#F7F4EF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Details Card */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Google Map Full View */}
            <div className="lg:col-span-7 h-[580px] flex flex-col">
              <GoogleMap className="w-full h-full shadow-xs" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="HAVE A SPECIFIC QUESTION?"
        subtitle="Chat with our salon coordinator directly on WhatsApp for instantaneous assistance."
      />
    </div>
  );
}
