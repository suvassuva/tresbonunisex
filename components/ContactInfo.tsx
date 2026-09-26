import React from "react";
import { siteConfig } from "@/data/site";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";
import { Phone, Mail, MapPin, Clock, MessageSquare, Navigation } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="bg-white border border-[#E5E1DA] p-6 sm:p-10 shadow-xs space-y-8">
      <div>
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#B59A72] font-semibold block mb-2">
          Salon Details
        </span>
        <h3 className="font-editorial text-3xl font-light text-[#111111]">
          Visit TRÈS BON
        </h3>
        <p className="text-sm text-[#777777] mt-2 leading-relaxed">
          Conveniently situated in BTM 2nd Stage opposite Kuvempu Park. Dedicated valet assistance and comfortable air-conditioned client lounge.
        </p>
      </div>

      <div className="space-y-6 text-sm">
        {/* Address */}
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 bg-[#F7F4EF] text-[#B59A72] shrink-0 border border-[#E5E1DA]">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-editorial text-lg text-[#111111] font-medium">
              Location
            </h4>
            <p className="text-stone-600 mt-0.5 leading-relaxed">
              {siteConfig.address.full}
            </p>
          </div>
        </div>

        {/* Telephone */}
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 bg-[#F7F4EF] text-[#B59A72] shrink-0 border border-[#E5E1DA]">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-editorial text-lg text-[#111111] font-medium">
              Direct Phone
            </h4>
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className="text-stone-600 hover:text-[#B59A72] transition-colors block mt-0.5 font-medium"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 bg-[#F7F4EF] text-[#B59A72] shrink-0 border border-[#E5E1DA]">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-editorial text-lg text-[#111111] font-medium">
              Email Correspondence
            </h4>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-stone-600 hover:text-[#B59A72] transition-colors block mt-0.5"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 bg-[#F7F4EF] text-[#B59A72] shrink-0 border border-[#E5E1DA]">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-editorial text-lg text-[#111111] font-medium">
              Operational Hours
            </h4>
            <div className="text-stone-600 mt-0.5 space-y-0.5 text-xs sm:text-sm">
              <p>{siteConfig.hours.weekdays}</p>
              <p>{siteConfig.hours.weekends}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Action Buttons */}
      <div className="pt-6 border-t border-[#E5E1DA] grid grid-cols-1 sm:grid-cols-3 gap-3">
        <a
          href={`tel:${siteConfig.contact.phoneClean}`}
          className="flex items-center justify-center gap-2 py-3 px-3 bg-[#111111] text-white hover:bg-[#B59A72] text-[11px] uppercase tracking-[0.15em] font-medium transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          Call
        </a>
        <a
          href={getGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 border border-[#B59A72] text-[#B59A72] hover:bg-[#B59A72] hover:text-white text-[11px] uppercase tracking-[0.15em] font-medium transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          WhatsApp
        </a>
        <a
          href={siteConfig.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white text-[11px] uppercase tracking-[0.15em] font-medium transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          Directions
        </a>
      </div>
    </div>
  );
}
