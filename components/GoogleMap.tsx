import React from "react";
import { siteConfig } from "@/data/site";
import { MapPin, ExternalLink } from "lucide-react";

interface GoogleMapProps {
  className?: string;
}

export function GoogleMap({ className = "h-[400px] w-full" }: GoogleMapProps) {
  return (
    <div className={`relative overflow-hidden border border-[#E5E1DA] bg-stone-100 ${className}`}>
      <iframe
        title="TRÈS BON Unisex Salon Location Map"
        src={siteConfig.address.embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs px-3.5 py-2 border border-[#E5E1DA] shadow-sm flex items-center gap-2 text-xs">
        <MapPin className="w-3.5 h-3.5 text-[#B59A72]" />
        <span className="font-medium text-[#111111]">Opposite Kuvempu Park</span>
        <a
          href={siteConfig.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B59A72] hover:text-[#111111] inline-flex items-center gap-0.5 ml-1 font-semibold"
        >
          <span>Open</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
