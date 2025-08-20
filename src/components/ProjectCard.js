import React from "react";
import "./../pages/Projects.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-frame">
        <div className="frame-buttons">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
        <img src={project.image} alt={project.title} />
        {/* <iframe
          src={project.link}
          title={project.title}
          className="project-preview"
          frameBorder="0"
          loading="lazy"
          scrolling="no"
        ></iframe> */}
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech, i) => {
          return <span key={i}>{tech}</span>;
        })}
      </div>
      <div className="icon-buttons">
        <div className="visit-label">
          <p>Visit:</p>
        </div>
        <div className="icon-links">
          <a href={project.link} target="_blank" rel="noreferrer">
            <img src="/images/globe-white.png" alt="Website" className="icon" />
          </a>

          <a href={project.github} target="_blank" rel="noreferrer">
            <img src="/images/github-white.png" alt="GitHub" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
