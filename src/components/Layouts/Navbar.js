import React, { useState, useEffect } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav';

const Navbar = () => {
    const [showNavList, setShowNavList] = useState(false);

    const toggleNavList = () => {
        setShowNavList(prevState => !prevState);
    };

    const handleLinkClick = () => {
        setShowNavList(false);
    };

    const handleResize = () => {
        if (window.innerWidth > 669) {
            setShowNavList(false); // Close the mobile nav on larger screens
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-title">Resume.io</a>
                <button
                    type="button"
                    onClick={toggleNavList}
                    className="nav__hamburger"
                    aria-label="toggle navigation"
                >
                    {showNavList ? 'X' : '☰'}
                </button>
                {/* Normal navigation for larger screens */}
                <nav className="navbar-nav">
                    <a href="/" className="navbar-link" onClick={handleLinkClick}>Home</a>
                    <a href="/main" className="navbar-link" onClick={handleLinkClick}>Templates</a>
                    <a href="/about" className="navbar-link" onClick={handleLinkClick}>About</a>
                    <a href='mailto:mihirdas7707@gmail.com' aria-label="Email">
                        <button className="contact-button" onClick={handleLinkClick}>Contact</button>
                    </a>
                </nav>
                {/* Mobile navigation for smaller screens */}
                <MobileNav showNavList={showNavList} handleLinkClick={handleLinkClick} />
            </div>
        </header>
    );
};

export default Navbar;
