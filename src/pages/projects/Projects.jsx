import "./projects.css";
import recipeAppImage from "../../assets/maryam-sicard-Tz1sAv3xnt0-unsplash.jpg";
import portfolioImage from "../../assets/portfolio-1.jpeg";
import ecommerceImage from "../../assets/commerce.jpeg";
import elevateCV from "../../assets/resume-genius-9si2noVCVH8-unsplash.jpg";

const projects = [
  {
    title: "Recipe App",
    description:
      "An interactive, responsive recipe website with beautiful animations.",
    link: "https://app.netlify.com/sites/incandescent-donut-c53ff9/",
    image: recipeAppImage,
  },
  {
    title: "Portfolio Website",
    description:
      "A bold and unique personal portfolio with interactive features and animations.",
    link: "#",
    image: portfolioImage,
  },
  {
    title: "ElevateCV",
    description:
      "A website that enables you get job ready with great CVs and Cover letters.",
    link: "#",
    image: elevateCV,
  },
  {
    title: "E-commerce Store",
    description:
      "An online store with seamless checkout and real-time product updates.",
    link: "#",
    image: ecommerceImage,
  },
];
const Projects = () => {
  return (
    <>
      <section id="projects" className="projects-section">
        <h2 className="reveal h2-projects">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card reveal flex">
              {/* Add the project image */}
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link-button">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
