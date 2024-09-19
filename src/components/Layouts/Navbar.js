import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <nav className="navbar-nav">
                <button className="contact-button">Contact</button>
                    <a href="#" className="navbar-link">Home</a>
                    <a href="#" className="navbar-link">Templates</a>
                    <a href="#" className="navbar-link">About</a>
                </nav>                
                <h3 className="navbar-title">Resume.io</h3>
            </div>
        </header>
    );
};

export default Navbar;
