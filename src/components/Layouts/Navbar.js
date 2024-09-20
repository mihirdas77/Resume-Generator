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
                    <button className="contact-button">Contact</button>
                </nav>                
            </div>
        </header>
    );
};

export default Navbar;
