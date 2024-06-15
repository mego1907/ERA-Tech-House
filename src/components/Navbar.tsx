"use client";
import LogoIcon from "@/icons/LogoIcon";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import LangSwitcher from "./LangSwitcher";

const Navbar = ({ bg }: { bg: String | Boolean }) => {
  const path = usePathname();
  const currentLocale = useLocale();

  const t = useTranslations("navbar");

  const navLinks = [
    {
      name: t("Solutions"),
      path: `/${currentLocale}/solutions`,
      active: path === `/${currentLocale}/solutions`,
      id: 1,
    },
    {
      name: t("Vision"),
      path: `/${currentLocale}/vision`,
      active: path === `/${currentLocale}/vision`,
      id: 2,
    },
    {
      name: t("Contact"),
      path: `/${currentLocale}/contact`,
      active: path === `/${currentLocale}/contact`,
      id: 3,
    },
    {
      name: t("Book"),
      path: `/${currentLocale}/book`,
      active: path === `/${currentLocale}/book`,
      id: 4,
    },
  ];

  return (
    <div
      className={`md:h-[166px] h-20 w-full  flex items-center justify-center ${
        bg ? bg : "bg-navbar-bg backdrop-blur"
      }`}
    >
      <div className="flex items-center justify-between w-full px-6 md:px-16">
        {/* Logo */}
        <Link href={"/"}>
          {/* <LogoIcon /> */}
          <img src="/assets/logo.svg" alt="logo" />
        </Link>

        {/* Nav Items */}
        <div className="flex items-center md:gap-5 gap-3 text-[10px] font-bold text-white md:text-lg">
          {navLinks.map(({ name, id, path, active }) => (
            <Link
              href={path}
              key={id}
              className={active ? "text-mainColor" : ""}
            >
              {name}
            </Link>
          ))}

          <LangSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
