import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// RUSSIAN JSONS
import asideleftRu from "../public/locales/ru/asideleft.json";
import asiderightRu from "../public/locales/ru/asideright.json";
import blogRu from "../public/locales/ru/blog.json";
import contactRu from "../public/locales/ru/contact.json";
import educationRu from "../public/locales/ru/education.json";
import experienceRu from "../public/locales/ru/experience.json";
import footerRu from "../public/locales/ru/footer.json";
import hiremeRu from "../public/locales/ru/hireme.json";
import portfolioRu from "../public/locales/ru/portfolio.json";
import recommendRu from "../public/locales/ru/recommend.json";
import servicesRu from "../public/locales/ru/services.json";
// ENGLISH JSONS
import asideleftEn from "../public/locales/en/asideleft.json";
import asiderightEn from "../public/locales/en/asideright.json";
import blogEn from "../public/locales/en/blog.json";
import contactEn from "../public/locales/en/contact.json";
import educationEn from "../public/locales/en/education.json";
import experienceEn from "../public/locales/en/experience.json";
import footerEn from "../public/locales/en/footer.json";
import hiremeEn from "../public/locales/en/hireme.json";
import portfolioEn from "../public/locales/en/portfolio.json";
import recommendEn from "../public/locales/en/recommend.json";
import servicesEn from "../public/locales/en/services.json";
// UZBEK JSONS
import asideleftUz from "../public/locales/uz/asideleft.json";
import asiderightUz from "../public/locales/uz/asideright.json";
import blogUz from "../public/locales/uz/blog.json";
import contactUz from "../public/locales/uz/contact.json";
import educationUz from "../public/locales/uz/education.json";
import experienceUz from "../public/locales/uz/experience.json";
import footerUz from "../public/locales/uz/footer.json";
import hiremeUz from "../public/locales/uz/hireme.json";
import portfolioUz from "../public/locales/uz/portfolio.json";
import recommendUz from "../public/locales/uz/recommend.json";
import servicesUz from "../public/locales/uz/services.json";
i18n.use(initReactI18next).init({
  resources: {
    ru: {
      asideleft: asideleftRu,
      asideright: asiderightRu,
      blog: blogRu,
      contact: contactRu,
      education: educationRu,
      experience: experienceRu,
      footer: footerRu,
      hireme: hiremeRu,
      portfolio: portfolioRu,
      recommend: recommendRu,
      services: servicesRu,
    },
    en: {
      asideleft: asideleftEn,
      asideright: asiderightEn,
      blog: blogEn,
      contact: contactEn,
      education: educationEn,
      experience: experienceEn,
      footer: footerEn,
      hireme: hiremeEn,
      portfolio: portfolioEn,
      recommend: recommendEn,
      services: servicesEn,
    },
    uz: {
      asideleft: asideleftUz,
      asideright: asiderightUz,
      blog: blogUz,
      contact: contactUz,
      education: educationUz,
      experience: experienceUz,
      footer: footerUz,
      hireme: hiremeUz,
      portfolio: portfolioUz,
      recommend: recommendUz,
      services: servicesUz,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});
export default i18n;