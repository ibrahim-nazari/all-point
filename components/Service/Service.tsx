import {
  ChatBubbleOvalLeftEllipsisIcon,
  Cog8ToothIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const services = [
  {
    icon: <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10" />,
    title: "Consultation",
    description: `At International Coolers™ our design team will work alongside you to assist with your vision and create a custom cold storage solution that best meets your requirements for your application.`,
    id: 1,
  },
  {
    icon: <Cog8ToothIcon className="w-10 h-10" />,
    title: "Commercial-Grade Equipment",
    description: `Our clients depend on each walk-in cooler & freezer that we provide and is central to their business, so we take pride in details to ensure every customer's needs are met.`,
    id: 2,
  },
  {
    icon: <WrenchScrewdriverIcon className="w-10 h-10" />,
    title: "Installation Plus",
    description: `International Coolers™ installation provides licensed contractors per state requirements with above average general liability, automobile and workers compensation insurance policies with the client named in the additional insured verbiage as well as certificate holder on larger projects.`,
    id: 3,
  },
  {
    icon: <PhoneIcon className="w-10 h-10" />,
    title: "Support for whenever you need it",
    description: `Our support team is available throughout the entire process.`,
    id: 4,
  },
];

const Service = () => {
  return (
    <section className="relative md:py-24 py-16 overflow-hidden">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="text-indigo-600 text-3xl font-bold   mb-2">
            Service And Support
          </h6>

          <p className="text-slate-800 max-w-sm mx-auto">
            Custom walk-in coolers & freezers. Quality, reliability,
            satisfaction.
          </p>
        </div>
        {/* <!--end grid--> */}

        <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-6 md:px-4 rounded-lg shadow  hover:shadow-md  bg-white text-center duration-500 mx-w-lg"
            >
              <div className="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                {service.icon}
              </div>

              <div className="content mt-7">
                <span className="title h5 text-lg font-medium ">
                  {service.title}
                </span>
                <p className="text-slate-800 mt-3 max-w-md mx-auto">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!--end container--> */}
    </section>
  );
};

export default Service;
