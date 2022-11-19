let x = 0;
let y = 0;
let spacing = 35;
let canvas;
let step = 0.5;
let size = 45;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
	canvas.style('z-index', '-1');
}

function draw() {
	background('#2E3440');
	for (x = 0; x < width; x += size)
		for (y = 0; y < height; y += size) {
			var n = noise(x * step, y * step);
			stroke('#ECEFF4');
			strokeWeight(2);
			if (n < 0.5) {
				line(x, y, x + size, y + size);
			} else {
				line(x, y + size, x + size, y);
			}
		}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
