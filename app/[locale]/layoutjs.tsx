import { unstable_setRequestLocale } from "next-intl/server";
import "../../globals.css";

import { Footer, Header } from "@components";

// Can be imported from a shared config
const locales = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const metadata = {
  title: "All Points",
  description: "Global Leader In Cold Storage Solutions",
};

const RootLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale} dir="ltr">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
