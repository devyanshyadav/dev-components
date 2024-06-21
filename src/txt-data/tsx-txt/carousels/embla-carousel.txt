"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { GoDot } from "react-icons/go";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import clsx from "clsx";

type emblaCarouselProps = {
  carouselData: string[];
  perView?: number;
};

const EmblaCarousel = ({ carouselData, perView = 1 }: emblaCarouselProps) => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "keepSnaps",
    slidesToScroll: perView,
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
      className=" w-full max-w-md h-64 aspect-square overflow-hidden relative rounded-lg"
      ref={emblaRef}
    >
      <div className=" flex h-full  gap-2">
        {carouselData.map((elem, index) => (
          <div
            key={`slide-${index}`}
            className="flex-grow-0 flex-shrink-0 basis-full overflow-hidden rounded-lg"
            style={{ minWidth: 100 / perView + "%" }}
            onClick={() => scrollTo(index)}
          >
            <img
              src={elem}
              className="w-full h-full object-cover"
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 rotate-180 left-1 text-3xl text-cyan-500 hover:text-cyan-700"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
      >
        <IoCaretForwardCircleOutline />
      </button>
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 right-1 text-3xl text-cyan-500 hover:text-cyan-700"
        onClick={() => emblaApi && emblaApi.scrollNext()}
      >
        <IoCaretForwardCircleOutline />
      </button>
      <span className="flex z-10 items-center justify-center absolute left-1/2 transform -translate-x-1/2 bottom-3">
        {carouselData.map((_, index) => (
          <GoDot
            onClick={() => scrollTo(index)}
            key={index}
            className={clsx(
              "cursor-pointer transition-all duration-500 hover:text-cyan-500",
              index === selectedSlideIndex
                ? "text-cyan-500 text-lg"
                : "text-cyan-700 text-base"
            )}
          />
        ))}
      </span>
    </section>
  );
};

export default EmblaCarousel;
