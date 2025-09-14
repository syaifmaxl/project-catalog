import React from "react";

interface CategoryCardProps {
  image: string;
  name: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, name }) => {
  return (
    <div
      className="relative group overflow-hidden rounded-lg cursor-pointer
                   w-38 h-44 flex-shrink-0
                   lg:w-full lg:h-full lg:aspect-[4/5]"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
        <div className="p-2 lg:p-3">
          <h3 className="text-white text-sm lg:text-base font-semibold tracking-wider">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
