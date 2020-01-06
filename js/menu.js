const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const navLink = nav.querySelectorAll('.nav__link');
const lines = document.querySelectorAll('.line');

menu.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    for (let i = 0; i < lines.length; i++) {
        lines[i].classList.toggle('active');
    }
    lines[0].classList.toggle('first');
    lines[1].classList.toggle('second');
    lines[2].classList.toggle('third');
});

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', ()=>{
        nav.classList.remove('active');
        lines[0].classList.remove('first');
        lines[1].classList.remove('second');
        lines[2].classList.remove('third');
        for (let j = 0; j < lines.length; j++) {
            lines[j].classList.remove('active');
        }
    });
}