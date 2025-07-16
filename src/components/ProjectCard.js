import React from "react";
import "./Projects.css";

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
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech, i) => {
          return <span key={i}>{tech}</span>;
        })}
      </div>
      <div className="icon-buttons">
        <a href={project.link} target="_blank" rel="noreferrer">
          <img src="/images/globe-white.png" alt="Website" className="icon" />
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          <img src="/images/github-white.png" alt="GitHub" className="icon" />
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
