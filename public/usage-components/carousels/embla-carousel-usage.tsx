import React from "react";
import EmblaCarousel from "../../preview-components/carousels/embla-carousel";

const EmblaCarouselUsage = () => {
  let carouselData = [
    "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600",

    "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600",

    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",

    "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return <EmblaCarousel carouselData={carouselData} perView={1} />;
};

export default EmblaCarouselUsage;
