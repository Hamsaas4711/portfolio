import './Projects.css';
import { FaLaptopCode, FaDatabase } from 'react-icons/fa';

function Projects() {
  return (
    <section className="projects-section fade-in">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">Here are some of the projects I’ve worked on recently.</p>
      </div>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-icon"><FaLaptopCode /></div>
          <h3 className="project-name">Portfolio Website</h3>
          <p className="project-description">
            A responsive portfolio to showcase my work, skills, and background in a professional layout.
          </p>
          <p className="project-tech">
    Built with  HTML, CSS, JavaScript
  </p>
        </div>
        <div className="project-card">
          <div className="project-icon"><FaDatabase /></div>
            <h3 className="project-name">College Database Website</h3>
            <p className="project-description">
              A web-based platform where students can view their academic information and staff can add or delete student data. Built for efficient data management in a college environment.
            </p>
            <p className="project-tech">
              Built with MySQL, HTML, CSS, JavaScript, Python
            </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
