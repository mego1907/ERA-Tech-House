import React from "react";
import { InnerHeader } from "./_components";
import Link from "next/link";

import { solutionsData } from "../../../data";
import { Footer } from "@/components";
import { useLocale, useTranslations } from "next-intl";

const Solutions = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div>
      <InnerHeader />

      {/* Our Solutions */}
      <div className="flex flex-col items-center justify-center gap-4 p-4 text-white md:gap-10 md:p-10">
        <h2 className="md:text-[3.5rem] text-xl font-bold">
          {t("services.title")}
        </h2>
        <span className="w-8 h-1 bg-white"></span>
      </div>

      <div className="grid grid-cols-1 gap-10 p-10 pt-8 mx-auto md:gap-20 md:w-2/3 md:grid-cols-2 md:p-0">
        {solutionsData.map(({ id, title, img }) => (
          <Link
            href={`/${locale}/solutions/${id}`}
            className="relative flex flex-col"
            key={id}
          >
            <img src={img} alt={title} />
            <div className="absolute bottom-0 w-full p-4 text-center bg-serv1 text-mainColor">
              <span>{t(title)}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Solutions;
