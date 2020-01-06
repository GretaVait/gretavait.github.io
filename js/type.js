const words = ["I build websites", "I create wireframes", "I love responsive design"];
let wordIndex = 0;
let timer;

function typingEffect() {
	let word = words[wordIndex].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.querySelector('.typewriter').innerHTML += word.shift();
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
			document.querySelector('.typewriter').innerHTML = word.join("");
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

setTimeout(()=>{
	typingEffect();
}, 1050)