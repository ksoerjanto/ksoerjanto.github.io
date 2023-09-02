const cards = document.querySelectorAll('.card');

console.log(cards.length);
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log('isIntersecting');
            entry.target.classList.add('scroll-animations');
        }
        else {
            console.log('is not intersecting');
            entry.target.classList.remove('scroll-animation');
        }
    });
}, { threshold: 0.3 });

for (let i = 0; i < cards.length; i++) {
    const elements = cards[i];
    observer.observe(elements);
}