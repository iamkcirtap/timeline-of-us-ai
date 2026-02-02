// This file contains the Slideshow component for the Our Love Timeline project.
// It manages the slideshow functionality, including slide transitions and navigation.

import React, { useState } from 'react';
import './slideshow.css'; // Assuming there's a corresponding CSS file for styling

const Slideshow = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slideshow-container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                    {slide.content}
                </div>
            ))}
            <button className="nav-arrow prev" onClick={prevSlide}>‹</button>
            <button className="nav-arrow next" onClick={nextSlide}>›</button>
            <div className="timeline-slider">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`timeline-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    >
                        <span>{`Slide ${index + 1}`}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;