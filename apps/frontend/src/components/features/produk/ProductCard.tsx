import React, { type JSX } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, Sparkles } from "lucide-react";
import type { ProductCardProps } from "./types";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  originalPrice,
  discount,
  rating = 4.8,
  isLimited = false,
  isFavorite = false,
  compact = false,
  onFavoriteClick,
  onBuyNow,
  onAddToCart,
}) => {
  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    onFavoriteClick?.();
  };

  const handleBuyNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onBuyNow?.();
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart?.();
  };

  const formatPrice = (amount: number): string =>
    amount.toLocaleString("id-ID");
  const calculateSavings = (): number =>
    originalPrice ? originalPrice - price : 0;

  const renderStars = (): JSX.Element[] => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`${compact ? "h-3 w-3" : "h-3.5 w-3.5"} ${
          i < Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Link to={`/product/${id}`} className="block group">
      <div className="relative h-full flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-amber-200">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-white to-amber-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-300 transition-all duration-500 pointer-events-none" />

        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 loading='lazy"
          />
          {discount && (
            <div
              className={`absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-bold shadow-lg ${
                compact ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-xs"
              }`}
            >
              {discount}% OFF
            </div>
          )}
          {isLimited && (
            <div
              className={`absolute top-3 right-3 z-10 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold flex items-center gap-1 shadow-lg ${
                compact ? "px-2.5 py-1 text-xs" : "px-2.5 py-1 text-xs"
              }`}
            >
              <Sparkles className="h-3 w-3" />
              LIMITED
            </div>
          )}
          <button
            onClick={handleFavoriteClick}
            className={`absolute z-20 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 ${
              compact ? "bottom-2 right-2 p-1.5" : "bottom-3 right-3 p-2"
            }`}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart
              className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"} ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
              }`}
            />
          </button>
        </div>

        <div
          className={`relative flex flex-col flex-grow space-y-3 ${
            compact ? "p-3" : "p-4"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">{renderStars()}</div>
            <span className="text-gray-500 font-medium text-xs">
              ({rating})
            </span>
          </div>

          <h3
            className={`flex-grow font-semibold text-gray-800 leading-tight line-clamp-2 group-hover:text-amber-700 transition-colors duration-300 ${
              compact ? "text-sm" : "text-base"
            }`}
          >
            {title}
          </h3>

          <div className="!mt-auto pt-3 space-y-2">
            <div>
              <div className="flex items-baseline gap-2">
                <span
                  className={`font-bold text-gray-900 ${
                    compact ? "text-base" : "text-xl"
                  }`}
                >
                  Rp {formatPrice(price)}
                </span>
                {originalPrice && (
                  <span
                    className={`text-gray-400 line-through ${
                      compact ? "text-xs" : "text-sm"
                    }`}
                  >
                    Rp {formatPrice(originalPrice)}
                  </span>
                )}
              </div>
              {originalPrice && calculateSavings() > 0 && (
                <div className="text-xs text-green-600 font-medium mt-1">
                  Hemat Rp {formatPrice(calculateSavings())}
                </div>
              )}
            </div>

            <div className={`flex pt-2 ${compact ? "gap-2" : "gap-2"}`}>
              <button
                onClick={handleBuyNow}
                className={`w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-1.5 ${
                  compact ? "py-2 px-2 text-xs" : "py-2.5 px-4 text-sm"
                }`}
              >
                <ShoppingBag className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
                <span>{compact ? "Beli" : "Beli Sekarang"}</span>
              </button>
              <button
                onClick={handleAddToCart}
                className={`border-2 border-amber-200 hover:border-amber-300 text-amber-700 hover:text-amber-800 bg-amber-50/50 hover:bg-amber-50 rounded-lg font-semibold transition-all duration-300 ${
                  compact ? "px-2.5 text-xs" : "px-4"
                }`}
              >
                {compact ? (
                  <ShoppingBag className="h-3.5 w-3.5" />
                ) : (
                  "+ Keranjang"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
