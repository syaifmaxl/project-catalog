import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroSlide from "../features/hero/HeroSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlidesData } from "../../data/placeholder-data";

export const HeroSection: React.FC = () => {
  return (
    <div className="pt-20 pb-7">
      <div className="relative">
        <Swiper
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {heroSlidesData.map((slide, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <HeroSlide image={slide.image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev-custom absolute top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors">
          <ChevronLeft size={28} className="text-white" />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 z-10 cursor-pointer bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors">
          <ChevronRight size={28} className="text-white" />
        </div>
      </div>
    </div>
  );
};
