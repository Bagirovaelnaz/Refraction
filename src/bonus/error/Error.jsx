import { Link } from "react-router-dom";
import "./error.css";
import { useTranslation } from "react-i18next";

const Error = () => {
  const { t } = useTranslation();

  return (
    <div className="error-section">
      <div className="error">
        <div className="error-t-b">
          <h1>{t("error.title")}</h1>
          <p>{t("error.message")}</p>
          <Link to="/">
            <button className="button-2">{t("error.goToHome")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
