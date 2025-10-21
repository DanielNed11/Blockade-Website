// Infinite confetti celebration using requestAnimationFrame
window.addEventListener('load', () => {
    const colors = ['#D23624', '#FBCE9D', '#FCE388', '#7A170D', '#DC6341'];

    (function frame() {
        confetti({
            particleCount: 8,
            angle: 60,
            spread: 70,
            origin: { x: 0 },
            colors: colors,
            scalar: 1.4,
            ticks: 200
        });
        confetti({
            particleCount: 8,
            angle: 120,
            spread: 70,
            origin: { x: 1 },
            colors: colors,
            scalar: 1.4,
            ticks: 200
        });

        requestAnimationFrame(frame); // no end condition — runs forever
    })();
});


