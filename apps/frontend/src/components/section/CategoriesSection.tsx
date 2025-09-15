import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CategoryCard from "../features/kategori/CategoryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categoriesData } from "../../data/placeholder-data";

export const CategoriesSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-20 text-start">
      <div className="relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-white tracking-wider">
            Kategori Produk
          </h2>
          <div className="flex gap-2">
            <button className="category-swiper-button-prev p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button className="category-swiper-button-next p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={"auto"}
          navigation={{
            nextEl: ".category-swiper-button-next",
            prevEl: ".category-swiper-button-prev",
          }}
          className="categorySwiper"
        >
          {categoriesData.map((category, index) => (
            <SwiperSlide key={index} className="!w-40 lg:!w-44">
              <CategoryCard {...category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
