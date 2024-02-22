import { unstable_setRequestLocale } from "next-intl/server";
import "../../globals.css";

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
