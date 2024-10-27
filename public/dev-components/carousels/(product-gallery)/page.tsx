import React from "react";
import ProductGallery from "./product-gallery";

const ProductGalleryUsage = () => {
  let images = [
    {
      src: "/assets/img-placeholder.png",
      alt: "img1",
    },
    {
      src: "/assets/img-placeholder.png",
      alt: "img2",
    },
    {
      src: "/assets/img-placeholder.png",
      alt: "img3",
    },
    {
      src: "/assets/img-placeholder.png",
      alt: "img4",
    },
    {
      src: "/assets/img-placeholder.png",
      alt: "img5",
    },
  ];
  return (
    <section className="max-w-lg w-full h-52">
      <ProductGallery images={images} />
    </section>
  );
};

export default ProductGalleryUsage;
