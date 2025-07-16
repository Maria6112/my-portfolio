import React from "react";
import ProjectCard from "./ProjectCard";
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
    description: "Apartments rent website. Booking and calendar support.",
    tech: ["React", "MongoDB", "Node.js", "Express"],
  },
  {
    image: "/images/marvel-example.png",
    title: "Marvel Info Portal",
    link: "https://marvel-react-app.onrender.com/",
    github: "https://github.com/Maria6112/marvel-react-app",
    description:
      "Search and explore Marvel characters via API. Pagination, lazy loading, and clean design.",
    tech: ["React", "Marvel API", "Hooks"],
  },
  {
    image: "/images/flixx-example.png",
    title: "FLIXX - Movies & TV Shows",
    link: "https://lucky-pudding-66d0a7.netlify.app/",
    github: "https://github.com/Maria6112/flix-app",
    description: ".",
    tech: ["JavaScript"],
  },
  {
    image: "/images/tracalorie-example.png",
    title: "Tracalory",
    link: "https://starlit-clafoutis-541894.netlify.app/",
    github: "https://github.com/Maria6112/tracalorie-app",
    description:
      "Currency-based calculator with manual override and API fallback.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    image: "/images/food-project-example.png",
    title: "Food-project",
    link: "https://inquisitive-croquembouche-264ea5.netlify.app",
    github: "https://github.com/Maria6112/food_project",
    description:
      "Currency-based calculator with manual override and API fallback.",
    tech: ["JavaScript", "HTML", "CSS", "Fetch API"],
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
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // < 1024px
      settings: {
        slidesToShow: 2,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 768, // < 768px
      settings: {
        slidesToShow: 1,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 480, // < 480px (мобильный)
      settings: {
        slidesToShow: 1,
        centerPadding: "20px",
      },
    },
  ],
};

const Projects = () => {
  return (
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
      <div className=" projects-carousel-container">
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
