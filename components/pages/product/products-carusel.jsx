"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomImage from "@/components/shared/customImage";

const ProductCarousel = ({ item }) => {
  const [mainImage, setMainImage] = useState(item.image[0]);
  const [remainingImages, setRemainingImages] = useState(
    item.image.slice(1, 3)
  );

  const handleClick = (img) => {
    if (mainImage !== img) {
      setMainImage(img);
      const filterImg = item.image.filter((c) => c != img);
      setRemainingImages(filterImg);
    }
  };

  useEffect(() => {}, [mainImage]);

  return (
    <main>
      <section className="hidden lg:block">
        {/* Main Image */}
        <div className="w-full min-h-[400px]">
          <CustomImage
            src={mainImage}
            alt={item.name}
            className="w-full h-full object-cover rounded-md overflow-hidden"
          />
        </div>
        {/* Thumbnail Images */}
        {remainingImages.length > 0 && (
          <div className="w-full flex gap-4 mt-2">
            {remainingImages.map((image, index) => (
              <div
                className="border-2  rounded-md relative h-[100px] w-[100px] m-2 overflow-hidden"
                onClick={() => handleClick(image)}
                key={index}
              >
                <CustomImage
                  src={image}
                  alt={item.name}
                  className="w-full rounded-xl cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="lg:hidden">
        <Carousel
          className="w-full mx-auto bg-secondary p-8 rounded-md h-full text-foreground flex flex-col justify-end"
          paginate={"false"}
        >
          <CarouselPrevious className="absolute left-2 top-1/2 rounded-full p-0 z-50" />
          <CarouselContent className="min-h-[300px] lg:h-full">
            {item.image.map((c, idx) => (
              <CarouselItem
                key={idx}
                className="bg-white rounded-md basis-full flex justify-center items-center p-2"
              >
                <div className="relative max-h-[400px] overflow-hidden">
                  <CustomImage src={c} alt={item.name} className="w-full rounded-md" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute right-2 top-1/2 rounded-full p-0 z-50" />
        </Carousel>
      </section>
    </main>
  );
};

export default ProductCarousel;
