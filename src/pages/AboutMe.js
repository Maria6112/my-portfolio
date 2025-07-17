import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const title = "MARIA FOMIN";

  return (
    <div className="about-container">
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
          A passionate frontend developer with strong attention to detail. I
          love crafting elegant and user-friendly interfaces using React, modern
          styling tools, and animations. Always eager to learn and grow.
        </p>
      </div>

      <div className="about-right">
        <img src="../images/about-dark.png" alt="Maria Fomin" />
      </div>
    </div>
  );
};

export default AboutMe;
