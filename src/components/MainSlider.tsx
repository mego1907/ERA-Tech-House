import LeftIcon from "@/icons/LeftIcon";
import RightIcon from "@/icons/RightIcon";
import { useTranslations } from "next-intl";
import React from "react";

const MainSlider = () => {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-[1fr_10fr_1fr] bg-overlay-bg">
      <button
        type="button"
        className="flex items-center justify-center -scale-100"
      >
        <RightIcon fill="#55afaa" width={"3em"} />
      </button>

      <div className="flex flex-col w-full">
        <div className="w-full section">
          <div className="z-10 w-full px-4 mx-auto md:w-2/3 -translate-y-1/4">
            <h3 className="md:text-[2.5rem] text-lg text-white font-bold">
              {t("header.why-us")}
            </h3>

            <div className="flex items-center justify-center">
              <div className="z-10 w-full">
                <div className="w-full px-8 py-12 text-base text-white rounded-md shadow-md md:ltr:translate-x-9 md:rtl:-translate-x-9 bg-mainColor leading">
                  <p className="leading-6 text-desc">{t("header.quality")}</p>
                  <span className="block h-[2px] mt-8 bg-desc w-9"></span>
                </div>
              </div>
              <div className="w-0 md:w-2/3">
                <img
                  src="/assets/wow-image.png"
                  alt=""
                  className="w-full scale-125 rounded-t-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="flex items-center justify-center">
        <LeftIcon fill="#55afaa" width={"3em"} />
      </button>
    </div>
  );
};

export default MainSlider;
