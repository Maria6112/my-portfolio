import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import DownloadResumeButton from "./DownloadResumeButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState();

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-left">
          <NavLink to="/" className="logo">
            {"{ maria-fomin }"}
          </NavLink>
        </div>

        <button
          className="burger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
        </button>

        <div className={`navbar-center ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="navbar-right">
          {/* <button className="hire">Hire Me ➤</button> */}
          <DownloadResumeButton />
        </div>
        <div className="">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
