import './Projects.css';

function Projects() {
  return (
    <section className="projects-section fade-in">
  <div className="projects-overlay">
    <h2 className="projects-heading">Projects</h2>
    <div className="project-list">
      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>
          Portfolio Website created to showcase my accomplishments and introduce myself professionally.
        </p>
      </div>
      {/* Add more project cards as needed */}
    </div>
  </div>
</section>

  );
}

export default Projects;
