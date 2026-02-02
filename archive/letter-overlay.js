import React, { useState } from 'react';
import './letter-overlay.css'; // Assuming you have a CSS file for styling the letter overlay

const LetterOverlay = ({ isOpen, onClose }) => {
    return (
        <div className={`letter-overlay ${isOpen ? 'active' : ''}`}>
            <div className="letter-paper">
                <button className="close-letter-x" onClick={onClose}>✕</button>
                <h2>To My Dearest Aileen 💕</h2>
                <p className="letter-date">Valentine's Day 2026</p>
                <div className="letter-content">
                    <p>My Babe,</p>
                    <p>As I sit here, thousands of miles away from you, my heart feels closer to yours than ever. These past months have been a beautiful testament to what we share - a love that transcends distance, time zones, and physical space.</p>
                    <p>Every video call, every text message, every "good morning" and "goodnight" has been a treasure. The way you smile through the screen brightens my darkest days. Your laughter, even through a phone speaker, is the most beautiful melody I've ever heard.</p>
                    <p>Long distance isn't easy. There are nights when I long to hold you, moments when I wish I could be there to wipe away your tears or share in your joy in person. But this distance has taught me something invaluable - it has shown me the depth of my love for you, the strength of our bond, and the certainty of my feelings.</p>
                    <p>You've become my home, no matter where in the world we are. When we talk, I'm home. When I see your face, I'm home. When I think of our future together, I'm home.</p>
                    <p>I count down the days until we meet again. I've been planning something special, something that will show you just how serious I am about us, about our future together. Let's just say... you might want to keep your left hand free when we next see each other. 💍✨</p>
                    <p>Until that moment comes, know that you are loved beyond measure. You are thought of constantly. You are cherished deeply. And you are missed profoundly.</p>
                    <p>Distance is just a test of how far love can travel. And ours? It's limitless.</p>
                    <p>Happy Valentine's Day, my beautiful Aileen. Soon, very soon, I hope to ask you to be something even more.</p>
                </div>
                <p className="letter-signature">Forever and always yours,<br />Your Babe ❤️</p>
            </div>
        </div>
    );
};

export default LetterOverlay;