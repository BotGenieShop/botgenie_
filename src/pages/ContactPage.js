import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next"; // i18n'den t fonksiyonunu al
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // İkonları import et

const Contact = () => {
  const { t } = useTranslation(); // t fonksiyonunu kullan

  useEffect(() => {
    document.title = "Botgenie | Contact";
  }, []);

  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation(isInView);

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-purple-100">
        <div className="max-w-screen font-poppins overflow-hidden">
          <section className="relative z-10 bg-gradient-to-br from-purple-100 py-20 sm:px-20 sm:py-40">
            <div className="container mx-auto">
              <div className="-mx-4 flex flex-wrap lg:justify-between">
                <motion.div
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: -75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="w-full px-4 lg:w-1/2 xl:w-6/12"
                >
                  <div className="mb-12 max-w-[570px] lg:mb-0 pl-4">
                    <h2 className="text-purple-500 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                      {t("contact_title")} {/* Dinamik dil çevirisi */}
                    </h2>
                    <p className="text-gray-500 mb-9 text-base leading-relaxed">
                      {t("message_intro")} {/* Dinamik dil çevirisi */}
                    </p>

                    {/* Konum */}
                    <motion.div
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -75 },
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.5, delay: 0.25 }}
                      className="mb-8 flex w-full max-w-[370px]"
                    >
                      <div className="bg-purple-400/20 text-purple-500 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                        <FaMapMarkerAlt size={30} />
                      </div>
                      <div className="w-full">
                        <h4 className="text-dark mb-1 text-xl font-bold">
                          {t("location_title")} {/* Dinamik dil çevirisi */}
                        </h4>
                        <p className="text-body-color text-base">
                          123 Tech Street, Silicon Valley, CA
                        </p>
                      </div>
                    </motion.div>

                    {/* Telefon */}
                    <motion.div
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -75 },
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="mb-8 flex w-full max-w-[370px]"
                    >
                      <div className="bg-purple-400/20 text-purple-500 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                        <FaPhoneAlt size={30} />
                      </div>
                      <div className="w-full">
                        <h4 className="text-dark mb-1 text-xl font-bold">
                          {t("phone_title")} {/* Dinamik dil çevirisi */}
                        </h4>
                        <p className="text-body-color text-base">
                          +90 555 555 555
                        </p>
                      </div>
                    </motion.div>

                    {/* E-posta */}
                    <motion.div
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -75 },
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.5, delay: 0.75 }}
                      className="mb-8 flex w-full max-w-[370px]"
                    >
                      <div className="bg-purple-400/20 text-purple-500 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                        <FaEnvelope size={30} />
                      </div>
                      <div className="w-full">
                        <h4 className="text-dark mb-1 text-xl font-bold">
                          Email
                        </h4>
                        <p className="text-body-color text-base">
                          info@botgenie.com
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Form */}
                <motion.div
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: 75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 1 }}
                  className="w-full px-4 lg:w-1/2 xl:w-6/12"
                >
                  <div className="max-w-[570px]">
                    <h3 className="mb-6 text-[32px] font-bold leading-tight text-purple-500 pl-4 sm:text-[40px] xl:text-[36px]">
                      {t("message_title")} {/* Dinamik dil çevirisi */}
                    </h3>
                    <form action="mailto:info@botgenie.com" method="post">
                      <div className="mb-6 flex flex-wrap">
                        <div className="w-full md:w-1/2 pr-4 pl-4">
                          <label className="mb-3 block text-sm font-medium text-gray-700">
                            {t("name_label")} {/* Dinamik dil çevirisi */}
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            className="w-full rounded-md border border-gray-200 py-3 px-6 text-base font-medium text-dark outline-none transition duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4">
                          <label className="mb-3 block text-sm font-medium text-gray-700">
                            {t("email_label")} {/* Dinamik dil çevirisi */}
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            className="w-full rounded-md border border-gray-200 py-3 px-6 text-base font-medium text-dark outline-none transition duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                      <div className="mb-6 pl-4">
                        <label className="mb-3 block text-sm font-medium text-gray-700">
                          {t("message_label")} {/* Dinamik dil çevirisi */}
                        </label>
                        <textarea
                          name="message"
                          required
                          rows="6"
                          className="w-full rounded-md border border-gray-200 py-3 px-6 text-base font-medium text-dark outline-none transition duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                        />
                      </div>

                      {/* Buton Sola Kaydırıldı */}
                      <div className="flex justify-start pl-4">
                        <button
                          type="submit"
                          className="inline-flex rounded-lg bg-purple-500 px-8 py-3 text-center text-base font-semibold text-white outline-none transition duration-300 hover:bg-purple-600 focus:bg-purple-600"
                        >
                          {t("send_button")} {/* Dinamik dil çevirisi */}
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
