import React, { Suspense } from "react";
import { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { siteConfig } from "@/data/site";
import { Clock, ShieldCheck, Sparkles, MessageSquare, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Book An Appointment | TRÈS BON Unisex Salon Bengaluru",
  description:
    "Request your appointment at TRÈS BON Unisex Salon in BTM 2nd Stage. Select your service, preferred date, and time for instant WhatsApp confirmation.",
};

export default function AppointmentPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Editorial Hero */}
      <section className="py-20 sm:py-28 bg-[#111111] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B59A72]">
            <span className="w-6 h-[1px] bg-[#B59A72]" />
            <span>Instant Reservation</span>
            <span className="w-6 h-[1px] bg-[#B59A72]" />
          </div>
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight">
            BOOK APPOINTMENT
          </h1>
          <p className="font-editorial text-xl sm:text-2xl text-[#B59A72] tracking-[0.2em] font-light uppercase mt-2">
            YOUR SESSION AWAITS
          </p>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed pt-2">
            Submit your desired date and service below. Our front desk will confirm your appointment instantly via WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Form & Information Section */}
      <section className="py-20 lg:py-28 bg-[#F7F4EF] border-b border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="bg-white p-12 text-center text-sm text-[#777777]">
                    Loading booking form...
                  </div>
                }
              >
                <BookingForm />
              </Suspense>
            </div>

            {/* Right Column: Experience Assurance */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#E5E1DA] p-8 shadow-xs space-y-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B59A72] font-semibold block">
                  The TRÈS BON Standard
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#111111] font-light">
                  What To Expect
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#B59A72] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-[#111111]">
                        15-Minute Anatomical Consultation
                      </h4>
                      <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                        Every appointment begins with an analysis of your facial lines, crown density, and growth direction.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#B59A72] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-[#111111]">
                        No Hurried Chairs
                      </h4>
                      <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                        We deliberately space out appointments so our artists dedicate 100% of their focus exclusively to you.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#B59A72] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-[#111111]">
                        Punctual Execution
                      </h4>
                      <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                        We respect your schedule. Your styling station will be sanitized and prepared when you arrive.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E1DA] space-y-2">
                  <p className="text-xs uppercase tracking-wider text-[#111111] font-semibold">
                    Prefer Direct Telephone Booking?
                  </p>
                  <p className="text-xs text-stone-600">
                    Call our reception anytime during operational hours:
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phoneClean}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#B59A72] hover:text-[#111111] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </div>
              </div>

              {/* Hours reminder card */}
              <div className="bg-[#111111] text-white p-6 border border-white/10 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B59A72] font-semibold block">
                  Operational Schedule
                </span>
                <p className="text-sm font-light text-stone-300">
                  {siteConfig.hours.weekdays}
                </p>
                <p className="text-sm font-light text-stone-300">
                  {siteConfig.hours.weekends}
                </p>
                <p className="text-xs text-[#B59A72] pt-1">
                  Valet parking available opposite Kuvempu Park.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
