const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
    const amount = input.valueAsNumber;
    if (amount < 1 || amount > 100 || isNaN(amount)) {
        alert('Please enter a number between 1 and 100.');
        return;
    }

    const boxes = [];
    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
    }

    boxesContainer.append(...boxes);
    input.value = '';
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
