// MILESTONE DOT SCROLL SYNC + SAFE MOUSE WHEEL HANDLING

const milestoneWrapper = document.getElementById('milestoneWrapper');

if (milestoneWrapper) {
    const cards = milestoneWrapper.querySelectorAll('.milestone-card');
    const dots = document.querySelectorAll('.dot');
    const progressFill = document.getElementById('progressLineFill');

    milestoneWrapper.addEventListener('wheel', (event) => {
        const card = event.target.closest('.milestone-card');

        if (!card) {
            event.preventDefault();
            milestoneWrapper.scrollBy({
                left: event.deltaY,
                behavior: 'smooth'
            });
        }
    }, { passive: false });

    // Dot & progress bar logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(cards).indexOf(entry.target);
                dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
                if (progressFill) {
                    const progress = index / (dots.length - 1);
                    progressFill.style.width = `${progress * 100}%`;
                }
            }
        });
    }, {
        root: milestoneWrapper,
        threshold: 0.6
    });

    cards.forEach(card => observer.observe(card));
}

