# Our Love Timeline

## Project Overview
The "Our Love Timeline" is an interactive, single-file web application that chronicles a romantic relationship through an engaging slideshow timeline. It features a visually compelling album cover intro, 12 monthly timeline slides (March 2025–February 2026), an interactive letter envelope with romantic content, and a closing page with restart functionality.

**Status**: ✅ Fully functional with responsive design and smooth animations.

## Features
- **Album Cover Intro**: Visually striking opening with animated transition
- **12 Timeline Slides**: Monthly milestones from March 2025 to February 2026
- **Floating Hearts Animation**: Continuous romantic background animation
- **Interactive Letter Envelope**: Modal-style letter with dramatic opening animation
- **Multiple Navigation Methods**: Timeline dots, arrow keys, touch swipes, and click navigation
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Accessibility Support**: Respects `prefers-reduced-motion` system preference
- **Smooth Transitions**: Professional CSS animations throughout

## Technologies
- **HTML5**: Single consolidated file structure
- **CSS3**: Modern features including Flexbox, Grid, Animations, and Media Queries
- **Vanilla JavaScript**: No frameworks; pure DOM manipulation

## File Structure
```
our-love-timeline/
├── src/
│   ├── index.html (1927 lines - all code consolidated)
│   └── assets/ (fonts, audio placeholders)
├── package.json
└── README.md
```

## Installation & Setup
```bash
# Install dependencies
npm install

# Start development server
npm start
# Available at http://127.0.0.1:8080
```

## Usage
- **Navigation**: Timeline dots, arrow keys (← →), or touch swipes (mobile)
- **Letter**: Click the envelope on month 13 to read the letter
- **Restart**: Click "Relive Our Journey" button on the closing page


### Quick Summary
- ✅ **Strengths**: Responsive design, smooth animations, good accessibility, consolidated architecture
- ⚠️ **Areas for Improvement**: Dead code (Spotify system), global variable pollution, CSS organization, documentation
- 📋 **Recommended Actions**: Remove unused Spotify system, implement heart element limit, add defensive DOM checks

## Recent Updates
- ✅ Mobile timeline centering with scroll-snap
- ✅ Responsive design for all breakpoints
- ✅ Dramatic letter animation (1.6s envelope, 1.2s content reveal)
- ✅ Accessibility support for `prefers-reduced-motion`
- ✅ Code recovery and cleanup

## Contributing
Test changes across mobile (480px), tablet (768px), and desktop (1920px) breakpoints.

## License
MIT - Feel free to customize and share.

---

**Built**: February 2026 | **Created with**: ❤️ + HTML5 + CSS3 + JavaScript
