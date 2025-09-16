import React from "react";
import { HeroSection } from "../components/section/HeroSection";
import { CategoriesSection } from "../components/section/CategoriesSection";
import { FeaturedProductsSection } from "../components/section/FeaturedProductsSection";

const HomePage: React.FC = () => {
  return (
    <div className="bg-transparent overflow-hidden">
      <style>{`
        .swiper-pagination-bullet { background-color: #fde047; width: 10px; height: 10px; opacity: 0.5; }
        .swiper-pagination-bullet-active { opacity: 1; }
        .swiper-button-prev, .swiper-button-next { color: #ffffff; }
      `}</style>

      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
    </div>
  );
};

export default HomePage;
