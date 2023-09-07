const downArrow = document.getElementById('arrow-container');
const containers = document.querySelectorAll('.info-container');

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

for (let i = 0; i < containers.length; i++) {
    const elements = containers[i];
    observer.observe(elements);
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 20 && downArrow) {
        downArrow.style.opacity = '0';
    }
});