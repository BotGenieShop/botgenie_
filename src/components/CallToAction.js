import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next"; // i18n desteği

const CallToAction = () => {
  const { t } = useTranslation(); // t fonksiyonu, dil çevirisini almak için kullanılır
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"></div>
      <section className="py-20 lg:py-[120px] font-poppins bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        <div className="container mx-auto">
          <div className="relative z-10 sm:-mt-10 sm:-mb-10 overflow-x-hidden rounded-xl py-16 px-8 md:p-[70px] shadow-lg bg-white bg-opacity-70">
            <div className="-mx-4 flex flex-wrap items-center">
              <motion.div
                ref={ref}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -75 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full px-4 lg:w-1/2"
              >
                <span className="mb-2 text-base font-semibold text-purple-600">
                  {t("businessGrowthWithBots")}
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-[38px] lg:mb-0">
                  {t("startTodayAndLeaveTheRestToUs")}
                  <br className="xs:block hidden" />
                  {t("yourWebAndBotSolutions")}
                  <span className="text-4xl text-pink-400">
                    {t("ourMission")}
                  </span>
                </h2>
                <p className="text-lg mb-6">
                  {t("botGenieForTelegramInstagramWhatsappDiscord")}
                </p>
              </motion.div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex sm:flex-wrap sm:justify-end">
                  <motion.div
                    ref={ref}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 75 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <a
                      href="#"
                      className="my-1 mr-4 inline-block rounded-full bg-white bg-opacity-40 py-4 px-8 text-base font-semibold text-purple-600 transition duration-300 hover:bg-opacity-100 hover:scale-105 md:px-9 lg:px-6 xl:px-9"
                    >
                      {t("talkToBotExpert")}
                    </a>
                  </motion.div>
                  <motion.div
                    ref={ref}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 75 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <a
                      href="#"
                      className="my-1 inline-block rounded-full bg-pink-400 py-4 px-8 text-base font-semibold text-white transition duration-300 hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
                    >
                      {t("startWithBotGenie")}
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-purple-300 to-pink-400"></div>
    </div>
  );
};

export default CallToAction;
