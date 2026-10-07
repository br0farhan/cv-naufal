document.addEventListener('DOMContentLoaded', () => {
    // Advanced Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed so it doesn't animate out and in again
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Parallax effect for the hero image
    const heroImage = document.querySelector('.hero-image');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if(heroImage && scrolled < window.innerHeight) {
            // Slight downward movement as you scroll down
            heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    });
});
