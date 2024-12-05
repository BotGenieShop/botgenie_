import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FcAssistant, FcSettings, FcLink, FcGlobe } from "react-icons/fc";
import map from "../assets/images/map.png";

const Services = () => {
  const { t } = useTranslation();
  const animationControls = useAnimation();
  const sectionRef = useRef(null);

  // Set document title and scroll to top on mount
  useEffect(() => {
    document.title = `Botgenie | ${t("servicespage.title")}`;
    window.scrollTo(0, 0);
  }, [t]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animationControls.start("visible");
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animationControls]);

  return (
    <>
      <div className="bg-gradient-to-br from-purple-50 to-purple-100">
        {/* Hero Section */}
        <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] text-center">
          <div className="container mx-auto px-10">
            <motion.div
              initial={{ opacity: 0, y: 75 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mx-auto max-w-[750px]"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-purple-600">
                {t("servicespage.title")}
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                {t("servicespage.description")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* servicespage Section */}
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
              className="text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-purple-600">
                {t("servicespage.ourServices")}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {t("servicespage.ourServicesDescription")}
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center mt-10 gap-8">
              <ServiceCard
                title={t("servicespage.cards.readyBots.title")}
                details={t("servicespage.cards.readyBots.description")}
                icon={<FcAssistant className="text-6xl" />}
              />
              <ServiceCard
                title={t("servicespage.cards.customBots.title")}
                details={t("servicespage.cards.customBots.description")}
                icon={<FcSettings className="text-6xl" />}
              />
              <ServiceCard
                title={t("servicespage.cards.integration.title")}
                details={t("servicespage.cards.integration.description")}
                icon={<FcLink className="text-6xl" />}
              />
              <ServiceCard
                title={t("servicespage.cards.globalSupport.title")}
                details={t("servicespage.cards.globalSupport.description")}
                icon={<FcGlobe className="text-6xl" />}
              />
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-600">
              {t("servicespage.globalReachTitle")}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t("servicespage.globalReachDescription")}
            </p>
            <div className="relative mt-10">
              <img src={map} alt="Global Map" className="w-full rounded-lg" />
              {/* StatCard 1 */}
              <div className="absolute top-20 left-1/4 sm:left-1/6 md:left-1/6 lg:left-1/4 xl:left-1/4">
                <StatCard value="2K+" label={t("servicespage.stats.clients")} />
              </div>
              {/* StatCard 2 */}
              <div className="absolute top-32 right-1/4 sm:right-1/6 md:right-1/6 lg:right-1/4 xl:right-1/4">
                <StatCard
                  value="25%"
                  label={t("servicespage.stats.performance")}
                />
              </div>
              {/* StatCard 3 */}
              <div className="absolute bottom-20 left-1/3 sm:left-1/4 md:left-1/4 lg:left-1/3 xl:left-1/3">
                <StatCard
                  value="70%"
                  label={t("servicespage.stats.retention")}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;

// Service Card Component
const ServiceCard = ({ icon, title, details }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition">
        <div className="mb-6 flex items-center justify-center">{icon}</div>
        <h3 className="text-xl font-semibold text-purple-600">{title}</h3>
        <p className="mt-4 text-gray-600">{details}</p>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ value, label }) => {
  return (
    <div className="w-10 sm:w-12 md:w-14 lg:w-16 xl:w-20 p-1 sm:p-1 bg-white rounded-lg shadow-lg">
      <h3 className="text-xs sm:text-xs md:text-sm font-bold text-purple-600">
        {value}
      </h3>
      <p className="mt-1 text-xs sm:text-xs md:text-sm text-gray-600">
        {label}
      </p>
    </div>
  );
};
