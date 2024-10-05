"use client";
import React from "react";

const BrandCarousel = ({brands}) => {
  return (
    <div className="marquee-container w-full overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0,_white_150px,white_calc(100%-150px),_transparent_100%)]">
      <div className="inline-flex animate-marquee whitespace-nowrap gap-20 p-10 ">
        {/* First set of brands */}
        {brands.map((brand, index) => (
          <div
            key={`first-${index}`}
            className="flex bg-rtlLight dark:bg-rtlDark border border-accentNeon/30 items-center justify-center min-w-[200px] h-24 rounded-lg"
          >
            {brand}
          </div>
        ))}
        {/* Duplicate set of brands for seamless loop */}
        {brands.map((brand, index) => (
          <div
            key={`second-${index}`}
            className="flex bg-rtlLight dark:bg-rtlDark border border-accentNeon/30 items-center justify-center min-w-[200px] h-24 rounded-lg"
          >
            {brand}
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee ${brands.length * 8}s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BrandCarousel;
