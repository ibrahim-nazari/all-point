import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import { useTranslations } from "next-intl";

import { extractNavigation } from "@utils";

const Header = () => {
  const t = useTranslations("navigations");
  const navigations = extractNavigation(t);

  return (
    <header className="flex flex-col items-center justify-center relative">
      <TopNavbar />
      <Navbar
        buttonGetQuoteText={t("buttonGetQuoteText")}
        navigations={navigations}
      />
    </header>
  );
};

export default Header;
