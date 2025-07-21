import './Footer.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="footer">
      {/* Logo SVG (you can replace it with your own or remove this block) */}
      <div className="footer-logo">
        <svg
          width="157"
          height="40"
          viewBox="0 0 157 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ... your SVG content here ... */}
        </svg>
      </div>

      {/* Copyright */}
      <p>© 2025 Hamsaas. All rights reserved.</p>

      {/* Social Icons */}
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
      </div>
    </footer>
  );
}

export default Footer;
