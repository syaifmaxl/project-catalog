import React from "react";

interface HeroSlideProps {
  image: string;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ image }) => {
  return (
<<<<<<< Updated upstream
    <div className="w-[75vw] aspect-video md:aspect-[14/6] rounded-lg overflow-hidden">
=======
    <div className="w-[75vw] aspect-video md:aspect-[21/9] rounded-lg overflow-hidden">
>>>>>>> Stashed changes
      <img
        src={image}
        alt="Promotional Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroSlide;
