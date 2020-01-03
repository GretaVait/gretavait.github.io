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
    });
}