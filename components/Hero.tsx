import { HeroContentType } from "@types";
import Carousel from "./Hero/Carousel";
import { extractHeroSection } from "@utils";
import { useTranslations } from "next-intl";

const hotelCards = [
  {
    imageSrc: "/1.jpg",
    title: "Global Leader In Cold Storage Solutions",
    description: `International Coolers™ combines premium-quality products with industry expertise. We’re proud to offer custom walk-in coolers, freezers, and combos that are built to last, designed for efficiency, and that can be shipped nationwide as well as internationally. Centrally located in Dallas, TX., we ship our range of products from two individual warehouses — so that our equipment reaches our customers faster. Request a free quote today today!`,
    buttonSeeProduct: "View Products",
    buttonViewProducts: "Request a quote",
  },
  {
    imageSrc: "/2.jpg",
    title: "Global Leader In Cold Storage Solutions",
    description: `International Coolers™ combines premium-quality products with industry expertise. We’re proud to offer custom walk-in coolers, freezers, and combos that are built to last, designed for efficiency, and that can be shipped nationwide as well as internationally. Centrally located in Dallas, TX., we ship our range of products from two individual warehouses — so that our equipment reaches our customers faster. Request a free quote today today!`,
    buttonSeeProduct: "View Products",
    buttonViewProducts: "Request a quote",
  },
  {
    imageSrc: "/3.png",
    title: "Global Leader In Cold Storage Solutions",
    description: `International Coolers™ combines premium-quality products with industry expertise. We’re proud to offer custom walk-in coolers, freezers, and combos that are built to last, designed for efficiency, and that can be shipped nationwide as well as internationally. Centrally located in Dallas, TX., we ship our range of products from two individual warehouses — so that our equipment reaches our customers faster. Request a free quote today today!`,
    buttonSeeProduct: "View Products",
    buttonViewProducts: "Request a quote",
  },
  // Add more items as needed...
];

const Hero = () => {
  const t = useTranslations("heroSectionHome");
  const heroSectionData: HeroContentType = extractHeroSection(t);
  return (
    <div className="max-w-full mx-auto mt-24">
      <Carousel heroSectionData={heroSectionData} autoSlide={true}>
        {hotelCards.map((item) => (
          <img
            alt={item.title}
            className="object-cover w-screen min-h-[750px] max-h-[800px] inline-block"
            src={item.imageSrc}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
