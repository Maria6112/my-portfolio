import React, { useState } from "react";
import { Link } from "react-scroll"; // Импортируем Link для скролла
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="logo-minimal"
          style={{ cursor: "pointer" }}
        >
          Maria Fomin
        </Link>
      </div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {/* smooth={true} включает плавность, duration={500} - скорость в мс */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
          onClick={() => setMenuOpen(false)}
        >
          About Me
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>

      <div className="navbar-burger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
