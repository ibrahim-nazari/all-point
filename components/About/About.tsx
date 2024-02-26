import {
  ArrowRightIcon,
  Cog8ToothIcon,
  DevicePhoneMobileIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import ShippingIcon from "./ShippingIcon";

const About = () => {
  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-5">
            <div className="relative">
              <img src="/about01.jpg" className="rounded-md" alt="" />

              <div className="absolute bottom-24 end-0">
                <img
                  src="/about02.jpg"
                  className="rounded-md shadow-md w-48 h-48"
                  alt=""
                />
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <a
                    href="https://shreethemes.in/techwind/landing/index-business.html#!"
                    data-type="youtube"
                    data-id="S_CGed6E610"
                    className="lightbox h-14 w-14 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!--end col--> */}

          <div className="md:col-span-7">
            <div className="lg:ms-4">
              <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">
                Efficiency And Expertise:
                <br /> Your Trusted Partner In Cold Storage
              </h4>
              <p className="text-slate-800 max-w-xl">
                Our mission at International Coolers™ is providing the most
                environmentally responsible and reliable cold storage solutions
                with understanding, care, and trust. International Coolers™
                combines premium-quality products with industry expertise. We’re
                proud to offer walk in coolers and freezers that are built to
                last, designed for efficiency, and that can be shipped
                nationwide. Centrally located in Dallas, TX., we ship our range
                of products from two individual warehouses — so that our
                equipment reaches our customers faster. With custom-built,
                custom-designed options that boast a range of industry-trusted
                qualifications, our coolers, freezers, and walk-in cooler and
                freezer combos are perfectly suited for restaurants, schools,
                hotels, retailers, warehouses, florists, laboratories, and more.
                We strive to go above and beyond by not only offering
                top-of-the-line equipment, but also by ensuring our customers
                always have access to our team of trusted experts for support.
              </p>
              <Link
                href="/contact-us"
                className="py-2 px-4 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3 flex items-center w-fit"
              >
                Contact Us
                <ArrowRightIcon className="h-5 w-5 ml-3" />
              </Link>
            </div>
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end grid--> */}
      </div>
      {/* <!--end container--> */}

      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
            Who We Are ?
          </h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Our Mission, Products,
            <br /> and Services for Your Diverse Needs
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Reliable cold storage solutions, nationwide shipping. Custom-built
            for restaurants, hotels, and more.
          </p>
        </div>
        {/* <!--end grid--> */}

        <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
          <div className="group text-center flex flex-col items-center">
            <ShippingIcon />

            <div className="mt-6">
              <h3 className="font-bold text-2xl uppercase">Shipping</h3>

              <p className="text-slate-400 mt-4 max-w-sm">
                Shipping available Internationally and across the United States
              </p>
            </div>
          </div>
          {/* <!-- Shipping End --> */}

          <div className="group text-center flex flex-col items-center">
            <Cog8ToothIcon className="h-10 w-10" />

            <div className="mt-6">
              <h3 className="font-bold text-2xl uppercase">Quality</h3>

              <p className="text-slate-400 mt-4">Certified Equipment</p>
            </div>
          </div>
          {/* <!-- Quality End --> */}
          <div className="group text-center flex flex-col items-center">
            <PhoneIcon className="h-10 w-10" />

            <div className="mt-6">
              <h3 className="font-bold text-2xl uppercase">Support</h3>

              <p className="text-slate-400 mt-4">Certified Equipment</p>
            </div>
          </div>

          {/* <!-- Feature End --> */}
        </div>
      </div>
      {/* <!--end container--> */}
    </section>
  );
};

export default About;
