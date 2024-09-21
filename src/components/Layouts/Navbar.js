import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <h3 className="navbar-title">Resume.io</h3>
                <nav className="navbar-nav">
                    <a href="#" className="navbar-link">Home</a>
                    <a href="#" className="navbar-link">Templates</a>
                    <a href="#" className="navbar-link">About</a>
                    <a href='mailto:mihirdas7707@gmail.com' aria-label="Email"><button  className="contact-button">Contact</button></a>
                </nav>                
            </div>
        </header>
    );
};

export default Navbar;
