"use client";
import React, { useState } from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ToggleMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    // toggle here
    setShowMenu((prev) => !prev);
  };
  const [menuIds, setMenuIds] = useState<string[]>([]);

  const handleOpenSubMenu = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    if (menuIds.includes(id)) {
      setMenuIds(menuIds.filter((menuid) => menuid != id));
    } else {
      setMenuIds([...menuIds, id]);
    }
  };
  return (
    <>
      <div className="menu-extras mr-3">
        <div className="menu-item">
          <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 ${
          showMenu ? "" : "hidden"
        }`}
        onClick={toggleMenu}
      >
        <div className="fixed top-0 left-0 h-full w-1/2 bg-white">
          <XMarkIcon className="w-6 h-6 absolute right-3 top-3 z-10 cursor-pointer hover:text-gray-600" />
          <div className="w-full flex flex-col">
            <div id="navigation open">
              <ul className="navigation-menu">
                <li className="active">
                  <Link href="/" className="sub-menu-item active">
                    Home
                  </Link>
                </li>

                <li className="has-submenu parent-parent-menu-item">
                  <a
                    onClick={(e) => handleOpenSubMenu(e, "landings")}
                    href="javascript:void(0)"
                  >
                    Landings
                  </a>
                  <span className="menu-arrow"></span>

                  <ul
                    className={`submenu megamenu ${
                      menuIds.includes("landings") ? "open" : ""
                    }`}
                  >
                    <li>
                      <ul>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-saas.html"
                            className="sub-menu-item"
                          >
                            Saas{" "}
                            <span className="bg-emerald-600 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Animation
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-classic-saas.html"
                            className="sub-menu-item"
                          >
                            Classic Saas{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-modern-saas.html"
                            className="sub-menu-item"
                          >
                            Modern Saas{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-apps.html"
                            className="sub-menu-item"
                          >
                            Application
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-classic-app.html"
                            className="sub-menu-item"
                          >
                            Classic App{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-ai.html"
                            className="sub-menu-item"
                          >
                            AI Tools{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-smartwatch.html"
                            className="sub-menu-item"
                          >
                            Smartwatch
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-marketing.html"
                            className="sub-menu-item"
                          >
                            Marketing
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-seo.html"
                            className="sub-menu-item"
                          >
                            SEO Agency{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-software.html"
                            className="sub-menu-item"
                          >
                            Software{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-payment.html"
                            className="sub-menu-item"
                          >
                            Payments
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-charity.html"
                            className="sub-menu-item"
                          >
                            Charity{" "}
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-it-solution.html"
                            className="sub-menu-item"
                          >
                            IT Solution
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-it-solution-two.html"
                            className="sub-menu-item"
                          >
                            It Solution Two{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-digital-agency.html"
                            className="sub-menu-item"
                          >
                            Digital Agency
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-restaurent.html"
                            className="sub-menu-item"
                          >
                            Restaurent
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-hosting.html"
                            className="sub-menu-item"
                          >
                            Hosting
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-nft.html"
                            className="sub-menu-item"
                          >
                            NFT Marketplace{" "}
                            <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Full
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-hotel.html"
                            className="sub-menu-item"
                          >
                            Hotel &amp; Resort
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-travel.html"
                            className="sub-menu-item"
                          >
                            Travels{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-cafe.html"
                            className="sub-menu-item"
                          >
                            Cafe{" "}
                            <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Dark
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-gym.html"
                            className="sub-menu-item"
                          >
                            Gym{" "}
                            <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Dark
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-yoga.html"
                            className="sub-menu-item"
                          >
                            Yoga{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-spa.html"
                            className="sub-menu-item"
                          >
                            Spa &amp; Salon{" "}
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-job.html"
                            className="sub-menu-item"
                          >
                            Job{" "}
                            <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Full
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-startup.html"
                            className="sub-menu-item"
                          >
                            Startup
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-business.html"
                            className="sub-menu-item"
                          >
                            Business
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-corporate.html"
                            className="sub-menu-item"
                          >
                            Corporate
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-corporate-two.html"
                            className="sub-menu-item"
                          >
                            Corporate Two{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-real-estate.html"
                            className="sub-menu-item"
                          >
                            Real Estate{" "}
                            <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Full
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-consulting.html"
                            className="sub-menu-item"
                          >
                            Consulting{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-insurance.html"
                            className="sub-menu-item"
                          >
                            Insurance{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-construction.html"
                            className="sub-menu-item"
                          >
                            Construction{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-law.html"
                            className="sub-menu-item"
                          >
                            Law Firm{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-video.html"
                            className="sub-menu-item"
                          >
                            Video{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-christmas.html"
                            className="sub-menu-item"
                          >
                            Christmas{" "}
                            <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              New
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-personal.html"
                            className="sub-menu-item"
                          >
                            Personal
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-portfolio.html"
                            className="sub-menu-item"
                          >
                            Portfolio{" "}
                            <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Full
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-photography.html"
                            className="sub-menu-item"
                          >
                            Photography{" "}
                            <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Dark
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-studio.html"
                            className="sub-menu-item"
                          >
                            Studio
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-coworking.html"
                            className="sub-menu-item"
                          >
                            Co-Woriking
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-classic-business.html"
                            className="sub-menu-item"
                          >
                            Classic Business{" "}
                            <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              New
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-course.html"
                            className="sub-menu-item"
                          >
                            Online Courses{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-event.html"
                            className="sub-menu-item"
                          >
                            Event / Conference{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-podcast.html"
                            className="sub-menu-item"
                          >
                            Podcasts{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-hospital.html"
                            className="sub-menu-item"
                          >
                            Hospital
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-phone-number.html"
                            className="sub-menu-item"
                          >
                            Phone Number
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-forums.html"
                            className="sub-menu-item"
                          >
                            Forums{" "}
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-shop.html"
                            className="sub-menu-item"
                          >
                            Shop / eCommerce{" "}
                            <span className="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Full
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-crypto.html"
                            className="sub-menu-item"
                          >
                            Cryptocurrency{" "}
                            <span className="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Dark
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-landing-one.html"
                            className="sub-menu-item"
                          >
                            Landing One
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-landing-two.html"
                            className="sub-menu-item"
                          >
                            Landing Two
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-landing-three.html"
                            className="sub-menu-item"
                          >
                            Landing Three
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-landing-four.html"
                            className="sub-menu-item"
                          >
                            Landing Four
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-service.html"
                            className="sub-menu-item"
                          >
                            Service Provider
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-food-blog.html"
                            className="sub-menu-item"
                          >
                            Food Blog{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-blog.html"
                            className="sub-menu-item"
                          >
                            Blog{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-furniture.html"
                            className="sub-menu-item"
                          >
                            Furniture{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/index-landing-five.html"
                            className="sub-menu-item"
                          >
                            Landing Five{" "}
                            <span className="bg-green-600 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Onepage
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="has-submenu parent-parent-menu-item">
                  <a
                    onClick={(e) => handleOpenSubMenu(e, "pages")}
                    href="javascript:void(0)"
                  >
                    Pages
                  </a>
                  <span className="menu-arrow"></span>
                  <ul
                    className={`submenu  ${
                      menuIds.includes("pages") ? "open" : ""
                    }`}
                  >
                    <li className="has-submenu parent-menu-item">
                      <a
                        onClick={(e) => handleOpenSubMenu(e, "company")}
                        href="javascript:void(0)"
                      >
                        {" "}
                        Company{" "}
                      </a>
                      <span className="submenu-arrow"></span>
                      <ul
                        className={`submenu  ${
                          menuIds.includes("company") ? "open" : ""
                        }`}
                      >
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/page-aboutus.html"
                            className="sub-menu-item"
                          >
                            {" "}
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/page-services.html"
                            className="sub-menu-item"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/page-team.html"
                            className="sub-menu-item"
                          >
                            {" "}
                            Team
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/page-pricing.html"
                            className="sub-menu-item"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/page-testimonial.html"
                            className="sub-menu-item"
                          >
                            Testimonial{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="has-submenu parent-parent-menu-item">
                  <a
                    onClick={(e) => handleOpenSubMenu(e, "portfolio")}
                    href="#"
                  >
                    Portfolio
                  </a>
                  <span className="menu-arrow"></span>
                  <ul
                    className={`submenu megamenu ${
                      menuIds.includes("portfolio") ? "open" : ""
                    }`}
                  >
                    <li>
                      <ul>
                        <li className="megamenu-head">Modern Portfolio</li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-modern-two.html"
                            className="sub-menu-item"
                          >
                            Two Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-modern-three.html"
                            className="sub-menu-item"
                          >
                            Three Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-modern-four.html"
                            className="sub-menu-item"
                          >
                            Four Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-modern-five.html"
                            className="sub-menu-item"
                          >
                            Five Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-modern-six.html"
                            className="sub-menu-item"
                          >
                            Six Column
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li className="megamenu-head">Classic Portfolio</li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-classic-two.html"
                            className="sub-menu-item"
                          >
                            Two Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-classic-three.html"
                            className="sub-menu-item"
                          >
                            Three Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-classic-four.html"
                            className="sub-menu-item"
                          >
                            Four Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-classic-five.html"
                            className="sub-menu-item"
                          >
                            Five Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-classic-six.html"
                            className="sub-menu-item"
                          >
                            Six Column
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li className="megamenu-head">Creative Portfolio</li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-creative-two.html"
                            className="sub-menu-item"
                          >
                            Two Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-creative-three.html"
                            className="sub-menu-item"
                          >
                            Three Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-creative-four.html"
                            className="sub-menu-item"
                          >
                            Four Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-creative-five.html"
                            className="sub-menu-item"
                          >
                            Five Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-creative-six.html"
                            className="sub-menu-item"
                          >
                            Six Column
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li className="megamenu-head">Masonry Portfolio</li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-masonry-two.html"
                            className="sub-menu-item"
                          >
                            Two Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-masonry-three.html"
                            className="sub-menu-item"
                          >
                            Three Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-masonry-four.html"
                            className="sub-menu-item"
                          >
                            Four Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-masonry-five.html"
                            className="sub-menu-item"
                          >
                            Five Column
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-masonry-six.html"
                            className="sub-menu-item"
                          >
                            Six Column
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li className="megamenu-head">Portfolio Detail</li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-detail-one.html"
                            className="sub-menu-item"
                          >
                            Portfolio One
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-detail-two.html"
                            className="sub-menu-item"
                          >
                            Portfolio Two
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-detail-three.html"
                            className="sub-menu-item"
                          >
                            Portfolio Three
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/portfolio-detail-four.html"
                            className="sub-menu-item"
                          >
                            Portfolio Four
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="has-submenu parent-menu-item">
                  <a
                    onClick={(e) => handleOpenSubMenu(e, "docs")}
                    href="javascript:void(0)"
                  >
                    Docs
                  </a>
                  <span className="menu-arrow"></span>
                  <ul
                    className={`submenu ${
                      menuIds.includes("docs") ? "open" : ""
                    }`}
                  >
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/ui-components.html"
                        className="sub-menu-item"
                      >
                        Components{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/documentation.html"
                        className="sub-menu-item"
                      >
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/changelog.html"
                        className="sub-menu-item"
                      >
                        Changelog
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/widget.html"
                        className="sub-menu-item"
                      >
                        Widget
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="https://shreethemes.in/techwind/landing/contact-one.html"
                    className="sub-menu-item"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleMenu;
