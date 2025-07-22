import React, { useState, useEffect } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const title = "MARIA FOMIN";
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    const handleThemeChange = () => {
      const updateTheme = localStorage.getItem("theme") || "dark";
      setTheme(updateTheme);
    };
    window.addEventListener("themeChanged", handleThemeChange);
    return () => {
      window.removeEventListener("themeChanged", handleThemeChange);
    };
  }, []);

  return (
    <div className={`about-container ${theme}`}>
      <div className="about-left">
        <h1 className="animated-title-about">
          {title.split("").map((letter, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
        <h2 className="subtitle">Frontend Developer</h2>
        <p className="description">
          Hi! I'm Maria, a passionate frontend developer with a strong focus on
          frontend development using React. I enjoy building responsive,
          user-friendly web applications and turning complex ideas into
          interactive digital experiences.
        </p>
        <p className="description">
          I love learning, solving problems, and creating clean, maintainable
          code. I'm currently open to new opportunities where I can grow as a
          developer and contribute to meaningful projects.
        </p>

        <div className="skills">
          <h3>Tech Stack:</h3>
          <ul>
            <li>🌍 HTML5</li>
            <li>🎨 CSS</li>
            <li>🟨 JavaScript (ES6+)</li>
            <li>⚛️ React</li>
            <li>📦 GitHub</li>
            <li>🧠 REST APIs / JSON</li>
          </ul>
        </div>

        <a
          href="/MariaFominResume.pdf"
          className="download-resume-button hire hire-about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Download CV</span>
          <img src="./images/download.png" alt="download" />
        </a>
      </div>

      <div className="about-right">
        {/* <img src="../images/about-light.jpg" alt="Maria Fomin" /> */}
        <img
          src={
            theme === "light"
              ? "../images/about-light.png"
              : "../images/about-dark.png"
          }
          alt="Maria Fomin"
        />
      </div>
    </div>
  );
};

export default AboutMe;
