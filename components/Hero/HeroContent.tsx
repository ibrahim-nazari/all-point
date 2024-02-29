import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { HeroContentType } from "@types";
import React from "react";
const infoObject = {
  title: "Global Leader In Cold Storage Solutions",
  description: `International Coolers™ combines premium-quality products with industry expertise. We’re proud to offer custom walk-in coolers, freezers, and combos that are built to last, designed for efficiency, and that can be shipped nationwide as well as internationally. Centrally located in Dallas, TX., we ship our range of products from two individual warehouses — so that our equipment reaches our customers faster. Request a free quote today today!`,
  buttonSeeProduct: "View Products",
  buttonViewProducts: "Request a quote",
};

interface Props {
  heroSectionData: HeroContentType;
}
const HeroContent = ({ heroSectionData }: Props) => {
  return (
    <div>
      <div className="flex flex-col absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-5 w-1/2">
        <h3 className="font-bold   text-white my-5 sm:my-10 text-lg sm:text-3xl">
          {heroSectionData.title}
        </h3>
        <p className="font-semibold text-white text-md sm:text-lg">
          {heroSectionData.description}
        </p>
        <button className="px-3 py-2 sm:px-7 sm:py-3 text-white cursor-pointer font-semibold bg-blue-600  w-fit my-5 sm:my-10 rounded-md hover:bg-blue-500 flex items-center">
          {heroSectionData.buttonViewProducts}
          <ArrowRightIcon className="h-5 w-5 ml-3" />
        </button>
        <button className="px-3 py-2 sm:px-5 sm:py-3 text-white cursor-pointer font-semibold bg-blue-600  w-fit  rounded-md hover:bg-blue-500 flex items-center">
          {heroSectionData.buttonRequestQuote}
          <ArrowRightIcon className="h-5 w-5 ml-3" />
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
