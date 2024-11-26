import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../supabase";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };
    checkAuthStatus();
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (email === "admin@example.com" && password === "Admin1234") {
        navigate("/admin");
      } else {
        navigate("/");
      }
      if (error) {
        setErrorMessage(
          "Login failed. Please make sure you enter the email and password correctly."
        );
        return;
      }

      if (user) {
        localStorage.setItem("username", user.email);
        toast.success("You signed in successfully!");
      }
    } catch (error) {
      console.error("Xəta:", error.message);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      localStorage.removeItem("username");
      toast.success("You have been logged out successfully!");
      setIsLoggedIn(false);
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout error:", error.message);
      toast.error("An error occurred during logout.");
    }
  };

  return (
    <div className="login-section">
      <div className="login-bg"></div>
      <div className="inputs-login">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="valid"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="valid"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleLogin} className="button-5" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <span>Dont have an account?</span>
        <Link to="/signup">Sign Up</Link>

        {isLoggedIn && (
          <button onClick={handleLogout} className="button-5 logout-button">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
