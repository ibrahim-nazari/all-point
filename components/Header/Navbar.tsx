import Link from "next/link";
import ToggleMenu from "./ToggleMenu";
import { useTranslations } from "next-intl";
import { NavigationsType } from "@types";
interface Props {
  navigations: NavigationsType[];
  showTopNav: boolean;
}

const NavBar = ({ showTopNav, navigations }: Props) => {
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
            src="/logo.svg"
            className="inline-block w-32 lg:w-40 dark:hidden"
            alt=""
          />
          <img
            src="/logo.svg"
            className="hidden dark:inline-block w-32 lg:w-40"
            alt=""
          />
        </Link>

        <ToggleMenu />

        <ul className="buy-button list-none mb-0">
          <li className="inline mb-0 ">
            <Link
              href="/get-quote"
              className="py-1 px-2 lg:py-2 lg:px-5  inline-block font-semibold tracking-wide border align-middle duration-500 text-sm lg:text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
            >
              Get A Quote
            </Link>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu">
            {navigations.map((navigation: { title: string; link: string }) => (
              <li className="active">
                <Link href={navigation.link} className="sub-menu-item active">
                  {navigation.title}
                </Link>
              </li>
            ))}

            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Landings</a>
              <span className="menu-arrow"></span>

              <ul className="submenu megamenu">
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
              <a href="javascript:void(0)">Pages</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Company </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
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
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Accounts</a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/user-profile.html"
                        className="sub-menu-item"
                      >
                        User Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/user-billing.html"
                        className="sub-menu-item"
                      >
                        Billing
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/user-payment.html"
                        className="sub-menu-item"
                      >
                        Payment
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/user-invoice.html"
                        className="sub-menu-item"
                      >
                        Invoice
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/user-social.html"
                        className="sub-menu-item"
                      >
                        Social
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/user-notification.html"
                        className="sub-menu-item"
                      >
                        Notification
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/user-setting.html"
                        className="sub-menu-item"
                      >
                        Setting
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Real Estate</a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/property-listing.html"
                        className="sub-menu-item"
                      >
                        Listing
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/property-detail.html"
                        className="sub-menu-item"
                      >
                        Property Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Courses </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/course-listing.html"
                        className="sub-menu-item"
                      >
                        Course Listing
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/course-detail.html"
                        className="sub-menu-item"
                      >
                        Course Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> NFT Market </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/nft-explore.html"
                        className="sub-menu-item"
                      >
                        Explore
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/nft-auction.html"
                        className="sub-menu-item"
                      >
                        Auction
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/nft-collection.html"
                        className="sub-menu-item"
                      >
                        Collections
                      </a>
                    </li>
                    <li className="has-submenu child-menu-item">
                      <a href="javascript:void(0)"> Creator </a>
                      <span className="submenu-arrow"></span>
                      <ul className="submenu">
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/nft-creators.html"
                            className="sub-menu-item"
                          >
                            {" "}
                            Creators
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/nft-creator-profile.html"
                            className="sub-menu-item"
                          >
                            {" "}
                            Creator Profile{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/nft-creator-profile-edit.html"
                            className="sub-menu-item"
                          >
                            {" "}
                            Profile Edit{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/nft-wallet.html"
                        className="sub-menu-item"
                      >
                        Wallet
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/nft-create-item.html"
                        className="sub-menu-item"
                      >
                        Create NFT
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/nft-detail.html"
                        className="sub-menu-item"
                      >
                        Single NFT
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://shreethemes.in/techwind/landing/food-recipe.html"
                    className="sub-menu-item"
                  >
                    Food Recipe{" "}
                  </a>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> eCommerce </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/shop-grid.html"
                        className="sub-menu-item"
                      >
                        Product Grid
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/shop-grid-two.html"
                        className="sub-menu-item"
                      >
                        Product Grid Two
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/shop-item-detail.html"
                        className="sub-menu-item"
                      >
                        Product Detail
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/shop-cart.html"
                        className="sub-menu-item"
                      >
                        Shop Cart
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/shop-checkout.html"
                        className="sub-menu-item"
                      >
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/shop-account.html"
                        className="sub-menu-item"
                      >
                        My Account
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Photography </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/photography-about.html"
                        className="sub-menu-item"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/photography-portfolio.html"
                        className="sub-menu-item"
                      >
                        Portfolio
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Job / Careers </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-job-grid.html"
                        className="sub-menu-item"
                      >
                        All Jobs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-job-detail.html"
                        className="sub-menu-item"
                      >
                        Job Detail
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-job-apply.html"
                        className="sub-menu-item"
                      >
                        Job Apply
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-job-post.html"
                        className="sub-menu-item"
                      >
                        Job Post{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-job-career.html"
                        className="sub-menu-item"
                      >
                        Job Career{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-job-candidates.html"
                        className="sub-menu-item"
                      >
                        Job Candidates
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-job-candidate-detail.html"
                        className="sub-menu-item"
                      >
                        Candidate Detail
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-job-companies.html"
                        className="sub-menu-item"
                      >
                        All Companies
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-job-company-detail.html"
                        className="sub-menu-item"
                      >
                        Company Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Forums </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/forums-topic.html"
                        className="sub-menu-item"
                      >
                        Forum Topic
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/forums-comments.html"
                        className="sub-menu-item"
                      >
                        Forum Comments
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Helpcenter </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/helpcenter.html"
                        className="sub-menu-item"
                      >
                        Overview
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/helpcenter-faqs.html"
                        className="sub-menu-item"
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/helpcenter-guides.html"
                        className="sub-menu-item"
                      >
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/helpcenter-support.html"
                        className="sub-menu-item"
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Blog </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/blog.html"
                        className="sub-menu-item"
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/blog-sidebar.html"
                        className="sub-menu-item"
                      >
                        Blogs &amp; Sidebar
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/blog-detail.html"
                        className="sub-menu-item"
                      >
                        Blog Detail
                      </a>
                    </li>
                    <li className="has-submenu child-menu-item">
                      <a href="javascript:void(0)"> Blog Posts </a>
                      <span className="submenu-arrow"></span>
                      <ul className="submenu">
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/blog-standard-post.html"
                            className="sub-menu-item"
                          >
                            Standard Post
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/blog-slider-post.html"
                            className="sub-menu-item"
                          >
                            Slider Post
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/blog-gallery-post.html"
                            className="sub-menu-item"
                          >
                            Gallery Post
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/blog-youtube-post.html"
                            className="sub-menu-item"
                          >
                            Youtube Post
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/blog-vimeo-post.html"
                            className="sub-menu-item"
                          >
                            Vimeo Post
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/blog-audio-post.html"
                            className="sub-menu-item"
                          >
                            Audio Post
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/blog-blockquote-post.html"
                            className="sub-menu-item"
                          >
                            Blockquote
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://shreethemes.in/techwind/landing/blog-left-sidebar-post.html"
                            className="sub-menu-item"
                          >
                            Left Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Email Template</a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/email-confirmation.html"
                        className="sub-menu-item"
                      >
                        Confirmation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/email-password-reset.html"
                        className="sub-menu-item"
                      >
                        Reset Password
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/email-alert.html"
                        className="sub-menu-item"
                      >
                        Alert
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/email-invoice.html"
                        className="sub-menu-item"
                      >
                        Invoice
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Auth Pages </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/auth-login.html"
                        className="sub-menu-item"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/auth-signup.html"
                        className="sub-menu-item"
                      >
                        Signup
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/auth-re-password.html"
                        className="sub-menu-item"
                      >
                        Reset Password
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/auth-lock-screen.html"
                        className="sub-menu-item"
                      >
                        Lock Screen
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Utility </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-terms.html"
                        className="sub-menu-item"
                      >
                        Terms of Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-privacy.html"
                        className="sub-menu-item"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Special</a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-comingsoon.html"
                        className="sub-menu-item"
                      >
                        Coming Soon
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-maintenance.html"
                        className="sub-menu-item"
                      >
                        Maintenance
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-error.html"
                        className="sub-menu-item"
                      >
                        Error
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/page-thankyou.html"
                        className="sub-menu-item"
                      >
                        Thank you
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Contact </a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/contact-detail.html"
                        className="sub-menu-item"
                      >
                        Contact Detail
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/contact-one.html"
                        className="sub-menu-item"
                      >
                        Contact One
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shreethemes.in/techwind/landing/contact-two.html"
                        className="sub-menu-item"
                      >
                        Contact Two
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu parent-menu-item">
                  <a href="javascript:void(0)"> Multi Level Menu</a>
                  <span className="submenu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <a href="javascript:void(0)" className="sub-menu-item">
                        Level 1.0
                      </a>
                    </li>
                    <li className="has-submenu child-menu-item">
                      <a href="javascript:void(0)"> Level 2.0 </a>
                      <span className="submenu-arrow"></span>
                      <ul className="submenu">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="sub-menu-item"
                          >
                            Level 2.1
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="sub-menu-item"
                          >
                            Level 2.2
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a href="javascript:void(0)">Portfolio</a>
              <span className="menu-arrow"></span>
              <ul className="submenu megamenu">
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
              <a href="javascript:void(0)">Docs</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
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
    </nav>
  );
};
export default NavBar;
