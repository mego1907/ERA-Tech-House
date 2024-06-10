import { useTranslations } from "next-intl";
import React from "react";

type ServicesCardProps = {
  img: string;
  name: string;
  description: string;
  category: string;
  path: string;
};

const ServicesCard = ({
  img,
  name,
  description,
  category,
  path,
}: ServicesCardProps) => {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 bg-serv-box">
      <div>
        <img src={img} alt={description} />
      </div>
      <div className="grid content-between">
        <p className="leading-6 text-white">{t(description)}</p>
        <div className="flex flex-col items-start gap-2">
          <h5 className="text-xl font-bold text-mainColor">{t(category)}</h5>
          <a href={path} className="px-5 py-2 text-black bg-mainColor">
            {t("services.read-more-btn")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
