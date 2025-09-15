import { useState } from "react";
import type { Product } from "../components/features/produk/types";
import { featuredProducts as initialProducts } from "../data/placeholder-data";

export function useFeaturedProducts() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleFavorite = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, isFavorite: !p.isFavorite } : p
      )
    );
  };
  
  return { products, handleFavorite };
}
