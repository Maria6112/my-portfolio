import React from "react";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Левая часть с фото */}
      <div className="home-image-section">
        <img
          src="/images/mariaphoto.png"
          alt="Maria Fomin"
          className="hero-img"
        />
      </div>

      {/* Правая часть с текстом */}
      <div className="home-text-section">
        <div className="content-wrapper">
          <div className="title-area">
            <h1 className="hero-title">
              My
              <br />
              <span>Portfolio</span>
            </h1>
            <div className="horizontal-line"></div>
          </div>

          <p className="hero-description">
            Frontend Developer dedicated to building functional and
            high-performance web products. I prioritize clean architecture and
            seamless user experiences, ensuring that every project is
            technically sound and reliable.
          </p>

          <Link
            to="projects"
            smooth={true}
            duration={800}
            className="explore-btn"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
