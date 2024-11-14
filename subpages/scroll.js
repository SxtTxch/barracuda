document.addEventListener("DOMContentLoaded", function() {
    // Scroll animacje
    const scrollElements = document.querySelectorAll('.scroll-animate');

    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, observerOptions);

    scrollElements.forEach(element => observer.observe(element));
});