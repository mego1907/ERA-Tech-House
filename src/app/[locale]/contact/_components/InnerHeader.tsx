import { Navbar } from "@/components";
import { useTranslations } from "next-intl";

const InnerHeader = () => {
  const t = useTranslations("contact-us");

  return (
    <div className="mb-5">
      <Navbar bg={false} />

      <div className="pt-10 md:pt-32">
        <div className="grid md:mx-16 mx-5 md:grid-cols-[1fr_2fr] grid-cols-1 gap-20 bg-contact-img bg-cover bg-center ">
          <div className="h-full p-10 px-5 text-white md:px-20 bg-overlay-bg">
            <h4 className="z-10 mb-5 text-3xl font-bold text-mainColor">
              {t("title")}
            </h4>
            <p>{t("phone")}</p>
            <p>{t("mail")}</p>
          </div>

          <div className="flex items-center justify-center p-10">
            <div className="flex flex-col gap-4 p-5 py-16 md:w-3/5 md:p-0">
              <div className="flex gap-3">
                <label>
                  <span>{t("first-name-label")}</span>
                  <input type="text" className="w-full p-2 bg-white/70" />
                </label>
                <label>
                  <span>{t("last-name-label")}</span>
                  <input type="text" className="w-full p-2 bg-white/70" />
                </label>
              </div>

              <div className="flex gap-3">
                <label>
                  <span>{t("email-label")}</span>
                  <input type="text" className="w-full p-2 bg-white/70" />
                </label>
                <label>
                  <span>{t("phone-label")}</span>
                  <input type="text" className="w-full p-2 bg-white/70" />
                </label>
              </div>

              <label className="w-full">
                <span>{t("last-name-label")}</span>
                <textarea
                  rows={6}
                  className="min-w-full p-2 bg-white/70"
                  cols={8}
                />
              </label>

              <button className="w-full p-2 mt-8 text-sm text-white rounded-full bg-mainColor">
                {t("send-btn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerHeader;
