import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const AboutPage = () => {
  const { t } = useTranslation(); // Dil desteği
  const animationControls = useAnimation();
  const sectionRef = useRef(null);

  // Scroll animasyonu
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationControls.start("visible");
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [animationControls]);

  // Sayfa başlığı
  useEffect(() => {
    document.title = "Botgenie | " + t("aboutpage.title");
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-40">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold text-purple-600"
          >
            {t("aboutpage.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mt-4"
          >
            {t("aboutpage.description")}
          </motion.p>
          {/* Görsel alan boş bırakıldı */}
          <div className="w-full max-w-4xl mx-auto mt-10 bg-gray-200 h-56 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 italic">
              {t("aboutpage.imagePlaceholder")}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial="hidden"
            animate={animationControls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-black text-center">
              {t("aboutpage.whyChooseUs")}
            </h2>
            <p className="text-lg text-gray-600 text-center mt-4">
              {t("aboutpage.whyChooseUsDescription")}
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center mt-10 gap-8">
            <motion.div
              className="w-full md:w-1/3 p-4 bg-pink-50 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-purple-600">
                {t("aboutpage.features.easyIntegration")}
              </h3>
              <p className="text-gray-600 mt-2">
                {t("aboutpage.features.easyIntegrationDescription")}
              </p>
            </motion.div>
            <motion.div
              className="w-full md:w-1/3 p-4 bg-pink-50 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-purple-600">
                {t("aboutpage.features.smartAutomation")}
              </h3>
              <p className="text-gray-600 mt-2">
                {t("aboutpage.features.smartAutomationDescription")}
              </p>
            </motion.div>
            <motion.div
              className="w-full md:w-1/3 p-4 bg-pink-50 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-purple-600">
                {t("aboutpage.features.customerSupport")}
              </h3>
              <p className="text-gray-600 mt-2">
                {t("aboutpage.features.customerSupportDescription")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-black text-center">
              {t("aboutpage.teamTitle")}
            </h2>
            <p className="text-lg text-gray-600 text-center mt-4">
              {t("aboutpage.teamDescription")}
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center mt-10 gap-8">
            {[1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-full md:w-1/3 bg-white rounded-lg shadow-lg text-center p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Görsel alan boş bırakıldı */}
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                  <p className="text-gray-500 italic">
                    {t("aboutpage.team.imagePlaceholder")}
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mt-4">
                  {t(`aboutpage.team.member${index}.name`)}
                </h3>
                <p className="text-gray-600 mt-2">
                  {t(`aboutpage.team.member${index}.role`)}
                </p>
                <div className="flex justify-center mt-4 space-x-3 text-purple-600">
                  <FaTwitter className="hover:scale-125 transition-transform" />
                  <FaLinkedin className="hover:scale-125 transition-transform" />
                  <FaInstagram className="hover:scale-125 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
