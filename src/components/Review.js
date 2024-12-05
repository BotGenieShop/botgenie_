import React, { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { useAnimation, useInView, motion } from "framer-motion";
// import A from "./images/A.png"; // Profil resimleri için placeholder
import { useTranslation } from "react-i18next"; // i18next'e bağlanmak için gerekli import

const Review = () => {
  const { t } = useTranslation(); // t fonksiyonunu burada kullanıyoruz.
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="overflow-x-hidden max-w-screen font-poppins bg-gray-50">
      {" "}
      {/* Arka plan rengini bg-gray-50 yapalım */}
      <section className="py-12">
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-8 xl:grid-cols-5">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="max-w-2xl mx-auto rounded-lg shadow-lg bg-white p-6 space-y-4 text-center xl:col-span-2 xl:text-left"
            >
              <h2 className="text-4xl font-bold text-purple-600">
                {" "}
                {/* Mor renk */}
                {t("businessGrowthWithBots")}
              </h2>
              <p className="text-gray-700">
                {t("startTodayAndLeaveTheRestToUs")}
              </p>
            </motion.div>

            <div className="xl:col-span-3">
              <div className="grid gap-8 md:grid-cols-2">
                {[1, 2, 3, 4].map((item, idx) => (
                  <motion.div
                    ref={ref}
                    key={idx}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: idx % 2 === 0 ? -75 : 75,
                        y: -45,
                      },
                      visible: { opacity: 1, x: 0, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 0.6, delay: 0.15 + idx * 0.2 }}
                    className="p-6 rounded-lg shadow-lg bg-white"
                  >
                    <p>{t("reviewText" + (idx + 1))}</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <div className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-300"></div>{" "}
                      {/* Placeholder for image */}
                      <div>
                        <p className="text-md font-semibold">
                          {t("reviewerName" + (idx + 1))}
                        </p>
                        <p className="text-sm text-gray-400">
                          {t("reviewerRole")}
                        </p>
                      </div>
                      <MdVerified
                        size={Width < 631 ? 35 : 40}
                        className="text-pink-500 ml-2"
                      />{" "}
                      {/* Pembe renk ile uyumlu ikonu buraya ekledik */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
