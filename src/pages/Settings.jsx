import React, { useEffect, useState } from "react";
import "../styles/Settings.scss";

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Load theme from localStorage
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="settings-page">
      <h2 className="settings-page__title">Theme Settings</h2>
      <div className="settings-page__cards">
        <div
          className={`settings-card ${theme === "dark" ? "-active" : ""}`}
          onClick={() => setTheme("dark")}>
          <h3 className="settings-card__title">Dark Mode</h3>
          <p className="settings-card__description">Switch to dark mode.</p>
        </div>
        <div
          className={`settings-card ${theme === "light" ? "-active" : ""}`}
          onClick={() => setTheme("light")}>
          <h3 className="settings-card__title">Light Mode</h3>
          <p className="settings-card__description">Switch to light mode.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
