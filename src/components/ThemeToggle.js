import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const newTheme = dark ? "dark" : "light";
    document.documentElement.classList.add(newTheme);
    document.documentElement.classList.remove(dark ? "light" : "dark");
    localStorage.setItem("theme", newTheme);

    window.dispatchEvent(new Event("themeChanged"));
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="theme-toggle-btn"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
    </button>
  );
};

export default ThemeToggle;
