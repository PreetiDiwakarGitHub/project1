
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
let counter = 0;

// Function to initialize slider
function initSlider() {
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });
    updateButtons();
}

// Function to handle next button click
function handleNext() {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    updateSlider();
    updateButtons();
}

// Function to handle previous button click
function handlePrev() {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    updateSlider();
    updateButtons();
}

// Function to update slider position
function updateSlider() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

// Function to update button visibility
function updateButtons() {
    if (counter === 0) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    } else if (counter === slides.length - 1) {
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';
    }
}

// Event listeners for buttons
nextBtn.addEventListener('click', handleNext);
prevBtn.addEventListener('click', handlePrev);

// Initialize slider
initSlider();

