import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { featuredProducts } from "../data/placeholder-data";
import type { Product } from "../components/features/produk/types";
import { Star, Minus, Plus, ShoppingCart, MessageCircleMore, Heart } from "lucide-react";
import  ProductDescription  from "../components/features/produk/ProductDescription";
import { ProductReviews } from "../components/features/produk/ProductReviews";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

type Tab = "description" | "reviews";

const ActionButtons: React.FC = () => (
  <div className="grid grid-cols-2 gap-4">
    <button className="bg-amber-500/20 cursor-pointer border border-amber-500 text-amber-400 font-semibold py-3 rounded-lg hover:bg-amber-500/30 transition-colors flex items-center justify-center gap-2">
      <ShoppingCart size={20} />
      Keranjang
    </button>
    <button className="bg-amber-500 cursor-pointer text-slate-900 font-bold py-3 rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2">
      <MessageCircleMore size={20} />
      Beli Sekarang
    </button>
  </div>
);

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [hoverImage, setHoverImage] = useState<string>(""); 
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<Tab>("description");

  useEffect(() => {
    const foundProduct = featuredProducts.find((p) => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImage(foundProduct.image);
      setHoverImage(foundProduct.image); 
    }
  }, [productId]);

  if (!product) {
    return <div className="text-white text-center py-40">Loading...</div>;
  }

  const thumbnails = [
    product.image,
    "https://www.banggabersarung.com/images/product-category/classy--thumbnail-119.webp",
    "https://www.banggabersarung.com/images/product-category/songket--thumbnail-778.webp",
    "https://www.banggabersarung.com/images/product-category/jacquard--thumbnail-285.webp",
  ];

  return (
    <div className="container mx-auto px-4 lg:px-20 py-20 text-white pb-28 lg:pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="hidden lg:flex flex-row-reverse lg:flex-row gap-4">
            <div className="w-4/5 aspect-square bg-slate-800 rounded-lg overflow-hidden">
              <img
                src={hoverImage || activeImage}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/5 flex flex-col gap-4">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className={`aspect-square w-full rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
                    activeImage === thumb
                      ? "border-amber-400 opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  onMouseEnter={() => setHoverImage(thumb)}
                  onMouseLeave={() => setHoverImage(activeImage)}
                  onClick={() => {
                    setActiveImage(thumb);
                    setHoverImage(thumb);
                  }}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <Swiper
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              modules={[Pagination, Autoplay]}
              className="aspect-square w-full rounded-lg"
            >
              {thumbnails.map((thumb, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={thumb}
                    alt={`Product View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-2 mb-2">
            {product.discount && (
              <span className="bg-amber-500 text-slate-900 text-xs font-bold px-2 py-0.5 rounded">
                {product.discount}% OFF
              </span>
            )}
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
              Stok tinggal 2
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            {product.title}
          </h1>
          <span className="text-sm text-slate-400 mb-4">Terjual 0 Produk</span>
          <div className="flex items-center gap-2 mb-6">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            <span className="font-semibold">{product.rating}</span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">
              Rp {product.price.toLocaleString("id-ID")}
            </span>
            {product.originalPrice && (
              <span className="ml-3 text-lg text-slate-500 line-through">
                Rp {product.originalPrice.toLocaleString("id-ID")}
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-semibold">Kuantitas</span>
            <div className="flex items-center border border-slate-600 rounded-lg">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-3 text-slate-400 hover:text-white"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-3 text-slate-400 hover:text-white"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <ActionButtons />
          </div>

          <button className="flex items-center gap-2 text-slate-300 mt-6 hover:text-white transition-colors">
            <Heart size={16} />
            Tambahkan pada wishlist
          </button>
        </div>
      </div>

      <div className="w-full py-4">
        <div className="border-b border-slate-700 mb-6">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("description")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === "description"
                  ? "border-amber-400 text-amber-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              Deskripsi
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === "reviews"
                  ? "border-amber-400 text-amber-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              Ulasan (2)
            </button>
          </nav>
        </div>
        <div>
          {activeTab === "description" && <ProductDescription />}
          {activeTab === "reviews" && <ProductReviews />}
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-lg border-t border-slate-700 p-4">
        <ActionButtons />
      </div>
    </div>
  );
};

export default ProductDetailPage;
