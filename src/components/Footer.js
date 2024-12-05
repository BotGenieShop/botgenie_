import React from "react";
import { Link } from "react-router-dom";
import {
  ImLinkedin2,
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImWhatsapp,
} from "react-icons/im";
import { useTranslation } from "react-i18next";
import ScrollToTop from "react-scroll-up"; // Doğru import

const Footer = () => {
  const { t, i18n } = useTranslation(); // i18n ve t doğru şekilde alındı

  return (
    <>
      {/* Gradient Line */}
      <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>

      {/* Main Footer Section */}
      <footer className="bg-gray-50 py-10 font-poppins">
        <div className="container px-6 mx-auto space-y-10 md:space-y-20">
          {/* Logo & Description Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
                <img
                  src="/images/favicon.png"
                  alt="Botgenie Logo"
                  className="w-12 h-12"
                />
              </div>
              <span className="text-3xl font-semibold text-purple-600">
                {t("botgenie")}
              </span>
            </div>
            <p className="text-center md:text-left text-gray-700 text-lg">
              {t("footerDescription")}
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-purple-600">
                {t("quickLinks")}
              </h3>
              <ul className="space-y-4 mt-4 text-gray-600">
                <li>
                  <Link to="/" className="hover:text-purple-500">
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-purple-500">
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-purple-500">
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-purple-500">
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-xl font-bold text-purple-600">
                {t("company")}
              </h3>
              <ul className="space-y-4 mt-4 text-gray-600">
                <li>
                  <Link to="/privacy-policy" className="hover:text-purple-500">
                    {t("privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-purple-500">
                    {t("terms")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-bold text-purple-600">
                {t("followUs")}
              </h3>
              <div className="space-x-4 mt-4 flex justify-center md:justify-start">
                <Link to="/" title="LinkedIn" className="hover:text-purple-500">
                  <ImLinkedin2 size={30} />
                </Link>
                <Link to="/" title="Facebook" className="hover:text-purple-500">
                  <ImFacebook size={30} />
                </Link>
                <Link to="/" title="Twitter" className="hover:text-purple-500">
                  <ImTwitter size={30} />
                </Link>
                <Link
                  to="/"
                  title="Instagram"
                  className="hover:text-purple-500"
                >
                  <ImInstagram size={30} />
                </Link>
                <Link to="/" title="WhatsApp" className="hover:text-purple-500">
                  <ImWhatsapp size={30} />
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-purple-600">
                {t("contactUs")}
              </h3>
              <ul className="space-y-4 mt-4 text-gray-600">
                <li>{t("phone")}: +1 (555) 123-4567</li>
                <li>{t("email")}: contact@botgenie.com</li>
                <li>{t("address")}: 123 Tech Street, Silicon Valley, CA</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <span className="text-sm text-gray-600">
                © 2024 <span className="text-purple-600">Botgenie</span>.{" "}
                {t("allRightsReserved")}
              </span>
            </div>
            <div className="flex space-x-6 justify-center md:justify-end">
              <span className="text-sm text-gray-600">{t("language")}: </span>
              <button
                className="text-purple-600 hover:text-purple-500"
                onClick={() => i18n.changeLanguage("en")}
              >
                English
              </button>
              <span>/</span>
              <button
                className="text-purple-600 hover:text-purple-500"
                onClick={() => i18n.changeLanguage("tr")}
              >
                Türkçe
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6">
        <ScrollToTop
          smooth
          className="bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600"
        >
          ↑
        </ScrollToTop>
      </div>
    </>
  );
};

export default Footer;
