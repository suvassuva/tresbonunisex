"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export function MobileBottomBar() {
  return (
    <aside
      aria-label="Quick salon actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#111111]/95 backdrop-blur-md border-t border-[#B59A72]/30 px-3 py-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto items-center">
        {/* Call button */}
        <a
          href={`tel:${siteConfig.contact.phoneClean}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 text-white hover:text-[#B59A72] transition-colors"
          aria-label="Call TRÈS BON Salon"
        >
          <Phone className="w-4 h-4 mb-1 text-[#B59A72]" />
          <span className="text-[10px] uppercase tracking-wider font-medium">
            Call
          </span>
        </a>

        {/* WhatsApp button */}
        <a
          href={getGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 text-white hover:text-[#B59A72] transition-colors border-x border-white/10"
          aria-label="WhatsApp TRÈS BON Salon"
        >
          <MessageSquare className="w-4 h-4 mb-1 text-[#B59A72]" />
          <span className="text-[10px] uppercase tracking-wider font-medium">
            WhatsApp
          </span>
        </a>

        {/* Book Now button */}
        <Link
          href="/appointment"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#B59A72] text-[#111111] hover:bg-white transition-colors"
          aria-label="Book an Appointment"
        >
          <Calendar className="w-4 h-4 mb-1 text-[#111111]" />
          <span className="text-[10px] uppercase tracking-wider font-bold">
            Book Now
          </span>
        </Link>
      </div>
    </aside>
  );
}
