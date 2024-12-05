import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa"; // Menü açma/kapama için ikonlar
import { useTranslation } from "react-i18next";
//import logo from "./images/logo.png"; // Logo dosyasını ekliyoruz

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageMenuOpen(false);
  };

  return (
    <div className="font-poppins">
      <nav className="bg-white bg-opacity-60 backdrop-blur-md fixed w-full z-20 left-0 top-0 py-4 px-6 shadow-lg">
        <div className="max-w-screen-xl flex justify-between items-center mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-indigo-600 text-2xl">Botgenie</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="text-gray-800 hover:text-blue-600 sm:hidden block"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Menu */}
          <div
            className={`sm:flex items-center space-x-6 ${
              menuOpen ? "block" : "hidden sm:block"
            }`}
          >
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="text-gray-800 hover:text-blue-600 font-medium"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-800 hover:text-blue-600 font-medium"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-800 hover:text-blue-600 font-medium"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-800 hover:text-blue-600 font-medium"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>

            {/* Dil Seçenekleri */}
            <div className="relative">
              <button
                className="text-gray-800 hover:text-blue-600 flex items-center space-x-2"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <FaGlobe size={24} />
                <span>{i18n.language === "tr" ? "TR" : "EN"}</span>
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 px-2 border border-gray-300">
                  <button
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100 rounded-lg"
                    onClick={() => changeLanguage("tr")}
                  >
                    Türkçe
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100 rounded-lg"
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Başlayın Butonu */}
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              {t("start")}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
