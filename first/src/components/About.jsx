import React, { useEffect, useState } from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Delay to ensure DOM is ready before adding the class
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`about-container ${fadeIn ? 'fade-in' : ''}`}>
      <div className="about-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIYPQpAHWfspO8qrIdSO7Pkx-JpkIU03WVA&s"
          alt="Profile Avatar"
          className="avatar"
        />
        <h1>A H Hamsaas Mahmood</h1>
        <p className="role">Software Developer</p>
        <p className="bio">
          Passionate about coding and creating websites, with a keen interest in graphic design and editing photos and videos and an aspiring novel author.
        </p>
        <div className="socials">
          <a href="mailto:hamsaas471@gmail.com" title="hamsaas471@gmail.com" target="_blank" rel="noreferrer">
            <MdEmail />
          </a>
          <a href="https://www.instagram.com/hamsaaas_17?igsh=MWVyd3g5b3BnNjQ3Mg==" title="@hamsaaas_17" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/Hamsaas4711" title="Hamsaas4711" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" title="LinkedIn" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
