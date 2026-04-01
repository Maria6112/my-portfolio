import React from "react";
import ProjectCard from "../components/ProjectCard";

import "./Projects.css";

const projects = [
  {
    image: "/images/arik-medical-example.png",
    title: "Arik Medical",
    link: "https://arik-medical.com",
    github: "https://github.com/Maria6112/arik-medical",
    description:
      "Medical website for Russian-speaking patients in Israel. SEO, forms, analytics, and responsive design.",
    tech: ["React", "EmailJS", "Vercel", "Analytics", "CSS"],
  },
  {
    image: "/images/noa-portfolio-example.png",
    title: "LIBA Films – Wedding Films",
    link: "https://noa-portfolio-three.vercel.app/",
    github: "https://github.com/Maria6112/noa-portfolio",
    description:
      " A modern, multilingual portfolio website for a professional wedding video editor. The app highlights Noa’s work with an elegant design, smooth animations, and a fully responsive layout.",
    tech: ["React", "CSS", "i18next", "Chatbot integration"],
  },
  {
    image: "/images/shopper-example.png",
    title: "SHOPPER",
    link: "https://e-commerce-3-a6ps.onrender.com",
    github: "https://github.com/Maria6112/e-commerce",
    description:
      "E-Commerce Store — Full-stack online clothing shop. Interactive Catalog: Dynamic product filtering, sorting (price, newest), responsive grid layout with centered items Shopping Cart: Real-time updates, size selection, add/remove items synced with backend User Authentication: Registration, login, JWT tokens. Admin Panel: Add/remove products, MongoDB CRUD operations.",
    tech: ["React", "CSS", "MongoDB Atlas", "Node.js"],
  },
  // {
  //   image: "/images/best-rent-example.png",
  //   title: "Best-Rent",
  //   link: "https://best-rent-app.onrender.com",
  //   github: "https://github.com/Maria6112/best-rent-app",
  //   description:
  //     "A rental management web application for apartment listings with booking calendar support. Users can browse available listings, view details, and reserve dates. The app connects to a backend (Node.js + Express + MongoDB) to store and manage rental data.",
  //   tech: ["React", "MongoDB", "Node.js", "Express", "CSS"],
  // },
  {
    image: "/images/marvel-example.png",
    title: "Marvel Info Portal",
    link: "https://marvel-react-app.onrender.com/",
    github: "https://github.com/Maria6112/marvel-react-app",
    description:
      "A dynamic Marvel character explorer allowing users to search, filter, and view details of comic book heroes via the Marvel API. Implements lazy loading for performance and pagination for large datasets. Provides a smooth user experience with interactive search capabilities.",
    tech: ["React", "Marvel API", "CSS"],
  },
  {
    image: "/images/flixx-example.png",
    title: "FLIXX - Movies & TV Shows",
    link: "https://lucky-pudding-66d0a7.netlify.app/",
    github: "https://github.com/Maria6112/flix-app",
    description:
      "A front-end application showcasing movies and TV shows dynamically using a public movie API (e.g., TMDB). Offers browsing by genre, viewing summaries and ratings. Includes stateful navigation and clean UI for enhanced user experience.",
    tech: ["JavaScript", "Fetch API", "CSS", "Netlify"],
  },
  {
    image: "/images/tracalorie-example.png",
    title: "Tracalory",
    link: "https://starlit-clafoutis-541894.netlify.app/",
    github: "https://github.com/Maria6112/tracalorie-app",
    description:
      "A simple yet functional calorie or currency calculator application. Provides real-time input with manual override and automatic updates. Great starter project with neat UI and core logic.",
    tech: ["JavaScript", "API fetch", "HTML", "CSS"],
  },
  {
    image: "/images/food-project-example.png",
    title: "Food-project",
    link: "https://inquisitive-croquembouche-264ea5.netlify.app",
    github: "https://github.com/Maria6112/food_project",
    description:
      "A web application powered by the Fetch API that showcases recipes, meal ideas, or food categories. Users can search or browse dishes with pictures and details. Demonstrates integration of external data and dynamic rendering.",
    tech: ["JavaScript", "HTML", "CSS", "Fetch API"],
  },
];

const Projects = () => {
  return (
    <div className="background-projects">
      <section className="projects-section">
        {/* Добавляем обертку для центрирования */}
        <div className="projects-header">
          <h2 className="projects-title">Selected Works</h2>
          <div className="header-line"></div>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Projects;
