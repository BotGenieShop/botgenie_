import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Şifreyi görme/kapama ikonu
import { useTranslation } from "react-i18next"; // t fonksiyonunu import et

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Şifreyi gösterme durumu
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Şifreyi tekrar gösterme durumu

  const { t } = useTranslation(); // t fonksiyonu

  // Form submit işlemi
  const handleSubmit = (e) => {
    e.preventDefault();
    // Kayıt işlemi yapılacak
    if (password !== confirmPassword) {
      alert(t("passwordMismatch")); // "Şifreler uyuşmuyor" uyarısı
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
          {t("signupTitle")} {/* "Kayıt Ol" başlığı */}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Alanı */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              {t("email")} {/* "E-posta" metni */}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder={t("emailPlaceholder")} // E-posta placeholder'ı
            />
          </div>

          {/* Şifre Alanı */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700">
              {t("password")} {/* "Şifre" metni */}
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder={t("passwordPlaceholder")} // Şifre placeholder'ı
            />
            {/* Şifreyi Gösterme / Gizleme İkonu */}
            <div
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash size={20} className="text-gray-600" />
              ) : (
                <FaEye size={20} className="text-gray-600" />
              )}
            </div>
          </div>

          {/* Şifre Tekrar Alanı */}
          <div className="mb-6 relative">
            <label htmlFor="confirmPassword" className="block text-gray-700">
              {t("confirmPassword")} {/* "Şifreyi Tekrarla" metni */}
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder={t("confirmPasswordPlaceholder")} // Şifreyi tekrar placeholder'ı
            />
            {/* Şifreyi Tekrar Gösterme / Gizleme İkonu */}
            <div
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={20} className="text-gray-600" />
              ) : (
                <FaEye size={20} className="text-gray-600" />
              )}
            </div>
          </div>

          {/* Kayıt Ol Butonu */}
          <button
            type="submit"
            className="w-full p-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700"
          >
            {t("signupButton")} {/* "Kayıt Ol" butonunun metni */}
          </button>
        </form>
        {/* Google Giriş Butonu (Tasarımsal olarak eklenmiş) */}
        <div className="mt-6">
          <button
            type="button"
            className="w-full p-3 bg-red-600 text-white font-semibold rounded-lg flex items-center justify-center hover:bg-red-700"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"
              alt="Google Logo"
              className="w-5 h-5 mr-3"
            />
            {t("googleLoginButton")}{" "}
            {/* "Google ile Giriş Yap" metnini t fonksiyonu ile alıyoruz */}
          </button>
        </div>

        {/* Zaten Hesabınız Var mı? */}
        <p className="mt-4 text-center text-gray-600">
          {t("alreadyHaveAccount")}{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            {t("loginLink")} {/* "Giriş Yap" linkinin metni */}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
