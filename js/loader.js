let body = document.querySelector('body'),
    loader = document.querySelector('.loader');
    // bar = document.querySelector('.progress-bar'),
    counter = document.querySelector('.count'),
    i = 0,
    throttle = 0.7; // 0-1

(function draw() {
  if(i <= 100) {
    var r = Math.random();
    
    requestAnimationFrame(draw);  
    // bar.style.width = i + '%';
    counter.innerHTML = Math.round(i) + '%';
    
    if(r < throttle) { // Simulate d/l speed and uneven bitrate
      i = i + r;
    }
  } else {;
    loader.className += " done";
  }
})();