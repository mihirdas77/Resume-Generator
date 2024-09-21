import React from 'react';
import './MobileNav.css';

const MobileNav = ({ showNavList, handleLinkClick }) => {
    return (
        <div className={`mobile-nav ${showNavList ? 'active' : ''}`}>
            <a href="/" className="navbar-link" onClick={handleLinkClick}>Home</a>
            <a href="/main" className="navbar-link" onClick={handleLinkClick}>Templates</a>
            <a href="/" className="navbar-link" onClick={handleLinkClick}>About</a>
            <a href='mailto:mihirdas7707@gmail.com' aria-label="Email">
                <button className="contact-button" onClick={handleLinkClick}>Contact</button>
            </a>
        </div>
    );
};

export default MobileNav;
