
const introContainer = document.querySelector('.intro__container');

const redFlash = document.querySelectorAll('.red-flash');

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        redFlash[0].style.animationName = 'red-flash';
    }, 6800);
});

function fadeIn(section, offset) {
    if (window.pageYOffset >= section.offsetTop - offset) {
        section.style.opacity = '1';
        section.style.transform = 'translate(0,0)';
    }
}

function redFlashAnim(section, index) {
    if (window.pageYOffset >= section.offsetTop - 900) {
        redFlash[index].style.animationName = 'red-flash';
    }
}

const slider = document.querySelector('.slider');
const aboutContainer = document.querySelector('.about__container');
const contactContainer = document.querySelector('.contact__container');

window.addEventListener('scroll', () => {
    fadeIn(slider, (-165));
    fadeIn(aboutContainer, 600);
    redFlashAnim(aboutContainer, 1);
    fadeIn(contactContainer, 600);
    redFlashAnim(contactContainer, 2);
});

console.log(window.pageYOffset);
console.log(slider.offsetTop);
