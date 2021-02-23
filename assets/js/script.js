//---- TYPEWRITING EFFECT ----//
{
  const words = ["UX / UI Designer", "Front-End Developer"];
  let wordIndex = 0;
  let timer;
  
  function typingEffect() {
    let word = words[wordIndex].split("");
    var loopTyping = function() {
      if (word.length > 0) {
        document.querySelector('.typewriting').innerHTML += word.shift();
      } else {
        setTimeout(()=>{
          deletingEffect();
        }, 2000);
        return false;
      };
      timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
  };
  
  function deletingEffect() {
    let word = words[wordIndex].split("");
    var loopDeleting = function() {
      if (word.length > 0) {
        word.pop();
        document.querySelector('.typewriting').innerHTML = word.join("");
      } else {
        if (words.length > (wordIndex + 1)) {
          wordIndex++;
        } else {
          wordIndex = 0;
        };
        typingEffect();
        return false;
      };
      timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
  };

  typingEffect();
}

//---- NAVIGATION ----//
{
  const header = document.querySelector('header');
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu__open');
  const navPrimary = document.querySelector('#nav-primary');
  const navMobile = document.querySelector('#nav-mobile');

  menu.addEventListener('click', () => {
    navPrimary.classList.toggle('active');
    menuIcon.classList.toggle('menu__open--active');
    //
    header.classList.toggle('open');
    navMobile.classList.toggle('open');
  });
}
//---- NAVIGATION ----//
{
  const header = document.querySelector('header');

  const onChangeHeader = () => {
    if (window.pageYOffset >= 100) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }

  window.addEventListener('scroll', () => {
    onChangeHeader();
  });

  window.addEventListener('load', () => {
    onChangeHeader();
  });
}

//---- TABS TOGGLE ----//
{
  const tabs = document.querySelectorAll('a[href^="#tab"]');
  const tabContents = document.querySelectorAll('.work-row');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      removeActive();
      addActive(tab);
    });
  });

  const removeActive = () => {
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
  }

  const addActive = (tab) => {
    tab.classList.add('active');
    const tabContent = document.querySelector(`${tab.getAttribute("href")}`);
    tabContent.classList.add('active');
  }
}


/* ---- FILTER BUTTON SLIDER ---- */
function calcActiveLine(activeIndex, button, activeLine) {
  let offset = 0;
  for (let j = 0; j < activeIndex; j++) {
    offset += button[j].offsetWidth;
  }
  activeLine.style.transform = `translateX(${offset}px)`;
  activeLine.style.width = button[activeIndex].offsetWidth + 'px';
}

const filterBtns = document.querySelectorAll('.js-filter-btn');
const filterBtnActiveLine = document.querySelector('.js-active-line');
const filterBtnActive = document.querySelector('.js-filter-btn.active');
let activeFilterIndex = 0;

if (filterBtns.length != 0) {
  for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener('click', function() {
      activeFilterIndex = i;
      calcActiveLine(activeFilterIndex, filterBtns, filterBtnActiveLine);
    });
  }

  window.addEventListener('resize', function () {
    filterBtnActiveLine.style.width = filterBtnActive.offsetWidth + 'px';
    for (let i = 0; i < filterBtns.length; i++) {
      calcActiveLine(activeFilterIndex, filterBtns, filterBtnActiveLine);
    }
    filterBtns.forEach((btn, index) => {
      if (btn.classList.contains('filter__btn--active')) {
        calcActiveLine(index, filterBtns, filterBtnActiveLine);
      }
    });
  });

  window.addEventListener('load', function () {
    filterBtnActiveLine.style.width = filterBtnActive.offsetWidth + 'px';
    filterBtns.forEach((btn, index) => {
      if (btn.classList.contains('filter__btn--active')) {
        calcActiveLine(index, filterBtns, filterBtnActiveLine);
      }
    });
  });
}