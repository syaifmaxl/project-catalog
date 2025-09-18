import React from "react";
import ProductCard from "../features/produk/ProductCard";
import type { Product } from "../features/produk/types";
import { Sparkles, ArrowRight } from "lucide-react";
import { useFeaturedProducts } from "../../hooks/useFeaturedProducts";
import { motion } from "framer-motion";

export const FeaturedProductsSection: React.FC = () => {
  const { products, handleFavorite } = useFeaturedProducts();

  const handleQuickView = (product: Product) => {
    (product);
  };
  const handleBuyNow = (productId: string) =>
    console.log("Buy now:", productId);
  const handleAddToCart = (productId: string) =>
    console.log("Add to cart:", productId);
  const handleViewAllProducts = () => console.log("View all products");

  return (
    <>
      <div className="container mx-auto px-4 lg:px-20 py-10">
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-wider">
                Promo Menarik
              </h2>
              <p className="text-gray-300 text-sm lg:text-base">
                Koleksi premium dengan harga sangat bersahabat
              </p>
            </div>
          </div>
          <button
            onClick={handleViewAllProducts}
            className="hidden md:flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors duration-300 group text-sm"
          >
            Lihat Semua
            <div className="w-7 h-7 bg-amber-500/20 rounded-full flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </motion.div>

        <div
          className="flex overflow-x-auto gap-3 pb-4 lg:hidden
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {products.map((product, index) => (
            <motion.div
              key={`mobile-${product.id}`}
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0],
                delay: index * 0.1,
              }}
              className="w-48 flex-shrink-0"
            >
              <ProductCard
                compact={true}
                {...product}
                onFavoriteClick={() => handleFavorite(product.id)}
                onQuickView={() => handleQuickView(product)}
                onBuyNow={() => handleBuyNow(product.id)}
                onAddToCart={() => handleAddToCart(product.id)}
              />
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-6 lg:gap-4">
          {products.slice(0, 6).map((product, index) => (
            <motion.div
              key={`desktop-${product.id}`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0],
                delay: index * 0.1,
              }}
            >
              <ProductCard
                compact={true}
                {...product}
                onFavoriteClick={() => handleFavorite(product.id)}
                onQuickView={() => handleQuickView(product)}
                onBuyNow={() => handleBuyNow(product.id)}
                onAddToCart={() => handleAddToCart(product.id)}
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center md:hidden mt-6">
          <button
            onClick={handleViewAllProducts}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm"
          >
            Lihat Semua Produk
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </>
  );
};
