import { Link } from "react-router-dom";
import "./header.css";
import { useCart } from "react-use-cart";
import { useContext, useEffect, useState } from "react";
import { GlobalThemeContext } from "../../context/ThemeContext";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import supabase from "../../supabase";

const Header = () => {
  const { totalItems } = useCart();
  const { toggleMode, darkMode } = useContext(GlobalThemeContext);
  const { t } = useTranslation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session ? data.session.user : null);
    };

    getUser();
    supabase.auth.onAuthStateChange(() => {
      getUser();
    });
  }, []);

  const handleThemeChange = () => {
    toggleMode();
  };

  const handleLanguageChange = () => {
    const newLang = i18n.language === "az" ? "en" : "az";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <div className="nav">
      <button className="lang-btn" onClick={handleLanguageChange}>
        {i18n.language === "az" ? "AZE" : "ENG"}
      </button>
      {user ? <span>{user.user_metadata?.name || "bagirova"}</span> : null}
      <Link to="/">{t("home")}</Link>
      <Link to="/shop">{t("shop")}</Link>
      <Link to="/about">{t("about")}</Link>
      <img
        className="theme-img"
        src={
          darkMode
            ? "https://cdn.prod.website-files.com/606a817e5976f2ad842e21e6/606e2e9ff05bae5205c11138_Refraction%20Logo%20Alt%203%20White.svg"
            : "https://cdn.prod.website-files.com/606a817e5976f2ad842e21e6/606e2e9e81d89a21fd93a26c_Refraction%20Logo%20Alt%202%20White.svg"
        }
        alt="logo"
      />
      <Link to="/wishlist">{t("favourite")}</Link>
      <Link to="/contact">{t("contact")}</Link>
      <Link to="/bag">
        {t("bag")} ({totalItems})
      </Link>
      <button onClick={handleThemeChange} className="sun">
        {darkMode ? <IoSunny className={darkMode ? "sunny-icon" : ""} /> : <IoMoon />}
      </button>
    </div>
  );
};

export default Header;