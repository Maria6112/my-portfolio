import React from "react";
import "../pages/AboutMe.css";
const DownloadResumeButton = () => {
  return (
    <a
      href="/MariaFominResume.pdf"
      download
      className="download-resume-button hire"
    >
      <span className="text-label">Download CV</span>
      <span className="cv-label">CV</span>
      <img src="./images/download.png" alt="download" />
    </a>
  );
};

export default DownloadResumeButton;
