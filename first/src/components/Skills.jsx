import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, } from 'react-icons/fa';
import { SiMysql, SiAdobephotoshop, SiCanva, SiDavinciresolve } from 'react-icons/si';

const skills = [
  { name: "HTML", icon: <FaHtml5 />, description: "Frontend Markup Language" },
  { name: "CSS", icon: <FaCss3Alt />, description: "Styling Web Pages" },
  { name: "JavaScript", icon: <FaJs />, description: "Dynamic Interactions" },
  { name: "React", icon: <FaReact />, description: "Frontend Framework" },
  { name: "Python", icon: <FaPython />, description: "Programming & ML" },
  { name: "MySQL", icon: <SiMysql />, description: "Relational Database" },
  { name: "Photoshop", icon: <SiAdobephotoshop />, description: "Graphic Design" },
  { name: "Canva", icon: <SiCanva />, description: "Creative Design Tool" },
  { name: "DaVinci Resolve", icon: <SiDavinciresolve />, description: "Video Editing" },
];


function Skills() {
  return (
    <section className="skills-section">
      <h1 className="skills-title">🧠 Skills That Shape My Craft</h1>
<p className="skills-subtitle">
  From logical algorithms to sleek UI design — a balanced mix of technology and creativity.
</p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-description">{skill.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
