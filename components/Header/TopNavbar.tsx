import {
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
const TopNavbar = () => {
  return (
    <div
      className={`tagline bg-blue-600 dark:bg-slate-900 h-8 flex items-center dark:border-gray-800 w-4/5 z-10 top-0`}
    >
      <div className="container">
        <div className="grid grid-cols-1 content-center">
          <div className="flex items-center justify-between">
            <ul className="list-none mb-0 h-100 flex items-center">
              <li className="  mb-0 mx-3 hidden md:inline">
                <div className="text-white hover:text-gray-100  items-center inline-flex">
                  <ClockIcon className="h-5 w-5 mr-2 text-white" />
                  <span className="font-bold mr-3 text-sm ">
                    Business Hours
                  </span>
                  <span className="text-sm">Mon-Fri, 9am-5pm</span>
                </div>
              </li>
              <li className=" mb-0 mx-3 hidden sm:inline">
                <Link
                  href="mailto:contact@example.com"
                  className="text-white hover:text-gray-100 inline-flex items-center text-sm"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2 text-white" />
                  contact@example.com
                </Link>
              </li>
              <li className="inline mb-0 mx-3">
                <Link
                  href="tel:+78789768658675"
                  className="text-white hover:text-gray-100 inline-flex items-center text-sm"
                >
                  <PhoneIcon className="h-5 w-5 mr-2 text-white" />
                  +78789768658675
                </Link>
              </li>
            </ul>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
