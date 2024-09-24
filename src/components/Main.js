import React, { useEffect, useState } from 'react';
import Builder from './Builder';
import ResumePreview from './ResumePreview';
import ThemeSelect from './Theme/ThemeSelect';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../Context';
import { MdOutlineFileDownload } from 'react-icons/md';
import './Main.css'; // Import the CSS file

const Main = () => {
    const { printElem } = useResume();
    const [showPopup, setShowPopup] = useState(true); // State for popup visibility

    const handlePrint = useReactToPrint({
        content: () => printElem.current,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false); // Hide the popup after 5 seconds
        }, 5000);
        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <div className="main-container">
            {showPopup && (
                <div className="popup">
                    Adding more templates is in progress!🚀
                </div>
            )}
            <header className="header">
                <h2 className="heading">Resume Builder Dashboard</h2>
                <div className="controls-container">
                    <ThemeSelect />
                    <button className="download-button" onClick={handlePrint}>
                        <MdOutlineFileDownload className="icon" />
                        Download Resume
                    </button>
                </div>
            </header>

            <main className="content-container">
                <Builder />
                <ResumePreview />
            </main>
        </div>
    );
};

export default Main;
