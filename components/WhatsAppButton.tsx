"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={getGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-2.5 bg-[#111111] text-white px-4 py-3 border border-[#B59A72]/50 shadow-xl hover:bg-[#B59A72] hover:text-[#111111] transition-all duration-300 group"
    >
      <MessageSquare className="w-5 h-5 text-[#B59A72] group-hover:text-[#111111] transition-colors" />
      <span className="text-xs font-semibold tracking-widest uppercase">
        WhatsApp Us
      </span>
    </a>
  );
}
