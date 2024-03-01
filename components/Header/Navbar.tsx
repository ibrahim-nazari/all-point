"use client";

import { Link } from "@navigation";
import ToggleMenu from "./ToggleMenu";
import { NavigationsType } from "@types";
import { useEffect, useState } from "react";
interface Props {
  navigations: NavigationsType[];
  buttonGetQuoteText: string;
}

const NavBar = ({ navigations, buttonGetQuoteText }: Props) => {
  const [showTopNav, setShowTopNav] = useState(true);
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setShowTopNav(false);
    } else {
      setShowTopNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      id="topnav"
      className={`defaultscroll nav-sticky z-20 ${
        showTopNav ? "top-8" : "top-0"
      }`}
    >
      <div className="container relative mx-auto">
        <Link href="/" className="logo ml-3">
          <img
            src="/allpoint-logo.png"
            className="inline-block w-32 lg:w-40 dark:hidden"
            alt=""
          />
          <img
            src="/allpoint-logo.png"
            className="hidden dark:inline-block w-32 lg:w-40"
            alt=""
          />
        </Link>

        <ToggleMenu navigations={navigations} />

        <ul className="buy-button list-none mb-0">
          <li className="inline mb-0 ">
            <Link
              href="/get-quote"
              className="py-1 px-2 lg:py-2 lg:px-5  inline-block font-semibold tracking-wide border align-middle duration-500 text-sm lg:text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
            >
              {buttonGetQuoteText}
            </Link>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu">
            {navigations.map(({ title, link, submenu }: NavigationsType) => (
              <li
                className={` ${
                  submenu ? "has-submenu" : ""
                }  parent-parent-menu-item`}
              >
                <Link href={link}>{title}</Link>
                {submenu?.length > 0 && (
                  <>
                    <span className="menu-arrow"></span>
                    <ul className="submenu">
                      {submenu.map(({ title, link }) => (
                        <li>
                          <Link className="sub-menu-item" href={link}>
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
