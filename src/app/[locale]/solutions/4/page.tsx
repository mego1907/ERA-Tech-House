"use client";
import { Footer, Navbar } from "@/components";
import { solutionsData } from "@/data";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";

const SolutionDetails = () => {
  const t = useTranslations();

  const selectedSolution = solutionsData.find((item) => item?.id === 4);

  return (
    <div className="bg-fixed bg-cover bg-header-bg">
      <Navbar bg={"bg-transparent"} />

      <div className="grid grid-cols-2 h-[350px] bg-black/60">
        <div className="flex items-center justify-center text-mainColor font-bold text-[2.5rem] px-56 text-center">
          <p>{t(selectedSolution?.header1)}</p>
        </div>

        <div className="flex items-center justify-center text-base text-white max-w-[50ch] text-center">
          <p>{t(selectedSolution?.header2)}</p>
        </div>
      </div>

      <div className="flex flex-col mx-16 mt-8 mb-2 bg-black/60">
        <img src={selectedSolution?.banner} alt="" />
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center text-white text-[2.4rem] font-bold px-32">
            <p>{t(selectedSolution?.title)}</p>
          </div>
          <div className="flex flex-col items-center justify-center text-base text-white p-28">
            <p>{t(selectedSolution?.desc1)}</p>
            <p className="ltr:pl-5 rtl:pr-5">{t(selectedSolution?.desc2)}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SolutionDetails;
