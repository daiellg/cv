let x = 0;
let y = 0;
let spacing = 35;
let canvas;
let timer = 1000;
let nextChange = timer;

// var speed = 0.000001;
let step = 0.5;
let size = 45;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
	canvas.style('z-index', '-1');
	noLoop();
	// pattern();
	// redrawd();
}

function draw() {
	background('#101010');
	pattern();
	

	// for (x = 0; x < width; x += size)
	// 	for (y = 0; y < height; y += size) {
	// 		var n = noise(x * step, y * step);
	// 		stroke('#f5f5f5');
	// 		strokeWeight(1);
	// 		// if (n > 0.45 && n < 0.55) stroke(114, 114, 116);
	// 		// if (n > 0.48 && n < 0.52) stroke(188, 26, 58);

	// 			if (n < 0.5) {
	// 				line(x, y, x + size, y + size);
	// 			} else {
	// 				line(x, y + size, x + size, y);
	// 			}
	// 			// t += speed;
	// 	}
}

function mousePressed() {
	redraw();
}

// function pattern() {
// 	// background('#1c1c1c');
// 	// stroke('#f5f5f5');
// 	// strokeWeight(1);
// 	// if (random(1) < 0.5) {
// 	// 	line(x, y, x + spacing, y + spacing);
// 	// } else {
// 	// 	line(x, y + spacing, x + spacing, y);
// 	// }
// 	// x = x + spacing;
// 	// if (x > width) {
// 	// 	x = 0;
// 	// 	y = y + spacing;
// 	// }
// }

function pattern() {
	for (x = 0; x < width; x += size)
		for (y = 0; y < height; y += size) {
			var n = noise(x * step, y * step);
			stroke('#f5f5f5');
			strokeWeight(1);
			// if (n > 0.45 && n < 0.55) stroke(114, 114, 116);
			// if (n > 0.48 && n < 0.52) stroke(188, 26, 58);

			if (n < 0.5) {
				line(x, y, x + size, y + size);
			} else {
				line(x, y + size, x + size, y);
			}
			// t += speed;
		}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
