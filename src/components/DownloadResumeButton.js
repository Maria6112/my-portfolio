import React from "react";

const DownloadResumeButton = () => {
  return (
    <a href="/MariaFominResume.pdf" download className="hire">
      Download CV
      <img src="./images/download.png" alt="download" />
    </a>
  );
};

export default DownloadResumeButton;
