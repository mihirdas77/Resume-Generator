import React from 'react';
import Builder from './Builder';
import ResumePreview from './ResumePreview';
import ThemeSelect from './Theme/ThemeSelect';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../Context';
import { MdOutlineFileDownload } from 'react-icons/md';
import './Main.css'; // Import the CSS file

const Main = () => {
    const { printElem } = useResume();

    const handlePrint = useReactToPrint({
        content: () => printElem.current,
    });

    return (
        <div className="main-container">
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
