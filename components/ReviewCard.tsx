import React from "react";
import { Star, CheckCircle } from "lucide-react";
import { ReviewItem } from "@/data/reviews";

interface ReviewCardProps {
  review: ReviewItem;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white border border-[#E5E1DA] p-6 md:p-8 flex flex-col justify-between h-full shadow-xs hover:border-[#B59A72] transition-colors duration-300">
      <div className="space-y-4">
        {/* Star Rating & Source */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[#B59A72]">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#B59A72]" />
            ))}
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#777777] bg-stone-100 px-2 py-0.5">
            {review.source}
          </span>
        </div>

        {/* Review Text */}
        <p className="text-stone-700 text-sm md:text-base leading-relaxed font-light italic">
          “{review.text}”
        </p>
      </div>

      {/* Author and service details */}
      <div className="pt-6 mt-6 border-t border-[#E5E1DA]/60 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="font-editorial text-lg font-medium text-[#111111]">
              {review.author}
            </h4>
            {review.verified && (
              <CheckCircle className="w-3.5 h-3.5 text-[#B59A72]" aria-label="Verified Customer" />
            )}
          </div>
          {review.serviceMentioned && (
            <p className="text-xs text-[#777777]">{review.serviceMentioned}</p>
          )}
        </div>
        <span className="text-[11px] text-stone-400">{review.date}</span>
      </div>
    </div>
  );
}
