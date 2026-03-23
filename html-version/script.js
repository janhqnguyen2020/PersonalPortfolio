// ==========================
// SMOOTH SCROLLING NAVIGATION
// ==========================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.navbar-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================
    // BACK TO TOP BUTTON
    // ==========================

    const backToTopBtn = document.querySelector('.back-to-top');

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            const topElement = document.getElementById('top');
            if (topElement) {
                topElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // ==========================
    // IMAGE CAROUSEL FOR PROJECTS
    // ==========================

    // Project 1 images
    const project0Images = [
        'assets/helloHealth1.png',
        'assets/helloHealth2.png',
        'assets/helloHealth3.png',
        'assets/helloHealth4.png'
    ];
    const project0Alts = [
        'HelloHealth App - Login screen',
        'HelloHealth App - Dashboard view',
        'HelloHealth App - Symptom reporting',
        'HelloHealth App - Medical terminology guide'
    ];

    // Project 2 images
    const project1Images = [
        'assets/anime1.png',
        'assets/anime2.png',
        'assets/anime3.png',
        'assets/anime4.png'
    ];
    const project1Alts = [
        'Anime Recommendation System - table of anime data',
        'Anime Recommendation System - sample anime metadata',
        'Anime Recommendation System - wordcloud of anime descriptions',
        'Anime Recommendation System - function to get anime recommendations'
    ];

    // Store current indices for each project
    const currentIndices = {
        0: 0,
        1: 0
    };

    // Function to update image for a specific project
    function updateImage(projectIndex, imageIndex) {
        const carousel = document.querySelector(`.imageCarousel[data-project="${projectIndex}"]`);
        const indicators = document.querySelectorAll(`.indicator[data-project="${projectIndex}"]`);

        if (!carousel) return;

        const img = carousel.querySelector('.projectImage');

        // Get the right images and alts array
        const images = projectIndex === 0 ? project0Images : project1Images;
        const alts = projectIndex === 0 ? project0Alts : project1Alts;

        // Update image
        img.src = images[imageIndex];
        img.alt = alts[imageIndex];

        // Update indicators
        indicators.forEach((indicator, idx) => {
            if (idx === imageIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });

        // Update stored index
        currentIndices[projectIndex] = imageIndex;
    }

    // Add click handlers to all indicators
    const allIndicators = document.querySelectorAll('.indicator');

    allIndicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const projectIndex = parseInt(this.getAttribute('data-project'));
            const imageIndex = parseInt(this.getAttribute('data-index'));
            updateImage(projectIndex, imageIndex);
        });
    });

    // ==========================
    // CONTACT FORM SUBMISSION
    // ==========================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const statusElement = document.getElementById('formStatus');

            try {
                const response = await fetch('https://formspree.io/f/mayvlrze', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    statusElement.textContent = 'Thanks for your message! Redirecting...';
                    statusElement.style.color = 'green';
                    contactForm.reset();

                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500);
                } else {
                    statusElement.textContent = 'Oops! There was a problem submitting your form.';
                    statusElement.style.color = 'red';
                }
            } catch (error) {
                statusElement.textContent = 'Oops! There was a problem submitting your form.';
                statusElement.style.color = 'red';
            }
        });
    }
});
