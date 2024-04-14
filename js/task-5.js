const changeColor = document.querySelector('.change-color');


const change = event => {

    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    
    const colorText = document.querySelector('.color');
    colorText.textContent = getRandomHexColor();
}

changeColor.addEventListener('click', change);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
