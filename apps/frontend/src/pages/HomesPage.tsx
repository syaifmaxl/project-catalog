import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroSlide from "../components/features/hero/HeroSlide";
import CategoryCard from "../components/features/kategori/CategoryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlidesData = [
  {
    image:
      "https://www.banggabersarung.com/images/site_post/2022/2022-06-24/gratis-ongkir-se-indonesia-pembelian-grosir-series-sarung-mangga--thumbnail-377.webp",
  },
  {
    image:
      "https://www.banggabersarung.com/images/site_post/2022/2022-06-12/grosir-series-sarung-mangga-beli-kodian-diskonnya-gede-gedean-3--thumbnail-186.webp",
  },
  {
    image:
      "https://www.banggabersarung.com/img/banners/Banner-Sarung-Mangga.jpg",
  },
  {
    image: "https://www.banggabersarung.com/img/banners/Banner-Promo-Gopay.jpg",
  },
  {
    image: "https://www.banggabersarung.com/img/banners/Banner-Jacquard.jpg",
  },
  {
    image: "https://www.banggabersarung.com/img/banners/Banner-Classy.jpg",
  },
];

const categoriesData = [
  {
    name: "Jacquard",
    image:
      "https://www.banggabersarung.com/images/product-category/jacquard--thumbnail-285.webp",
  },
  {
    name: "Classy",
    image:
      "https://www.banggabersarung.com/images/product-category/classy--thumbnail-119.webp",
  },
  {
    name: "Songket",
    image:
      "https://www.banggabersarung.com/images/product-category/songket--thumbnail-778.webp",
  },
  {
    name: "Diamond",
    image:
      "https://www.banggabersarung.com/images/product-category/diamond-kembang--thumbnail-824.webp",
  },
  {
    name: "Gold",
    image:
      "https://www.banggabersarung.com/images/product-category/diamond-kembang--thumbnail-824.webp",
  },
  {
    name: "Darusalam",
    image:
      "https://www.banggabersarung.com/images/product-category/gold-darussalam--thumbnail-645.webp",
  },
  {
    name: "Millenium Kembang",
    image:
      "https://www.banggabersarung.com/images/product-category/millenium-kembang--thumbnail-717.webp",
  },
  {
    name: "Gold Kembang",
    image:
      "https://www.banggabersarung.com/images/product-category/gold-kembang-citra-bulan--thumbnail-913.webp",
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-transparent overflow-hidden">
      <style>{`
        .swiper-pagination-bullet { background-color: #fde047; width: 10px; height: 10px; opacity: 0.5; }
        .swiper-pagination-bullet-active { opacity: 1; }
        .swiper-button-prev, .swiper-button-next { color: #ffffff; }
      `}</style>

      <div className="pt-20 pb-7">
        <Swiper
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom", 
            prevEl: ".swiper-button-prev-custom", 
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]} 
          className="mySwiper"
        >
          {heroSlidesData.map((slide, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <HeroSlide image={slide.image} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev-custom absolute top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors">
            <ChevronLeft size={28} className="text-white" />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 z-10 cursor-pointer bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors">
            <ChevronRight size={28} className="text-white" />
          </div>
        </Swiper>
      </div>

      <div className="container mx-auto px-4 lg:px-20 text-start">
        <h2 className="text-3xl font-semibold text-white mb-8 tracking-wider">
          Kategori Produk
        </h2>

        <div
          className="flex overflow-x-auto space-x-0 pb-16 lg:space-x-7
                  [&::-webkit-scrollbar]:hidden
                  [-ms-overflow-style:none]
                  [scrollbar-width:none]"
        >
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 
                                  lg:w-28 lg:h-28 xl:w-42 xl:h-42"
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
