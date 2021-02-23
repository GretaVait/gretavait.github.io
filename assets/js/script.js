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