let menuOverlay = document.getElementById('menu-overlay');

function toggleMenu(event) {
    console.log('togglemenu');
    if (!menuOverlay.style.height || menuOverlay.style.height === '0vh') {
        menuOverlay.style.height = '100vh';
    } else {
        menuOverlay.style.height = '0vh';
    }
    
};
