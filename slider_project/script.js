/**
 * Image Slider Project
 * A responsive image slider with navigation controls
 */

class ImageSlider {
    constructor() {
        this.currentIndex = 0;
        this.images = [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop'
        ];
        this.titles = [
            'Mountain Landscape',
            'Forest Path',
            'Autumn Trees',
            'Ocean Waves',
            'Mountain Lake'
        ];
        this.init();
    }

    init() {
        this.createSlider();
        this.updateSlider();
        this.autoSlide();
    }

    createSlider() {
        const body = document.body;
        body.innerHTML = `
            <div class="slider-container">
                <h1 class="slider-title">Nature Image Slider</h1>
                <div class="slider-wrapper">
                    <div class="slider">
                        <div class="slider-image">
                            <img id="sliderImg" src="" alt="Slider Image">
                        </div>
                        <div class="slider-content">
                            <h2 id="sliderTitle">Image Title</h2>
                            <div class="slider-indicators">
                                <span class="indicator active" data-index="0"></span>
                            </div>
                        </div>
                    </div>
                    <button class="slider-btn prev" onclick="slider.previous()">‹</button>
                    <button class="slider-btn next" onclick="slider.next()">›</button>
                </div>
                <div class="slider-controls">
                    <button class="control-btn" onclick="slider.playPause()">⏸️</button>
                    <button class="control-btn" onclick="slider.reset()">🔄</button>
                </div>
            </div>
        `;

        // Add CSS styles
        const style = document.createElement('style');
        style.textContent = `
            body {
                margin: 0;
                padding: 0;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            
            .slider-container {
                max-width: 1000px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
            
            .slider-title {
                color: white;
                font-size: 2.5rem;
                margin-bottom: 2rem;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            }
            
            .slider-wrapper {
                position: relative;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            }
            
            .slider {
                position: relative;
                width: 100%;
                height: 500px;
                overflow: hidden;
            }
            
            .slider-image {
                width: 100%;
                height: 100%;
                position: relative;
            }
            
            .slider-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;
            }
            
            .slider-content {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
                color: white;
                padding: 2rem;
                text-align: center;
            }
            
            .slider-content h2 {
                font-size: 2rem;
                margin: 0 0 1rem 0;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }
            
            .slider-indicators {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin-top: 1rem;
            }
            
            .indicator {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .indicator.active {
                background: white;
                transform: scale(1.2);
            }
            
            .slider-btn {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(255, 255, 255, 0.9);
                border: none;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                font-size: 24px;
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 10;
            }
            
            .slider-btn:hover {
                background: white;
                transform: translateY(-50%) scale(1.1);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
            
            .prev {
                left: 20px;
            }
            
            .next {
                right: 20px;
            }
            
            .slider-controls {
                margin-top: 2rem;
                display: flex;
                justify-content: center;
                gap: 20px;
            }
            
            .control-btn {
                background: rgba(255, 255, 255, 0.9);
                border: none;
                padding: 15px 25px;
                border-radius: 25px;
                font-size: 18px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .control-btn:hover {
                background: white;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
            
            @media (max-width: 768px) {
                .slider-title {
                    font-size: 2rem;
                }
                
                .slider {
                    height: 300px;
                }
                
                .slider-content h2 {
                    font-size: 1.5rem;
                }
                
                .slider-btn {
                    width: 40px;
                    height: 40px;
                    font-size: 20px;
                }
            }
        `;
        document.head.appendChild(style);

        // Create indicators
        this.createIndicators();
    }

    createIndicators() {
        const indicatorsContainer = document.querySelector('.slider-indicators');
        indicatorsContainer.innerHTML = '';
        
        this.images.forEach((_, index) => {
            const indicator = document.createElement('span');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.setAttribute('data-index', index);
            indicator.onclick = () => this.goToSlide(index);
            indicatorsContainer.appendChild(indicator);
        });
    }

    updateSlider() {
        const img = document.getElementById('sliderImg');
        const title = document.getElementById('sliderTitle');
        const indicators = document.querySelectorAll('.indicator');

        if (img && title) {
            img.src = this.images[this.currentIndex];
            img.alt = this.titles[this.currentIndex];
            title.textContent = this.titles[this.currentIndex];
        }

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateSlider();
    }

    previous() {
        this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
        this.updateSlider();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlider();
    }

    autoSlide() {
        this.intervalId = setInterval(() => {
            this.next();
        }, 4000);
    }

    playPause() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        } else {
            this.autoSlide();
        }
    }

    reset() {
        this.currentIndex = 0;
        this.updateSlider();
        this.playPause();
        this.autoSlide();
    }
}

// Initialize slider when page loads
let slider;
document.addEventListener('DOMContentLoaded', () => {
    slider = new ImageSlider();
});
