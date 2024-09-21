import React, { useState } from 'react';
import './Header.css';
import newHero from '../../images/hero.gif'; // Replace with a new image
import Modal from './Modal';// Import the Modal component

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        handleCloseModal(); // Close modal after submission
    };

    return (
        <div className="header-container">
            <Modal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            />
            <div className="header-content">
                {/* Left Section: Image */}
                <div className="header-image">
                    <img src={newHero} alt="Resume Building" draggable="false" />
                </div>

                {/* Right Section: Text Content */}
                <div className="header-text">
                    <h1 className="header-title">Build a Professional Resume Effortlessly</h1>
                    <p className="header-subtext">
                    At Resume.io, we make creating a professional, tailored resume effortless. Choose from modern templates, customize your design, and showcase your skills with ease. Start today and get one step closer to your dream job!
                    </p>
                    <div className="header-buttons">
                        <a href="/main" className="btn primary-btn">Create My Resume</a>
                        <button onClick={handleOpenModal} className="btn secondary-btn">Suggest a feature</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
