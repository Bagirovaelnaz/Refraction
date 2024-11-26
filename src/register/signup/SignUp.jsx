import supabase from "../../supabase";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // useNavigate funksiyasını əlavə edirik
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const registerUser = async () => {
    try {
      if (formdata.password !== formdata.confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email: formdata.email,
        password: formdata.password,
      });

      const user = data?.user;

      if (error) {
        console.error("Error during sign up:", error);
        return;
      }

      if (!user) {
        console.error("User not found after sign up");
        return;
      }

      const { error: insertError } = await supabase.from("profiles").insert({
        id: user.id,
        username: formdata.username,
        email: formdata.email,
      });

      if (insertError) {
        console.error("Error inserting user into profiles:", insertError);
      } else {
        toast.success("You registered successfully!");
        navigate("/login"); // Uğurlu qeydiyyatdan sonra login səhifəsinə yönləndirin
      }
    } catch (err) {
      console.error("Error during registration:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <div className="signup-section">
      <div className="signup-bg"></div>
      <div className="inputs-signup">
        <h2>{t("signupL.title")}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={formdata.username}
            onChange={handleChange}
            placeholder={t("signupL.usernamePlaceholder")}
            required
          />
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            placeholder={t("signupL.emailPlaceholder")}
            required
          />
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            placeholder={t("signupL.passwordPlaceholder")}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={formdata.confirmPassword}
            onChange={handleChange}
            placeholder={t("signupL.confirmPasswordPlaceholder")}
            required
          />
          <button type="submit" className="button-5">
            {t("signupL.signingUp")}
          </button>
          <p>{t("signupL.haveAccount")}</p>
          <Link to="/login">{t("signupL.loginLink")}</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;