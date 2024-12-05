import React, { useEffect, useRef } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaRocket, FaCogs, FaCrown } from "react-icons/fa";
import { useAnimation, useInView, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Prices = () => {
  const { t } = useTranslation();
  const ref = useRef();
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const plans = [
    {
      icon: <FaRocket className="text-orange-500" size="3.5rem" />,
      title: t("starterPlan"),
      price: "₺900",
      features: [
        t("telegramIntegration"),
        t("whatsappSupport"),
        t("basicManagement"),
        t("basicSupport"),
      ],
      bg: "bg-orange-500",
      hoverBg: "hover:bg-orange-400",
    },
    {
      icon: <FaCogs className="text-purple-500" size="3.5rem" />,
      title: t("standardPlan"),
      price: "₺1500",
      features: [
        t("telegramWhatsAppIntegration"),
        t("discordIntegration"),
        t("instagramIntegration"),
        t("customSolutions"),
      ],
      bg: "bg-purple-500",
      hoverBg: "hover:bg-purple-400",
    },
    {
      icon: <FaCrown className="text-pink-500" size="3.5rem" />,
      title: t("premiumPlan"),
      price: "₺2500",
      features: [
        t("allPlatformIntegration"),
        t("advancedPanel"),
        t("customBots"),
        t("continuousSupport"),
      ],
      bg: "bg-pink-500",
      hoverBg: "hover:bg-pink-400",
    },
  ];

  return (
    <div className="max-w-screen font-poppins bg-gray-50 py-16">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            {t("pricingTitle")}
          </h2>
          <p className="text-gray-600 mt-4">{t("pricingDescription")}</p>
        </div>

        <motion.div
          ref={ref}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const PriceCard = ({ icon, title, price, features = [], bg, hoverBg }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-center transition-transform transform hover:scale-105">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <p className="text-4xl font-extrabold text-orange-500 my-4">{price}</p>
      <ul className="text-gray-600 space-y-3 text-left ml-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <BsFillCheckCircleFill className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`${bg} ${hoverBg} mt-6 text-white font-medium py-3 px-8 rounded-lg`}
      >
        {t("getSupport")}
      </button>
    </div>
  );
};

export default Prices;
