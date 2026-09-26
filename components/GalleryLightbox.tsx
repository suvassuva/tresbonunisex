"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function GalleryLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
    >
      {/* Top Header / Actions */}
      <div className="absolute top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59A72] font-medium">
            {currentItem.category}
          </span>
          <span className="text-stone-400 text-xs">
            ({currentIndex + 1} / {items.length})
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close image lightbox"
          className="p-2 text-stone-300 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        aria-label="Previous image"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/80 transition-colors rounded-full"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={onNext}
        aria-label="Next image"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/80 transition-colors rounded-full"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Main Image Display */}
      <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-[70vh]">
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
        <div className="mt-4 text-center">
          <h4 className="font-editorial text-xl sm:text-2xl text-white font-light">
            {currentItem.title}
          </h4>
          <p className="text-xs text-stone-400 mt-1 max-w-md">{currentItem.alt}</p>
        </div>
      </div>
    </div>
  );
}
