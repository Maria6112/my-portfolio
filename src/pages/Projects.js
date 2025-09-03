import React from "react";
import ProjectCard from "../components/ProjectCard";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    image: "/images/best-rent-example.png",
    title: "Best-Rent",
    link: "https://best-rent-app.onrender.com",
    github: "https://github.com/Maria6112/best-rent-app",
    description:
      "A rental management web application for apartment listings with booking calendar support. Users can browse available listings, view details, and reserve dates. The app connects to a backend (Node.js + Express + MongoDB) to store and manage rental data.",
    tech: ["React", "MongoDB", "Node.js", "Express", "CSS"],
  },
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
  {
    image: "/images/noa-portfolio-example.png",
    title: "Noa Stefanian – Wedding Films Portfolio",
    link: "https://noa-portfolio-three.vercel.app/",
    github: "https://github.com/Maria6112/noa-portfolio",
    description:
      " A modern, multilingual portfolio website for a professional wedding video editor. The app highlights Noa’s work with an elegant design, smooth animations, and a fully responsive layout.",
    tech: ["React", "CSS", "i18next", "Chatbot integration"],
  },
];
const SampleNextArrow = ({ className, style, onClick }) => (
  <div
    className={`arrow next ${className}`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const SamplePrevArrow = ({ className, style, onClick }) => (
  <div
    className={`arrow prev ${className}`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const sliderSettings = {
  className: "center slick-custom",
  centerMode: true,
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  dots: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // < 1024px
      settings: {
        slidesToShow: 2,
        centerPadding: "40px",
        dots: true,
      },
    },
    {
      breakpoint: 768, // < 768px
      settings: {
        slidesToShow: 1,
        centerPadding: "30px",
        dots: true,
      },
    },
    {
      breakpoint: 480, // < 480px (мобильный)
      settings: {
        slidesToShow: 1,
        centerPadding: "20px",
        dots: true,
      },
    },
  ],
};

const Projects = () => {
  return (
    <div className="background-projects">
      <section className="projects-section">
        {/* <h2 className="projects-title">My Projects</h2> */}
        <h2 className="animated-title">
          {"My Projects".split("").map((char, i) => (
            <span
              key={i}
              className="letter"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <div className="slider-wrapper">
          <div className=" projects-carousel-container">
            <Slider {...sliderSettings}>
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
