import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Dil desteği

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="font-poppins bg-gradient-to-br from-blue-900 via-purple-700 to-pink-600 text-white overflow-hidden relative min-h-[100vh] pt-36">
      <div className="container mx-auto px-6 lg:px-16 py-20 flex flex-col justify-center min-h-full">
        <div className="flex flex-wrap items-center justify-between">
          {/* Sol Kısım: Metin ve Butonlar */}
          <motion.div
            className="w-full lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {t("welcome")}
              <br />
              <span className="text-blue-300">{t("subheading")}</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 max-w-lg">
              {t("description")}
            </p>
            <div className="flex space-x-4">
              <Link
                to="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all"
              >
                {t("botsButton")}
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                {t("startButton")}
              </Link>
            </div>
          </motion.div>

          {/* Sağ Kısım: Görsel */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Görsel veya illüstrasyon burada yer alabilir */}
          </motion.div>
        </div>
      </div>

      {/* Arka Plan Efektleri */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-400 opacity-20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
