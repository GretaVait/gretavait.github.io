//---- TYPEWRITING EFFECT ----//
{
  const words = ["Web Designer", "Front-End Developer"];
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
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu__open');
  const navPrimary = document.querySelector('#nav-primary');
  const navMobile = document.querySelector('#nav-mobile');
  const navItems = document.querySelectorAll('#nav-mobile a[href^="#"]');

  menu.addEventListener('click', () => {
    navPrimary.classList.toggle('active');
    menuIcon.classList.toggle('menu__open--active');
    //
    header.classList.toggle('open');
    navMobile.classList.toggle('open');
    body.classList.toggle('disable');
  });

  // console.log(navItem);
  window.addEventListener('click', function(e){  
    navItems.forEach(item => {
      if (item.contains(e.target)){
        header.classList.remove('open');
        navMobile.classList.remove('open');
        body.classList.remove('disable');
        menuIcon.classList.remove('menu__open--active');
      }
    }); 
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

//---- ANIMATIONS ----//
const scrollController = new ScrollMagic.Controller();
const debug = false;
const triggerHook = 0.8;
{
  //
  header();
  introAnimations();
  workAnimations();
  aboutAnimation();
  contactAnimation();
  //
  function header() {
    const triggerElement = document.querySelector('header');

    const tl = gsap.timeline();
    tl.to(triggerElement, {
      duration: 0, 
      opacity: 0,
      y: 20
    });
    //--
    tl.to(triggerElement, {
      duration: 0.8, 
      opacity: 1,
      y: 0
    }); 

    animate(triggerElement, tl);
  }
  function introAnimations() {
    const triggerElement = document.querySelector('#intro');

    const tl = gsap.timeline();
    tl.to(triggerElement, {
      duration: 0, 
      opacity: 0,
      y: 20
    });
    //--
    tl.to(triggerElement, {
      duration: 0.8, 
      opacity: 1,
      y: 0
    }); 

    animate(triggerElement, tl);
  }
  function workAnimations() {
    const triggerElement = document.querySelector('#work');
    const workToggle = triggerElement.querySelector('.js-work-toggle');
    const workItem = triggerElement.querySelectorAll('.js-work-item');

    const tl = gsap.timeline();
    tl.to(workToggle, {
      duration: 0, 
      opacity: 0,
      y: 20
    });
    for(let i = 0; i < workItem.length; i++) {
      tl.to(workItem[i], {
        duration: 0, 
        opacity: 0
      });      
    }
    //--
    tl.to(workToggle, {
      duration: 0.8, 
      opacity: 1,
      y: 0
    });  
    for(let i = 0; i < workItem.length; i++) {
      tl.to(workItem[i], {
        duration: 0.8, 
        opacity: 1
      }, "-=0.7");      
    }

    animate(triggerElement, tl);
  }
  function aboutAnimation() {
    const triggerElement = document.querySelector('#about');
    const aboutDescription = triggerElement.querySelector('.js-about-description');
    const aboutCards = triggerElement.querySelectorAll('.js-about-card');

    const tl = gsap.timeline();
    tl.to(aboutDescription, {
      duration: 0, 
      opacity: 0,
      y: 20
    });
    for(let i = 0; i < aboutCards.length; i++) {
      tl.to(aboutCards[i], {
        duration: 0, 
        opacity: 0,
        y: 20
      });      
    }
    //--
    tl.to(aboutDescription, {
      duration: 0.8, 
      opacity: 1,
      y: 0
    });
    for(let i = 0; i < aboutCards.length; i++) {
      tl.to(aboutCards[i], {
        duration: 0.8, 
        opacity: 1,
        y: 0
      }, "-=0.7");      
    }
    
    animate(triggerElement, tl);
  }
  function contactAnimation() {
    const triggerElement = document.querySelector('#contact');
    const contactTitle = triggerElement.querySelector('.js-contact-title');
    const contactItems = triggerElement.querySelectorAll('.js-contact-item');
    const contactContent = triggerElement.querySelectorAll('.js-contact-content');

    const tl = gsap.timeline();
    tl.to(contactTitle, {
      duration: 0, 
      opacity: 0,
      y: 20
    });
    for(let i = 0; i < contactItems.length; i++) {
      tl.to(contactItems[i], {
        duration: 0, 
        opacity: 0,
        y: 20
      });      
    }
    tl.to(contactContent, {
      duration: 0, 
      opacity: 0,
      y: 20
    });
    //--
    tl.to(contactTitle, {
      duration: 0.8, 
      opacity: 1,
      y: 0
    });
    for(let i = 0; i < contactItems.length; i++) {
      tl.to(contactItems[i], {
        duration: 0.8, 
        opacity: 1,
        y: 0
      }, "-=0.7");      
    }
    tl.to(contactContent, {
      duration: 0.8, 
      opacity: 1,
      y: 0
    }, "-=0.7");

    animate(triggerElement, tl);
  }

}

// Animation functions
function addClass(triggerElement) {
  const scene = new ScrollMagic.Scene({
    reverse: false,
    triggerHook: triggerHook,
    triggerElement: triggerElement
  })
  .setClassToggle(triggerElement, "revealed")
  .addTo(scrollController);
  
  if(debug)
  {
    scene.addIndicators();
  }
}

function animate(triggerElement, tl) {
  const scene = new ScrollMagic.Scene({
    reverse: false,
    triggerHook: triggerHook,
    triggerElement: triggerElement
  })
  .setTween(tl)
  .addTo(scrollController);
  
  if(debug)
  {
    scene.addIndicators();
  }
}