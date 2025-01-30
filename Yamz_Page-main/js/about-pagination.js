const dots = document.querySelectorAll('.dot');
const scrollContainer = document.querySelector('.scroll-container');
const sections = document.querySelectorAll('.scroll-section');

// Add click event listeners to the dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        scrollContainer.scrollTo({
            left: index * window.innerWidth, // Scroll to the corresponding section
            behavior: 'smooth',
        });
        updateActiveDot(index); // Update the active dot
    });
});

// Function to update the active dot based on the section index
function updateActiveDot(activeIndex) {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

// Detect scroll position to update active dot dynamically
scrollContainer.addEventListener('scroll', () => {
    const scrollLeft = scrollContainer.scrollLeft;
    const sectionIndex = Math.round(scrollLeft / window.innerWidth);
    updateActiveDot(sectionIndex);
});