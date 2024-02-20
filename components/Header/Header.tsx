"use client";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { NavigationsType } from "@types";
interface Props {
  navigations: NavigationsType[];
}
const Header = (props: Props) => {
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
    <header className="flex flex-col items-center justify-center relative">
      <TopNavbar />
      <Navbar navigations={props.navigations} showTopNav={showTopNav} />
    </header>
  );
};

export default Header;
