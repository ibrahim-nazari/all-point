"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isActiveLocal = useLocale();
  const handleLanguageChange = async (e) => {
    router.replace(`/${e.target.value}${pathname.slice(3)}`);
  };

  const languages = [
    { key: "en", label: "English", flag: "us" },
    { key: "es", label: "Español", flag: "es" },
  ];

  return (
    <div className="z-50 fixed top-1 right-2">
      <select
        defaultValue={isActiveLocal}
        className="outline-none "
        onChange={handleLanguageChange}
      >
        {languages.map((language) => (
          <option key={language.key} value={language.key} className="my-5">
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
