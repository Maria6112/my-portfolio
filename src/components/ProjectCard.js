import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card-new"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="project-image-wrapper">
        <a href={project.link} target="_blank" rel="noreferrer">
          <img src={project.image} alt={project.title} />
        </a>
      </div>

      <div className="project-info-bottom">
        <h3 className="project-main-name">{project.title}</h3>
        <p className="project-desc-simple">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, i) => {
            return <span key={i}>{tech}</span>;
          })}
        </div>{" "}
        <div className="project-links-minimal center">
          <a href={project.link} className="link-btn">
            Live View →
          </a>
          <a href={project.github} className="link-btn">
            GitHub ↗
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
