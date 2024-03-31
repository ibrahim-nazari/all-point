import { generateStaticParamsLanguage } from "@utils";
import { unstable_setRequestLocale } from "next-intl/server";
import { defaultProps } from "@types";
type Props = defaultProps;
export const generateStaticParams = generateStaticParamsLanguage;
const page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  return <div>page</div>;
};

export default page;
