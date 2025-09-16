import React, { type JSX } from 'react';
import { Heart, ShoppingBag, Star, Sparkles } from 'lucide-react';
import type { ProductCardProps } from './types';

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, originalPrice, discount, rating = 4.8, isLimited = false, isFavorite = false, compact = false, onFavoriteClick, onQuickView, onBuyNow, onAddToCart }) => {
  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onFavoriteClick?.();
  };

  const handleQuickView = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView?.();
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

  const formatPrice = (amount: number): string => {
    return amount.toLocaleString('id-ID');
  };

  const calculateSavings = (): number => {
    if (!originalPrice) return 0;
    return originalPrice - price;
  };

  const renderStars = (): JSX.Element[] => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`${compact ? 'w-3 h-3' : 'w-3.5 h-3.5'} ${i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className='group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200'>
      <div className='absolute inset-0 bg-gradient-to-br from-amber-50/30 via-white to-amber-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

      <div className='relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-square flex items-center justify-center'>
        {discount && (
          <div className='absolute top-3 left-3 z-10'>
            <div className='bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-bold shadow-lg px-3 py-1.5 text-xs'>{discount}% OFF</div>
          </div>
        )}

        {isLimited && (
          <div className='absolute top-3 right-3 z-10'>
            <div className='bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold flex items-center gap-1 shadow-lg px-2.5 py-1 text-xs'>
              <Sparkles className='w-3 h-3' />
              LIMITED
            </div>
          </div>
        )}

        {/* gambar pakai aspect-ratio + contain */}
        <div className='overflow-hidden'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-700'
            loading='lazy'
          />
        </div>

        {/* FAVORITE BUTTON */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute z-20 bg-white/90 backdrop-blur-sm rounded-full shadow-lg 
              hover:bg-white hover:scale-110 transition-all duration-300 
              ${compact ? 'bottom-2 right-2 p-1.5' : 'bottom-3 right-3 p-2'}`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`${compact ? 'w-3.5 h-3.5' : 'w-4 h-4'} ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>

        {!compact && (
          <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
            <button
              onClick={handleQuickView}
              className='bg-white text-gray-900 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl'
            >
              Quick View
            </button>
          </div>
        )}
      </div>

      <div className={`relative space-y-3 ${compact ? 'p-3' : 'p-5'}`}>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1'>{renderStars()}</div>
          <span className={`text-gray-600 font-medium ${compact ? 'text-xs' : 'text-xs'}`}>({rating})</span>
        </div>

        <h3 className={`font-semibold text-gray-900 leading-tight line-clamp-2 group-hover:text-amber-700 transition-colors duration-300 ${compact ? 'text-xs' : 'text-sm'}`}>{title}</h3>

        <div className={compact ? 'space-y-1' : 'space-y-2'}>
          <div className='flex items-center gap-2'>
            <span className={`font-bold text-gray-900 ${compact ? 'text-sm' : 'text-lg'}`}>Rp. {formatPrice(price)}</span>
            {originalPrice && <span className={`text-gray-500 line-through ${compact ? 'text-xs' : 'text-sm'}`}>Rp. {formatPrice(originalPrice)}</span>}
          </div>

          {originalPrice && calculateSavings() > 0 && <div className='text-xs text-green-600 font-medium'>Hemat Rp. {formatPrice(calculateSavings())}</div>}
        </div>

        <div className={`flex pt-2 ${compact ? 'gap-1' : 'gap-2'}`}>
          <button
            onClick={handleBuyNow}
            className={`flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-1 ${
              compact ? 'py-1.5 px-2 text-xs' : 'py-2.5 px-4 text-sm'
            }`}
          >
            <ShoppingBag className={compact ? 'w-3 h-3' : 'w-4 h-4'} />
            {compact ? 'Beli' : 'Beli Sekarang'}
          </button>

          <button
            onClick={handleAddToCart}
            className={`border-2 border-amber-200 hover:border-amber-300 text-amber-700 hover:text-amber-800 rounded-lg font-semibold transition-all duration-300 hover:bg-amber-50 ${compact ? 'px-2 py-1.5 text-xs' : 'px-4 py-2.5 text-sm'}`}
          >
            {compact ? '+' : '+ Keranjang'}
          </button>
        </div>

        {!compact && (
          <div className='flex items-center justify-center pt-2'>
            <div className='flex items-center gap-1 text-xs text-amber-600 font-medium'>
              <div className='w-1.5 h-1.5 bg-amber-500 rounded-full' />
              Premium Quality
              <div className='w-1.5 h-1.5 bg-amber-500 rounded-full' />
            </div>
          </div>
        )}
      </div>

      <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-amber-200/20 via-transparent to-amber-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
    </div>
  );
};

export default ProductCard;
