import "./contact.scss";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Mail, MapPinHouse, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";
const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const chatId = import.meta.env.VITE_CHAT_ID;
const apiUrl = import.meta.env.VITE_TELEGRAM_API;
const url = `${apiUrl}/bot${botToken}/sendMessage`;
const Contact = () => {
  const { t } = useTranslation("contact");
  const [loading, setLoading] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderSubject, setSenderSubject] = useState("");
  const [message, setMessage] = useState("");
  const sendToBot = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const theme = localStorage.getItem("theme");
    if (!senderName || !senderEmail)
      return toast.info(t("left.notification_text"), {
        theme: theme ? theme : "dark",
        style: { background: theme === "dark" ? "#2b2b2b" : "white" },
      });
    setLoading(true);
    const fullText =
      "Fullname: " +
      senderName +
      "\nEmail: " +
      senderEmail +
      "\nSubject: " +
      senderSubject +
      "\nMessage: " +
      message;
    const sendingData = { chat_id: chatId, text: fullText };
    try {
      await axios.post(url, sendingData);
      if (theme)
        toast.success(t("left.success_text"), {
          theme,
          style: { background: theme === "dark" ? "#2b2b2b" : "white" },
        });
      setSenderName("");
      setSenderEmail("");
      setSenderSubject("");
      setMessage("");
    } catch (error) {
      console.error("Xato yuz berdi:", error);
    }
    setLoading(false);
  };
  return (
    <section id="contact">
      <div className="contact" data-aos="fade-up">
        <div className="left">
          <h2>{t("left.title")}</h2>
          <form onSubmit={sendToBot}>
            <div className="input-box">
              <label htmlFor="fullname">{t("left.fullname")}</label>
              <input
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                id="fullname"
                type="text"
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">{t("left.email")}</label>
              <input
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                id="email"
                type="email"
              />
            </div>
            <div className="input-box">
              <label htmlFor="subject">{t("left.subject")}</label>
              <input
                value={senderSubject}
                onChange={(e) => setSenderSubject(e.target.value)}
                id="subject"
                type="text"
              />
            </div>
            <div className="input-box">
              <label htmlFor="message">{t("left.message")}</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
              />
            </div>
            <button disabled={loading}>
              {loading ? t("left.buttonLoad") : t("left.button")}
            </button>
          </form>
        </div>
        <div className="right">
          <h2>{t("right.title")}</h2>
          <div className="right-content">
            <div className="right-item">
              <span className="start">
                <MapPinHouse />
              </span>
              <ul>
                <li>
                  <p>{t("right.country")}:</p>{" "}
                  <small>{t("right.country_value")}</small>
                </li>
                <li>
                  <p>{t("right.city")}:</p>{" "}
                  <small>{t("right.city_value")}</small>
                </li>
                <li>
                  <p>{t("right.region")}:</p>{" "}
                  <small>{t("right.region_value")}</small>
                </li>
              </ul>
            </div>
            <div className="right-item">
              <span className="start">
                <Mail />
              </span>
              <ul>
                <li>
                  <p>{t("right.email")}:</p>{" "}
                  <small style={{ textTransform: "lowercase" }}>
                    {t("right.email_value")}
                  </small>
                </li>
                <li>
                  <p>{t("right.instagram")}:</p>{" "}
                  <small style={{ textTransform: "lowercase" }}>
                    {t("right.instagram_value")}
                  </small>
                </li>
                <li>
                  <p>{t("right.telegram")}:</p>{" "}
                  <small style={{ textTransform: "lowercase" }}>
                    {t("right.telegram_value")}
                  </small>
                </li>
              </ul>
            </div>
            <div className="right-item">
              <span className="start">
                <Smartphone />
              </span>
              <ul>
                <li>
                  <p>{t("right.personal1")}:</p>{" "}
                  <small>{t("right.personal1_value")}</small>
                </li>
                <li>
                  <p>{t("right.personal2")}:</p>{" "}
                  <small>{t("right.personal2_value")}</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
