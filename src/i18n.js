import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';  // İngilizce dil dosyasını içe aktarıyoruz
import tr from './locales/tr.json';  // Türkçe dil dosyasını içe aktarıyoruz

// i18next konfigürasyonu
i18n
  .use(initReactI18next)  // React ile entegrasyon sağlıyoruz
  .init({
    resources: {
      en: { translation: en },  // İngilizce dil kaynağı
      tr: { translation: tr },  // Türkçe dil kaynağı
    },
    lng: 'tr',  // Varsayılan dil
    fallbackLng: 'tr',  // Eğer dil dosyası bulunamazsa varsayılan dil olarak İngilizce kullanılır
    interpolation: {
      escapeValue: false,  // React zaten XSS koruması sağlıyor, burada ekstra bir koruma yapmaya gerek yok
    },
  });

export default i18n;  // i18n yapılandırmasını dışa aktarıyoruz
