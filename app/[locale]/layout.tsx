import { unstable_setRequestLocale } from "next-intl/server";
import { generateStaticParamsLanguage } from "@utils";
import { defaultProps } from "@types";
import "../../globals.css";

import { Footer, Header } from "@components";

// Can be imported from a shared config

export const generateStaticParams = generateStaticParamsLanguage();
type Props = defaultProps & { children: React.ReactNode };
export const metadata = {
  title: "All Points",
  description: "Global Leader In Cold Storage Solutions",
};

const RootLayout = ({ children, params: { locale } }: Props) => {
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
