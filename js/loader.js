let body = document.querySelector('body'),
    loader = document.querySelector('.loader');
    counter = document.querySelector('.count'),
    i = 0,
    throttle = 1; // 0-1

// (function draw() {
//   if(i <= 100) {
//     var r = Math.random();
    
//     requestAnimationFrame(draw);
//     counter.innerHTML = Math.round(i) + '%';
    
//     if(r < throttle) { // Simulate d/l speed and uneven bitrate
//       i = i + r;
//     }
//   } else {;
//     loader.className += " done";
//   }
// })();

setTimeout(() => {
  loader.style.opacity = '0';
  loader.style.pointerEvents = 'none';
}, 2000);