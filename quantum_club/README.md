# Quantum Club Website - Arizona State University

A modern, professional website for the Quantum Club at Arizona State University featuring advanced animations, video backgrounds, and interactive elements.

## 📁 Project Structure

```
quantum_club/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── style.css           # CSS styles and animations
├── README.md           # This file
└── assets/
    ├── images/
    │   ├── image.png
    │   └── image copy.png
    └── videos/
        ├── 1092359753-preview.mp4
        ├── 1095162475-preview.mp4
        ├── 3535732237-preview.mp4
        └── 3578960709-preview.mp4
```

## 🔗 File Links & Connections

### HTML (index.html)
- **Line 22**: Links to `style.css` for all styling
- **Line 416**: Links to `script.js` for all JavaScript functionality
- **Line 11**: Favicon link (./assets/img/favicon.ico)
- **Line 60**: Video source (./assets/videos/3535732237-preview.mp4)

### JavaScript (script.js)
- **Lines 92-97**: Video sources array with 4 video files
- **Line 748**: QuantumClubApp class initialization
- All DOM element references match HTML IDs correctly:
  - `loadingOverlay` (line 99)
  - `nextVideoBtn` (line 169)
  - `back-to-top` (line 170)
  - `contactForm` (line 171)

### CSS (style.css)
- Complete styling for all HTML elements
- Responsive design with media queries
- CSS custom properties (CSS variables) defined in `:root`
- Animations and transitions for interactive elements

## ✨ Features

1. **Loading Screen**: Animated loading overlay with spinner
2. **Video Background**: Auto-playing video with rotation functionality
3. **Navigation**: Fixed navbar with smooth scroll and mobile menu
4. **Hero Section**: Animated quantum atom visualization
5. **About Section**: Grid layout with animated cards
6. **Events Section**: Featured event cards with dates
7. **Team Section**: Member profiles with social links
8. **Resources Section**: Categorized learning materials
9. **Contact Form**: Functional contact form with validation
10. **Back to Top**: Smooth scroll to top button

## 🎨 Sections

1. **Home/Hero** - Video background with quantum atom animation
2. **About** - 4 feature cards (Education, Community, Research, Innovation)
3. **Events** - Upcoming events with featured badge
4. **Team** - Team member profiles
5. **Resources** - Learning materials and tools
6. **Contact** - Contact information and form
7. **Footer** - Quick links and social media

## 🎯 JavaScript Functionality

### Main Class: `QuantumClubApp`
- **Utility Functions**: debounce, throttle, isInViewport, smoothScrollTo
- **Navigation**: Mobile menu toggle, smooth scrolling, active link updates
- **Video Control**: Switch between 4 background videos
- **Form Handling**: Contact form validation and submission
- **Scroll Effects**: Navbar hide/show, parallax, intersection observer
- **Animations**: Ripple effect, typing effect, scroll animations
- **Accessibility**: Keyboard navigation, focus management, skip links

### Key Methods:
- `init()` - Initialize all components
- `setupEventListeners()` - Set up all event handlers
- `handleScroll()` - Handle scroll-based animations
- `switchVideo()` - Rotate background videos
- `handleFormSubmit()` - Process contact form
- `showNotification()` - Display success/error messages

## 🎨 CSS Structure

### CSS Variables (Lines 17-78)
- Color palette (primary, secondary, accent colors)
- Typography settings
- Spacing system
- Border radius values
- Transition timings

### Main Sections:
1. **Loading Screen** (Lines 111-167)
2. **Navigation** (Lines 171-296)
3. **Hero Section** (Lines 300-425)
4. **Quantum Atom** (Lines 429-563)
5. **Buttons** (Lines 567-649)
6. **About/Events/Team/Resources** (Lines 695-1011)
7. **Contact & Footer** (Lines 1013-1189)
8. **Animations** (Lines 1222-1297)
9. **Responsive Design** (Lines 1306-1439)
10. **Accessibility** (Lines 1444-1493)

## 🚀 How to Run

1. Open the `quantum_club` folder
2. Double-click `index.html` or open it in your browser
3. Alternatively, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
4. Navigate to `http://localhost:8000`

## 📱 Responsive Breakpoints

- **Desktop**: > 995px (Full navigation, multi-column layouts)
- **Tablet**: 768px - 995px (Adjusted navigation, responsive grids)
- **Mobile**: < 768px (Mobile menu, single-column layouts)
- **Small Mobile**: < 480px (Optimized for small screens)

## 🎯 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, Custom Properties)
- **JavaScript (ES6+)**: Classes, Arrow functions, Async/await
- **External Libraries**:
  - Google Fonts (Inter, JetBrains Mono)
  - Font Awesome 6.4.0 (Icons)

## ✅ Code Quality

- ✅ No linting errors
- ✅ Proper file naming conventions
- ✅ All links correctly connected
- ✅ Clean, organized code structure
- ✅ Comprehensive comments and documentation
- ✅ Responsive design
- ✅ Accessibility features included

## 📝 Notes

- All asset paths use relative paths (`./assets/...`)
- JavaScript is loaded at the end of body for optimal performance
- CSS uses modern features with fallbacks
- Form submission is simulated (replace with actual backend)
- Videos are stored locally in the assets folder

## 🎓 Learning Resources

This project demonstrates:
- Modern JavaScript (ES6+ classes, modules)
- Responsive CSS (Grid, Flexbox, Media Queries)
- CSS Animations and Transitions
- DOM Manipulation
- Event Handling
- Form Validation
- Accessibility Best Practices
