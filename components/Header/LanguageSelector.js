"use client";
import React, { useState } from "react";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = async (e) => {
    console.log(e.target.value);
    setIsOpen(false);
  };

  const languages = [
    { key: "en", label: "English", flag: "us" },
    { key: "es", label: "Español", flag: "es" },
  ];

  return (
    <div className="z-50 fixed top-1 right-2">
      <select className="outline-none " onChange={handleLanguageChange}>
        {languages.map((language) => (
          <option key={language.key} className="my-5">
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
