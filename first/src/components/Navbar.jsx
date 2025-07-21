import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'blurred' : ''}`}>
        <div className="logo">Hamsaas</div>
        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={handleToggle}>
  <span className="bar"></span>
  <span className="bar"></span>
  <span className="bar"></span>
</button>

        <div className={`links ${menuOpen ? 'open' : ''}`}>
          <a href="/home" onClick={handleToggle}>Home</a>
          <a href="/about" onClick={handleToggle}>About</a>
          <a href="/skills" onClick={handleToggle}>Skills</a>
          <a href="/projects" onClick={handleToggle}>Projects</a>
          <a href="/contact" onClick={handleToggle}>Contact</a>
        </div>
      </nav>

      {menuOpen && <div className="backdrop" onClick={handleToggle}></div>}
    </>
  );
}

export default Navbar;
