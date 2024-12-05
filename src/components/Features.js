import React from "react";
import { FaTelegram, FaWhatsapp, FaDiscord, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaTelegram className="text-purple-500" size={48} />,
      title: t("telegramFeature"),
      description: t("telegramFeatureDescription"),
    },
    {
      icon: <FaWhatsapp className="text-green-500" size={48} />,
      title: t("whatsappFeature"),
      description: t("whatsappFeatureDescription"),
    },
    {
      icon: <FaDiscord className="text-blue-500" size={48} />,
      title: t("discordFeature"),
      description: t("discordFeatureDescription"),
    },
    {
      icon: <FaInstagram className="text-pink-500" size={48} />,
      title: t("instagramFeature"),
      description: t("instagramFeatureDescription"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            {t("featureTitle")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("featureDescription")}
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="mt-12 mx-auto w-[70%] h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
    </div>
  );
};

export default Features;
