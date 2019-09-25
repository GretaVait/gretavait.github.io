const toggleMenu = document.querySelector('.toggle-menu img');
const nav = document.querySelector('nav');
const modal = document.querySelector('.modal');
const projectList = document.querySelector('.project-list');
const closeBtn = document.querySelector('.close');
const h2 = document.querySelector('.work-info h2');
const span = document.querySelector('.work-info span');
const a = document.querySelector('.work-info a');
const p = document.querySelector('.overview p');

toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

projectList.addEventListener('click', (event) => {
    if (event.target.parentElement.nodeName === 'LI') {
        modal.classList.toggle('modal-open');
        const id = event.target.parentElement.id;
        h2.innerHTML = projects[id].name;
        span.innerHTML = projects[id].language;
        p.innerHTML = projects[id].overview;
        a.href = projects[id].website;
    }
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal-open');
});

