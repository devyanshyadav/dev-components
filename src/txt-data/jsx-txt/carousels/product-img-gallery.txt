"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import clsx from "clsx";

const ProductImgGallery = ({ carouselData }) => {
    const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        containScroll: "trimSnaps",
        dragFree: false,
        slidesToScroll: 1,
    });
    const scrollTo = (index) => {
        if (emblaApi) {
            emblaApi.scrollTo(index);
        }
    };

    const logSlidesInView = useCallback((emblaApi) => {
        if (!emblaApi) return;
        setSelectedSlideIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on("select", logSlidesInView).on("reInit", logSlidesInView);
        }
    }, [emblaApi, logSlidesInView]);

    return (
        <main className="w-full bg-slate-50 dark:bg-slate-900 border border-cyan-500/30 space-y-2 p-2 rounded-lg">
            <section
                className="w-full aspect-square overflow-hidden relative rounded-lg"
                ref={emblaRef}
            >
                <div className=" flex h-full">
                    {carouselData.map((elem, index) => (
                        <div
                            key={index}
                            className="flex-grow-0 flex-shrink-0 basis-full"
                            onClick={() => scrollTo(index)}
                        >
                            <img
                                src={elem}
                                onClick={(event) =>
                                    event.target.requestFullscreen()
                                }
                                alt="product-images"
                                className="object-cover object-center w-full aspect-square"
                            />
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="absolute top-1/2 left-1 text-2xl rotate-180 text-cyan-500 hover:text-cyan-700"
                    onClick={() => emblaApi && emblaApi.scrollPrev()}
                >
                    <IoCaretForwardCircleOutline />
                </button>
                <button
                    type="button"
                    className="absolute top-1/2 right-1 text-2xl text-cyan-500 hover:text-cyan-700"
                    onClick={() => emblaApi && emblaApi.scrollNext()}
                >
                    <IoCaretForwardCircleOutline />
                </button>
            </section>
            <section className="flex flex-wrap gap-2 rounded-md justify-center ">
                {carouselData.map((elem, index) => (
                    <div
                        key={index}
                        className="h-12 aspect-square overflow-hidden rounded-md cursor-pointer"
                        onClick={() => scrollTo(index)}
                    >
                        <img
                            src={elem}
                            alt="product-images"
                            className={clsx(
                                "object-cover border-2 rounded-md object-center h-full aspect-square",
                                index == selectedSlideIndex
                                    ? "border-cyan-500"
                                    : "border-cyan-700"
                            )}
                        />
                    </div>
                ))}
            </section>
        </main>
    );
};

export default ProductImgGallery;
