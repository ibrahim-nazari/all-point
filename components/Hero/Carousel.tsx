"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
interface Props {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}
const infoObject = {
  title: "Global Leader In Cold Storage Solutions",
  description: `International Coolers™ combines premium-quality products with industry expertise. We’re proud to offer custom walk-in coolers, freezers, and combos that are built to last, designed for efficiency, and that can be shipped nationwide as well as internationally. Centrally located in Dallas, TX., we ship our range of products from two individual warehouses — so that our equipment reaches our customers faster. Request a free quote today today!`,
  buttonSeeProduct: "View Products",
  buttonRequestQuote: "Request a quote",
};
export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: Props) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative">
      <div
        className=" inline-block whitespace-nowrap transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="opacity-60 bg-black absolute top-0 left-0 w-full h-full "></div>
      <div className="flex flex-col absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-5 w-1/2">
        <h3 className="font-bold   text-white my-5 sm:my-10 text-lg sm:text-3xl">
          {infoObject.title}
        </h3>
        <p className="font-semibold text-white text-md sm:text-lg">
          {infoObject.description}
        </p>
        <button className="px-3 py-2 sm:px-7 sm:py-3 text-white cursor-pointer font-semibold bg-blue-600  w-fit my-5 sm:my-10 rounded-md hover:bg-blue-500 flex items-center">
          {infoObject.buttonSeeProduct}
          <ArrowRightIcon className="h-5 w-5 ml-3" />
        </button>
        <button className="px-3 py-2 sm:px-5 sm:py-3 text-white cursor-pointer font-semibold bg-blue-600  w-fit  rounded-md hover:bg-blue-500 flex items-center">
          {infoObject.buttonRequestQuote}
          <ArrowRightIcon className="h-5 w-5 ml-3" />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
