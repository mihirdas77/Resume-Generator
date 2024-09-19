import React, { useState } from 'react';
import './Builder.css';
import About from './BuildSteps/About';
import Education from './BuildSteps/Education';
import Projects from './BuildSteps/Projects';
import Skills from './BuildSteps/Skills';
import Work from './BuildSteps/Work';

const Builder = () => {
    const [activeTab, setActiveTab] = useState('About');

    return (
        <div className="builder-container">
            <div className="tabs-container">
                <div
                    className={`tab ${activeTab === 'About' ? 'active' : ''}`}
                    onClick={() => setActiveTab('About')}
                >
                    About
                </div>
                <div
                    className={`tab ${activeTab === 'Education' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Education')}
                >
                    Education
                </div>
                <div
                    className={`tab ${activeTab === 'Skills' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Skills')}
                >
                    Skills
                </div>
                <div
                    className={`tab ${activeTab === 'Work' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Work')}
                >
                    Work
                </div>
                <div
                    className={`tab ${activeTab === 'Projects' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Projects')}
                >
                    Projects
                </div>
            </div>
            <div className="tab-panels">
                {activeTab === 'About' && <div className="tab-panel"><About /></div>}
                {activeTab === 'Education' && <div className="tab-panel"><Education /></div>}
                {activeTab === 'Skills' && <div className="tab-panel"><Skills /></div>}
                {activeTab === 'Work' && <div className="tab-panel"><Work /></div>}
                {activeTab === 'Projects' && <div className="tab-panel"><Projects /></div>}
            </div>
        </div>
    );
};

export default Builder;
