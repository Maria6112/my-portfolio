import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <p>© {new Date().getFullYear()} Maria Fomin. Built with ❤️ and React.</p>
    </div>
    <div className="footer-right">
      <div></div>
      <p>Follow me:</p>
      <div className="icon-buttons">
        <a
          href="https://www.linkedin.com/in/maria-fomin-09b0b9265/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/Maria6112" target="_blank" rel="noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
