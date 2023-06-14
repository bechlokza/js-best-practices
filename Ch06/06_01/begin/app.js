'use strict';

const selection = 'chill';

const palettes = {
	bright: ['yellowgreen', 'fuchsia'],
	neutral: ['burlywood', 'slategray'],
	chill: ['slateblue', 'palevioletred'],
};

//const selectedColors = eval('palettes.' + selection);
console.log('Color 1:', palettes[selection][0]);
console.log('Color 2:', palettes[selection][1]);

//setTimeout("document.querySelector('body').classList.add(selection);", 2000);

setTimeout(() => {
	document.querySelector('body').classList.add(selection);
}, 2000);
