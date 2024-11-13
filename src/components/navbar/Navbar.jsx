import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* Logo section, click to go home */}
      <Link className="logo nav-link" to="/" onClick={() => setIsOpen(false)}>
        Tirzah
      </Link>

      {/* Mobile menu icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div id="top-bar" className={isOpen ? "bar open" : "bar"}></div>
        <div id="middle-bar" className={isOpen ? "bar open" : "bar"}></div>
        <div id="bottom-bar" className={isOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link
            className="nav-link"
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to="/projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to="/funtimes"
            onClick={() => setIsOpen(false)}
          >
            Fun Times
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
