import React from 'react';
import './About.css'; // Ensure you have the updated styles

const About = () => {
    return (
        <section className="about-container">
            <div className="about-header">
                <h1>About Us</h1>
                <p className="about-subtitle">Crafting Professional Resumes for Your Future</p>
            </div>
            <div className="about-content">
                {/* Personal Section */}
                <div className="about-personal">
                    <h2 className="section-heading">Our Story</h2>
                    <p className="section-paragraph">
                        Welcome to Resume.io, your one-stop solution for building modern, professional resumes!
                        We understand the importance of creating a first impression with your resume and are here
                        to make the process as easy as possible for you.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="about-mission">
                    <h2 className="section-heading">Our Mission</h2>
                    <p className="section-paragraph">
                        Our mission is to provide everyone with access to high-quality resume templates and tools
                        that make job applications more successful. Whether you're a fresh graduate or a seasoned professional,
                        our goal is to help you create resumes that stand out and increase your chances of landing your dream job.
                    </p>
                </div>

                {/* Services Section */}
                <div className="about-services">
                    <h2 className="section-heading">What We Offer</h2>
                    <ul className="services-list">
                        <li>Modern, customizable resume templates</li>
                        <li>User-friendly tools for creating resumes in minutes</li>
                        <li>Expert tips on improving your resume and getting noticed</li>
                        <li>Options to download, print, or share your resume easily</li>
                    </ul>
                </div>

                {/* Team Section */}
                <div className="about-team">
                    <h2 className="section-heading">About Me</h2>
                    <div className="team-member">
                        <img src="https://i.postimg.cc/5fkkPW6V/Mihir.jpg" alt="Mihir Das" className="team-photo" />
                        <h3 className="team-member-name">Mihir Das</h3>
                        <p className="team-member-role">Full Stack Developer & Creator</p>
                        <p className="team-member-bio">
                            I am a passionate Full Stack Web Developer with experience in building responsive and dynamic web applications.
                            With a background in Information Technology and skills in React, Node.js, Express, and MongoDB, I strive to create
                            impactful projects that solve real-world problems.
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="about-contact">
                    <h2 className="section-heading">Get in Touch</h2>
                    <p className="section-paragraph">
                        If you have any questions, suggestions, or would like to collaborate with us,
                        feel free to contact us at <a href="mailto:mihirdas7707@gmail.com">mihirdas7707@gmail.com</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
