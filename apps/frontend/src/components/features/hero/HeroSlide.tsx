import React from "react";

interface HeroSlideProps {
  image: string;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ image }) => {
  return (
    <div className="w-[75vw] aspect-video md:aspect-[14/6] rounded-lg overflow-hidden">
      <img
        src={image}
        alt="Promotional Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroSlide;
