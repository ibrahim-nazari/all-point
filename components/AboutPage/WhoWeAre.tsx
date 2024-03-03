import { extractWhoWeAreData } from "@utils";
import { useTranslations } from "next-intl";
import React from "react";

const WhoWeAre = () => {
  const t = useTranslations("aboutPage");
  const whoWeAreData = extractWhoWeAreData(t);
  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <img
                    src="/aboutpage/ab03.jpg"
                    className="shadow rounded-md"
                    alt=""
                  />
                  <img
                    src="/aboutpage/ab02.jpg"
                    className="shadow rounded-md"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <img
                    src="/aboutpage/ab01.jpg"
                    className="shadow rounded-md"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 md:col-span-6">
            <div className="lg:ms-5">
              <div className="flex mb-4">
                <span className="text-indigo-600 text-2xl font-bold mb-0">
                  <span
                    className="counter-value text-6xl font-bold"
                    data-target="15"
                  >
                    10
                  </span>
                  +
                </span>
                <span className="self-end font-medium ms-2 max-w-[80px]">
                  {whoWeAreData.experience}
                </span>
              </div>

              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                {whoWeAreData.title}
              </h3>

              <p className="text-slate-400 max-w-xl">
                {whoWeAreData.description}
              </p>

              <div className="mt-6">
                <a
                  href="https://shreethemes.in/techwind/landing/contact-one.html"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
                >
                  {whoWeAreData.contactButtonText}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end grid--> */}
      </div>
      {/* <!--end container--> */}

      {/* <!-- Business Partner --> */}
      <div className="container relative mt-8">
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
          <div className="mx-auto mt-8">
            <img src="/aboutpage/amazon.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto mt-8">
            <img src="/aboutpage/google.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto mt-8">
            <img src="/aboutpage/lenovo.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto mt-8">
            <img src="/aboutpage/paypal.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto mt-8">
            <img src="/aboutpage/shopify.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto mt-8">
            <img src="/aboutpage/spotify.svg" className="h-6" alt="" />
          </div>
        </div>
        {/* <!--end grid--> */}
      </div>
      {/* <!--end container--> */}
      {/* <!-- Business Partner --> */}
    </section>
  );
};

export default WhoWeAre;
