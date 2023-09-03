const navBar = document.getElementById('nav-bar');
const menuOverlay = document.getElementById('menu-overlay');

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function toggleMenu(event) {
    if (!menuOverlay.style.height || menuOverlay.style.height === '0vh') {
        menuOverlay.style.height = '100vh';
        navBar.style.backgroundColor = '#d3edb9';
    } else {
        menuOverlay.style.height = '0vh';
        navBar.style.backgroundColor = '#fcf0cc';
    }
};
