import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
      <div className="text-center px-6 mt-6">
        <div className="size-20 bg-indigo-600/5 w-14 h-14 rounded-xl   flex align-middle justify-center items-center shadow-sm   mx-auto">
          <PhoneIcon className="h-6 w-6" />
        </div>

        <div className="content mt-7">
          <h5 className="title h5 text-xl font-medium">Phone</h5>
          <p className="text-slate-400 mt-3">
            The phrasal sequence of the is now <br />
            so that many campaign and benefit
          </p>

          <div className="mt-5">
            <a
              href="tel:+152534-468-854"
              className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[&#39;&#39;] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              +152 534-468-854
            </a>
          </div>
        </div>
      </div>

      <div className="text-center px-6 mt-6">
        <div className="size-20 bg-indigo-600/5 w-14 h-14 rounded-xl   flex align-middle justify-center items-center shadow-sm   mx-auto">
          <EnvelopeIcon className="h-6 w-6" />
        </div>

        <div className="content mt-7">
          <h5 className="title h5 text-xl font-medium">Email</h5>
          <p className="text-slate-400 mt-3 max-sm">
            The phrasal sequence of the is now <br /> so that many campaign and
            benefit
          </p>

          <div className="mt-5">
            <a
              href="mailto:contact@example.com"
              className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[&#39;&#39;] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              contact@example.com
            </a>
          </div>
        </div>
      </div>

      <div className="text-center px-6 mt-6">
        <div className="size-20 bg-indigo-600/5 w-14 h-14 rounded-xl   flex align-middle justify-center items-center shadow-sm   mx-auto">
          <MapPinIcon className="h-6 w-6" />
        </div>

        <div className="content mt-7">
          <h5 className="title h5 text-xl font-medium">Location</h5>
          <p className="text-slate-400 mt-3 max-md">
            C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485
          </p>

          <div className="mt-5">
            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
              data-type="iframe"
              className="video-play-icon read-more lightbox relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[&#39;&#39;] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              View on Google map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
