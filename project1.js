let btn = document.getElementById('btn');
let display = document.getElementById('display');

btn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let hexColor = rgbToHex(red, green, blue);

    document.body.style.backgroundColor = hexColor;
    display.innerHTML = `<h1>Backgound Color: ${hexColor}</h1>`;
}

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

