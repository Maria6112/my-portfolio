import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page-wrapper">
      <section className="about-section-new">
        <div className="about-content-grid">
          {/* Левая колонка с текстом */}
          <div className="about-text-content">
            <h2 className="about-main-title">Introduction</h2>
            <div className="about-title-line"></div>

            <p className="about-lead-text">
              Hi! I'm Maria, a passionate frontend developer with a strong focus
              on React. I turn complex ideas into elegant, interactive digital
              experiences.
            </p>

            <div className="about-details-grid">
              <div className="detail-item">
                <h3>About Me</h3>
                <p>
                  I love solving problems and creating clean, maintainable code.
                  Always learning and exploring new technologies to build better
                  products.
                </p>
              </div>
              <div className="detail-item">
                <h3>Tech Stack</h3>
                <div className="tech-stack-grid">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML5</span>
                  <span>CSS3 / SCSS</span>
                  <span>REST APIs</span>
                  <span>Git & GitHub</span>
                </div>
              </div>
            </div>

            <a href="/MariaFomin-CV.pdf" download className="minimal-cv-link">
              Download CV <span>→</span>
            </a>
          </div>

          {/* Правая колонка с абстрактным фото */}
          <div className="about-image-side">
            <div className="abstract-image-container">
              <img src="/images/computer5.jpg" alt="Development Workspace" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

// import React, { useState, useEffect } from "react";
// import "./About.css";

// const About = () => {
//   const title = "MARIA FOMIN";
//   const [theme, setTheme] = useState("");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "dark";
//     setTheme(savedTheme);

//     const handleThemeChange = () => {
//       const updateTheme = localStorage.getItem("theme") || "dark";
//       setTheme(updateTheme);
//     };
//     window.addEventListener("themeChanged", handleThemeChange);
//     return () => {
//       window.removeEventListener("themeChanged", handleThemeChange);
//     };
//   }, []);

//   return (
//     <div className={`about-container ${theme}`}>
//       <div className="about-left">
//         <h1 className="animated-title-about">
//           {title.split("").map((letter, i) => (
//             <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
//               {letter === " " ? "\u00A0" : letter}
//             </span>
//           ))}
//         </h1>
//         <h2 className="subtitle">Frontend Developer</h2>
//         <p className="description">
//           Hi! I'm Maria, a passionate frontend developer with a strong focus on
//           frontend development using React. I enjoy building responsive,
//           user-friendly web applications and turning complex ideas into
//           interactive digital experiences.
//         </p>
//         <p className="description">
//           I love learning, solving problems, and creating clean, maintainable
//           code. I'm currently open to new opportunities where I can grow as a
//           developer and contribute to meaningful projects.
//         </p>

//         <div className="skills">
//           <h3>Tech Stack:</h3>
//           <ul>
//             <li>🌍 HTML5</li>
//             <li>🎨 CSS</li>
//             <li>🟨 JavaScript (ES6+)</li>
//             <li>⚛️ React</li>
//             <li>📦 GitHub</li>
//             <li>🧠 REST APIs / JSON</li>
//           </ul>
//         </div>

//         <a
//           href="/MariaFominCVResume.pdf"
//           className="download-resume-button hire hire-about"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <span>Download CV</span>
//           <img src="./images/download.png" alt="download" />
//         </a>
//       </div>

//       <div className="about-right">
//         {/* <img src="../images/mariaphoto.png" alt="Maria" /> */}
//         <img
//           src={
//             theme === "light"
//               ? "../images/about-light.png"
//               : "../images/about-dark.png"
//           }
//           alt="Maria Fomin"
//         />
//       </div>
//     </div>
//   );
// };

// export default About;
