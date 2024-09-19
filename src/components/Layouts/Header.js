import React from 'react';
import './Header.css';
import newHero from '../../images/hero.jpg'; // Replace with a new image

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-content">
                {/* Left Section: Image */}
                <div className="header-image">
                    <img src={newHero} alt="Resume Building" draggable="false" />
                </div>

                {/* Right Section: Text Content */}
                <div className="header-text">
                    <h1 className="header-title">Build a Professional Resume Effortlessly</h1>
                    <p className="header-subtext">
                        With Resumegen, crafting a tailored, standout resume is simple. Start today and land the job you've always wanted!
                    </p>
                    <div className="header-buttons">
                        <a href="#builder" className="btn primary-btn">Create My Resume</a>
                        <a href="#features" className="btn secondary-btn">Explore Features</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
