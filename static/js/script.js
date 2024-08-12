// Below will come into play as more projects are completed

// Start the side at the first item
let currentSlide = 0;
// Select all carousel items and store them in the slide
const slides = document.querySelectorAll('.carousel-item');

// Show slide at given index
function showSlide(index) {
    // Iterate each slide
    slides.forEach((slide, i) => {
        // Remove active class from each item
        slide.classList.remove('active');
        // Add active class to the slide that matches given index
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    // Increment the current slide index and wrap it around if ti exceeds the number
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    // Decrement the slide index and wrap it around if it goes below 0
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Call to show the first slide when the page loads
showSlide(currentSlide);