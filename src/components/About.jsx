import React, { useEffect, useState } from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaInstagram, } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiCloudDownload } from "react-icons/bi";

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
        <div className="timeline-container fade-in">
          <h2 className="timeline-title">Education</h2>
          <div className="timeline">
            {/* SSLC Milestone */}
            <div className="milestone-box">
              <div className="circle filled"></div>
              <div className="content">
                <h3>SSLC</h3>
                <p>Completed in the year 2023</p>
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

        <div className="education-cert-container fade-in">
  <h2>Certifications</h2>
  <p className="cert-subtitle">A collection of my verified certifications</p>

  <ul className="cert-list">
    <li className="cert-item">
      <div className="cert-content">
        <div className="cert-header">
          <span className="cert-title">Data Science Certification</span>
          <a
            href="/data_science.pdf"
            download="DataScienceCertificate"
            className="download-btn"
          >
            <BiCloudDownload />‎ Download
          </a>
        </div>
        <p className="cert-description">
          Hands-on training in Python, machine learning, and real-world data projects.
        </p>
      </div>
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
