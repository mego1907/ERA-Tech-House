import { Navbar } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";

const Header = () => {
  const t = useTranslations("header");

  const headerText = {
    mainTitle: t("title"),
  };

  return (
    <div className="h-screen bg-center bg-cover bg-overlay-bg">
      <Navbar bg={false} />

      <div className="flex items-center justify-center h-3/5 section">
        <h1 className="z-10 text-xl font-bold text-center text-white whitespace-pre-line md:leading-relaxed md:text-4xl">
          {headerText.mainTitle}
        </h1>
      </div>
    </div>
  );
};

export default Header;
