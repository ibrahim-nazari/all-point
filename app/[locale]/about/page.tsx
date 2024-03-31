import {
  AboutHeroSection,
  AboutYoutubeVideo,
  OurTeam,
  WhoWeAre,
} from "@components/AboutPage";
import { generateStaticParamsLanguage } from "@utils";
import { unstable_setRequestLocale } from "next-intl/server";
import { defaultProps } from "@types";
type Props = defaultProps;
export const generateStaticParams = generateStaticParamsLanguage();

const page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <AboutHeroSection />
      <div className="container mx-auto px-10 sm:px-14">
        <WhoWeAre />
      </div>
      <div className="container mx-auto px-10 sm:px-14 my-10">
        <AboutYoutubeVideo />
      </div>
      <div className="container mx-auto px-10 sm:px-14 my-10">
        <OurTeam />
      </div>
    </div>
  );
};

export default page;
