import { useTranslations } from "next-intl";
import "../../globals.css";
let navigations = [];
import { Footer, Header } from "@components";
// Can be imported from a shared config
const locales = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

const RootLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const t = useTranslations("navigations");
  const keys = [
    "cooler&freezer",
    "byIndustry",
    "aboutus",
    "contactus",
  ] as const;
  navigations = keys.map((key) => ({
    title: t(`${key}.title`),
    link: t(`${key}.link`),
  }));
  console.log("navigations### ", navigations);

  return (
    <html lang={locale} dir="ltr">
      <body className="relative">
        <Header navigations={[]} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
