const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animations');
        }
        else {
            entry.target.classList.remove('scroll-animations');
        }
    });
}, { threshold: 0.5 });

for (let i = 0; i < cards.length; i++) {
    const elements = cards[i];
    observer.observe(elements);
}