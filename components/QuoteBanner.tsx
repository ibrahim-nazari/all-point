import { Link } from "@navigation";

const QuoteBanner = () => {
  return (
    <div className="mt-12 h-32 sm:h-24 w-full sm:w-md  sm:w-1/2 mx-auto rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 justify-items-center content-center  grid grid-cols-1 sm:grid-cols-2 gap-5 p-4">
      <div className="text-white font-bold">Get Your Instant Quote Now!</div>
      <Link
        href="/get-quote"
        className="bg-white text-blue-500 hover:bg-blue-100 rounded-md px-4 py-2 text-center w-40 "
      >
        Get a Quote
      </Link>
    </div>
  );
};

export default QuoteBanner;
