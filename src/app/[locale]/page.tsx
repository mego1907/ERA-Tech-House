import {
  Footer,
  Navbar,
  OurCustomers,
  ServicesCard,
  InlineDatePicker,
} from "@/components";
import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations();

  const ourServices = [
    {
      id: 1,
      description: t("services.serv-sec"),
      category: t("services.category"),
      path: "#",
      name: "serv 1",
      img: "/assets/services/wow-image → website-development-links-seo-webinar-cyberspace-concept.jpg.png",
    },
    {
      id: 2,
      description: t("services.serv-sec"),
      category: t("services.category"),
      path: "#",
      name: "serv 2",
      img: "/assets/services/wow-image → representation-user-experience-interface-design-smartphone.jpg.png",
    },
    {
      id: 3,
      description: t("services.serv-sec"),
      category: t("services.category"),
      path: "#",
      name: "serv 3",
      img: "/assets/services/hand-using-laptp-with-graphic-global-communication-connection-technology.jpg.png",
    },
    {
      id: 4,
      description: t("services.serv-sec"),
      category: t("services.category"),
      path: "#",
      name: "serv 4",
      img: "/assets/services/corporate-management-strategy-solution-branding-concept.jpg.png",
    },
  ];

  const ourNumbers = [
    {
      id: 1,
      num: "6",
      desc: t("years-of-experience"),
    },
    {
      id: 2,
      num: "+50",
      desc: t("technology-partners"),
    },
    {
      id: 3,
      num: "+50",
      desc: t("successful-projects-completed"),
    },
    {
      id: 4,
      num: "+10",
      desc: t("countries-served"),
    },
    {
      id: 5,
      num: "+10",
      desc: t("industry-awards"),
    },
  ];

  return (
    <main className="relative bg-fixed bg-header-bg">
      <Header />
      <div className="bg-overlay-bg section">
        <div className="z-10 w-full px-4 mx-auto md:w-2/3 -translate-y-1/4">
          <h3 className="md:text-[2.5rem] text-lg text-white font-bold">
            {t("header.why-us")}
          </h3>

          <div className="flex items-center justify-center mx-auto">
            <div className="w-full">
              <div className="w-full p-12 text-base text-white rounded-md shadow-md md:ltr:translate-x-9 md:rtl:-translate-x-9 bg-mainColor leading">
                <p className="leading-6 text-desc">{t("header.quality")}</p>
                <span className="block h-[2px] mt-8 bg-desc w-9"></span>
              </div>
            </div>
            <div className="w-0 md:w-2/3">
              <img src="/assets/wow-image.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="z-10 px-5 py-10 md:px-40 bg-overlay-bg section">
        <h2 className="text-center text-white md:text-[3.5rem] font-bold mb-6">
          {t("services.title")}
        </h2>
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          {ourServices.map((serv, i) => (
            <ServicesCard {...serv} key={i} />
          ))}
        </div>
      </div>
      {/*  */}
      <div className="relative z-10 bg-overlay-bg section">
        <div className="grid md:grid-cols-2 grid-cols-1 border-t-[0.1px] border-b-[0.1px] border-desc/10">
          <div className="flex flex-col items-center justify-center text-white md:border-r-[0.1px] border-b-[0.1px] md:p-0 p-5 border-desc/10">
            <p>{t("unprecedented-velocity")}</p>
            <p>{t("impeccable-reliability")}</p>
          </div>
          <div className="flex flex-col items-end justify-center px-5 py-10 text-white pb-44 md:p-56">
            <p>{t("at-era-tech-house")}</p>
            <button
              type="button"
              className="px-4 py-2 mt-10 text-sm text-black rounded-md md:text-base md:p-4 md:px-8 bg-mainColor"
            >
              {t("learn-more-btn")}
            </button>
          </div>
        </div>

        {/* We Take Pride in Our Numbers */}
        <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 bottom-10 left-1/2">
          <h3 className="text-base font-bold text-white md:text-3xl">
            {t("we-take-pride-in-our-numbers")}
          </h3>

          <div className="grid grid-cols-5 gap-16 md:gap-5">
            {ourNumbers.map(({ id, num, desc }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center gap-2 text-center"
              >
                <h2 className="text-2xl font-bold md:text-6xl text-mainColor">
                  {num}
                </h2>
                <p className="text-[10px] md:text-sm text-desc">{desc}</p>
                <span className="w-full h-1 bg-[#666666]"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Customers */}
      <OurCustomers />

      {/* Footer */}
      <Footer />
    </main>
  );
}
