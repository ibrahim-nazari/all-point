import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { extractNavigation } from "@utils";
import {
  EnvelopeIcon,
  FaceFrownIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { socialMedia } from "@data";

const Footer = () => {
  const t = useTranslations("navigations");
  const navigations = extractNavigation(t);
  return (
    <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
      <div className="flex  flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/allpoint-logo.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700 max-w-md">
            All Point Thermal Systems provides custom walk-in coolers and
            freezers with quality and efficiency. We serve various industries
            from two Dallas, TX. warehouses and have great customer service. We
            also donate to local food banks.
          </p>
          <div className="flex flex-col justify-between ">
            <div className="flex  items-center">
              <PhoneIcon className="w-4 h-4 mr-2" /> <span>+11939483483</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="w-4 h-4 mr-2" />{" "}
              <span>ibrahimnazaryweb@gmail.com</span>
            </div>
            <ul className="list-none mt-6">
              {socialMedia.map((social) => (
                <li className="inline mr-4">
                  <Link
                    href="/"
                    target="_blank"
                    className="h-6 w-6 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full hover:bg-gray-300"
                  >
                    {<social.Icon />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__links">
          {navigations.map((item) => (
            <>
              {item.submenu.length > 0 && (
                <div key={item.title} className="footer__link">
                  <h3 className="font-bold">{item.title}</h3>
                  <div className="flex flex-col gap-5">
                    {item.submenu.map((link) => (
                      <Link
                        key={link.id}
                        href={link.link}
                        className="text-gray-500"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ))}

          <div className="footer__link">
            <h3 className="font-bold">Company</h3>
            <div className="flex flex-col gap-5">
              {navigations.map((item) => (
                <>
                  {item.submenu.length < 1 && (
                    <Link
                      key={item.id}
                      href={item.link}
                      className="text-gray-500"
                    >
                      {item.title}
                    </Link>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>
          <span className="text-base font-semibold">
            @2024 All Point Thermal Systems
          </span>{" "}
          All rights reserved
        </p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
