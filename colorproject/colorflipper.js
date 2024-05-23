const btn = document.getElementById('button');
const display = document.getElementById('display');

btn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const red = getRandomColorValue();
    const green = getRandomColorValue();
    const blue = getRandomColorValue();

    const hexColor = rgbToHex(red, green, blue);

    document.body.style.backgroundColor = hexColor;
    display.innerHTML = `<h1>Background Color: ${hexColor}</h1>`;
}

function getRandomColorValue() {
    return Math.floor(Math.random() * 256);
}

function rgbToHex(r, g, b) {
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function toHex(value) {
    return value.toString(16).padStart(2, '0');
}
