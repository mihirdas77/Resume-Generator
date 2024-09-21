import React from 'react';
import './Footer.css';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-text">
                    <span>&copy; Resume.io , 2024</span> | Designed and Built with 💻 & ☕ by
                    <a href="https://www.linkedin.com/in/mihir-das/" target="_blank" rel="noopener noreferrer" className="footer-link">
                    Mihir Das
                    </a>
                </div>
                <div className="footer-icons">
                    <a href="https://github.com/mihirdas77" target="_blank" rel="noopener noreferrer" className="icon github">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mihir-das/" target="_blank" rel="noopener noreferrer" className="icon linkedin">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="icon twitter">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
