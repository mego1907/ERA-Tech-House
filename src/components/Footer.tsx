import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <div className="grid grid-cols-1 px-6 py-10 md:px-20 md:grid-cols-2 bg-black/60">
      <div>
        <img src="/assets/footer_logo.png" alt="" />

        <div className="flex flex-col gap-2 mt-5 text-desc">
          <p>{t("mail")}</p>
          <p>{t("saudi-arabia-location")}</p>
          <p>{t("egypt-location")} </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col items-start gap-8">
          <h4 className="text-white">{t("subscribe-to-our-newsletter")}</h4>

          <div className="flex flex-col items-center gap-3">
            <label className="flex flex-col gap-2 text-white">
              <span>{t("email-label")}</span>
              <input
                type="email"
                className="w-full p-2 text-black rounded-sm bg-white/70 md:w-auto"
              />
            </label>
            <button type="button" className="p-2 px-4 text-white bg-mainColor">
              {t("submit-btn")}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-white md:justify-between">
          <p>{t("follow-us-on-social-media")}</p>

          <div className="flex flex-col gap-2 text-sm leading-6 md:px-20">
            <p>{t("all-rights-reserved")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
