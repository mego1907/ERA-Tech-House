"use client";
import LeftIcon from "@/icons/LeftIcon";
import RightIcon from "@/icons/RightIcon";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import SwiperCore from "swiper";
import Navigation from "swiper";

// SwiperCore.use([Navigation]);

const MainSlider = () => {
  const t = useTranslations();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("Slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="bg-overlay-bg"
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        if (typeof swiper.params.navigation !== "boolean") {
          const navigation = swiper.params.navigation!;
          navigation.prevEl = prevRef.current;
          navigation.nextEl = nextRef.current;
        }
      }}
    >
      <button ref={prevRef}>Previous</button>
      <button ref={nextRef}>Next</button>
      <SwiperSlide className="relative flex flex-col w-full pt-40 md:px-52">
        <div className="flex justify-end w-full">
          <Link
            href={"/contact"}
            className="absolute top-0 py-5 text-white transition-all rounded-xl hover:bg-opacity-75 px-14 bg-mainColor"
          >
            <span>Contact Us</span>
          </Link>
        </div>
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
            <div className="w-0 h-full md:w-2/3">
              <img
                src="/assets/wow-image.png"
                alt=""
                className="w-full rounded-t-full"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex flex-col w-full pt-40">
        <div className="z-10 w-full px-4 mx-auto md:w-2/3 -translate-y-1/4">
          <h3 className="md:text-[2.5rem] text-lg text-white font-bold mt-10">
            {t("header.why-us")}
          </h3>

          <div className="flex items-center justify-center">
            <div className="z-10 w-full">
              <div className="w-full px-8 py-12 text-base text-white rounded-md shadow-md md:ltr:translate-x-9 md:rtl:-translate-x-9 bg-mainColor leading">
                <p className="leading-6 text-desc">{t("header.quality")}</p>
                <span className="block h-[2px] mt-8 bg-desc w-9"></span>
              </div>
            </div>
            <div className="w-0 h-full md:w-2/3">
              <img
                src="/assets/wow-image.png"
                alt=""
                className="w-full rounded-t-full"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

{
  /* <div className="grid grid-cols-[1fr_10fr_1fr] bg-overlay-bg">
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
</div>; */
}

export default MainSlider;
