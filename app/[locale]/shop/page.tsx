import { defaultProps } from "@types";
import { generateStaticParamsLanguage } from "@utils";

export const generateStaticParams = generateStaticParamsLanguage;
import { unstable_setRequestLocale } from "next-intl/server";
type Props = defaultProps;
const Products = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  return <div>Products</div>;
};

export default Products;
