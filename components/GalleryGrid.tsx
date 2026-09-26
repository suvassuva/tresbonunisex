"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { GalleryLightbox } from "./GalleryLightbox";
import { Maximize2, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  previewOnly?: boolean;
  limit?: number;
}

const CATEGORIES = ["ALL", "VIDEOS", "HAIR", "COLOUR", "BEAUTY", "GROOMING", "BRIDAL", "SALON"] as const;

export function GalleryGrid({ previewOnly = false, limit }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    let list = galleryItems;
    if (selectedCategory === "VIDEOS") {
      list = list.filter((item) => item.type === "video");
    } else if (selectedCategory !== "ALL") {
      list = list.filter(
        (item) => item.category.toUpperCase() === selectedCategory.toUpperCase()
      );
    }
    if (previewOnly) {
      return list.slice(0, limit || 8);
    }
    return list;
  }, [selectedCategory, previewOnly, limit]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      {!previewOnly && (
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 border",
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
      )}

      {/* Masonry / Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer overflow-hidden bg-stone-900 aspect-[4/5] shadow-xs hover:shadow-lg transition-all duration-300 border border-[#E5E1DA]"
            >
              {item.type === "video" ? (
                <div className="relative w-full h-full bg-black">
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-[#B59A72] text-[10px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 flex items-center gap-1.5 z-10 border border-[#B59A72]/30">
                    <Play className="w-2.5 h-2.5 fill-[#B59A72]" />
                    <span>Video</span>
                  </div>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              )}

              {/* Gradient & Information Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10 pointer-events-none">
                <div className="flex justify-end">
                  <span className="p-2 bg-white/20 backdrop-blur-xs text-white rounded-full">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#B59A72] font-semibold">
                    {item.category} {item.type === "video" ? "• Reel" : ""}
                  </span>
                  <h4 className="font-editorial text-lg text-white font-light mt-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
