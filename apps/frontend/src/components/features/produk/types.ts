export interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  isLimited?: boolean;
  isFavorite?: boolean;
  compact?: boolean;
  onFavoriteClick?: () => void;
  onQuickView?: () => void;
  onBuyNow?: () => void;
  onAddToCart?: () => void;
}

export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  isLimited?: boolean;
  isFavorite?: boolean;
}
