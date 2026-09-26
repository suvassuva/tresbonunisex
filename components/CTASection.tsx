import React from "react";
import Link from "next/link";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import { MessageSquare, Calendar } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "READY FOR YOUR NEXT LOOK?",
  subtitle = "Your style. Your confidence. Your TRÈS BON experience.",
}: CTASectionProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-[#111111] text-white overflow-hidden">
      {/* Decorative subtle ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B59A72]/15 via-transparent to-transparent opacity-60" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#B59A72]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#B59A72] uppercase">
          <span className="w-8 h-[1px] bg-[#B59A72]" />
          <span>Transform Your Look</span>
          <span className="w-8 h-[1px] bg-[#B59A72]" />
        </div>

        <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-stone-300 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/appointment"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#B59A72] text-[#111111] hover:bg-white text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-[#111111]" />
            <span>Book Appointment</span>
          </Link>
          <a
            href={getGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-white/40 text-white hover:border-[#B59A72] hover:text-[#B59A72] text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-[#B59A72]" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <p className="text-stone-400 text-xs tracking-wider pt-2">
          790, 5th Cross, BTM 2nd Stage, Bengaluru • Open 7 Days A Week
        </p>
      </div>
    </section>
  );
}
