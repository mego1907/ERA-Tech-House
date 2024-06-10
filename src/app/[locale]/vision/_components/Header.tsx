import { Navbar } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";

const Header = () => {
  const t = useTranslations("our-vision");

  return (
    <div className="mb-5">
      <Navbar bg={"bg-transparent"} />
      <div className="flex flex-col gap-5 py-2 mx-2 md:mx-10 md:px-10 md:flex-row bg-black/60">
        <img src="/assets/Main → Section → Section → wow-image.png" alt="" />
        <div className="flex flex-col justify-center gap-5 p-2 md:ml-20 md:p-0 text-desc">
          <h3 className="text-center md:w-2/4 md:text-[2.5rem] font-bold">
            {t("title")}
          </h3>
          <div className="flex flex-col text-lg md:w-3/5">
            <p>{t("description")}</p>
            <ul>
              <li>{t("list.1")}</li>
              <li>{t("list.2")}</li>
              <li>{t("list.3")}</li>
              <li>{t("list.4")}</li>
              <li>{t("list.5")}</li>
              <p>{t("description2")}</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
