// src/context/ThemeContext.js
import { createContext, useState, useEffect } from "react";

export const GlobalThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode); // Tema dəyişir
  };
  return (
    <GlobalThemeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </GlobalThemeContext.Provider>
  );
};
