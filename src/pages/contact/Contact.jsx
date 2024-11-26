import "./contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-section">
      <img
        src="https://assets.website-files.com/606a817e5976f2ad842e21e6/607cb607b26414dbbd3b765e_header1%20copy-min.png"
        alt=""
      />
      <div className="contact-box">
        <div className="contact-t-b">
          <h1>{t("contactP.title")}</h1>
          <span>{t("contactP.description")}</span>
        </div>
        <form className="form-2">
          <div className="all-inputs">
            <input
              type="text"
              placeholder={t("contactP.firstName")}
              className="input"
            />
            <input
              type="text"
              placeholder={t("contactP.lastName")}
              className="input"
            />
          </div>
          <div className="all-inputs">
            <input
              type="email"
              placeholder={t("contactP.email")}
              className="input"
            />
            <input
              type="tel"
              placeholder={t("contactP.phone")}
              className="input"
            />
          </div>
          <textarea
            placeholder={t("contactP.message")}
            className="textarea"
          ></textarea>
          <button type="submit" className="button">
            {t("contactP.sendMessage")}
          </button>
        </form>
      </div>
  
    </div>
  );
};

export default Contact;
