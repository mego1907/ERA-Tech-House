import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Option {
  name: string;
  code: string;
}

const LangSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();

  const [selectedLang, setSelectedLang] = useState(locale || "ar");

  const options: Option[] = [
    { name: "En", code: "en" },
    { name: "Ar", code: "ar" },
  ];

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const changeLanguage = (language: string) => {
    setSelectedLang(language);
    scrollToTop();

    router.push(`/${language}`);
  };

  return (
    <select
      className="md:px-3  md:py-1.5 font-normal text-black rounded-md text-xs p-1 md:text-base"
      onChange={(e) => changeLanguage(e.target.value)}
      value={selectedLang}
    >
      {options.map(({ name, code }) => (
        <option value={code} key={code}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default LangSwitcher;
