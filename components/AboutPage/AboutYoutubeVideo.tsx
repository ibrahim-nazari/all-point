import React from "react";
import YouTubeVideo from "./YouTubeVideo";
import { useTranslations } from "next-intl";

const AboutYoutubeVideo = () => {
  const t = useTranslations("aboutPage.video");
  return (
    <section className="relative md:py-24 py-16 bg-gray-50  md:pt-0 pt-0">
      <div className="container relative ">
        <div className="grid grid-cols-1 justify-center">
          <div className="relative z-10 my-5">
            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
              <div className="lg:col-start-2 lg:col-span-10">
                <div className="relative ">
                  <img
                    src="/aboutpage/cta-bg.jpg"
                    className="rounded-md shadow-lg"
                    alt=""
                  />
                  <YouTubeVideo />
                </div>
              </div>
            </div>
            <div className="content md:mt-8">
              <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                <div className="lg:col-start-2 lg:col-span-10">
                  <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                    <div className="mt-8">
                      <div className="section-title text-md-start">
                        <h6 className="text-white/50 text-lg font-semibold">
                          {t("title")}
                        </h6>
                        <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">
                          {t("subTitle")}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="section-title text-md-start">
                        <p className="text-white/50 max-w-xl mx-auto mb-2">
                          {t("description")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end row --> */}
      </div>
      {/* <!--end container--> */}

      <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
    </section>
  );
};

export default AboutYoutubeVideo;
