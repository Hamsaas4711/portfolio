import React, { useEffect, useState } from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`about-container ${fadeIn ? 'fade-in' : ''}`}>
      <div className="about-sections">
        {/* Profile Card */}
        <div className="about-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIYPQpAHWfspO8qrIdSO7Pkx-JpkIU03WVA&s"
            alt="Profile Avatar"
            className="avatar"
          />
          <h1>A H Hamsaas Mahmood</h1>
          <p className="role">Software Developer</p>
          <p className="bio">
            Passionate about coding and creating websites, with a keen interest in graphic design, editing photos/videos, and aspiring to be a novel author.
          </p>
          <div className="socials">
            <a href="mailto:hamsaas471@gmail.com" title="hamsaas471@gmail.com" target="_blank" rel="noreferrer"><MdEmail /></a>
            <a href="https://www.instagram.com/hamsaaas_17?igsh=MWVyd3g5b3BnNjQ3Mg==" title="@hamsaaas_17" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://github.com/Hamsaas4711" title="Hamsaas4711" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" title="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        
        <div className="about-sections-row">
        {/* Education Timeline */}
        <div className="timeline-container">
          <h2 className="timeline-title">Education</h2>
          <div className="timeline">
            {/* SSLC Milestone */}
            <div className="milestone-box">
              <div className="circle filled"></div>
              <div className="content">
                <h3>SSLC</h3>
                <p>Completed with distinction</p>
              </div>
            </div>
            {/* Diploma Milestone */}
            <div className="milestone-box">
              <div className="circle empty"></div>
              <div className="content">
                <h3>Diploma in Computer Science and Engineering</h3>
                <p>Currently pursuing – 3rd year</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="education-cert-container">
          <h2>Certificates</h2>
          <ul className="cert-list">
            <li>
              <span>Data Science Certification</span>
              <a
                href="/data_science.pdf"
                download="DataScienceCertificate"
                className="download-btn"
              >
                <FaDownload />‎ Download
              </a>
            </li>
            {/* Add more certificates here */}
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
