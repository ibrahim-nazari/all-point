import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "es"] as const;

export const pathnames = {
  "/": "/",
  "/contact": "/contact",
  "/get-quote": "/get-quote",
  "/about": "/about",
  "/product/[slug]": "/product/[slug]",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
