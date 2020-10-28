//---- SWIPER ----//
const workSlider = new Swiper('.work__slider', {
  navigation: {
    nextEl: '.work__slider__arrow--next',
    prevEl: '.work__slider__arrow--prev',
  }
});

//---- TYPEWRITING EFFECT ----//
{
  const words = ["I build websites", "I create wireframes", "I love responsive design"];
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
}

// {
//   const Scrollbar = window.Scrollbar;

//   Scrollbar.init(document.querySelector('#my-scrollbar'));
// }

//typingEffect();

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

//---- INPUTS FOCUS OUT STATE ----//
{
  const inputs = document.querySelectorAll('input');
  const textarea = document.querySelector('textarea');
  const label = document.querySelectorAll('label');

  inputs.forEach(function(input, index) {
    input.addEventListener('focusout', (e) => {
      if (e.target.value != '') {
        label[index].classList.add('active');
      } else {
        label[index].classList.remove('active');
      }
    });
  });

  textarea.addEventListener('focusout', (e) => {
    console.log(e.target.value);
    if (e.target.value != '') {
      label[2].classList.add('active');
    } else {
      label[2].classList.remove('active');
    }
  });
}

//---- ANIMATIONS ----//
const scrollController = new ScrollMagic.Controller();
const debug = false;
const triggerHook = 0.8;
{
  //
  introAnimations();
  workAnimations();
  aboutAnimation();
  contactAnimation();
  //
  function introAnimations() {
    const triggerElement = document.querySelector('#intro');
    const secondHeading = triggerElement.querySelectorAll('h2');
    const redFlash = triggerElement.querySelector('.red-flash');

    addClass(secondHeading);
    addClass(redFlash);
  }
  function workAnimations() {
    const triggerElement = document.querySelector('#work');
    const images = triggerElement.querySelectorAll('.work__slider__img');
    const headings = triggerElement.querySelectorAll('.h1--mono');
    const btns = triggerElement.querySelectorAll('.btn');
    const redFlash = triggerElement.querySelector('.red-flash');

    const tl = gsap.timeline();
    for(let i = 0; i < headings.length; i++) {
      tl.to(headings[i], {
        duration: 0, 
        opacity: 0,
        y: 20
      });      
    }
    for(let i = 0; i < btns.length; i++) {
      tl.to(btns[i], {
        duration: 0, 
        opacity: 0,
        y: (i+1)*20
      });
    }
    //--
    for(let i = 0; i < headings.length; i++) {
      tl.to(headings[i], {
        duration: 0.8, 
        opacity: 1,
        y: 0
      });      
    }
    for(let i = 0; i < btns.length; i++) {
      tl.to(btns[i], {
        duration: 0.8, 
        opacity: 1,
        y: 0
      }, "-=0.7");      
    }

    addClass(redFlash);
    addClass(images);
    animate(triggerElement, tl);
  }
  function aboutAnimation() {
    const triggerElement = document.querySelector('#about');
    const paragraph = triggerElement.querySelector('p');
    const aboutCard = triggerElement.querySelectorAll('.about__card');
    const cardHeading = triggerElement.querySelectorAll('h2');
    const cardList = triggerElement.querySelectorAll('.about__card__list');
    const redFlash = triggerElement.querySelector('.red-flash');

    const tl = gsap.timeline();
    tl.to(paragraph, {
      duration: 0, 
      opacity: 0,
      y: 20
    });
    for(let i = 0; i < cardList.length; i++) {
      tl.to(cardList[i], {
        duration: 0, 
        opacity: 0,
        y: (i+1)*20
      });      
    }
    //--
    tl.to(paragraph, {
      duration: 0.8, 
      opacity: 1,
      y: 0
    });
    for(let i = 0; i < cardList.length; i++) {
      tl.to(cardList[i], {
        duration: 0.8, 
        opacity: 1,
        y: 0
      }, "-=0.7");      
    }

    addClass(redFlash);
    addClass(cardHeading);
    addClass(aboutCard);
    animate(triggerElement, tl);
  }
  function contactAnimation() {
    const triggerElement = document.querySelector('#contact');
    const headings = triggerElement.querySelectorAll('h2');
    const contactList = triggerElement.querySelector('ul');
    const contactForm = triggerElement.querySelector('form');
    const formBtn = triggerElement.querySelector('.btn');
    const redFlash = triggerElement.querySelector('.red-flash');

    const tl = gsap.timeline();
    tl.to(contactList, {
      duration: 0, 
      opacity: 0,
      y: 20
    });
    tl.to(contactForm, {
      duration: 0, 
      opacity: 0,
      y: 20
    });
    tl.to(formBtn, {
      duration: 0, 
      opacity: 0,
      y: 20
    });
    //--
    tl.to(contactList, {
      duration: 0.8, 
      opacity: 1,
      y: 0
    });
    tl.to(contactForm, {
      duration: 0.8, 
      opacity: 1,
      y: 0
    }, "-=0.7");
    tl.to(formBtn, {
      duration: 0.8, 
      opacity: 1,
      y: 0
    }, "-=0.7");

    addClass(redFlash);
    addClass(headings);
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