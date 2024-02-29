import { useTranslations } from "next-intl";
import React from "react";

const BlogRight = () => {
  const t = useTranslations("blog2Home");
  return (
    <div className="container relative my-10">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold max-w-lg text-center mx-auto">
          A Cold Storage Solutions Leader You Can Trust To Deliver
        </h3>
      </div>
      {/* <!--end grid--> */}

      <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
        <div className="lg:col-span-7">
          <div className="lg:ms-10">
            <p className="text-slate-800 max-w-xl">{t("description1")}</p>
            <p className="text-lg my-4">{t("subheader1")}</p>
            <p className="text-slate-800 max-w-xl">{t("description2")}</p>
            <p className="text-lg my-4">{t("subheader2")}</p>
            <p className="text-slate-800 max-w-xl">{t("description3")}</p>
            <p className="text-lg my-4">{t("subheader3")}</p>
            <p className="text-slate-800 max-w-xl">{t("description4")}</p>
            <p className="text-lg my-4">{t("subheader4")}</p>
            <p className="text-slate-800 max-w-xl">{t("description5")}</p>
            <p className="text-lg my-4">{t("subheader5")}</p>
            <p className="text-slate-800 max-w-xl">{t("description6")}</p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <img src="/SEO_SVG.svg" alt="" />
        </div>
      </div>
      {/* <!--end grid--> */}
    </div>
  );
};

export default BlogRight;
