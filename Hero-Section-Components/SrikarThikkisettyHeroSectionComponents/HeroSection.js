import React from 'react';
import './HeroSection.css'; 
const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Welcome to GrapplTech</h1>
                <p>Your journey towards innovation starts here.</p>
                <button className="cta-button">Get Started</button>
            </div>
        </div>
    );
};

export default HeroSection;