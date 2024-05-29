const textEl = document.getElementById('text');
const userTextEl = document.getElementById('userText');
const speedValueEl = document.getElementById('speedValue');
const sizeValueEl = document.getElementById('sizeValue');
const increaseSpeedBtn = document.getElementById('increaseSpeed');
const decreaseSpeedBtn = document.getElementById('decreaseSpeed');
const increaseSizeBtn = document.getElementById('increaseSize');
const decreaseSizeBtn = document.getElementById('decreaseSize');

let text = "Enter your text to see the animation";
let idx = 1;
let speed = 300 / parseInt(speedValueEl.textContent);
let size = parseInt(sizeValueEl.textContent) + "px";

writeText();

function writeText() {
    textEl.style.fontSize = size;
    textEl.innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
        idx = 1;
    }
    setTimeout(writeText, speed);
}

increaseSpeedBtn.addEventListener('click', () => {
    let speedValue = parseInt(speedValueEl.textContent);
    if (speedValue < 10) {
        speedValue++;
        speedValueEl.textContent = speedValue;
        speed = 300 / speedValue;
    }
});

decreaseSpeedBtn.addEventListener('click', () => {
    let speedValue = parseInt(speedValueEl.textContent);
    if (speedValue > 1) {
        speedValue--;
        speedValueEl.textContent = speedValue;
        speed = 300 / speedValue;
    }
});

increaseSizeBtn.addEventListener('click', () => {
    let sizeValue = parseInt(sizeValueEl.textContent);
    if (sizeValue < 100) {
        sizeValue++;
        sizeValueEl.textContent = sizeValue;
        size = sizeValue + "px";
        textEl.style.color = getRandomColor();
    }
});

decreaseSizeBtn.addEventListener('click', () => {
    let sizeValue = parseInt(sizeValueEl.textContent);
    if (sizeValue > 10) {
        sizeValue--;
        sizeValueEl.textContent = sizeValue;
        size = sizeValue + "px";
        textEl.style.color = getRandomColor();
    }
});

userTextEl.addEventListener('input', (e) => {
    text = e.target.value;
    idx = 1;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
