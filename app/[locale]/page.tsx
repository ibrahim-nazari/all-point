import { Hero } from "@components";
import { useTranslations } from "next-intl";
import About from "@components/About/About";
import Product from "@components/Product/Product";
import Service from "@components/Service";
import { products, productsCoolerAndFreezer } from "@data/product";

import Blog from "@components/Blog";
import Contact from "@components/Contact";
export default function Home() {
  const t = useTranslations("IndexPage");

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="container mx-auto px-10 sm:px-14">
        <About />
      </div>
      <div className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-10 sm:px-14">
          <Product
            columns={4}
            products={products}
            title="Product Applications"
          />
        </div>
      </div>

      <div className="container mx-auto px-10 sm:px-14">
        <Service />
      </div>
      <div className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-10 sm:px-14">
          <Product
            products={productsCoolerAndFreezer}
            title="Explore Coolers & Freezers"
            columns={3}
          />
        </div>
      </div>

      <div className="container mx-auto px-10 sm:px-14">
        <Blog />
      </div>
      <div className="w-full bg-gray-50">
        <div className="container mx-auto px-10 sm:px-14">
          <Contact />
        </div>
      </div>
    </main>
  );
}
