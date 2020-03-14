let x = 0;
let y = 0;
let spacing = 25;
var canvas;

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    background('#1c1c1c');
    
}

function draw() {
    stroke('#ffffff');
    strokeWeight(1);
    if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing);
}    else {
    line(x, y + spacing, x + spacing, y);
}
    x = x + spacing;
    if (x > width) {
        x = 0;
        y = y + spacing;
    }
} 