import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { extractNavigation } from "@utils";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { socialMedia } from "@data";

const Footer = () => {
  const t = useTranslations("navigations");
  const tfooter = useTranslations("footer");
  const navigations = extractNavigation(t);
  return (
    <footer className="flex flex-col text-white  mt-5 ">
      <div
        className="w-full h-full object-cover relative flex flex-col"
        style={{ backgroundImage: "url('/3.png')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900/70 z-0" />
        <div className="flex  flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 z-10">
          <div className="flex flex-col justify-start items-start gap-6">
            <Image
              src="/allpoint-logo.png"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
            <p className="text-base  max-w-md">{tfooter("aboutDescription")}</p>
            <div className="flex flex-col justify-between ">
              <div className="flex  items-center">
                <PhoneIcon className="w-4 h-4 mr-2 text-white" />
                <span>+11939483483</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-4 h-4 mr-2 text-white" />
                <span>ibrahimnazaryweb@gmail.com</span>
              </div>
              <ul className="list-none mt-6">
                {socialMedia.map((social) => (
                  <li className="inline mr-4">
                    <Link
                      href="/"
                      target="_blank"
                      className="text-white h-6 w-6 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full hover:bg-blue-600"
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
                          className="hover:text-gray-200"
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
                        className="hover:text-gray-200"
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

        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-600  text-white sm:px-16 px-6 py-10 z-10">
          <p>{tfooter("rightReserved")}</p>
          <div className="footer__copyrights-link">
            <Link href="/" className="hover:text-gray-200 cursor-pointer">
              {tfooter("privacyPolicy")}
            </Link>
            <Link href="/" className="hover:text-gray-200 cursor-pointer">
              {tfooter("termCondition")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
