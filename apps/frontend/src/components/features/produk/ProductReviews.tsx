import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmad Subagja",
    rating: 5,
    comment: "Bahannya adem banget, motifnya mewah. Sesuai ekspektasi!",
  },
  {
    name: "Budi Santoso",
    rating: 4,
    comment:
      "Kualitas tenunnya rapi, cuma pengiriman agak lama. Tapi overall puas.",
  },
];

export const ProductReviews: React.FC = () => (
  <div>
    {reviews.map((review, index) => (
      <div
        key={index}
        className="border-b border-slate-700 py-4 last:border-b-0"
      >
        <div className="flex items-center mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < review.rating
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-600"
              }
            />
          ))}
        </div>
        <p className="text-slate-300 mb-2">"{review.comment}"</p>
        <p className="text-sm text-slate-500 font-semibold">- {review.name}</p>
      </div>
    ))}
  </div>
);
