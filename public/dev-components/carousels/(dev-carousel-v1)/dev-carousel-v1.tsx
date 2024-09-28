"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { GoDot } from "react-icons/go";
import { IoCaretForwardCircleOutline } from "react-icons/io5";

type emblaCarouselProps = {
  carouselData: React.ReactNode[];
  perView?: number;
};

const DevCarouselV1 = ({ carouselData, perView = 1 }: emblaCarouselProps) => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "keepSnaps",
    slidesToScroll: 1,
  });
  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return;
    setSelectedSlideIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", logSlidesInView).on("reInit", logSlidesInView);
    }
  }, [emblaApi, logSlidesInView]);

  return (
    <section
      className=" w-full max-w-md h-64  aspect-square overflow-hidden relative rounded-lg"
      ref={emblaRef}
    >
      <div className=" flex h-full">
        {carouselData.map((elem, index) => (
          <div
            key={`slide-${index}`}
            className="flex-grow-0 flex-shrink-0 p-2 overflow-hidden"
            style={{ flex: `0 0 ${100 / perView}%` }}
            onClick={() => scrollTo(index)}
          >
            <div className="w-full h-full bg-rtlLight rounded-lg dark:bg-rtlDark border border-accentNeon/30 text-accentNeon font-semibold text-4xl grid place-items-center">
              {elem}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 rotate-180 left-0 text-3xl text-accentNeon hover:text-cyan-700"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
      >
        <IoCaretForwardCircleOutline />
      </button>
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 right-0 text-3xl text-accentNeon hover:text-cyan-700"
        onClick={() => emblaApi && emblaApi.scrollNext()}
      >
        <IoCaretForwardCircleOutline />
      </button>
      <span className="flex z-10 items-center justify-center absolute left-1/2 transform -translate-x-1/2 bottom-3">
        {carouselData.map((_, index) => (
          <GoDot
            onClick={() => scrollTo(index)}
            key={index}
            className={`cursor-pointer transition-all duration-500 hover:text-accentNeon 
              ${
                index === selectedSlideIndex
                  ? " text-accentNeon text-lg"
                  : " text-accentNeon/40 text-base"
              }
            `}
          />
        ))}
      </span>
    </section>
  );
};

export default DevCarouselV1;
