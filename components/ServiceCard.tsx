import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group bg-white border border-[#E5E1DA] hover:border-[#B59A72] transition-all duration-300 flex flex-col h-full shadow-xs hover:shadow-md">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-xs text-[#B59A72] text-[10px] uppercase tracking-[0.2em] font-medium px-2.5 py-1">
          {service.category}
        </div>
        <div className="absolute bottom-3 right-3 bg-white/95 text-[#111111] text-xs font-semibold px-2.5 py-1">
          From {service.startingPrice}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-[#777777] mb-1.5">
            <Clock className="w-3 h-3 text-[#B59A72]" />
            <span>{service.duration}</span>
          </div>
          <h3 className="font-editorial text-2xl font-light text-[#111111] group-hover:text-[#B59A72] transition-colors leading-snug">
            {service.name}
          </h3>
          <p className="mt-2 text-sm text-[#777777] line-clamp-3 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-[#E5E1DA]/60 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#111111] group-hover:text-[#B59A72] transition-colors inline-flex items-center gap-1.5">
            Explore Service
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
          <Link
            href={`/services/${service.slug}`}
            className="absolute inset-0"
            aria-label={`View details for ${service.name}`}
          >
            <span className="sr-only">View {service.name} details</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
