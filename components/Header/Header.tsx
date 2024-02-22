import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import { useTranslations } from "next-intl";
import { NavigationsType } from "@types";
import { extractNavigation } from "@utils";

const Header = () => {
  const t = useTranslations("navigations");
  const navigations = extractNavigation(t);

  return (
    <header className="flex flex-col items-center justify-center relative">
      <TopNavbar />
      <Navbar navigations={navigations} />
    </header>
  );
};

export default Header;
