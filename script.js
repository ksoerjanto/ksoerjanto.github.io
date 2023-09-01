let menuOverlay = document.getElementById('menu-overlay');
let image1 = document.getElementById('image-1');
let downArrow = document.getElementById('arrow-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        downArrow.style.opacity = '0';
    }
});

function toggleMenu(event) {
    if (!menuOverlay.style.height || menuOverlay.style.height === '0vh') {
        menuOverlay.style.height = '100vh';
    } else {
        menuOverlay.style.height = '0vh';
    }
};
