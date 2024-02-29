"use client";
import { useState, useEffect } from "react";
import HeroContent from "./HeroContent";
import { HeroContentType } from "@types";
interface Props {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  heroSectionData: HeroContentType;
}

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  heroSectionData,
}: Props) {
  const [curr, setCurr] = useState(0);

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
      <HeroContent heroSectionData={heroSectionData} />
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
