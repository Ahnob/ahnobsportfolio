import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./hero.css";

const Hero = () => {
  return (
    <header className="hero-section">
      <div className="hero-content reveal">
        <h1 className="hero-h1">Hi, I'm a Creative Developer</h1>
        <p className="hero-paragraph">
          I'm a developer passionate about creating beautiful, functional web
          apps with great user experiences.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
