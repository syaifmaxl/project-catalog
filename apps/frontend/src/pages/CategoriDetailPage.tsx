import ProductCard from "../components/features/produk/ProductCard"
import type { Product } from "../components/features/produk/types";
import { useFeaturedProducts } from "../hooks/useFeaturedProducts";
import { useParams } from "react-router-dom";

const CategoriDetailPage = () => {
  const { categoryName } = useParams()
  const { products, handleFavorite } = useFeaturedProducts();
  
  const handleQuickView = (product: Product) => {
    console.log("Quick view:", product);
  };

  const handleBuyNow = (productId: string) =>
    console.log("Buy now:", productId);

  const handleAddToCart = (productId: string) =>
    console.log("Add to cart:", productId);

  return (
    <div className="pt-15">
      <div className="w-[90%] mx-auto">
        {/* banner */}
        <img
          className="w-full rounded-2xl overflow-hidden"
          src="https://www.banggabersarung.com/images/product-category/jacquard--banner-945.webp"
          alt="benner"
        />

        {/* description and title */}
        <div className="text-white flex flex-col gap-5 mt-5">
          <h1 className="font-bold text-4xl capitalize">{categoryName}</h1>
          <p className="text-justify">
            Sarung Tenun Mangga Jacquard adalah persembahan terbaik kami,
            menggunakan jenis benang, motif, tekstur yang detail dan premium.
            Keindahan dan kenyamanan menjadi prioritas utama. Didedikasikan
            untuk pemakai sarung yang mengerti akan kualitas bahan.
          </p>
        </div>

        {/* product cart */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product, index) => (
            <div key={index} className="p-2">
              <ProductCard
                compact={true}
                {...product}
                onFavoriteClick={() => handleFavorite(product.id)}
                onQuickView={() => handleQuickView(product)}
                onBuyNow={() => handleBuyNow(product.id)}
                onAddToCart={() => handleAddToCart(product.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriDetailPage;
