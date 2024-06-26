import { useTranslations } from "next-intl";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomerCard = ({ id, name }: { id: any; name: String }) => {
  const customerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [customerRef.current],
      {
        translateX: -200,
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: customerRef.current,
          start: "0% 50%",
        },
      }
    );
  }, []);

  return (
    <div
      className={`md:px-10 md:text-3xl text-sm font-bold text-center text-white border border-white md:w-[184px] w-[100px] md:h-[233px] h-10 flex items-center justify-center bg-black ${
        id === 4 ? "whitespace-nowrap" : ""
      }`}
    >
      <p ref={customerRef}>{name}</p>
    </div>
  );
};

const OurCustomers = () => {
  const t = useTranslations("our-customers");
  const textRightRef = useRef(null);
  const textLeftRef = useRef(null);

  const data = [
    {
      id: 1,
      name: "نقابة الصيادلة",
    },
    {
      id: 2,
      name: "WORLD FUND",
    },
    {
      id: 3,
      name: "CITY GUIDE",
    },
    {
      id: 4,
      name: "W-BANK",
    },
    {
      id: 5,
      name: "KeyMedia",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      textLeftRef.current,
      {
        translateY: 150,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: textLeftRef.current,
          start: "0% 50%",
        },
      }
    );

    gsap.fromTo(
      textRightRef.current,
      {
        translateY: 150,
        translateX: -150,
        opacity: 0,
      },
      {
        translateY: 0,
        translateX: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: textRightRef.current,
          start: "0% 50%",
        },
      }
    );
  }, []);

  return (
    <div className="relative bg-overlay-bg section">
      <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1 h-[1000px]">
        <div className="relative flex items-center justify-center bg-center bg-cover bg-our-customers-bg">
          <img src="/assets/earth.png" alt="" />
          <h3 className="absolute z-10 text-white -translate-x-1/2 left-1/2 top-5 md:text-[2.5rem] text-lg font-bold">
            {t("title")}
          </h3>
          <p
            ref={textLeftRef}
            className="absolute z-10 text-white -translate-x-1/2 left-1/2 top-1/2 md:max-w-[21ch] text-center md:text-3xl text-xl font-bold leading-normal"
          >
            {t("accelerate-your-business")}
          </p>
        </div>

        <div className="flex items-center justify-center p-5 md:p-20">
          <p className="text-white" ref={textRightRef}>
            {t("at-era-tech-house")}
          </p>
        </div>
      </div>

      <div className="absolute flex flex-wrap md:-translate-x-1/2 md:flex-nowrap md:left-1/2 left-2 md:top-28 top-16">
        {data.map(({ name, id }) => (
          <CustomerCard name={name} id={id} key={id} />
        ))}
      </div>
    </div>
  );
};

export default OurCustomers;
