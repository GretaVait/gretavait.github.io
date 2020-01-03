const btnToTop = document.querySelector('.to-top');
document.addEventListener('scroll', ()=>{
    if (window.pageYOffset >= 200) {
        btnToTop.style.transform = 'translate(0, 0)';
    } else if (window.pageYOffset < 200) {
        btnToTop.style.transform = 'translate(0, 150%)';
    }
});

btnToTop.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

$(document).ready(function(){
    $('.slider').slick();
});