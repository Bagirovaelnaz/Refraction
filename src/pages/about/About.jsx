import "./about.css";
import Marquee from "react-fast-marquee";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { GlobalThemeContext } from "../../context/ThemeContext";

const About = () => {
  const { t } = useTranslation();
  const { darkMode } = useContext(GlobalThemeContext);
  const [localStorageTheme, setLocalStorageTheme] = useState("");

  useEffect(() => {
    // Set localStorageTheme based on darkMode value
    const theme = darkMode ? "dark-mode" : "light-mode";
    setLocalStorageTheme(theme);
  }, [darkMode]);

  return (
    <div>
      <div className={`about-section-${localStorageTheme}`}>
        <div className="first-section-about">
          <div>
            <h1>{t("aboutUs")}</h1>
            <span id="deliberate">{t("deliberateDescription")}</span>
          </div>
          <img
            src="https://assets.website-files.com/606a817e5976f2ad842e21e6/6078f9ea46e3876836984090_ringring%20copy-min.png"
            alt="ring"
          />
        </div>
        <div className="value-box">
          <h2>{t("values")}</h2>
          <div className="for-values">
            {["simple", "clear", "elegant", "handmade", "fresh"].map(
              (value) => (
                <div key={value}>
                  <h4>{t(`${value}`)}</h4>
                  <p>{t(`${value}Description`)}</p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="made-hand">
          <img
            src="https://assets.website-files.com/606a817e5976f2ad842e21e6/6078f9eb752a09a8806ca619_section3-min-p-500.png"
            alt="neck"
          />
          <div>
            <h2>{t("madeFromHand")}</h2>
            <p>{t("madeFromHandDescription")}</p>
          </div>
        </div>
      </div>
      <div className="hr">
        <hr />
      </div>
      <div className="partners">
        <h5>{t("trustedPartners")}</h5>
        <Marquee>
          <img
            src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/668689ac7147a125b98fddd8_logo-02.svg"
            alt="logo-1"
          />
          <img
            src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/668689acc58b6adab3478a58_logo-05.svg"
            alt="logo-2"
          />
          <img
            src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/668689ac72b223c0294ec6ff_logo-03.svg"
            alt="logo-3"
          />
          <img
            src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/668689ac258bfafd9a52af7a_logo-04.svg"
            alt="logo-4"
          />
        </Marquee>
      </div>
      <div className="hr">
        <hr />
      </div>
      <div className="faq">
        <h1>{t("commonQuestions")}</h1>
        <div className="accordion-container">
          <Accordion defaultActiveKey="0">
            {[
              "materials",
              "returnPolicy",
              "handMade",
              "internationalShipping",
              "careTips",
            ].map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={faq}>
                <Accordion.Header>{t(`faq.${faq}.question`)}</Accordion.Header>
                <Accordion.Body>{t(`faq.${faq}.answer`)}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
