// src/App.js
import React, { useState, useEffect } from "react";
import "./i18n.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaSpinner } from "react-icons/fa"; // react-icons'dan FaSpinner'ı import ediyoruz

// Sayfalar
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ServicesPage from "./pages/ServicesPage";
import SignupPage from "./pages/SignupPage";

import NotFoundPage from "./pages/NotFoundPage"; // 404 sayfası

// Layout Bileşeni
import Layout from "./components/Layout"; // Layout bileşenini import ediyoruz

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 saniye sonra loading'i kapat
  }, []);

  return (
    <Router>
      <div>
        {isLoading ? (
          // Yükleniyor ikonu göster
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <FaSpinner className="animate-spin text-4xl text-blue-500" />
          </div>
        ) : (
          // Layout bileşeni ile tüm sayfalar render edilecek
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="*" element={<NotFoundPage />} />{" "}
              {/* Sayfa bulunamazsa NotFoundPage */}
            </Routes>
          </Layout>
        )}
      </div>
    </Router>
  );
};

export default App;
