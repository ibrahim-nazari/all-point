import { ProductType } from "@types";
import Link from "next/link";
import React from "react";

interface Props {
  products: ProductType[];
  title: string;
  columns: number;
}

const Product = ({ products, title, columns }: Props) => {
  return (
    <section>
      <div className="container relative ">
        <div className="flex flex-col items-center justify-center">
          <h6 className="text-indigo-600 text-3xl text-center font-bold  mb-2">
            {title}
          </h6>
          <div className="w-44 h-1 bg-blue-600 mb-5 mt-2"></div>
        </div>

        {/* <!--end grid--> */}

        <div
          className={`grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-${columns} md:grid-cols-2 mt-8 gap-[30px]`}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-md shadow-md dark:shadow-gray-800 overflow-hidden"
            >
              <Link
                href={`/product/${product.slug}`}
                className="cursor-pointer"
              >
                <img
                  className="objec-cover w-full"
                  src={product.image}
                  alt=""
                />
              </Link>

              <div className="content p-6">
                <Link
                  href={`/product/${product.slug}`}
                  className="title h5 text-xl font-bold  hover:text-indigo-600 duration-500 ease-in-out"
                >
                  {product.title}
                </Link>
                <div className="w-20 h-1 bg-blue-600 mb-5 mt-2"></div>
              </div>
            </div>
          ))}
        </div>
        {/* <!--end grid--> */}
      </div>
      {/* <!--end container--> */}
    </section>
  );
};

export default Product;
