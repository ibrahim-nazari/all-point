"use client";
import React, { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = async (language) => {
    setIsOpen(false);
  };

  const languages = [
    { key: "en", label: "English", flag: "us" },
    { key: "es", label: "Español", flag: "es" },
    // Add more languages as needed
  ];

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        <span className="text-sm">language</span>
        <ChevronDownIcon className="w-5 h-5" />
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 w-40 bg-white border border-gray-200 shadow-lg rounded-md">
          {languages.map((lang) => (
            <button
              key={lang.key}
              onClick={() => handleLanguageChange(lang)}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
            >
              <span className={`fi fis fi-${lang.flag} mr-2`} /> {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
