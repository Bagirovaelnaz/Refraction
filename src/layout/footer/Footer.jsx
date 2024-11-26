import { Link } from "react-router-dom";
import "./footer.css";
import { useTranslation } from "react-i18next"; 
import { GlobalThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Footer = () => {
  const { t } = useTranslation(); 
  const { toggleMode, darkMode } = useContext(GlobalThemeContext);

  const handleThemeChange = () => {
    toggleMode();
  };
  return (
    <div className="all-footer">
      <div className="hr">
        <hr></hr>
      </div>
      <div className="footer">
      <img
        id="logo-footer"
        src={
          darkMode 
            ? "https://cdn.prod.website-files.com/606a817e5976f2ad842e21e6/606e2e9ff05bae5205c11138_Refraction%20Logo%20Alt%203%20White.svg"
            : "https://cdn.prod.website-files.com/606a817e5976f2ad842e21e6/606e2e9e81d89a21fd93a26c_Refraction%20Logo%20Alt%202%20White.svg"
        }
        alt="logo"
      />
        <div className="f-shop">
          <span id="basliq">{t('categories')}</span> 
          <Link to="/">{t('necklaces')}</Link>
          <Link to="/">{t('earrings')}</Link>
          <Link to="/">{t('bracelets')}</Link>
          <Link to="/">{t('rings')}</Link>
        </div>
        <div className="f-shop">
          <span id="basliq">{t('about')}</span> 
          <Link to="/about">{t('info')}</Link>
          <Link to="/contact">{t('contactUs')}</Link>
          <Link to="/wishlist">{t('wishlist')}</Link>
        </div>
        <div className="f-shop">
          <span id="basliq">{t('otherPages')}</span> 
          <Link to="/login">{t('login')}</Link>
          <Link to="/signup">{t('signup')}</Link>
          <Link to="*">{t('notFound')}</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
