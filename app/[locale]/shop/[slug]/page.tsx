import QuoteBanner from "@components/QuoteBanner";
import { getOneProduct } from "@data/product";
import { ProductType, defaultProps } from "@types";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { generateStaticParamsLanguage } from "@utils";
import { unstable_setRequestLocale } from "next-intl/server";
type Props = defaultProps;
export const generateStaticParams = generateStaticParamsLanguage();

type Language = "en" | "es";

const Product = async ({ params: { slug, locale } }: Props) => {
  unstable_setRequestLocale(locale);
  // @ts-ignore
  const lan: Language = useLocale();

  const product: ProductType | null = await getOneProduct(slug);
  if (!product) {
    notFound();
  }

  return (
    <main className="overflow-hidden my-32">
      <div className="container mx-auto px-10 sm:px-14">
        <div className="w-full py-4">
          <h3 className="text-2xl font-bold my-4">{product.title[lan]}</h3>
          {/* <p className="text-lg text-gray-800">{product.description[lan]}</p> */}
          <p className="text-lg text-gray-800 my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {/* <!-- Image section --> */}
        <div className="w-full h-[300px] md:h-[500px]">
          <img
            src={product.image}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* <!-- Paragraphs section --> */}
        <div className="w-full p-4">
          <p className="text-lg text-gray-800 my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg text-gray-800 my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg text-gray-800 my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* <!-- Banner section --> */}
        <div className="w-full h-[200px] md:h-[400px]">
          <img
            src="/cooler_banner.png"
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <QuoteBanner />
      </div>
    </main>
  );
};

export default Product;
