import './Home.css';
import MarqueeCards from './MarqueeCards.jsx';

function Home() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>
            Hello, I am <span className="highlight">A H Hamsaas Mahmood</span>
          </h1>
          <p className="sub-text">
            Web Developer | Video Editor | Graphic Designer | Novel Author
          </p>
          <div className="hero-buttons">
            <a href="/projects" className="btn">View Projects</a>
            {/* <a href="/resume.pdf" className="btn outline" download>Download Resume</a> */}
          </div>

          <div className="interests-section">
            <h2>Interests Shown</h2>
            <p>These are the things that piqued my interest and that I am working to improve.</p>
            <MarqueeCards />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
