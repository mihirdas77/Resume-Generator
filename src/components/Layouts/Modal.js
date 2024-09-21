import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, formData, handleChange }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
        setSuccess(true);
        setIsLoading(false);
        setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h4 className='section__title'><b>Suggest a Feature</b></h4><br></br>
                <div className='contact-form'>
                    <form onSubmit={handleFormSubmit}>
                        <div className="input-group">
                            <input
                                type='text'
                                name='name'
                                placeholder='Your Name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type='email'
                                name='email'
                                placeholder='Your Email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <textarea
                            name='message'
                            placeholder='Feature Description'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <div className="button-group">
                            <button type='submit' id='submit-button' className='butn butn-submit'>
                                {isLoading ? <span className="loader"></span> : 'Submit'}
                            </button>
                            <button onClick={onClose} id='close-button' className="butn butn-close">
                                Close
                            </button>
                        </div>
                    </form>
                    {success && <div className="success-message">Feature suggested successfully!</div>}
                </div>
            </div>
        </div>
    );
};

export default Modal;
