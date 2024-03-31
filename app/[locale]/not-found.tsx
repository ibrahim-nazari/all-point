import { defaultProps } from "@types";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="overflow-hidden my-32">
      <div className="container mx-auto px-10 sm:px-14">
        <h2 className="text-2xl text-center font-bold">Not Found</h2>
        <p className="text-center text-lg my-2">
          Could not find requested resource
        </p>
        <div className="text-center mt-10 w-40 mx-auto">
          <Link
            href="/"
            className="text-center flex items-center justify-center align-middle text-white  py-3 px-4 rounded-sm cursor-pointer bg-blue-600  hover:text-gray-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
