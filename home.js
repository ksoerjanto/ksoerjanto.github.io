const downArrow = document.getElementById('arrow-container');
const headingText = document.getElementById('heading');
const introImg = document.getElementById('image-1');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20 && downArrow) {
        downArrow.style.opacity = '0';
    }

    let scrollSlow = window.scrollY / 5;
    let imgWidth =  40 - Math.min(scrollSlow, 15);

    //Changing CSS Width
    introImg.style.width = imgWidth + "vw";
});